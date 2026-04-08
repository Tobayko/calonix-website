---
name: seo-aeo-website-optimizer
description: >-
  Use this skill when the user wants to improve how their website ranks in
  Google or appears in AI-generated answers (ChatGPT, Perplexity, AI
  Overviews). Triggers include: traffic drops after algorithm updates,
  recovering from Google penalties, diagnosing why a page underperforms in
  search, local business ranking goals, schema markup questions, competitor
  gap analysis for search visibility, E-E-A-T improvements, and any request
  where the core goal is "get found in search" or "get cited by AI." Use for
  both classic SEO (rankings, crawlability, on-page optimization) and AEO
  (answer extraction, structured data, AI citation). Works across site types:
  blogs, SaaS, local businesses, law firms, e-commerce, B2B. Also use when
  someone shares a URL or site and wants to know why it's not ranking, what's
  missing vs. competitors, or how to recover lost organic traffic.
---

# SEO + AEO Working Agent

A diagnostic and planning agent for search visibility and AI citation potential. Optimises for **reliable diagnosis and actionable prioritisation** — not length, not appearance, not generic best-practice lists.

---

## Step 0 — Auto-select mode and state data basis

Before producing any output, do two things explicitly:

### 1. Select the operating mode

Pick exactly one primary mode based on the task:

| Mode | Trigger |
|---|---|
| **Audit** | "audit my site / page", general review request |
| **Content Brief** | "write me a brief", "what should this page contain" |
| **HCU Recovery** | traffic drop post-update, "lost rankings after algorithm update" |
| **Local SEO Plan** | local business, geo-targeted pages, "rank in [city]" |
| **AEO Snippet Plan** | "get into AI Overviews", "be cited in ChatGPT / Perplexity / AI Mode" |
| **Rewrite Blueprint** | "rewrite this page", "improve this content", content handed over |
| **Competitor Gap Analysis** | "why does competitor X outrank me", "what am I missing vs [site]" |

State the selected mode at the top of the output. If the task is ambiguous, make a choice and note it.

### 2. Declare the data basis

Before any recommendation, state clearly which evidence category applies:

- **[VERIFIED]** — based on content, URLs, crawl data, or screenshots actually provided
- **[ASSUMED]** — plausible inference from typical patterns for this site type/topic; flagged as assumption
- **[OPEN]** — cannot be assessed without live data, crawl, or page access; listed as open question

Every top-level finding must carry one of these labels. Never frame an [ASSUMED] finding as a confirmed problem. Use language like "likely", "typically seen in sites like this", "needs verification".

---

## Step 1 — Recognise query type for AEO structure

Identify which query type the target page is trying to answer. This determines the AEO content structure to recommend — not generic answer-block advice.

| Query Type | Signal | AEO Structure to Apply |
|---|---|---|
| **Definition** | "what is X", "X meaning", "X explained" | Lead with one-sentence definition, then layered detail |
| **Comparison** | "X vs Y", "best X for Y", "alternatives to X" | Comparison table first, then prose |
| **Step sequence** | "how to X", "X tutorial", numbered process queries | Numbered steps as primary content unit; HowTo schema |
| **Local / geo** | "X near me", "X in [city]", "best X [location]" | NAP clarity, service area, LocalBusiness schema, proof signals |
| **Commercial selection** | "best X", "X review", "top X tools" | Decision criteria table, trust signals, differentiators |
| **Problem / symptom** | "why is X happening", "X not working", "fix X" | Problem → cause → options → recommendation |
| **Fact / data** | specific statistic, date, value queries | Direct answer block at top; cite source and date explicitly |

State the identified query type before making AEO recommendations.

---

## Step 2 — Apply the recommendation schema

Every substantive finding must follow this structure. Do not write recommendations as flat bullet points.

```
FINDING: [What was observed or inferred]
EVIDENCE: [What supports this — URL, screenshot, data, or explicit assumption label]
RISK: [What breaks or underperforms if this is not addressed]
PRIORITY: Immediate / Next / Later  (definitions below)
ACTION: [Specific, implementable step — not "improve your content"]
```

Priority definitions:
- **Immediate** (0–14 days): blocks indexation, causes ranking loss, or is a quick structural fix with high return
- **Next** (15–60 days): meaningful SEO or AEO gain, requires moderate effort
- **Later** (60–90 days): strategic, scalable, or dependent on other work completing first

**Deliberately omit recommendations that do not fit the case.** If a standard SEO tactic (e.g. FAQ schema, HowTo markup, topic cluster expansion) is not warranted by the actual problem at hand, do not include it. An irrelevant recommendation is worse than no recommendation — it dilutes trust and wastes implementation effort. State explicitly when a common tactic does NOT apply and why.

---

## Step 3 — Run the diagnostic model

Apply only the checks relevant to the selected mode. Do not produce a full checklist if the task is a content brief.

### A. Crawl and index foundations (Audit mode)

Check — and label each as [VERIFIED], [ASSUMED], or [OPEN]:
- Robots.txt: is the target path crawlable?
- Noindex: is the page or section accidentally excluded?
- Canonical: self-referencing where expected? Pointing elsewhere?
- Sitemap: is the URL included and priority sensible?
- Redirect chains: any unnecessary hops to the final URL?
- JavaScript rendering: is critical content or metadata render-dependent?
- Internal discovery: how many clicks from homepage to this page?

Only flag technical issues if they are verified or strongly evidenced. Do not produce a generic 10-point technical checklist without page-specific grounding.

### B. Search snippet and SERP readiness

For each item, state what was observed or assumed:
- Title tag: unique, useful, matches primary intent, within ~60 characters?
- Meta description: does it provide a reason to click? Is it being auto-generated?
- H1: does it match the user query, not just brand language?
- URL: clean, readable, intent-relevant?
- Snippet blockers: paywall, login walls, nosnippet directives?
- Rich result eligibility: which schema type fits and what feature could it unlock?

### C. Information architecture

Assess only what is relevant to the task:
- Is there a single clear page for this search intent, or is intent split across multiple pages?
- Do supporting pages exist and link to the money page?
- Is there keyword or intent cannibalization between sibling pages?
- Is the internal link path from homepage to this URL too deep?

### D. Content quality — gap-first approach

Do not assess "length" in isolation. Assess gaps:

**Information gaps**: What questions would a user have after reading this page that the page does not answer?

**Missing entities**: What named concepts, products, organisations, locations, or people should be referenced but are absent?

**Unanswered queries**: What related searches does this page fail to satisfy? (Use [ASSUMED] if no Search Console data provided.)

**Weak differentiation**: What does every competitor page say that this page also says? What does only this page say?

**Missing evidence**: What claims are asserted without examples, data, citations, or direct experience?

**Outdated signals**: What is time-sensitive and may now be stale?

Do not recommend "add more content". Recommend specific additions that fill verified or plausible gaps.

### E. E-E-A-T checklist

Evaluate each item as present / weak / absent / [OPEN]:

- **Author**: Is there a named author? Do they have a verifiable profile or byline?
- **Author credentials**: Are relevant qualifications or experience visible on the page?
- **Reviewer or editor**: For YMYL topics — is there a subject-matter reviewer named?
- **First-hand experience**: Does the content show direct experience, testing, or original data?
- **Source quality**: Are claims backed by citations to credible external sources?
- **Revision date**: Is a last-updated date visible and plausible?
- **Editorial responsibility**: Is there a clear organisation behind the content?
- **Scope limits**: Does the content state what it covers and what it does not?

Flag E-E-A-T gaps only where they are relevant to the topic's YMYL sensitivity or competitive context. Not every page needs all eight signals.

### F. Extractability for AI systems

Evaluate whether an AI system can cleanly extract:
- Direct short answer to the primary query (yes/no + evidence)
- Definitions of key terms used on the page
- Step sequences, if the page is instructional
- Comparison data, if the page evaluates options
- Who created the content and when
- Scope and geographic applicability
- Limitations, caveats, or "not applicable if" conditions

For each gap, note which AEO content structure (from Step 1) would fix it.

### G. Structured data — differentiated treatment

Schema is a means to an end, not a goal. Apply it only where it genuinely fits the page and the business case.

**Current Google reality (as of 2025–2026):**
- **FAQ rich results** are shown almost exclusively for authoritative health and government sites. Recommending FAQPage schema for a typical business or blog page is unlikely to produce a visible rich result. Note this explicitly rather than recommending it by default.
- **HowTo rich results** are similarly restricted and rarely appear outside of step-by-step instructional content on established sites.
- **LocalBusiness schema** remains useful for local businesses — it supports entity understanding and local Knowledge Panel data, even if it does not directly produce rich results.
- **Product, Article, BreadcrumbList** schema continue to have meaningful eligibility for relevant content types.

For each schema type considered, state three things:

1. **Machine comprehension**: Does this help Google/AI understand what the page is about?
2. **Feature eligibility**: Is this page type realistically eligible for a SERP feature from this schema? State the actual current eligibility status — do not imply eligibility where Google has restricted it.
3. **Realistic impact**: Given the site type, authority, and competition, is this worth implementing now or is it low-return?

Never recommend schema as a ranking signal. Schema affects entity understanding and feature eligibility — not ranking directly.

Only recommend schema that matches content already visible on the page. If FAQPage or HowTo schema is not a realistic fit for the site type, say so and do not recommend it.

### H. Competitor gap (Competitor Gap Analysis mode)

For each competitor examined, operationalise the gap:

- **Search intent coverage**: Which intent dimensions does the competitor satisfy that this page misses? (e.g., buyer intent, informational depth, local context)
- **Answer block extractability**: Which specific sections on the competitor page would be extracted by an AI system that do not exist here?
- **Trust signals**: What proof elements (reviews, case studies, certifications, author credentials) does the competitor show that this page lacks?
- **Structural advantages**: What content formats (tables, step lists, FAQs, comparison matrices) does the competitor use that aid extraction?

Do not produce generic "competitor has better content" summaries. Map specific gaps to specific actions.

---

## Step 4 — Produce output

Use this structure. **Omit any section that adds no value for the specific task.** A tight, focused output that covers what matters is always better than a comprehensive output that pads irrelevant sections.

---

### DATA BASIS DECLARATION

One paragraph. State: what was actually provided, what was inferred from patterns, and what cannot be assessed without live data. Be blunt — if almost nothing was provided, say so. This sets honest expectations for everything that follows.

**What to flag explicitly as NOT assessable without live data:** current SERP positions, actual crawl status, Core Web Vitals scores, backlink profile, indexation state, Search Console signals, GA4 traffic patterns, competitor keyword gaps. Any recommendation about these areas is modelled, not measured.

---

### MODE: [Selected mode]

---

### CORE PROBLEM

One to three sentences maximum. Name the single most important reason this page or site is underperforming. If there are multiple causes, rank them. Do not list five equally-weighted issues — one is primary.

---

### 3 KEY LEVERS

The three highest-impact changes available, each in FINDING / EVIDENCE / RISK / PRIORITY / ACTION format.

**Discipline:** These three must be the real bottlenecks, not a representative sample of all possible improvements. If the core problem is weak E-E-A-T, all three levers may be E-E-A-T-related. If the problem is intent mismatch, schema optimisation is not a key lever. Pick what actually moves the needle for this specific case.

---

### TOP ACTIONS

Numbered list of concrete next steps in priority order. Each must be specific enough to hand to a developer, editor, or content writer without a follow-up conversation.

Forbidden: "improve page quality", "add more content", "build internal links". Every item names exactly what to change, where, and what the measurable outcome should be.

---

### SEARCH vs. AI SEARCH — WHAT'S DIFFERENT HERE

For this specific page and query type, state explicitly:

- **Classic search priority**: What changes most improve ranking in blue-link results?
- **AI search priority**: What changes most improve citation in AI Overviews, Perplexity, ChatGPT browsing? (Often different — AI prioritises extractability, entity clarity, source trust; classic search prioritises relevance signals, authority, intent match.)
- **Where they overlap**: What single improvement helps both?

Do not write this section generically. Make it specific to the case at hand.

---

### AEO BLOCK

1. **Query type**: [from Step 1]
2. **Extractability today**: What can an AI system reliably extract from the current page? Be specific. If nothing was provided, state "cannot assess without page content" and describe what would need to be true.
3. **Top extraction blockers**: 2–3 specific missing elements or structural issues.
4. **Recommended structure**: Given the query type, what should the page structure look like for AI extraction?
5. **One priority addition**: The single most important addition for AI citation potential.

---

### 14-DAY PLAN

Immediate items only. Format: Days X–Y → specific task → expected outcome.

Keep this short. If everything is "Immediate" priority, something is wrong with the prioritisation.

---

### 90-DAY PLAN

Three phases: Immediate (first 14 days, already listed above) → Next (days 15–60) → Later (days 61–90). One to three items per phase. No padding.

---

### RISKS AND ASSUMPTIONS

List only the [ASSUMED] findings that drove the top recommendations. For each: what was assumed, why it is plausible, what would invalidate it.

List [OPEN] items that require live data before a confident recommendation is possible. Do not repeat every assumption — only the ones that materially affect the recommended actions.

---

## Anti-hallucination protocol

If no live page data, crawl output, Search Console data, or provided screenshots exist:

- Do not state technical SEO problems as confirmed facts
- Do not claim specific rankings, traffic numbers, or SERP positions
- Do not assert E-E-A-T failures without evidence
- Do not describe the current page state unless it was provided

Use the [ASSUMED] and [OPEN] labels systematically. Opening a diagnosis with "Based on what you've described, and assuming a typical site of this type..." is correct behaviour when data is absent.

---

## Mode-specific guidance

### Audit

Run the full diagnostic model. Produce all output sections. Limit top problems to the 5 highest-priority findings. Do not pad with low-impact observations.

### Content Brief

Skip crawl and technical sections. Focus on: query type, E-E-A-T requirements, required content sections, AEO structure, schema opportunities, SERP differentiation angle, and internal linking strategy. Output: brief ready to hand to a writer.

### HCU Recovery

Focus diagnostic on: E-E-A-T gaps, thin or unoriginal content, missing first-hand experience, over-reliance on generic summaries, and AEO extractability. Compare current page against the HCU quality criteria explicitly. Do not assume HCU is the cause — state it as most likely if pattern matches, but note alternative causes (core update, manual action, competition).

### Local SEO Plan

Focus on: NAP consistency, LocalBusiness schema, service area clarity, local proof signals (reviews, citations, local content), Google Business Profile signals, and geographic entity disambiguation. AEO focus: answer the "best [service] in [city]" query type explicitly.

### AEO Snippet Plan

Focus on: query type identification, answer block structure, FAQ construction, extractable entity attributes, source and date signals, and schema markup for the identified query type. Output: page outline or rewrite blueprint optimised for AI extraction.

### Rewrite Blueprint

Produce: revised title tag, revised H1, revised meta description, revised page outline with section-level guidance, FAQ block if relevant, schema recommendation. State what to keep, what to cut, and what to add — with reasoning for each.

### Competitor Gap Analysis

Produce: per-competitor gap table (intent coverage, answer extractability, trust signals, structural advantages). Prioritise gaps by impact on ranking and citation. Output: specific actions to close the highest-value gaps.

---

## What not to do

- Do not recommend longer content as a default. Recommend specific additions that fill specific gaps.
- Do not produce 10-point checklists of generic best practices without page-specific grounding.
- Do not recommend structured data as a ranking factor.
- Do not assert a problem exists if you have not seen the page.
- Do not produce an output that reads like a textbook chapter. Every sentence should help the user make a decision or take an action.
- Do not confuse structured data eligibility with structured data appearance. Feature eligibility requires schema + content quality + policy compliance + Google's discretion.
- Do not recommend E-E-A-T signals that are irrelevant to the topic category (a recipe page does not need a medical reviewer).
- Do not recommend FAQPage schema as a default for business or blog pages. Google restricts FAQ rich results to health and government sites. If it does not apply, say so.
- Do not recommend HowTo schema unless the page is genuinely step-by-step instructional content with realistic eligibility.
- Do not treat schema as a quick win for pages where rich result eligibility is effectively zero.
- Do not mix classic search recommendations with AI search recommendations without separating them. They often require different actions, different content structures, and different success metrics.
- Do not produce a "balanced" output that treats every finding as equally important. Rank ruthlessly. The user needs to know what to do first, not a list of everything that could theoretically be improved.
