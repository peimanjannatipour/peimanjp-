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
      alt: "Researchers working in a biomedical laboratory.",
      caption: "Stock laboratory context for the EEG and temporal cognition research.",
    },
  },
  {
    title: "A Bayesian Log-Time State-Space Clock for Human Time Reproduction",
    status: "SSRN preprint with DOI",
    href: "/research/bayesian-log-time-state-space-clock",
    summary:
      "Computational neuroscience preprint modelling human time reproduction with Bayesian log-time state-space inference.",
    tags: ["Bayesian timing", "State-space model", "Time perception", "DOI"],
    category: "Computational Neuroscience Preprints",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Researcher working with a data-analysis notebook.",
      caption: "Stock computational-modelling context for Bayesian timing research.",
    },
  },
  {
    title: "ABCD Autism-ADHD Developmental Neuroimaging Research Line",
    status: "Research line",
    summary:
      "ABCD-focused developmental neuroimaging work on adolescent brain maturation, resting-state connectivity, and dimensional autism/ADHD trait co-elevation.",
    tags: ["ABCD", "Developmental neuroimaging", "Resting-state fMRI"],
    category: "Developmental Neuroimaging Research",
    image: {
      src: "/images/stock-lab-data-analysis.jpg",
      alt: "Researchers reviewing laboratory data.",
      caption: "Stock research-review context for developmental neuroimaging.",
    },
  },
  {
    title: "NeuroLab OS",
    status: "Pre-production",
    href: "/neurolab-os",
    summary:
      "Research-use workflow layer for neural and biomedical time-series ingestion, validation, QC, fitting, simulation, and reporting.",
    tags: ["Next.js", "FastAPI", "Time-series", "Reproducibility"],
    category: "Research Software",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Researcher working with a data-analysis notebook.",
      caption: "Stock data-analysis context for the neural time-series workflow.",
    },
  },
  {
    title: "Masking Index Prototype",
    status: "Patent pending",
    href: "/patent",
    summary:
      "On-device multimodal masking-estimation prototype concept tied to the PCT application and privacy-preserving neurotechnology positioning.",
    tags: ["Privacy", "Multimodal AI", "PCT application filed"],
    category: "Privacy-Preserving Neurotechnology",
  },
  {
    title: "Robotic Hand Workbench",
    status: "Prototype",
    summary:
      "Robotics hand work associated with the Near East University Robotics Lab context and embedded-systems prototyping.",
    tags: ["Robotics", "Robotic hand", "Embedded systems", "Prototype"],
    category: "Biomedical and Evidence Systems",
    image: {
      src: "/images/stock-neuroscience-research.jpg",
      alt: "Researchers working in a biomedical laboratory.",
      caption: "Stock laboratory context for biomedical prototyping.",
    },
  },
  {
    title: "SMIS-ODS",
    status: "Concept",
    href: "/projects/smis-ods",
    summary:
      "Structured evidence-review system that maps supplement claims to sources, study designs, outcome relevance, and risk of bias.",
    tags: ["Evidence systems", "Structured evidence review", "Risk of bias"],
    category: "Biomedical and Evidence Systems",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Researcher reviewing a structured data analysis.",
      caption: "Stock data-review context for structured evidence assessment.",
    },
  },
  {
    title: "Graph-Spacetime Manuscript",
    status: "Manuscript in preparation",
    summary:
      "Exploratory theoretical modelling manuscript grounded in the SSRN graph-spacetime preprint.",
    tags: ["Exploratory theory", "Graph modelling", "Under review"],
    category: "Exploratory Theoretical Modelling",
    image: {
      src: "/images/stock-data-dashboard.jpg",
      alt: "Illustrative data-analysis workspace used as context for computational modelling.",
      caption: "Stock computational-modelling context for exploratory graph-theoretic work.",
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
