

# Three Page Updates

## 1. Services Page (`src/pages/Services.tsx`)

**(a) Remove Methodology section**
- Delete entire `{/* Methodology */}` section (lines ~212–258) including the 5 `pillars` array (lines 107–168).
- Remove now-unused icon imports: `ClipboardCheck`, `Rocket`, `Search` (keep `Target`, `Layers` — still used elsewhere in the file via capabilities).

**(b) Promote "Rapid Assessments" to featured banner**
- Remove the `Rapid Assessments` entry from the `capabilities` array (line 43–47) so it no longer appears in the grid.
- Add a new featured section **between the Hero and the Capabilities Grid** (so it sits above the grid, drawing the eye first):
  - Full-width band with a subtle gold-accented card on cream/navy-tinted background to stand out from the white capability grid below
  - Layout: two-column on desktop — left side icon (`Zap`) + label ("Featured Offering"), title "Rapid Assessments", description "30-day partner program audits that identify quick wins, strategic gaps, and a prioritized roadmap for improvement"; right side a prominent gold CTA button "Book a Rapid Assessment" linking to `/contact#calendly`
  - Visual treatment: gold left border accent, soft shadow, larger typography than grid cards, "FEATURED OFFERING" eyebrow label in gold uppercase
- Keep the remaining 7 capabilities in the grid below (still renders cleanly as `md:grid-cols-2`).

## 2. Why Me → Results

Rename across:
- **`src/components/Header.tsx`** (line 9): nav label `"Why Me"` → `"Results"`, path `/why-me` → `/results`
- **`src/App.tsx`** (line 30): route path `/why-me` → `/results`
- **`src/pages/WhyMe.tsx`**:
  - SEO `title` → `"Results"`, `path` → `/results`, description updated to reflect "Results" framing
  - Hero eyebrow "Why Work With Me" → "Results", H1 already reads *"Proof in the Results"* — keep
  - (Filename `WhyMe.tsx` and component name `WhyMe` left as-is to avoid touching imports — only user-visible text and route change. Acceptable since it has no SEO/UX impact.)

## 3. Contact Page (`src/pages/Contact.tsx`)

In the `id="calendly"` section (lines ~115–143):
- Remove the entire left "How I Can Help" column (the `<div>` containing the H2 + two paragraphs)
- Change the grid from `lg:grid-cols-2` to single-column, and center the Calendly column with `max-w-3xl mx-auto`
- Keep the "Book a Conversation" heading and the Calendly embed
- The hero ("Let's Connect") and the form/contact-info section below remain untouched (the user only asked to remove the "How I Can Help" copy, not the form section).

## Files Modified
- `src/pages/Services.tsx` — remove methodology section + pillars array, remove Rapid Assessments from grid, add featured banner section, clean unused imports
- `src/components/Header.tsx` — rename nav label and path
- `src/App.tsx` — rename route path
- `src/pages/WhyMe.tsx` — update SEO + hero eyebrow text
- `src/pages/Contact.tsx` — remove "How I Can Help" column, center Calendly

