

## Plan: Clean up Hero Footer Section

### Changes to `src/pages/Index.tsx`

**1. Remove the Expertise Radar**
- Remove the `lazy` import for `ExpertiseRadar`
- Remove the `<Suspense>` block wrapping `<ExpertiseRadar variant="dark" />`
- Remove the unused `lazy, Suspense` imports from React

**2. Clean up "Experience Built At" formatting**

Currently the section uses a `flex-col md:flex-row` layout designed to sit beside the radar chart. With the radar gone, we can:
- Remove the wrapping flex container (no longer needs to share space)
- Center the "Experience Built At" block cleanly across the full width
- Slightly increase logo spacing for a more premium, balanced look
- Keep the same muted "Experience Built At" eyebrow label, centered

### Result

The hero will end with a single, centered, well-balanced logo strip (Salesforce · ServiceNow · Lumen) — cleaner and more executive, without the radar competing for attention.

### Files Modified
- `src/pages/Index.tsx` — remove radar, simplify logo section layout

