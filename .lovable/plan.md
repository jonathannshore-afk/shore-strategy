

## Rework "Core Competencies" — avoid duplicating Experience

You're correct: the previous draft repeated the same metrics already in the Experience accordion. Here are two non-duplicative directions. Pick one.

### Option A — Remove the section entirely (recommended)

The About page already tells a complete story:
1. Hero (who + logos)
2. Stats marquee (numbers)
3. My Story + Experience accordion (narrative + proof)
4. Leadership Philosophy (how I lead)

A competencies block at the end — whether radar or grid — adds a fourth "here's what I'm good at" beat after the page has already established it three different ways. Cutting it lets Leadership Philosophy be the closing note, which is stronger: it ends on character, not a checklist.

**Change:** Delete the "Core Competencies" section from `About.tsx`. Remove the `ExpertiseRadar` import. Leadership Philosophy becomes the final section before the global footer CTA.

### Option B — Replace with "How I Work" (forward-looking, not retrospective)

Keep a closing section, but make it about *what an engagement looks like* rather than *what I've done*. This complements rather than repeats the Experience accordion.

**Layout:** 3-column grid, cream background, matches Leadership Philosophy card style.

**Three cards:**

| Title | Body |
|---|---|
| Diagnose first | I start every engagement with an ecosystem assessment — partner mix, program health, GTM alignment, operating model gaps. Strategy without diagnosis is guesswork. |
| Build for operators | Frameworks only matter if your team can run them. I design programs, playbooks, and operating cadences your org can actually execute and sustain. |
| Measure what moves revenue | Partner-influenced pipeline, sourced ARR, attach rate, time-to-first-deal. I instrument the metrics that prove the ecosystem is working — or surface what to fix. |

This positions the page's closing beat as "here's how I'd work with you," which sets up the footer CTA naturally.

### Files modified (either option)

- `src/pages/About.tsx` — remove the Core Competencies / radar section; if Option B, add the "How I Work" section in its place
- `src/components/ExpertiseRadar.tsx` — file stays in repo (unused), in case you want it back later

### Recommendation

**Option A.** The page is tighter without it, and Leadership Philosophy is a stronger closer than another grid of capabilities. If you later want a forward-looking section, Option B can be added in a follow-up.

