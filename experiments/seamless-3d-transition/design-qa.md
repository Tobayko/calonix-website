# Design QA — Opaquer Wireframe-Aufbau in 3D

Source visual truth:

- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/source-desktop-initial.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/public/product/renovierungsaufbau-referenz.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/public/product/biofaser-lochplatte.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/public/product/rohrclip-front.png`

Implementation evidence:

- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-assembly.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-initial.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-pipe-step.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-clip-step.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-edge-strip-step.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-board-step.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-slab-step.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-mobile-initial.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-mobile-transition.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/prototype-desktop-reduced-motion.png`

Comparison boards:

- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/comparison-current-website.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/comparison-desktop-focus.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/comparison-renovation-build.png`
- `/Users/tobiasburandt/Webseite Calonix/experiments/seamless-3d-transition/qa/comparison-mobile-initial.png`

Viewports: desktop 1440 × 900; mobile 390 × 844.

## Findings

No actionable P0, P1, or P2 findings remain.

## Comparison history

- 2026-07-17: The earlier material-textured system view was intentionally replaced by the requested opaque, color-coded wireframe. The revised desktop, mobile, pipe, Biofaser and reduced-motion captures were compared with the existing Prometo design reference and the supplied system-build reference. No visual regression to the site frame, navigation, typography or component separation remains.

## Fidelity and behavior checks

- The current Prometo typography, dark graphite background, cyan hierarchy, wordmark, navigation proportions, rounded CTA treatment, and restrained glass surfaces remain intact.
- The model follows the supplied renovation reference: existing substrate, dark adhesive/levelling layer, 5 mm perforated Biofaser Trägermaterial, separate blue edge-insulation strip, clips, pipe, dry load-distribution layer, and three finish samples.
- Every component uses an opaque solid fill with a separate bright wire overlay and outer edge line. No color, bump or roughness maps are allocated or used by the rendered model.
- Eight distinct color pairs keep the opaque wireframe legible: cool grey-blue slab, violet adhesive, amber Trägermaterial, cyan edge strip and clips, thermal pipe, mint dry screed, and three clearly separated finish samples.
- During the component walkthrough, the selected layer stays bright while every other opaque layer is darkened in place; this preserves the construction context without competing with the current explanation.
- The scene camera recenters each active layer on the visible stage during the walkthrough; the explanatory panel uses a narrower right-side column so it no longer obscures that focal point.
- The Biofaser Trägermaterial uses a visible 12 × 8 perforation field. Model scale maps the 0.35-unit spacing to a 5 cm grid and the 0.035-unit extrusion to approximately 5 mm.
- The pipe is scaled as 17 × 2 mm and reads as one continuous, closed serpentine circuit. Its wire overlay uses a repeating animated temperature wave from Kaltblau to Heißrot; no water core, flowing particles, or water animation remains.
- The turquoise clips use a U-shaped cradle, lateral supports, insertion stem, and barb based on the supplied product views. Twenty-eight clips are distributed along the circuit, one third fewer than the former 42-clip version.
- The blue Randdämmstreifen is a dedicated eighth 3D component with its own opaque wireframe group, explosion offset, legend entry, scroll stage, highlight, and explanatory copy.
- Intro assembly runs bottom-to-top in construction order and is based on wall-clock time, so low frame rates do not stretch or stall the sequence.
- After the full explosion, eight scroll stages run from top to bottom. The active component moves forward, scales up, receives a restrained cyan material highlight, and is synchronized with the legend and explanatory panel.
- Clip and Biofaser stages use the real supplied product images in the information panel.
- Mobile keeps the assembled model below the hero controls and fits the complete exploded stack above the component panel.
- Reduced motion presents the same opaque exploded system with the temperature wave frozen to its initial thermal state and no continuous scene choreography.

## Browser verification

- WebGL canvas and context: present at desktop and mobile sizes.
- Scene-ready payload: 8 layers, `17 × 2 mm`, 5 cm grid, 5 mm board, 28 clips, separate edge strip, opaque-wireframe mode, thermal wave enabled, isolated focus enabled, water animation disabled, WebGL available.
- Console errors: 0.
- Page errors: 0.
- Horizontal overflow: 0 px desktop, mobile, and reduced-motion desktop.
- Tested interactions: primary CTA, manual assemble/explode toggle, eight-stage scroll sequence, component highlighting, mobile menu, continuation CTA and toast, keyboard focus order.
- Verified events: `prototype_view`, `three_scene_ready`, `three_interacted`, `three_model_toggled`, `transition_started`, `component_focused`, `component_selected`, `transition_completed`, and `cta_clicked`.
- Production build: passed.
- React review: hook order is stable, animation and event subscriptions clean up, active-stage state updates only on index changes, callbacks used by the WebGL effect are stable, and list keys/native controls are semantic.

## Residual production considerations

- The Three.js bundle is about 778 kB minified before gzip. A production experiment should lazy-load the scene or split the Three.js chunk.
- The model is an explanatory system visualization, not an approval-ready construction detail. Final thicknesses, fastening distances, and approved layer combinations should come from the selected system specification.
- Real-device frame pacing should still be checked on low-end Android devices and integrated-GPU laptops before production rollout.

final result: passed
