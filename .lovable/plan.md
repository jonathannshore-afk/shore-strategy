## Mobile cleanup — Home page (medium pass)

Scope: `src/pages/Index.tsx` only. Desktop layout unchanged — all edits are mobile-only via Tailwind responsive prefixes.

### 1. Kill duplicate trust signals in hero (mobile)
- **Remove** the mobile-only logo strip block (`md:hidden` block at the bottom of the hero with the "Experience Built At" eyebrow + 3 logos). Desktop keeps its side-of-headshot logo block as-is.
- **Remove** the trust chips line *"15+ Years · Salesforce · ServiceNow · Lumen"* on mobile (hide with `hidden md:flex`). Desktop keeps it.
- **Keep** the eyebrow *"ex-Salesforce · ServiceNow · Lumen Technologies"* — it does the job once.
- **Keep** the audience line *"For revenue and partnership leaders…"* and the discovery-call reassurance.

Net result on mobile: eyebrow → H1 → subhead → CTAs → reassurance → audience line. One trust statement, not three.

### 2. Reorder hero on mobile so headline lands first
- The headshot block currently uses `order-first md:order-none`. Change to `order-last md:order-none` so mobile reads: text first (eyebrow → H1 → subhead → CTAs), then headshot below. Desktop side-by-side layout is unaffected.

### 3. Thin out section dividers on mobile
- There are 5 gold-rule-with-diamond dividers between sections. Hide 3 of them on mobile (`hidden md:flex` on the divider wrapper) and keep 2: the one between Why Fractional ↔ Problems, and the one between What I Do ↔ See It In Practice. Desktop rhythm preserved.

### 4. Add missing eyebrow on "Problems" section
- Add `<p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Challenge</p>` above the H2, matching the pattern used by every other section. Applies to both mobile and desktop.

### 5. Collapse the bottom SEO block's redundant card row on mobile
- The 3-card row at the very bottom (Services / Methodology / Case Studies) duplicates the "See It In Practice" cards and the nav. Hide the card grid on mobile (`hidden md:grid`). Keep the SEO prose paragraphs visible — they're text-only and lightweight, and they matter for search.

### Out of scope
- No copy rewrites (Problems card text untouched — that's the parked conversation).
- No color, font, or spacing token changes.
- No edits to Header, Footer, or other pages.

### Files changed
- `src/pages/Index.tsx`
