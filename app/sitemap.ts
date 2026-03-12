import type { MetadataRoute } from "next";

import { landingPages } from "@/data/landing-pages";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/iletisim"];
  const lastModified = new Date("2026-03-11T00:00:00+03:00");
  type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route || "/", siteConfig.url).toString(),
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as ChangeFrequency,
      priority: route === "" ? 1 : 0.8,
    })),
    ...landingPages.map((page) => ({
      url: new URL(`/${page.slug}`, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: page.type === "local" ? 0.9 : 0.8,
    })),
  ];
}
