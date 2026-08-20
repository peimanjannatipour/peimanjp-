import { externalLinks, siteConfig } from "@/data/links";

export const PERSON_ID = `${siteConfig.baseUrl}/#person`;
export const WEBSITE_ID = `${siteConfig.baseUrl}/#website`;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.baseUrl,
  image: `${siteConfig.baseUrl}/images/inventor-photo.jpg`,
  jobTitle: "Computational Neuroscience Researcher",
  sameAs: [
    externalLinks.orcid.href,
    externalLinks.researchGate.href,
    externalLinks.github.href,
  ].filter(Boolean),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.baseUrl,
  description: siteConfig.description,
  publisher: {
    "@id": PERSON_ID,
  },
};

export function profilePageJsonLd(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteConfig.baseUrl}${path}`,
    name: siteConfig.name,
    mainEntity: {
      "@id": PERSON_ID,
    },
  };
}

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

export function collectionPageJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteConfig.baseUrl}${path}`,
    name,
    description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${siteConfig.baseUrl}${item.url}`,
        description: item.description,
      })),
    },
  };
}

export function scholarlyArticleJsonLd({
  title,
  description,
  path,
  doi,
  pdfUrl,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  doi?: string;
  pdfUrl?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: title,
    description,
    url: `${siteConfig.baseUrl}${path}`,
    author: {
      "@id": PERSON_ID,
    },
    ...(doi ? { sameAs: doi.startsWith("http") ? doi : `https://doi.org/${doi}` } : {}),
    ...(pdfUrl ? { encoding: { "@type": "MediaObject", contentUrl: pdfUrl.startsWith("http") ? pdfUrl : `${siteConfig.baseUrl}${pdfUrl}` } } : {}),
    ...(datePublished ? { datePublished } : {}),
  };
}

export function softwareApplicationJsonLd({
  name,
  description,
  path,
  applicationCategory = "ScientificSoftware",
}: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${siteConfig.baseUrl}${path}`,
    applicationCategory,
    operatingSystem: "Cross-platform (Electron, Python/FastAPI)",
    author: {
      "@id": PERSON_ID,
    },
  };
}

export function techArticleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: `${siteConfig.baseUrl}${path}`,
    author: {
      "@id": PERSON_ID,
    },
  };
}

export function contactPageJsonLd(path = "/contact") {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteConfig.baseUrl}${path}`,
    mainEntity: {
      "@id": PERSON_ID,
    },
  };
}
