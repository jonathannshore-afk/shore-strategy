

# Three Targeted Updates

## 1. Remove Testimonial (Homepage)
Delete the entire "Typical Results" section in `src/pages/Index.tsx` (lines ~190–198) containing the *"Within 6 months..."* quote and *"VP Partnerships, Series D SaaS"* attribution. This is the only testimonial on the site.

## 2. Update Availability Badge
In `src/pages/Index.tsx` (line 124), change:
- **From**: *"Currently accepting Q3 2026 engagements"*
- **To**: *"Currently accepting new engagements"*

## 3. Fix Expertise Radar Cutoff
The radar labels (especially "Cross-Functional Leadership" and longer labels at the edges) get clipped because `outerRadius="60%"` leaves limited room and the container width is constrained.

**Recommended approach: Improve, don't remove** — the radar adds visual differentiation and reinforces the "8 core competencies" narrative. Fixes:

- **Shorten the longest labels** in `src/components/ExpertiseRadar.tsx`:
  - `"Cross-Functional\nLeadership"` → `"Cross-Functional"` (single line)
  - `"Operating Models"` → `"Operating Models"` (keep)
  - `"Business Planning"` → `"Planning"` (or keep; we'll see)
- **Reduce `outerRadius`** from `60%` → `**70%**` (paradoxically gives more room because we'll also expand the container) — actually we'll go the other way: reduce to `**55%**` so labels have more space outside the polygon.
- **Increase container width**: `max-w-[360px]` → `**max-w-[420px]**`
- **Increase chart height**: `300` → `**340**`
- **Reduce font size** slightly: `fontSize: 10` → `**fontSize: 11**` with better spacing (or keep 10 — final tuning during implementation)
- Apply same improvements to both dark (Home) and light (About) variants since the component is shared.

This keeps the radar visually appealing while ensuring no labels are clipped at standard breakpoints.

## Files Modified
- `src/pages/Index.tsx` — remove testimonial section, update availability copy
- `src/components/ExpertiseRadar.tsx` — shorten labels, resize container/radius for clean rendering

