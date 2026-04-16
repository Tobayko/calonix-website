(function () {
    if (window.__prometoAccessibilityInitialized) {
        return;
    }

    window.__prometoAccessibilityInitialized = true;

    var lang = (document.documentElement.getAttribute("lang") || "de").toLowerCase();
    var isEnglish = lang.indexOf("en") === 0;
    var copy = {
        skipLink: isEnglish ? "Skip to main content" : "Zum Inhalt springen",
        primaryNav: isEnglish ? "Primary navigation" : "Hauptnavigation",
        mobileNav: isEnglish ? "Mobile navigation" : "Mobile Navigation"
    };

    function injectStyles() {
        if (document.getElementById("prometo-accessibility-styles")) {
            return;
        }

        var style = document.createElement("style");
        style.id = "prometo-accessibility-styles";
        style.textContent = [
            ".prometo-skip-link {",
            "    position: fixed;",
            "    top: 1rem;",
            "    left: 1rem;",
            "    z-index: 9999;",
            "    display: inline-flex;",
            "    align-items: center;",
            "    justify-content: center;",
            "    padding: 0.8rem 1rem;",
            "    border-radius: 999px;",
            "    background: #45dee7;",
            "    color: #041111;",
            "    font-family: 'Space Grotesk', sans-serif;",
            "    font-size: 0.95rem;",
            "    font-weight: 700;",
            "    text-decoration: none;",
            "    transform: translateY(-140%);",
            "    transition: transform 0.2s ease;",
            "}",
            ".prometo-skip-link:focus-visible {",
            "    transform: translateY(0);",
            "    outline: 3px solid #dffbfd;",
            "    outline-offset: 3px;",
            "    box-shadow: 0 0 0 6px rgba(69, 222, 231, 0.24);",
            "}",
            "a:focus-visible,",
            "button:focus-visible,",
            "input:focus-visible,",
            "select:focus-visible,",
            "textarea:focus-visible,",
            "summary:focus-visible,",
            "[role='button']:focus-visible {",
            "    outline: 3px solid #6bf6ff;",
            "    outline-offset: 4px;",
            "    box-shadow: 0 0 0 6px rgba(69, 222, 231, 0.18);",
            "}",
            "#prometo-main-content:focus {",
            "    outline: none;",
            "}"
        ].join("\n");

        document.head.appendChild(style);
    }

    function ensureMainTarget() {
        var main = document.querySelector("main");

        if (!main) {
            main = document.querySelector("body > :not(script):not(.prometo-skip-link)");
            if (main && !main.hasAttribute("role")) {
                main.setAttribute("role", "main");
            }
        }

        if (!main) {
            return null;
        }

        if (!main.id) {
            main.id = "prometo-main-content";
        }

        if (!main.hasAttribute("tabindex")) {
            main.setAttribute("tabindex", "-1");
        }

        return main;
    }

    function ensureSkipLink(main) {
        if (!main || document.querySelector(".prometo-skip-link")) {
            return;
        }

        var skipLink = document.createElement("a");
        var firstNode = document.body.firstElementChild || document.body.firstChild;

        skipLink.className = "prometo-skip-link";
        skipLink.href = "#" + main.id;
        skipLink.textContent = copy.skipLink;

        if (firstNode) {
            document.body.insertBefore(skipLink, firstNode);
            return;
        }

        document.body.appendChild(skipLink);
    }

    function labelNavigation() {
        document.querySelectorAll("header nav:not([aria-label]):not([aria-labelledby])").forEach(function (nav) {
            nav.setAttribute("aria-label", copy.primaryNav);
        });

        document.querySelectorAll("nav.mobile-menu, nav#mobileMenu").forEach(function (nav) {
            if (!nav.hasAttribute("aria-label") && !nav.hasAttribute("aria-labelledby")) {
                nav.setAttribute("aria-label", copy.mobileNav);
            }

            if (!nav.classList.contains("open")) {
                nav.setAttribute("aria-hidden", "true");
            }
        });
    }

    function normalizeButtons() {
        document.querySelectorAll("button:not([type])").forEach(function (button) {
            button.setAttribute("type", "button");
        });
    }

    function enhanceLiveRegions() {
        var formStatus = document.getElementById("betaFormStatus");

        if (formStatus) {
            formStatus.setAttribute("role", "status");
            formStatus.setAttribute("aria-live", "polite");
        }
    }

    function init() {
        injectStyles();
        ensureSkipLink(ensureMainTarget());
        labelNavigation();
        normalizeButtons();
        enhanceLiveRegions();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
        return;
    }

    init();
})();
