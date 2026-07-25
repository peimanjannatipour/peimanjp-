import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/data/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const extraRoutes = [
    "/projects/smis-ods",
    "/research/eeg-temporal-reproduction-bias",
    "/research/bayesian-log-time-state-space-clock",
    "/research/cortical-state-temporal-inference",
    "/llms.txt",
    "/humans.txt",
  ];

  return [...navItems.map((item) => item.href), ...extraRoutes].map((href) => ({
    url: new URL(href, siteConfig.baseUrl).toString(),
    lastModified: new Date("2026-06-01"),
    changeFrequency: href === "/" ? "monthly" : "yearly",
    priority: href === "/" ? 1 : href.startsWith("/research/") ? 0.8 : 0.7,
  }));
}
