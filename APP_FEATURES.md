# APP_FEATURES.md — Flächenklima-App

**Zuletzt aktualisiert:** 5. April 2026 (Workspace-Stand)

Enthält den aktuellen Feature-Stand der App. Wird bei funktionalen Änderungen mitgeführt.

---

## FEAT-001: Dashboard / Home-Screen
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-23  
**Zuständiger Agent:** UI-Architect  
**Beschreibung:** Zentraler Einstiegspunkt der App. Zeigt Projektübersicht, zuletzt bearbeitete Projekte, layoutabhängige Schnellzugriffe sowie einen Primary-Action-CTA für neue Berechnungen. Responsive für compact, medium und expanded; Desktop enthält zusätzliche Status- und Hinweisflächen.
**Implementierte Teilfunktionen:**
- Projektkarten mit Schnellzugriff auf Projektkontexte
- Schnellzugriffe auf Material, Doku-Chat sowie mobile Kacheln für Team, Tagesroute und Papierkorb
- Responsive Shell für Mobile, Tablet und Desktop
- Papierkorb-Ansicht für gelöschte Projekte
**Abhängigkeiten:** `projectListProvider`, `currentUserProvider`, `RoleAccessService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-002: Projekt-Wizard (Neue Berechnung)
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** Heizlast-Rechner, Model-Guardian  
**Beschreibung:** Mehrstufiger Assistent zur Erstellung eines neuen Heizlast-Projekts. Umfasst Projektbasis, normnahe Eingaben, Raumdaten, Plan-Import, Berechnung, Systementscheidung, Hydraulikbasis und Export.
**Implementierte Teilfunktionen:**
- Profi-Pfad mit 15 Schritten von Projektbasis bis Export
- Schnellberechnung als eigener Pfad mit reduzierter Eingabetiefe
- Gemeinsame Raumverwaltung über `RoomCreationStep`
- Rückkehr aus dem Planstudio direkt in den Wizard
- Schutz vor unbeabsichtigtem Verwerfen neuer, noch nicht gespeicherter Entwürfe
**Abhängigkeiten:** `project_wizard_providers.dart`, Raumverwaltung, Plan-Import, BOM-Snapshot, Export-Services  
**Bekannte Einschränkungen:** Provider-Monolith weiterhin groß; Export enthält teils Basisformate statt voll ausgebauter Zielformate  
**Backlog-Refs:** BL-2026-03-12-003

---

## FEAT-003: Shop / Bestellung
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-27  
**Zuständiger Agent:** UI-Architect  
**Beschreibung:** Bestell- und Übergabemodul mit Punchout-Anbindung. Zeigt Produkte mit Mapping-Status, Warenkorb, Merkliste, Lieferantenprofile und Checkout-Übergabe.
**Implementierte Teilfunktionen:**
- Produktkatalog mit Filtern, Pagination und performanter Listenansicht
- Warenkorb und Merkliste mit lokaler Persistenz
- OCI-Handoff in externe Bestellsysteme
- Admin-Bereiche für Produktimport, Lieferantenprofile und Zuordnungen
**Abhängigkeiten:** `productsProvider`, `shopCartProvider`, `OciCheckoutController`, Lieferantenprofile, Mapping-Service  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-004: Doku-Chat & Wissensbasis
**Status:** In Progress  
**Priorität:** P2  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Fachchat für SHK-Fragen mit belegten Antworten aus einer verwalteten Wissensbasis. Antworten zeigen Quellen, Dateiverweise und Rückmeldemöglichkeiten.
**Implementierte Teilfunktionen:**
- Chat-Oberfläche mit Sitzungs-ID, Ladezuständen und Verlauf
- Quellenpanel mit Trefferqualität, Seitenangaben und Dokument-Download
- Feedback für Antworten und einzelne Quellen
- Verwaltungsoberfläche für die Wissensbasis mit Batch-Upload und Löschfunktion
- Rollenprüfung für Pflege der Wissensbasis
**Abhängigkeiten:** Firebase Functions, Firestore, `ragDocumentRepository`, `rag_feedback`  
**Bekannte Einschränkungen:** Chat ist abhängig von der Serverfunktion; Offline-Nutzung ist nicht vorgesehen  
**Backlog-Refs:** keine eigenen

---

## FEAT-005: Plan-Import
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** PDF-basierter Plan-Import mit automatischer Übernahme von Text- und Rauminformationen. Unterstützt zusätzlich Dokumentscan auf Mobilgeräten, Import-Review und Übergabe an weitere Planungsstrecken.
**Implementierte Teilfunktionen:**
- PDF-Upload und mobiler Dokumentscan
- Serverseitige Plananalyse mit Raum- und Textübernahme
- Review-Schritt mit manueller Korrektur und Ergänzung
- Idempotente Importlogik mit Import-Metadaten im Projekt
- Entwurfsverwerfen mit Best-Effort-Bereinigung hochgeladener Dateien
**Abhängigkeiten:** Firebase Storage, Firebase Functions, `PlanImportService`, `google_mlkit_document_scanner`  
**Bekannte Einschränkungen:** Ergebnis bleibt eine Arbeitsgrundlage und ersetzt keine fachliche Prüfung  
**Backlog-Refs:** keine offenen

---

## FEAT-006: Tagesrouten-Planung
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-03-18  
**Zuständiger Agent:** flutter-code-optimizer, Quality-Gate  
**Beschreibung:** Tagesroutenplanung für Außendienst und Einsatzsteuerung. Stop-Cards mit Zeiten, Kartenansicht, Kennzahlen, Reorder und Profilvorgaben.
**Implementierte Teilfunktionen:**
- Erstellung von Tagesplänen aus Projektlisten
- Kartenansicht und Reiseverbindungen
- KPI-Header und Tourenübersicht
- Profilvorgaben für Arbeitszeit- und Tourparameter
**Abhängigkeiten:** `PlanningProfile`, `RouteBreakInserter`, Google Maps, `DayPlanBuilderController`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** BL-2026-03-11-001, BL-2026-03-11-004

---

## FEAT-007: Team-Dashboard / Verwaltung
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-03-24  
**Zuständiger Agent:** UI-Architect  
**Beschreibung:** Zentrale Teamsteuerung für Management- und Leitungsrollen. Bündelt Nutzerübersicht, Bestellungen, Systemkatalog, Zuordnungen, Kennzahlen, Heizlast-Vorgaben und Planungsdefaults.
**Implementierte Teilfunktionen:**
- Team-Dashboard als Einstieg mit Sektionen und Deep Links
- Bestellübersicht, KPI-Dashboard und Benutzerübersicht
- Heizlast-Vorgaben und Planungsdefaults
- Teamweiter Systemkatalog und Lieferanten-/Mapping-Verwaltung
**Abhängigkeiten:** `RoleAccessService`, Firestore Team-Daten, Mapping-Service  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** ~~BL-2026-03-12-006~~ ✅

---

## FEAT-008: BOM-Mapping-System mit Vorschlagslogik
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** Model-Guardian  
**Beschreibung:** Mehrstufige Zuordnungslogik für Materialpositionen. Nutzt bestätigte Treffer, ausstehende Vorschläge und serverseitige Anreicherung, um Projektpositionen auf Shop-Artikel abzubilden.
**Implementierte Teilfunktionen:**
- Lookup-Kette über Legacy-, bestätigte und offene Zuordnungen
- Semantische Anreicherung für Materialzeilen
- Vorschlagsfunktion für noch nicht gemappte Positionen
- Admin-Oberfläche zur Pflege und Bestätigung von Zuordnungen
**Abhängigkeiten:** Firestore `bom_mappings`, Lieferantenprofile, `BomSemanticEnricher`, `BomMappingService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-009: Heizlast-Berechnung (Kern-Domain)
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-29  
**Zuständiger Agent:** Heizlast-Rechner  
**Beschreibung:** Heizlastberechnung nach vereinfachtem normnahen Modell. Umfasst Transmissions- und Lüftungsanteile, Monatsprofil, Standortbezug, Raumanlage und Folgeübergaben in System-, Material- und Hydraulikmodule.
**Implementierte Teilfunktionen:**
- Heizlast-Wizard mit Standort, Karte und normnahen Eingaben
- Raumbezogene Berechnung mit Ergebnisaufbereitung
- Qualitäts- und Plausibilitätsprüfung vor Folgephasen
- Übergabe an Systementscheidung, Material und Hydraulik
**Abhängigkeiten:** `norm_heating_load_service.dart`, `calculation_logic.dart`, EN-1264-Engine, `HiveRoomsRepository`  
**Bekannte Einschränkungen:** Implementierung weiterhin auf mehrere Services verteilt; weiterer Split möglich  
**Backlog-Refs:** BL-2026-03-12-007

---

## FEAT-010: Offline-Sync & Konfliktauflösung
**Status:** In Progress  
**Priorität:** P3  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Offline-nahe Nutzung mit lokaler Persistenz, Warteschlange für Projektschreibvorgänge, Wiederanlauf bei neuer Verbindung und Konfliktauflösung zwischen lokaler und Server-Version.
**Implementierte Teilfunktionen:**
- Hive-Cache für Projekte, Räume, Warenkorb, Merkliste, Analyseereignisse und Warteschlangen
- Offline-Banner und Sync-Banner im Shell-Layout
- Automatische oder manuelle Synchronisierung aus der Warteschlange
- Konfliktdialog mit Wahl zwischen lokaler und Server-Version
- Separate Hintergrundsynchronisierung für Analyseereignisse und Planung
**Abhängigkeiten:** Hive, Firestore, `OfflineSyncNotifier`, `ConnectivityNotifier`  
**Bekannte Einschränkungen:** Nicht jedes Modul nutzt dieselbe Offline-Queue; einige Funktionen bleiben online-abhängig  
**Backlog-Refs:** BL-2026-03-11-004

---

## FEAT-011: Admin User-Löschung (Cascade Delete)
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-18  
**Zuständiger Agent:** core, firebase-architect  
**Beschreibung:** Vollständige Benutzerlöschung inklusive aller verknüpften Daten über eine geschützte Serverfunktion. Enthält Doppelbestätigung und Rückmeldung zum Löschlauf.
**Implementierte Teilfunktionen:**
- Löschung von Auth-Konto, Benutzerdokument, Projekten, Räumen und Bestellungen
- Serverseitige Rechteprüfung nur für Admins
- Schutz vor Selbstlöschung
- Doppelter Bestätigungsdialog mit E-Mail-Prüfung
**Abhängigkeiten:** Firebase Admin SDK, Cloud Functions, `AdminManagementRepository`, `RoleAccessService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-012: Planstudio / Bauplan-Editor
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** UI-Architect, Heizlast-Rechner  
**Beschreibung:** Vollintegrierter Planarbeitsplatz für PDF-, JPG- und PNG-Quellen. Vereint Geschossverwaltung, Kalibrierung, Raumaufnahme, Verlegung, Verteiler- und Leitungsplanung, Markups, Ebenensteuerung und PDF-Ausgabe.
**Implementierte Teilfunktionen:**
- Upload von PDF, JPG und PNG direkt im Projekt
- Arbeitsbereiche für Räume, Verlegung, Verteiler & Leitungen sowie Markups
- Ebenensteuerung für Original, Räume, Rohrführung, Verteiler, Leitungen, Markups und Notizen
- Zwei-Tap-Kalibrierung, Geschossverwaltung und polygonale Raumerfassung
- Markups wie Linie, Pfeil, Rechteck, Highlight, Notiz, Distanz- und Flächenmaß
- Direkte Auswahl bestätigter Räume für Tür, Verlegeart, Abstand, Richtung, Spiegelung und Status
- PDF-Export mit Scopes `Nur Original`, `Original + sichtbare Ebenen`, `Freigegebene Ebenen`
- Einstieg aus Projektübersicht, Wizard und Overlay-Modi inklusive Originalansicht
**Abhängigkeiten:** `syncfusion_flutter_pdfviewer`, Firebase Storage, Firebase Functions, Raumverwaltung, `PlanstudioPdfExportService`  
**Bekannte Einschränkungen:** Nur Tablet/Desktop; DXF/DWG nicht unterstützt; Offline-Speicherung des gesamten Planarbeitsplatzes nicht vollständig umgesetzt  
**Backlog-Refs:** DXF/DWG-Support, erweitertes Offline-Caching, Mehrfach-Kalibrierung, Präsenz/Cursor

---

## FEAT-013: Raumbezogener Verlegeplan
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-31  
**Zuständiger Agent:** UI-Architect, Heizlast-Rechner  
**Beschreibung:** Raumbezogener Verlegeplan-Editor für SHK-Fachplaner. Ermöglicht Auswahl der Rohrführungsart, Türmarkierung, indikative Visualisierung der Rohrpfade und Statusführung pro Raum.
**Implementierte Teilfunktionen:**
- Mäander- und Schneckenlayout
- Türposition und Abstandssteuerung pro Raum
- Status-Workflow von offen bis freigegeben
- Übersichtskachel in der Projektübersicht
- Overlay-Darstellung auf dem Bauplan
**Abhängigkeiten:** `VerlegeplanGeneratorService`, `HiveRoomsRepository`, Bauplan-Integration  
**Bekannte Einschränkungen:** Nur Tablet/Desktop; Abstandsauswahl aktuell als Presets; `allowedLayoutTypes` noch nicht vollständig aus Systemdefinition abgeleitet  
**Backlog-Refs:** BL-2026-03-28-001, BL-2026-03-28-002

---

## FEAT-014: Plan-Import in Schnell- und Profi-Wizard
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** UI-Architect, Heizlast-Rechner  
**Beschreibung:** Übernahme von Raumdaten aus Plänen in beide Wizard-Pfade. Räume werden nach Review als vorkonfigurierte Eingaben in Schnellberechnung oder Profi-Assistent weiterverwendet.
**Implementierte Teilfunktionen:**
- Einstieg aus Schnellberechnung und Projekt-Wizard
- Gemeinsamer Raumverwaltungsschritt nach dem Import
- Übergabe bestätigter Räume in Folgephasen
- Rücksprung aus dem Planstudio direkt an die passende Wizard-Stelle
**Abhängigkeiten:** Planstudio, `RoomCreationStep`, Raumverwaltung, Plan-Import-Service  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine

---

## FEAT-015: Admin-Dashboard Erweiterungen (Benutzerverwaltung + RBAC)
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-31  
**Zuständiger Agent:** UI-Architect, firebase-architect  
**Beschreibung:** Benutzerverwaltung mit rollenbasierter Zugriffskontrolle. Admins und berechtigte Leitungsrollen können Benutzer anlegen, Rollen ändern, Status setzen und Mandanten zuordnen.
**Implementierte Teilfunktionen:**
- Benutzerliste mit Filtern
- Benutzeranlage mit Rolle und Tenant
- Rollen für interne, Kunden- und Außendienstprofile
- Geschützte Firestore-Regeln für Rollen- und Rechteprüfung
**Abhängigkeiten:** Firebase Admin SDK, `RoleAccessService`, `AppUser`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** BL-2026-03-31-001

---

## FEAT-016: Verlegeplan-Overlay auf Bauplan
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-03-31  
**Zuständiger Agent:** UI-Architect, Heizlast-Rechner  
**Beschreibung:** Visualisierung der Raum- und Verlegeinformationen als Overlay direkt auf dem Bauplan. Dient der Gesamtübersicht und schnellen Plausibilitätskontrolle.
**Implementierte Teilfunktionen:**
- Mehrraum-Overlay mit Statusfarben
- Interaktive Raumauswahl und Highlighting
- Anzeige von Türmarkierungen und Rohrpfaden
- Einstieg aus Projektübersicht und Planstudio
**Abhängigkeiten:** Planstudio, Verlegeplan, Raumdaten, Firestore Queries  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine

---

## FEAT-017: Authentifizierung & Profilverwaltung
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Login-, Registrierungs- und Profilmodul mit Firmen- und Privatpfad, Passwortfunktionen und persönlicher Kontoverwaltung.
**Implementierte Teilfunktionen:**
- Anmeldung mit E-Mail und Passwort
- Registrierung für Privat- und Firmenkonten inklusive Registrierungscode
- Passwort-Reset aus dem Login
- Profilseite für Anzeigename, Passwortänderung und Kontolöschung
- Mock-Fallback bei nicht initialisierter Firebase-Umgebung
**Abhängigkeiten:** Firebase Auth, `AuthController`, `MockAuthRepository`, `RoleAccessService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine eigenen

---

## FEAT-018: Projektarbeitsraum & Freigabe
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Zentrale Projektzentrale mit Kennzahlen, Diagrammen, Qualitätsstatus, Kundendaten, Raumverwaltung, Ausführungsplanung und Freigabeprozess.
**Implementierte Teilfunktionen:**
- Projektübersicht mit Ergebnis-Summary, Charts und Qualitäts-Snapshot
- Kundendaten mit Auto-Save und Adressaufbereitung
- Raumliste mit Sortierung nach Last oder Fläche
- Raumdetailpflege mit Typvorschlägen, Beheizungsstatus und Feldherkunft
- Ausführungsplanung mit Stunden, Startdatum, Segmentierung, Risikoanzeige und manueller Nachbearbeitung
- Governance-Panel mit Validierung, Lock/Unlock, Audit-Log und Provenance
**Abhängigkeiten:** `HiveProjectsRepository`, `HiveRoomsRepository`, `ProjectValidationService`, `ProjectLockService`, `ProjectExecutionApiService`  
**Bekannte Einschränkungen:** Projekt-PDF und Teilen aus der Übersicht sind noch als Platzhalter markiert  
**Backlog-Refs:** keine eigenen

---

## FEAT-019: Projektplanungskalender & Gantt
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Projektterminplanung mit Kalender- und Gantt-Ansicht für interne Rollen. Zeigt geplante Abschlüsse, Überfälligkeiten und offene Projekte im Zeitkontext.
**Implementierte Teilfunktionen:**
- Umschaltbare Kalender- und Gantt-Darstellung
- Tagesauswahl mit Projektlisten
- Kennzahlen zu offenen, geplanten, fertigen und überfälligen Projekten
- Responsive Darstellung für Mobile, Tablet und Desktop
**Abhängigkeiten:** `projectListProvider`, `TableCalendar`, `syncfusion_flutter_charts`, `RoleAccessService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-020: Anlageneinstellungen
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Projektweite Systemparameter für Boden-, Wand- und Deckensysteme. Definiert Standard-System, Temperaturpaar und Verlegeabstand als Basis für Material- und Hydrauliklogik.
**Implementierte Teilfunktionen:**
- Auswahl nach Systemkategorie
- projektweiter Standard für das Auslegungssystem
- Vorlauf-/Rücklauftemperaturen mit Plausibilisierung
- manueller Verlegeabstand je Projekt
- Anzeige eines optimalen Abstandshinweises aus Last und Systemparametern
**Abhängigkeiten:** `ProjectSystemSettings`, `HeatingSystemCatalog`, Projekt- und Raumdaten  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine eigenen

---

## FEAT-021: Materialberechnung, Export & Angebotsmodus
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Projektbezogene Materialermittlung mit BOM-Liste, Systemempfehlungen, Exporten und geführter Angebotsausgabe.
**Implementierte Teilfunktionen:**
- Materialberechnung aus Raum- und Systemeinstellungen
- Ausführung der BOM-Berechnung in separatem Isolate für flüssige UI
- Systemempfehlungen auf Basis spezifischer Last und Projektparametern
- Übergabe der Stückliste in den Warenkorb
- Norm-Report-PDF, Angebots-PDF sowie JSON-/CSV-Basisexport
- Geführter Angebotsmodus mit Empfänger-, Positions- und Preis-Schritt
**Abhängigkeiten:** `CalculationService`, `BomSnapshotRepository`, `NormReportPdfExportService`, `AngebotsPdfExportService`, Shop-Handoff  
**Bekannte Einschränkungen:** CSV/JSON aktuell als Basisexport; einige Share-Aktionen außerhalb des Wizards sind noch nicht ausgebaut  
**Backlog-Refs:** keine eigenen

---

## FEAT-022: Hydraulischer Abgleich
**Status:** In Progress  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Hydraulikmodul zur Ableitung von Soll-Volumenströmen, Kreisübersicht, Verteilerdarstellung und Einregelwerten auf Basis der vorhandenen Projekt- und Materialdaten.
**Implementierte Teilfunktionen:**
- Ableitung von Raum- und Kreisvolumenströmen aus Berechnung und Materialdaten
- Zustandserkennung für fehlende Vorbedingungen mit Rückführung an die passende Projektstelle
- Visualisierung von Verteilern und Heizkreisen
- Detailansichten pro Heizkreis
**Abhängigkeiten:** `projectHydraulicSnapshotProvider`, `HydraulicBalancingDerivationService`, `PdfExportService`, Material- und Projektdaten  
**Bekannte Einschränkungen:** V1 ohne vollständiges Druckverlust- oder Pumpenmodell; kein eigener Protokoll-Export über die Oberfläche angebunden  
**Backlog-Refs:** keine eigenen

---

## FEAT-023: Anlagenbuch & Wasserprotokoll
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Projektbezogenes Anlagenbuch für Wasserwerte, Füll- und Nachspeiseereignisse sowie Warnungen aus Grenzwertprüfungen.
**Implementierte Teilfunktionen:**
- Register für Wasserwerte, Füllung/Nachspeisung und Warnungen
- Validierungslogik mit Issue-Liste
- Speicherung im Projektkontext
- PDF-Ausgabe des Protokolls
**Abhängigkeiten:** `HiveWasserlogbuchLogbookRepository`, `WasserlogbuchValidationService`, `PdfExportService`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-024: Varianten & Sensitivität
**Status:** Done  
**Priorität:** P2  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Variantenmodul zum Anlegen, Duplizieren, Rechnen und Vergleichen alternativer Projektausprägungen inklusive Sensitivitätsauswertung.
**Implementierte Teilfunktionen:**
- Baseline-Ableitung aus dem Projekt
- Varianteneditor mit Overrides
- Variantenrechnung und Vergleichsseite
- Tornado-Sensitivität mit Wirkung auf Gesamtlast
- Top-Room- und Kennzahlenvergleich
**Abhängigkeiten:** `HiveSzenarienScenariosRepository`, `SzenarienSensitivityService`, Projektberechnungsdaten  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-025: EN-1264 Auslegung & Nachweis
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** Heizlast-Rechner  
**Beschreibung:** Normbezogene Auslegung und Nachweisführung für Heizkreise und Flächenleistung nach EN-1264-2 auf Basis vorhandener Projekt- und Systemdaten.
**Implementierte Teilfunktionen:**
- Solver für Rohrabstand, Kreisanzahl und Kreislängen
- Heizkurven-Visualisierung und Systemparameter-Anpassung
- Nachweisscreen mit Gate-Check pro Raum
- Sperr- und Freigabelogik für den Nachweis
- PDF-Ausgabe und Audit-Einträge zum Freigabestatus
**Abhängigkeiten:** `En1264LayoutSolver`, `En1264Engine`, `En1264LockRepository`, `En1264NachweisPdfService`  
**Bekannte Einschränkungen:** setzt vorhandene Projekt- und Auslegungsdaten voraus  
**Backlog-Refs:** keine offenen

---

## FEAT-026: Systemplaner & Systemkatalog
**Status:** Done  
**Priorität:** P1  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Auswahl kompatibler Flächensysteme über harte Filter sowie Verwaltung von Team-, Privat- und öffentlichen Systemvorlagen.
**Implementierte Teilfunktionen:**
- deterministische Systemfilter nach Aufbauhöhe, Belag, Sanierung, Rohrdimension und Kreislänge
- Projektbezug über Projektauswahl im Systemplaner
- BOM-Erzeugung aus dem ausgewählten System
- private und teamweite Systemkataloge mit CRUD-Funktionen
- Filter, Suche und Scope-Steuerung im Katalog
**Abhängigkeiten:** `SystemConstraintsEngine`, `BomFormulaEvaluator`, `SystemCatalogRepository`, `scopedSystemCatalogEntriesProvider`  
**Bekannte Einschränkungen:** keine offenen Punkte mit Nutzerwirkung  
**Backlog-Refs:** keine offenen

---

## FEAT-027: Einstellungen & Analytics
**Status:** Done  
**Priorität:** P3  
**Letzte Änderung:** 2026-04-05  
**Zuständiger Agent:** core  
**Beschreibung:** Einstellungsbereich für Darstellung, Sprache, Datenschutzoptionen und Admin-Analytics.
**Implementierte Teilfunktionen:**
- Umschaltung zwischen hellem und dunklem Design
- Auswahl der App-Sprache
- Browser-Übersetzungshilfe für zusätzliche Sprachen
- Schalter für anonyme Nutzungsdaten
- Deep Links zu Team-Dashboard, Wissensbasis-Verwaltung und Admin Analytics
- Admin Analytics mit Ereignisdiagramm und Aktivitätsliste
**Abhängigkeiten:** `themeModeProvider`, `appLanguageProvider`, `TranslationToolService`, Firestore `analyticsEvents`  
**Bekannte Einschränkungen:** App-Version in den Einstellungen ist statisch hinterlegt  
**Backlog-Refs:** keine offenen

---

## Feature-Status Übersicht

| Feature | Status | Priorität |
|---------|--------|-----------|
| FEAT-001: Dashboard / Home-Screen | In Progress | P1 |
| FEAT-002: Projekt-Wizard | In Progress | P1 |
| FEAT-003: Shop / Bestellung | Done | P1 |
| FEAT-004: Doku-Chat & Wissensbasis | In Progress | P2 |
| FEAT-005: Plan-Import | Done | P2 |
| FEAT-006: Tagesrouten-Planung | Done | P2 |
| FEAT-007: Team-Dashboard / Verwaltung | Done | P2 |
| FEAT-008: BOM-Mapping-System mit Vorschlagslogik | Done | P1 |
| FEAT-009: Heizlast-Berechnung | In Progress | P1 |
| FEAT-010: Offline-Sync & Konfliktauflösung | In Progress | P3 |
| FEAT-011: Admin User-Löschung | Done | P1 |
| FEAT-012: Planstudio / Bauplan-Editor | In Progress | P1 |
| FEAT-013: Raumbezogener Verlegeplan | Done | P1 |
| FEAT-014: Plan-Import in Schnell- und Profi-Wizard | Done | P1 |
| FEAT-015: Admin-Dashboard Erweiterungen / RBAC | Done | P1 |
| FEAT-016: Verlegeplan-Overlay auf Bauplan | Done | P1 |
| FEAT-017: Authentifizierung & Profilverwaltung | Done | P1 |
| FEAT-018: Projektarbeitsraum & Freigabe | In Progress | P1 |
| FEAT-019: Projektplanungskalender & Gantt | Done | P2 |
| FEAT-020: Anlageneinstellungen | Done | P1 |
| FEAT-021: Materialberechnung, Export & Angebotsmodus | In Progress | P1 |
| FEAT-022: Hydraulischer Abgleich | In Progress | P1 |
| FEAT-023: Anlagenbuch & Wasserprotokoll | Done | P2 |
| FEAT-024: Varianten & Sensitivität | Done | P2 |
| FEAT-025: EN-1264 Auslegung & Nachweis | Done | P1 |
| FEAT-026: Systemplaner & Systemkatalog | Done | P1 |
| FEAT-027: Einstellungen & Analytics | Done | P3 |
