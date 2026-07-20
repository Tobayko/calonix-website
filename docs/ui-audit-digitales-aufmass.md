# UI-Konsistenz-Audit: Digitales Aufmaß

Stand: 20. Juli 2026

## Umfang

Geprüft wurde die Unterseite `digitales-aufmass/index.html` gegen die bestehenden Prometo-Unterseiten zu Heizlastberechnung, hydraulischem Abgleich, Fußbodenheizung und Wärmepumpendimensionierung. Der vom Nutzer bestätigte Hero blieb unverändert. Der lokale `file://`-Aufruf konnte wegen der Browser-Sicherheitsrichtlinie nicht als neuer Screenshot aufgenommen werden; deshalb ist dies ein Markup-, CSS- und Komponenten-Audit, kein vollständiger visueller oder WCAG-Audit.

## Ergebnis vor der Anpassung

1. **Abschnittsrhythmus:** Eigene `py-20`-Abstände erzeugten im Seitenfluss größere Lücken als das übliche Prometo-Muster `pb-16 md:pb-24`.
2. **Typohierarchie:** Die Hauptabschnitte nutzten überwiegend `md:text-4xl`, während vergleichbare Prometo-Unterseiten `md:text-5xl` einsetzen.
3. **Komponenten:** Datenbasis, Ablauf und Funktionsgruppen verwendeten eigene Linien- und Tabellenlayouts statt der etablierten `glass-panel`-Karten.
4. **Textlesbarkeit:** Mehrere Kartentexte und Funktions-Pills lagen unter der auf den Vergleichsseiten üblichen Größe.
5. **FAQ:** Der native Aufklappindikator war entfernt; außerdem fehlte ein deutlicher Tastaturfokus.
6. **Abschluss-CTA:** Typografie und Tracking-Attribute wichen vom gemeinsamen Muster ab.
7. **Cookie-Banner:** Zugängliche Regionsbezeichnung und ausreichend große Schaltflächen fehlten.

## Umgesetzte Korrekturen

- Einheitliche Abschnittsabstände und Containerbreiten
- Hauptüberschriften auf die gemeinsame Desktop-Skala angehoben
- Eigene Unterseiten-Grids durch Prometo-`glass-panel`-Karten ersetzt
- Karten- und Pill-Texte vergrößert
- FAQ mit nativem Marker, geöffnetem Einstieg und sichtbarem Fokuszustand
- Schluss-CTA an die übrigen Unterseiten angeglichen
- Cookie-Banner semantisch ergänzt und Touch-Ziele vergrößert
- Navigation, Footer, SEO-Inhalte und bestätigter Hero beibehalten

## Verbleibende Prüfung

Vor einer Produktionsfreigabe sollte die bereitgestellte HTTPS-Vorschau bei Desktop- und Mobilbreite visuell geprüft werden. Erst dort lassen sich tatsächlicher Reflow, Kontrast, Animation und Cookie-Banner zuverlässig bewerten.
