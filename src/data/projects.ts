export type Project = {
  title: string;
  status: string;
  summary: string;
  href?: string;
  tags: string[];
  category: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export const projectCategories = [
  "Computational Neuroscience Preprints",
  "Developmental Neuroimaging Research",
  "Research Software",
  "Privacy-Preserving Neurotechnology",
  "Biomedical and Evidence Systems",
  "Exploratory Theoretical Modelling",
] as const;

export const projects: Project[] = [
  {
    title: "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias",
    status: "Research Square preprint with DOI",
    href: "/research/eeg-temporal-reproduction-bias",
    summary:
      "Across 19,419 trials from 27 participants, behavioural context explained most timing error; within-subject EEG calibration added a small, reliable predictive improvement.",
    tags: ["EEG", "Temporal cognition", "Residual prediction", "DOI"],
    category: "Computational Neuroscience Preprints",
    image: {
      src: "/images/stock-neuroscience-research.jpg",
      alt: "Biomedical neuroscience research environment.",
      caption: "Illustrative neuroscience research context; not an image from the study dataset.",
    },
  },
  {
    title: "A Bayesian Log-Time State-Space Clock for Human Time Reproduction",
    status: "SSRN preprint with DOI",
    href: "/research/bayesian-log-time-state-space-clock",
    summary:
      "Computational neuroscience preprint modelling human time reproduction with a Bayesian log-time state-space framework and explicit model diagnostics.",
    tags: ["Bayesian timing", "State-space model", "Time perception", "DOI"],
    category: "Computational Neuroscience Preprints",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Computational data-analysis workspace.",
      caption: "Illustrative computational-modelling context for Bayesian timing research.",
    },
  },
  {
    title: "ABCD Autism-ADHD Developmental Neuroimaging Research Line",
    status: "Research line",
    href: "/research/abcd-developmental-neuroimaging",
    summary:
      "ABCD-focused developmental neuroimaging work on adolescent brain maturation, resting-state connectivity, and dimensional autism/ADHD trait co-occurrence.",
    tags: ["ABCD", "Developmental neuroimaging", "Resting-state fMRI"],
    category: "Developmental Neuroimaging Research",
    image: {
      src: "/images/stock-lab-data-analysis.jpg",
      alt: "Researchers reviewing scientific data.",
      caption: "Illustrative research-review context for developmental neuroimaging.",
    },
  },
  {
    title: "NeuroLab OS",
    status: "Technical beta / research software",
    href: "/neurolab-os",
    summary:
      "Local-first research workbench for neural and biomedical time-series ingestion, explicit QC, model fitting, simulation, perturbation, provenance, and reporting.",
    tags: ["Electron", "FastAPI", "Neural time-series", "Reproducibility"],
    category: "Research Software",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Scientific data-analysis workspace.",
      caption: "Illustrative computational-workflow context for NeuroLab OS.",
    },
  },
  {
    title: "Masking Index Prototype",
    status: "NDMS · patent pending / technology development",
    href: "/ndms",
    summary:
      "NDMS privacy-aware multimodal neurotechnology programme tied to the PCT application, with emphasis on quality-aware multimodal inference, edge-oriented processing, and responsible-use boundaries.",
    tags: ["NDMS", "Privacy", "Multimodal AI", "Edge inference", "PCT application filed"],
    category: "Privacy-Preserving Neurotechnology",
    image: {
      src: "/images/inventor-photo.jpg",
      alt: "Peiman Jannatipour, inventor and researcher.",
      caption: "Peiman Jannatipour — inventor and project lead.",
    },
  },
  {
    title: "Robotic Hand Workbench",
    status: "Prototype",
    summary:
      "Robotics hand work associated with embedded-systems prototyping and biomedical engineering practice.",
    tags: ["Robotics", "Robotic hand", "Embedded systems", "Prototype"],
    category: "Biomedical and Evidence Systems",
    image: {
      src: "/images/stock-neuroscience-research.jpg",
      alt: "Biomedical research environment.",
      caption: "Illustrative laboratory context for biomedical prototyping.",
    },
  },
  {
    title: "SMIS-ODS",
    status: "Research-use concept",
    href: "/projects/smis-ods",
    summary:
      "Structured evidence-review system that maps supplement claims to sources, study designs, outcome relevance, source reliability, support direction, and risk of bias.",
    tags: ["Evidence systems", "Structured review", "Risk of bias", "Misinformation screening"],
    category: "Biomedical and Evidence Systems",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Structured scientific data-review workspace.",
      caption: "Illustrative data-review context for evidence assessment.",
    },
  },
  {
    title: "A Graph-Theoretic Framework for Representing Spacetime as Temporal Layers of Spatial Graphs",
    status: "SSRN preprint",
    href: "https://doi.org/10.2139/ssrn.5891994",
    summary:
      "Exploratory theoretical modelling work representing spacetime as temporal layers of spatial graphs.",
    tags: ["Exploratory theory", "Graph modelling", "Discrete spacetime", "SSRN"],
    category: "Exploratory Theoretical Modelling",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Computational modelling workspace.",
      caption: "Illustrative computational-modelling context for exploratory graph-theoretic work.",
    },
  },
  {
    title: "Duality-of-Time Manuscript",
    status: "Manuscript in preparation",
    summary:
      "Theoretical manuscript direction around time perception and physical-time framing.",
    tags: ["Time perception", "Manuscript in preparation"],
    category: "Exploratory Theoretical Modelling",
  },
];
