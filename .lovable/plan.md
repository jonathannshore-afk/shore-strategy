

## Pilot Engagement offer + "Why Fractional, Why Now" section

Two changes to address the "new practice, no client logos" gap by reframing the offer and addressing the objection head-on.

---

### 1. Pilot Engagement offer — "Partner Ecosystem Diagnostic"

A defined, fixed-scope, fixed-fee wedge offer that removes "first client" risk for buyers and gives the practice a repeatable entry point.

**Where it lives:** `src/pages/Services.tsx`, inserted as a new section between **02 · The Approach** (engagement models) and **03 · The Engagement** (process). New eyebrow: **"03 · Start Here"**, and the existing "03 · The Engagement" becomes **"04 · The Engagement"**.

**Visual treatment:** A single highlighted card on a `bg-cream` band — distinct from the 3-up engagement model grid above it so it reads as *the* recommended starting point, not another option.

**Card content:**

```text
EYEBROW:   03 · START HERE
H2:        The Partner Ecosystem Diagnostic
SUBHEAD:   A fixed-scope, fixed-fee engagement designed to give you
           a board-ready view of your partner ecosystem in 30 days.

[Two-column card on bg-card with gold accent border]

LEFT COLUMN — "What you get"
  • Full ecosystem audit (partners, programs, pipeline contribution)
  • Competitive & routes-to-market benchmark
  • Prioritized 12-month roadmap with investment model
  • Board-ready findings deck + 60-min executive readout

RIGHT COLUMN — "The details"
  • 30 days, end to end
  • Fixed fee — no scope creep, no surprises
  • Direct access to me — not a junior team
  • Natural on-ramp to fractional or project work (optional)

CTA:  [Book a Scoping Call →]  (links to /contact)
```

No pricing number on the page itself — the eyebrow says "Start Here" and the CTA drives to a scoping conversation. (Pricing can be added later once validated; leaving it off now avoids anchoring before the offer is tested.)

---

### 2. "Why Fractional, Why Now" section

A short, founder-voice section that addresses the elephant in the room — *"you're new to fractional"* — by reframing it as a deliberate strategic choice backed by 15 years of operator experience.

**Where it lives:** `src/pages/About.tsx`, inserted after the existing "My Story" narrative and before the Leadership Philosophy section. Uses `bg-background` to sit cleanly between the cream "My Story" band and whatever follows.

**Section content:**

```text
EYEBROW:   A Deliberate Choice
H2:        Why Fractional, Why Now

[Single-column, max-w-3xl, left-aligned prose — matches "My Story" rhythm]

After 15 years operating inside three of the companies that defined modern
B2B SaaS partnerships — Salesforce, ServiceNow, and Lumen — I'm bringing
that playbook to growth-stage teams who need senior partner leadership
without a full-time hire.

Most companies under $250M ARR can't justify a $400K+ CRO of Partnerships.
But they absolutely need the strategy, the program design, and the
executive presence that role provides. That's the gap I exist to close.

I'm not a career consultant who has read about partner ecosystems. I've
built them, scaled them, and turned them around — with full P&L
ownership and board-level accountability. The work I do for clients today
is the same work I did as an operator. The only thing that's changed is
who signs the contract.
```

No new components — uses existing typography tokens (`font-display`, `font-body`, `text-foreground`, `text-muted-foreground`) and the standard section padding (`px-6 py-12 md:px-12 lg:px-24 lg:py-16`).

---

### Files modified

- `src/pages/Services.tsx` — insert "Start Here" diagnostic section, renumber subsequent eyebrow from `03` to `04`.
- `src/pages/About.tsx` — insert "Why Fractional, Why Now" section between My Story and Leadership Philosophy.

No new components, no new tokens, no copy changes elsewhere. Both sections reuse the existing card / section / eyebrow patterns already established across the site.

### What this resolves

- **Pilot offer:** gives buyers a low-risk, well-defined first step — and gives you a repeatable path to your first 2–3 real case studies within 90 days.
- **Why Fractional section:** converts the "new shingle" objection into a strategic-choice narrative *before* a buyer has to ask.

