

# Consulting-First Repositioning — "The Forbidden Fruit"

Exactly right — the psychology here is powerful. When someone reads this site and thinks *"this person is clearly successful running their own practice... I wonder if I could get them full-time"*, that's infinitely more compelling than someone who appears to be hedging between consulting and job-seeking. You become the person they have to **recruit away** from something, not someone waiting for an offer.

---

## Changes

### 1. Header Subtitle
Change *"Partner Ecosystem Strategy Executive"* → *"Partner Ecosystem Strategist"* — positions you as a practitioner, not a title-holder.

### 2. Homepage Hero (`Index.tsx`)
- **New headline**: Lead with the buyer's pain, not your name. Something like:
  > *"Your Partner Ecosystem Should Be a Revenue Engine"*
  > Then your name and a single confident line: *"I help B2B technology companies build, fix, and scale partner ecosystems that drive measurable revenue."*
- **Remove**: *"Available for Fractional Partner Strategy Leadership, Partner Strategy Consulting, and Full-Time opportunities"*
- **CTAs stay**: "Book a Discovery Call" + "See How I Work"

### 3. Replace "Find Your Path" Cards
Remove the dual-track Hiring/Fractional cards. Replace with a single **"How I Work"** section showing three consulting engagement types (Fractional Leadership, Project-Based, Advisory) — all linking to `/services`. No FTE card here.

### 4. Mid-Page CTA Copy
Remove *"Whether you're exploring a full-time hire..."* — rewrite to focus on the consulting conversation only.

### 5. Services Page (`Services.tsx`)
Remove the **"Full-Time Leadership"** flip card entirely. Keep the three consulting models.

### 6. About Page (`About.tsx`)
Add one subtle line at the bottom of the career/bio section:
> *"For the right opportunity, I'm also open to full-time leadership roles."*

This is the "forbidden fruit" — a single quiet signal that makes a recruiter think *"there's an opening here"* without it being the point of the site.

### 7. SEO Updates
- SEO title: *"Partner Ecosystem Strategist"* instead of *"Executive"*
- JSON-LD `jobTitle`: update to match
- Meta description: remove FTE references

### 8. Memory Update
Update project identity memory to reflect consulting-first positioning.

---

## What Stays the Same
- Stats, logos, "Who I Work With", Expertise Radar, About career timeline, Why Me case studies, Contact page — all work as-is.

## Files Modified
- `src/components/Header.tsx` — subtitle text
- `src/pages/Index.tsx` — hero, "Find Your Path" → "How I Work", mid-page CTA, SEO/JSON-LD
- `src/pages/Services.tsx` — remove Full-Time Leadership card
- `src/pages/About.tsx` — add subtle FTE line
- `index.html` — meta title/description updates
- `mem://project/identity` — update positioning

