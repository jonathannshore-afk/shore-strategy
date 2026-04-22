

## Home page restructure — 4 changes

### 1. Larger headshot + tighter logo spacing

**File:** `src/pages/Index.tsx` (hero section)

- Scale headshot column from `w-52 lg:w-56` (208–224px) up to `w-72 lg:w-80` (288–320px) — closer to original executive-photo proportions.
- Keep "Experience Built At" logos at current size.
- Tighten the gap between the photo and the logo strip (`mt-4` → `mt-5`) so the logos read as a quiet supporting element rather than a competing block.
- No changes to mobile layout (logos stay below hero on mobile, unchanged).

### 2. Add inline credibility line in hero (experience framing)

**File:** `src/pages/Index.tsx` (hero section)

Insert one quiet line directly **below** the existing audience qualifier ("For CROs, SVPs, and VP-level partnership leaders…"), separated by a thin top border. Single line, gold dot separators, small caps treatment so it reads as a credential strip — not a stats grid.

```text
15+ YEARS  ·  SALESFORCE  ·  SERVICENOW  ·  LUMEN  ·  $1.6B ARR ECOSYSTEMS
```

- Typography: `font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60`
- Gold middot separators (`·`) in `text-gold/70`
- Wraps gracefully on narrow viewports
- The dedicated stats band below the hero **stays unchanged** — it remains the outcomes moment

### 3. Reframe "The Reality" section from editorial to diagnostic

**File:** `src/pages/Index.tsx` (problem section)

Keep the section structure (3-card grid, same icons, same body copy — they already work). Change only the eyebrow and H2 to convert it from editorial commentary into a buyer-pain mirror:

| Current | New |
|---|---|
| Eyebrow: "The Reality" | Eyebrow: "Sound Familiar?" |
| H2: "Most Partner Ecosystems Underperform" | H2: "The Symptoms We Solve For" |

Card titles + body copy stay identical (Pipeline that never materializes / Strategy without operating muscle / Misaligned with the core business — these already read as buyer-recognizable symptoms).

### 4. Add condensed "How I Work" section to home page

**File:** `src/pages/Index.tsx`

Insert between the reframed problem section and the existing mid-page CTA. Mirrors the Diagnose / Design / Operationalize model from `/services` but as a **teaser**, not a duplicate.

```text
EYEBROW:   How I Work
H2:        Diagnose. Design. Operationalize.

[3-card grid, bg-cream band — matches existing card pattern]

DIAGNOSE
  Ecosystem assessment: partner mix, program health, GTM
  alignment, operating model gaps. Strategy without diagnosis
  is guesswork.

DESIGN
  Program architecture, route-to-market plan, operating model,
  KPI framework. Built for your team to actually run.

OPERATIONALIZE
  Stand up cadences, enablement, deal reg, analytics — handed
  off as a working system, not a deck.

[CTA link]:  See engagement models →   (links to /services)
```

- Reuses existing card pattern (icon tile + title + body)
- Icons: `Search`, `Compass`, `Settings2` from lucide-react (already used elsewhere)
- One link out to `/services` — does not duplicate the full page

---

### Resulting home page flow

```text
1. Hero (with new inline credibility line)
2. Career Highlights stats band  ← outcomes
3. Why Fractional, Why Now
4. Sound Familiar? (reframed problem section)
5. How I Work (NEW — Diagnose/Design/Operationalize teaser)
6. Mid-page CTA
7. Footer
```

This flow now answers a CRO's questions in sequence: *Who? → Senior enough? → Results? → Why fractional? → Do you understand my pain? → What do you actually do? → How do I start?*

### Files modified

- `src/pages/Index.tsx` — all four changes in one file
- No new components, no new tokens, no changes to `/services` or any other page

