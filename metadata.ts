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

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "/images/inventor-photo.jpg",
          width: 1200,
          height: 1200,
          alt: "Professional portrait",
        },
      ],
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/inventor-photo.jpg"],
    },
  };
}
