

## Home page — tighten spacing & unify section color rhythm

Goal: make the page feel more condensed and give it a consistent, repeating background rhythm instead of three navy sections in a row. All work confined to `src/pages/Index.tsx` (and minor reuse of existing tokens — no new colors).

### Current problems

1. **Three navy sections back-to-back** (Hero → Career Highlights → The Reality) — visually heavy and monotonous. The eye gets no rest between them.
2. **Inconsistent vertical spacing** — mix of `section-padding` (large), `py-16`, `py-16 md:py-20`, plus extra internal margins (`mb-12`, `mb-8`) that compound. Sections feel inflated.
3. **Hero min-height is too tall** (`min-h-[70vh] md:min-h-[85vh]`) for the content it holds now.
4. **Card padding is generous** (`p-8`, `p-10`) which adds to the overall length.

### Target color rhythm (alternating, 6 sections)

```text
1. Hero                 navy image
2. Who I Work With      background  (light)
3. Career Highlights    navy
4. The Reality          background  (light) ← FLIP from navy
5. Engagement Approach  cream
6. Closing CTA          background  (light)
```

This gives a clean **navy → light → navy → light → cream → light** alternation, matching how other pages on the site already alternate light/dark bands.

### Spacing system (apply uniformly)

Replace the current mix with a tighter, consistent scale:

- **Standard section vertical padding:** `py-14 md:py-20` (was `section-padding` ≈ `py-20 md:py-28`, plus some `py-16 md:py-20`).
- **Section header → grid spacing:** `mb-10` (was `mb-12`).
- **Card internal padding:** `p-6 md:p-7` (was `p-8` / `p-10`).
- **Hero min-height:** `min-h-[60vh] md:min-h-[75vh]` (was `70vh / 85vh`).
- **Hero internal CTA spacing:** reduce headline `mb-4 md:mb-6` → `mb-3 md:mb-5`; subhead `mb-6 md:mb-10` → `mb-5 md:mb-8`.
- **Career Highlights band:** `py-12 md:py-16` (was `py-16` flat). Eyebrow `mb-8` → `mb-6`.

### Section-by-section changes

**1. Hero**
- Reduce `min-h` as above.
- Tighten headline / subhead bottom margins as above.
- Logo block under headshot: reduce `mt-5` → `mt-4`.

**2. Who I Work With** (light background — unchanged background, tightened spacing)
- Outer: `section-padding` → `py-14 md:py-20`.
- Add a top border (`border-t border-border`) so the transition off navy is crisp.

**3. Career Highlights** (navy — unchanged background, tightened spacing)
- Container: `py-16` → `py-12 md:py-16`.
- Eyebrow `mb-8` → `mb-6`.

**4. The Reality** (FLIP from navy → light background)
- Background: `bg-navy` → `bg-background`.
- Border: `border-primary-foreground/10` → `border-border`.
- Heading colors: `text-primary-foreground` → `text-foreground`; body `text-primary-foreground/60` → `text-muted-foreground`.
- Cards: `border-primary-foreground/10 bg-primary-foreground/[0.03]` → `border-border bg-card`. Icon tile `bg-gold/10` stays (works on both).
- Outer padding: `section-padding` → `py-14 md:py-20`.
- Card padding: `p-8` → `p-6 md:p-7`.
- Header bottom margin: `mb-12` → `mb-10`.

**5. Engagement Approach (cream)**
- Outer: `section-padding` → `py-14 md:py-20`.
- Header `mb-12` → `mb-10`.
- Cards: `p-10` → `p-6 md:p-7`. Icon tile margin `mb-6` → `mb-5`.
- Bottom CTA link `mt-10` → `mt-8`.

**6. Closing CTA**
- Outer: `py-16 md:py-20` → `py-14 md:py-20` (consistent with the rest).
- Inner spacing: heading `mb-4` → `mb-3`; subhead `mb-8` → `mb-7`.

### Result

- Page height drops materially (estimated ~15–20% shorter) without removing any content.
- Background rhythm becomes a clean alternation, matching the editorial pattern used on the rest of the site.
- All cards, eyebrows, headings, and body sizes stay the same — only padding/margins and one section background change.

### Files modified

- `src/pages/Index.tsx` — only file touched. No new components, no new tokens, no design-system changes.

