import { useCallback, useEffect, useRef, useState } from "react";
import { ThermalScene } from "./ThermalScene.jsx";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const smoothstep = (start, end, value) => {
  const x = clamp((value - start) / (end - start));
  return x * x * (3 - 2 * x);
};

function trackEvent(name, detail = {}) {
  window.dataLayer = window.dataLayer || [];
  window.__prometoPrototypeEvents = window.__prometoPrototypeEvents || [];

  const event = {
    event: name,
    prototype: "seamless-3d-transition",
    timestamp: new Date().toISOString(),
    ...detail,
  };

  window.dataLayer.push(event);
  window.__prometoPrototypeEvents.push(event);
  window.dispatchEvent(new CustomEvent("prometo:prototype-event", { detail: event }));
}

function MaterialIcon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

const componentDetails = [
  {
    key: "finish",
    label: "Oberbelag",
    tone: "finish",
    kicker: "01 / 08 · Sichtbarer Abschluss",
    title: "Oberbelag",
    description:
      "Parkett, Stein oder Designbelag bilden den sichtbaren Abschluss. Drei Materialmuster zeigen, wie flexibel der renovierte Boden später gestaltet werden kann.",
    facts: ["Holz · Stein · Design", "oberste Schicht"],
  },
  {
    key: "dryScreed",
    label: "Trockenestrich",
    tone: "screed",
    kicker: "02 / 08 · Lastverteilung",
    title: "Trockenestrich / Lastverteilplatte",
    description:
      "Die steife Plattenlage verteilt Nutzlasten und schafft eine ebene Fläche für den Oberbelag. Im 3D-Schnitt bleibt sie teilweise geöffnet, damit die Rohrführung lesbar bleibt.",
    facts: ["trockener Aufbau", "ebene Nutzschicht"],
  },
  {
    key: "pipe",
    label: "Heizrohr 17 × 2 mm",
    tone: "pipe",
    kicker: "03 / 08 · Wärmeverteilung",
    title: "Heizrohr 17 × 2 mm",
    description:
      "Das geschlossene Heizrohr besitzt 17 mm Außendurchmesser und 2 mm Wandstärke. Im Wireframe wandert eine Temperaturwelle von Kaltblau zu Heißrot durch den durchgängigen Heizkreis.",
    facts: ["17 mm außen", "2 mm Wand", "Kaltblau → Heißrot"],
  },
  {
    key: "clips",
    label: "Türkise Rohrclips",
    tone: "clip",
    kicker: "04 / 08 · Sichere Rohrführung",
    title: "Türkiser Rohrclip",
    description:
      "Die U-förmige Aufnahme hält das Rohr formschlüssig. Der Steckfuß rastet in der Lochplatte ein; an Kurven und Übergängen sitzen die Clips dichter.",
    facts: ["U-Aufnahme", "Steckfuß", "Bögen dichter"],
    image: "/product/rohrclip-front.png",
    imageAlt: "Türkiser Rohrclip in Frontansicht",
    imageWidth: 1000,
    imageHeight: 965,
  },
  {
    key: "edgeStrip",
    label: "Randdämmstreifen",
    tone: "edge-strip",
    kicker: "05 / 08 · Sichere Randentkopplung",
    title: "Randdämmstreifen",
    description:
      "Der blaue Randdämmstreifen trennt den Bodenaufbau von angrenzenden Bauteilen. Er nimmt Bewegungen am Rand auf und hilft, starre Kontakt- und Schallbrücken zu vermeiden.",
    facts: ["Randentkopplung", "Bewegungsaufnahme", "Schallschutz"],
  },
  {
    key: "biofaser",
    label: "Biofaser-Trägerplatte",
    tone: "biofaser",
    kicker: "06 / 08 · Ökologisches Trägermaterial",
    title: "Biofaser-Trägermaterial",
    description:
      "Die rund 5 mm starke Biofaser-Trägerplatte nimmt die Clips im 5-cm-Lochraster auf. Als ökologische Trägerebene macht sie unterschiedliche Verlegewege sichtbar und flexibel.",
    facts: ["Trägermaterial", "ca. 5 mm stark", "5 cm Lochraster"],
    image: "/product/biofaser-lochplatte.png",
    imageAlt: "Braune Biofaser-Lochplatte mit regelmäßigem Lochraster",
    imageWidth: 1400,
    imageHeight: 996,
  },
  {
    key: "adhesive",
    label: "Klebe- / Ausgleichsebene",
    tone: "adhesive",
    kicker: "07 / 08 · Vollflächige Verbindung",
    title: "Klebe- und Ausgleichsebene",
    description:
      "Die dünne dunkle Ebene verbindet die Systemplatte mit dem vorbereiteten Bestand und gleicht kleine Unebenheiten aus. Die sichtbaren Zahnriefen erklären den Auftrag.",
    facts: ["dünnschichtig", "ausgleichend", "vollflächig"],
  },
  {
    key: "slab",
    label: "Rohdecke / Bestand",
    tone: "slab",
    kicker: "08 / 08 · Tragender Bestand",
    title: "Rohdecke / Bestandsboden",
    description:
      "Der vorhandene tragfähige Untergrund ist die Basis der Renovierung. Von hier aus setzt sich der gesamte Aufbau in der realen Montagereihenfolge nach oben zusammen.",
    facts: ["tragfähige Basis", "vorbereitet", "Bestand"],
  },
];

export function App() {
  const storyRef = useRef(null);
  const progressRef = useRef(0);
  const scrollFlagsRef = useRef({ started: false, completed: false });
  const activeLayerRef = useRef(-1);
  const viewStartedAtRef = useRef(Date.now());
  const [progressLabel, setProgressLabel] = useState(0);
  const [activeLayer, setActiveLayer] = useState(-1);
  const [isExploded, setIsExploded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const handleFirstInteraction = useCallback(() => {
    trackEvent("three_interacted", {
      timeToInteractionMs: Date.now() - viewStartedAtRef.current,
    });
  }, []);
  const handleSceneReady = useCallback((detail) => {
    trackEvent("three_scene_ready", detail);
  }, []);

  useEffect(() => {
    if (!window.__prometoPrototypeViewed) {
      window.__prometoPrototypeViewed = true;
      viewStartedAtRef.current = Date.now();
      trackEvent("prototype_view");
    }

    let frameId = 0;

    const updateStory = () => {
      frameId = 0;

      const story = storyRef.current;
      if (!story) return;

      const start = story.offsetTop;
      const distance = Math.max(story.offsetHeight - window.innerHeight, 1);
      const progress = clamp((window.scrollY - start) / distance);
      const heroOpacity = 1 - smoothstep(0.07, 0.2, progress);
      const detailOpacity =
        smoothstep(0.27, 0.32, progress) * (1 - smoothstep(0.965, 0.995, progress));
      const sceneCopyOpacity =
        smoothstep(0.08, 0.13, progress) * (1 - smoothstep(0.25, 0.31, progress));
      const detailStart = 0.3;
      const detailEnd = 0.95;
      const normalizedDetail = clamp(
        (progress - detailStart) / (detailEnd - detailStart),
        0,
        0.9999,
      );
      const nextActiveLayer =
        progress < detailStart
          ? -1
          : Math.min(
              componentDetails.length - 1,
              Math.floor(normalizedDetail * componentDetails.length),
            );

      progressRef.current = progress;
      story.style.setProperty("--story-progress", progress.toFixed(4));
      story.style.setProperty("--hero-opacity", heroOpacity.toFixed(4));
      story.style.setProperty("--hero-shift", `${Math.round(progress * -72)}px`);
      story.style.setProperty("--bridge-opacity", detailOpacity.toFixed(4));
      story.style.setProperty("--bridge-shift", `${Math.round((1 - detailOpacity) * 42)}px`);
      story.style.setProperty("--scene-copy-opacity", sceneCopyOpacity.toFixed(4));
      story.style.setProperty("--legend-opacity", detailOpacity.toFixed(4));
      story.style.setProperty("--legend-shift", `${Math.round((1 - detailOpacity) * -18)}px`);
      story.style.setProperty("--veil-opacity", smoothstep(0.9, 0.99, progress).toFixed(4));

      const rounded = Math.round(progress * 100);
      setProgressLabel((previous) => (previous === rounded ? previous : rounded));

      if (nextActiveLayer !== activeLayerRef.current) {
        activeLayerRef.current = nextActiveLayer;
        setActiveLayer(nextActiveLayer);
        if (nextActiveLayer >= 0) {
          trackEvent("component_focused", {
            component: componentDetails[nextActiveLayer].key,
            position: nextActiveLayer + 1,
          });
        }
      }

      if (progress > 0.1 && !scrollFlagsRef.current.started) {
        scrollFlagsRef.current.started = true;
        trackEvent("transition_started");
      }

      if (progress > 0.95 && !scrollFlagsRef.current.completed) {
        scrollFlagsRef.current.completed = true;
        trackEvent("transition_completed");
      }
    };

    const requestUpdate = () => {
      if (!frameId) frameId = requestAnimationFrame(updateStory);
    };

    updateStory();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(""), 3600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const moveToProgress = (targetProgress) => {
    const story = storyRef.current;
    if (!story) return;

    const distance = Math.max(story.offsetHeight - window.innerHeight, 1);
    window.scrollTo({
      top: story.offsetTop + distance * targetProgress,
      behavior: "smooth",
    });
  };

  const handlePrimaryCta = () => {
    trackEvent("cta_clicked", { cta: "start_3d_story" });
    moveToProgress(0.12);
  };

  const handleModelToggle = () => {
    const next = !isExploded;
    setIsExploded(next);
    trackEvent("three_model_toggled", { state: next ? "exploded" : "assembled" });
  };

  const handleBetaTest = () => {
    trackEvent("cta_clicked", { cta: "beta_test", location: "continuation" });
    setToast("Test-CTA erfasst – es wurden keine Daten gesendet.");
  };

  const currentDetail = componentDetails[Math.max(activeLayer, 0)];

  const focusComponent = (index) => {
    const detailStart = 0.31;
    const detailSpan = 0.62;
    const target =
      detailStart + (index / Math.max(componentDetails.length - 1, 1)) * detailSpan;
    trackEvent("component_selected", {
      component: componentDetails[index].key,
      position: index + 1,
    });
    moveToProgress(target);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-nav-shell">
          <a className="site-brand" href="#top" aria-label="Prometo Start">
            <img src="/brand/prometo-wordmark.svg" alt="Prometo" />
          </a>

          <nav className="site-desktop-nav" aria-label="Testnavigation">
            <button type="button" onClick={() => moveToProgress(0.1)}>
              Montage
            </button>
            <button type="button" onClick={() => moveToProgress(0.33)}>
              Bauteile
            </button>
            <a href="#system">Workflow</a>
          </nav>

          <div className="site-nav-actions">
            <span className="test-label">
              <span />
              Konzepttest
            </span>
            <button className="nav-cta" type="button" onClick={handlePrimaryCta}>
              Test starten
            </button>
            <button
              className="mobile-menu-button"
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mobile-menu" aria-label="Testnavigation mobil">
            <button type="button" onClick={() => { moveToProgress(0.1); setMenuOpen(false); }}>
              Montage
            </button>
            <button type="button" onClick={() => { moveToProgress(0.33); setMenuOpen(false); }}>
              Bauteile
            </button>
            <a href="#system" onClick={() => setMenuOpen(false)}>Workflow</a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section
          className={`story ${isExploded ? "is-manually-exploded" : ""}`}
          ref={storyRef}
          aria-label="Interaktiver 3D-Schnitt eines Fußbodenheizungsaufbaus"
        >
          <div className="story-sticky">
            <ThermalScene
              progressRef={progressRef}
              exploded={isExploded}
              activeLayer={activeLayer}
              onFirstInteraction={handleFirstInteraction}
              onSceneReady={handleSceneReady}
            />

            <div className="ambient-grid" aria-hidden="true" />
            <div className="ambient-bloom ambient-bloom-a" aria-hidden="true" />
            <div className="ambient-bloom ambient-bloom-b" aria-hidden="true" />

            <div className="story-frame">
              <p className="sr-only">
                Das 3D-Modell zeigt einen Renovierungsaufbau mit Oberbelag,
                Trockenestrich, Heizrohr 17 mal 2 Millimeter, türkisfarbenen Clips,
                blauem Randdämmstreifen, Biofaser-Trägerplatte im 5-Zentimeter-Raster,
                Klebeebene und Rohdecke. Das Rohr zeigt eine Heiß-/Kalt-Temperaturwelle.
                Zuerst montiert sich der Aufbau von unten
                nach oben. Danach werden die acht Bauteile beim Scrollen von oben
                nach unten erklärt.
              </p>

              <div className="hero-copy">
                <div className="eyebrow-row">
                  <span className="badge">
                    <span className="badge-dot" />
                    tempusFLAT Renovierung
                  </span>
                  <span className="eyebrow-note">Biofaser · 17 × 2 mm · 5-cm-Raster</span>
                </div>

                <h1>
                  Sanieren mit System.
                  <span> Bauteil für Bauteil.</span>
                </h1>

                <p className="hero-lead">
                  Der Boden setzt sich wie auf der Baustelle von unten nach oben
                  zusammen. Danach öffnet er sich zu einem klaren Wireframe-3D-Schnitt,
                  der jede Schicht einzeln erklärt.
                </p>

                <div className="hero-actions">
                  <button className="button button-primary" type="button" onClick={handlePrimaryCta}>
                    Montage ansehen
                    <MaterialIcon>arrow_downward</MaterialIcon>
                  </button>
                  <button className="button button-secondary" type="button" onClick={handleModelToggle}>
                    <MaterialIcon>{isExploded ? "close_fullscreen" : "layers"}</MaterialIcon>
                    {isExploded ? "Aufbau schließen" : "Aufbau auffächern"}
                  </button>
                </div>

                <p className="prototype-note">
                  Isolierter Konzepttest · die bestehende Website bleibt unverändert
                </p>
              </div>

              <div className="scene-caption">
                <span className="scene-caption-index">01</span>
                <div>
                  <strong>Montagefolge</strong>
                  <span>Rohdecke, Kleber, Biofaser-Trägermaterial, Randdämmung, Clips, Rohr und Decklagen.</span>
                </div>
              </div>

              <aside className="layer-legend" aria-label="Bauteile des Fußbodenaufbaus">
                <span>Von oben nach unten</span>
                <ol>
                  {componentDetails.map((layer, index) => (
                    <li
                      className={activeLayer === index ? "is-active" : ""}
                      key={layer.key}
                    >
                      <button
                        type="button"
                        aria-current={activeLayer === index ? "step" : undefined}
                        onClick={() => focusComponent(index)}
                      >
                        <i className={`layer-dot layer-dot-${layer.tone}`} aria-hidden="true" />
                        <strong>{String(index + 1).padStart(2, "0")}</strong>
                        <span>{layer.label}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </aside>

              <article
                className="component-detail"
                aria-live="polite"
                aria-atomic="true"
                aria-hidden={activeLayer < 0}
              >
                <div className="component-detail-topline">
                  <span className="section-kicker">{currentDetail.kicker}</span>
                  <span className="component-active-marker">
                    <i />
                    Im Modell markiert
                  </span>
                </div>

                <div className="component-detail-body" key={currentDetail.key}>
                  <h2>{currentDetail.title}</h2>
                  <p>{currentDetail.description}</p>

                  {currentDetail.image ? (
                    <figure className={`component-product component-product-${currentDetail.key}`}>
                      <img
                        src={currentDetail.image}
                        alt={currentDetail.imageAlt}
                        width={currentDetail.imageWidth}
                        height={currentDetail.imageHeight}
                        decoding="async"
                      />
                    </figure>
                  ) : null}

                  <ul className="component-facts" aria-label="Bauteilmerkmale">
                    {currentDetail.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </article>

              <div className="scroll-progress" aria-hidden="true">
                <span>Scroll</span>
                <div className="scroll-track">
                  <i style={{ transform: `scaleY(${Math.max(progressLabel / 100, 0.035)})` }} />
                </div>
                <strong>
                  {activeLayer >= 0
                    ? `${String(activeLayer + 1).padStart(2, "0")}/${String(componentDetails.length).padStart(2, "0")}`
                    : String(progressLabel).padStart(2, "0")}
                </strong>
              </div>
            </div>

            <div className="story-veil" aria-hidden="true" />
          </div>
        </section>

        <section className="continuation" id="system" aria-labelledby="continuation-title">
          <div className="continuation-glow" aria-hidden="true" />
          <div className="continuation-inner">
            <div className="continuation-copy">
              <span className="section-kicker">Vom Bauteil zum Projekt</span>
              <h2 id="continuation-title">
                Was im 3D-Schnitt klar wird,
                <span> wird in Prometo planbar.</span>
              </h2>
              <p>
                Der physische Aufbau geht nahtlos in Heizlast, Raumdaten und
                Ergebnisprüfung über – mit derselben visuellen Logik vom Bauteil bis
                zum prüfbaren Projektstand.
              </p>

              <div className="continuation-actions">
                <button className="button button-primary" type="button" onClick={handleBetaTest}>
                  Beta-Zugang testen
                  <MaterialIcon>arrow_forward</MaterialIcon>
                </button>
                <span>Nur Prototyp · keine Übermittlung</span>
              </div>
            </div>

            <div className="product-window">
              <div className="product-window-topbar">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>Projekt / MFH / Ergebnisse</span>
                <span className="window-status">
                  <i />
                  Synchron
                </span>
              </div>
              <div className="product-window-media">
                <img
                  src="/reference/prometo-project-heatmap.webp"
                  alt="Prometo Projektergebnisse mit raumweiser Heizlast"
                />
                <div className="product-window-sheen" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="signal-strip" aria-label="Konzeptmerkmale">
            <span>17 × 2 mm Rohr</span>
            <i />
            <span>5 cm Lochraster</span>
            <i />
            <span>Biofaser-Systemplatte</span>
            <i />
            <span>8 Bauteile im 3D-Schnitt</span>
          </div>
        </section>
      </main>

      <div className={`toast ${toast ? "toast-visible" : ""}`} role="status" aria-live="polite">
        <MaterialIcon>check_circle</MaterialIcon>
        {toast}
      </div>
    </div>
  );
}
