

## Merge "Who I Work With" into the hero

Collapse the standalone "Who I Work With" section into a single qualifying line in the hero, removing one full section from the page.

### Hero changes

Add one line directly under the two CTA buttons (inside the left text column, same `animate-fade-in-up` treatment):

> *For CROs, SVPs, and VP-level partnership leaders at B2B SaaS and enterprise technology companies.*

Styling:
- `mt-6 md:mt-8 pt-5 border-t border-primary-foreground/15`
- `font-body text-sm text-primary-foreground/60 max-w-xl`
- `text-center md:text-left` to match the column
- Keep "CROs, SVPs, and VP-level partnership leaders" subtly emphasized via `text-primary-foreground/80`

This preserves the qualifier (so the wrong audience self-selects out) without adding visual weight that competes with the headline.

### Section removal

Delete the entire "Who I Work With" `<section>` block (the light band with eyebrow + heading + paragraph that currently sits between the hero and Career Highlights).

### Resulting page flow (5 sections)

```text
1. Hero (navy image — now includes audience qualifier line)
2. Career Highlights      navy
3. The Reality            light
4. Engagement Approach    cream
5. Closing CTA            light
```

Cleaner rhythm: navy → navy → light → cream → light. The two adjacent navy sections (Hero + Career Highlights) already have the `border-t border-primary-foreground/10` divider so the transition stays crisp.

### Files modified

- `src/pages/Index.tsx` — only file touched. No new components, no copy rewrites beyond the one merged line, no token changes.

### Result

- One fewer section, shorter page.
- Audience qualifier lands in the first viewport instead of after a scroll.
- Career Highlights becomes the first scroll beat — proof points hit immediately after the hero.

