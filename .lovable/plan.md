

## Services page — restructure around the three-act narrative

Reframe the page so it tells one clean story end-to-end: **What I do → How I deliver it → How to engage me**. This resolves the duplication you flagged by giving each section a distinct job instead of two sections covering the same ground.

### Narrative flow (target)

```text
1. Hero               — navy     — Set positioning
2. What I Do          — bg       — Menu of services (the "what")
3. My Approach        — cream    — Methodology / how I deliver (the "how")
4. Ways to Engage     — bg       — Engagement models (the "how to buy")
5. CTA                — navy     — Book a call
```

Same alternating rhythm as About and Home. No new sections added — the existing three content blocks get re-cast into clear roles.

---

### Section 1 — Hero (minor copy tweak only)

Keep current navy hero structure and spacing. Adjust the subhead so it previews the three-act flow:

> *A clear menu of services, a proven delivery methodology, and flexible ways to engage — all built to drive partner-led growth.*

Eyebrow stays "Capabilities" → change to **"Services"** (matches the new framing).
H1 stays: *What I Build* → change to **"How I Help"** (umbrella for what + how + engage).

### Section 2 — "What I Do" (the menu)

This replaces the current Capabilities Grid but reframes its purpose: it is now explicitly the **menu of services**, not a duplicate of methodology.

- Eyebrow: **"01 · The Menu"**
- Heading: **"What I Do"**
- Subhead: *The specific services I deliver across partner ecosystem strategy and execution.*
- Resolve the duplication by **trimming the 8 cards down to 6** that are clearly *deliverables*, not *process steps*:
  1. Partner Program Design
  2. Joint GTM Strategy
  3. Revenue Acceleration
  4. Partner Operations (PRM, deal reg, MDF)
  5. Performance Analytics & Dashboards
  6. Rapid 30-Day Assessments

  Removed (because they are now owned by the Methodology section): *Ecosystem Development*, *Strategic Planning & Alignment*. Their concepts live inside the 5 methodology pillars.

- Layout: keep current 2-col grid, `p-5` cards, gold icon, title, one-line description. Tighten descriptions to a single sentence each so this reads as a scannable menu, not prose.
- Background: `bg-background`

### Section 3 — "My Approach" (methodology)

Reframe the existing Methodology section as the **delivery engine** behind the menu above.

- Eyebrow: **"02 · The Approach"**
- Heading: **"How I Deliver"** (replaces "Strategic Approach")
- Subhead: *Five pillars that turn the services above into measurable outcomes.*
- Keep the 5 numbered pillar cards exactly as they are (01–05, icon, title, description, outcomes list).
- Background: `bg-cream` (unchanged)

This now reads as the *process* that powers the menu, not a parallel list.

### Section 4 — "Ways to Engage"

Reframe as the **commercial wrapper** around the menu + approach.

- Eyebrow: **"03 · The Engagement"**
- Heading: **"Ways to Work Together"** (unchanged)
- Subhead: *Choose the engagement model that fits where you are — fractional, project-based, or advisory.*
- Keep all 3 FlipCards exactly as built (Fractional, Project-Based, Advisory). No structural change.
- Background: `bg-background`

### Section 5 — CTA (unchanged)

Navy CTA, "Ready to Build Your Partner Ecosystem?", Book a Call button. No changes.

---

### Why this resolves the duplication

- **Before:** Capabilities and Methodology both answered "what does Jonathan do?" in different formats → reader sees the same concepts twice.
- **After:** "What I Do" answers *what you get*. "My Approach" answers *how I deliver it*. "Ways to Engage" answers *how you buy it*. Each section has one job.
- The numbered eyebrows (01 · 02 · 03) make the narrative arc explicit so the visitor reads the page as one connected story.

### Files modified

- `src/pages/Services.tsx` — only file touched.
  - Trim `capabilities` array from 8 → 6 entries; tighten descriptions to one sentence.
  - Update hero eyebrow + H1 + subhead copy.
  - Add eyebrows "01 · The Menu", "02 · The Approach", "03 · The Engagement" and update each section's H2 / subhead.
  - No layout, padding, color-token, or component changes. No new files.

