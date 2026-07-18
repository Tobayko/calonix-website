(function () {
    "use strict";

    var form = document.getElementById("beta-form");
    if (!form) return;

    var isEnglish = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
    var copy = isEnglish ? {
        sending: "Sending your application …",
        fallbackError: "The application could not be sent.",
        success: "Application received. Redirecting …"
    } : {
        sending: "Anmeldung wird gesendet …",
        fallbackError: "Die Anmeldung konnte nicht gesendet werden.",
        success: "Anmeldung erfolgreich. Du wirst weitergeleitet …"
    };
    var successPage = isEnglish ? "/en/beta/thanks/" : "/beta/danke/";
    var status = document.getElementById("beta-form-status");
    var submitButton = form.querySelector("button[type='submit']");
    var started = false;

    function setStatus(message, state) {
        if (!status) return;
        status.textContent = message;
        status.setAttribute("data-state", state || "");
    }

    function trackStart() {
        if (started) return;
        started = true;
        if (typeof window.prometoTrack === "function") {
            window.prometoTrack("beta_form_start", {
                cta_position: "beta_form",
                target_page: successPage
            });
        }
    }

    form.addEventListener("focusin", trackStart, { once: true });

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        trackStart();

        if (!form.reportValidity()) return;

        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
        setStatus(copy.sending, "");

        var data = new FormData(form);
        var payload = {
            email: String(data.get("email") || "").trim(),
            company: String(data.get("company") || "").trim(),
            role: String(data.get("role") || "").trim(),
            monthlyCalculations: String(data.get("monthlyCalculations") || "").trim(),
            privacyConsent: data.get("privacyConsent") === "on",
            website: String(data.get("website") || "").trim()
        };

        try {
            var response = await fetch("/api/beta-signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });
            var result = await response.json().catch(function () { return {}; });

            if (!response.ok || !result.ok) {
                throw new Error(result.error || copy.fallbackError);
            }

            if (typeof window.prometoTrack === "function") {
                window.prometoTrack("beta_form_submit", {
                    cta_position: "beta_form",
                    target_page: successPage
                });
            }

            setStatus(copy.success, "success");
            window.location.assign(successPage);
        } catch (error) {
            setStatus(error instanceof Error ? error.message : copy.fallbackError, "error");
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
        }
    });
})();
