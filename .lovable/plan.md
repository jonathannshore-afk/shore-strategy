

## Apply About-page editorial rhythm to Services, Why Me, and Contact

Same pattern used on About: keep navy hero + navy CTA as bookends, unify all body sections to `bg-cream`, and place a gold hairline + diamond divider between adjacent body sections.

### Divider component (reused inline, exact match to About)

```tsx
<div className="bg-cream">
  <div className="container px-6 md:px-12 lg:px-24 flex items-center gap-4 py-2">
    <span className="block h-px flex-1 bg-gold/40" />
    <span className="block w-2 h-2 rotate-45 bg-gold/60" />
    <span className="block h-px flex-1 bg-gold/40" />
  </div>
</div>
```

---

### 1. `src/pages/Services.tsx`

Current body flips: `bg-background` (Capabilities) → `bg-cream` (Methodology) → `bg-cream` (Diagnostic) → `bg-background` (Engagement Models) → `bg-navy` (CTA).

Changes:
- Capabilities section: `bg-background` → `bg-cream`
- Engagement Models section: `bg-background` → `bg-cream`
- Insert gold-diamond divider between each of the 4 body sections (3 dividers total): after Capabilities, after Methodology, after Diagnostic.
- Keep navy hero and navy CTA as-is.

Resulting flow: navy hero → cream (Capabilities) → ◆ → cream (Methodology) → ◆ → cream (Diagnostic) → ◆ → cream (Engagement Models) → navy CTA.

### 2. `src/pages/WhyMe.tsx`

Current body flips: `bg-background` (Case Studies) → `bg-cream` (First 90 Days) → `bg-navy` (CTA).

Changes:
- Case Studies section: `bg-background` → `bg-cream`
- Insert gold-diamond divider between Case Studies and First 90 Days.
- Keep navy hero and navy CTA as-is.

Note: case study cards use `bg-card` (white) with inner stat tiles using `bg-background` (gray). On cream, the gray inner tiles will still read fine — they sit inside white cards, not directly on cream — so no further change needed there.

### 3. `src/pages/Contact.tsx`

Current body flips: `bg-cream` (Summary + Calendly) → `bg-background` (Form + Direct Contact).

Changes:
- Form + Direct Contact section: `bg-background` → `bg-cream`
- Insert gold-diamond divider between Calendly section and Form section.
- Keep navy hero as-is. (Footer is the bookend; no page-level CTA section here.)

Note: form inputs use `bg-card` (white) — they'll continue to pop cleanly against cream, same as the white case-study/philosophy cards on About.

---

### Files modified

- `src/pages/Services.tsx`
- `src/pages/WhyMe.tsx`
- `src/pages/Contact.tsx`

No new components, no token changes, no changes to About/Index/Blog/Leadership.

