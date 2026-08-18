import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/data/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const extraRoutes = [
    "/projects/smis-ods",
    "/research/eeg-temporal-reproduction-bias",
    "/research/bayesian-log-time-state-space-clock",
    "/research/abcd-developmental-neuroimaging",
    "/research/cortical-state-temporal-inference",
    "/llms.txt",
    "/llms-full.txt",
    "/humans.txt",
    "/privacy",
  ];

  return [...new Set([...navItems.map((item) => item.href), ...extraRoutes])].map((href) => ({
    url: new URL(href, siteConfig.baseUrl).toString(),
    changeFrequency: href === "/" ? "monthly" : href.startsWith("/research") ? "monthly" : "yearly",
    priority: href === "/" ? 1 : href.startsWith("/research/") ? 0.85 : href === "/publications" ? 0.9 : 0.7,
  }));
}
