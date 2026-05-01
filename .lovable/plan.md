# Simplify the Services Page

The page currently reads dense: 6 capability cards with 2-line descriptions, 3 flip cards each carrying ~14 bullets across front + back, and a 6-question FAQ. Visitors meeting you at a networking event will skim, not read. The goal is to cut word count by roughly half while preserving the structure and information architecture.

## What changes

### 1. Hero — leave as-is
Already tight (one line). No change.

### 2. "What I Do" capabilities grid — trim descriptions
Keep all 6 capabilities (the grid is scannable), but shorten each description to a single, punchy line. Examples:

- **Partner Strategy** — "Ecosystem vision and the plan to execute it."
- **Route-to-Market Build** — "The right partner archetypes, activated for pipeline."
- **Partner Program Design** — "Program architecture, incentives, and commercial frameworks."
- **Partner Org Transformation** — "Roles, structure, and operating model built for scale."
- **Rhythm of the Business** — "Operating cadences, QBRs, and forecasting discipline."
- **Annual Planning** — "Comp, territory, quota, and partner strategy aligned to growth goals."

Also remove the section subhead paragraph ("The specific services I deliver…") — the H2 plus one-liners speak for themselves.

### 3. Engagement Models flip cards — major simplification
This is the heaviest section. Two moves:

**a. Cut the duplicated intro.** Today there are two paragraphs under the H2 saying nearly the same thing. Keep only:
> "Choose the model that fits where you are — fractional, project-based, or advisory."

**b. Slim each flip card.** Front side currently has: title, timeline, 2-sentence description, "best for" line in caps, and 3 commercial bullets. Back side then repeats the title and adds 3 more bulleted lists (audience, outcomes, fee structure) — 10–12 bullets total. That's where the wall-of-text feeling comes from.

Proposed front (compact):
- Title + timeline
- One-sentence description (cut to ~20 words)
- 3 short bullets: "Best for", "Commitment", "Structure"

Proposed back (focused):
- "Who it's for" — 3 bullets
- "What you get" — 3–4 bullets (merging the old "outcomes" list, dropping "fee structure" since it's already on the front)

Net effect: roughly 40% fewer words per card, same information shape, much easier to flip through.

Also reduce the card row height from `auto-rows-[560px]` to around `auto-rows-[460px]` to match the lighter content.

### 4. FAQ — cut from 6 questions to 4
Drop the two that overlap most with content already on the page:
- "What does a fractional engagement actually look like week-to-week?" (covered by the flip card back)
- "What do you mean by 'fit' on the engagement cards?" (covered once cards are simplified)

Keep: how to choose, typical length, can engagements evolve, industries served. Tighten each answer to 2–3 sentences max.

### 5. Section spacing
With less text, tighten vertical padding on the capabilities and engagement sections from `py-12 lg:py-16` to `py-10 lg:py-14` so the page doesn't feel sparse.

## Out of scope
- No changes to colors, fonts, icons, layout grid, or routing.
- No changes to the global footer CTA or DiscoveryCallReassurance component.
- Capability count stays at 6 and engagement models stay at 3 — only copy and card density change.

## Technical notes
- All edits are confined to `src/pages/Services.tsx`: the `capabilities`, `engagementModels`, and `faqs` arrays plus the JSX paragraphs and the `auto-rows-[560px]` utility.
- `FlipCard` component itself doesn't need changes — it already handles arbitrary children.

## Expected outcome
Word count on the page drops roughly 45–50%. The structure (Menu → Engagement → FAQ) stays identical, so SEO and internal links are unaffected. Skim-readers get the gist in one scroll; anyone wanting depth still has the flip-card backs and FAQ.
