# Webdesign-Audit & Redesign-Konzept – Prometo

Stand: 2026-07-20 · Grundlage: 8 Einzelaudits, stichprobenartig im Code gegengeprüft
Scope: ausschliesslich Webdesign, visuelle Qualität, Markenwirkung, Verständlichkeit, Motion, Responsive. Kein SEO.

**Verifikationsvermerk:** Alle im Folgenden übernommenen Befunde wurden im Code nachgeprüft (Belegzeilen genannt).
Verworfene und widersprüchliche Auditor-Aussagen sind in Abschnitt 3.5 dokumentiert.

---

# 1. Gesamturteil

| Bereich | Note | Begründung (konkret, nicht generisch) |
|---|---|---|
| Visuelle Qualität | **5/10** | Einzelne Bauteile sind auf hohem Niveau (Hero-Workflow-Demo `index.html:2523-2561`, Navigation `assets/site-navigation.css`), aber die Grundfläche trägt sichtbare Altlasten: 42 von 43 „Icons" sind rohe Unicode-Zeichen (`◌ ▣ ✦ ° ⌂ § ⌁`, verifiziert an `index.html:2684,2706,2725,2741,2757,2773,3296`), gerendert in `ui-sans-serif` (`input-home.css:111-112`). Das ist der erste Eindruck auf jeder Feature-Card der Startseite. |
| Markenwirkung | **5/10** | Farbwelt (Teal auf fast-schwarz) ist eigenständig und wiedererkennbar, aber die Marke spricht drei Dialekte: `.badge` (Homepage), `.aufmass-kicker` (digitales-aufmass), `.marketing-eyebrow` (beta) für dasselbe Element; zwei verschiedene Cyan-Töne für denselben CTA (`site-navigation.css` hardcodiert `#45dee7`, `prometo-marketing.css` nutzt `--primary: #6bf6ff`). Wer die Journey Startseite → Lösungsseite → Beta läuft, sieht drei Bauphasen. |
| Verständlichkeit | **6/10** | Die Homepage erklärt ihr Kernversprechen visuell hervorragend. Die zwei wichtigsten Produktseiten dagegen zeigen **kein einziges Produktbild**: `grep "<img"` in `digitales-aufmass/index.html` und `ki-assistent/index.html` liefert je genau einen Treffer – das Nav-Logo. Beide referenzieren echte Screenshots ausschliesslich in `og:image`. Ein Installateur sieht auf der KI-Assistent-Seite ein Netzwerkdiagramm, keine Chat-Oberfläche. |
| Konsistenz | **3/10** | Die Homepage ist ein Fork: `grep -c "page-effects" index.html` = **0**. Sie definiert `.reveal` mit eigenem Klassenvertrag (`.reveal.visible`, `index.html:1029`) gegen den projektweiten (`.reveal.is-visible`, `page-effects.css:12`) – verschiedene Distanz (40px vs. 22px), verschiedenes Easing, kein Blur. Jeder zwischen Homepage und Unterseite kopierte Block bricht lautlos. Dazu 5 Tabellen-Implementierungen, 9 Container-Breiten, 5 Bracket-Radien. |
| Produktdarstellung | **4/10** | Wo Screenshots eingesetzt werden, sind sie stark und mit erklärender Caption gekoppelt (`heizlastberechnung/app/index.html:480-568`). Aber: zwei Kernseiten ohne jedes Produktbild, ein Hero-Screenshot der der eigenen H1 widerspricht (`heizlastberechnung/app/index.html:339` verspricht Grundriss, zeigt Adressformular), und ein Marketing-Screenshot mit sichtbaren QA-Artefakten („Issues: 24", englischer Debug-String in deutscher App). |
| Motion Design | **5/10** | Motion-Handwerk in Einzelfällen exzellent (18s-synchronisierter Zyklus in `ki-assistent`, `offset-path`-Punkt in `seo-explainers.css:32-39`, überall `prefers-reduced-motion` bedacht). Aber kein System: 58 verschiedene Duration/Easing-Kombinationen, `filter: blur(6px)` als sitewide Reveal-Default (`page-effects.css:1-16`, compositor-feindlich), und die einzige *erklärende* Animation wird unter 768px pauschal abgeschaltet (`seo-explainers.css:95-101` – verifiziert, eine zweite `animation:none`-Regel neben der korrekten reduced-motion-Regel). |
| Mobile Design | **5/10** | Herausragende Einzelarbeit: die Hero-Workflow-Demo hat eine echte Mobile-Neukomposition, nicht nur Skalierung (`index.html:2005-2145`), das Showcase-Karussell hat Snap + expliziten Wisch-Hinweis. Dagegen: Hamburger-Button 42,4px statt 44px (`site-navigation.css:239-240`, verifiziert), kein Scroll-Lock bei offenem Menü, Footer bricht bei 768px auf 5 Spalten, Vergleichstabellen scrollen unsichtbar horizontal. |

## Die eine zentrale Schwäche

**Prometo hat kein Designsystem, sondern eine Sammlung von Bauphasen – und die teuerste Konsequenz ist, dass die Seite ihre eigene Produktqualität nicht belegt.**

Alles andere folgt daraus. Die Icons sind Unicode-Interpunktion, weil es nie eine verbindliche Icon-Entscheidung gab. Die Homepage hat ein eigenes Reveal-System, weil sie vor dem geteilten gebaut wurde und nie migriert wurde. Es gibt fünf Tabellenklassen, zehn Primary-Button-Utility-Strings, sieben Glow-Shadow-Werte und 58 Timing-Werte, weil jeder Baustein isoliert entstand.

Das ist nicht bloss Wartungsschmerz. Prometo verkauft ein Werkzeug, dessen Verkaufsargument **Präzision** ist – normkonforme Heizlast, geprüfte Raumdaten, nachvollziehbare Rechenwege. Eine Seite, auf der ein Paragraphzeichen als Icon für „DIN/EN" dient, ein Produkt-Mockup leere umrandete Quadrate als Navigations-Icons zeigt (`index.html:662-668`), und die Aufmaß-Seite ihr eigenes Produkt nie abbildet, widerspricht diesem Argument auf der visuellen Ebene, bevor ein einziger Satz gelesen wird. Ein SHK-Betrieb, der zwischen Prometo und Hottgenroth entscheidet, liest diese Signale als Reifegrad.

Die Reihenfolge ist deshalb nicht „erst System, dann Sichtbares", sondern: **erst die Stellen reparieren, an denen die Seite gegen ihr eigenes Versprechen arbeitet** (Icons, fehlende Produktbilder, Fokuszustände im Formular), **dann das System darunterziehen**, damit es nicht wieder auseinanderläuft.

---

# 2. Bestehende Stärken

Was erhalten bleiben muss – und warum.

| Stärke | Fundstelle | Warum erhalten |
|---|---|---|
| **Hero-Workflow-Demo der Homepage** | `index.html:2523-2561`, CSS `index.html:549-900` | Die einzige Stelle der ganzen Website, die „wie funktioniert das?" visuell beantwortet statt behauptet: PDF wird in die Dropzone gezogen, Scanline läuft, Grundriss mit echten Raumnamen erscheint, Analyseschritte ticken durch, Ergebnis „8,4 kW". Das ist das stärkste Asset der Marke. Nicht anfassen ausser für die genannten Performance-Fixes. |
| **Reduced-Motion-Fallback der Workflow-Demo** | `index.html:2158-2198`, `digitales-aufmass-workflow.css:486-499` | Zeigt einen *sinnvollen Endzustand* (Blueprint sichtbar, Schritte grün, Ergebnis eingeblendet) statt einfach zu pausieren und leere Boxen zu hinterlassen. Das ist die korrekte Umsetzung, die als Vorlage für jede weitere Animation dient. |
| **Mobile-Neukomposition derselben Demo** | `index.html:2005-2145`, `digitales-aufmass-workflow.css:454-484` | Sidebar-Labels ausgeblendet, Grid auf 2 Spalten, Drag-Keyframes für die kleinere Fläche neu berechnet. Kein gestauchtes Desktop-Layout, sondern eine eigene Komposition – der Qualitätsmassstab, an dem sich Tablet-Verhalten künftig messen muss. |
| **Navigation** | `assets/site-navigation.css:1-374`, `assets/site-navigation.js` | Reifste Komponente des Projekts: Sticky-Header mit `backdrop-filter`, Mega-Dropdown mit Karten statt Textlisten, `<details>/<summary>`-Pattern ohne JS-Abhängigkeit für den Grundzustand, Escape-Handling, `aria-current`. Struktur bleibt, nur Touch-Grössen und Fokusringe werden korrigiert. |
| **Interaktive Bauplan-Analyse-Demo** | `index.html:2831-3143` + Script ab `4572` | Synchronisierter SVG-Grundriss mit 5-Schritt-Tracker – echte funktionierende Produktdemo, kein Deko-Element. |
| **Screenshot-System mit erklärenden Captions** | `heizlastberechnung/app/index.html:480-568`, `app-workflows.html:404-789` | Jede Caption benennt konkret, was der Screen zeigt *und warum das relevant ist*. Bestes Text-Bild-Kopplungsmuster im Projekt; wird zum Standard für alle Produktseiten erhoben. |
| **Lightbox-Galerie** | `assets/prometo-gallery.js:1-227`, `prometo-gallery.css:1-308` | Progressive Enhancement, Fokusrückgabe an den Trigger, `aria-modal`, Escape-Handling, automatische Phone/Tablet-Klassifizierung über Bildmasse. Der Fokusring hier (`prometo-gallery.css:44-47`: `outline: 2px solid rgba(107,246,255,.88); outline-offset: 6px`) ist das **korrekte Muster** und wird zum projektweiten Fokusstandard. |
| **`offset-path`-Flow-Animation** | `assets/seo-explainers.css:11-39` | Punkt läuft entlang einer Bezierkurve, Flow-Linie via `stroke-dashoffset` – rein compositor-freundlich (`opacity`, `transform`, `offset-distance`) und *erklärt* einen Prozess statt zu dekorieren. Vorlage für alle künftigen Flow-Diagramme. |
| **`.school-icon` Stroke-Draw** | `index.html:996-1016` | Echtes SVG, `stroke="currentColor"`, `stroke-dasharray`-Draw-in. Genau das Muster, auf das das neue Icon-System migriert. |
| **Reveal-Trigger-Logik** | `assets/page-effects.js:31-55` | IntersectionObserver mit `threshold 0.14` / `rootMargin -8%` plus Sonderregel „erste 2 `.reveal` sofort sichtbar" – verhindert Pop-in im Above-the-fold. Sinnvoll dosiert. |
| **`prefers-reduced-motion` in jeder Animationsdatei** | `page-effects.css:690-713`, `prometo-marketing.css:941-953`, `digitales-aufmass-workflow.css:486-499`, `seo-explainers.css:87-93` | Durchgängig, nicht punktuell. Diese Disziplin bleibt Pflicht für jede neue Animation. |
| **Honeypot-Feld korrekt umgesetzt** | `beta/index.html:219-222`, `prometo-marketing.css:755-761` | `aria-hidden`, `tabindex="-1"`, Off-Screen-Positionierung statt `display:none`. Richtig gelöst. |
| **Marketing-Komponentensystem** | `prometo-marketing.css:251-296`, `:351-382`, `:638-680` | `.marketing-button--primary/--secondary`, `.marketing-card`-Familie, `.marketing-faq`: ein echtes, konsistent benanntes Komponentensystem. Es ist der Keim des künftigen Designsystems – nicht ersetzen, sondern auf die Tailwind-Seiten ausdehnen. |
| **Alle `<img>` mit `width`/`height`** | projektweit (61 Treffer geprüft) | Kein Layout-Shift-Risiko. Bleibt Pflicht. |
| **`accessibility.js` `hideDecorativeIcons()`** | `assets/accessibility.js:135-139` | Setzt automatisch `aria-hidden` auf dekorative Icon-Spans. Bei der SVG-Migration beibehalten, Selektor auf die neue Icon-Klasse umstellen. |
| **`fluid clamp()`-Typografie der Beta-Seite** | `prometo-marketing.css:105-120` | `clamp(2.65rem, 6vw, 5.8rem)`, `letter-spacing: -0.055em`, `text-wrap: balance` – der beste H1-Ansatz im Projekt. Wird zum Standard erhoben, nicht abgeschafft. |
| **`.check-item` mit Checkbox-Pseudoelement** | `heizlast-checkliste-shk/index.html:104-121` | Ein umrandetes Quadrat als `::before` statt Aufzählungspunkt – passendes visuelles Vokabular für eine Checkliste. Beispiel für Formsprache, die aus dem Inhalt kommt. |
| **Methoden-Vergleich mit ✓/!/✗-Codierung** | `heizlastberechnung/leitfaden/index.html:634-712` | Der beste Vergleichsinhalt im Projekt. Wird zur Vorlage für alle Vergleichstabellen (Wärmeerzeuger, Wettbewerber). |

---

# 3. Grösste visuelle Probleme

## 3.1 Kritisch

**K1 – Das Icon-System existiert nicht.**
`grep` über alle `<span class="material-symbols-outlined">` liefert 43 Vorkommen; 42 davon enthalten rohe Unicode-Zeichen aus vier verschiedenen Unicode-Blöcken (`✓` 17×, `+` 6×, `⚙` `⚒` `◇` `⌁` je 2×, `◷ ◯ ◌ ▣ ↑ § °` je 1–2×). Einzige echte Ligatur projektweit: `arrow_selector_tool` in `digitales-aufmass/index.html:507`. Verschärfend: `input-home.css:111-112` setzt für die Homepage `font-family: ui-sans-serif, system-ui, sans-serif` – die Startseite rendert diese Zeichen also im Systemfont des Besuchers. Strichstärke, Proportion und Optik jedes „Icons" entscheidet damit Windows/macOS/Android, nicht der Designer. Das `@font-face` in `input.css:131-137` lädt zudem nur ein 2.384-Byte-Subset mit faktisch einer Glyphe.

**K2 – Zwei Kernproduktseiten zeigen ihr Produkt nicht.**
Verifiziert: `grep "<img"` liefert in `digitales-aufmass/index.html` und `ki-assistent/index.html` je **genau einen** Treffer – das Nav-Logo. Beide Seiten referenzieren echte Screenshots (`bauplan-import-review.webp`, `fachassistent-chat.webp`) ausschliesslich in `og:image`/`twitter:image`. Die Dateien existieren auf Platte. Eine Seite mit dem Titel „KI-Assistent" und dem Versprechen „mit eigenen Daten chatten" zeigt stattdessen ein 900×700-Wissensgraph-SVG mit fliegenden Partikeln – ein Backend-Konzept, keine Nutzererfahrung.

**K3 – Die Homepage ist vom Designsystem abgekoppelt.**
`grep -c "page-effects" index.html` = 0. Stattdessen 1.377 Zeilen Inline-`<style>` (`463-1840`) mit eigenem `.reveal`-Vertrag: `index.html:1023-1032` definiert `translateY(40px)`, `0.7s cubic-bezier(0.25,1,0.5,1)`, Toggle-Klasse `.visible`; `page-effects.css:1-16` definiert `translate3d(0,22px,0) scale(0.985)`, `blur(6px)`, `0.72s cubic-bezier(0.2,0.8,0.2,1)`, Toggle-Klasse `.is-visible`. Jeder zwischen den Welten kopierte Block bleibt bei `opacity: 0` hängen. Zusätzlich existieren `.glass-panel`, `.badge`, `.audience-card`, `.cta-banner` nur inline auf dieser einen Seite.

**K4 – Fokusindikator fehlt genau dort, wo er am meisten gebraucht wird.**
`site-navigation.css` setzt an fünf Stellen `outline: none` (Zeilen 68, 149, 203, 226, 331 – verifiziert) und ersetzt ihn nur durch eine 9-%-Hintergrundtönung auf ohnehin dunklem Grund. Betroffen sind Header-Links, Dropdown-Trigger, Sprachumschalter, CTA und mobiles Menü – die meistgenutzten Tastaturziele der Seite. Im selben Projekt zeigt `prometo-gallery.css:44-47` das korrekte Muster. In keiner HTML-Datei existiert ein einziges `focus:`/`focus-visible:`-Tailwind-Utility.

**K5 – Das Beta-Formular hat keinen einzigen gestalteten Zustand.**
Verifiziert per `grep` über `prometo-marketing.css`: **0** Treffer für `focus`, **0** für `disabled`, **0** für `appearance`. Konkret heisst das: fokussierte Eingabefelder zeigen den blauen Browser-Standardring statt Markenfarbe; der Submit-Button sieht während des 1–3s laufenden `fetch` identisch aus wie im Ruhezustand, obwohl `beta-form.js:47-49` bereits `disabled` und `aria-busy` setzt (Chrome dimmt `<button disabled>` nicht automatisch); die beiden Select-Felder zeigen den nativen OS-Dropdown-Pfeil in einem sonst vollständig gestalteten dunklen Feld. Das ist die Stelle mit der höchsten Handlungsintensität der gesamten Website.

**K6 – WCAG-AA-Kontrastfehler auf Fliesstext.**
`text-gray-600` (#4b5563) auf #0b0e0e = 2,56:1 (49 Vorkommen), `text-gray-500` (#6b7280) = 4,01:1 (114 Vorkommen) – beide unter der 4,5:1-Schwelle für Fliesstext. Betroffen u.a. die Stand-Angabe im Impressum (`impressum.html:272`), Breadcrumb-Trenner und Rechtstexte. Der Theme-Token `--color-on-surface-variant` (#bbc9ca, 11,37:1) existiert und wird stattdessen kaum genutzt.

## 3.2 Hoch

**H1 – Grauwert-Wildwuchs.** Verifizierte Zählung: `text-gray-400` 909×, `-200` 194×, `-300` 116×, `-500` 114×, `-100` 55×, `-600` 49× = **1.437 Vorkommen** von sechs undefinierten Tailwind-Default-Graustufen. Dazu mindestens 22 individuelle Hex-Grauwerte in den Hand-CSS-Dateien (allein 7 verschiedene für „Sekundärtext" in `digitales-aufmass-workflow.css`). Der eine dafür vorgesehene Theme-Token wird faktisch nie benutzt.

**H2 – Zwei unverbundene Token-Systeme.** `input.css:7-24` definiert `--color-primary: #45dee7`; `prometo-marketing.css:25-49` und `site-navigation.css:25-49` definieren unabhängig davon `--primary: #6bf6ff` und `--primary-strong: #45dee7`. Gleiche Farbe, zwei Rollennamen, zwei Systeme. Eine Farbänderung erfordert vier synchrone Edits. Sichtbare Folge: `.site-cta` (`background: #45dee7`, hardcodiert) und `.marketing-button--primary` (`background: var(--primary)` = #6bf6ff) sind für **dieselbe Handlung** – „Kostenlos Beta testen", 49× bzw. 13× im Markup – zwei unterschiedliche Cyan-Töne, zwei Höhen (2,5rem vs. 3,25rem), zwei Schriftgewichte (800 vs. 700).

**H3 – Kein Duration/Easing-System.** 58 unterschiedliche Kombinationen projektweit. Die geteilte `.lift-on-hover` (`page-effects.css:30-35`, 35× genutzt) nutzt `0.35s ease` und `-4px`; die lokal geforkte `.audience-card:hover` (`index.html:1478-1492`) macht dasselbe mit `0.3s ease` und `-5px`. Gleiche Absicht, zwei Physiken auf derselben Seite.

**H4 – `filter: blur(6px)` im sitewide Reveal-Default.** `page-effects.css:1-16` animiert `filter` mit – die einzige nicht-compositor-fähige Eigenschaft im Standardpfad, aktiv auf ~15 Seiten bei jedem Hero und jedem Card-Grid. Blur erzwingt pro Frame ein Neu-Rendern des Kernels über die gesamte Bounding-Box. Zielgruppe sind Handwerker auf Mittelklasse-Android-Geräten auf der Baustelle.

**H5 – Screenshot widerspricht der Headline.** `heizlastberechnung/app/index.html:339` verspricht „Heizlastberechnung direkt aus dem PDF-Grundriss", die drei Hero-Chips (`390-401`) sprechen von Grundriss-Import und Raumdaten – gezeigt wird `projektassistent-projektbasis.webp`, ein Formular für Projektname und Adresse.

**H6 – Marketing-Screenshot mit QA-Artefakten.** `heizlastberechnung/app/index.html:504-511` zeigt `bauplan-import-review.webp` mit `object-cover object-top` bei ~95 % Bildhöhe. Sichtbar bleiben „Issues: 24", ein OCR-Bug („Raum 'Garage' hat nur 0m²", `area_raw="n/a"`) und zweimal der englische Debug-String „Page contains text and tables, no floor plan detected." in einer sonst komplett deutschen App. Direkt daneben steht die Caption, erkannte Räume würden „direkt in der App kontrolliert".

**H7 – Touch-Ziele unter 44px im Header.** Verifiziert: `.site-mobile-toggle` = 2,65rem = **42,4px** (`site-navigation.css:239-240`), `.site-nav-link`/`.site-nav-trigger`/`.site-cta` `min-height: 2.5rem` = 40px, `.site-lang-link` 2,25rem = 36px. Der Hamburger ist das meistgetappte Element jeder Mobile-Seite.

**H8 – Kein Scroll-Lock beim Mobile-Menü.** `site-navigation.js` (vollständig gelesen) setzt an keiner Stelle `body`/`html` `overflow`. Bei offenem Panel scrollt die Seite dahinter weiter, das `position: fixed`-Panel verliert seinen Bezug zum Header.

**H9 – `input-home.css` als latenter Icon-Bug.** Die Datei dupliziert ~100 Zeilen `@font-face` aus `input.css` mit genau einer inhaltlichen Abweichung: `.material-symbols-outlined` bekommt `ui-sans-serif` statt der Icon-Font und es wird kein Icon-Font-File geladen. Wer künftig auf der Startseite eine echte Ligatur einsetzt, bekommt den literalen Text gerendert – ein erst im Browser sichtbarer Fehler.

**H10 – Fachseiten ohne Fachtiefe.** `hydraulischer-abgleich/index.html`: verifiziert **0** `<table>`-Elemente, `.formula-box` definiert aber **0×** im Body verwendet – auf dem rechnerisch anspruchsvollsten Thema der ganzen Seitengruppe (Volumenstrom, Kvs, Voreinstellung). Das „EFH-Beispiel" (`741-751`) liefert drei Ein-Satz-Karten ohne einen einzigen Zahlenwert.

**H11 – Vergleichstabellen ohne Zustandskodierung.** Alle `<td>` in `.marketing-table` rendern in derselben Farbe, egal ob „Ja, zentraler Startpunkt" oder „Auf der geprüften Seite nicht ausgewiesen" steht. Die Prometo-Spalte ist nicht hervorgehoben. Bei 10 Kriterien × 4 Spalten muss jede Zelle einzeln gelesen werden – der Kernzweck einer Vergleichstabelle wird nicht eingelöst. Zusätzlich `min-width: 880px` mit `overflow-x: auto` ohne Fade-Kante oder Hinweis: auf 375px clippt die Tabelle unsichtbar nach Spalte 1–2.

## 3.3 Mittel

**M1 – Doppelter CTA-Block auf der Homepage.** `index.html:3722` – der Form-Wrapper trägt `hidden`, verifiziert; kein JS entfernt das Attribut. Die Sektion `#beta-signup` (`3698-3842`) zeigt damit sichtbar nur Badge + H2 + Text + Button und ist strukturell identisch mit dem unmittelbar folgenden CTA-Banner (`3847-3886`), ohne Trenner dazwischen. ~145 Zeilen totes Markup, zwei fast gleiche Blöcke hintereinander.

**M2 – Vierfache Wiederholung derselben Story.** Hero-Animation → `home-flow`-SVG (`2567-2622`) → interaktive 5-Schritt-Demo (`2831-3143`) → Showcase-Thumbnails: viermal „PDF hochladen, Räume erkannt, Heizlast kommt raus" mit wechselnder Grafiktechnik, bevor neuer Inhalt folgt.

**M3 – Hover-Feedback auf nicht-klickbaren Karten.** `.glass-panel:hover` hebt an und färbt den Rahmen primary – identisch auf 8 Feature-Cards und 4 Stat-Cards, die reine `<div>` ohne Link sind. Hover verliert damit seine Bedeutung als Interaktionssignal.

**M4 – Fragmentiertes Breakpoint-System.** 12+ eigene Pixelwerte (767, 768, 639, 640, 620, 860, 1024, 1023, 1100, 1280, 520) parallel zum Tailwind-Raster. Zwischen 620px und 640px schaltet `.aufmass-workflow-body` bereits um, während alle Tailwind-Grids noch im Desktop-Zustand sind.

**M5 – Tablet erbt Desktop.** Die einzige Tablet-Regel für die Hero-Demo (`index.html:1729-1731`) korrigiert nur die Aussenbreite. Die für Mobile geschriebene Sidebar-Vereinfachung endet exakt an 767px; bei 768–820px bekommt die Sidebar ~150px bei unverändertem Desktop-Schriftgrad.

**M6 – Footer fünfspaltig ab 768px.** `index.html:3914`: `md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]`. Rechnung: 768 − 64 (px-8) − 192 (4× gap-12) = 512px für 5 Spalten. Links wie „Heizlastberechnung App" brechen in 2–3 Zeilen.

**M7 – Fünf Tabellenklassen.** `.richtwert-table`, `.method-table`, `.metric-table`, `.compare-table` und klassenlose `<table>` mit Inline-Tailwind – zwei verschiedene Cyan-Töne für Header, uneinheitliche Zebra-Behandlung, drei verschiedene Zell-Paddings.

**M8 – Redundante Radien.** Verifiziert: `rounded-[2rem]` 105×, `rounded-[1.5rem]` **43×**, `rounded-[1.75rem]` 14×, `rounded-[40px]` 2×, `rounded-[2.5rem]` 2×. `rounded-[1.5rem]` ist wertgleich mit `rounded-3xl` – zwei Schreibweisen für denselben Wert ohne beabsichtigten Unterschied.

**M9 – Neun Container-Breiten.** `max-w-screen-xl` 278×, `max-w-3xl` 97×, `max-w-2xl` 54×, dazu `screen-2xl`, `sm`, `xl`, `4xl`, `screen-md`, `5xl`, `xs` – plus `--shell: 1180px` für die Marketing-Familie. Benachbarte Sektionen sind unterschiedlich breit ohne erkennbaren Grund.

**M10 – Layout-triggernde Properties in Dauerschleifen.** `@keyframes workflow-scan` (`index.html:877-882`), `aufmass-scan` (`digitales-aufmass-workflow.css:390-395`) und `scan-sweep` (`index.html:1820-1838`) animieren `top` auf `position: absolute`-Elementen – jedes Frame ein Reflow, obwohl `transform: translateY()` dasselbe Ergebnis kostenlos liefert. `step-pulse` (`index.html:1865-1875`) animiert `box-shadow` in einer 1,5s-Endlosschleife.

**M11 – Erklärende Animation auf Mobile abgeschaltet.** `seo-explainers.css:95-101` – verifiziert eine zweite `animation: none`-Regel unter `@media (max-width: 768px)`, unabhängig von der Nutzerpräferenz, zusätzlich zur korrekten reduced-motion-Regel (`87-93`). Ausgerechnet die einzige Animation, die tatsächlich einen Fachprozess erklärt, verschwindet für die mobile Hauptzielgruppe.

**M12 – Rechtsseiten auf eigenem Stack.** `impressum.html` und `datenschutz.html` laden zusätzlich `/assets/tailwind.css` und hardcodieren Markenfarben ein drittes Mal im eigenen `<style>`-Block. Ohne den `body.marketing-body`-Radialgradienten wirken sie als flache Volltonfläche wie ein angehängtes Dokument.

**M13 – Danke-Seite als Rumpf.** `beta/danke/index.html:22-34`, 38 Zeilen gesamt, bricht das überall sonst genutzte zweispaltige `.marketing-hero-grid` ersatzlos. Der Nutzer hat gerade seine Geschäftsadresse hergegeben und bekommt keine konkrete Erwartung.

**M14 – Zwei H1-Typografiesysteme.** `index.html:2489-2493` nutzt `tracking-normal` bei `md:text-7xl` (72px, 0em Laufweite); `prometo-marketing.css:105-109` nutzt `clamp(2.65rem, 6vw, 5.8rem)` mit `-0.055em` und `text-wrap: balance`. Die wichtigste Seite hat die schwächere Variante.

**M15 – Drei gleichrangige CTAs im Heizlast-Hero.** `heizlastberechnung/index.html:373-386`: Conversion-Button und zwei interne Content-Links im selben Flex-Container, alle vor dem Fold.

## 3.4 Optional

**O1 – Leere Platzhalter-Icons im Produkt-Mockup.** `.workflow-nav-icon` (`index.html:662-668`) und `.aufmass-workflow-nav-item i`: umrandete Quadrate bzw. Kreise ohne Glyphe, identisch für vier verschiedene Funktionsbereiche. Ausgerechnet in der Demo, die Produktqualität beweisen soll, wirkt die Navigation wie ein unfertiger Wireframe.

**O2 – Totes CSS aus alter Navigationsgeneration.** `index.html:1502-1546` (`.nav-link`, `.pulse-dot`) und `1565-1608` (`.mobile-menu`) – über 90 Zeilen, keine der Klassen kommt im HTML vor.

**O3 – Tailwind-Default-Grau in zwei tragenden Hero-Zeilen.** `index.html:2487` und `2511` nutzen `text-gray-500`, während die Subline direkt daneben (`2494`) korrekt `text-on-surface-variant` verwendet. Betroffen sind Zielgruppenpositionierung und das Zeitversprechen „unter 7 Minuten" – zwei Differenzierungsargumente, die unauffälliger wirken als der Rest.

**O4 – `will-change` dauerhaft auf einmaliger Animation.** `index.html:1993-1999`: `.brand-wand` und `.brand-mark` deklarieren `will-change` statisch, obwohl die Animation nach 2s endet. Effekt hier minimal, aber es ist die Copy-Paste-Vorlage für die nächsten zwanzig Elemente.

**O5 – Zielgruppen-Karte 1 mit 3 statt 4 Bulletpoints.** `index.html:3356-3397` gegen `3400-3535` – Ausreisser in einer sonst gleichmässigen 4er-Reihe.

**O6 – Zeilenlängen über dem Optimum.** `max-w-3xl` (768px) bei `text-lg` ergibt ~85–90 Zeichen pro Zeile bei fachlich dichten Intro-Absätzen. `max-w-2xl` ist bereits an anderen Stellen im Einsatz.

## 3.5 Verworfene und widersprüchliche Auditor-Aussagen

| Aussage | Bewertung |
|---|---|
| Auditor 2: „`.material-symbols-outlined` lädt keinerlei Icon-Font, kein `<link>`/`@font-face` im gesamten `<head>`" | **Teilweise falsch.** `input.css:131-137` enthält sehr wohl ein `@font-face` mit `fonts/material-symbols-arrow-selector.ttf`. Für die Homepage stimmt die Aussage im Ergebnis (sie lädt `tailwind-home.css`, verifiziert `index.html:71`, und dort ist die Font-Family überschrieben) – aber nicht in der Begründung. Korrekte Fassung: die Font existiert, ist auf ein Ein-Glyphen-Subset geschrumpft und für die Homepage per `input-home.css` deaktiviert. |
| Auditor 6: „Icon-Font faktisch tot" – 43 Spans, 42 Unicode | **Bestätigt.** Genauer als Auditor 2 und Auditor 5 (der 52 Spans in 4 Dateien zählt). Die Differenz 43 vs. 52 rührt vermutlich aus unterschiedlichem Einbezug der `en/`-Spiegelseiten. Für die Massnahme irrelevant – beide Zählungen führen zur selben Konsequenz. |
| Auditor 1: „digitales-aufmass-Hero ist 1:1-Kopie der Homepage-Demo" vs. Auditor 3: „Hero zeigt die App nicht" | **Kein Widerspruch, zwei Ebenen desselben Befunds.** Beide stimmen: es ist eine Nachbildung *und* sie ist von der Homepage dupliziert. Die Lösung von Auditor 3 (echte Screenshots) löst beide Probleme; die Lösung von Auditor 1 (Aufmaß-spezifische SVG-Phase ergänzen) löst nur eins bei höherem Aufwand. **Entscheidung: Auditor 3.** |
| Auditor 2: „Home-flow-SVG-Sektion streichen" vs. Auditor 1: Hero-Demo ist die grösste Stärke | **Kein Widerspruch.** Gestrichen wird die *dritte* Wiederholung (`2567-2622`), nicht die Hero-Demo. |
| Auditor 4: „Homepage nutzt praktisch keine projektweiten Assets" | **Bestätigt**, aber zu absolut formuliert: `seo-explainers.css` und `prometo-gallery.css` sind eingebunden (`index.html:447,449`), nur `page-effects.*` fehlt. |
| Auditor 7: „`.role-pill label` ≈ 31,6px" und Cookie-Buttons ≈ 36px | **Plausibel, nicht im Browser gemessen.** Als Massnahme trotzdem übernommen, da die Korrektur risikolos ist. |
| Auditor 8: Impressum-Textinhalt („kein eingetragenes Unternehmen") als Vertrauensproblem | **Ausserhalb des Scope.** Rechtstext, kein Designbefund. Der Auditor markiert das selbst korrekt. Nicht in die Massnahmenliste übernommen. |
| Auditor 5: „0 Treffer für `.badge` in allen CSS-Dateien" | **Irreführend.** `.badge` existiert, aber inline in `index.html:1549-1563`. Der Befund („keine geteilte Komponente") stimmt, die Formulierung suggeriert fälschlich, die Klasse existiere gar nicht. |

---

# 4. Seitenweiser Audit

## 4.1 `index.html` – Startseite

### Hero (2477–2565)

| | |
|---|---|
| **Zustand** | Sechs gestapelte Textblöcke (Badge, H1, Subline, zwei CTAs, Disclaimer, Kurzantwort-Karte) vor der Workflow-Demo. Die Mobile-Media-Query (`2005ff.`) verkleinert nur Schriftgrössen, entfernt keinen Block. Beide CTAs `px-8 py-4 text-lg font-bold`, nur Füllfarbe unterscheidet. H1 mit `tracking-normal`. Zwei Zeilen in `text-gray-500`. |
| **Problem** | Auf ~390×740px summiert sich der Textstack auf 775–850px – die differenzierende Produktanimation liegt vollständig unter dem ersten Viewport. Die Frage „wie funktioniert das?" wird auf Mobile erst nach mehrfachem Scrollen beantwortet. Zusätzlich: `.glass-panel` hat einen sichtbaren Fill, der Sekundärbutton wirkt als zweiter Vollbutton. |
| **Verbesserung** | Kurzantwort-Karte (`2514-2519`) unter 768px ausblenden; Disclaimer (`2511-2513`) in die Subline integrieren; Sekundärbutton auf das bereits etablierte Outline-Muster (`digitales-aufmass/index.html:468-471`: `border border-white/10 px-7 py-3.5 text-base`, kein Fill) und eine Stufe kleiner; H1 auf `tracking-[-0.03em]` + `text-wrap: balance`; beide `text-gray-500` auf `text-on-surface-variant`. |
| **Neues Layout** | Mobile: Badge → H1 → Subline (inkl. Zeitversprechen) → Primär-CTA + Outline-Link → **Demo**. Desktop unverändert zweispaltig. |
| **Komponenten** | `.btn-primary`, `.btn-secondary` (neu, s. §7), `.badge` (aus Inline nach `input.css` migriert). |
| **Icon** | Pfeil im Primär-CTA als 24×24-Inline-SVG (`arrow-right`), ersetzt das `→`-Zeichen in `2503`. |
| **Animation** | Keine neue. Bestehende Workflow-Sequenz bleibt, `top`-Keyframes auf `translateY` umgestellt (M10). |
| **Mobile** | Kurzantwort `display: none` unter 768px, Textstack von 6 auf 3 Blöcke. |
| **Wirkung** | Die Produktdemo rückt ~340px nach oben und ist im ersten Scroll sichtbar; klare CTA-Rangfolge statt zwei gleichwertiger Buttons. |

### Feature-Grid + Stat-Cards (2663–3315)

| | |
|---|---|
| **Zustand** | 8 Feature-Cards und 4 Stat-Cards, jede mit einem Unicode-Zeichen als Icon (`◌ ▣ ✦ ° ⌂ ✓ ◯ ⌁ ◷ § ⚒`). Alle nutzen `.glass-panel` mit Hover-Anhebung, obwohl es reine `<div>` ohne Link sind. |
| **Problem** | Zwölf Karten mit zwölf stilistisch unverbundenen Systemfont-Zeichen als visuellen Ankern – der dichteste Icon-Bereich der Seite ist zugleich der schwächste. Der Hover suggeriert Klickbarkeit, die nicht existiert. |
| **Verbesserung** | Alle Zeichen durch Inline-SVG aus dem neuen Set ersetzen (§5). `.glass-panel--static`-Variante ohne `transform`/Border-Hover für nicht-interaktive Karten. |
| **Neues Layout** | Unverändert (3×3 bzw. 4er-Reihe). Icon von 24px auf 28px, Icon-Container mit `--radius-md` und `background: var(--color-primary-wash)` für eine ruhige, wiederkehrende Ankerform. |
| **Komponenten** | `.icon` (24×24 SVG-Basisklasse), `.glass-panel--static`. |
| **Icon** | Bauplan-Import → gestapelte Blätter mit Pfeil; Raumerkennung → Grundriss-Rechteck mit hervorgehobener Zelle; Heizlast → Thermometer mit Skalenstrichen; Norm → aufgeschlagenes Buch mit Lesezeichen; Abgleich → Ventil mit Stellschraube; Zeit → Zifferblatt mit 7-Minuten-Sektor. Alle 24×24, `stroke-width: 1.75`, `stroke-linecap: round`. |
| **Animation** | Nur Hover: Icon-Stroke wechselt auf `--color-primary` über `--motion-fast`. Kein Draw-in bei 12 Karten (visuelles Rauschen). |
| **Mobile** | Unverändert einspaltig. |
| **Wirkung** | Der erste Screen nach dem Hero liest sich als entworfenes Set statt als Zeichenvorrat; Hover wird wieder ein verlässliches Interaktionssignal. |

### Home-Flow-SVG (2567–2622) und H2-Hierarchie

| | |
|---|---|
| **Zustand** | Dritte Visualisierung derselben drei Schritte (01 Import / 02 Prüfung / 03 Ergebnis). H2 dieser und der Folgesektion in `text-3xl md:text-4xl`, alle anderen Top-Level-H2 in `text-4xl md:text-5xl`. |
| **Problem** | Liefert gegenüber Hero-Animation und Interaktivdemo keine neue Information, kostet aber einen vollen Viewport unmittelbar nach dem Hero. Die kleinere H2 suggeriert zusätzlich fälschlich untergeordnete Wichtigkeit genau dort, wo der Sog in die Seite entstehen müsste. |
| **Verbesserung** | Sektion `2567-2622` streichen; H2 in `2629` auf `text-4xl md:text-5xl` anheben. |
| **Neues Layout** | Nach dem Hero folgt direkt „Direkt zum passenden Thema" – schnellerer Zugriff auf differenzierten Content. |
| **Wirkung** | Ein Viewport weniger Wiederholung, konsistente Hierarchiestufe für alle Hauptsektionen. |

### Beta-Signup + CTA-Banner (3698–3886)

| | |
|---|---|
| **Zustand** | `#beta-signup` zeigt Badge + H2 + Text + Button; das Formular darunter (`3722-3839`) trägt `hidden`, kein JS entfernt es. Direkt darauf folgt ohne Trenner der CTA-Banner mit identischer Struktur. |
| **Problem** | Zwei optisch nahezu gleiche Blöcke mit derselben Botschaft hintereinander; ~145 Zeilen totes Markup. |
| **Verbesserung** | Sektion `3698-3842` ersatzlos löschen. Der CTA-Banner leistet alles, was sie leistet. |
| **Wirkung** | Ein überzeugungsstarker Abschluss statt zwei redundanter Wiederholungen. |

### Footer (3910–4067)

Trigger `md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 lg:gap-12`. Tablet bekommt einen lesbaren 2-Spalten-Footer, Desktop behält die 5 Spalten ab 1024px.

## 4.2 `digitales-aufmass/index.html`

| | |
|---|---|
| **Zustand** | Hero ist ein 12s-CSS/SVG-Loop mit erfundener UI: gezeichneter Blueprint mit Labels WOHNEN/KÜCHE/BAD/FLUR/SCHLAFEN und einer simulierten Datei `grundriss_eg.pdf`, die per Keyframe über den Bildschirm gezogen wird. Identische SVG-Geometrie und identische Sequenz wie der Homepage-Hero, nur mit `aufmass-`-Präfix. Verifiziert: **kein einziges `<img>` ausser dem Nav-Logo**; `bauplan-import-review.webp` nur in `og:image` (`Zeile 37`) und JSON-LD (`248`). |
| **Problem** | Die Seite zu „Digitales Aufmaß" zeigt nichts Aufmaßspezifisches – keine Wandlänge, keine m²-Angabe, keine Korrektur eines erkannten Raums – und zeigt zugleich das reale Produkt nirgends. Wer von der Startseite kommt, sieht dieselbe Sequenz zweimal. |
| **Verbesserung** | Hero-Stage durch echte Screenshots ersetzen: `tablet/bauplan-import-review.webp` im `.prometo-shot__media`-Rahmen, wie `heizlastberechnung/app` es bereits vormacht. Optional Crossfade zwischen `bauplan-import-pdf-ausgewaehlt.webp` und `bauplan-import-review.webp` (zwei gestapelte `<img>`, `opacity`-Wechsel, kein neues JS). |
| **Neues Layout** | Zweispaltig: links Text + CTA-Paar, rechts Screenshot-Karte mit Caption („Erkannte Räume vor der Berechnung im Review"). Die freigewordene Custom-Animation entfällt ersatzlos – `digitales-aufmass-workflow.css` schrumpft um ~400 Zeilen. |
| **Komponenten** | `.prometo-shot__media` (existiert), `.btn-primary`/`.btn-secondary`. |
| **Icon** | Keins nötig – der Screenshot ersetzt das Icon. |
| **Animation** | Crossfade 600ms `--ease-out`, Wechsel alle 4s. Unter `prefers-reduced-motion` nur das Review-Bild. |
| **Mobile** | `max-w-sm` zentriert; `prometo-gallery.css` deckt das Verhalten bereits ab, kein neues Mobile-CSS. |
| **Wirkung** | Beweisbare Produktqualität statt Behauptung; die Kernaussage „Datenqualität vor Berechnung" bekommt ihren Beleg. |

## 4.3 `ki-assistent/index.html`

| | |
|---|---|
| **Zustand** | Hero ist ein 900×700-SVG mit Knoten „Normen/Produkte/Betrieb/Projekt" um einen Hub „Prometo Wissenssystem", 18s-Loop mit fliegenden Partikeln und einer 194×62px grossen simulierten Chat-Bubble mit 12px-SVG-Text. Verifiziert: **kein `<img>` ausser Nav-Logo**; `fachassistent-chat.webp` nur in `og:image`/`twitter:image` (`Zeilen 37, 47`). Sieben Textblöcke vor dem CTA (`958-1013`). Die „Beispiel-Fragen" sind eine `<table>` mit `min-width: 760px`. Drei „Baustellentauglich"-Bubbles (`1444-1457`) stehen statisch untereinander, obwohl die Überschrift verspricht, die App zeige „klar, dass die Antwort vorbereitet wird". |
| **Problem** | Eine Seite namens „KI-Assistent" mit dem Versprechen „mit eigenen Daten chatten" zeigt keine lesbare Chat-Nachricht und keinen einzigen echten Screen. Der Wissensgraph erklärt eine Backend-Architektur, nicht die Nutzererfahrung. Auf der Seite, deren Kernversprechen „Fragen in normalem Deutsch stellen" ist, wird das Beispiel als horizontal scrollende Spezifikationstabelle präsentiert. |
| **Verbesserung** | Hero: `mobile/fachassistent-chat.webp` im `.prometo-shot__media`-Rahmen, ergänzt um 1–2 HTML/CSS-Chat-Bubbles als Overlay (keine SVG-Fantasiegrafik) mit einer der real vorhandenen Beispielfragen (`1357`). Der Wissensgraph wandert in die „personalisieren"-Sektion (`1286-1330`), wo er thematisch passt. Beispiel-Fragen-Tabelle → 4 Chat-Karten mit den bereits definierten `.question-bubble`/`.answer-bubble` (`218-228`). Die drei Warte-Bubbles zu einer sequenziellen Loop mit den bereits vorhandenen `.typing-dot` (`201-216`). |
| **Neues Layout** | Hero zweispaltig: links Text + CTA, rechts Screenshot mit zwei überlagerten Bubbles. Beispiel-Sektion 2-spaltig Desktop / 1-spaltig Mobile, keine Tabelle. |
| **Komponenten** | `.prometo-shot__media`, `.question-bubble`/`.answer-bubble` (existieren, bisher nur 2× genutzt), `.typing-dot` (existiert). |
| **Icon** | Keins im Hero. In den Chat-Karten je ein 20×20-Themen-Icon links der Frage (Norm → Buch, Material → Karton, Baustelle → Helm). |
| **Animation** | Frage-Bubble erscheint (400ms fade + translateY 8px) → 3 typing-dots 1,2s → Antwort-Bubble; Gesamtsequenz ~3s, Loop-Pause 4s. Warte-Bubbles: je 1,5s sichtbar mit vorangestellten Dots, 300ms Fade, Endlosloop. |
| **Mobile** | Screenshot + eine Bubble, gleiche Breite wie die `hero-media-card` anderer Seiten. Chat-Karten einspaltig – die horizontale Scrollbar entfällt vollständig. |
| **Wirkung** | „Das ist ein Chat in meiner App" statt „irgendein Netzwerkdiagramm"; das behauptete Warteverhalten wird tatsächlich gezeigt statt beschrieben. |

## 4.4 `heizlastberechnung/app/index.html`

| | |
|---|---|
| **Zustand** | H1 (`339`) verspricht „Heizlastberechnung direkt aus dem PDF-Grundriss", die drei Hero-Chips (`390-401`) sprechen von Grundriss-Import und Raumdaten – gezeigt wird `projektassistent-projektbasis.webp` (Adress- und Geocoding-Formular). Weiter unten zeigt `504-511` `bauplan-import-review.webp` mit `object-cover object-top` und sichtbaren „Issues: 24", OCR-Bug und englischem Debug-String. |
| **Problem** | Bild und Text laufen genau an der Stelle auseinander, die das Leistungsversprechen in Sekunden belegen soll. Der zweite Screenshot widerlegt die Caption direkt daneben. |
| **Verbesserung** | Hero-Screenshot gegen `tablet/bauplan-import-review.webp` oder `projektdetail-bivalenzpunkt.webp` tauschen. Für den Review-Screenshot: neuer Export mit bereinigtem Datensatz (0–2 plausible, übersetzte Hinweise) – ersatzweise `object-position` so setzen, dass der Issues-Block ausserhalb des sichtbaren Crops liegt. |
| **Komponenten** | Bestehende `.hero-media-card` / `.prometo-shot__media`. |
| **Wirkung** | Hero belegt die Headline statt sie zu unterlaufen; der Review-Screenshot bestätigt statt widerlegt das Versprechen zuverlässiger Raumerkennung. |
| **Zusatz** | „EFH-Beispiel" (`693-704`) ist ein 3-Spalten-Textblock ohne Pfeil, Icon oder Verbindungslinie – das bereits auf derselben Seite vorhandene SVG-Flow-Pattern (`429-450`) mit den EFH-Inhalten als Node-Labels wiederverwenden. Keine neue Komponente. |

## 4.5 `heizlastberechnung/index.html`

Drei gleichrangige CTAs im Hero (`373-386`): Conversion-Button plus zwei interne Content-Links. „Heizlast-Checkliste" in die bereits vorhandene Card-Reihe darunter (`387-400`) verschieben, im Hero nur Primär-CTA + „DIN EN 12831 erklärt" als Outline-Sekundär. Ein klarer Handlungsimpuls statt drei konkurrierender Optionen.

## 4.6 `hydraulischer-abgleich/index.html`

| | |
|---|---|
| **Zustand** | Verifiziert: 0 `<table>`, `.formula-box` definiert (`105`) aber 0× im Body. „Verfahren A und B" nur als Begriff genannt (`641`), nie verglichen. Das „EFH-Beispiel" (`741-751`) besteht aus drei Ein-Satz-Karten ohne einen einzigen Zahlenwert. |
| **Problem** | Das rechnerisch anspruchsvollste Thema der Seitengruppe ist die einzige Seite ohne jeden quantitativen Inhalt – ein SHK-Fachleser bekommt Marketing-Prosa, wo die Schwesterseiten Fachtiefe liefern. |
| **Verbesserung** | `.formula-box` mit der Volumenstromformel `V̇ = Q̇ / (1,16 × ΔT)` analog `heizlast/index.html:652-681`, Variablenlegende als Bullet-Liste. Vergleichstabelle Verfahren A vs. B (Spalten: Datenbasis, Aufwand, Fördernachweis) im neuen `.data-table`-Stil. EFH-Beispiel als echte Durchrechnung mit Zahlen. |
| **Neues Layout** | Formel-Box → Verfahrensvergleich → durchgerechnetes Beispiel, jeweils in `--container-content`. |
| **Icon** | Verteiler-Schema als eigenes SVG: Verteilerbalken mit 4 abgehenden Heizkreisen, jeder mit Ventilsymbol, aktiver Kreis in `--color-primary`. |
| **Animation** | Im Verteiler-Schema: Flow-Punkt via `offset-path` entlang eines Heizkreises, analog `seo-explainers.css:32-39`. |
| **Wirkung** | Die Seite wird fachlich verwertbar statt reiner Trust-Text. |

## 4.7 `waermeerzeuger/index.html`

Vier isolierte Textkarten (`544-572`) für Wärmepumpe / Wärmenetz / Biomasse / Hybrid ohne gemeinsame Vergleichsachse. Ersetzen durch `.data-table` mit Zeilen je Erzeuger und Spalten Vorlauftemperatur / Neubau / Bestand / Platzbedarf, mit der ✓/!/✗-Symbolik aus `leitfaden/index.html:645-647`. Die Auswahlentscheidung wird in Sekunden erfassbar statt durch Lesen von vier Absätzen.

## 4.8 `heizlastberechnung/din-12831/index.html`

Das Rechenbeispiel (`648-668`) steht als `<p>` mit manuellen `<br />`-Umbrüchen, ohne Ausrichtung von Rechenzeichen oder Ergebnisspalte – obwohl `.formula-box` im selben Style-Block existiert. Ersetzen durch eine schmale Rechentabelle (Bauteil | Rechnung | Ergebnis W, rechtsbündige Zahlenspalte, Summenzeile mit `border-top` und `--color-primary`). Zusätzlich: Variablenlegende von Fliesstext (`594-598`) auf die Bullet-Liste-Form aus `heizlast/index.html` umstellen – betrifft 5× din-12831, 2× schaetzwerte, 5× leitfaden.

## 4.9 `beta/index.html` + `beta/danke/index.html`

| | |
|---|---|
| **Zustand** | Formularfelder korrekt mit `<label>`, Honeypot sauber. Aber verifiziert: 0 `focus`-, 0 `disabled`-, 0 `appearance`-Regeln in `prometo-marketing.css`. `form novalidate` + `reportValidity()` (`beta-form.js:45`) löst native Browser-Blasen aus. `.role-pill label` ~31,6px hoch. Danke-Seite: 38 Zeilen, bricht das `.marketing-hero-grid`-Muster ersatzlos. |
| **Problem** | Die Conversion-kritischste Seite hat keinen einzigen gestalteten Interaktionszustand. Fokus = Browser-Blau, Submit = kein Feedback während 1–3s fetch, Fehler = helle System-Sprechblase in Systemschrift mitten im dunklen Cyan-Design, Select = nativer OS-Pfeil. |
| **Verbesserung** | Fokusring, `[aria-busy]`-Spinner, `:user-invalid`-Feldmarkierung mit Fehlertext pro Feld statt `reportValidity()`, `appearance: none` mit eigenem SVG-Pfeil – alle vier als CSS in §7 ausformuliert. `.role-pill label` auf `min-height: 44px`. Danke-Seite um eine `.marketing-check-list` mit konkretem Ablauf ergänzen („1. Anmeldung eingegangen · 2. Prüfung (1–2 Werktage) · 3. E-Mail mit Zugang"). |
| **Icon** | Bestätigungshaken (24×24 SVG, Kreis + Haken) neben dem Eyebrow der Danke-Seite. |
| **Animation** | Submit-Spinner: 0,6s linear rotierender Ring aus `currentColor` via `::after`, keine neue Abhängigkeit. |
| **Wirkung** | Das Formular fühlt sich wie Teil des Produkts an statt wie ein Standard-HTML-Formular; Doppel-Submits werden verhindert; der Nutzer verlässt die Danke-Seite mit einer konkreten Erwartung. |

## 4.10 Vergleichsseiten (`autarc-reonic-alternative`, `heizlast-software-vergleich-shk`)

Inhaltlich vorbildlich (Prüfdatum, Quellen, ehrliches „nicht ausgewiesen"), visuell ungenutzt: alle `<td>` in derselben Farbe, Prometo-Spalte nicht hervorgehoben, `min-width: 880px` mit unsichtbarem Overflow. Lösung ohne Text-Rewrite: `data-state`-Attribut je `<td>` (`yes`/`no`/`unclear`) plus CSS-Farbcodierung, Prometo-Spalte mit `background: rgba(107,246,255,.06)` als Scan-Anker beim horizontalen Scrollen, Fade-Kante rechts am Wrapper plus Hinweistext analog `.showcase-swipe-hint`. Unter 768px auf gestapelte Karten umschalten (eine Karte pro Anbieter) – das tabellarische Muster passt nicht zu Zellen mit über 40 Zeichen.

## 4.11 `impressum.html`, `datenschutz.html`

Zusätzlicher `tailwind.css`-Import und eigener `<style>`-Block mit ein drittes Mal hardcodierten Markenfarben (`#0b0e0e`, `#45dee7`, `#6bf6ff`). Ohne den `body.marketing-body`-Radialgradienten wirken die Seiten als flache Volltonfläche. Content in `marketing-shell`/`marketing-section-heading`/`marketing-copy` überführen, `text-gray-500`/`-600` auf `--color-text-subtle` (7,15:1) umstellen – behebt zugleich K6.

---

# 5. Neues visuelles Gesamtkonzept

## Leitidee: **Der geprüfte Plan**

Prometo nimmt einen unstrukturierten PDF-Grundriss und macht daraus eine geprüfte, normkonforme Zahl. Die visuelle Sprache bildet genau diesen Vorgang ab: **von der Zeichnung zur Messung zur Zahl.**

Konkret heisst das drei Dinge, aus denen jede Einzelentscheidung ableitbar ist:

**1. Die Fläche ist ein Bauplan, kein Marketing-Verlauf.**
Der dunkle Hintergrund ist keine „dark mode"-Mode, sondern ein Planhintergrund. Struktur entsteht durch **dünne, präzise Linien** – 1px, kühl, exakt ausgerichtet –, nicht durch weiche Schatten oder Farbverläufe. Ableitung: Karten definieren sich über ihre Border (`--color-line`), nicht über Elevation. Trennlinien sind wichtiger als Abstände. Ein Raster ist sichtbar, wo Daten geordnet sind (Tabellen bekommen Zellrahmen, keine schwebenden Zeilen). Radiale Glows bleiben – aber als Atmosphäre am Seitenrand, nie als Ersatz für strukturgebende Linien innerhalb einer Komponente.

**2. Cyan ist der Wärmestrom, nicht die Corporate Colour.**
`--color-primary` markiert das, was **fliesst, gemessen oder berechnet** wird: das laufende Analyse-Ergebnis, den aktiven Heizkreis, die geprüfte Zahl, den Fokusring auf dem Feld, das der Nutzer gerade bearbeitet. Es markiert nicht dekorativ jede zweite Überschrift. Ableitung: Wenn eine Fläche cyan ist, muss die Frage „was fliesst hier?" beantwortbar sein. Ergebniszahlen sind cyan; Erklärtext ist es nie. Der Primär-CTA ist cyan, weil er der Eintritt in den Rechenweg ist – der Sekundär-CTA ist es nicht.

**3. Jede Zahl zeigt ihre Herkunft.**
Das Produktversprechen ist Nachvollziehbarkeit nach DIN EN 12831. Die Seite muss dasselbe tun: Kein Ergebnis ohne den Weg dorthin, keine Behauptung ohne Beleg. Ableitung: Screenshots bekommen Captions, die benennen was zu sehen ist *und warum es relevant ist* (Muster: `heizlastberechnung/app/index.html:480-568`). Formeln bekommen Variablenlegenden als Liste. Rechenbeispiele bekommen eine Ergebnisspalte, keine `<br>`-Absätze. Vergleichstabellen bekommen Prüfdatum und Quelle. Wo eine Marketingaussage steht, steht ein Screenshot daneben – nicht eine Illustration davon.

## Markencharakter

**Präzise, ruhig, werkzeughaft.** Prometo ist kein Startup-Produkt, das Aufregung verkauft, sondern ein Messgerät, das man auf der Baustelle dabei hat. Der visuelle Ton liegt näher an einem gut gebauten Multimeter als an einer Fintech-Landingpage: dunkel, kontraststark, wenige Farben, jede davon mit Bedeutung, keine überflüssige Bewegung. Wärme entsteht nicht durch Farbe, sondern durch Sorgfalt im Detail – gleichmässige Abstände, sauber ausgerichtete Zahlen, Icons aus einem Guss.

## Designprinzipien

1. **Linie vor Schatten.** Struktur entsteht durch Rahmen. Schatten nur für echte Ebenen (Lightbox, Dropdown, Sticky-Header).
2. **Beleg vor Behauptung.** Jede Produktseite zeigt das Produkt. Illustration nur dort, wo kein Screenshot existieren kann (Physik, Norm, Prozess).
3. **Ein Farbsignal pro Bildschirm.** Auf einem Viewport steht ein cyan hervorgehobenes Element. Zwei konkurrieren, drei sind Rauschen.
4. **Bewegung erklärt oder entfällt.** Eine Animation, die keinen Zustandswechsel oder Prozess zeigt, wird gelöscht.
5. **Die kleinste Einheit gewinnt.** Bevor eine Komponente neu gebaut wird: existiert sie im Projekt? (Beleg: fünf Tabellen, drei Eyebrows, zehn Button-Strings – jedes Mal war die Antwort ja.)
6. **Mobile ist Baustelle.** Ein Handwerker hält ein Gerät in einer Hand, oft mit Handschuh, oft bei Tageslicht. 44px Mindestziel, hoher Kontrast, keine horizontalen Scrollfallen, keine Animation, die Frames kostet.

## Bildsprache

**Ausschliesslich echte App-Screenshots.** Keine Stockfotos, keine gerenderten Geräte-Mockups mit Reflexionen, keine Handwerker-Symbolbilder. Jeder Screenshot ist ein kuratierter Lauf mit plausiblen Daten – ein Screenshot mit „Issues: 24" und englischem Debug-String ist ein Fehler, kein Rohmaterial.

Phone-Screenshots erhalten den bereits gebauten `.phone-mockup`-Rahmen mit Notch (`index.html:1140-1199`), ausgelagert nach `prometo-gallery.css` und auf allen Produktseiten verfügbar – aktuell nutzt ihn nur die Homepage, während die Seiten, auf denen die Kaufentscheidung fällt, den schmuckloseren Rahmen bekommen. Tablet-Screenshots bleiben in der rahmenlosen `.prometo-shot__media`-Karte, da das Seitenverhältnis den Gerätekontext ohnehin trägt.

Jeder Screenshot hat eine Caption. Die Caption benennt den Screen und seinen Zweck, nicht das Offensichtliche.

## Icon-Stil

**Ein einziges eigenes Set, 24×24, Inline-SVG.** Vorlage ist `.school-icon` (`index.html:996-1016`), das bereits im Projekt liegt und beweist, dass das Muster funktioniert.

- ViewBox `0 0 24 24`, `fill="none"`, `stroke="currentColor"`
- `stroke-width: 1.75`, `stroke-linecap: round`, `stroke-linejoin: round`
- Optisches Raster: 2px Aussenabstand, Formen auf ganze bzw. halbe Pixel ausgerichtet
- Keine gefüllten Flächen, keine zwei Strichstärken in einem Icon, keine Farbe im Icon selbst – Farbe kommt über `currentColor` vom Kontext
- Motivwelt aus dem Fach: Grundriss, Bemaßungslinie, Thermometer, Ventil, Verteiler, Normbuch, Prüfhaken, Blatt mit Falz. Keine Raketen, keine Glühbirnen, keine Zahnräder als Metapher für „Einstellungen", wenn ein Schieberegler das Gleiche präziser sagt.

Die Material-Symbols-Infrastruktur (`input.css:110-137`, `input-home.css:111-130`, das 2,4-KB-Subset) wird nach der Migration ersatzlos entfernt. `accessibility.js:135-139` bekommt den neuen Selektor.

## Illustrationsstil

Illustration wird knapp eingesetzt und nur dort, wo kein Screenshot existieren kann: physikalische Zusammenhänge (Wärmestrom durch die Gebäudehülle, U-Wert-Schichtaufbau), Geografie (Klimazonen/Normaussentemperatur – explizit im Text erwähnt, nie visualisiert) und Anlagenschemata (Verteiler mit Heizkreisen).

Stil: **technische Zeichnung, keine Infografik.** Dünne Linien in `--color-line-strong`, Flächen nur als sehr schwache Tönung, ein einziges cyan hervorgehobenes Element pro Illustration – das, worum es geht. Beschriftungen in derselben Schrift wie der Fliesstext, klein, ohne Rahmen. Ein Wandquerschnitt sieht aus wie in einem Fachbuch, nicht wie in einer Präsentation.

Das generische 3-Knoten-Flow-SVG (`seo-explainers.css`) ist kein Pflichtbaustein jeder Seite mehr. Es bleibt dort, wo tatsächlich ein Prozess in drei Schritten abläuft, und verschwindet dort, wo es nur Deko ist.

## Animationsstil

**Messgerät, nicht Werbespot.** Bewegung zeigt entweder einen Zustandswechsel (Element erscheint, Wert ändert sich, Schritt wird erledigt) oder einen Prozess (etwas fliesst von A nach B). Alles andere entfällt.

Konkret: Eingangsbewegungen sind kurz und kommen von unten (8–22px), nie von der Seite, nie mit Rotation oder Overshoot – ein Messwert wackelt nicht. Prozessanimationen laufen linear und in eine Richtung (Scanline von oben nach unten, Flow-Punkt entlang der Leitung), weil sie einen physischen Vorgang abbilden. Erfolgszustände erscheinen ohne Bounce. Loops laufen langsam (12–18s) und ruhig genug, dass sie beim Lesen nicht stören.

## Produktinszenierung

Der Ablauf ist auf jeder Produktseite derselbe, in dieser Reihenfolge: **Screenshot → Caption → Erklärung → Beleg.**

Genau eine Seite darf die aufwendige Custom-Animation tragen: die Startseite. Dort beantwortet sie die Frage „wie funktioniert das überhaupt?" für jemanden, der Prometo nicht kennt. Auf allen weiteren Seiten hat der Nutzer diese Frage bereits beantwortet und stellt die nächste: „sieht das echt so aus?" – darauf antwortet nur ein Screenshot. Deshalb wird die duplizierte Aufmaß-Animation ersetzt und nicht erweitert.

---

# 6. Motion-System

Alle Werte als Custom Properties in `@theme` von `input.css` **und** `input-home.css` (bis §7-Schritt 1 die Duplikation auflöst).

```css
/* ── Dauern ───────────────────────────────────────────────
   Vier Stufen. Deckt die 58 vorgefundenen Werte ab:
   der 0.18–0.3s-Cluster (43 von 58) wird zu --motion-fast/-base. */
--motion-instant: 90ms;    /* Farbwechsel, Border-Wechsel, Icon-Tint */
--motion-fast:   180ms;    /* Hover, Fokus, Button-Press, Tab-Wechsel */
--motion-base:   320ms;    /* Card-Lift, Akkordeon, Panel-Ein-/Ausblendung */
--motion-reveal: 720ms;    /* Scroll-Reveal (deckt 0.7/0.72/0.9s ab) */

/* Loops – eigene Kategorie, keine Interaktion, laufen dauerhaft */
--motion-loop:      12s;   /* Workflow-Demo, Scanline */
--motion-loop-long: 18s;   /* Wissensgraph, mehrstufige Erklärsequenzen */

/* ── Easings ──────────────────────────────────────────────
   Zwei Kurven. Mehr braucht kein Produkt dieser Grösse. */
--ease-out:      cubic-bezier(0.2, 0.8, 0.2, 1);  /* Entrances, Reveals, Panels */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);    /* Hover, Fokus, Zustandswechsel */
--ease-linear:   linear;                          /* Loops, Spinner, Flow-Punkte */
/* Kein Bounce, kein Back, kein Elastic. Ein Messwert schwingt nicht nach. */

/* ── Distanzen ────────────────────────────────────────────
   Ein Wert je Zweck statt 22px hier / 40px dort. */
--motion-lift:   -4px;   /* Hover-Anhebung, ersetzt -4px/-5px-Mischung */
--motion-rise:   14px;   /* Reveal-Startversatz nach unten */
--motion-nudge:  8px;    /* Bubble-Eintritt, Tooltip, kleine Elemente */

/* ── Verzögerungen ────────────────────────────────────────
   Staffelung in Karten-Reihen. Maximal 4 Stufen; bei mehr
   Elementen wiederholt sich der Zyklus statt weiterzuzählen. */
--motion-stagger: 80ms;
```

## Animationstypen und ihre Regeln

| Typ | Trigger | Eigenschaften | Dauer / Easing | Richtung | Wiederholung |
|---|---|---|---|---|---|
| **Scroll-Reveal** | IntersectionObserver (`page-effects.js:31-55`, threshold 0.14) | `opacity`, `transform: translateY` | `--motion-reveal` / `--ease-out` | von unten (`--motion-rise`) | einmalig, `is-visible` bleibt |
| **Hover-Lift** | `:hover` auf interaktiven Karten | `transform: translateY`, `border-color` | `--motion-fast` / `--ease-standard` | nach oben (`--motion-lift`) | reversibel |
| **Fokus** | `:focus-visible` | `outline`, `box-shadow` | `--motion-instant` / `--ease-standard` | keine Bewegung | reversibel |
| **Press** | `:active` auf Buttons | `transform: scale(0.97)` | `--motion-instant` / `--ease-standard` | – | reversibel |
| **Panel/Akkordeon** | Klick | `max-height`, `opacity` | `--motion-base` / `--ease-out` | vertikal | reversibel |
| **Prozess-Loop** | permanent, nur bei Sichtbarkeit | `transform`, `opacity`, `offset-distance`, `stroke-dashoffset` | `--motion-loop` / `--ease-linear` | eine Richtung | infinite |
| **Erklärsequenz** | permanent | wie oben, mehrstufig via `animation-delay` | `--motion-loop-long` / `--ease-in-out` | eine Richtung | infinite |
| **Spinner** | `[aria-busy="true"]` | `transform: rotate` | `600ms` / `--ease-linear` | im Uhrzeigersinn | infinite bis fertig |

## Verbindliche Property-Regel

Animiert werden dürfen: `opacity`, `transform`, `offset-distance`, `stroke-dashoffset`, `outline-color`, `border-color`, `color`, `background-color`.

**Verboten in Dauerschleifen:** `top`/`left`/`width`/`height` (Layout), `box-shadow`/`filter` (Paint). Konkrete Migration: `workflow-scan` (`index.html:877-882`), `aufmass-scan` (`digitales-aufmass-workflow.css:390-395`) und `scan-sweep` (`index.html:1820-1838`) von `top` auf `translateY` – die Elemente sind bereits `position: absolute`, der Austausch ist direkt. `step-pulse` (`index.html:1865-1875`) von animiertem `box-shadow` auf ein `::after` mit statischem Schatten und animierter `opacity`.

`filter: blur(6px)` verlässt den Reveal-Standard (`page-effects.css:1-16`) und wird zum Opt-in-Modifier:

```css
.reveal {
  opacity: 0;
  transform: translate3d(0, var(--motion-rise), 0);
  transition:
    opacity   var(--motion-reveal) var(--ease-out),
    transform var(--motion-reveal) var(--ease-out);
}
.reveal.is-visible { opacity: 1; transform: translate3d(0, 0, 0); }

/* Opt-in, nur für einzelne Hero-Bilder */
.reveal--blur { filter: blur(6px); transition: filter var(--motion-reveal) var(--ease-out); }
.reveal--blur.is-visible { filter: blur(0); }
```

`will-change` wird nie statisch deklariert (`index.html:1993-1999` entfernen). Wo es nötig ist, wird es per Klasse für die Dauer der Animation gesetzt und im `animationend`-Handler entfernt.

## Mobile-Verhalten

Bewegung wird auf Mobile **nicht** pauschal abgeschaltet – die einzige erklärende Animation des Projekts verschwindet derzeit unter 768px (`seo-explainers.css:95-101`). Diese Regel entfällt ersatzlos; die reduced-motion-Regel darüber deckt den Accessibility-Fall bereits ab.

Stattdessen gilt:
- Dauern bleiben identisch – ein langsameres Mobile fühlt sich träge an, nicht ruhiger.
- Distanzen werden nicht reduziert; `--motion-rise` = 14px funktioniert auf beiden Grössen.
- Loops laufen weiter, aber nur solange sichtbar: `animation-play-state: paused` als Default, per IntersectionObserver auf `running` – spart Batterie ohne den Erklärwert zu opfern.
- Parallax und Cursor-gebundene Effekte entfallen auf Touch vollständig (existieren derzeit nicht, bleibt so).

## Reduced-Motion-Verhalten

Nicht „alles aus", sondern **Endzustand statt Ablauf** – das im Projekt bereits vorbildlich gelöste Muster (`index.html:2158-2198`, `digitales-aufmass-workflow.css:486-499`) wird zur verbindlichen Regel.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  /* Reveals dürfen nicht unsichtbar hängenbleiben */
  .reveal { opacity: 1; transform: none; filter: none; }
}
```

Zusätzlich pro mehrstufiger Demo: der sinnvolle Endzustand wird explizit gesetzt (Blueprint sichtbar, Schritte auf „erledigt", Ergebnis eingeblendet), nie eine leere Bühne.

---

# 7. Designsystem

## 7.1 Tokens

Ein einziger `@theme`-Block. Schritt 1 der Umsetzung ist, den Font-Face- und Icon-Teil aus `input.css`/`input-home.css` in eine gemeinsame `shared-base.css` auszulagern, die beide importieren – das behebt zugleich H9.

```css
@theme {
  /* ── Flächen ─────────────────────────────────────── */
  --color-background:             #0b0e0e;
  --color-surface:                #0f1414;
  --color-surface-dim:            #0f1414;
  --color-surface-container-low:  #171c1c;
  --color-surface-container-high: #262b2b;

  /* ── Primär / Akzent (unverändert – funktionierende Palette) ── */
  --color-primary:                #45dee7;
  --color-primary-fixed:          #6bf6ff;
  --color-tertiary:               #79d9e6;
  --color-on-primary:             #003739;
  --color-on-primary-container:   #004a4e;
  --color-on-tertiary-fixed:      #001f23;
  --color-outline-variant:        #3c494a;
  /* Sehr schwache Primär-Tönung für Icon-Container, aktive Zellen,
     Prometo-Spalte in Vergleichstabellen */
  --color-primary-wash:           rgba(69, 222, 231, 0.08);

  /* ── Text: drei Rollen ersetzen 1.437 text-gray-* und 22 Hex-Graus ── */
  --color-text:        #f5fbfb;  /* 17.6:1 – Headlines, Ergebniszahlen */
  --color-text-muted:  #bbc9ca;  /* 11.4:1 – Fliesstext, Sublines */
  --color-text-subtle: #90a1a3;  /*  7.2:1 – Captions, Meta, Datum, Breadcrumbs */
  /* Alles darunter ist verboten. text-gray-500 (4.0:1) und
     text-gray-600 (2.6:1) fallen bei WCAG AA durch. */

  /* ── Semantikrollen (bisher gar nicht im Haupt-Theme) ── */
  --color-success:    #7cf2bf;  --color-on-success: #00381d;
  --color-warning:    #ffb061;  --color-on-warning: #3d2100;
  --color-danger:     #ff9d9d;  --color-on-danger:  #4a0000;
  --color-info:       #6bf6ff;  --color-on-info:    #001f23;
  /* Ersetzt bg-yellow-500/50, bg-red-500/50, bg-green-500/50 —
     alle vier Paare gegen ihre Füllfarbe geprüft: 8.2–13.3:1. */

  /* ── Linien: zwei Rollen statt border-white/5..10 + border-primary/20..40 ── */
  --color-line:        rgba(255, 255, 255, 0.08);
  --color-line-strong: rgba(69, 222, 231, 0.24);

  /* ── Typografie ───────────────────────────────────
     Fluid als Standard – das bisher beste System des Projekts
     (prometo-marketing.css:105-120) wird projektweit gültig. */
  --font-headline: 'Space Grotesk', system-ui, sans-serif;
  --font-body:     'Manrope', system-ui, sans-serif;

  --text-h1: clamp(2.65rem, 6vw, 5.8rem);
  --text-h2: clamp(2rem, 4.2vw, 3.9rem);
  --text-h3: clamp(1.2rem, 2.2vw, 1.65rem);

  --tracking-h1: -0.055em;
  --tracking-h2: -0.04em;
  --tracking-h3: -0.02em;
  --leading-display: 1.08;
  --leading-body:    1.65;

  /* ── Spacing: Tailwind-4px-Raster bleibt unverändert ──
     Empirisch bereits sauber genutzt, einziger Bereich ohne Wildwuchs. */

  /* ── Container: drei Rollen statt neun Werten ── */
  --container-wide:   80rem;   /* 1280px – Hero, Layout-Sektionen (= max-w-screen-xl) */
  --container-content:48rem;   /*  768px – Lesetext, Artikel (= max-w-3xl) */
  --container-narrow: 36rem;   /*  576px – Formulare, schmale Karten */

  /* ── Radien: fünf Stufen, decken alle vorgefundenen Werte ab ── */
  --radius-sm:   0.75rem;  /* 12px – Inputs, Badges, Icon-Container */
  --radius-md:   1rem;     /* 16px – kleine Karten (= rounded-2xl) */
  --radius-lg:   1.5rem;   /* 24px – Standardkarte (= rounded-3xl, ersetzt 43× rounded-[1.5rem]) */
  --radius-xl:   2rem;     /* 32px – Hero-Karten (= 105× rounded-[2rem]) */
  --radius-full: 999px;    /* Pills, Buttons */
  /* rounded-[1.75rem] (14×) auf --radius-xl konsolidieren,
     rounded-[40px]/[2.5rem] (je 2×) auf --radius-xl. */

  /* ── Schatten: drei Rollen statt sieben Ad-hoc-Glows ── */
  --shadow-glow:  0 0 24px rgba(69, 222, 231, 0.4);  /* ersetzt 0_0_20px..40px @ .35-.5 */
  --shadow-card:  0 28px 80px rgba(0, 0, 0, 0.34);
  --shadow-layer: 0 24px 60px rgba(0, 0, 0, 0.5);    /* Lightbox, Dropdown, Sticky */

  /* ── Motion: siehe §6 ── */
}
```

**Breakpoints:** exakt vier Werte projektweit – 640 / 768 / 1024 / 1280. Alle eigenen Media-Queries werden gemappt: 767→768 (als `min-width`), 620→640, 1023→1024, 860→768 *oder* 1024 je Komponente, 1100→1024, 520 entfällt.

**Sekundäres Token-Set auflösen:** `site-navigation.css:25-49` und `prometo-marketing.css:25-49` behalten ihre Variablennamen als Aliase, referenzieren aber die Theme-Tokens statt eigener Hex-Werte – Tailwind-v4-`@theme`-Properties sind zur Laufzeit als normale Custom Properties verfügbar:

```css
:root {
  --bg:            var(--color-background);
  --text:          var(--color-text);
  --text-soft:     var(--color-text-muted);
  --text-muted:    var(--color-text-subtle);
  --primary:       var(--color-primary-fixed);
  --primary-strong:var(--color-primary);
  --line:          var(--color-line);
  --shadow:        var(--shadow-card);
}
```
Damit propagiert jede Farbänderung von einer Stelle aus, ohne dass eine einzige Regel in den beiden Dateien angefasst werden muss.

## 7.2 Komponentenregeln

Alle als `@layer components` in `input.css`.

### Buttons

Ersetzt zehn Utility-String-Varianten und sieben Glow-Werte durch drei Klassen.

```css
@layer components {
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
    min-height: 2.75rem;              /* 44px – Touch-Minimum, gilt auch Desktop */
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-full);
    font-family: var(--font-headline); font-weight: 700; font-size: 0.9375rem;
    line-height: 1; text-decoration: none; cursor: pointer;
    border: 1px solid transparent;
    transition:
      background-color var(--motion-fast) var(--ease-standard),
      border-color     var(--motion-fast) var(--ease-standard),
      box-shadow       var(--motion-fast) var(--ease-standard),
      transform        var(--motion-instant) var(--ease-standard);
  }
  .btn:active { transform: scale(0.97); }          /* verbindlich, nicht optional */
  .btn:focus-visible {
    outline: 2px solid var(--color-primary-fixed);
    outline-offset: 3px;
  }
  .btn[disabled], .btn[aria-busy="true"] {
    opacity: 0.6; pointer-events: none; cursor: progress;
  }
  .btn[aria-busy="true"]::after {
    content: ""; width: 14px; height: 14px; margin-left: 4px;
    border: 2px solid currentColor; border-right-color: transparent;
    border-radius: 50%; animation: btn-spin 600ms var(--ease-linear) infinite;
  }
  @keyframes btn-spin { to { transform: rotate(360deg); } }

  .btn-primary {
    background: var(--color-primary); color: var(--color-on-primary);
  }
  .btn-primary:hover { box-shadow: var(--shadow-glow); }

  /* Sekundär ist Outline ohne Fill und eine Stufe kleiner –
     behebt die gleichrangigen Hero-Buttons auf index.html:2498-2509 */
  .btn-secondary {
    background: transparent; color: var(--color-text);
    border-color: var(--color-line); font-size: 0.875rem;
    padding: 0.625rem 1.5rem;
  }
  .btn-secondary:hover {
    border-color: var(--color-line-strong); background: var(--color-primary-wash);
  }

  .btn-ghost { background: transparent; color: var(--color-text-muted); border-color: transparent; }
  .btn-ghost:hover { color: var(--color-text); background: var(--color-primary-wash); }
}
```

**Regel:** Pro Sektion genau ein `.btn-primary`. Ein zweiter Primärbutton im selben Viewport ist ein Fehler.

### Cards

```css
.card {
  background: rgba(38, 43, 43, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
}
/* Nur klickbare Karten heben an – behebt M3 */
.card--interactive {
  transition: transform var(--motion-fast) var(--ease-standard),
              border-color var(--motion-fast) var(--ease-standard);
}
.card--interactive:hover { transform: translateY(var(--motion-lift)); border-color: var(--color-line-strong); }
.card--interactive:focus-within { border-color: var(--color-line-strong); }
.card--hero { border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--shadow-card); }
```
`.glass-panel` bleibt als Alias auf `.card` bestehen, damit der Umstieg schrittweise erfolgen kann; die 8 Feature- und 4 Stat-Cards der Homepage verlieren ihren Hover.

### Inputs

Behebt K5 vollständig.

```css
.field label {
  display: block; margin-bottom: 0.5rem;
  font-size: 0.875rem; font-weight: 600; color: var(--color-text-muted);
}
.field input, .field select, .field textarea {
  width: 100%; min-height: 2.75rem; padding: 0.75rem 1rem;
  background: #0a1415; color: var(--color-text);
  border: 1px solid var(--color-line); border-radius: var(--radius-sm);
  font-family: var(--font-body); font-size: 1rem;
  transition: border-color var(--motion-fast) var(--ease-standard),
              box-shadow   var(--motion-fast) var(--ease-standard);
}
.field input::placeholder, .field textarea::placeholder { color: var(--color-text-subtle); }

.field input:focus-visible, .field select:focus-visible, .field textarea:focus-visible {
  outline: none;
  border-color: var(--color-primary-fixed);
  box-shadow: 0 0 0 3px rgba(107, 246, 255, 0.25);
}
/* :user-invalid statt :invalid – markiert erst nach Nutzerinteraktion,
   nicht beim Laden eines leeren Formulars */
.field input:user-invalid, .field select:user-invalid, .field textarea:user-invalid {
  border-color: var(--color-danger);
  background: rgba(255, 157, 157, 0.06);
}
.field-error { display: none; margin-top: 0.375rem; font-size: 0.8125rem; color: var(--color-danger); }
.field:has(:user-invalid) .field-error { display: block; }

.field input:disabled, .field select:disabled { opacity: 0.5; cursor: not-allowed; }

/* Eigener Pfeil statt OS-Chrome */
.field select {
  appearance: none; padding-right: 2.2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath fill='%236bf6ff' d='M6 8 0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 0.9rem center; background-size: 0.7rem;
}
```
Zusätzlich in `beta-form.js`: `reportValidity()` → `checkValidity()`, damit die native Sprechblase entfällt und die `.field-error`-Texte greifen.

### Tabellen

Ersetzt fünf Implementierungen. Basis ist die beste vorhandene Variante (`.method-table`).

```css
.data-table { width: 100%; border-collapse: collapse; font-size: 0.9375rem; }
.data-table th {
  background: var(--color-primary-wash); color: var(--color-primary-fixed);
  font-family: var(--font-headline); font-weight: 700; text-align: left;
  padding: 0.75rem 1rem; border: 1px solid var(--color-line);
}
.data-table td { padding: 0.75rem 1rem; border: 1px solid var(--color-line); color: var(--color-text-muted); }
.data-table tbody tr:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
.data-table td.num { text-align: right; font-variant-numeric: tabular-nums; }
.data-table tr.sum td { border-top: 2px solid var(--color-primary); color: var(--color-text); font-weight: 700; }

/* Zustandskodierung für Vergleichstabellen – Redaktion setzt data-state je <td> */
.data-table td[data-state="yes"]     { color: var(--color-success); }
.data-table td[data-state="yes"]::before { content: "✓ "; }
.data-table td[data-state="no"]      { color: var(--color-text-subtle); }
.data-table td[data-state="unclear"] { color: var(--color-warning); font-style: italic; }
/* Eigene Spalte als Scan-Anker beim horizontalen Scrollen */
.data-table--compare th:nth-child(2),
.data-table--compare td:nth-child(2) { background: var(--color-primary-wash); }

/* Scroll-Affordanz statt unsichtbarem Overflow */
.table-wrap { position: relative; overflow-x: auto; }
.table-wrap::after {
  content: ""; position: absolute; inset-block: 0; right: 0; width: 2.5rem;
  background: linear-gradient(to right, transparent, var(--color-surface));
  pointer-events: none;
}
```

### Badges

Eine Komponente ersetzt `.badge`, `.aufmass-kicker` und `.marketing-eyebrow`.

```css
.badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  background: var(--color-primary-wash); border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-full);
  font-size: 0.8125rem; font-weight: 600; color: var(--color-primary-fixed);
  letter-spacing: 0.02em;
}
.badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.badge--success { color: var(--color-success); border-color: rgba(124,242,191,.24); background: rgba(124,242,191,.08); }
.badge--warning { color: var(--color-warning); border-color: rgba(255,176,97,.24);  background: rgba(255,176,97,.08); }
```

### Tabs

```css
.tabs { display: flex; gap: 0.25rem; border-bottom: 1px solid var(--color-line); }
.tab {
  min-height: 2.75rem; padding: 0.625rem 1.125rem;
  background: transparent; border: none; border-bottom: 2px solid transparent;
  color: var(--color-text-subtle); font-weight: 600; cursor: pointer;
  transition: color var(--motion-fast) var(--ease-standard),
              border-color var(--motion-fast) var(--ease-standard);
}
.tab:hover { color: var(--color-text-muted); }
.tab[aria-selected="true"] { color: var(--color-primary-fixed); border-bottom-color: var(--color-primary); }
.tab:focus-visible { outline: 2px solid var(--color-primary-fixed); outline-offset: -2px; }
```

### Tooltips

```css
.tooltip { position: relative; }
.tooltip__bubble {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translate(-50%, var(--motion-nudge));
  max-width: 18rem; padding: 0.625rem 0.875rem;
  background: var(--color-surface-container-high); color: var(--color-text);
  border: 1px solid var(--color-line); border-radius: var(--radius-sm);
  box-shadow: var(--shadow-layer);
  font-size: 0.8125rem; line-height: 1.45;
  opacity: 0; pointer-events: none;
  transition: opacity var(--motion-fast) var(--ease-out),
              transform var(--motion-fast) var(--ease-out);
}
.tooltip:hover .tooltip__bubble,
.tooltip:focus-within .tooltip__bubble { opacity: 1; transform: translate(-50%, 0); }
```
Auf Touch nur über `:focus-within` erreichbar – ein reiner Hover-Tooltip ist auf der Baustelle nicht bedienbar. Inhalte, die für das Verständnis nötig sind, gehören nie in einen Tooltip.

### Navigation

Struktur bleibt (`site-navigation.css`), vier Korrekturen:

```css
/* 1. Touch-Ziele auf 44px – behebt H7 */
.site-mobile-toggle { width: 2.75rem; height: 2.75rem; }
.site-nav-link, .site-nav-trigger, .site-cta, .site-lang-link { min-height: 2.75rem; }

/* 2. Fokusring an allen fünf outline:none-Stellen (Z. 68,149,203,226,331) –
      behebt K4, übernimmt das korrekte Muster aus prometo-gallery.css:44-47 */
.site-nav-link:focus-visible, .site-nav-trigger:focus-visible,
.site-nav-card:focus-visible, .site-lang-link:focus-visible,
.site-cta:focus-visible, .site-mobile-panel a:focus-visible {
  outline: 2px solid rgba(107, 246, 255, 0.7);
  outline-offset: 2px;
}

/* 3. CTA auf Token statt hardcodiertem #45dee7 – behebt H2 */
.site-cta { background: var(--color-primary); color: var(--color-on-primary); }

/* 4. Scroll-Lock – behebt H8 */
body.nav-open { overflow: hidden; }
```
In `site-navigation.js` beim Toggle-Event: `document.body.classList.toggle('nav-open', item.open)`, in `closeDetails()` entfernen.

### Footer

```css
.site-footer-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 640px) { .site-footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .site-footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr; gap: 3rem; } }
.site-footer-grid a { color: var(--color-text-subtle); min-height: 2.75rem; display: inline-flex; align-items: center; }
.site-footer-grid a:hover { color: var(--color-text); }
```

### Icons

```css
.icon {
  width: 1.5rem; height: 1.5rem; flex-shrink: 0;
  fill: none; stroke: currentColor;
  stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round;
  transition: stroke var(--motion-fast) var(--ease-standard);
}
.icon--sm { width: 1.25rem; height: 1.25rem; }
.icon--lg { width: 1.75rem; height: 1.75rem; stroke-width: 1.5; }
/* Ruhiger, wiederkehrender Anker für Feature-Cards */
.icon-tile {
  display: grid; place-items: center; width: 2.75rem; height: 2.75rem;
  background: var(--color-primary-wash); border-radius: var(--radius-sm);
  color: var(--color-primary);
}
```
Alle Icons `aria-hidden="true"`, sofern nicht alleinstehend beschriftungslos – dann `role="img"` mit `<title>`. `accessibility.js:135-139` bekommt `.icon` als zusätzlichen Selektor.

### Zustandsmatrix (verbindlich für jede interaktive Komponente)

| Zustand | Regel |
|---|---|
| **Default** | Border `--color-line`, Text `--color-text-muted` |
| **Hover** | nur auf tatsächlich klickbaren Elementen; Border → `--color-line-strong`, Lift nur bei `.card--interactive` |
| **Focus-visible** | immer sichtbarer Ring: `2px solid var(--color-primary-fixed)`, `outline-offset: 2–3px`. Kein `outline: none` ohne gleichwertigen Ersatz. |
| **Active** | `scale(0.97)`, `--motion-instant` |
| **Disabled** | `opacity: 0.6`, `pointer-events: none`, `cursor: not-allowed` |
| **Busy** | `[aria-busy="true"]`: gedimmt, `cursor: progress`, Spinner via `::after` |
| **Invalid** | `:user-invalid`: Border `--color-danger`, Tönung, sichtbarer Fehlertext am Feld |
| **Selected** | `[aria-selected="true"]` / `[aria-current]`: Text `--color-primary-fixed`, 2px Unterkante |

---

# 8. Priorisierte Massnahmenliste

| Seite | Sektion | Problem | Konkrete Änderung | Visualisierung | Animation | Prio | Aufwand | Wirkung |
|---|---|---|---|---|---|---|---|---|
| alle | Icons | 42/43 „Icons" sind Unicode im Systemfont | Inline-SVG-Set 24×24 nach `.school-icon`-Vorlage; Material-Symbols-Infrastruktur entfernen | eigenes Icon-Set (12–16 Motive) | Hover-Tint `--motion-fast` | kritisch | L | Erster Eindruck wird ein entworfenes System statt Zeichenvorrat |
| `digitales-aufmass` | Hero | kein einziges Produktbild, Animation ist Homepage-Duplikat | Custom-Animation durch `tablet/bauplan-import-review.webp` in `.prometo-shot__media` ersetzen | echter Screenshot + Caption | Crossfade 600ms alle 4s | kritisch | S | Beweis statt Behauptung; ~400 Zeilen CSS entfallen |
| `ki-assistent` | Hero | Wissensgraph statt Chat-UI, kein Produktbild | `mobile/fachassistent-chat.webp` + 2 HTML-Bubbles; Graph in „personalisieren"-Sektion | Screenshot + Bubble-Overlay | Frage → typing-dots → Antwort, ~3s, Loop-Pause 4s | kritisch | M | „Das ist ein Chat in meiner App" in <10s |
| alle | Navigation | 5× `outline:none` ohne Ersatz | Fokusring an allen 5 Stellen (Muster aus `prometo-gallery.css:44-47`) | – | – | kritisch | S | Tastaturnavigation wird durchgängig sichtbar |
| `beta` | Formular | 0 Fokus-/Disabled-/Appearance-Regeln | Fokusring, `[aria-busy]`-Spinner, `:user-invalid`, Select-Pfeil | SVG-Pfeil als data-URI | Spinner 600ms linear | kritisch | S | Conversion-Seite wirkt wie Produkt, keine Doppel-Submits |
| alle | Text | `text-gray-500/600` = 4,0:1 / 2,6:1 | Ersetzen durch `--color-text-subtle` (7,2:1) | – | – | kritisch | S | 163 Vorkommen bestehen AA |
| `index.html` | Reveal-System | eigener Fork, inkompatibler Klassenvertrag | Inline-`.reveal` löschen, `page-effects.css/js` einbinden | – | Reveal vereinheitlicht | kritisch | S | Blöcke werden zwischen Seiten portabel |
| `index.html` | Hero mobil | 6 Textblöcke (~800px) vor der Demo | Kurzantwort <768px ausblenden, Disclaimer in Subline | – | – | kritisch | M | Demo rückt ~340px nach oben |
| alle | `.reveal` | `filter: blur(6px)` als Default | Blur zu `.reveal--blur`-Opt-in | – | – | hoch | S | Teuerste Animation der Seite entfällt |
| `index.html` | Hero | Primär- und Sekundär-CTA gleichrangig | Sekundär auf `.btn-secondary` (Outline, kleiner) | – | – | hoch | S | Eindeutige Rangfolge |
| `heizlastberechnung/app` | Hero | Screenshot widerspricht H1 | Adressformular → `bauplan-import-review.webp` | – | – | hoch | S | Bild belegt die Headline |
| `heizlastberechnung/app` | Screenshots | „Issues: 24", OCR-Bug, EN-Debugstring sichtbar | sauberer Export oder Crop oberhalb des Issues-Blocks | kuratierter Screenshot | – | hoch | S | Screenshot bestätigt statt widerlegt |
| alle | Header | Hamburger 42,4px, Nav-Links 40px, Lang 36px | alle auf `min-height: 2.75rem` | – | – | hoch | S | Weniger Fehltaps am meistgetappten Element |
| alle | Mobile-Menü | kein Scroll-Lock | `body.nav-open { overflow: hidden }` + JS-Toggle | – | – | hoch | S | Erwartetes Menüverhalten |
| alle | Tokens | 2 Farbsysteme, 1.437 Default-Graus | 3 Text- + 4 Semantikrollen; sekundäre Sets als `var()`-Aliase | – | – | hoch | L | Eine Änderung propagiert überallhin |
| alle | Motion | 58 Timing-Werte | 4 Dauern, 3 Easings als Tokens | – | – | hoch | M | Bewegung fühlt sich seitenübergreifend gleich an |
| `input-home.css` | Fonts | ~100 Zeilen dupliziert, latenter Icon-Bug | Font-Face + Icons nach `shared-base.css` | – | – | hoch | S | Eine Wartungsstelle, kein latenter Bug |
| Vergleichsseiten | Tabelle | keine Zustandskodierung, unsichtbarer Overflow | `data-state`-Attribute + `.data-table--compare` + Fade-Kante | Farbcodierung ✓/–/? | – | hoch | M | Vergleich in Sekunden erfassbar |
| `hydraulischer-abgleich` | ganze Seite | 0 Tabellen, 0 Formeln beim komplexesten Thema | Volumenstrom-Formel, Verfahren-A/B-Tabelle, durchgerechnetes Beispiel | Verteiler-Schema-SVG | `offset-path`-Flow-Punkt | hoch | L | Seite wird fachlich verwertbar |
| `waermeerzeuger` | Vergleich | 4 isolierte Textkarten | `.data-table` mit ✓/!/✗ | Tabelle | – | hoch | S | Auswahlentscheidung in Sekunden |
| alle | Footer | ab 768px fünfspaltig | `sm:grid-cols-2 lg:grid-cols-[...]` | – | – | hoch | S | Lesbarer Tablet-Footer |
| `index.html` | Beta-Signup | Formular `hidden`, Duplikat-CTA | Sektion `3698-3842` löschen | – | – | mittel | S | Ein starker Abschluss statt zwei |
| `index.html` | home-flow | 3. Wiederholung derselben Story | Sektion `2567-2622` löschen, H2 `2629` auf `text-4xl md:text-5xl` | – | – | mittel | S | Ein Viewport weniger Redundanz |
| `index.html` | Cards | Hover auf nicht-klickbaren `<div>` | `.card` ohne, `.card--interactive` mit Lift | – | – | mittel | S | Hover wird wieder verlässliches Signal |
| alle | Tabellen | 5 Implementierungen | eine `.data-table` | – | – | mittel | M | Fachdaten sitewide gleich lesbar |
| alle | Demos | `top`/`box-shadow` in Endlosschleifen | `translateY` / `::after` + `opacity` | – | – | mittel | M | Kein Reflow/Repaint pro Frame |
| alle | Explainer | Animation <768px pauschal aus | `@media (max-width:768px)`-Block streichen | – | – | mittel | S | Mobile Hauptzielgruppe sieht die Erklärung |
| alle | Breakpoints | 12+ Werte | auf 640/768/1024/1280 mappen | – | – | mittel | L | Komponenten schalten gemeinsam |
| alle | Radien | `rounded-[1.5rem]` 43× = `rounded-3xl` | Search & Replace + 5 Radius-Tokens | – | – | mittel | S | 9 Schreibweisen → 5 Stufen |
| alle | Container | 9 max-w-Werte | 3 Rollen | – | – | mittel | M | Wiedererkennbare Spaltenbreiten |
| `index.html` | Hero-Demo | Tablet erbt Desktop-Sidebar | Mobile-Kompaktierung in den 768–1024-Block übernehmen | – | – | mittel | M | iPad sieht bewusste Variante |
| `din-12831` | Rechenbeispiel | `<br>`-Fliesstext | Rechentabelle mit Ergebnisspalte | `.data-table` | – | mittel | S | Rechenweg auf einen Blick |
| alle | `.formula-box` | Legende mal Liste, mal Fliesstext | Bullet-Liste als Standard (12 Vorkommen) | – | – | mittel | S | Einheitliches Scan-Muster |
| `beta/danke` | ganze Seite | 38 Zeilen, bricht Hero-Muster | `.marketing-check-list` mit 3-Schritt-Ablauf | Bestätigungs-Icon | – | mittel | S | Konkrete Erwartung statt vager Zusage |
| Rechtsseiten | Stack | eigener Tailwind-Import, 3. Hardcoding | in `marketing-*`-Klassen überführen | – | – | mittel | M | Kein Fremdkörper mehr |
| `heizlastberechnung` | Hero | 3 gleichrangige CTAs | Checkliste in Card-Reihe darunter | – | – | mittel | S | Ein Handlungsimpuls |
| alle | H1 | 2 Typosysteme | `clamp()` + negative Laufweite projektweit | – | – | mittel | S | Einheitliche Display-Typografie |
| `index.html` | Workflow-Sidebar | 4 leere Platzhalter-Quadrate | Miniatur-SVG-Icons 12–14px | Icon-Set | – | optional | S | Mockup wirkt nicht mehr wie Wireframe |
| `index.html` | Alt-CSS | ~90 Zeilen tote Nav-Klassen | `1502-1546` + `1565-1608` löschen | – | – | optional | S | Keine irreführenden Altlasten |
| `index.html` | Hero-Nebenzeilen | `text-gray-500` neben Token-Subline | auf `text-on-surface-variant` | – | – | optional | S | Zeitversprechen bekommt sein Gewicht |
| `index.html` | `.brand-wand` | statisches `will-change` | entfernen | – | – | optional | S | GPU-Hygiene, kein Copy-Paste-Vorbild |
| `index.html` | Zielgruppen | Karte 1 mit 3 statt 4 Punkten | angleichen | – | – | optional | S | Gleichmässige 4er-Reihe |
| Contentseiten | Intros | ~85–90 Zeichen/Zeile | `max-w-3xl` → `max-w-2xl` | – | – | optional | S | Höhere Lesegeschwindigkeit |

---

# 9. Umsetzungsreihenfolge

## Stufe 1 – Visuelle Sofortmassnahmen
Kleine Diffs, sofort sichtbar, kein Systemumbau. Alles hier ist S-Aufwand.

1. Kontrastfehler beheben: `text-gray-500`/`-600` → `--color-text-subtle` (163 Vorkommen)
2. Fokusringe in `site-navigation.css` an allen fünf `outline:none`-Stellen
3. Formularzustände in `prometo-marketing.css`: Fokus, `[aria-busy]`-Spinner, `:user-invalid`, Select-Pfeil
4. Touch-Ziele im Header auf 44px, Scroll-Lock fürs Mobile-Menü
5. Homepage-Hero: Sekundärbutton auf Outline, H1 auf `tracking-[-0.03em]` + `text-wrap: balance`, zwei `text-gray-500`-Zeilen auf Token
6. Footer-Breakpoint `md:` → `lg:` mit `sm:grid-cols-2` dazwischen
7. Hero-Screenshot auf `heizlastberechnung/app` tauschen
8. `seo-explainers.css:95-101` (Mobile-Abschaltung) streichen
9. Tote Sektionen löschen: Beta-Signup `3698-3842`, home-flow `2567-2622`, Alt-Nav-CSS `1502-1546`/`1565-1608`

*Warum zuerst:* Diese neun Punkte kosten zusammen weniger als ein Arbeitstag und beheben zwei WCAG-Fails, den unsichtbaren Ladezustand auf der Conversion-Seite und rund 400 Zeilen totes Markup.

## Stufe 2 – Strukturelle Designverbesserungen
Layout- und Inhaltsentscheidungen, die noch kein Systemfundament brauchen.

1. `digitales-aufmass`-Hero: Custom-Animation durch echte Screenshots ersetzen (`digitales-aufmass-workflow.css` schrumpft um ~400 Zeilen)
2. `ki-assistent`-Hero: Screenshot + Chat-Bubbles; Wissensgraph in die „personalisieren"-Sektion verschieben
3. `ki-assistent`: Beispiel-Fragen-Tabelle → Chat-Karten (behebt zugleich die horizontale Mobile-Scrollbar)
4. Review-Screenshot auf `heizlastberechnung/app` neu exportieren oder croppen
5. Homepage-Hero mobil: Kurzantwort ausblenden, Disclaimer in die Subline
6. `heizlastberechnung`-Hero: dritten CTA in die Card-Reihe verschieben
7. `beta/danke`: Ablaufliste ergänzen

*Warum hier:* Ab jetzt zeigt jede Produktseite ihr Produkt. Das ist die Voraussetzung dafür, dass die folgende Systemarbeit auf einer Seite stattfindet, die ihr Versprechen bereits einlöst.

## Stufe 3 – Designsystem
Das Fundament, bevor Icons und Motion darauf aufsetzen.

1. `shared-base.css` anlegen: Font-Face-Kaskade und Icon-Regeln aus `input.css`/`input-home.css` herausziehen, beide importieren sie (behebt H9)
2. Vollständigen `@theme`-Block aus §7.1 in beide Dateien
3. `site-navigation.css` und `prometo-marketing.css`: `:root`-Werte durch `var()`-Aliase auf die Theme-Tokens ersetzen (behebt die zwei Cyan-Töne für denselben CTA)
4. `@layer components`: `.btn-*`, `.card`, `.field`, `.data-table`, `.badge`, `.tab`, `.tooltip`, `.icon`
5. Homepage-Reveal-Fork auflösen: Inline-CSS/JS entfernen, `page-effects.*` einbinden
6. Migration: `rounded-[1.5rem]` → `rounded-3xl`, `text-gray-*` → Text-Tokens, Container auf drei Rollen, fünf Tabellenklassen → `.data-table`

*Warum jetzt und nicht früher:* Ein Tokensystem, das während der Umbauten aus Stufe 1–2 entsteht, wäre schon beim Anlegen veraltet. Es beschreibt jetzt einen Zielzustand, der bereits weitgehend hergestellt ist.

## Stufe 4 – Icons und Illustrationen
1. SVG-Icon-Set zeichnen: 12–16 Motive nach den Regeln aus §5, Vorlage `.school-icon`
2. Alle 43 `.material-symbols-outlined`-Spans ersetzen
3. Material-Symbols-`@font-face`, Klasse und TTF-Subset entfernen; `accessibility.js` auf `.icon` umstellen
4. Leere Platzhalter-Icons im Produkt-Mockup (`.workflow-nav-icon`, `.aufmass-workflow-nav-item i`) durch 12–14px-Miniaturen ersetzen
5. Fachillustrationen: Verteiler-Schema (`hydraulischer-abgleich`), Wandquerschnitt mit U-Wert-Schichten (`din-12831`), Klimazonen-Karte (`heizlast`)

*Warum nach dem System:* Die Icons brauchen `--color-primary`, `--radius-sm` und `--motion-fast` als definierte Werte, sonst werden 43 Ersetzungen zu 43 neuen Einzelentscheidungen.

## Stufe 5 – Motion Design
1. Motion-Tokens aus §6 in `@theme`
2. `.reveal` entschlacken: `filter: blur` raus, `.reveal--blur` als Opt-in
3. Alle `transition`- und `animation`-Deklarationen auf die Tokens migrieren (58 Werte → 4 Dauern + 3 Easings)
4. `top`-Keyframes (`workflow-scan`, `aufmass-scan`, `scan-sweep`) auf `translateY`; `step-pulse` auf `::after` + `opacity`
5. Statisches `will-change` entfernen
6. Loops nur bei Sichtbarkeit laufen lassen (`animation-play-state` via IntersectionObserver)

## Stufe 6 – Komplexe interaktive Visualisierungen
1. `hydraulischer-abgleich`: Volumenstrom-Formel, Verfahren-A/B-Tabelle, durchgerechnetes EFH-Beispiel, Verteiler-Schema mit `offset-path`-Flow
2. `waermeerzeuger`: 4 Karten → Vergleichstabelle mit ✓/!/✗
3. `din-12831`: `<br>`-Rechnung → Rechentabelle mit Ergebnisspalte
4. Vergleichsseiten: `data-state`-Codierung, hervorgehobene Prometo-Spalte, Fade-Kante + Wisch-Hinweis
5. EFH-Beispiel-Blöcke auf `digitales-aufmass` und `heizlastberechnung/app`: vorhandenes SVG-Flow-Pattern wiederverwenden
6. `.formula-box`-Legenden auf Bullet-Listen vereinheitlichen (12 Vorkommen)

## Stufe 7 – Mobile Optimierung
1. Breakpoints auf 640/768/1024/1280 konsolidieren
2. Tablet-Band 768–1024px: Sidebar-Kompaktierung der Hero-Demo dorthin übernehmen
3. Vergleichstabellen unter 768px auf gestapelte Karten
4. Restliche Touch-Ziele: `.role-pill label`, Cookie-Buttons
5. Volle Durchsicht auf 360 / 390 / 768 / 820 / 1024 / 1440

## Stufe 8 – Finaler visueller Qualitätscheck
1. **Icon-Audit:** kein `.material-symbols-outlined` mehr im Repo, kein Unicode-Zeichen als Icon
2. **Kontrast-Audit:** kein Textfarbwert unter 4,5:1; Semantikpaare gegen ihre Füllfarbe prüfen
3. **Fokus-Audit:** Tab-Durchlauf über jede Seite, jedes Ziel sichtbar markiert, kein `outline:none` ohne Ersatz
4. **Token-Audit:** kein `text-gray-*`, kein `rounded-[1.5rem]`, kein hardcodiertes `#45dee7`/`#6bf6ff` ausserhalb der Theme-Blöcke
5. **Motion-Audit:** kein `filter`/`top`/`box-shadow` in einer Endlosschleife; `prefers-reduced-motion` auf jeder Seite mit sinnvollem Endzustand geprüft
6. **Produkt-Audit:** jede Produktseite enthält mindestens einen echten Screenshot mit erklärender Caption; kein Screenshot mit QA-Artefakten
7. **Konsistenz-Durchlauf:** Journey Startseite → Lösungsseite → Beta → Danke am Stück, auf Desktop und Mobile. Prüffrage: sieht das aus wie ein Produkt oder wie vier?

---

# 10. Umgesetzt in dieser Runde (2026-07-20)

Erste Iteration entlang Stufe 1–3 der Umsetzungsreihenfolge. Verifiziert: `npm run build` ✅ · `npm run lint` ✅ (15 Dateien) · `npm run seo:check` ✅ (40 Seiten) · `npm test` ✅ (5/5). Keine neuen Abhängigkeiten, kein Framework, keine SEO-Tags/`en/`-Seiten angefasst, bestehende IDs/Analytics/aria erhalten.

| Datei | Änderung | Adressiert |
|---|---|---|
| `input.css`, `input-home.css` | Design- + Motion-Tokens als `@theme static` (additiv, beide Dateien synchron): `--color-text/-subtle`, Semantik `success/warning/danger/info` + `on-*`, `--color-line/-strong`, `--radius-sm..xl`, `--shadow-glow/-card`, `--ease-standard`, `--duration-fast/base/reveal`. Bestehende 13 Tokens unverändert. | §7.1 Tokens |
| `assets/page-effects.css` | `filter: blur(6px)` aus Sitewide-`.reveal` entfernt → nur noch `opacity`+`transform` (GPU-kompositierbar); Dauer/Easing via Motion-Tokens | §6 Property-Regel, kritisch/hoch |
| `assets/site-navigation.css` | sichtbarer `:focus-visible`-Ring (`outline: 2px solid rgba(107,246,255,.7)`) für alle 7 interaktiven Nav-Elemente; Mobile-Toggle 2.65rem→2.75rem (42→44px) | §3.1 Fokus, §7.2 |
| `assets/seo-explainers.css` | `@media (max-width:768px){animation:none}` entfernt — erklärende Flow-Animation läuft jetzt auch mobil (reduced-motion bleibt) | §6 Mobile |
| `index.html` (Hero) | Sekundär-CTA `glass-panel`→Outline eine Stufe kleiner; `text-gray-500`→`text-on-surface-variant` (2×); H1 `tracking-[-0.03em]`+`[text-wrap:balance]`; Kurzantwort-Karte `hidden sm:block` (Produktdemo rückt mobil nach oben) | Hero kritisch/hoch |
| `index.html` (Icons) | **43 Unicode-Dingbat-„Icons" → bespoke Inline-SVG** über neues `.ui-icon`-Set (24×24, `currentColor`, stroke 1.75, runde Kappen — Muster aus `.school-icon`). Feature-/Stat-/Audience-Karten, Hero- & Banner-Pfeile, FAQ-Plus (rotiert weiter zu ×), Role-Pills, Success-Tick, 4 Sidebar-Mockup-Icons. Kein `.material-symbols-outlined`-Icon mehr auf der Startseite. | §3.1 Icons, §5 Icon-Stil |

**Bewusst offen gelassen** (nächste Runden, alle belegt oben): Farb-Token-Systeme zusammenführen (§3.1), `.btn-*`/Tabellen-/Container-Komponenten (§7.2), Motion-Callsite-Migration, Produkt-Screenshots (§4.2–4.4), `hydraulischer-abgleich`-Rechenweg (§4.6), Formular-States (§4.9), Vergleichs-Matrix (§4.10), Breakpoint-System + Scroll-Lock (§9 Stufe 7), Homepage-`.reveal`-Fork auflösen (§3.1).

## Runde 2 (2026-07-20) — verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

| Änderung | Umfang | Adressiert |
|---|---|---|
| `.ui-icon` in `assets/page-effects.css` (shared für alle Unterseiten) + 4 Prozess-Pfeil-Icons `heizlastberechnung`, `heizlastberechnung/app` von `.material-symbols-outlined`-Unicode auf SVG | 3 Dateien | §3.1 Icons, §9 Stufe 4 |
| `text-gray-600` → `text-text-subtle` (#90a1a3, 7.15:1) — behebt AA-Fail 2.56:1 | 38 Dateien (DE+EN) | §3.1 Kontrast |
| `text-gray-500` → `text-text-subtle` — behebt AA-Fail 4.01:1 auf Fließtext | 112 Vorkommen | §3.1 Kontrast |
| `rounded-[1.5rem]` → `rounded-3xl` (wertidentisch 1.5rem) — entfernt redundante Bracket-Notation | 43 Vorkommen | §7.1 Radien |

Einzig verbleibendes `.material-symbols-outlined`-Icon sitewide: `arrow_selector_tool` (`digitales-aufmass/index.html:507`) — echte, korrekt gerenderte Ligatur in der Workflow-Demo, bewusst belassen. Kein Textfarbwert mehr unter 4,5:1 (nur noch `text-gray-400` = 5,6:1, AA-konform).

## Runde 3 (2026-07-20) — verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

**Button-Komponente** (`@layer components` in `input.css` + `input-home.css`, synchron): `.btn` (Form/Font/Fokus/Active/Transition, **größenfrei** — Größe bleibt am Callsite), `.btn-primary` (Farben + **ein** Glow via `--shadow-glow`), `.btn-secondary` (Outline). Migration **vollständig**, kein Parallelsystem:

| Vorher | Nachher | Umfang |
|---|---|---|
| 6 verschiedene `hover:shadow-[0_0_Npx_rgba(69,222,231,O)]`-Glows auf Primary-Buttons | 1 Glow (`--shadow-glow`) | 19 Buttons |
| 6 distinkte Primary-CTA-Utility-Strings (14× Nav-CTA + 5 Einzelfälle) | `.btn .btn-primary` + Größen-Utilities | 19 → 1 Sprache |
| Hero-Sekundär-Button (Outline-Utilities) | `.btn .btn-secondary` | 1 (Seed) |

Größenunterschiede (Nav `px-6 py-2 text-sm` vs. Hero `px-8 py-4 text-lg`) bewusst erhalten. `active:scale`, `:focus-visible`-Ring jetzt verbindlich für **jeden** Button.

**Formular-States** `/beta/` (`assets/prometo-marketing.css`, reine CSS — JS setzte `disabled`/`aria-busy`/`data-state` bereits, nur die Optik fehlte):
- Marken-Fokusring (`:focus-visible` → Teal-Border + 3px Glow) auf allen Feldern statt unsichtbarem Browser-Default
- Eigener Select-Chevron (inline-SVG data-URI, `appearance:none`) statt OS-Pfeil
- Feldbezogener Fehlerzustand via `:user-invalid` (Danger-Border, erst nach Interaktion — nicht bei leerem Pflichtfeld)
- Sichtbarer Submit-Ladezustand: gedimmt + Spinner (`::after`), respektiert `prefers-reduced-motion` (statischer Ring)

Nicht migriert (bewusst): `.marketing-button`-Familie der Marketing-Seiten bleibt eigenes Komponentensystem (vom Audit als korrekt gelobt) — Zusammenführung mit `.btn` ist eine größere Entscheidung, kein Batch-Swap.

## Runde 4 (2026-07-20) — verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

**Tabellen-System** (§4.1 „Tabellen fünffach neu erfunden"): eine geteilte Definition in `assets/page-effects.css` bündelt `.data-table` (neuer Standard) + die 4 Legacy-Namen `.richtwert-table`/`.method-table`/`.metric-table`/`.compare-table`. Die 4 seiteninternen `<style>`-Tabellenblöcke (`heizlast`, `heizlastberechnung/leitfaden`, `waermepumpe-dimensionieren`, `heizlastberechnung-software`) wurden entfernt → HTML unangetastet, ein Stil statt vier. Vereinheitlicht auf Horizontal-Linien + Zebra + saubere Schlusszeile, Header über `--color-primary`/`--color-line`-Tokens.

Nicht einbezogen (bewusst): die 2 utility-basierten Tabellen (`heizlastberechnung/schaetzwerte`, `fussbodenheizung-auslegen`) tragen vollständige Inline-Tailwind-Klassen je Zelle (nutzen bereits `text-text-subtle`) — ein `.data-table` würde mit den Utilities kollidieren. Sie sind untereinander konsistent und bleiben als eigenes, tokenbasiertes Utility-Muster.

## Runde 5 (2026-07-21) — Produkt-Screenshots visuell geprüft & korrigiert. Verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

Alle Kandidaten-Screenshots wurden geöffnet und begutachtet. Zwei belegte Probleme behoben:

**1. App-Hero widersprach der Headline** (§4.4): `heizlastberechnung/app` zeigte im Hero `projektassistent-projektbasis.webp` — ein **Adressformular** („Projekt-Basis", Projektname/Straße/PLZ), während H1 + Hero-Chips („Grundriss als Start") den PDF-Grundriss versprechen. Getauscht auf `bauplan-import-ki-bereit.webp` (sauberer Bauplan-Import: „PDFs auswählen / Scannen", „Bereit für den Import") — Bild deckt sich jetzt mit Headline und Chips. Alt + Lightbox-Titel/Caption angepasst.

**2. Screenshot mit QA-/Debug-Artefakten sitewide** (§4.1): `bauplan-import-review.webp` (mobile **„Issues: 24"**, tablet **„Test.pdf" + „Issues: 52" + „Import abgeschlossen: 0 erstellt"**, englische Debug-Strings „no floor plan detected" in deutscher App) war auf ~13 Seiten als Marketing-Figur im Einsatz. Ersetzt durch saubere, on-message Screenshots:
- Tablet → `schnellberechnung-richtwerte.webp` (Wizard-Sidebar, Räume aus OCR-PDF mit Richtwerten — kein Test/Issues)
- Mobile → `schnellberechnung-raeume.webp` (aus dem Plan übernommene Räume, editierbar)
- Betroffen: `beta`, `autarc-reonic-alternative`, `shk-ausbildung`, `heizlast-checkliste-shk`, `fussbodenheizung-auslegen`, `heizlastberechnung/index` + `/app`, `app-workflows`, en-Pendants, Homepage-Showcase/Lightbox (`showcaseData[2]`). Alt-Texte auf die neuen Bilder korrigiert.
- `src="` -Anker beim Ersetzen → og:image/twitter/JSON-LD (`https://…`, SEO, ausserhalb Scope) blieben unangetastet. Nur das 108px-Thumbnail behält das Originalbild (illegibel, Label auf „Räume" angeglichen).

Nicht getauscht (bewusst): `ki-assistent`-Hero zeigt ein animiertes Wissensgraph-SVG statt der Chat-Oberfläche. Der einzige Chat-Screenshot (`fachassistent-chat.webp`) ist fast leer (nur Begrüssungs-Bubble) — ein Tausch würde die wahrgenommene Qualität senken. Das polierte SVG bleibt; ein aussagekräftigerer Chat-Screenshot wäre die bessere Lösung, sobald verfügbar.

## Runde 6 (2026-07-21) — Mobile-Interaktion & Touch. Verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

- **Scroll-Lock mobiles Menü** (§9 Stufe 7, kritisch): `assets/site-navigation.js` sperrt jetzt `body`-Scroll (`.nav-scroll-lock` → `overflow:hidden`), solange das `details.site-mobile-nav` offen ist; `overscroll-behavior: contain` auf dem Panel verhindert Scroll-Chaining. Schliesst mit über Escape/Outside-Click/Link-Klick (feuert `toggle` → entsperrt).
- **Fokus-Regression behoben**: `.site-mobile-panel a:focus-visible` setzte `outline:none` *nach* dem in Runde 1 ergänzten Fokusring und überschrieb ihn — `outline:none` entfernt, der Ring greift jetzt auch im mobilen Menü.
- **Touch-Ziele auf 44px** (§ Responsive, mittel): `.role-pill label` (`min-height:44px`), `#cookie-accept` und `#cookie-decline` (`min-h-11` + Zentrierung). Damit erfüllen die zuvor ~31–36px hohen Formular-/Banner-Controls das 44px-Minimum.

## Runde 7 (2026-07-21) — Totes CSS/JS entfernt + Konsistenz. Verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

- **Farb-Token-Systeme NICHT gemergt** (§3.1) — bei der Prüfung festgestellt: die Marketing-Seiten (`beta`, `autarc-reonic-alternative`, `heizlast-software-vergleich-shk`, en-Pendants) laden `prometo-marketing.css` **ohne** `tailwind.css`, d.h. die `@theme`-Variablen existieren dort nicht. Ein Merge auf `var(--color-*)` würde diese Seiten brechen. Die zwei Token-Systeme sind **architektonisch getrennt** (Marketing = eigenständiges CSS-Bundle) — bewusst so belassen. (Nebenbei verifiziert: keine der früheren `text-gray-*`→`text-text-subtle`-Migrationen hat eine Seite ohne Tailwind getroffen.)
- **Totes CSS entfernt** (§4.1, „Navigations-Altlast"): `.nav-link`, `.pulse-dot` (+ `@keyframes pulse-ring`), `.mobile-menu`, `.burger`, `.nav-link.nav-active` — 0 HTML-Nutzung, Reste der alten Homepage-Nav vor der Migration auf die geteilte `site-header`/`site-navigation`. ~155 Zeilen.
- **Totes JS entfernt**: der zugehörige Hamburger-Handler (`burgerBtn`/`mobileMenu` per `getElementById` = immer `null`, vollständig guarded) und der Scroll-Spy `navObserver` (leeres `navLinks`). ~130 Zeilen.
- **Regression dabei gefangen + behoben**: der **lebende** Smooth-Scroll-Handler rief noch die gerade entfernte `closeMobileMenu()` → hätte bei jedem Anker-Klick einen `ReferenceError` geworfen. Aufruf entfernt (Menü-Schliessen läuft über `site-navigation.js`).
- **H2-Rhythmus vereinheitlicht** (§4.1): die zwei zu kleinen Post-Hero-Überschriften (`home-flow-heading`, `topic-map-heading`, `text-3xl md:text-4xl`) auf den Standard `text-4xl md:text-5xl` der übrigen 7 Sektionen angehoben.

Homepage dadurch von ~4865 auf 4569 Zeilen geschrumpft.

## Runde 8 (2026-07-21) — Hero-Würfel auf Wunsch zurück. Verifiziert build ✅ lint ✅ seo:check 40 ✅ test 5/5 ✅

Auf ausdrücklichen Nutzerwunsch: das **alte Hero-Visual mit dem animierten 3D-Würfel** ersetzt wieder die PDF-Workflow-Demo (die den Würfel in `6d6956f` abgelöst hatte). Wiederhergestellt aus `3bcc8a1`, bewusst auf **Tracks + Pakete + rotierenden Würfel** begrenzt (ohne die früheren Float-Labels/Glass-Cards/AI-Terminal, die zusätzliche Abhängigkeiten mitbrachten):
- `.engine-container/.engine-float/.engine-cube` (6 `.cube-face`) + `.engine-core`, isometrisch (`rotateX(-30) rotateY(45)`), floatend, mit pulsierendem Core.
- SVG-Datenflusslinien (`.path-animated`/`-fast`, `line-flow`) + `animateMotion`-Datenpakete entlang vier Bezier-Pfaden.
- Maus-Interaktion (Würfel dreht mit dem Cursor) — nur wenn `canAnimate` (kein Reduced-Motion, kein Touch/Mobile).
- Reduced-Motion-Guard ergänzt (Float/Core/Line-Animationen aus, Würfel statisch); Mobile skaliert (`scale(.66)`).
- Die **Workflow-Demo vollständig entfernt**: Markup, ~358 Zeilen CSS (`.hero-workflow-stage`/`.workflow-*` + Keyframes) und die toten Mobile-/Reduced-Motion-Overrides. 0 Workflow-Referenzen verbleiben.

Hinweis: die Workflow-Demo war vom Audit als „Kronjuwel" (klare Produkt-Erklärung) gelobt — der Würfel ist dekorativer/abstrakter. Bewusste Nutzerentscheidung; der Demo-Code liegt weiterhin in der Git-Historie (vor dieser Runde).
