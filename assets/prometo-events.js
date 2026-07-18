(function () {
    "use strict";

    function deviceType() {
        if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
        if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
        return "desktop";
    }

    function targetPath(value) {
        if (!value) return "";
        try {
            return new URL(value, window.location.origin).pathname;
        } catch (_) {
            return value;
        }
    }

    function ctaPosition(element) {
        if (element.getAttribute("data-cta-position")) return element.getAttribute("data-cta-position");
        if (element.closest(".site-mobile-nav")) return "mobile_menu";
        if (element.closest("header")) return "header";
        if (element.closest("footer")) return "footer";
        return "content";
    }

    window.prometoTrack = window.prometoTrack || function (eventName, parameters) {
        var consent = null;
        try {
            consent = window.localStorage.getItem("ga_consent");
        } catch (_) {
            return;
        }

        if (consent !== "granted" || typeof window.gtag !== "function") return;
        window.gtag("event", eventName, Object.assign({
            page_path: window.location.pathname,
            cta_position: "",
            target_page: "",
            device_type: deviceType()
        }, parameters || {}));
    };

    document.addEventListener("click", function (event) {
        var link = event.target.closest("a[href], [data-event]");
        if (!link) return;
        var destination = targetPath(link.getAttribute("href"));
        var eventName = link.getAttribute("data-event");

        if (!eventName && (destination === "/beta/" || destination === "/en/beta/")) {
            eventName = "beta_cta_click";
        }

        if (!eventName) return;
        window.prometoTrack(eventName, {
            cta_position: ctaPosition(link),
            target_page: destination
        });
    });
})();
