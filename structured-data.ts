import { externalLinks, siteConfig } from "@/data/links";
import { featuredResearch } from "@/data/research";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  nationality: "Iranian",
  email: siteConfig.email,
  url: siteConfig.baseUrl,
  jobTitle: "Researcher, Inventor, Neurotechnology Builder",
  sameAs: [
    externalLinks.orcid.href,
    externalLinks.github.href,
    externalLinks.ssrn.href,
  ].filter(Boolean),
};

export const preprintJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: featuredResearch.title,
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
  url: featuredResearch.href,
  identifier: externalLinks.ssrn.value,
  creativeWorkStatus: "Preprint",
  description: featuredResearch.summary,
};

