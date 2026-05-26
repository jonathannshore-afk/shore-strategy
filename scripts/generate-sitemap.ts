// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://shore-strategy.lovable.app";
const TODAY = new Date().toISOString().slice(0, 10);

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
  { path: "/results", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/leadership", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/fractional-vs-consulting-vs-fte", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/faq", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: TODAY },
  { path: "/unsubscribe", changefreq: "yearly", priority: "0.1", lastmod: TODAY },
];

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
  const entries = [...staticEntries];
  writeFileSync(resolve("public/sitemap.xml"), render(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
})();