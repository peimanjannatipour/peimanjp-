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
    status: "User-provided PCT application number",
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
