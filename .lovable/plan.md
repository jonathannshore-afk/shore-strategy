## Goal

Two things, in one pass:

1. **Homepage routing fix** — get visitors deeper into `/results`, `/leadership`, and `/blog` (currently 5, 1, and 3 views/month).
2. **Performance** — apply the handful of fixes that move real-world numbers, after honestly reading the profile.

---

## Part 1 — Homepage changes

Today the homepage flows: Hero → Career Highlights → Why Fractional → Problems → What I Do → (footer). The only outbound CTAs are `/contact` and `/how-i-work`. `/results`, `/leadership`, and `/blog` are effectively orphaned from the home experience.

### Change A — Add a "Proof in Practice" section after "What I Do"

A single, scannable row of 3 cards linking to the under-trafficked pages. Reuses the existing card pattern (border, gold icon chip, navy heading, body copy) so it doesn't feel bolted on.

```text
┌─────────────────────────────────────────────────────────────────┐
│  See It In Practice                                             │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐        │
│  │ [icon]        │  │ [icon]        │  │ [icon]        │        │
│  │ Case Studies  │  │ Leadership    │  │ Field Notes   │        │
│  │ Real outcomes │  │ How I lead    │  │ Latest writing│        │
│  │ → /results    │  │ → /leadership │  │ → /blog       │        │
│  └───────────────┘  └───────────────┘  └───────────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

- "Case Studies" → `/results` (icon: `Award` or `Trophy`)
- "Leadership Philosophy" → `/leadership` (icon: `Compass`)
- "Field Notes" → `/blog` (icon: `BookOpen`)

Each card is a clickable link with hover treatment matching the rest of the home cards.

### Change B — Show the latest 2 blog posts on the homepage

Below the new "See It In Practice" row, render a compact "Latest from the Blog" strip pulling from the existing `useBlogPosts` hook. Title, date, 1-line excerpt, "Read →". This is the highest-leverage change for `/blog` (3 views/month is essentially invisible).

If `useBlogPosts` is unavailable (DB down), the section silently hides — no skeleton sprawl on the homepage.

### Change C — Header nav audit (small)

Confirm `/results` and `/leadership` are in the primary nav at parity with Services/About. If they're buried in a dropdown or missing on mobile, surface them. (Will check `Header.tsx` during implementation; only edit if needed.)

### What I will NOT change

- No new testimonials, no "Proven Results" block on home (per project memory).
- No changes to hero copy, headshot, or stats.
- No changes to existing card content.

---

## Part 2 — Performance

### Honest read of the profile

The profile I just ran was against the **Lovable dev preview**, which serves unbundled ES modules through Vite + HMR. Numbers like FCP 6.6s, 75 separate script requests, and 1.4s on `@vite/client` are dev-mode artifacts — they do not represent what real visitors see on `shore-strategy.lovable.app`. Production is bundled, minified, and gzipped.

So I'll do two things:
1. Apply the changes that are clearly worth making regardless.
2. Re-profile against the published URL to get a real baseline before/after.

### Production-relevant fixes

**1. Preload the hero background image**
The hero uses `heroBg` as a CSS `background-image`. CSS background images aren't discovered until the stylesheet parses, which delays LCP. Add `<link rel="preload" as="image" href="...">` in `index.html` (or via Helmet on `/`) for the hero JPG. Likely the single biggest LCP win.

**2. Preload the headshot too**
It's marked `fetchPriority="high"` already (good), but on slow mobile a `<link rel="preload">` shaves more. Lower priority than #1.

**3. Verify hero image is sized for the web**
Quick check of the actual byte size of `hero-bg.jpg`. If it's >300KB or >2000px wide, re-export at 1920px wide, ~80% quality. Same check for the headshot (`jonathan-headshot.jpeg`).

**4. Route-level code splitting**
`App.tsx` imports every page eagerly. Convert Blog, BlogPost, Results, Leadership, HowIWork, About, Services, Contact, Unsubscribe, NotFound to `React.lazy()` with a small Suspense fallback. Keeps the homepage bundle lean — visitors who never navigate don't pay for Contact's Calendly logic, Blog's markdown renderer, or Recharts on Results.

**5. Recharts is the biggest single dep**
`ExpertiseRadar` (Recharts) is only used on a few pages. After step 4, it stops loading on home. Confirm with a production build report.

**6. Calendly script — defer until needed**
On `/contact`, Calendly's widget script loads on mount. Already async, but on mobile we could wait until the Calendly section scrolls into view (`IntersectionObserver`). Small win, only affects `/contact`.

**7. Re-measure**

After the above, run `browser--performance_profile` against `https://shore-strategy.lovable.app/` and report real LCP/FCP/CLS deltas, not the dev preview.

### What I will NOT do

- No service worker / PWA shell — overkill for a marketing site.
- No swapping out lucide-react — tree-shaking already handles unused icons in prod.
- No font self-hosting yet — Google Fonts is preconnected and acceptable; revisit only if real-world LCP demands it.

---

## Order of work

1. Add "See It In Practice" section to `Index.tsx`.
2. Add "Latest from the Blog" strip using `useBlogPosts`.
3. Quick `Header.tsx` audit; surface `/results` / `/leadership` if missing.
4. Convert non-home routes to `React.lazy` in `App.tsx`.
5. Add hero image preload in `index.html`.
6. Check and (if needed) re-export `hero-bg.jpg` and `jonathan-headshot.jpeg`.
7. Re-profile production URL and report deltas.

## Technical notes

- Use existing semantic tokens (`gold`, `cream`, `foreground`, `border`, `card`, `muted-foreground`) — no raw colors.
- `useBlogPosts` already exists; reuse rather than refactor.
- Lazy-loaded routes need a Suspense boundary in `App.tsx` wrapping `<Routes>`. Fallback should be a minimal `<div className="min-h-screen" />` to avoid layout shift.
- Hero preload: since the JPG is imported by Vite (hashed filename), the cleanest path is a `<link rel="preload">` injected via Helmet inside `Index.tsx` using the imported `heroBg` URL — that way the hash stays correct.
