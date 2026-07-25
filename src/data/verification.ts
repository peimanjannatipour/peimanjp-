import { externalLinks } from "./links";
import { statusTaxonomy } from "./research";

export const verificationItems = [
  {
    label: "ORCID",
    value: externalLinks.orcid.value,
    href: externalLinks.orcid.href,
    status: "Verified link",
  },
  {
    label: "GitHub",
    value: externalLinks.github.value,
    href: externalLinks.github.href,
    status: "Verified profile link",
  },
  {
    label: "SSRN DOI",
    value: externalLinks.ssrn.value,
    href: externalLinks.ssrn.href,
    status: "Preprint link",
  },
  {
    label: "Patent",
    value: externalLinks.pct.value,
    status: "PCT application filed",
  },
  {
    label: "Near East University Robotics Lab",
    value:
      "Verified research and institutional context. Role titles, project dates, and formal appointment wording should match available records exactly.",
    status: "Verified link",
  },
  {
    label: "Near East University Faculty of Engineering / Medical Research",
    value:
      "CV-listed medical research and biomedical engineering context. Formal role wording should match available records exactly.",
    href: "https://neu.edu.tr/?lang=en",
    status: "Verified link",
  },
  {
    label: "Universita Campus Bio-Medico di Roma (UCBM)",
    value:
      "Biomedical engineering context listed in the CV. Formal role wording should match available records exactly.",
    href: "https://www.unicampus.it/en/",
    status: "Verified link",
  },
];

export const hiddenIdentifiers = [
  "Google Scholar",
  "Web of Science ResearcherID",
  "LinkedIn",
];

export const claimStatusRule = {
  title: "Public claim status rule",
  description:
    "Every public research, invention, software, or publication claim should map to one of the status labels below. Missing identifiers stay hidden until verified.",
  statuses: statusTaxonomy,
};
