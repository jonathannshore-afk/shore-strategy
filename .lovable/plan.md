
# About Page Updates

## 1. Remove FTE Mention
In `src/pages/About.tsx`:
- Delete the italic line (lines 177–179): *"For the right opportunity, I'm also open to full-time leadership roles."*
- Update hero intro (line 112) to remove "fractional executive leadership" framing of dual-track — keep it consulting-only: *"...unlock partner-led revenue through strategic consulting and fractional leadership engagements."* (already consulting-focused, no change needed there — only the italic line is removed).

## 2. Fix ServiceNow Logo
The current `logo-servicenow.png` is rendered with `brightness-0 invert` to make it white on the navy hero. PNGs with transparency + `brightness-0 invert` often render with halos or jagged edges. We have a clean `logo-servicenow.svg` available in `src/assets/`.

**Fix**: Swap the import to use the SVG version. SVGs scale crisply and respond cleanly to `brightness-0 invert`. Apply only to the hero (navy background); the experience accordion uses the original colored logo on cream — leave that alone.

## 3. Hide Lovable Badge
The "Edit with Lovable" badge appears on published deployments. I'll toggle it off via the publish settings (requires Pro plan — if not on Pro, this will fail and you'll need to upgrade). This is a one-click toggle, no code changes.

## 4. Fix Expertise Radar (About Page)
The radar is still clipping because the About page wraps it in `max-w-lg` (~512px) but the inner chart only uses `max-w-[420px]` with `outerRadius="55%"` — labels at the cardinal points still extend beyond the SVG bounds at narrow widths.

**Fixes** in `src/components/ExpertiseRadar.tsx`:
- Reduce `outerRadius` from `55%` → **`50%`** (gives ~25% margin on each side for labels)
- Increase inner container `max-w-[420px]` → **`max-w-[480px]`**
- Increase height `340` → **`380`**
- Reduce label font size from `11` → **`10`** for safer fit

In `src/pages/About.tsx`: change wrapper from `max-w-lg` → **`max-w-xl`** so the chart has room to breathe.

## Files Modified
- `src/pages/About.tsx` — remove FTE line, swap ServiceNow logo import to SVG, widen radar wrapper
- `src/components/ExpertiseRadar.tsx` — adjust dimensions and outerRadius for clean rendering
- Publish settings — hide Lovable badge (no code change)
