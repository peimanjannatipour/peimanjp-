import { externalLinks, primaryCtas, siteConfig } from "./links";

export const profile = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  nationality: "Iranian",
  role: siteConfig.role,
  hero:
    "Peiman Jannatipour is a computational neuroscience researcher, inventor, and neurotechnology systems developer working across EEG analysis, temporal cognition, Bayesian timing models, ABCD developmental neuroimaging, neural time-series modelling, privacy-preserving neurotechnology, biomedical systems, and research software.",
  about: [
    "Peiman Jannatipour builds inspectable research artifacts: manuscripts, code, workflows, and pre-production prototypes.",
    "The portfolio sits across computational neuroscience, EEG/fMRI analysis, biomedical systems, theoretical modeling, robotics, privacy-preserving AI, and full-stack research software.",
    "Public claims are intentionally status-labeled, with detailed technical disclosure reserved for posted preprints and verified public artifacts.",
  ],
  principles: [
    "Artifact-first research: manuscripts, code, diagrams, prototypes, and reproducible workflows.",
    "Conservative public claims: preprint, manuscript, prototype, concept, or patent-pending status is always explicit.",
    "Privacy-aware systems: sensitive signals should be minimized, processed locally when possible, and explained with caution.",
    "Research-use positioning: prototypes are not clinical diagnostic products unless validated and regulated as such.",
  ],
  credibility: [
    externalLinks.orcid,
    externalLinks.eegArticle,
    externalLinks.bayesianTiming,
    externalLinks.pct,
    externalLinks.github,
  ],
  ctas: primaryCtas,
  affiliations: [
    {
      institution: "Near East University",
      role: "Faculty of Engineering / medical research interface",
      iconUrl: "https://www.google.com/s2/favicons?domain=neu.edu.tr&sz=64",
      proofUrl: "https://neu.edu.tr/?lang=en",
      visible: true,
    },
    {
      institution: "Near East University - Faculty of Engineering / Medical Research",
      role: "CV-listed medical research and biomedical engineering context",
      iconUrl: "https://www.google.com/s2/favicons?domain=neu.edu.tr&sz=64",
      proofUrl: "https://neu.edu.tr/?lang=en",
      visible: true,
    },
    {
      institution: "Near East University Robotics Lab",
      role: "Verified research and institutional context",
      iconUrl: "https://www.google.com/s2/favicons?domain=neu.edu.tr&sz=64",
      proofUrl: "https://neu.edu.tr/?lang=en",
      visible: true,
    },
    {
      institution: "Universita Campus Bio-Medico di Roma (UCBM), Rome, Italy",
      role: "Biomedical Engineering context",
      iconUrl:
        "https://www.google.com/s2/favicons?domain=unicampus.it&sz=64",
      proofUrl: "https://www.unicampus.it/en/",
      visible: true,
    },
  ] as Array<{
    institution: string;
    role: string;
    iconUrl?: string;
    startDate?: string;
    endDate?: string;
    proofUrl?: string;
    visible: boolean;
  }>,
};
