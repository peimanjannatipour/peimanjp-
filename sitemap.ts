import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/data/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, siteConfig.baseUrl).toString(),
    lastModified: new Date("2026-04-25"),
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}

