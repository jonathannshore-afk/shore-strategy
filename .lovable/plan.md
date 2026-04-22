

## About page — tighten spacing & unify formatting

Goal: reduce vertical bloat and bring the About page in line with the Home page's tighter rhythm. All work confined to `src/pages/About.tsx`. No new components, no token changes, no copy rewrites.

### Current problems

1. **Hero is too tall**: uses `section-padding pb-12` which expands to `px-6 py-20 md:px-12 lg:px-24 lg:py-28 pb-12` — that's ~7rem of top padding plus generous internal margins (`mb-4`, `mb-6` × 2, `mt-6` × 2) creating excessive whitespace before the headshot/text settle.
2. **Inconsistent section padding**: hero uses `section-padding` (huge), but "My Story" and "Leadership Philosophy" use `px-6 py-12 md:px-12 lg:px-24 lg:py-16` (much tighter). The hero feels like a different page than the rest.
3. **Two consecutive cream sections** ("My Story" + "Leadership Philosophy") with identical `bg-cream` and identical padding — they blur into one long beige block with no visual rhythm.
4. **Internal margins inside hero are loose**: `mb-4` after H1, `mb-6` between every divider/block.

### Changes

#### 1. Tighten the hero (navy section)

`<section className="bg-navy section-padding pb-12">` →
`<section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">`

This matches the rhythm of the rest of the page (compact) and aligns with the Home page hero we just shipped.

Inside the hero, tighten internal spacing:
- H1: `mb-4` → `mb-3`
- Intro paragraph block: keep as-is
- Divider + "Experience Built At" block: `mt-6 mb-6` → `mt-5 mb-5` (both dividers)
- Logos block: `mb-4` (under eyebrow) → `mb-3`

#### 2. Unify section padding across the page

Both content sections currently use `px-6 py-12 md:px-12 lg:px-24 lg:py-16`. Keep this as the standard but apply the same to the hero (above) so all three sections share the same horizontal rhythm.

#### 3. Add visual rhythm — alternate backgrounds

Change "Leadership Philosophy" section background:
- `bg-cream` → `bg-background`

Resulting flow:
```text
1. Hero                  navy
2. Stats Marquee         (its own band)
3. My Story + Experience cream
4. Leadership Philosophy background (light, not cream)
```

Now each section has a distinct surface — navy → marquee → cream → background — matching the Home page's alternating pattern.

#### 4. Tighten "My Story" + "Leadership Philosophy" internals

- "My Story" H2 `mb-4` → `mb-3`
- Story paragraph stack `space-y-3` → keep (already tight)
- "Experience" eyebrow `mb-3` → keep
- Accordion items `space-y-2` → keep
- Leadership eyebrow `mb-2` → keep
- Leadership H2 `mb-8` → `mb-6`
- Principles grid `gap-6` → `gap-5`
- Each principle card padding `p-6` → `p-5`

### Resulting effect

- Hero shortens by ~30% (no more `lg:py-28`).
- All three sections share matching horizontal padding for a consistent column feel.
- Two formerly-identical cream sections get visual separation via background change.
- Page overall ~15–20% shorter without removing any content.

### Files modified

- `src/pages/About.tsx` — only file touched. No new components, no new tokens, no copy changes.

