export type NavItem = {
  label: string;
  href: string;
};

export type ExternalLink = {
  label: string;
  value: string;
  href?: string;
  visible: boolean;
};

export type DownloadItem = {
  label: string;
  href: string;
  fileName: string;
};

export const siteConfig = {
  name: "Peiman Jannatipour",
  shortName: "Peiman JP",
  role: "Computational Neuroscience Researcher · EEG, Human Timing, Developmental Neuroimaging, Research Software, and Neurotechnology",
  baseUrl: "https://peimanjp.com",
  defaultTitle: "Peiman Jannatipour | Computational Neuroscience Researcher",
  description:
    "Research portfolio spanning computational neuroscience, EEG, temporal cognition, developmental neuroimaging, scientific software, evidence systems, and privacy-aware neurotechnology.",
  email: "peiman@peimanjp.com",
};

export const externalLinks = {
  email: {
    label: "Email",
    value: "peiman@peimanjp.com",
    href: "mailto:peiman@peimanjp.com",
    visible: true,
  },
  github: {
    label: "GitHub",
    value: "peimanjannatipour",
    href: "https://github.com/peimanjannatipour",
    visible: true,
  },
  orcid: {
    label: "ORCID",
    value: "0009-0009-3205-2423",
    href: "https://orcid.org/0009-0009-3205-2423",
    visible: true,
  },
  researchGate: {
    label: "ResearchGate",
    value: "Peiman-Jannatipour-2",
    href: "https://www.researchgate.net/profile/Peiman-Jannatipour-2",
    visible: true,
  },
  eegArticle: {
    label: "Sensor-Level EEG Preprint",
    value: "10.21203/rs.3.rs-9852649/v1",
    href: "https://doi.org/10.21203/rs.3.rs-9852649/v1",
    visible: true,
  },
  bayesianTiming: {
    label: "Bayesian Log-Time Clock",
    value: "10.2139/ssrn.6383218",
    href: "https://doi.org/10.2139/ssrn.6383218",
    visible: true,
  },
  graphSpacetime: {
    label: "Graph-Theoretic Spacetime Preprint",
    value: "10.2139/ssrn.5891994",
    href: "https://doi.org/10.2139/ssrn.5891994",
    visible: true,
  },
  ssrn: {
    label: "Graph-Theoretic Spacetime SSRN DOI",
    value: "10.2139/ssrn.5891994",
    href: "https://doi.org/10.2139/ssrn.5891994",
    visible: true,
  },
  pct: {
    label: "PCT application",
    value: "PCT/IB2025/060348",
    href: "/ndms",
    visible: true,
  },
  neurolabOS: {
    label: "NeuroLab OS Website",
    value: "neurolabos.peimanjp.com",
    href: "https://neurolabos.peimanjp.com/",
    visible: true,
  },
  ndms: {
    label: "NDMS Website",
    value: "ndms.peimanjp.com",
    href: "https://ndms.peimanjp.com/",
    visible: true,
  },
  primarySite: {
    label: "Peiman JP Primary Website",
    value: "peimanjp.com",
    href: "https://peimanjp.com/",
    visible: true,
  },
  website: {
    label: "Website",
    value: "peimanjp.com",
    href: siteConfig.baseUrl,
    visible: true,
  },
};

export const primaryCtas: NavItem[] = [
  { label: "View Research", href: "/research" },
  { label: "Publications & Manuscripts", href: "/publications" },
  { label: "Current Projects", href: "/projects" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "NeuroLab OS", href: "/neurolab-os" },
  { label: "Projects", href: "/projects" },
  { label: "NDMS / Patent", href: "/ndms" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
  { label: "Verification", href: "/verification" },
];

export const downloadItems: DownloadItem[] = [
  {
    label: "NeuroLab OS Manuscript PDF",
    href: "/assets/papers/neurolab-os-preprint.pdf",
    fileName: "neurolab-os-preprint.pdf",
  },
];
