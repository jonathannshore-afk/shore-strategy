

## Home page reorder + hero logo relocation

Restructure `src/pages/Index.tsx` to reorder sections and move the "Experience Built At" logo bar from the bottom of the hero into the right column, directly under the headshot. All changes confined to one file.

### New section order

```text
1. Hero (with logos relocated under headshot)
2. Who I Work With           [moved up from #4]
3. Career Highlights         [moved up from #3]
4. The Reality (Problem)     [moved down from #2]
5. Engagement Approach       [unchanged position]
6. Closing CTA               [unchanged]
```

### Hero changes

- Remove the "Experience Built At" block currently sitting in the hero footer (the full-width logo bar with Salesforce / ServiceNow / Lumen).
- In the right column, under the headshot:
  - Keep the headshot but reduce its width from `w-64 lg:w-72` to roughly `w-52 lg:w-56` so the stack (photo + logos) fits the hero comfortably without forcing extra height.
  - Add a compact vertical block beneath the photo:
    - Small gold eyebrow: "Experience Built At" (smaller than the current version — `text-[10px]` uppercase tracking-wide).
    - A single horizontal row with the three logos (Salesforce, ServiceNow, Lumen) sized down to ~`h-6` with the existing `brightness-0 invert` and opacity treatment, evenly spaced via `flex items-center justify-between gap-4`.
- Make the right column visible on mobile too (currently `hidden md:block`) only if it fits cleanly — otherwise keep mobile behavior as-is and only relocate on desktop. Recommend: keep `hidden md:block` to preserve mobile layout; mobile users still see the logos because we will keep a simplified mobile-only logo row inside the hero text column on small screens (reusing the same three images at `h-6`, centered, shown via `md:hidden`).
- Remove the entire bottom hero footer container that previously held the logos.

### Section reordering (no copy changes)

Move JSX blocks within `Index.tsx` into the new sequence above. No copy, styling, or background-color changes to the sections themselves — only their order in the file. The existing background rhythm will become:

```text
Hero (navy image)
→ Who I Work With (background)
→ Career Highlights (navy)
→ The Reality (navy)
→ Engagement Approach (cream)
→ Closing CTA (background)
```

Note: Career Highlights and The Reality both sit on navy and will now be adjacent. To preserve visual separation, keep the existing `border-t border-primary-foreground/10` divider between them (already present on both sections).

### Files modified

- `src/pages/Index.tsx` — only file touched. No new components, no new assets, no new imports.

### Result

Hero becomes a tighter two-column unit (headline left, photo + pedigree logos right). The narrative arc shifts to: who he is → who he serves → proof he can deliver → the problem he solves → how he'd approach it → CTA.

