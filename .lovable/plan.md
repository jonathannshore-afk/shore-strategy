
User wants Services page reorganized:
1. Engagement Models section moves to top (right after Hero)
2. "What I Build" capabilities grid moves underneath Engagement Models
3. Undo Rapid Assessments featured banner — restore it as a card in the capabilities grid (revert to pre-previous-change state for that piece)

Looking at current `src/pages/Services.tsx`:
- Hero
- Featured Rapid Assessments banner
- Capabilities Grid (7 items)
- Engagement Models (flip cards)
- CTA

Target order:
- Hero
- Engagement Models
- Capabilities Grid (8 items, with Rapid Assessments restored)
- CTA

# Services Page Reorder

## Changes to `src/pages/Services.tsx`

**1. Restore Rapid Assessments capability**
- Add `Rapid Assessments` back into the `capabilities` array (using existing `Zap` icon) with the description: *"30-day partner program audits that identify quick wins, strategic gaps, and a prioritized roadmap for improvement."*
- This brings the grid back to 8 items (renders cleanly as `md:grid-cols-2`).

**2. Remove the Featured Rapid Assessments banner section**
- Delete the entire `{/* Featured: Rapid Assessments */}` section (the cream-background standalone banner with the gold left border and CTA).

**3. Reorder sections**
New page flow:
1. Hero (navy) — unchanged
2. **Engagement Models** (cream) — moved up, right after hero
3. **What I Build / Capabilities Grid** (background) — moved below engagement models
4. CTA (navy) — unchanged

**4. Adjust section backgrounds for visual rhythm**
Current alternation is navy → cream → background → cream → navy. After reorder it would be navy → cream(engagement) → background(capabilities) → navy(cta), which still alternates cleanly — no background changes needed.

**5. Add a section heading to "What I Build"**
Since it's no longer the first content section after the hero, add a centered eyebrow + heading above the capabilities grid (matching the Engagement Models section style):
- Eyebrow: "Capabilities"
- H2: "What I Build"

This gives the second section visual parity with Engagement Models.

**6. Clean up imports**
- `Zap` stays (now used by the Rapid Assessments capability card icon)
- All other icon imports remain in use

## Files Modified
- `src/pages/Services.tsx` — restore Rapid Assessments to capabilities array, remove featured banner, swap section order, add heading to capabilities section
