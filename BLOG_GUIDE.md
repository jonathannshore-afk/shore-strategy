# Blog (Insights) — Content Management Guide

## Overview

Blog posts are stored in a single TypeScript file. No database or CMS is needed — you edit one file, and the site updates automatically on publish.

**File to edit:** `src/data/blogPosts.ts`

---

## Adding a New Post

Add a new object to the `posts` array at the **top** of the list (newest first):

```ts
{
  slug: "your-url-slug",                          // URL path: /insights/your-url-slug
  title: "Your Post Title",                        // Displayed as H1 and in cards
  excerpt: "A 1–2 sentence summary for the blog listing page.",
  author: "Jonathan Shore",
  authorImage: defaultAuthor.image,
  date: "March 17, 2026",                          // Display date (free text)
  readTime: "6 min read",                           // Estimated read time
  category: "Partner Strategy",                     // Category tag shown on card
  keyStats: [                                       // 3 stats for the sidebar card
    { value: "10", label: "Partners Onboarded" },
    { value: "30%", label: "Pipeline Growth" },
    { value: "6mo", label: "Time to ROI" },
  ],
  content: `
## Your First Section Heading

Your markdown content goes here. Use standard markdown:
- **Bold text**
- Bullet lists
- ## Headings (H2, H3)
- Paragraphs separated by blank lines

## Another Section

More content...
  `,
}
```

### Required Fields

| Field         | Description                                    |
|---------------|------------------------------------------------|
| `slug`        | URL-friendly identifier (lowercase, hyphens)   |
| `title`       | Post title                                     |
| `excerpt`     | Short summary for listing cards                |
| `author`      | Author name                                    |
| `date`        | Display date string                            |
| `readTime`    | Estimated read time                            |
| `category`    | Category label                                 |
| `content`     | Markdown-formatted body text                   |

### Optional Fields

| Field         | Description                                    |
|---------------|------------------------------------------------|
| `authorImage` | Path to author photo (use `defaultAuthor.image`)|
| `heroImage`   | Path to a hero image for the post              |
| `keyStats`    | Array of 3 `{ value, label }` objects for sidebar|

---

## Editing an Existing Post

1. Open `src/data/blogPosts.ts`
2. Find the post by its `slug` or `title`
3. Edit the fields you want to change
4. The `content` field uses **markdown** inside a template literal (backticks)

---

## Deleting a Post

Remove the entire object from the `posts` array.

---

## Content Formatting (Markdown)

The `content` field supports:

```markdown
## Section Heading (H2)
### Subsection (H3)

Regular paragraph text.

**Bold text** for emphasis.

- Bullet point
- Another bullet

> Blockquote for callouts

1. Numbered list
2. Second item
```

---

## SEO Notes

- The `slug` becomes the URL: `shore-strategy.com/insights/your-slug`
- The `title` is used as the page `<title>` and H1
- The `excerpt` is used as the meta description
- Posts are listed in the sitemap — update `public/sitemap.xml` when adding new posts

### Updating the Sitemap

Add a new `<url>` entry to `public/sitemap.xml`:

```xml
<url>
  <loc>https://shore-strategy.com/insights/your-url-slug</loc>
  <lastmod>2026-03-17</lastmod>
  <priority>0.7</priority>
</url>
```

---

## Publishing Changes

After editing, click **Publish → Update** in Lovable to push changes live. Blog content is part of the frontend, so it requires a publish to go live.
