(function () {
    "use strict";

    var measurementId = "G-NCWCYR2X69";
    var consentKey = "ga_consent";
    var analyticsLoaded = false;
    var documentedEvents = [
        "beta_cta_click",
        "beta_form_start",
        "beta_form_submit",
        "workflow_view",
        "comparison_cta_click"
    ];

    window.prometoAnalyticsEvents = documentedEvents.slice();

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
    });

    function getConsent() {
        try {
            return window.localStorage.getItem(consentKey);
        } catch (_) {
            return null;
        }
    }

    function setConsent(value) {
        try {
            window.localStorage.setItem(consentKey, value);
        } catch (_) {
            return;
        }
    }

    function loadAnalytics() {
        if (analyticsLoaded || getConsent() !== "granted") return;

        analyticsLoaded = true;
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
        document.head.appendChild(script);
        window.gtag("js", new Date());
        window.gtag("config", measurementId, { anonymize_ip: true });
    }

    function deviceType() {
        if (window.matchMedia("(max-width: 767px)").matches) return "mobile";
        if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
        return "desktop";
    }

    function absoluteTarget(value) {
        if (!value) return "";
        try {
            return new URL(value, window.location.origin).pathname;
        } catch (_) {
            return value;
        }
    }

    window.prometoTrack = function (eventName, parameters) {
        if (!eventName || getConsent() !== "granted") return;
        loadAnalytics();
        window.gtag("event", eventName, Object.assign({
            page_path: window.location.pathname,
            cta_position: "",
            target_page: "",
            device_type: deviceType()
        }, parameters || {}));
    };

    function initConsent() {
        var banner = document.getElementById("cookie-banner");
        var accept = document.getElementById("cookie-accept");
        var decline = document.getElementById("cookie-decline");
        var consent = getConsent();

        if (consent === "granted") {
            window.gtag("consent", "update", { analytics_storage: "granted" });
            loadAnalytics();
        } else if (!consent && banner) {
            banner.setAttribute("data-visible", "true");
        }

        if (accept) {
            accept.addEventListener("click", function () {
                setConsent("granted");
                window.gtag("consent", "update", { analytics_storage: "granted" });
                if (banner) banner.removeAttribute("data-visible");
                loadAnalytics();
            });
        }

        if (decline) {
            decline.addEventListener("click", function () {
                setConsent("denied");
                window.gtag("consent", "update", { analytics_storage: "denied" });
                if (banner) banner.removeAttribute("data-visible");
            });
        }
    }

    function initEventTracking() {
        document.addEventListener("click", function (event) {
            var target = event.target.closest("[data-event]");
            if (!target) return;

            window.prometoTrack(target.getAttribute("data-event"), {
                cta_position: target.getAttribute("data-cta-position") || "",
                target_page: absoluteTarget(target.getAttribute("href"))
            });
        });
    }

    function init() {
        initConsent();
        initEventTracking();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
