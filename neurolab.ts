export const neurolab = {
  title: "NeuroLab OS",
  subtitle: "Research-grade workflow layer for neural and biomedical time-series",
  status: ["Pre-production", "Research-use only"],
  description:
    "NeuroLab OS is a pre-production research platform for neural and biomedical time-series workflows: ingestion, validation, QC, model fitting, simulation, optimization, and reproducible reports.",
  modules: [
    {
      name: "Data ingestion",
      scope: "EEG, fMRI ROI/BOLD, generic time-series",
    },
    {
      name: "Validation",
      scope: "Schema checks, file checks, metadata checks",
    },
    {
      name: "Preprocessing and QC",
      scope: "Artifact checks, review status, quality notes",
    },
    {
      name: "Model recommendation",
      scope: "Candidate models based on data type and task",
    },
    {
      name: "Model fitting",
      scope: "Parameter estimation and reproducible fitting runs",
    },
    {
      name: "Virtual interventions",
      scope: "Simulation-based exploration of intervention scenarios",
    },
    {
      name: "Optimization",
      scope: "Parameter search and workflow optimization",
    },
    {
      name: "Reports",
      scope: "Methods, QC appendix, provenance summary",
    },
  ],
  architecture: {
    backend: ["FastAPI", "SQLAlchemy", "Alembic", "Celery", "Redis"],
    frontend: ["Next.js", "TypeScript", "Tailwind"],
    workflow: [
      "Upload",
      "Validate",
      "Preprocess",
      "QC",
      "Recommend",
      "Fit",
      "Simulate",
      "Optimize",
      "Report",
    ],
  },
};
