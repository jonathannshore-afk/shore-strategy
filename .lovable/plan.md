## Home Hero Cleanup

Tighten the home page hero in `src/pages/Index.tsx` by removing redundant content. No copy rewrites, no layout restructure — just targeted removals.

### Changes

1. **Remove the eyebrow line** above the H1:
   - "ex-Salesforce · ServiceNow · Lumen Technologies"
   - Reason: the logo strip already communicates this visually.

2. **Remove the secondary CTA** in the button row:
   - "See How I Work" button (keeps the primary "Book a Discovery Call").
   - The button row collapses to a single primary action.

3. **Remove the credentials row** under the headshot:
   - "15+ Years · Salesforce · ServiceNow · Lumen"
   - Reason: fully redundant with the logo strip directly above it.

### Kept as-is

- H1 and subhead copy
- Reassurance microcopy ("Free 30-minute discovery call…")
- Audience line ("For revenue and partnership leaders…")
- Headshot
- Desktop "Experience Built At" logo strip under the headshot
- Mobile-only logo strip at the bottom of the hero

### Files touched

- `src/pages/Index.tsx` — hero `<section>` only (roughly lines 119–181 and the credentials block on lines 170–181).

### Expected outcome

Shorter, more focused hero. One headline, one subhead, one CTA, one reassurance line, one audience line, headshot + logos. Removes three redundant Salesforce/ServiceNow/Lumen mentions down to one (the logo strip).
