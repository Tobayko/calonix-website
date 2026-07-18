# SEO-Baseline Juli 2026

## Search-Console-Ausgangslage

Zeitraum: letzte drei Monate bis 15.07.2026.

- Gesamt: 17 Klicks, 1.597 Impressionen, 1,06 % CTR, durchschnittliche Position ca. 48.
- Startseite: 86 Impressionen, 5 Klicks, 5,81 % CTR, Position 7,67.
- `/digitales-aufmass/`: 352 Impressionen, Position 43,94.
- `/fussbodenheizung-auslegen/`: 356 Impressionen, Position 37,88.
- `/heizlastberechnung/`: 158 Impressionen, Position 60,91.
- `/heizlast/`: 295 Impressionen, Position 61,33.
- `/hydraulischer-abgleich/`: 107 Impressionen, Position 59,91.
- `/heizlastberechnung/app/`: 43 Impressionen, Position 11,28, keine Klicks.
- `/app-workflows.html`: 22 Impressionen, Position 4,82, keine Klicks.
- `/autarc-reonic-alternative/`: 17 Impressionen, Position 4,88, 5,88 % CTR.

Wichtige Query-Signale: „app für aufmaß und grundriss“ (115 Impressionen), „heizlastberechnung software“ (54), „hydraulischer abgleich wärmepumpe“ (48), „fußbodenheizung verlegeabstand“ (43), „heizlastberechnung programm“ (39) und „aufmaß software tablet“ (36). Der Query-Export ist datenschutzbedingt unvollständig; Gesamt- und Seitendaten sind deshalb die primäre Bewertungsbasis.

## Indexierungsabdeckung vom 18.07.2026

Der Google-Coverage-Export enthält Tageswerte bis 10.07.2026 und bezieht sich auf alle Google bekannten Seiten, nicht nur auf die aktuelle Sitemap.

- 23 URLs waren indexiert, 20 URLs nicht indexiert.
- Die 20 Ausschlüsse verteilen sich auf 3 Seiten mit Weiterleitung, 1 per `noindex` ausgeschlossene Seite und 16 URLs mit „Gefunden – zurzeit nicht indexiert“.
- Am 01.07.2026 stieg die Zahl nicht indexierter URLs sprunghaft von 4 auf 20, während die Zahl indexierter URLs bei 23 stabil blieb. Das spricht für neu entdeckte URLs und nicht für den Verlust von 16 bereits indexierten Seiten.
- Der Export enthält keine URL-Beispiele. Eine exakte Zuordnung der 16 gefundenen URLs ist damit nicht möglich.

Der Live-Abgleich am 18.07.2026 ergab 39 kanonische Sitemap-URLs mit direktem Status `200`, selbstreferenzierendem Canonical, genau einer H1 und indexierbarem Robots-Meta. Alle 41 konfigurierten permanenten Weiterleitungen endeten ohne Kette auf einem `200`-Ziel. Als tatsächliche Inkonsistenz wurde `/en/app-workflows/` identifiziert: Die Seite war intern stark verlinkt und als hreflang-Gegenseite referenziert, trug aber `noindex`. Sie wurde indexierbar gemacht, in die Sitemap aufgenommen und von internen SEO-Platzhaltertexten bereinigt. Danke- und Rechtstextseiten bleiben bewusst `noindex` und stehen nicht in der Sitemap.

## Untersuchung der jüngsten Git-Historie

- Commit `a3be5b5` vom 02.07.2026 entfernte die Duplikate `digitales-aufmass-app.html`, `en/digital-takeoff-app/index.html` und `heizlastberechnung-software.html`. Die Weiterleitung von `/digitales-aufmass-app.html` auf `/digitales-aufmass/` war bereits vorhanden und bleibt erhalten.
- Am 07.07.2026 wurde `content-visibility: auto` für Offscreen-Bereiche kurz eingeführt (`18e8040`), unmittelbar zurückgenommen (`5463d85`) und ein verbliebener Hinweis ebenfalls entfernt (`b0d68b3`). Damit besteht im aktuellen Stand kein dauerhafter Content-Visibility-Ausschluss wichtiger Inhalte.
- Ebenfalls am 07.07.2026 wurde das Homepage-CSS über Preload/onload aktiviert (`500ad84`). Ein `noscript`-Fallback war vorhanden. Die neue Startseite bindet ihr Marketing-CSS wieder als reguläres Stylesheet ein.
- Im untersuchten Stand wurden keine dauerhaften `noindex`-Angaben, Robots-Sperren oder Canonicals auf fremde Ziele bei den Kernseiten gefunden. Die Inhalte liegen statisch im HTML und sind serverseitig/crawlbar vorhanden.

## Bewertung

Aus der Git-Historie lässt sich kein einzelner technischer Auslöser für einen Sichtbarkeitsrückgang beweisen. Das stärkste im Repository belegbare Problem war die Suchintentions- und Positionierungsabweichung: Die Startseite und mehrere Produktseiten beschrieben Prometo überwiegend als Lern-, Ausbildungs- oder Vorbereitungsprodukt, während die Impressionen auf transaktionale Software- und Aufmaß-Suchen entfielen. Die Umsetzung korrigiert diese Relevanzlücke und ergänzt automatisierte Schutzprüfungen für Metadaten, Canonicals, Sitemap, Links, Redirect-Ketten und JSON-LD.

Eine kausale Bewertung von Ranking-Veränderungen benötigt zusätzlich Search-Console-Daten auf Tagesbasis, Deployment-Zeitpunkte und Crawl-/Serverlogs; diese Daten liegen nicht im Repository.
