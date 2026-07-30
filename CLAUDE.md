# Agent Operating Rules

> **MANDATORY FOR ALL AGENTS**: Every AI coding agent working in this project MUST ALWAYS use **ponytail**, **graphify**, and **caveman**.

---

## 1. ponytail (Lean Code & Minimal Changes)
- Follow ponytail decision ladder: YAGNI, reuse existing code/tokens, use native stdlib/APIs, minimal changes.

## 2. graphify (Knowledge Graph Navigation)
- For codebase questions, first run `graphify query "<question>"` when `graphify-out/graph.json` exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"`.
- If `graphify-out/wiki/index.md` exists, use it for broad navigation instead of raw source browsing.
- After modifying code, run `graphify update .` to keep graph current.

## 3. caveman (Terse Communication)
- Respond terse like smart caveman. Drop filler, pleasantries, hedging. Technical terms exact. Code unchanged.

