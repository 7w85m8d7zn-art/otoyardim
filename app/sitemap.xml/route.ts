import { blogPosts } from "@/data/blog-posts";
import { landingPages } from "@/data/landing-pages";
import { siteConfig } from "@/data/site";

const lastModified = "2026-03-11T00:00:00+03:00";

export async function GET() {
  const urls = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/blog", priority: "0.8", changefreq: "monthly" },
    ...landingPages.map((page) => ({
      path: `/${page.slug}`,
      priority: page.type === "local" ? "0.9" : "0.8",
      changefreq: "monthly",
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${new URL(entry.path, siteConfig.url).toString()}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
