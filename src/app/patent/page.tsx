import type { Metadata } from "next";
import NDMSPage from "../ndms/page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Patent & NDMS | Peiman Jannatipour",
  description:
    "NDMS is a privacy-aware multimodal neurotechnology concept focused on structured signal integration, real-time inference, and interpretable system design.",
  path: "/patent",
});

export default function PatentPage() {
  return <NDMSPage />;
}
