import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/hakkimizda",
  "/hizmetler",
  "/bolgeler",
  "/iletisim",
  "/hizmetler/mobil-lastik-servisi",
  "/hizmetler/yol-yardim",
  "/hizmetler/lastik-degisimi",
  "/hizmetler/lastik-tamiri",
  "/bolgeler/ortakoy-aksaray",
  "/bolgeler/aksaray-merkez",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: "2026-03-11",
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
