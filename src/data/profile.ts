import { externalLinks, primaryCtas, siteConfig } from "./links";

export const profile = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  nationality: "Iranian",
  role: siteConfig.role,
  hero:
    "I study how context, recent experience, and neural state shape human time perception. My work combines EEG, behavioural modelling, Bayesian methods, and developmental neuroimaging; I also build research software and privacy-aware neurotechnology.",
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
      role: "Author affiliation on the Bayesian timing preprint",
      iconUrl: "https://www.google.com/s2/favicons?domain=neu.edu.tr&sz=64",
      proofUrl: "https://doi.org/10.2139/ssrn.6383218",
      visible: true,
    },
    {
      institution: "Universita Campus Bio-Medico di Roma (UCBM), Rome, Italy",
      role: "Biomedical Engineering context listed in the CV",
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
