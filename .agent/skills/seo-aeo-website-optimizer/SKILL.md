---
name: seo-aeo-website-optimizer
description: >-
  Optimiere Website-Inhalte fuer 2026 SEO und AEO. Nutze diesen Skill, wenn
  Codex Landingpages, Kategorieseiten, Blogartikel, Pillar Pages, Cluster-
  Inhalte, Titel, Meta Descriptions, H1-H6-Struktur, FAQs, Vergleichsseiten,
  Templates, interne Content-Verlinkung, E-E-A-T/YMYL-Vertrauen, semantische
  Abdeckung, Branded-Search-Positionierung oder AI-Overview-/ChatGPT-/
  Perplexity-Extractability rein inhaltlich verbessern soll. Triggert bei
  Anfragen wie "SEO-Text optimieren", "Landingpage umschreiben", "AEO
  verbessern", "fuer Google optimieren", "Content Cluster bauen", "Text fuer
  AI Overviews strukturieren" oder "warum erfuellt der Inhalt die Suchintention
  nicht".
---

# SEO/AEO Content Skill 2026

Dieser Skill ist rein inhaltlich. Er optimiert Texte, Seitenstruktur und Content-Architektur fuer klassische Suche und AI Search.

## Scope hart begrenzen

- Arbeite nur an Inhalt, semantischer Struktur, Snippets, internen Content-Links, Vertrauenssignalen im Content und Extractability.
- Nutze [references/seo-2026-playbook.md](references/seo-2026-playbook.md), wenn Strategie, Suchintention, E-E-A-T, AEO, Query-Typen oder Content-Cluster relevant sind.
- Nutze GSC-, GA4- oder andere Daten nur als Input zur Priorisierung, wenn sie bereitgestellt wurden.
- Entwerfe in diesem Skill keine n8n-Workflows, keine Dashboards, keine Monitoring-Setups und keine rein technischen SEO-Audits.

## Immer zuerst

1. Bestimme genau einen Modus: `content-audit`, `rewrite`, `content-brief`, `cluster-plan`, `refresh` oder `aeo-structure`.
2. Bestimme die primaere Suchintention: `definition`, `comparison`, `how-to`, `problem-solution`, `commercial`, `local`, `template` oder `brand`.
3. Markiere Kernfeststellungen als `[VERIFIED]`, `[ASSUMED]` oder `[OPEN]`.
4. Trenne Empfehlungen fuer klassische Suche und AI Search, wenn sie unterschiedlich sind.
5. Wenn lokale Seitendateien vorliegen und der Nutzer Optimierung will, setze Titel, Meta Description, Ueberschriften, Content-Abschnitte, FAQs, Tabellen oder interne Links direkt um.

## Was dieser Skill priorisiert

Pruefe Inhalte in dieser Reihenfolge:

1. `Intent Satisfaction Depth`: loest die Seite die Kernfrage sofort und vollstaendig?
2. `Content Experience`: ist die Information schnell erfassbar, konkret und ohne Fuellelemente?
3. `Information Gain`: bietet die Seite originelle Daten, Erfahrungen, Benchmarks, Beispiele oder Vorlagen?
4. `E-E-A-T/YMYL`: zeigt der Inhalt Autor, Erfahrung, Quelle, Aktualitaet und Grenzen?
5. `Extractability`: kann ein LLM direkte Antworten, Definitionen, Tabellen, Schritte und Caveats sauber extrahieren?
6. `Snippet Fit`: passen Title und Meta Description zur Suchintention und zum echten Seitenversprechen?
7. `Content Architecture`: ist klar, welche Seite fuer welche Suchintention ranken soll?
8. `Internal Linking`: helfen interne Links Nutzern und Suchmaschinen, Themenhierarchien zu verstehen?

## Nicht verhandelbare Regeln

- Schreibe fuer Suchintention und Nutzerentscheidung, nicht fuer Keyword-Dichte.
- Bevorzuge konkrete Beweise vor generischem Erklaertext.
- Nutze Zahlen, Benchmarks, Beispiele, Vergleiche, Vorlagen, Checklisten und echte Entscheidungshilfen.
- Fuehre bei informationsgetriebenen Queries frueh eine direkte Antwort oder Definition ein.
- Nutze Vergleichstabellen fuer Auswahl-Queries und nummerierte Schritte fuer Prozess-Queries.
- Entferne leere Einleitungen, Floskeln und redundante Wiederholungen.
- Aktualisiere sensible oder datumsabhaengige Inhalte regelmaessig.
- Behandle YMYL-Themen strenger als normale Marketingseiten.

## Modusregeln

### `content-audit`

Nutze diesen Modus, wenn der Nutzer wissen will, warum ein Inhalt nicht rankt oder nicht ueberzeugt.

Liefere:

- `MODE`
- `PRIMARY INTENT`
- `CORE CONTENT PROBLEM`
- `3 KEY LEVERS`
- `SEARCH VS AI SEARCH`
- `TOP ACTIONS`

Formatiere Kernempfehlungen so:

```text
FINDING:
EVIDENCE:
RISK:
PRIORITY:
ACTION:
```

### `rewrite`

Nutze diesen Modus, wenn vorhandene Inhalte direkt ueberarbeitet werden sollen.

Liefere:

- neuen `title`
- neue `meta description`
- neue `H1`
- empfohlene Seiten-Outline
- konkrete neue Abschnittsinhalte
- FAQ- oder Vergleichsblock, falls passend
- Vorschlaege fuer interne Linkanker

### `content-brief`

Nutze diesen Modus fuer neue Seiten oder Artikel.

Liefere:

- primaere und sekundaere Suchintention
- Suchenden-Profil und Entscheidungslage
- klare Seitenrolle im Cluster
- notwendige Abschnitte
- benoetigte Beweise, Daten oder Beispiele
- AEO-geeignete Struktur
- interne Linkziele

### `cluster-plan`

Nutze diesen Modus fuer thematische Architektur.

Liefere:

- Pillar-Page
- fokussierte Cluster-Seiten
- jeweilige Suchintention pro URL
- interne Linklogik
- Inhalte mit hoechstem Bedarf an originellen Daten oder Templates

### `refresh`

Nutze diesen Modus fuer bestehende, veraltete Inhalte.

Liefere:

- was gestrichen werden soll
- was aktualisiert werden muss
- welche Daten, Beispiele oder Quellen fehlen
- welche Ueberschriften oder Snippets veraltet wirken

### `aeo-structure`

Nutze diesen Modus, wenn Inhalte speziell fuer AI Overviews, ChatGPT, Perplexity oder andere Answer Engines strukturiert werden sollen.

Liefere:

- Query-Typ
- direkte Antwort oder Definition
- empfohlene Extraktionsbloeke
- fehlende maschinenlesbare Content-Bausteine
- Prioritaet fuer einen Abschnitt, der die Zitierbarkeit am staerksten verbessert

## Query-Typen und passende Content-Formate

- `definition`: Ein-Satz-Antwort, dann Einordnung und Begriffsabgrenzung.
- `comparison`: Vergleichstabelle zuerst, danach Bewertungslogik und Empfehlung.
- `how-to`: nummerierte Schritte, Voraussetzungen, Fehlerquellen, Ergebnis.
- `problem-solution`: Problem, Ursachen, Optionen, Empfehlung, Grenzen.
- `commercial`: Entscheidungskriterien, Nutzen, Risiken, Beweise, klare CTA-Logik.
- `local`: ortsbezogene Beweise, reale Bezugspunkte, lokale Besonderheiten.
- `template`: sofort nutzbare Vorlage, Erklaerung, Anwendungsgrenzen, Beispiel.
- `brand`: klares Markenversprechen, Differenzierung, Beweise, Suchbegriff-Kopplung.

## E-E-A-T im Content

Pruefe je nach Thema:

- sichtbarer Autor oder Herausgeber
- reale Erfahrung oder methodische Transparenz
- belastbare Quellen oder eigene Daten
- klares Update-Datum bei zeitkritischen Themen
- benannte Grenzen, Annahmen oder Anwendungsfaelle
- vertrauenswuerdige Sprache statt ueberzogener Behauptungen

Bei YMYL:

- keine vagen Versprechen
- keine anonymen Behauptungen
- keine ungestuetzten Empfehlungen
- keine irrefuehrenden Vereinfachungen

## AEO-Regeln

- Optimiere Inhalte so, dass ein Modell Antwort, Autor, Datum, Scope und Caveats schnell erkennt.
- Frageueberschriften sind nur sinnvoll, wenn sie echte Suchfragen spiegeln.
- FAQ-Bloecke nur nutzen, wenn sie inhaltlich noetig sind; nicht als Fuellmaterial.
- Strukturiere Antworten so, dass einzelne Passagen eigenstaendig zitierbar sind.
- Nutze kurze Definitionen, Tabellen, Listen und knappe Zwischenfazits fuer Extraktion.

## Interne Verlinkung im Content

- Verlinke von erklaerenden Inhalten auf transaktionale oder tiefergehende Zielseiten.
- Verlinke Cluster-Seiten auf die Pillar-Page und auf logisch angrenzende Unterthemen.
- Nutze beschreibende Anchors, keine generischen "hier klicken"-Formulierungen.
- Vermeide konkurrierende Zielseiten fuer dieselbe Suchintention.

## Nicht tun

- Keine n8n-, Dashboard-, API- oder Automatisierungsloesungen in diesem Skill entwerfen.
- Keine Rankings, CTRs, Traffic-Zahlen oder Core-Web-Vitals-Werte erfinden.
- Keine rein technischen SEO-Probleme als Fakten behaupten, wenn nur Content vorliegt.
- Nicht pauschal "mehr Text" empfehlen. Benenne die fehlende Information oder das fehlende Beweisstueck.
- Keine KI-Fuelltexte, Phrasendrescherei oder auswechselbare SEO-Standardformulierungen produzieren.
- `FAQPage` oder `HowTo` nicht automatisch als Schema- oder Content-Loesung einsetzen.
