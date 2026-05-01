## Highlight "Free, no-obligation discovery call" across the site

Right now the only place "no commitment" / "no prep" appears is the Contact page checklist. Everywhere else, the CTA just says "Book a Call" or "Let's Talk" with no reassurance. Add a consistent **"Free 25-minute discovery call · No obligation"** microcopy line directly under the primary CTA on every page that pushes to `/contact`, and tighten a few CTA blurbs to lead with the same message.

### Reusable pattern

Wherever there's a primary "Book a Call" / "Book a Discovery Call" / "Let's Talk" button that links to `/contact`, render a small reassurance line **immediately below the button**:

```
Free 25-minute discovery call · No prep required · No obligation
```

Styling: `font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/50` on dark sections, `text-muted-foreground` on cream sections. Gold separator dots already match brand.

### Page-by-page changes

1. **Home — `src/pages/Index.tsx` (hero, ~line 122)**
   - Keep button: "Book a Discovery Call".
   - Add reassurance line below the two CTA buttons (above the existing "For revenue and partnership leaders…" tagline).

2. **Footer — `src/components/Footer.tsx` (right-side CTA block)**
   - Replace the current line "Let's discuss how a structured engagement can drive measurable partner-led revenue." with: **"Start with a free 25-minute discovery call. No prep, no obligation — just a clear point of view on your ecosystem."**
   - Keep the "Book a Call" button as-is.

3. **Contact page hero — `src/pages/Contact.tsx` (~line 130)**
   - Add a small gold pill / line under the hero subheading: **"Free 25-minute discovery call · No obligation"** so the reassurance is visible above the fold before users scroll to the checklist.

4. **About — `src/pages/About.tsx` (~line 166)**
   - Add the reassurance line under the "Book a Call" / LinkedIn button row (dark navy section, so use the light-on-dark variant).

5. **Leadership — `src/pages/Leadership.tsx` (~line 115, "The Bottom Line" CTA)**
   - Add the reassurance line below the "Let's Talk" button (cream section, muted-foreground variant).

6. **BlogPost — `src/pages/BlogPost.tsx` (~line 248, "Need Help With Your Partner Strategy?" CTA)**
   - Change button label from "Get in Touch" → **"Book a Discovery Call"** (with `CalendarCheck` icon, matching the rest of the site).
   - Add the reassurance line below the button.

7. **Blog index — `src/pages/Blog.tsx` (~line 40)**
   - Leave as-is (it's a small inline "Get in touch" link, not a primary CTA — adding microcopy here would feel noisy).

### Optional small refactor

If you'd like, extract the reassurance line into a tiny `<DiscoveryCallReassurance variant="dark" | "light" />` component in `src/components/` so the wording stays in sync if you tweak it later. Recommended but not required — six call sites is the threshold where a shared component starts to pay off.

### What stays the same

- All button labels except BlogPost (which currently says "Get in Touch" — odd outlier).
- Calendly URL, scheduler embed, form, layout, colors, fonts.
- Header "Let's Talk" nav button (it's a nav element, not a hero CTA — adding microcopy would clutter the header).
