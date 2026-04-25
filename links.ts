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
  role: "Researcher | Inventor | Neurotechnology Builder",
  baseUrl: "https://ndms13.vercel.app",
  email: "peiman.jannatipour@gmail.com",
  defaultTitle:
    "Peiman Jannatipour - Researcher, Inventor, Neurotechnology Builder",
  description:
    "Peiman Jannatipour is a researcher, inventor, and neurotechnology builder working across computational neuroscience, biomedical systems, privacy-preserving AI, and reproducible research software.",
};

export const externalLinks = {
  email: {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
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
  ssrn: {
    label: "SSRN DOI",
    value: "10.2139/ssrn.5891994",
    href: "https://dx.doi.org/10.2139/ssrn.5891994",
    visible: true,
  },
  pct: {
    label: "PCT application",
    value: "PCT/IB2025/060348",
    visible: true,
  },
  website: {
    label: "Website",
    value: "ndms13.vercel.app",
    href: siteConfig.baseUrl,
    visible: true,
  },
  googleScholar: {
    label: "Google Scholar",
    value: "",
    visible: false,
  },
  webOfScience: {
    label: "Web of Science ResearcherID",
    value: "",
    visible: false,
  },
  linkedin: {
    label: "LinkedIn",
    value: "",
    visible: false,
  },
} satisfies Record<string, ExternalLink>;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Patent", href: "/patent" },
  { label: "NeuroLab OS", href: "/neurolab-os" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
  { label: "Verification", href: "/verification" },
];

export const primaryCtas: NavItem[] = [
  { label: "View Research", href: "/research" },
  { label: "View Patent", href: "/patent" },
  { label: "View NeuroLab OS", href: "/neurolab-os" },
  { label: "View CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const downloadItems: DownloadItem[] = [
  {
    label: "Download CV PDF",
    href: "/docs/peiman-jannatipour-cv.pdf",
    fileName: "peiman-jannatipour-cv.pdf",
  },
  {
    label: "Research portfolio PDF",
    href: "/docs/research-portfolio.pdf",
    fileName: "research-portfolio.pdf",
  },
  {
    label: "Patent summary PDF",
    href: "/docs/patent-summary.pdf",
    fileName: "patent-summary.pdf",
  },
  {
    label: "NeuroLab OS overview PDF",
    href: "/docs/neurolab-os-overview.pdf",
    fileName: "neurolab-os-overview.pdf",
  },
];

