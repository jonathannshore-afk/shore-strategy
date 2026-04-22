

## Why Me & Contact — align with site-wide formatting

Goal: bring both pages in line with the tighter rhythm now used on Home, About, and Services. No new components, no token changes, no copy rewrites (except eyebrows/H2 framing on Why Me to match the numbered narrative pattern from Services).

---

### Shared problems

Both pages still use the legacy `section-padding` utility (`px-6 py-20 md:px-12 lg:px-24 lg:py-28`), which is significantly looser than the new standard:

```
px-6 py-12 md:px-12 lg:px-24 lg:py-16
```

Hero blocks also use looser internal margins (`mb-6` after H1 instead of `mb-3`/`mb-4`) and CTA blocks use `mb-4` / `mb-8` instead of the tightened `mb-3` / `mb-6` rhythm.

---

## Why Me — changes

### Background rhythm (current vs. target)

Current: **Navy → Background → Background → Navy** (Case Studies and First 90 Days are both `bg-background` — they blur into one block).

Target: **Navy → Background → Cream → Navy** — match the alternating pattern from About/Services.

### 1. Hero
- `bg-navy section-padding` → `bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24`
- H1 `mb-6` → `mb-4`

### 2. Case Studies section
- `section-padding bg-background` → `px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-background`
- Header block `mb-12` → `mb-10`
- Subhead `mt-3` → `mt-2`
- Accordion `space-y-6` → `space-y-5` (keeps cards distinct, slightly tighter)
- Add numbered eyebrow style consistent with Services: eyebrow stays "Proof of Work" (no number — Why Me isn't a 3-act narrative, it's a credibility page)

### 3. First 90 Days section
- `section-padding bg-background` → `px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream` *(background swap creates rhythm separation from Case Studies)*
- Header block `mb-12` → `mb-10`
- Subhead `mt-3` → `mt-2`
- Grid `gap-8` → `gap-6`
- Phase card padding `p-8` → `p-6`
- Phase title `mb-4` → `mb-3`
- List `space-y-3` → `space-y-2`

### 4. CTA
- `section-padding bg-navy` → `px-6 py-14 md:px-12 lg:px-24 lg:py-16 bg-navy` (matches Services CTA exactly)
- H2 `mb-4` → `mb-3`
- Paragraph `mb-8` → `mb-6`

---

## Contact — changes

### Background rhythm (current vs. target)

Current: **Navy → Cream → Background**. Target: keep the same flow — it already alternates correctly. Just tighten.

### 1. Hero
- `bg-navy section-padding` → `bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24`
- H1 `mb-6` → `mb-4`

### 2. Summary + Calendly section
- `section-padding bg-cream` → `px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream`
- Grid `gap-12` → `gap-10`
- "How I Can Help" H2 `mb-6` → `mb-4`
- Body paragraph `mb-6` → `mb-4`
- "Book a Conversation" header `mb-6` → `mb-4`

### 3. Form + Contact Info section
- `section-padding bg-background` → `px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-background`
- Outer grid `gap-16` → `gap-12`
- "Or Send a Message" H2 `mb-2` + paragraph `mb-8` → `mb-2` + `mb-6`
- Form `space-y-6` → `space-y-5`
- Inner row `gap-6` → `gap-5`
- Field labels `mb-2` → keep
- Input padding `py-3` → keep (touch target)
- "Direct Contact" H2 `mb-8` → `mb-6`
- Contact info `space-y-8` → `space-y-6`

### 4. No CTA section needed
Contact already *is* the conversion page. No changes.

---

### Resulting effect

- Why Me: hero ~30% shorter; Case Studies and First 90 Days now visually distinct via cream/background swap; CTA matches Services CTA dimensions exactly.
- Contact: hero ~30% shorter; both content sections align with the standard `py-12 lg:py-16` rhythm; form feels tighter without losing touch targets.
- All five primary pages (Home, About, Services, Why Me, Contact) now share: identical hero padding (`pt-16 pb-10 md:pt-20 md:pb-14`), identical content padding (`py-12 lg:py-16`), identical horizontal gutters (`px-6 md:px-12 lg:px-24`), and the same alternating navy/cream/background rhythm.

### Files modified

- `src/pages/WhyMe.tsx`
- `src/pages/Contact.tsx`

No new components, no token changes, no copy rewrites.

