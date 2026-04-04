(function () {
    function normalizeText(value) {
        return (value || "").replace(/\s+/g, " ").trim();
    }

    function inferShotType(img) {
        var width = Number(img.getAttribute("width")) || img.naturalWidth || 0;
        var height = Number(img.getAttribute("height")) || img.naturalHeight || 0;
        return width > height ? "tablet" : "phone";
    }

    function extractCaptionData(host, img) {
        var title = normalizeText(host.getAttribute("data-lightbox-title"));
        var caption = normalizeText(host.getAttribute("data-lightbox-caption"));
        var figure = host.tagName === "FIGURE" ? host : host.closest("figure");

        if ((!title || !caption) && figure) {
            var figcaption = figure.querySelector("figcaption");
            if (figcaption) {
                if (!title) {
                    var strong = figcaption.querySelector("strong");
                    title = normalizeText(strong ? strong.textContent : "");
                }

                if (!caption) {
                    var clone = figcaption.cloneNode(true);
                    clone.querySelectorAll("strong, a, .prometo-lightbox-ignore").forEach(function (node) {
                        node.remove();
                    });
                    caption = normalizeText(clone.textContent);
                }
            }
        }

        if (!title) {
            title = normalizeText(img.alt) || "Prometo Screenshot";
        }

        if (!caption) {
            caption = normalizeText(img.alt) || title;
        }

        return {
            title: title,
            caption: caption
        };
    }

    var lightbox;
    var lightboxImage;
    var lightboxTitle;
    var lightboxCaption;
    var lightboxClose;
    var lastTrigger;

    function ensureLightbox() {
        if (lightbox) {
            return;
        }

        lightbox = document.createElement("div");
        lightbox.className = "prometo-lightbox";
        lightbox.hidden = true;
        lightbox.setAttribute("aria-hidden", "true");
        lightbox.innerHTML = [
            '<button class="prometo-lightbox__backdrop" type="button" aria-label="Großansicht schließen"></button>',
            '<div class="prometo-lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="prometoLightboxTitle" aria-describedby="prometoLightboxCaption">',
            '  <div class="prometo-lightbox__toolbar">',
            '    <button class="prometo-lightbox__close" type="button" aria-label="Großansicht schließen">×</button>',
            "  </div>",
            '  <div class="prometo-lightbox__content">',
            '    <div class="prometo-lightbox__media">',
            '      <img class="prometo-lightbox__image" alt="" />',
            "    </div>",
            '    <div class="prometo-lightbox__meta">',
            '      <div class="prometo-lightbox__title" id="prometoLightboxTitle"></div>',
            '      <div class="prometo-lightbox__caption" id="prometoLightboxCaption"></div>',
            "    </div>",
            "  </div>",
            "</div>"
        ].join("");

        document.body.appendChild(lightbox);

        lightboxImage = lightbox.querySelector(".prometo-lightbox__image");
        lightboxTitle = lightbox.querySelector(".prometo-lightbox__title");
        lightboxCaption = lightbox.querySelector(".prometo-lightbox__caption");
        lightboxClose = lightbox.querySelector(".prometo-lightbox__close");

        lightbox.querySelector(".prometo-lightbox__backdrop").addEventListener("click", closeLightbox);
        lightboxClose.addEventListener("click", closeLightbox);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && lightbox && !lightbox.hidden) {
                closeLightbox();
            }
        });
    }

    function getPayloadFromHost(host) {
        var img = host.querySelector('img[src^="/assets/prometo-screenshots/"]');

        if (!img) {
            return null;
        }

        var copy = extractCaptionData(host, img);

        return {
            src: img.currentSrc || img.src,
            alt: normalizeText(img.alt) || copy.title,
            title: copy.title,
            caption: copy.caption,
            type: host.getAttribute("data-shot-type") || inferShotType(img)
        };
    }

    function openLightbox(host, trigger) {
        var payload = getPayloadFromHost(host);

        if (!payload) {
            return;
        }

        ensureLightbox();
        lastTrigger = trigger;

        lightbox.setAttribute("data-shot-type", payload.type);
        lightboxImage.src = payload.src;
        lightboxImage.alt = payload.alt;
        lightboxTitle.textContent = payload.title;
        lightboxCaption.textContent = payload.caption;
        lightbox.hidden = false;
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("prometo-lightbox-open");
        requestAnimationFrame(function () {
            lightboxClose.focus();
        });
    }

    function closeLightbox() {
        if (!lightbox || lightbox.hidden) {
            return;
        }

        lightbox.hidden = true;
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
        document.body.classList.remove("prometo-lightbox-open");

        if (lastTrigger && typeof lastTrigger.focus === "function") {
            lastTrigger.focus();
        }
    }

    function bindTrigger(trigger) {
        if (trigger.dataset.prometoLightboxBound === "true") {
            return;
        }

        trigger.dataset.prometoLightboxBound = "true";
        trigger.addEventListener("click", function () {
            var host = trigger.closest("[data-prometo-lightbox-root]") || trigger.closest(".prometo-shot-host") || trigger;
            openLightbox(host, trigger);
        });
    }

    function enhanceScreenshotHost(host, img) {
        if (!host || host.dataset.prometoGalleryEnhanced === "true") {
            return;
        }

        var type = host.getAttribute("data-shot-type") || inferShotType(img);
        var details = extractCaptionData(host, img);
        var trigger = document.createElement("button");
        var media = document.createElement("span");
        var zoom = document.createElement("span");

        trigger.type = "button";
        trigger.className = "prometo-shot__trigger";
        trigger.setAttribute("aria-label", "Bild vergrößern: " + details.title);

        media.className = "prometo-shot__media";
        zoom.className = "prometo-shot__zoom";
        zoom.textContent = "Bild öffnen";

        var parent = img.parentNode;
        parent.replaceChild(trigger, img);
        media.appendChild(img);
        trigger.appendChild(media);
        trigger.appendChild(zoom);

        host.dataset.prometoGalleryEnhanced = "true";
        host.setAttribute("data-shot-type", type);
        host.classList.add("prometo-shot-host", "prometo-shot-host--" + type);

        if (host.classList.contains("hero-media-card")) {
            host.classList.add("prometo-shot-host--hero");
        }

        if (host.tagName === "FIGURE") {
            host.classList.add("prometo-shot");
        }

        bindTrigger(trigger);
    }

    function init() {
        document.querySelectorAll('img[src^="/assets/prometo-screenshots/"]').forEach(function (img) {
            if (img.closest(".showcase-thumb") || img.closest("[data-prometo-lightbox-trigger]") || img.id === "featuredImg") {
                return;
            }

            var host = img.closest(".hero-media-card") || img.closest("figure");
            enhanceScreenshotHost(host, img);
        });

        document.querySelectorAll("[data-prometo-lightbox-trigger]").forEach(bindTrigger);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
        return;
    }

    init();
})();
