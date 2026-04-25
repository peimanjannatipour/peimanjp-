export type Project = {
  title: string;
  status: string;
  summary: string;
  href?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "NeuroLab OS",
    status: "Pre-production",
    href: "/neurolab-os",
    summary:
      "Research-use workflow layer for neural and biomedical time-series ingestion, validation, QC, fitting, simulation, and reporting.",
    tags: ["Next.js", "FastAPI", "Time-series", "Reproducibility"],
  },
  {
    title: "SMIS-ODS",
    status: "Concept",
    summary:
      "Supplement misinformation immune system concept for structured evidence review and cautious health-claim interpretation.",
    tags: ["Evidence review", "Health claims", "Research tooling"],
  },
  {
    title: "Graph-Spacetime Manuscript",
    status: "Under review",
    summary:
      "Manuscript under review, grounded in the SSRN graph-spacetime preprint.",
    tags: ["Graph theory", "Under review", "SSRN preprint basis"],
  },
  {
    title: "Duality-of-Time Manuscript",
    status: "Under review",
    summary:
      "Manuscript under review. Public technical detail remains limited until release.",
    tags: ["Time perception", "Under review", "Manuscript"],
  },
  {
    title: "Masking Index Prototype",
    status: "Patent pending",
    href: "/patent",
    summary:
      "On-device multimodal masking-estimation prototype concept tied to the PCT application and non-diagnostic positioning.",
    tags: ["Privacy", "Multimodal AI", "PCT application filed"],
  },
];
