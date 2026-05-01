## Restore intro copy on Contact page

The left column of the "Book a Conversation" section on `/contact` currently shows just three checklist bullets, which feels visually thin next to the Calendly widget. A previous version (commit `9725fbd`) had a heading and two intro paragraphs above the bullets. Restore that copy only — keep the current layout, bullet list, and Calendly widget exactly as they are.

### Change

In `src/pages/Contact.tsx`, inside the left "Summary" column of the `#calendly` section, prepend the following above the existing `<ul>`:

- An `<h2>` heading: **"How I Can Help"** (display font, 3xl, bold).
- Paragraph 1: "I partner with B2B SaaS and enterprise technology companies to build, scale, and operationalize partner ecosystems. With deep expertise in strategic alliances, channel programs, and ecosystem go-to-market, I help organizations turn partnerships into a measurable growth engine."
- Paragraph 2: "Whether you need fractional leadership, a strategic assessment, or advisory support — let's talk. Pick a time that works for you, no commitment required."
- Add a subtle `border-t` divider above the bullet `<ul>` (matching the previous version) so the checklist visually separates from the prose.

No other changes — bullets, Calendly widget, form, contact info, and hero all stay as-is.
