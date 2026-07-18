# Redirect-Map

Stand: 18.07.2026. Alle Einträge werden in `vercel.json` als permanente Weiterleitungen ohne beabsichtigte Kette geführt.

| Quelle | Ziel | Status | Grund |
|---|---|---:|---|
| `/digitales-aufmass-app.html` | `/digitales-aufmass/` | 301 | Das frühere Duplikat wurde entfernt; die kanonische PDF-Aufmaß-Seite übernimmt die Suchintention. Interne Links und Sitemap verweisen nur auf das Ziel. |
| `/heizlastberechnung-software.html` | `/heizlastberechnung-software/` | 301 | Alte Dateiendung auf kanonische Verzeichnis-URL vereinheitlichen. |
| `/app-workflows` | `/app-workflows.html` | 301 | Bereits rankende HTML-URL erhalten. |
| `/app-workflows/` | `/app-workflows.html` | 301 | Bereits rankende HTML-URL erhalten. |
| `/beta` | `/beta/` | 301 | Zentrale Beta-URL vereinheitlichen. |
| `/beta/danke` | `/beta/danke/` | 301 | Noindex-Danke-URL vereinheitlichen. |
| `/en/beta` | `/en/beta/` | 301 | Englische Beta-URL vereinheitlichen. |
| `/en/beta/thanks` | `/en/beta/thanks/` | 301 | Englische Noindex-Danke-URL vereinheitlichen. |
| Verzeichnis-URLs ohne abschließenden Slash | jeweilige kanonische URL mit `/` | 301 | Bestehende URL-Normalisierung für deutsche und englische Seiten. |

Der Repository-Check `npm run seo:check` meldet ein Ziel als Redirect-Kette, sobald ein Redirect auf eine weitere Redirect-Quelle zeigt.
