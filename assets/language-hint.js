(function () {
    const routes = {
        "/": "/en/",
        "/index.html": "/en/",
        "/heizlast/": "/en/heat-load/",
        "/heizlastberechnung/": "/en/heat-load-calculation/",
        "/heizlastberechnung/app/": "/en/heat-load-calculation/app/",
        "/heizlastberechnung/din-12831/": "/en/heat-load-calculation/din-en-12831/",
        "/heizlastberechnung/schaetzwerte/": "/en/heat-load-estimates/",
        "/heizlastberechnung-software.html": "/en/heat-load-calculation/",
        "/hydraulischer-abgleich/": "/en/hydraulic-balancing/",
        "/fussbodenheizung-auslegen/": "/en/underfloor-heating-design/",
        "/waermeerzeuger/": "/en/heat-generators/",
        "/waermepumpe-dimensionieren/": "/en/heat-pump-sizing/",
        "/digitales-aufmass/": "/en/digital-takeoff/",
        "/digitales-aufmass-app.html": "/en/digital-takeoff-app/",
        "/app-workflows.html": "/en/app-workflows/",
        "/datenschutz.html": "/en/privacy/",
        "/impressum.html": "/en/legal-notice/"
    };

    const path = window.location.pathname;
    const englishPath = routes[path];
    const language = (navigator.language || "").toLowerCase();
    if (!englishPath || !language.startsWith("en") || sessionStorage.getItem("prometo_en_hint_seen")) return;

    sessionStorage.setItem("prometo_en_hint_seen", "1");
    const hint = document.createElement("div");
    hint.className = "fixed left-4 right-4 top-20 z-50 mx-auto max-w-xl rounded-2xl border border-primary/25 bg-[#0b0e0e]/95 p-4 text-sm text-gray-200 shadow-2xl backdrop-blur-xl";
    hint.innerHTML = '<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><span>Looking for the English version?</span><div class="flex items-center gap-3"><a class="font-headline font-bold text-primary hover:text-white" href="' + englishPath + '" hreflang="en-US">Open English page</a><button type="button" class="text-gray-500 hover:text-white" aria-label="Close language hint">Close</button></div></div>';
    const closeButton = hint.querySelector("button");
    closeButton.addEventListener("click", () => hint.remove());
    document.body.appendChild(hint);
    setTimeout(() => hint.remove(), 9000);
})();
