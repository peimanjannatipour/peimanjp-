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
  const imageUrl = new URL("/images/inventor-photo.jpg", siteConfig.baseUrl);

  return {
    title: {
      default: title,
      template: "%s | Peiman Jannatipour",
    },
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
      "Peiman Jannatipour computational neuroscience",
      "Peiman Jannatipour EEG",
      "Peiman Jannatipour temporal cognition",
      "Peiman Jannatipour time perception",
      "Peiman Jannatipour Bayesian timing",
      "Peiman Jannatipour neural time-series",
      "Peiman Jannatipour ABCD",
      "Peiman Jannatipour developmental neuroimaging",
      "Peiman Jannatipour UCBM",
      "Peiman Jannatipour Near East University",
      "Peiman Jannatipour NeuroLab OS",
      "Peiman Jannatipour NDMS",
      "neurotechnology",
      "EEG",
      "fMRI",
      "biomedical systems",
      "privacy-preserving AI",
      "NeuroLab OS",
      "NDMS",
      "research software",
      "patent pending",
      "PCT/IB2025/060348",
      "SSRN preprint",
      "ORCID 0009-0009-3205-2423",
    ],
    alternates: {
      canonical: url,
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
    verification: {
      google: "4SSraSx2Ayvgx16k6iU9T0dp8PHpGpRBk0k_HTEWNAk",
    },
    openGraph: {
      title: typeof title === "string" ? title : siteConfig.defaultTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: "Professional portrait of Peiman Jannatipour",
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
