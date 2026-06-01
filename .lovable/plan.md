## Lighter Hero Background

Generate a new hero background image with the same navy + gold-line motif as today, but far fewer lines and more negative space, then swap it in.

### Steps

1. Generate `public/hero-bg.jpg` replacement using `imagegen` with a 16:9 prompt: deep navy background (#1B2A4A), only 4–6 long, thin, very faint gold diagonal lines scattered across the frame with lots of empty space, subtle vignette, abstract — no text, no people, no dense grids.
2. Save the new image to `public/hero-bg.jpg` (overwriting the current one). Same path means no code changes required in `src/pages/Index.tsx`.
3. QA: view the generated image to confirm it reads as "sparse" vs. the current cluttered version. If too busy, regenerate with stricter constraints (fewer lines, more negative space).

### Files touched

- `public/hero-bg.jpg` — replaced in place.

### Not changing

- Hero layout, copy, overlay opacity, or any code in `Index.tsx`.
