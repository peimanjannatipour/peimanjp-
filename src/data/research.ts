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
  doi: externalLinks.eegArticle.href,
  date: "2026",
  summary:
    "Across 19,419 trials from 27 participants, behavioural context and trial history explained most temporal reproduction error. Within-subject EEG calibration added a small but reliable improvement in held-out prediction (0.156%; permutation p = 0.010), without supporting a subject-independent biomarker or direct neural-clock claim.",
  keywords: [
    "temporal reproduction",
    "time perception",
    "EEG",
    "residual prediction",
    "leave-one-subject-out cross-validation",
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
  doi: externalLinks.bayesianTiming.href,
  summary:
    "A Bayesian log-time state-space model reproduces the central-tendency pattern in 15,264 cleaned trials (R² = 0.7099). Its stationary noise model does not reproduce the observed decline in variability across durations, providing a clear target for heteroscedastic or multi-source models.",
  keywords: [
    "time reproduction",
    "Bayesian timing",
    "log-time",
    "state-space model",
    "central tendency",
    "temporal cognition",
  ],
  role: "SSRN preprint / DOI",
  cover: "bayesian",
  visibility: "detailed",
};

export const featuredResearch: ResearchItem = {
  title:
    "A Graph-Theoretic Framework for Representing Spacetime as Temporal Layers of Spatial Graphs",
  status: "SSRN preprint",
  href: externalLinks.graphSpacetime.href,
  linkLabel: `DOI: ${externalLinks.graphSpacetime.value}`,
  doi: externalLinks.graphSpacetime.href,
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
  title:
    "Cortical State Dynamics Support a Near-Linear Physiological Proxy for Temporal Inference Across fMRI, EEG, and Simulation",
  status: "Manuscript in preparation",
  role: "Systems neuroscience",
  href: "/research/cortical-state-temporal-inference",
  linkLabel: "Open manuscript status page",
  summary:
    "Systems-neuroscience manuscript on cortical-state dynamics and temporal inference across fMRI, EEG, and simulation. The public page intentionally limits detail while the work is not available as a public manuscript.",
  cover: "bayesian",
  visibility: "limited",
};

export const abcdDevelopmentalNeuroimaging: ResearchItem = {
  title: "ABCD Autism-ADHD Developmental Neuroimaging Research Line",
  status: "Research line",
  role: "ABCD developmental neuroimaging",
  href: "/research/abcd-developmental-neuroimaging",
  linkLabel: "Open research-line page",
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
  preprints: [eegTemporalReproductionBias, bayesianLogTimeClock, featuredResearch],
  manuscripts: [corticalStateTemporalInference, ...limitedResearch.filter(
    (item) =>
      item !== corticalStateTemporalInference &&
      (item.status === "Manuscript in progress" ||
        item.status === "Manuscript in preparation" ||
        item.status === "Concept" ||
        item.status === "Under review"),
  )],
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
