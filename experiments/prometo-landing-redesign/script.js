(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  const setHeader = () => header?.classList.toggle("scrolled", window.scrollY > 20);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Menü öffnen" : "Menü schließen");
    mobileMenu.hidden = open;
    document.body.classList.toggle("menu-open", !open);
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      menuButton?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const reveals = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((item) => item.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    reveals.forEach((item) => revealObserver.observe(item));
  }

  const engine = document.querySelector("[data-engine]");
  if (engine) {
    const plan = engine.querySelector("[data-plan]");
    const buttons = [...engine.querySelectorAll("[data-engine-step]")];
    const state = engine.querySelector("[data-engine-state]");
    const rooms = engine.querySelector("[data-metric-rooms]");
    const load = engine.querySelector("[data-metric-load]");
    const circuits = engine.querySelector("[data-metric-circuits]");
    const engineData = {
      scan: ["PDF wird analysiert", "–", "–", "–"],
      rooms: ["Räume erkannt", "9 erkannt", "–", "–"],
      review: ["2 Angaben prüfen", "9 erkannt", "–", "–"],
      load: ["Heizlast berechnet", "9 erkannt", "5,8 kW", "–"],
      circuits: ["Heizkreise ausgelegt", "9 erkannt", "5,8 kW", "7 ausgelegt"],
      output: ["Projektstand bereit", "9 geprüft", "5,8 kW", "7 freigegeben"]
    };

    const setEngineStep = (step) => {
      plan.className = `plan state-${step}`;
      buttons.forEach((button) => button.classList.toggle("active", button.dataset.engineStep === step));
      const values = engineData[step];
      state.textContent = values[0];
      rooms.textContent = values[1];
      load.textContent = values[2];
      circuits.textContent = values[3];
    };

    buttons.forEach((button) => button.addEventListener("click", () => setEngineStep(button.dataset.engineStep)));
    setEngineStep("rooms");

    if (!reducedMotion) {
      let engineIndex = 1;
      let engineTimer;
      let cycles = 0;
      let userSelected = false;

      buttons.forEach((button) => button.addEventListener("click", () => {
        userSelected = true;
        window.clearInterval(engineTimer);
      }));

      const engineObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || engineTimer || userSelected) return;
        engineTimer = window.setInterval(() => {
          if (document.hidden) return;
          engineIndex = (engineIndex + 1) % buttons.length;
          setEngineStep(buttons[engineIndex].dataset.engineStep);
          cycles += 1;
          if (cycles >= buttons.length - 2) window.clearInterval(engineTimer);
        }, 3200);
        engineObserver.disconnect();
      }, { threshold: 0.45 });

      engineObserver.observe(engine);
    }
  }

  const workflowData = [
    {
      label: "01 / PDF-IMPORT",
      image: "../../assets/prometo-screenshots/tablet/bauplan-import-ki-bereit.webp",
      alt: "Prometo Bauplan-Import auf einem Tablet",
      mediaType: "tablet",
      input: "PDF-Grundriss · 2 Seiten",
      output: "Plananalyse bereit"
    },
    {
      label: "02 / RAUMERKENNUNG",
      image: "../../assets/prometo-screenshots/android/tablet/02-raeume-aus-bauplan.webp",
      alt: "Aus dem Bauplan übernommene Räume in Prometo",
      mediaType: "portrait",
      input: "Analysierter Grundriss",
      output: "9 Räume · 148 m²"
    },
    {
      label: "03 / FACHLICHE PRÜFUNG",
      image: "../../assets/prometo-screenshots/tablet/bauplan-import-review.webp",
      alt: "Kontrollierbare Raumdaten im Prometo Import-Review",
      mediaType: "tablet",
      input: "9 erkannte Räume",
      output: "7 freigegeben · 2 offen"
    },
    {
      label: "04 / HEIZLAST",
      image: "../../assets/prometo-screenshots/tablet/projektdetail-heatmap.webp",
      alt: "Raumweise Heizlast-Heatmap in Prometo",
      mediaType: "tablet",
      input: "Geprüfte Raum- und Bauteildaten",
      output: "5,8 kW · 44 W/m²"
    },
    {
      label: "05 / FLÄCHENHEIZUNG",
      image: "../../assets/prometo-screenshots/android/tablet/07-heizkreise-einstellwerte.webp",
      alt: "Heizkreise, Rohrlängen und Einstellwerte in Prometo",
      mediaType: "portrait",
      input: "Raumweise Heizlast",
      output: "7 Heizkreise · 612 m"
    },
    {
      label: "06 / MATERIAL",
      image: "../../assets/showcase/featured/materials.webp",
      alt: "Projektbezogene Materialübersicht in Prometo",
      mediaType: "portrait",
      input: "Auslegung und Systemparameter",
      output: "28 Materialpositionen"
    },
    {
      label: "07 / HYDRAULISCHER ABGLEICH",
      image: "../../assets/prometo-screenshots/tablet/hydraulischer-abgleich-og-verteiler.webp",
      alt: "Hydraulischer Abgleich in Prometo",
      mediaType: "tablet",
      input: "Heizlast und Heizkreise",
      output: "4,3 l/min · Einregelwerte"
    }
  ];

  const workflowButtons = [...document.querySelectorAll("[data-workflow-step]")];
  const workflowImage = document.querySelector("[data-workflow-image]");
  const workflowLabel = document.querySelector("[data-workflow-label]");
  const workflowInput = document.querySelector("[data-workflow-input]");
  const workflowOutput = document.querySelector("[data-workflow-output]");
  const workflowFrame = workflowImage?.closest(".app-frame");

  workflowButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const index = Number(button.dataset.workflowStep);
      const item = workflowData[index];
      workflowButtons.forEach((entry) => {
        const active = entry === button;
        entry.classList.toggle("active", active);
        entry.setAttribute("aria-selected", String(active));
      });
      const nextImage = new Image();
      nextImage.src = item.image;
      try {
        await nextImage.decode();
      } catch (_) {
        // Browser can still render cached/local images when decode is unavailable.
      }
      workflowFrame?.classList.toggle("portrait-mode", item.mediaType === "portrait");
      workflowFrame?.classList.toggle("tablet-mode", item.mediaType === "tablet");
      workflowImage.src = item.image;
      workflowImage.alt = item.alt;
      workflowLabel.textContent = item.label;
      workflowInput.textContent = item.input;
      workflowOutput.textContent = item.output;
      if (!reducedMotion) {
        workflowImage.animate(
          [{ opacity: 0.15, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 320, easing: "ease-out" }
        );
      }
    });
  });

  const demoData = {
    plan: {
      title: "Planstruktur · Erdgeschoss",
      meta: "Maßstab 1:100 · 9 Räume",
      image: null
    },
    rooms: {
      title: "Erkannte Räume · Prüfung",
      meta: "7 freigegeben · 2 offen",
      image: null
    },
    heat: {
      title: "Raumweise Heizlast · Heatmap",
      meta: "5,8 kW · 44 W/m²",
      image: "../../assets/prometo-screenshots/tablet/projektdetail-heatmap.webp",
      alt: "Prometo Heizlast-Heatmap"
    },
    hydraulic: {
      title: "Hydraulischer Abgleich · Verteiler OG",
      meta: "6 Heizkreise · 4,3 l/min",
      image: "../../assets/prometo-screenshots/tablet/hydraulischer-abgleich-og-verteiler.webp",
      alt: "Prometo hydraulischer Abgleich"
    }
  };

  const demoButtons = [...document.querySelectorAll("[data-demo-view]")];
  const demoPlan = document.querySelector("[data-demo-plan]");
  const demoImage = document.querySelector("[data-demo-image]");
  const demoTitle = document.querySelector("[data-demo-title]");
  const demoMeta = document.querySelector("[data-demo-meta]");

  demoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.demoView;
      const item = demoData[view];
      demoButtons.forEach((entry) => {
        const active = entry === button;
        entry.classList.toggle("active", active);
        entry.setAttribute("aria-selected", String(active));
      });
      demoTitle.textContent = item.title;
      demoMeta.textContent = item.meta;
      if (item.image) {
        demoPlan.hidden = true;
        demoImage.hidden = false;
        demoImage.src = item.image;
        demoImage.alt = item.alt;
      } else {
        demoImage.hidden = true;
        demoPlan.hidden = false;
        demoPlan.classList.toggle("view-rooms", view === "rooms");
      }
    });
  });
})();
