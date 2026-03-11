import { siteConfig } from "@/data/site";

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
Host: ${siteConfig.url}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
