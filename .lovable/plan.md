## Fix "See It In Practice" layout

In `src/pages/Index.tsx`, the section uses `md:grid-cols-3` but `exploreCards` only has 2 entries, so the row looks half-empty.

### Change
- Update the grid on the "See It In Practice" section from `md:grid-cols-3` to `md:grid-cols-2`.
- Constrain the inner grid width (e.g. `max-w-3xl mx-auto`) so the two cards don't stretch awkwardly wide at desktop sizes.

No content changes — Case Studies and Leadership Philosophy cards stay as-is.