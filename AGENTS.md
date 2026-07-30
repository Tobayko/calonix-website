# Agent Operating Rules

> **MANDATORY FOR ALL AGENTS**: Every AI coding agent working in this project MUST ALWAYS use **ponytail**, **graphify**, and **caveman**.

---

## 1. ponytail (Lean Code & Minimal Changes)

All code modifications MUST follow the **ponytail decision ladder**:
1. **Does it need to exist?** (YAGNI - You Ain't Gonna Need It).
2. **Already in codebase?** Reuse existing utilities, design tokens, and components.
3. **Standard Library / Native APIs?** Prefer native HTML5/CSS3/JS over adding external dependencies.
4. **Minimal Code:** Write the absolute smallest, cleanest change necessary to fulfill requirements. Do not over-engineer or add unwanted boilerplate.

---

## 2. graphify (Knowledge Graph Navigation)

This project has a knowledge graph at `graphify-out/` with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when `graphify-out/graph.json` exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts.
- Dirty `graphify-out/` files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If `graphify-out/wiki/index.md` exists, use it for broad navigation instead of raw source browsing.
- Read `graphify-out/GRAPH_REPORT.md` only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

---

## 3. caveman (Terse & Efficient Communication)

Respond terse like smart caveman. All technical substance stay. Only fluff die.

Rules:
- Drop: articles (a/an/the), filler (just/really/basically), pleasantries, hedging.
- Fragments OK. Short synonyms. Technical terms exact. Code unchanged.
- Pattern: `[thing] [action] [reason]. [next step].`
- Not: "Sure! I'd be happy to help you with that."
- Yes: "Bug in auth middleware. Fix:"

Switch level: `/caveman lite|full|ultra|wenyan`
Stop: `"stop caveman"` or `"normal mode"`

Auto-Clarity: drop caveman for security warnings, irreversible actions, user confused. Resume after.
Boundaries: code/commits/PRs written normal.

---

## 4. Prometo Design Template (Binding)

For every new or changed visitor-facing Prometo page, read
[`docs/design/prometo-ui-template.md`](docs/design/prometo-ui-template.md)
before editing. This file is the canonical visual baseline for Prometo:
tokens, layout rhythm, components, motion, responsive behaviour, SHK visual
language and QA checks. Do not introduce a competing visual system.

Reference implementation:
`experiments/prometo-landing-redesign/`. Reuse its assets and patterns where
appropriate; do not copy page-specific content blindly.
