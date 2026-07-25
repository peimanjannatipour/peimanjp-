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
  jobTitle:
    "Computational Neuroscience Researcher, Inventor, Neurotechnology Systems Developer",
  sameAs: [
    externalLinks.orcid.href,
    externalLinks.github.href,
    externalLinks.ssrn.href,
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

export function scholarlyArticleJsonLd({
  name,
  description,
  urlPath,
  status,
  identifier,
  datePublished,
  keywords,
}: {
  name: string;
  description: string;
  urlPath: string;
  status: string;
  identifier?: string;
  datePublished?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name,
    headline: name,
    description,
    identifier,
    datePublished,
    keywords,
    url: new URL(urlPath, siteConfig.baseUrl).toString(),
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    creativeWorkStatus: status,
  };
}

export const neurolabSoftwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NeuroLab OS",
  applicationCategory: "ResearchApplication",
  operatingSystem: "Web",
  description:
    "Research-use workflow platform concept for neural and biomedical time-series ingestion, validation, QC, fitting, simulation, optimization, and reporting.",
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
  url: new URL("/neurolab-os", siteConfig.baseUrl).toString(),
};

export const patentTechArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  name: "On-Device Estimation of Social Masking and Latent Affect",
  description:
    "Patent-pending PCT application page for privacy-preserving on-device multimodal masking estimation. The page does not claim issued patent or diagnostic status.",
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
  url: new URL("/patent", siteConfig.baseUrl).toString(),
  keywords: [
    "patent pending",
    "PCT application filed",
    "privacy-preserving AI",
    "on-device processing",
    "non-diagnostic",
  ],
};
