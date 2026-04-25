import { externalLinks, primaryCtas, siteConfig } from "./links";

export const profile = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  nationality: "Iranian",
  role: siteConfig.role,
  hero:
    "I build research-oriented artifacts across neurotechnology, computational modeling, biomedical systems, and privacy-preserving AI.",
  about: [
    "Peiman Jannatipour builds inspectable research artifacts: manuscripts, code, workflows, and pre-production prototypes.",
    "The portfolio sits across computational neuroscience, biomedical systems, theoretical modeling, privacy-preserving AI, and full-stack research software.",
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
    externalLinks.pct,
    externalLinks.ssrn,
    externalLinks.github,
  ],
  ctas: primaryCtas,
  affiliations: [
    {
      institution: "Near East University",
      role: "Affiliation",
      iconUrl: "https://www.google.com/s2/favicons?domain=neu.edu.tr&sz=64",
      proofUrl: "https://neu.edu.tr/?lang=en",
      visible: true,
    },
    {
      institution: "UCBM Rome",
      role: "Affiliation",
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
