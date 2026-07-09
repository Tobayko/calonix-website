# SEO Brain

Diese Datei ist das dauerhafte Gedächtnis der wöchentlichen SEO-Routine für
`https://prometo.app/`.

## Routine

1. Diese Datei und die letzten Git-Commits lesen.
2. Immer zuerst die GSC-Property abfragen und nur bestätigte GSC-Daten verwenden.
3. Die letzten vollständigen 28 Tage mit den 28 Tagen davor vergleichen:
   Klicks, Impressionen, CTR, Position, Queries und Seiten.
4. Pro Lauf höchstens eine kleine, durch die Daten begründete Änderung umsetzen.
5. Hypothese und Ergebnis trennen. Eine Änderung frühestens nach vier Wochen
   bewerten; Korrelation nicht als Google-Rankingfaktor ausgeben.
6. Tests ausführen, diesen Verlauf ergänzen, committen und sicher auf
   `origin/main` pushen. Bei Fehlern oder fremden Änderungen nicht pushen.

## Ausgangslage

### 2026-07-02

- GSC-Property: `sc-domain:prometo.app`
- Vergleich: 2026-06-02 bis 2026-06-29 gegen 2026-05-05 bis 2026-06-01
- Gesamt: 5 vs. 2 Klicks, 563 vs. 360 Impressionen, 0,89 % vs. 0,56 % CTR,
  gewichtete mittlere Position 54,5 vs. 52,2.
- Auffällige Seiten:
  - `/digitales-aufmass/`: 144 vs. 76 Impressionen; Position 59,4 vs. 49,7.
  - `/fussbodenheizung-auslegen/`: 93 vs. 57 Impressionen; Position 32,8 vs. 39,8.
  - `/ki-assistent/`: 28 vs. 24 Impressionen; Position 29,0 vs. 55,7; erster Klick.
- Sitemaps: 37 Seiten-URLs und 8 Bild-URLs, 0 Fehler, 0 Warnungen.
- Bereits live: Commit `a3be5b5` entfernt doppelte Legacy-Seiten und vereinfacht
  die Startseite. Hypothese: klarere kanonische Signale und weniger
  Keyword-Kannibalisierung.
- Diese Woche keine weitere Inhaltsänderung, damit mehrere Eingriffe nicht am
  selben Tag vermischt werden.
- Früheste belastbare Kontrolle von `a3be5b5`: 2026-07-30.
- Nächster Kandidat: Query-/Seiten-Daten für `/ki-assistent/` prüfen und nur bei
  stabiler Sichtbarkeit Snippet oder Inhalt gezielt schärfen.

### 2026-07-06, 08:34 CEST

- GSC-Property: `sc-domain:prometo.app`; ausschließlich bestätigte
  `data_state=final`-Daten.
- Vergleich: 2026-06-06 bis 2026-07-03 gegen 2026-05-09 bis 2026-06-05.
- Gesamt: 4 vs. 4 Klicks, 575 vs. 388 Impressionen, 0,70 % vs. 1,03 % CTR,
  gewichtete mittlere Position 51,6 vs. 53,2.
- Auffällige Seiten:
  - `/digitales-aufmass/`: 139 vs. 92 Impressionen; Position 57,0 vs. 52,7.
  - `/fussbodenheizung-auslegen/`: 102 vs. 56 Impressionen; Position 32,9
    vs. 34,9.
  - `/ki-assistent/`: 33 vs. 27 Impressionen; Position 22,4 vs. 56,5; ein
    Klick vs. keiner.
- Queries: 84 vs. 66 sichtbare Zeilen. Größere Zuwächse gab es unter anderem
  bei `app für aufmaß und grundriss` (56 vs. 37 Impressionen, Position 55,2
  vs. 50,4), `ki-assistent für klimatechnik` (20 vs. 8, Position 17,1 vs.
  30,5) und `fußbodenheizung verlegeabstand` (16 vs. 7, Position 46,1 vs.
  46,4). Die Query-Zeilen enthalten wegen GSC-Datenschutzfiltern nicht alle
  vier Klicks und werden nicht als Gesamtsumme verwendet.
- Spike-Prüfung: Tagesmedian 11,5 Impressionen. Der breite Ausschlag vom
  23. bis 25. Juni lag bei 66, 67 und 60 Impressionen und verteilte sich auf
  mehrere Seiten, vor allem Fußbodenheizung, Aufmaß und Heizlast. Ähnliche
  kurze Cluster lagen im Vorzeitraum am 24./25. Mai und 31. Mai bis 2. Juni.
  Es gibt damit noch keinen stabilen einzelnen Query-/Seitengewinner.
- Sitemaps: Seiten-Sitemap 37 URLs, Bild-Sitemap 8 URLs, Index 45 URLs; keine
  Fehler, Warnungen oder ausstehenden Abrufe.
- Konkrete Änderung: nur diesen Verlauf ergänzt; keine Website-Inhalte
  geändert. `a3be5b5` ist erst seit 2026-07-02 live und im aktuellen
  Messfenster nur zwei Tage enthalten.
- Hypothese, kein Ergebnis: Die Bereinigung durch `a3be5b5` kann kanonische
  Signale stabilisieren. Die höhere Sichtbarkeit korreliert bisher nur mit
  mehreren kurzen Ausschlägen und belegt keine Wirkung der Änderung.
- Früheste Bewertung von `a3be5b5`: 2026-07-30. Bis dahin nur bei einem
  technisch eindeutigen Fehler eingreifen.

### 2026-07-09, 11:31 CEST

- GSC-Property: `sc-domain:prometo.app`; zuerst per GSC-MCP `list_properties`
  bestätigt, anschließend ausschließlich `data_state=final`-Daten verwendet.
- Vergleich: 2026-06-09 bis 2026-07-06 gegen 2026-05-12 bis 2026-06-08.
- Gesamt: 4 vs. 4 Klicks, 576 vs. 391 Impressionen, 0,69 % vs. 1,02 % CTR,
  gewichtete mittlere Position 51,2 vs. 54,1.
- Auffällige Seiten:
  - `/digitales-aufmass/`: 137 vs. 98 Impressionen; Position 56,2 vs. 54,8.
  - `/fussbodenheizung-auslegen/`: 105 vs. 54 Impressionen; Position 33,7
    vs. 32,9.
  - `/ki-assistent/`: 34 vs. 25 Impressionen; Position 21,9 vs. 53,9; ein
    Klick vs. keiner.
- Queries: 90 vs. 65 sichtbare Zeilen. Größere Zuwächse gab es bei
  `heizlastberechnung nach din en 12831` (17 vs. 0 Impressionen),
  `ki-assistent für klimatechnik` (20 vs. 7, Position 17,1 vs. 22,0),
  `app für aufmaß und grundriss` (54 vs. 41, Position 54,3 vs. 53,0) und
  `fußbodenheizung verlegeabstand` (16 vs. 7, Position 46,1 vs. 46,4).
- Spike-Prüfung: Der aktuelle Tagesmedian liegt bei 13,5 Impressionen. Der
  Ausschlag vom 23. bis 27. Juni lag bei 66, 67, 60, 41 und 37 Impressionen,
  danach folgte am 1. Juli noch ein Tag mit 37 Impressionen. Der Vorzeitraum
  hatte ähnliche kurze Ausschläge am 24./25. Mai und vom 31. Mai bis 2. Juni.
  Das Muster bleibt breit verteilt und ist noch kein belastbarer einzelner
  Query-/Seitengewinner.
- Sitemaps: Seiten-Sitemap 37 URLs, Bild-Sitemap 8 URLs, Index 45 URLs; keine
  Fehler, Warnungen oder ausstehenden Abrufe.
- Konkrete Änderung: nur diesen Verlauf ergänzt; keine Website-Inhalte
  geändert. `a3be5b5` ist erst seit 2026-07-02 live und im aktuellen
  Messfenster nur fünf Tage enthalten.
- Hypothese, kein Ergebnis: Die Bereinigung durch `a3be5b5` kann kanonische
  Signale stabilisieren. Die bessere mittlere Position und höhere Sichtbarkeit
  korrelieren weiter mit kurzen Ausschlägen, belegen aber noch keine Wirkung
  der Änderung.
- Früheste Bewertung von `a3be5b5`: 2026-07-30. Bis dahin keine weitere
  Inhaltsänderung ohne klaren technischen Fehler oder stabilen GSC-Gewinner.
