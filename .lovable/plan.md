## Revert the mobile cleanup pass

Roll back every edit from the last "medium pass" on `src/pages/Index.tsx`. Desktop and mobile return to exactly how they were before this turn.

### Changes to reverse

1. **Headshot order** — change `order-last md:order-none` back to `order-first md:order-none` so the headshot appears above the text on mobile again.
2. **Trust chips line** — remove the `hidden md:flex` classes so *"15+ Years · Salesforce · ServiceNow · Lumen"* shows on mobile again.
3. **Mobile logo strip** — re-add the deleted `md:hidden` block below the hero (the "Experience Built At" eyebrow + Salesforce / ServiceNow / Lumen logo row).
4. **"The Challenge" eyebrow** — remove the new `<p>` added above the Problems H2.
5. **Dividers** — remove `hidden md:block` from the two dividers (between Problems↔What I Do, and between See It In Practice↔SEO block) so all 4 dividers show on mobile again.
6. **Bottom SEO 3-card grid** — remove `hidden md:grid` so the Services / Methodology / Case Studies cards show on mobile again.

### Files changed
- `src/pages/Index.tsx` (single file, full revert)
