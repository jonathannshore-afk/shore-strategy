## Goal

New page at `/fractional-vs-consulting-vs-fte` that answers the question every prospect silently asks before booking: *"Do I hire a full-time VP, retain a Big-4 consulting firm, or bring in a fractional operator?"*

Positioning: not a sales page for fractional. A **decision aid** that's honest about when each model wins — which is exactly why fractional comes out looking strong for the specific buyer profile Shore Strategy serves.

---

## Page structure

```text
┌────────────────────────────────────────────────────────────────┐
│ HERO                                                           │
│ Eyebrow: "Decision Guide"                                      │
│ H1: "Fractional vs. Consulting Firm vs. Full-Time Hire"        │
│ Sub: "Three ways to add senior partner leadership.             │
│       Here's how to pick — written by someone who's been       │
│       hired under all three models."                           │
│ Meta strip: 6 min read · Updated May 2026                      │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ TL;DR BAND (cream, 3 short cards)                              │
│                                                                │
│  Hire FTE when…        Retain a firm when…   Go fractional…   │
│  the role is           the work is a one-    when you need     │
│  permanent, scoped     time transformation   senior judgment   │
│  for a single          with a deck as the    in the seat, but  │
│  company, and you      deliverable.          not 5 days/week.  │
│  can wait 6+ months                                            │
│  to ramp.                                                      │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ THE COMPARISON TABLE  (the centerpiece)                        │
│                                                                │
│                    Fractional   Consulting    Full-Time        │
│                    Operator     Firm          Hire             │
│  ────────────────────────────────────────────────────────────  │
│  Time to value     2–4 weeks    6–10 weeks    4–6 months       │
│  Commitment        1–2 days/wk  Project SOW   5 days/week      │
│  Typical cost      $$           $$$$          $$$$ + equity    │
│  Who does the      The person   Partner sells,Hired leader     │
│  work              you hired    juniors do it (eventually)     │
│  Operator P&L      Yes          Rarely        Yes              │
│  experience                                                    │
│  Stays after       Optional     No            Yes              │
│  delivery                                                      │
│  Ramp risk         Low          Low (on deck) High             │
│  Best for stage    Series A–C,  Enterprise    Public co or     │
│                    PE-backed    transform     mature scale-up  │
│  Worst fit         Need 5       Need an       Pre-product-     │
│                    days/week    operator      market-fit       │
│                                 in the seat                    │
│                                                                │
│  Mobile: collapses to 3 stacked cards, one per column          │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ HONEST TRADEOFFS (3 sub-sections, ~150 words each)             │
│                                                                │
│ 1. Where a full-time hire wins                                 │
│    - Permanent role, 5 days/week of attention                  │
│    - Builds long-term team, owns equity story                  │
│    - Right when partner revenue is core to the 3-yr plan       │
│    - Tradeoff: $400K+ all-in, 4–6 months to ramp, real         │
│      hiring risk if you pick wrong                             │
│                                                                │
│ 2. Where a consulting firm wins                                │
│    - Big transformations with executive air cover              │
│    - Benchmarking data across many companies                   │
│    - Right for board-mandated change programs                  │
│    - Tradeoff: $250K–$500K+ per project, junior consultants    │
│      do the work, deck lands and they leave                    │
│                                                                │
│ 3. Where fractional wins                                       │
│    - Senior operator in the seat, week one                     │
│    - 1–2 days/week at a fraction of FTE cost                   │
│    - You get the person who sold you the engagement            │
│    - Tradeoff: not full-time, so not right when the role       │
│      truly requires 40 hrs/week                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ DECISION TREE (visual, 4–5 yes/no nodes)                       │
│                                                                │
│  Do you need someone in the seat 5 days/week? ──Yes──► FTE     │
│                  │                                             │
│                  No                                            │
│                  ▼                                             │
│  Is the deliverable a strategy/deck (not execution)?           │
│                  │                                             │
│       ──Yes──► Consulting firm                                 │
│                  │                                             │
│                  No                                            │
│                  ▼                                             │
│  Do you need operator judgment + execution cadence?            │
│                  │                                             │
│       ──Yes──► Fractional                                      │
│                                                                │
│  Rendered as styled cards w/ connecting lines on desktop,      │
│  stacked vertical flow on mobile. Pure CSS, no chart lib.      │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ FAQ — 5 questions (drives FAQPage JSON-LD)                     │
│  1. What does a fractional partner leader actually cost?       │
│  2. How is fractional different from advisory or coaching?     │
│  3. Can I start fractional and convert to full-time later?     │
│  4. Why not just hire a Big-4 firm if budget allows?           │
│  5. When is it too early to bring anyone in?                   │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ CTA — navy band                                                │
│ "Still not sure which fits? That's what the discovery call is  │
│  for. 30 minutes, no pitch — I'll tell you straight."          │
│ [ Book a Discovery Call ]  [ See How I Work → ]                │
└────────────────────────────────────────────────────────────────┘
```

---

## On pricing — the open decision

I'm proposing **qualitative `$` / `$$` / `$$$$` indicators** in the table, with **directional ranges in the prose** below it ("$400K+ all-in for FTE", "$250K–$500K+ for a firm project"). Fractional cost stays vague ("a fraction of FTE — scoped per engagement") so it routes to the discovery call.

Rationale: zero numbers feels evasive; hard numbers anchor against you. Bands feel honest without committing.

If you'd rather go fully qualitative or fully numeric, easy to flip — flag it on approval.

---

## Files

**New**
- `src/pages/FractionalVsConsultingVsFte.tsx` — full page, semantic tokens only

**Edited**
- `src/App.tsx` — lazy route at `/fractional-vs-consulting-vs-fte`
- `public/sitemap.xml` + `scripts/generate-sitemap.ts` — add route, priority 0.8
- `public/llms.txt` — add page entry
- `src/pages/Services.tsx` — one inline link from "How do I know if fractional or project-based is right for us?" FAQ answer → the new page

**Not edited (deliberate)**
- `Header.tsx` — keep the top nav clean; this page is for people who already landed and are evaluating
- Home — link from Services FAQ is enough surface for v1; can promote later if it ranks

---

## SEO

- `<title>`: "Fractional vs. Consulting vs. Full-Time Partner Leader" (~62 chars)
- Meta description: "Comparing fractional, consulting firm, and full-time hire models for partner ecosystem leadership in B2B tech. Cost, time to value, and when each one wins." (~157 chars)
- Canonical: `shore-strategy.com/fractional-vs-consulting-vs-fte`
- JSON-LD: `Article` (with author = Jonathan Shore) **+** `FAQPage` for the 5 FAQs
- Internal links: `/services`, `/how-i-work`, `/contact#calendly`
- Target keywords: "fractional vs consulting", "fractional VP partnerships", "when to hire fractional executive" — long-tail, low KD, high commercial intent

---

## Out of scope

- Pricing calculator widget
- Lead-magnet "download the comparison PDF" gate
- Animated decision tree (pure CSS only)
- Homepage hero rewrite to surface this page
