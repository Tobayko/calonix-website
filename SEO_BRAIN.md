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
