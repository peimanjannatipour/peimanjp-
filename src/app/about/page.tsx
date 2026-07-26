import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

const aboutFaq = [
  {
    question: "Who is Peiman Jannatipour?",
    answer:
      "Peiman Jannatipour is a computational neuroscience researcher and research-software builder working on human time perception, EEG, Bayesian modelling, and reproducible neural time-series analysis.",
  },
  {
    question: "What is Peiman Jannatipour's research focus?",
    answer:
      "The central research focus is interpretable modelling of hidden states in neural, behavioural, and biomedical systems, especially human time reproduction, temporal bias, cortical-state modelling, and reproducible neural time-series workflows.",
  },
  {
    question: "What does inspectable research artifact mean?",
    answer:
      "An inspectable research artifact is a manuscript, preprint, codebase, workflow, system diagram, prototype, or patent-pending invention record that can be evaluated by status, method, assumptions, limitations, and public evidence.",
  },
  {
    question: "How do NDMS and NeuroLab OS fit into the portfolio?",
    answer:
      "NDMS extends hidden-state modelling into privacy-preserving neurotechnology. NeuroLab OS addresses the software infrastructure layer for neural and biomedical time-series workflows.",
  },
  {
    question: "Are the projects clinical tools?",
    answer:
      "No. The site frames these projects as research articles, preprints, manuscripts, prototypes, patent-pending invention work, or research-use software unless a verified clinical or regulatory status is explicitly provided.",
  },
  {
    question: "How should editors and collaborators evaluate the claims?",
    answer:
      "Each output is identified as a preprint, manuscript in preparation, research line, prototype, PCT application, or exploratory model.",
  },
];

const mainAboutParagraphs = [
  "Peiman Jannatipour is a computational neuroscience researcher and research-software builder. His main work examines human time perception with EEG, behavioural modelling, and Bayesian methods; related work includes developmental neuroimaging and privacy-aware neurotechnology.",
  "The EEG preprint analyzes 19,419 target–reproduction trials from 27 participants. Behavioural context and trial history explain most timing error. Within-subject EEG calibration adds a small but statistically reliable predictive increment, without establishing a subject-independent biomarker or direct neural clock.",
  "The Bayesian timing preprint models 15,264 cleaned trials in log-time. It captures the central-tendency pattern (R² = 0.7099) but misses the observed duration-dependent variance, identifying a concrete limitation of stationary-noise models.",
  "Across both studies, the recurring question is how latent state, recent history, and uncertainty shape behaviour. NeuroLab OS extends that concern into reproducible workflows for neural and biomedical time-series data.",
  "The PCT-filed masking-system work explores on-device multimodal estimation with data minimization and human review. It is not presented as a validated diagnostic tool.",
  "Additional work includes an ABCD-focused developmental-neuroimaging research line, mitochondrial modelling, the SMIS-ODS evidence-review concept, and exploratory graph-theoretic modelling.",
];

export const metadata: Metadata = createPageMetadata({
  title: "About Peiman Jannatipour",
  description:
    "About Peiman Jannatipour | Computational Neuroscience and Neurotechnology Systems",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd(aboutFaq)} />
      <Section
        description="Computational neuroscience, EEG, temporal cognition, Bayesian timing models, ABCD developmental neuroimaging, privacy-preserving neurotechnology, and research software."
        eyebrow="About"
        headingLevel={1}
        title="Peiman Jannatipour"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              alt="Researcher working with a data-analysis notebook."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="/images/stock-data-dashboard.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock data-analysis context for the computational neuroscience and neurotechnology systems portfolio.
            </figcaption>
          </figure>

          <div className="space-y-5 self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Research and technical profile
            </p>
            <p className="text-base leading-8 text-slate-700">
              {mainAboutParagraphs[0]}
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="The page foregrounds temporal cognition, EEG modelling, Bayesian timing, and reviewable research artifacts."
        eyebrow="Neuroscience axis"
        title="Temporal cognition and hidden-state modelling"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {mainAboutParagraphs.slice(1, 4).map((paragraph) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-6"
              key={paragraph}
            >
              <p className="text-sm leading-7 text-slate-600">{paragraph}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="Neurotechnology and software directions are presented as research-use systems with conservative claim boundaries."
        eyebrow="Systems portfolio"
        title="NDMS, NeuroLab OS, and supporting systems"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {mainAboutParagraphs.slice(4).map((paragraph) => (
            <article
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              key={paragraph}
            >
              <p className="text-sm leading-7 text-slate-600">{paragraph}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Institutional names are shown as research and institutional contexts without adding unverified role titles, dates, appointment types, or employment status."
        eyebrow="Research contexts"
        title="Affiliation and education contexts"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <Image
              alt="Illustrative laboratory team reviewing research data."
              className="aspect-[4/3] w-full object-cover"
              height={720}
              src="/images/stock-neuroscience-research.jpg"
              width={960}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock laboratory context for biomedical prototyping.
            </figcaption>
          </figure>

          <div className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm leading-7 text-slate-600">
                Near East University appears as the author affiliation on the
                public Bayesian timing preprint. Biomedical Engineering at
                UCBM is listed in the author-supplied CV.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Listed research and institutional contexts
              </p>
              <div className="mt-4 grid gap-3">
                {profile.affiliations
                  .filter((item) => item.visible)
                  .map((item) => (
                    <a
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                      href={item.proofUrl}
                      key={item.institution}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.iconUrl ? (
                        <Image
                          alt=""
                          className="h-7 w-7 rounded-md border border-slate-200 bg-white object-contain p-0.5"
                          height={28}
                          src={item.iconUrl}
                          unoptimized
                          width={28}
                        />
                      ) : null}
                      <span>
                        <span className="block">{item.institution}</span>
                        <span className="mt-0.5 block text-xs font-medium leading-5 text-slate-500">
                          Research context; formal wording follows available
                          records
                        </span>
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="Short answers for editors, reviewers, professors, mentors, and collaborators."
        eyebrow="FAQ"
        title="About Peiman Jannatipour"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aboutFaq.map((item) => (
            <article
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              key={item.question}
            >
              <h2 className="text-base font-semibold tracking-tight text-slate-950">
                {item.question}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
