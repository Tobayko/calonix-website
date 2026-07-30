# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Prototype-specific direction

- This experiment must remain isolated from the existing Prometo website and must not edit production routes, components, or styles.
- The current website is the visual source of truth: dark graphite surfaces, cyan highlights, Space Grotesk headings, Manrope body copy, restrained glass panels, and the existing Prometo logo assets.
- The hero transition must use a real WebGL/Three.js 3D scene, not a CSS-only 3D approximation.
- Scope is intentionally limited to roughly half a landing page: one scroll-driven hero story and one continuation section.
