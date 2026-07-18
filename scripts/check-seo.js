'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const origin = 'https://prometo.app';
const ignoredDirectories = new Set([
  '.git', '.codex', '.vercel', 'node_modules', 'experiments', 'graphify-out',
  'marketing-assets', 'tools'
]);
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolute);
    return entry.isFile() && entry.name.endsWith('.html') ? [absolute] : [];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join('/');
}

function urlForFile(file) {
  const rel = relative(file);
  if (rel === 'index.html') return `${origin}/`;
  if (rel.endsWith('/index.html')) return `${origin}/${rel.slice(0, -'index.html'.length)}`;
  return `${origin}/${rel}`;
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match ? match[2].trim() : '';
}

function metaContent(html, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) => attribute(candidate, 'name').toLowerCase() === name.toLowerCase());
  return tag ? attribute(tag, 'content') : '';
}

function linkHref(html, relValue) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) => attribute(candidate, 'rel').toLowerCase() === relValue.toLowerCase());
  return tag ? attribute(tag, 'href') : '';
}

function textContent(value) {
  return value.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

const files = walk(root);
const indexable = [];
const titles = new Map();
const descriptions = new Map();

for (const file of files) {
  const rel = relative(file);
  const html = fs.readFileSync(file, 'utf8');
  const robots = metaContent(html, 'robots').toLowerCase();
  const isIndexable = !robots.includes('noindex');
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? textContent(titleMatch[1]) : '';
  const description = metaContent(html, 'description');
  const h1s = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) || [];
  const canonical = linkHref(html, 'canonical');

  for (const script of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(script[1]);
      const serialized = JSON.stringify(data);
      if (/AggregateRating|aggregateRating|reviewCount|ratingValue/.test(serialized)) {
        errors.push(`${rel}: Bewertungsdaten sind nicht zulässig.`);
      }
    } catch (error) {
      errors.push(`${rel}: ungültiges JSON-LD (${error.message}).`);
    }
  }

  for (const match of html.matchAll(/"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})"/g)) {
    if (match[1] > '2026-07-18') errors.push(`${rel}: zukünftiges dateModified ${match[1]}.`);
  }

  if (!isIndexable) continue;
  indexable.push({ file, rel, html, canonical });
  if (!title) errors.push(`${rel}: Title fehlt.`);
  if (!description) errors.push(`${rel}: Meta-Description fehlt.`);
  if (h1s.length !== 1) errors.push(`${rel}: ${h1s.length} H1 statt genau einer.`);
  if (!canonical) errors.push(`${rel}: Canonical fehlt.`);
  if (canonical && canonical !== urlForFile(file)) {
    errors.push(`${rel}: Canonical ${canonical} ist nicht selbstreferenzierend (${urlForFile(file)} erwartet).`);
  }
  if (robots.includes('nofollow')) errors.push(`${rel}: versehentliches nofollow in robots meta.`);

  if (title) titles.set(title, [...(titles.get(title) || []), rel]);
  if (description) descriptions.set(description, [...(descriptions.get(description) || []), rel]);
}

for (const [title, matches] of titles) {
  if (matches.length > 1) errors.push(`Doppelter Title „${title}“: ${matches.join(', ')}`);
}
for (const [description, matches] of descriptions) {
  if (matches.length > 1) errors.push(`Doppelte Meta-Description: ${matches.join(', ')}`);
}

const exactPages = {
  'index.html': {
    title: 'Heizlastberechnung Software aus PDF für SHK | Prometo',
    description: 'PDF-Grundriss hochladen, Räume prüfen und Heizlast, Materialbedarf sowie hydraulischen Abgleich berechnen. EFH in unter 7 Minuten. Beta kostenlos testen.',
    h1: 'Vom PDF-Grundriss zur Heizlast in unter 7 Minuten.'
  },
  'heizlastberechnung/app/index.html': {
    title: 'Heizlastberechnung App für SHK-Betriebe | Prometo',
    description: 'Raumweise Heizlast aus dem PDF-Grundriss berechnen: Räume automatisch erkennen, Daten prüfen und Material sowie hydraulischen Abgleich weiterberechnen.',
    h1: 'Heizlastberechnung direkt aus dem PDF-Grundriss'
  },
  'digitales-aufmass/index.html': {
    title: 'Aufmaß App für SHK: PDF-Grundrisse erkennen | Prometo',
    description: 'PDF-Grundriss hochladen, Räume automatisch erkennen und kontrollieren. Die geprüften Daten direkt für Heizlast und hydraulischen Abgleich nutzen.',
    h1: 'Digitales Aufmaß aus PDF-Grundrissen'
  },
  'hydraulischer-abgleich/index.html': {
    title: 'Hydraulischer Abgleich Software für SHK | Prometo',
    description: 'Heizlast, Volumenströme und hydraulischen Abgleich in einem Workflow berechnen. Für Heizkörper und Flächenheizung. Prometo Beta kostenlos testen.',
    h1: 'Hydraulischen Abgleich direkt aus der Raumheizlast berechnen'
  },
  'fussbodenheizung-auslegen/index.html': {
    title: 'Fußbodenheizung auslegen: Heizkreise & Material | Prometo',
    description: 'Verlegeabstand, Heizkreise, Rohrlängen und Material aus der Raumheizlast ableiten. Fußbodenheizung im Prometo Workflow einfach auslegen.',
    h1: 'Fußbodenheizung auslegen – von der Raumheizlast zum Material'
  },
  'heizlastberechnung/index.html': {
    title: 'Heizlastberechnung nach DIN EN 12831 | Prometo',
    description: 'Raumweise Heizlastberechnung verständlich erklärt: erforderliche Daten, DIN EN 12831 und der digitale Ablauf vom PDF-Grundriss bis zum Ergebnis.',
    h1: 'Heizlastberechnung nach DIN EN 12831 im digitalen Workflow'
  },
  'heizlast/index.html': {
    title: 'Heizlast einfach erklärt: Einheit & Bedeutung | Prometo',
    description: 'Heizlast einfach erklärt: Bedeutung, Einheit, Einflussfaktoren und Abgrenzung zum Wärmebedarf – mit direktem Bezug zur SHK-Praxis.',
    h1: 'Was ist die Heizlast?'
  },
  'heizlast-software-vergleich-shk/index.html': {
    title: 'Heizlastsoftware Vergleich für SHK-Betriebe | Prometo',
    description: 'Prometo, Reonic, autarc und Hottgenroth transparent vergleichen: Aufmaß, Heizlast, Materialberechnung, hydraulischer Abgleich und Zielgruppen.',
    h1: 'Prometo, Reonic, autarc und Hottgenroth im Vergleich'
  },
  'autarc-reonic-alternative/index.html': {
    title: 'Reonic & autarc Alternative für PDF-Aufmaß | Prometo',
    description: 'Prometo mit Reonic und autarc vergleichen: PDF-Aufmaß, Heizlast, Materialberechnung und hydraulischer Abgleich im transparenten Funktionsvergleich.',
    h1: 'Prometo als PDF-first Alternative zu Reonic und autarc'
  },
  'app-workflows.html': {
    title: 'Prometo Workflow: PDF, Heizlast & Abgleich in 4 Schritten',
    description: 'PDF-Grundriss hochladen, Räume automatisch erkennen, Daten kontrollieren und Heizlast, Material sowie hydraulischen Abgleich in vier Schritten berechnen.',
    h1: 'So funktioniert Prometo'
  },
  'beta/index.html': {
    title: 'Prometo Beta kostenlos testen | Heizlastsoftware für SHK',
    h1: 'Teste Prometo mit einem echten SHK-Projekt'
  }
};

for (const [rel, expected] of Object.entries(exactPages)) {
  const file = path.join(root, rel);
  const html = fs.readFileSync(file, 'utf8');
  const title = textContent((html.match(/<title>([\s\S]*?)<\/title>/i) || [,''])[1]);
  const h1 = textContent((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [,''])[1]);
  if (metaContent(html, 'robots').toLowerCase().includes('noindex')) errors.push(`${rel}: Kernseite ist versehentlich noindex.`);
  if (title !== expected.title) errors.push(`${rel}: erwarteter Title nicht umgesetzt.`);
  if (expected.description && metaContent(html, 'description') !== expected.description) {
    errors.push(`${rel}: erwartete Meta-Description nicht umgesetzt.`);
  }
  if (h1 !== expected.h1) errors.push(`${rel}: erwartete H1 nicht umgesetzt (gefunden: „${h1}“).`);
}

for (const rel of ['beta/danke/index.html', 'en/beta/thanks/index.html']) {
  const html = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!metaContent(html, 'robots').toLowerCase().includes('noindex')) errors.push(`${rel}: Danke-Seite muss noindex sein.`);
}

const redirects = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')).redirects || [];
const redirectSources = new Set(redirects.map((redirect) => redirect.source));
for (const redirect of redirects) {
  if (!redirect.permanent) errors.push(`Redirect ${redirect.source} ist nicht permanent.`);
  if (redirectSources.has(redirect.destination)) {
    errors.push(`Redirect-Kette: ${redirect.source} → ${redirect.destination}.`);
  }
}

function localTargetExists(value) {
  const clean = value.split('#')[0].split('?')[0];
  if (!clean || !clean.startsWith('/') || clean.startsWith('//')) return true;
  if (redirectSources.has(clean)) return true;
  const rel = decodeURIComponent(clean).replace(/^\//, '');
  const candidates = rel.endsWith('/')
    ? [path.join(root, rel, 'index.html')]
    : [path.join(root, rel), path.join(root, rel, 'index.html')];
  return candidates.some((candidate) => fs.existsSync(candidate));
}

for (const { rel, html } of indexable) {
  for (const match of html.matchAll(/\b(?:href|src)=(["'])(.*?)\1/gi)) {
    if (!localTargetExists(match[2])) errors.push(`${rel}: internes Ziel fehlt (${match[2]}).`);
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap-pages.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/prometo\.app[^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('Sitemap enthält doppelte URLs.');
for (const { rel, canonical } of indexable) {
  if (!sitemapUrls.includes(canonical)) errors.push(`${rel}: indexierbare Canonical-URL fehlt in der Sitemap.`);
}
for (const sitemapUrl of sitemapUrls) {
  const url = new URL(sitemapUrl);
  const pathname = decodeURIComponent(url.pathname);
  const candidate = pathname === '/'
    ? path.join(root, 'index.html')
    : pathname.endsWith('/')
      ? path.join(root, pathname.slice(1), 'index.html')
      : path.join(root, pathname.slice(1));
  if (!fs.existsSync(candidate)) {
    errors.push(`Sitemap-Ziel fehlt: ${sitemapUrl}.`);
    continue;
  }
  const html = fs.readFileSync(candidate, 'utf8');
  if (metaContent(html, 'robots').toLowerCase().includes('noindex')) errors.push(`Noindex-URL in Sitemap: ${sitemapUrl}.`);
  if (linkHref(html, 'canonical') !== sitemapUrl) errors.push(`Sitemap-URL ist nicht kanonisch: ${sitemapUrl}.`);
}

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://prometo.app/sitemap.xml')) errors.push('robots.txt referenziert die Sitemap nicht.');
if (/Disallow:\s*\/(?:\s|$)/m.test(robots)) errors.push('robots.txt blockiert die Website vollständig.');

const eventSources = [
  fs.readFileSync(path.join(root, 'assets/prometo-analytics.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'assets/beta-form.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'assets/prometo-events.js'), 'utf8')
].join('\n');
for (const eventName of ['beta_cta_click', 'beta_form_start', 'beta_form_submit', 'workflow_view', 'comparison_cta_click']) {
  if (!eventSources.includes(eventName)) errors.push(`Tracking-Event fehlt: ${eventName}.`);
}
for (const parameter of ['page_path', 'cta_position', 'target_page', 'device_type']) {
  if (!eventSources.includes(parameter)) errors.push(`Tracking-Parameter fehlt: ${parameter}.`);
}

if (errors.length) {
  console.error(`SEO-Check fehlgeschlagen (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO-Check erfolgreich: ${indexable.length} indexierbare HTML-Seiten, Canonicals, Metadaten, H1, Sitemap, Links, Redirects, JSON-LD und Tracking geprüft.`);
