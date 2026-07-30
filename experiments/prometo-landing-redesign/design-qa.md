# Design QA: Hero-Verlegung

- Source visual truth: `/Users/tobiasburandt/Desktop/Verlegung.svg`
- Implementation asset: `assets/hero-verlegung.svg`
- Focused implementation screenshot: `/tmp/hero-verlegung-horizontal.png`
- Combined comparison: `/tmp/verlegung-horizontal-comparison.png`
- Source pixels: 579 × 764, normalized to 764 × 579 by 90° rotation
- Implementation pixels: 764 × 579 at 1×
- State: horizontal SVG asset; animated water-flow highlights plus low-opacity hero breathing

## Full-view comparison

Browser-rendered page capture unavailable. In-app Browser blocks inspection and reload of the current `file://` page under its URL security policy.

## Focused region comparison

Source was rotated 90° counter-clockwise and compared with implementation at identical dimensions. Both supplied path geometries remain unchanged. Implementation adds stroke colors and animated highlights:

- Red path: Vorlauf to shared inner midpoint
- Blue path: Rücklauf from shared inner midpoint
- Shared turn coordinate: `257.8,532.3`
- Water-flow dots follow both original path directions continuously

## Required fidelity surfaces

- Fonts and typography: not applicable to decorative SVG asset.
- Spacing and layout rhythm: source path geometry preserved exactly and rotated into horizontal 764.3 × 579.3 viewBox.
- Colors and visual tokens: red/blue Prometo supply/return colors applied; page opacity reduced to 8–14%.
- Image quality and asset fidelity: original vector path data retained; no raster substitution.
- Copy and content: not applicable.

## Findings

- No P0/P1/P2 mismatch in focused SVG geometry.
- Page-level composition remains unverified until browser refresh is performed by user.

## Comparison history

1. Previous handmade hero circuit differed from supplied technical pattern.
2. Replaced it with external SVG asset using exact two source paths.
3. Rotated complete geometry 90° without changing path data.
4. Added animated flow highlights; focused comparison confirms geometry and midpoint continuity.

final result: blocked
