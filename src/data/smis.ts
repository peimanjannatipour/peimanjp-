export const smisOds = {
  name: "SMIS-ODS: Supplement Claim Evidence and Misinformation Review System",
  shortName: "SMIS-ODS",
  category: "Evidence Systems & Scientific Decision Support",
  status: ["Concept", "Research-use only"],
  route: "/projects/smis-ods",
  image: {
    src: "https://images.pexels.com/photos/9574543/pexels-photo-9574543.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Illustrative research team reviewing results at a workstation.",
    caption: "Stock research-review context for scientific claim verification.",
  },
  summary:
    "SMIS-ODS is an evidence-review system for organizing and evaluating supplement-related health claims. It separates claim text, evidence sources, study type, source reliability, risk of bias, supporting versus non-supporting evidence, and outcome relevance. The goal is to reduce misinformation by making the evidence structure behind supplement claims easier to inspect.",
  positioning:
    "SMIS-ODS is a structured evidence-review and claim-verification system for supplement and health-related claims. It is designed to evaluate claim status, source reliability, study type, outcome relevance, risk of bias, and misinformation risk.",
  limitations:
    "SMIS-ODS does not diagnose conditions, prescribe supplements, replace clinicians, or act as a supplement recommendation engine. It is a structured evidence-review and misinformation-screening system intended for research, review, and decision-support contexts.",
  evaluates: [
    "Claim text and implied health outcome",
    "Evidence source and source reliability",
    "Study type and evidence category",
    "Outcome relevance",
    "Risk of bias",
    "Supporting versus non-supporting evidence",
    "Misinformation risk",
  ],
  faq: [
    {
      question: "What is SMIS-ODS?",
      answer:
        "SMIS-ODS is a structured evidence-review and claim-verification system for supplement and health-related claims.",
    },
    {
      question: "Does SMIS-ODS recommend supplements?",
      answer:
        "No. It organizes and reviews evidence structure; it is not a recommendation engine.",
    },
    {
      question: "Does SMIS-ODS provide health-care guidance?",
      answer:
        "No. It is a research-use evidence organization and misinformation-screening system, not a substitute for clinicians.",
    },
    {
      question: "What does SMIS-ODS evaluate?",
      answer:
        "It evaluates claim text, source reliability, study type, outcome relevance, risk of bias, support direction, and misinformation risk.",
    },
    {
      question: "How is SMIS-ODS different from a generic supplement website?",
      answer:
        "It separates claims from evidence sources and makes reliability, bias, and support status inspectable instead of presenting simplified product-style claims.",
    },
  ],
};
