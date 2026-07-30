# KPI plan — 3D Biofaser-Renovierungsaufbau

## Initiative summary

The isolated prototype tests whether a clear, color-coded opaque wireframe of an eight-part floor construction improves understanding of the renovation system and carries visitors toward the Prometo workflow without hurting conversion intent or experience quality.

The current implementation records events locally only. A production experiment should map the same contract to the approved analytics platform and compare it with the unchanged current landing page.

## Primary KPIs

### 1. Component-sequence completion rate

- Definition: unique visitors reaching the eighth component stage.
- Calculation: unique users with `transition_completed` / unique users with `prototype_view`.
- Decision use: measures whether the assembled-to-exploded narrative remains understandable through the full top-to-bottom sequence.
- Guardrail interpretation: completion alone is not success if the continuation CTA or performance worsens.

### 2. Continuation CTA intent rate

- Definition: unique visitors activating the continuation CTA after the 3D sequence.
- Calculation: unique users with `cta_clicked` where `cta = beta_test` / unique users with `prototype_view`.
- Decision use: tests whether technical understanding translates into meaningful product interest.
- Limitation: the local test sends no form data, so this is an intent proxy.

## Driver metrics

- Transition start rate: users with `transition_started` / users with `prototype_view`.
- Per-component reach: unique users with `component_focused`, grouped by `component` and `position`.
- Component exploration rate: users with `component_selected` / users reaching any component stage.
- 3D engagement rate: users with `three_interacted` or `three_model_toggled` / users with `prototype_view`.
- Time to first 3D interaction: median `timeToInteractionMs` from `three_interacted`.
- Step drop-off: difference in unique reach between each adjacent `component_focused` position.

## Provisional experiment thresholds

No production baseline was available, so these are decision thresholds rather than forecasts.

- Component-sequence completion: at least 10% relative uplift versus the control page’s comparable first-to-next-section progression.
- Continuation CTA intent: no worse than -5% relative to control; prefer at least +8% relative uplift.
- Reach from pipe to Biofaser stage: at least 75% of users who reach the pipe step should also reach the Biofaser step.
- 3D engagement: 20–35% is a useful diagnostic range; higher is not automatically better if users do not continue.

Recommended ship rule: sequence completion improves, continuation intent is non-inferior or better, and both guardrails pass.

## Guardrails

- Performance: p75 LCP ≤ 2.5 s, p75 INP ≤ 200 ms, and at least 95% of measured 3D sessions maintain 45 FPS or more on the agreed device set.
- Abandonment: exits after `transition_started` but before `transition_completed` must not increase by more than 5% relative to control.
- Accessibility: reduced-motion usage must retain the same continuation CTA availability and must not show higher abandonment than the standard experience by more than 5%.

## Event contract

| Event | Trigger | Main use |
| --- | --- | --- |
| `prototype_view` | First rendered visit | KPI denominator |
| `three_scene_ready` | First WebGL frame with layer count, pipe size, grid and reduced-motion state | Rendering guardrail |
| `transition_started` | Story progress passes 10% | Funnel start |
| `component_focused` | Scroll selects one of eight components | Per-step reach and drop-off |
| `component_selected` | Visitor chooses a component in the legend | Active exploration |
| `transition_completed` | Story progress passes 95% | Primary completion KPI |
| `three_interacted` | First meaningful pointer movement over the scene | Engagement and discovery time |
| `three_model_toggled` | Manual assemble/explode control | Interaction diagnostic |
| `cta_clicked` | Hero or continuation CTA activation | Intent KPI |

Events are stored in `window.dataLayer` and `window.__prometoPrototypeEvents`; no network request is made.

## Assumptions and open questions

- The current landing page remains the control and receives equivalent traffic quality.
- The production CTA represents the same user intent as the prototype CTA.
- Confirm current section progression, CTA rate, device mix, Core Web Vitals, and low-end GPU distribution before setting final absolute targets.
