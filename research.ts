import { externalLinks } from "./links";

export type ClaimStatus =
  | "Published"
  | "Preprint"
  | "Under review"
  | "Manuscript in progress"
  | "Prototype"
  | "Patent pending"
  | "Concept"
  | "Research-use only"
  | "PCT application filed";

export type ResearchItem = {
  title: string;
  status: ClaimStatus | "SSRN preprint";
  cover?: "spacetime" | "bayesian" | "minimal";
  summary?: string;
  keywords?: string[];
  role?: string;
  href?: string;
  linkLabel?: string;
  visibility: "detailed" | "limited";
};

export const featuredResearch: ResearchItem = {
  title:
    "Graph-Theoretic Framework for Representing Spacetime as Temporal Layers of Spatial Graphs",
  status: "SSRN preprint",
  href: externalLinks.ssrn.href,
  linkLabel: `DOI: ${externalLinks.ssrn.value}`,
  summary:
    "A theoretical framework representing spacetime as ordered layers of spatial graphs, with attention to discrete structures, invariance metrics, and Lorentz-aware transformations.",
  keywords: [
    "graph theory",
    "discrete spacetime",
    "temporal layers",
    "invariance",
    "SINDy",
    "physics modeling",
  ],
  role: "Sole author / under review",
  cover: "spacetime",
  visibility: "detailed",
};

export const bayesianPreprint: ResearchItem = {
  title: "Bayesian Log-Time State-Space Model",
  status: "Preprint",
  role: "Preprint / link pending",
  cover: "bayesian",
  visibility: "limited",
};

export const limitedResearch: ResearchItem[] = [
  bayesianPreprint,
  {
    title: "Modular Mitochondrial Control Map",
    status: "Manuscript in progress",
    visibility: "limited",
  },
  {
    title: "Neurotype Domain Research Map",
    status: "Concept",
    visibility: "limited",
  },
  {
    title: "Relativistic Neural Time Framework",
    status: "Under review",
    cover: "minimal",
    visibility: "limited",
  },
];

export const publications = {
  preprints: [featuredResearch, bayesianPreprint],
  manuscripts: limitedResearch.filter(
    (item) =>
      item.status === "Manuscript in progress" ||
      item.status === "Concept" ||
      item.status === "Under review",
  ),
  technicalReports: limitedResearch.filter((item) => item.status === "Prototype"),
  patent: {
    title: "On-Device Estimation of Social Masking and Latent Affect",
    status: "Patent pending" as const,
    identifier: "PCT/IB2025/060348",
  },
};

export const statusTaxonomy: ClaimStatus[] = [
  "Published",
  "Preprint",
  "Under review",
  "Manuscript in progress",
  "Prototype",
  "Patent pending",
  "Concept",
  "Research-use only",
  "PCT application filed",
];
