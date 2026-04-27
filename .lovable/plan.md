## Goal
Make the positioning feel inclusive and confident — without disqualifying prospects by company size or talking down to senior buyers about their own titles.

---

## Your two asks

### 1. Drop the sales-volume / ARR gating
**Where it appears:**
- `src/pages/Index.tsx` line 277 — *"Most companies under $250M ARR can't justify a $400K+ CRO of Partnerships…"*
- `src/pages/Index.tsx` line 159 — hero meta strip ends with *"$1.6B ARR Ecosystems"* (this one is about *your* experience, not gating clients — recommend keeping)

**Change:** Rewrite the "Why Fractional, Why Now" paragraph to frame the gap by *need and stage*, not revenue band.

Proposed replacement:
> "Many growing technology companies need the strategy, program design, and executive presence of a senior partnerships leader — but not always as a full-time hire. That's the gap I exist to close. I bring the same operator experience I built inside Salesforce, ServiceNow, and Lumen, sized to where your business is today."

### 2. Drop the role titles in the audience line
**Where:** `src/pages/Index.tsx` lines 141–146 — *"For CROs, SVPs, and VP-level partnership leaders at B2B SaaS and enterprise technology companies."*

You're right — anyone senior enough to hire you already knows this is for them. Listing titles can feel like you're explaining their own seat back to them.

Proposed replacement:
> "For revenue and partnership leaders at B2B technology companies building partner-led growth."

Cleaner, still qualifies the buyer, no title-laddering.

---

## Other things I'd recommend tightening

### 3. Soften the "Best for" lines on Services
`src/pages/Services.tsx` lines 44, 62, 80 — three "Best for…" blurbs on the engagement model cards.

The phrase "Best for X" implicitly says "not for you if you're Y." On engagement-model cards that's fine in principle, but the current copy is redundant with the description right above it.

**Recommendation:** Replace `fit:` lines with a tighter, neutral framing — e.g.:
- Fractional: *"When you need the seat filled, but not the full-time hire."*
- Project-Based: *"When the initiative is clear and needs an owner."*
- Advisory: *"When the leader is in place and wants a thinking partner."*

Same intent, less gating language.

### 4. Remove the $400K number from Services too
`src/pages/Services.tsx` line 43 — Fractional description opens with *"…without a $400K executive hire."*

Same logic as #1: anchoring on a specific salary number can feel transactional and may make smaller buyers self-select out, or make larger buyers question your level. Recommend:
> "Need senior partner strategy leadership without committing to a full-time executive hire? I embed part-time as your head of partnerships — owning the strategy, the execution, and the results."

### 5. Hero subhead is solid — leave it
*"I help B2B technology companies build, fix, and scale partner ecosystems that drive measurable revenue growth."* — this is the right level of specificity. No change needed.

### 6. Keep all the *credibility* numbers
`$1.6B ARR managed`, `$800M+ influenced`, `19% YoY`, `2K+ partners`, `15+ years`, the Salesforce/ServiceNow/Lumen logos — these describe **you**, not gate **them**. Keep all of it.

---

## Files that will change
- `src/pages/Index.tsx` — hero audience line + "Why Fractional, Why Now" paragraph
- `src/pages/Services.tsx` — three `fit:` strings + Fractional `desc:` opener

No structural changes, no new components, no design changes. Pure copy edits.

---

## Open question for you
On #3, do you want me to use the shorter neutral lines I proposed, or remove the `fit:` field entirely from the cards? Removing it would clean up the cards visually since the descriptions already cover positioning.
