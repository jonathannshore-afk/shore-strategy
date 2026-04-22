

## Tighten Services + Why Me, consolidate process content into "How I Work"

### The strategy

Each page gets one job:

- **Why Me** → pure proof (case studies only)
- **Services** → the menu (what I do + how to engage)
- **How I Work** → the process (delivery method + diagnostic + first 90 days) — lives at the existing `/methodology` route, renamed

### 1. `src/pages/WhyMe.tsx` — strip to case studies

Remove:
- The entire "First 90 Days" section (`first90Days` array + its `<section>`)
- The divider between Case Studies and First 90 Days
- The "What to Expect" eyebrow content

Keep: hero, case studies accordion, navy CTA.

Hero subhead tightens to focus on proof: *"Three companies. Three transformations. The track record behind the strategy."*

### 2. `src/pages/Services.tsx` — strip to menu + engagement

Remove:
- "How I Deliver" section (the 5 pillars block — lines ~217-263)
- "The Partner Ecosystem Diagnostic" section (lines ~274-331)
- Two of the three dividers (keep only the one between "What I Do" and "Ways to Work Together")
- Section numbering (`01 · The Menu`, `04 · The Engagement`) — only two sections now, numbering feels overwrought

Final flow: navy hero → cream "What I Do" → ◆ → cream "Ways to Work Together" → navy CTA.

Hero subhead tightens to: *"A clear menu of services and flexible ways to engage."*

Add a soft cross-link at the bottom of "Ways to Work Together": *"Curious how engagements actually run? See How I Work →"*

### 3. Repurpose `/methodology` → `/how-i-work`

Rewrite `src/pages/Methodology.tsx` to become the new "How I Work" page with three stacked sections:

```text
Hero (navy)
   ↓
Section 1: How I Deliver  ← the 5 pillars (moved from Services)
   ↓ ◆
Section 2: The First 90 Days  ← moved from Why Me
   ↓ ◆
Section 3: The Partner Ecosystem Diagnostic  ← moved from Services
   ↓
CTA (navy) — "Book a Scoping Call"
```

This page answers: *"If we work together, what does it actually look like?"* — the Diagnostic at the bottom becomes the natural CTA (it's the on-ramp).

Apply the same cream-bg + gold-diamond editorial rhythm used on About/Services/Why Me.

### 4. Routing + navigation

- Add `/how-i-work` route in `src/App.tsx` pointing to the rewritten Methodology component
- Keep `/methodology` as a redirect (or alias) so any external links don't 404
- Add **"How I Work"** to the header nav in `src/components/Header.tsx`, placed between "Services" and "Why Me":
  ```
  Home · About · Services · How I Work · Why Me · Contact
  ```

The narrative the nav now tells: *Who I am → What I do → How I do it → Proof I can do it → Talk to me.* That's the CRO journey.

### Files modified

- `src/pages/WhyMe.tsx` — remove First 90 Days
- `src/pages/Services.tsx` — remove How I Deliver + Diagnostic
- `src/pages/Methodology.tsx` — rewrite as "How I Work" with 3 sections (pillars + 90 days + diagnostic)
- `src/App.tsx` — add `/how-i-work` route, keep `/methodology` as alias
- `src/components/Header.tsx` — insert "How I Work" nav link

No new components. No token changes. Pure content reshuffle + one nav addition.

