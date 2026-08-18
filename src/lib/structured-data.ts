import { externalLinks, siteConfig } from "@/data/links";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.baseUrl,
  jobTitle: "Computational Neuroscience Researcher",
  sameAs: [
    externalLinks.orcid.href,
    externalLinks.researchGate.href,
  ].filter(Boolean),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.baseUrl,
  description: siteConfig.description,
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export function faqJsonLd(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
