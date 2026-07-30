# Prometo UI Template

Status: binding baseline for all visitor-facing Prometo pages.  
Reference implementation: `experiments/prometo-landing-redesign/`

## Use it

Before creating or redesigning a Prometo page:

1. Read this file and inspect the reference implementation.
2. Keep the same visual language; adapt content and product proof to the page.
3. Reuse existing assets and CSS patterns before creating new ones.
4. Check desktop, 1040px, 760px and reduced-motion states before handoff.

Do not copy the landing-page copy, section order or page-specific interaction
verbatim. This is a design system and composition template, not a content
template.

## Visual foundation

| Role | Rule |
| --- | --- |
| Background | Alternate near-black technical surfaces (`--ink: #071111`) and warm paper surfaces (`--paper: #f2f3ee`). |
| Accent | Cyan (`--cyan: #45dee7`) is active state, primary CTA and important data. Keep it scarce. |
| Typography | `Space Grotesk` for navigation, labels, buttons and headings. `Manrope` for body copy. |
| Layout | Use one centered shell: `min(calc(100% - 2.5rem), 1240px)`; on mobile use 1.5rem gutters. |
| Shape | Technical, restrained corners: 10px panels; 4px buttons; circular status controls only when function demands it. |
| Lines | Fine low-contrast dividers and blueprint grid; no heavy card shadows or glassmorphism. |
| Contrast | Light text on dark; dark text on paper. Every interactive element needs visible `:focus-visible`. |

## Page composition

Use this order when it fits page goal:

1. Fixed transparent/dark header with logo, few links and one small CTA.
2. Hero with eyebrow, clear outcome-led H1, one primary CTA, optional outline CTA, concrete product proof.
3. Alternating dark/light sections that explain workflow, product evidence and trust.
4. One focused final CTA on dark blueprint surface.
5. Quiet footer.

Headlines use tight tracking, balanced wrapping and no more than 12ch in hero.
Body copy remains calm and factual. Show actual product screens whenever a
claim concerns a product step.

## Components

### Header and navigation

- Header height: 78px desktop, 68px mobile.
- Logo is white/inverted on dark background; compact `Beta` pill remains cyan.
- At 1040px, switch to 44px mobile menu control. Preserve scroll lock and
  accessible expanded state.

### Buttons

- Primary: cyan fill, dark ink, minimum 52px height; one primary CTA per CTA
  group.
- Secondary: transparent outline, white text; never visually compete with
  primary CTA.
- Use icon arrow inside a small circular affordance only for forward actions.
- Hover moves at most 2px. Keyboard focus stays clear and high contrast.

### Sections and cards

- Section padding: `clamp(5.5rem, 9vw, 9rem)`.
- Use eyebrow label with cyan 22px line before section headings.
- Prefer borders, restrained fills and data-like structure over generic cards.
- Screenshots use `object-fit: contain`, correct aspect ratio and an intentional
  frame. Never stretch or crop product evidence into a misleading state.

## Motion

- Motion explains state, flow or hierarchy; it must not be decorative noise.
- Reveal uses opacity plus transform, triggered once with `IntersectionObserver`.
- Ambient blueprint grid, thermal field and data packets stay subtle and slow.
- Animate only `opacity` and `transform` for continuous motion where possible.
- Respect `prefers-reduced-motion`; every visual must retain a complete static
  end state.
- Do not add more than one major looping visual per viewport.

## SHK visual language

For floor-heating visuals, use the verified source asset:

`experiments/prometo-landing-redesign/assets/hero-verlegung.svg`

- It depicts one closed pipe, split at its centre: red is Vorlauf, blue is
  Rücklauf.
- Reuse this asset for decorative horizontal circuits in Hero and final CTA.
- Preserve rounded paths, shared centre turn and animated water-flow.
- Do not show two independent parallel pipes, sharp meander corners or
  technically decorative loops that imply incorrect installation.
- Inside room plans, use the existing horizontal/vertical circuit symbols and
  match circuit orientation to room shape.

## Responsive and accessibility checks

- At `<= 1040px`: reduce navigation and stack large two-column sections.
- At `<= 760px`: 1.5rem gutters, single-column content, full-width buttons,
  mobile-specific visual composition rather than squeezed desktop art.
- At `<= 480px`: protect labels, controls and product screenshots from overlap.
- Decorative graphics use empty `alt` plus `aria-hidden="true"`.
- Images that prove product functionality require meaningful alt text and
  intrinsic width/height.
- Test keyboard focus, mobile menu state, text contrast and reduced motion.

## Source files

| Purpose | Source |
| --- | --- |
| Full reference page | `experiments/prometo-landing-redesign/index.html` |
| Tokens, layout, component and responsive CSS | `experiments/prometo-landing-redesign/styles.css` |
| Reveal, navigation and product interactions | `experiments/prometo-landing-redesign/script.js` |
| Verified floor-heating pattern | `experiments/prometo-landing-redesign/assets/hero-verlegung.svg` |
| Visual QA record | `experiments/prometo-landing-redesign/design-qa.md` |

## Completion checklist

- Page reads as Prometo before logo is visible.
- Exactly one strongest CTA per section.
- Product claims have a relevant proof surface.
- No distorted screenshots, arbitrary colour additions or mismatched radii.
- Motion is purposeful, subtle and reduced-motion safe.
- Desktop and mobile composition both feel designed, not scaled.
