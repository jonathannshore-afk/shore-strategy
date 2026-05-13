// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://shore-strategy.com";
const TODAY = new Date().toISOString().slice(0, 10);

const BD_URL = "https://nlfkkdgwlgcgomcnkjua.supabase.co";
const BD_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZmtrZGd3bGdjZ29tY25ranVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMTQ5OTMsImV4cCI6MjA5MTY5MDk5M30.tD2ikxZuz2Zv4IejyfNoA3-9B9zNSxEtOwOrwX0kh6Q";

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/services", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/how-i-work", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/methodology", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
  { path: "/results", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/why-me", changefreq: "monthly", priority: "0.5", lastmod: TODAY },
  { path: "/leadership", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/unsubscribe", changefreq: "yearly", priority: "0.1", lastmod: TODAY },
];

async function fetchBlogEntries(): Promise<Entry[]> {
  try {
    const client = createClient(BD_URL, BD_KEY);
    const { data, error } = await client
      .from("blog_posts")
      .select("slug, date")
      .eq("status", "published");
    if (error || !data) return [];
    return data.map((row: { slug: string; date: string | null }) => ({
      path: `/blog/${row.slug}`,
      lastmod: row.date ?? TODAY,
      changefreq: "monthly",
      priority: "0.6",
    }));
  } catch {
    return [];
  }
}

function render(entries: Entry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

(async () => {
  const blog = await fetchBlogEntries();
  const entries = [...staticEntries, ...blog];
  writeFileSync(resolve("public/sitemap.xml"), render(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
})();