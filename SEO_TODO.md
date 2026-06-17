# SEO Hosting TODO

- Vercel erzwingt fuer Production Domains normalerweise HTTPS am Edge. Falls Prometo auf ein anderes Hosting umzieht, muss serverseitig ein permanenter Redirect gesetzt werden:
  - `http://prometo.app/*` -> `https://prometo.app/*`
  - Statuscode: `301`
  - Pfad und Query-String beibehalten.
- Der Legacy-Pfad `/digitales-aufmass-app.html` ist in `vercel.json` bereits als permanenter Redirect auf `/digitales-aufmass/` gepflegt.
