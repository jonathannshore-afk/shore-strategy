## Goal

Disconnect the external "BD Command Center" Supabase project from this site entirely, and remove the blog/Insights feature since you're tabling it.

## What gets removed

**BD Command Center integration**
- `src/integrations/supabase/bdClient.ts` (external Supabase client) — delete
- BD push block in `supabase/functions/score-lead/index.ts` — strip the `BD_SUPABASE_URL`/`BD_SUPABASE_ANON_KEY` constants and the "Push to BD Command Center" section. `score-lead` will still score the lead and email the alert; it just won't forward to BD.
- BD fetch in `scripts/generate-sitemap.ts` — remove the dynamic blog fetch and BD constants. Sitemap becomes static-routes only.

**Blog / Insights feature (frontend)**
- Routes in `src/App.tsx`: remove `/blog` and `/blog/:slug` and their lazy imports.
- Pages: delete `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`.
- Hooks/data: delete `src/hooks/useBlogPosts.ts` and `src/data/blogPosts.ts`.
- Blog components: delete `src/components/blog/` (`ArticleContent.tsx`, `LinkedInDraftCard.tsx`, `ShareToolbar.tsx`).
- `src/pages/Index.tsx`: remove the `useBlogPosts` import/usage, the "From the Blog" section (lines ~514–569), and the "Field Notes / Browse the blog" tile in the navigation card array (lines ~75–81).
- Header/Footer: verify and remove any "Insights"/"Blog" nav links if present.

**Public files**
- `public/sitemap.xml`: remove the `/blog` URL entry.
- `public/llms.txt`: remove the `- [Blog](/blog) ...` line.
- `scripts/generate-sitemap.ts`: drop `/blog` from `staticEntries` and remove `@supabase/supabase-js` import/BD code.

**Docs / memory**
- Delete `BLOG_GUIDE.md`.
- Update project memory: remove the "Blog DB" core line and the `[Blog Sharing]`, `[Blog Layout]`, `[Blog Architecture]` memory entries from `mem://index.md`, and delete those memory files.

## What stays

- Lovable Cloud (this project's own Supabase) — untouched.
- `score-lead` edge function — still scores submissions with AI and sends the operator email alert. Only the BD forwarding step is removed.
- Contact form, Calendly, email queue, lead alerts, and all other pages.

## After-change behavior

- Navigating to `/blog` or `/blog/:slug` will hit the existing `NotFound` page.
- New contact submissions are scored and emailed to you, but nothing is pushed to the BD Command Center database anymore (you can keep using BD independently — it just won't auto-receive leads from this site).
- Sitemap will list only the 13 remaining static routes.

## Out of scope

- Any changes to the BD Command Center Supabase project itself (that's a separate project you control).
- No DB migrations in this project — nothing in this project's schema references BD.
