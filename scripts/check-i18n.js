const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const routes = require('./i18n-routes.json');

const ignored = new Set([
  'en/heat-load-calculation-software/index.html'
]);

const germanTextPatterns = [
  /\b(Startseite|Zuletzt aktualisiert|Demo anfragen|Ablehnen|Akzeptieren|Datenschutzerkl[aä]rung)\b/i,
  /\b(Heizlast|Heizlastberechnung|W[aä]rmepumpe|W[aä]rmeerzeuger|Hydraulischer Abgleich|Fu[ßs]bodenheizung|Aufma[ßs])\b/i,
  /\b(Kurz erkl[aä]rt|H[aä]ufige Fragen|Alle Angaben ohne Gew[aä]hr)\b/i
];

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
}

function hasNoindexMeta(html) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
  return metaTags.some(tag => /name\s*=\s*["'](?:robots|googlebot)["']/i.test(tag) && /content\s*=\s*["'][^"']*noindex/i.test(tag));
}

function englishUrlToFile(url) {
  const prefix = 'https://prometo.app/';
  if (!url.startsWith(prefix)) return null;
  const pathname = url.slice(prefix.length);
  if (!pathname.startsWith('en/')) return null;
  if (pathname === 'en/') return 'en/index.html';
  if (pathname.endsWith('/')) return `${pathname}index.html`;
  if (pathname.endsWith('.html')) return pathname;
  return `${pathname}/index.html`;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git') return [];
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith('.html') ? [path.relative(root, full)] : [];
  });
}

let failed = false;
const routeByDePath = new Map(routes.map(route => [route.dePath, route]));
const routeByEnPath = new Map(routes.map(route => [route.enPath, route]));
const htmlFiles = walk(root);
const germanFiles = htmlFiles
  .filter(file => !file.startsWith('en/'))
  .filter(file => !file.startsWith('node_modules/'));

for (const file of germanFiles) {
  const html = read(file);
  const robotsNoindex = hasNoindexMeta(html);
  const isRedirectOnly = /http-equiv="refresh"/i.test(html);
  const needsEnglishRoute = !robotsNoindex || isRedirectOnly || file === 'datenschutz.html' || file === 'impressum.html';
  const route = routeByDePath.get(file);
  if (needsEnglishRoute && !route) {
    console.error(`Missing English route mapping for ${file}`);
    failed = true;
    continue;
  }
  if (!route) continue;
  if (!fs.existsSync(path.join(root, route.enPath))) {
    console.error(`Missing English file ${route.enPath} for ${file}`);
    failed = true;
  }
  if (!html.includes(`hreflang="en-US" href="${route.enUrl}"`)) {
    console.error(`Missing en-US hreflang on ${file}`);
    failed = true;
  }
}

for (const route of routes) {
  if (!fs.existsSync(path.join(root, route.dePath))) {
    console.error(`Mapped German source does not exist: ${route.dePath}`);
    failed = true;
  }
  if (!fs.existsSync(path.join(root, route.enPath))) {
    console.error(`Mapped English page does not exist: ${route.enPath}`);
    failed = true;
    continue;
  }
  const html = read(route.enPath);
  if (!html.includes('lang="en-US"')) {
    console.error(`Missing lang="en-US" on ${route.enPath}`);
    failed = true;
  }
  if (!ignored.has(route.enPath) && !html.includes(`rel="canonical" href="${route.enUrl}"`)) {
    console.error(`Missing canonical ${route.enUrl} on ${route.enPath}`);
    failed = true;
  }
  if (!html.includes(`hreflang="de-DE" href="${route.deUrl}"`)) {
    console.error(`Missing de-DE hreflang on ${route.enPath}`);
    failed = true;
  }
  const text = visibleText(html);
  for (const pattern of germanTextPatterns) {
    if (!ignored.has(route.enPath) && pattern.test(text)) {
      console.error(`Possible German text on English page ${route.enPath}: ${pattern}`);
      failed = true;
    }
  }
}

const sitemap = read('sitemap-pages.xml');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
for (const url of sitemapUrls) {
  const enFile = englishUrlToFile(url);
  if (!enFile) continue;
  if (!fs.existsSync(path.join(root, enFile))) {
    console.error(`Sitemap URL points to missing English file: ${url}`);
    failed = true;
    continue;
  }
  if (hasNoindexMeta(read(enFile))) {
    console.error(`Noindex English page must not be in sitemap: ${url}`);
    failed = true;
  }
}
for (const route of routes) {
  const enFile = path.join(root, route.enPath);
  const html = fs.existsSync(enFile) ? read(route.enPath) : '';
  const robotsNoindex = hasNoindexMeta(html);
  if (!robotsNoindex && !ignored.has(route.enPath) && !sitemapUrls.has(route.enUrl)) {
    console.error(`Missing English sitemap URL ${route.enUrl}`);
    failed = true;
  }
}

const vercel = JSON.parse(read('vercel.json'));
for (const route of routes) {
  if (!vercel.redirects?.some(redirect => redirect.source === route.slugNoSlash)) {
    console.error(`Missing slash redirect for ${route.slugNoSlash}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`i18n check ok: ${routes.length} mapped English routes for ${germanFiles.length} German HTML files`);
