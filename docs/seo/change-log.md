# SEO-Änderungsprotokoll

## 20.07.2026 — Vollaudit (Details in `audit-2026-07-20.md`)

- GSC-Export vom 20.07.2026 ausgewertet: 19 Klicks und 2.008 Impressionen über 107 Tage (03.04.–18.07.2026), gewichtete Position 44,1. Der Filter meldet „letzte 12 Monate", die Property liefert aber erst ab April Daten. Alle 157 Query-Zeilen zeigen 0 Klicks — die 19 Klicks liegen auf Queries, die GSC datenschutzbedingt ausblendet.
- Zwei Query-Cluster als tragende Substanz identifiziert: Verlegeabstand Fußbodenheizung (34 Queries, 243 Impressionen, Position 52,3) und Aufmaß-App (24 Queries, 327 Impressionen, Position 49,3) — zusammen 28 % aller Impressionen. In beiden Fällen fehlte der Kernbegriff im Title.
- `/digitales-aufmass/` von „Digitales Aufmaß für Heizlastberechnung" auf „Aufmaß App für PDF-Grundrisse: digitales Aufmaß" umgestellt (Title, og/twitter, Description, H1). Begründung: stärkste Einzel-Query `app für aufmaß und grundriss` mit 141 Impressionen auf Position 42,9 — „App" und „Grundriss" fehlten im Title.
- `/fussbodenheizung-auslegen/` auf „Fußbodenheizung Verlegeabstand & Auslegung" umgestellt. Begründung: 243 Impressionen im Verlegeabstand-Cluster, Wort fehlte im Title trotz eigenem H2 und Tabelle auf der Seite.
- FAQPage-Schema auf 10 Seiten mit vorhandenem, aber unausgezeichnetem FAQ-Abschnitt ergänzt (57 Fragen, 93 % aller Impressionen). Fragen und Antworten aus dem sichtbaren Text extrahiert, nicht neu formuliert. Nutzen liegt in der Maschinenlesbarkeit für AI-Antworten — Google zeigt seit 08/2023 keine FAQ-Rich-Results mehr für normale Websites.
- Sechs Seiten hatten Schema-Fragen, die nach einer Textüberarbeitung nicht mehr dem sichtbaren Inhalt entsprachen (13 Fragen). Schema mit dem sichtbaren Text synchronisiert: `/waermeerzeuger/`, `/ki-assistent/`, `/heizlastberechnung/schaetzwerte/`, `/heizlastberechnung/leitfaden/`, `/en/autarc-reonic-alternative/`, `/en/heat-load-software-comparison-hvac/`.
- `/en/autarc-reonic-alternative/` Title von 75 auf 54 Zeichen gekürzt (lag über der SERP-Breite), `/en/heat-pump-sizing/` Description von 159 auf 146 Zeichen.
- Soll-Werte in `scripts/check-seo.js` für die beiden geänderten Seiten nachgezogen. `seo:check`, `i18n:check`, `lint` und `node --test` laufen grün.

## 20.07.2026

- GSC-Export vom 19.07.2026 und Research zum digitalen Aufmaß ausgewertet: `/digitales-aufmass/` erhielt 412 Impressionen, 5 Klicks, 1,21 % CTR und eine durchschnittliche Position von 39,62. Die URL wird künftig klar als fachliche Datenbasis vor der Heizlastberechnung positioniert; die Startseite bleibt die breite Plattform-/Software-Positionierung.
- Title, Meta-Description, H1, Hero und Inhaltsstruktur auf „digitales Aufmaß für Heizlastberechnung“ geschärft. Aussagen unterscheiden nun ausdrücklich zwischen planbasiertem Aufmaß und fachlich zu prüfenden Eingaben für die Heizlastberechnung.
- Fachliche Kontextlinks zu Heizlast, DIN-12831-Kontext, hydraulischem Abgleich und Wärmepumpen-Dimensionierung ergänzt; `SoftwareApplication`-Schema um sichtbare Funktionen, Screenshot und Anbieter ergänzt.
- Seitendramaturgie nach visueller Prüfung verdichtet: zentrale PDF-Import-Animation in den Hero verlagert, doppelte Ablaufsektion entfernt, Planstudio von sechs Karten auf drei Funktionsgruppen reduziert und FAQ standardmäßig geschlossen. Suchintentionen und crawlbare Fachinhalte bleiben sichtbar beziehungsweise im semantischen HTML erhalten.

## 18.07.2026

- Google-Coverage-Export geprüft: 23 indexierte und 20 nicht indexierte bekannte URLs mit dem letzten enthaltenen Tagesstand 10.07.2026 dokumentiert; der Sprung am 01.07. als zusätzliche URL-Entdeckung statt Deindexierungsverlust eingeordnet.
- Unerwartetes `noindex` auf `/en/app-workflows/` entfernt, selbstreferenzierendes hreflang-Paar dadurch indexierbar gemacht, Seite in die Sitemap aufgenommen und sichtbare interne SEO-Platzhaltertexte durch den tatsächlichen PDF-first Workflow ersetzt.
- SEO-Abnahmetest um eine Positivliste für beabsichtigte `noindex`-Seiten ergänzt; neue unbeabsichtigte Ausschlüsse führen nun zum Testfehler.
- Visuelle Seitenrollen getauscht: Die kommerzielle Startseite nutzt wieder die markante Würfel-/Linien-Inszenierung, während `/shk-ausbildung/` die reduzierte Marketingstruktur mit klar abgegrenzten Ausbildungsinhalten erhält.
- Mobile App-Bilder auf der Ausbildungsseite als horizontale Scroll-Snap-Galerie umgesetzt; die Startseite nutzt wieder eine einzelne große App-Ansicht mit wischbarer Thumbnail-Navigation.
- Startseite auf den kommerziellen Einstieg „PDF-Aufmaß für bestehende SHK-Betriebe“ geschärft; Aufmaß Software als primäre Suchintention definiert und die Detailseite `/digitales-aufmass/` auf den konkreten PDF-Aufmaß-Workflow abgegrenzt.
- Startseite auf „PDF-first Heizlastsoftware für SHK-Betriebe“ neu positioniert; Ausbildung/Lernfokus aus Hero, Metadaten und Hauptnavigation entfernt.
- Hero, vier Kernfunktionen, Vier-Schritt-Workflow, realistisches EFH-Beispiel mit Zeit-Hinweis, echte Produktoberflächen, Ergebnisse/Exporte, Betriebs- und Teamvorteile, Beta-Erklärung, Vergleich, FAQ und Abschluss-CTA umgesetzt.
- Zentrale deutsche und englische Beta-Landingpages mit kurzem Formular und noindex-Danke-Seiten angelegt; bestehende API um Rolle, optionale Berechnungsanzahl und explizite Datenschutz-Zustimmung ergänzt.
- Vorgegebene Titles, Meta-Descriptions und H1 für Startseite, App, digitales Aufmaß, hydraulischen Abgleich, Fußbodenheizung, Heizlastberechnung, Heizlast, Vergleich, Alternative und Workflow umgesetzt.
- `/autarc-reonic-alternative/` und `/app-workflows.html` als bestehende rankende URLs erhalten. Vergleichsinhalte anhand offizieller Anbieterquellen mit Prüfdatum 18.07.2026 neu erstellt.
- Kommerzielle CTAs repositoryweit auf „Kostenlos Beta testen“ → `/beta/` vereinheitlicht; englische CTAs führen nach `/en/beta/`.
- Tracking-Events `beta_cta_click`, `beta_form_start`, `beta_form_submit`, `workflow_view` und `comparison_cta_click` in das vorhandene Consent-/Analytics-System integriert.
- Selbstreferenzierende Canonicals, hreflang-Zuordnung der Beta-Seite, Breadcrumb-/Software-Schema, Sitemap-Lastmod und permanente Slash-Weiterleitungen ergänzt.
- Automatischen SEO-Abnahmetest für einzigartige Metadaten, genau eine H1, Canonicals, interne Ziele, Sitemap, Redirect-Ketten, JSON-LD, zukünftige Änderungsdaten und Tracking ergänzt.
