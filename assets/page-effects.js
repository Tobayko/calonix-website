(function () {
    if (window.__prometoAccessibilityScriptRequested) {
        return;
    }

    window.__prometoAccessibilityScriptRequested = true;

    var script = document.createElement("script");
    script.src = "/assets/accessibility.js";
    script.async = true;
    script.dataset.prometoAccessibility = "true";
    document.head.appendChild(script);
})();

(function () {
    var reveals = document.querySelectorAll(".reveal");

    if (!reveals.length) {
        return;
    }

    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        reveals.forEach(function (element) {
            element.classList.add("is-visible");
        });
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    reveals.forEach(function (element, index) {
        if (index < 2) {
            requestAnimationFrame(function () {
                element.classList.add("is-visible");
            });
            return;
        }

        observer.observe(element);
    });
})();

(function () {
    var videos = document.querySelectorAll("video[data-lazy-video]");

    if (!videos.length) {
        return;
    }

    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function load(video) {
        var source = video.querySelector("source[data-src]");
        if (source) {
            source.src = source.dataset.src;
            source.removeAttribute("data-src");
            video.load();
        }
        if (reducedMotion) {
            video.controls = true;
        } else {
            video.play().catch(function () {});
        }
    }

    if (!("IntersectionObserver" in window)) {
        videos.forEach(load);
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    load(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.35 }
    );

    videos.forEach(function (video) {
        observer.observe(video);
    });
})();
