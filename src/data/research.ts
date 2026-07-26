import { externalLinks } from "./links";

export type ClaimStatus =
  | "Published"
  | "Research Square preprint with DOI"
  | "SSRN preprint"
  | "SSRN preprint with DOI"
  | "Preprint"
  | "Under review"
  | "Manuscript in progress"
  | "Prototype"
  | "Patent pending"
  | "Concept"
  | "Research line"
  | "Research-use only"
  | "PCT application filed"
  | "Manuscript in preparation";

export type ResearchItem = {
  title: string;
  status: ClaimStatus;
  cover?: "spacetime" | "bayesian" | "minimal";
  summary?: string;
  keywords?: string[];
  role?: string;
  href?: string;
  linkLabel?: string;
  doi?: string;
  affiliation?: string;
  date?: string;
  visibility: "detailed" | "limited";
};

export const eegTemporalReproductionBias: ResearchItem = {
  title: "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias",
  status: "Research Square preprint with DOI",
  href: "/research/eeg-temporal-reproduction-bias",
  linkLabel: "Open article page",
  doi: "https://doi.org/10.21203/rs.3.rs-9852649/v1",
  date: "2026",
  summary:
    "Across 19,419 trials from 27 participants, behavioural context and trial history explained most temporal reproduction error. Within-subject EEG calibration added a small but reliable improvement in held-out prediction (0.156%; permutation p = 0.010), without supporting a subject-independent biomarker or direct neural-clock claim.",
  keywords: [
    "temporal reproduction",
    "time perception",
    "EEG",
    "residual prediction",
    "leave-one-subject-out cross-validation",
    "Bayesian timing",
    "sensor-level neural state",
  ],
  role: "Research Square preprint / DOI",
  cover: "minimal",
  visibility: "detailed",
};

export const bayesianLogTimeClock: ResearchItem = {
  title: "A Bayesian Log-Time State-Space Clock for Human Time Reproduction",
  status: "SSRN preprint with DOI",
  href: "/research/bayesian-log-time-state-space-clock",
  linkLabel: "Open article page",
  doi: "https://doi.org/10.2139/ssrn.6383218",
  affiliation: "Near East University",
  summary:
    "A Bayesian log-time state-space model reproduces the central-tendency pattern in 15,264 cleaned trials (R² = 0.7099). Its stationary noise model does not reproduce the observed decline in variability across durations, providing a clear target for heteroscedastic or multi-source models.",
  keywords: [
    "time reproduction",
    "Bayesian timing",
    "log-time",
    "state-space model",
    "Kalman-like prior integration",
    "central tendency",
    "temporal cognition",
  ],
  role: "SSRN preprint / DOI",
  cover: "bayesian",
  visibility: "detailed",
};

export const featuredResearch: ResearchItem = {
  title:
    "Graph-Theoretic Framework for Representing Spacetime as Temporal Layers of Spatial Graphs",
  status: "SSRN preprint",
  href: externalLinks.ssrn.href,
  linkLabel: `DOI: ${externalLinks.ssrn.value}`,
  summary:
    "Exploratory theoretical modelling work representing spacetime as ordered layers of spatial graphs, with attention to discrete structures, invariance metrics, and Lorentz-aware transformations.",
  keywords: [
    "exploratory theoretical modelling",
    "graph theory",
    "discrete spacetime",
    "temporal layers",
    "invariance",
  ],
  role: "Exploratory theoretical modelling",
  cover: "spacetime",
  visibility: "detailed",
};

export const bayesianPreprint = bayesianLogTimeClock;

export const corticalStateTemporalInference: ResearchItem = {
  title: "Cortical State Temporal Inference Manuscript",
  status: "Manuscript in preparation",
  role: "Systems neuroscience",
  href: "/research/cortical-state-temporal-inference",
  linkLabel: "Open status page",
  summary:
    "Ongoing manuscript on cortical-state dynamics, temporal inference, and EEG/fMRI-informed analysis. Methods and results will be added when a public manuscript is available.",
  cover: "bayesian",
  visibility: "limited",
};

export const abcdDevelopmentalNeuroimaging: ResearchItem = {
  title: "ABCD Autism-ADHD Developmental Neuroimaging Research Line",
  status: "Research line",
  role: "ABCD developmental neuroimaging",
  summary:
    "Developmental neuroimaging work using ABCD data to examine adolescent brain maturation, resting-state connectivity, and dimensional co-occurrence of autism- and ADHD-related traits.",
  keywords: [
    "ABCD developmental neuroimaging",
    "autism-ADHD traits",
    "resting-state connectivity",
    "adolescent brain maturation",
    "dimensional neurodevelopment",
  ],
  cover: "minimal",
  visibility: "detailed",
};

export const limitedResearch: ResearchItem[] = [
  abcdDevelopmentalNeuroimaging,
  corticalStateTemporalInference,
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
    status: "Manuscript in preparation",
    cover: "minimal",
    visibility: "limited",
  },
];

export const publications = {
  neuroscienceArticles: [eegTemporalReproductionBias, bayesianLogTimeClock],
  preprints: [bayesianLogTimeClock, featuredResearch],
  manuscripts: limitedResearch.filter(
    (item) =>
      item.status === "Manuscript in progress" ||
      item.status === "Manuscript in preparation" ||
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
  "Research Square preprint with DOI",
  "SSRN preprint",
  "SSRN preprint with DOI",
  "Preprint",
  "Under review",
  "Manuscript in progress",
  "Manuscript in preparation",
  "Prototype",
  "Patent pending",
  "Concept",
  "Research line",
  "Research-use only",
  "PCT application filed",
];
