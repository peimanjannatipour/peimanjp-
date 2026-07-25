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
      "Peiman Jannatipour is a computational neuroscience researcher, inventor, and neurotechnology systems developer whose portfolio is anchored by EEG, temporal cognition, Bayesian timing, ABCD developmental neuroimaging, privacy-preserving neurotechnology, biomedical modelling, robotics prototype context, and research software.",
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
      "Claims should be read through their explicit evidence labels: research article, preprint, manuscript, prototype, patent pending, research-use only, or exploratory theoretical modelling.",
  },
];

const mainAboutParagraphs = [
  "Peiman Jannatipour is a computational neuroscience researcher, inventor, and neurotechnology systems developer working across EEG analysis, temporal cognition, Bayesian timing models, ABCD developmental neuroimaging, biomedical systems, privacy-preserving neurotechnology, robotics prototypes, and research software. His current research identity is anchored by neuroscience work on human time reproduction and neurodevelopment: how the brain and behaviour construct, bias, and update estimates of duration under uncertainty, and how adolescent neurodevelopment can be studied with conservative dimensional neuroimaging methods.",
  "The strongest public research axis of this portfolio is temporal cognition. In Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias, Jannatipour tests whether sensor-level EEG features explain residual timing error beyond behavioural structure. The study reconstructs verified target-reproduction trials, models signed logarithmic reproduction error using task and history covariates, and then asks whether multiband EEG features add incremental predictive value under cross-validation, regularization, control analyses, ablation analyses, and subject-level inference. The interpretation is deliberately conservative: the work does not claim a subject-independent EEG biomarker or a direct neural clock. Instead, it supports a narrower systems-neuroscience claim that human temporal reproduction is dominated by behavioural context and history, while being weakly modulated by individualized, calibration-dependent cortical state.",
  "A second major neuroscience article, A Bayesian Log-Time State-Space Clock for Human Time Reproduction, provides the behavioural and computational modelling backbone for the EEG work. This article models human time reproduction as Bayesian state-space inference in log-time, combining Kalman-like prior integration with lognormal observation noise. Its value is not only fit quality, but falsification: the study identifies a mean-variance dissociation where empirical variability and posterior-predictive variability do not follow the same pattern. That gap turns the model from a fitting exercise into a benchmark for next-generation heteroscedastic or multi-source timing models.",
  "The unifying theme across Jannatipour's portfolio is interpretable modelling of hidden states. In the neuroscience articles, hidden states appear as timing bias, cortical state, trial history, Bayesian priors, residual dynamics, and uncertainty-weighted integration. In NeuroLab OS, the same theme becomes a software-infrastructure problem: how neural and biomedical time-series data can move through ingestion, preprocessing, quality control, feature extraction, model fitting, simulation, and reproducible reporting without becoming a black box. NeuroLab OS is therefore best understood as research-use infrastructure for neural and biomedical modelling, not as an automated clinical classification system.",
  "NDMS extends the hidden-state modelling theme into privacy-preserving neurotechnology. It is a patent-pending, consent-aware system direction focused on neurodivergent social masking, internal load, and mismatch between outward presentation and possible support needs. Its correct framing is research-use and support-oriented: a human-in-the-loop framework for making complex masking-related patterns easier to inspect under ethical boundaries of consent, uncertainty, and participant agency.",
  "Jannatipour's broader technical work also includes an ABCD-focused autism-ADHD developmental neuroimaging line, mitochondrial and biomedical modelling, evidence-system design such as SMIS-ODS, robotics prototype context, and exploratory theoretical modelling. The ABCD line is framed around adolescent brain maturation, resting-state connectivity, and dimensional autism/ADHD trait co-elevation. Graph-theoretic spacetime remains part of the portfolio, but it is secondary to the neuroscience axis and should be read as exploratory theoretical work rather than the main identity of the site.",
  "The portfolio is intentionally artifact-first. It separates research articles, SSRN preprints, manuscripts, patent-pending invention work, pre-production prototypes, software systems, and exploratory models. This distinction matters because computational neuroscience, neurotechnology, and biomedical modelling are easy to overstate when complex signals are reduced to simple claims. The site therefore prioritizes evidence before claims, interpretability before automation, consent before measurement, reproducibility before presentation, and careful status labels before promotional language.",
  "Research and institutional contexts include Near East University, Near East University Robotics Lab, Near East University Faculty of Engineering / Medical Research, and Universita Campus Bio-Medico di Roma (UCBM), with formal wording, role titles, and dates kept aligned to available records. The intended audience for this portfolio is editors, reviewers, professors, technical collaborators, mentors, and research evaluators who need a clear view of what has been published, what is under development, what is prototype-stage, and what remains exploratory.",
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
        title="Peiman Jannatipour"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              alt="Illustrative data-analysis workspace on a laptop."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?auto=format&fit=crop&fm=jpg&q=82&w=1800"
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
        title="Verified affiliations and research contexts"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <Image
              alt="Illustrative laboratory team reviewing research data."
              className="aspect-[4/3] w-full object-cover"
              height={720}
              src="https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={960}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock laboratory context for biomedical prototyping.
            </figcaption>
          </figure>

          <div className="space-y-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-sm leading-7 text-slate-600">
                Peiman Jannatipour lists research and institutional contexts
                including Near East University, Near East University Robotics
                Lab, Near East University Faculty of Engineering / Medical
                Research, and Universita Campus Bio-Medico di Roma (UCBM),
                Rome, Italy. Role titles, project dates, appointment wording,
                and formal status should follow available records exactly.
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
