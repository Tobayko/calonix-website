(function () {
    const header = document.querySelector("[data-prometo-site-nav]");
    if (!header) return;

    const details = Array.from(header.querySelectorAll("details"));
    const pagePath = normalizePath(window.location.pathname);

    function normalizePath(path) {
        if (!path || path === "/index.html") return "/";
        if (path.endsWith("index.html")) return path.slice(0, -"index.html".length);
        return path;
    }

    function closeDetails(except) {
        details.forEach((item) => {
            if (item !== except) item.removeAttribute("open");
        });
    }

    header.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

        let linkPath;
        try {
            linkPath = normalizePath(new URL(href, window.location.origin).pathname);
        } catch (_) {
            return;
        }

        if (linkPath === pagePath) {
            link.setAttribute("aria-current", "page");
        }
    });

    details.forEach((item) => {
        item.addEventListener("toggle", () => {
            if (item.open) closeDetails(item);
        });

        item.querySelectorAll("a[href]").forEach((link) => {
            link.addEventListener("click", () => closeDetails());
        });
    });

    document.addEventListener("click", (event) => {
        if (!header.contains(event.target)) closeDetails();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDetails();
        }
    });
})();
