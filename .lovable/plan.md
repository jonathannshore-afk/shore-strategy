

## Home page reframe — Option 2 (no length increase)

Restructure `src/pages/Index.tsx` to follow the executive narrative arc (pain → proof → fit → approach → action) while keeping the same 6-section count and roughly the same scroll length. All changes confined to one file.

### Final section order

```text
1. Hero                      [keep, minor tighten]
2. The Problem               [REPLACES pull-quote]
3. Career Highlights         [REPLACES generic stats]
4. Who I Work With           [keep]
5. Diagnose / Design / Operationalize  [REPLACES "How I Work" engagement models]
6. Closing CTA               [keep]
```

### Section-by-section changes

**1. Hero (tighten)**
- Keep layout, headshot, logos, headline, subhead, both CTAs.
- Remove the "Currently accepting engagements with new clients" micro-line.

**2. The Problem (new — replaces the anonymous pull-quote)**
- Background: navy (continues from hero/stats band visually, but this replaces the pull-quote slot directly after stats… see ordering note below).
- Eyebrow: "The Reality" · Heading: "Most Partner Ecosystems Underperform"
- Three cards (icon + title + 1 line), gold icons on subtle navy/transparent cards:
  - **Pipeline that never materializes** — Programs launched, partners signed, but partner-sourced revenue stays stuck under 10%.
  - **Strategy without operating muscle** — A deck exists; the cadence, deal reg, and enablement to execute it don't.
  - **Misaligned with the core business** — The partner team runs parallel to sales, product, and marketing — not integrated with them.
- Icons (lucide): `TrendingDown`, `Wrench`, `Unplug` (or similar).

**3. Career Highlights (replaces current 4 generic stats)**
- Same 4-up grid layout, same navy band, gold numerals — just swap the numbers for the heavier ones from `StatsMarquee`:
  - **$1.6B** ARR Ecosystem Managed
  - **$800M+** Annual Bookings Influenced
  - **19%** YoY Channel Revenue Growth
  - **2K+** Partners Across Fortune 500 Ecosystems
- Drop the existing 15+ / 3 / 20%+ / 6+ stats.

**Ordering note:** Sections 2 and 3 are sequenced Problem → Proof (pain first, then "and here's why I can fix it"). The existing stats band sits immediately after the hero today; in the new flow, Problem comes first (right after hero), then Career Highlights, so the reader sees the pain reflected before the credentials land.

**4. Who I Work With (keep as-is)**
- No copy or layout changes.

**5. How I'd Approach It (replaces the 3 engagement-model cards)**
- Background: cream (matches current "How I Work" section).
- Eyebrow: "Engagement Approach" · Heading: "Diagnose. Design. Operationalize."
- Three cards, same visual style as current engagement cards (icon tile + title + body + link):
  - **Diagnose** — Ecosystem assessment: partner mix, program health, GTM alignment, operating model gaps. Strategy without diagnosis is guesswork.
  - **Design** — Program architecture, route-to-market plan, operating model, KPI framework. Built for your team to actually run.
  - **Operationalize** — Stand up cadences, enablement, deal reg, analytics — handed off as a working system, not a deck.
- Icons (lucide): `Search`, `LayoutGrid` (or `Compass`), `Settings2`.
- Single link below the grid: "See engagement models →" pointing to `/services` (so Fractional / Project / Advisory live exclusively there).

**6. Closing CTA (keep as-is)**
- "Let's Scope Your Engagement" section unchanged.

### Removals

- Anonymous pull-quote section ("Within 6 months, we went from zero partner-sourced pipeline to 30%…") — deleted entirely.
- Current `stats` array (15+ / 3 / 20%+ / 6+) — replaced.
- Current `engagements` array (Fractional / Project-Based / Advisory) — replaced with the three-phase approach. Imports for `Users2`, `Clock`, `Lightbulb` removed; `Search`, `Settings2`, plus a third icon added.
- "Currently accepting engagements" hero micro-line — deleted.

### Files modified

- `src/pages/Index.tsx` — only file touched. No new components, no new assets, no routing changes. Reuses existing card/grid/section patterns already in the file.

### Result

Same page length. Same visual rhythm (navy → navy → background → cream → background). New narrative: pedigree → pain → proof → fit → approach → action. Engagement models live exclusively on `/services` where they have richer treatment.

