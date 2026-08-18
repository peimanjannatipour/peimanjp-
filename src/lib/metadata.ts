import type { Metadata } from "next";
import { siteConfig } from "@/data/links";

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.baseUrl);
  const imageUrl = new URL("/assets/stock/stock1.jpg", siteConfig.baseUrl);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    applicationName: "Peiman Jannatipour Portfolio",
    authors: [{ name: siteConfig.name, url: siteConfig.baseUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Research portfolio",
    keywords: [
      "Peiman Jannatipour",
      "Peiman JP",
      "computational neuroscience",
      "EEG",
      "temporal cognition",
      "human time reproduction",
      "Bayesian modelling",
      "neural time-series",
      "NeuroLab OS",
      "NDMS",
      "neurotechnology",
      "scientific software",
      "ORCID 0009-0009-3205-2423",
      "ResearchGate",
    ],
    alternates: {
      canonical: url,
    },
    verification: {
      google: "4SSraSx2Ayvgx16k6iU9T0dp8PHpGpRBk0k_HTEWNAk",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: typeof title === "string" ? title : siteConfig.defaultTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: "Computational neuroscience workstation",
        },
      ],
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.defaultTitle,
      description,
      images: [imageUrl.toString()],
    },
  };
}
