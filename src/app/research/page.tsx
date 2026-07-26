import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCard } from "@/components/ProjectCard";
import { ResearchCard } from "@/components/ResearchCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import {
  abcdDevelopmentalNeuroimaging,
  bayesianLogTimeClock,
  corticalStateTemporalInference,
  eegTemporalReproductionBias,
  featuredResearch,
  limitedResearch,
} from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

const researchFaq = [
  {
    question: "What is the central research focus?",
    answer:
      "The central focus is temporal cognition, EEG residual prediction, Bayesian timing models, ABCD developmental neuroimaging, and neural time-series analysis.",
  },
  {
    question: "What are the two main public research anchors?",
    answer:
      "The two main anchors are the Sensor-Level EEG Residual Prediction Research Square preprint and the Bayesian Log-Time State-Space Clock SSRN preprint.",
  },
  {
    question: "Where does graph-theoretic spacetime fit?",
    answer:
      "It is listed as exploratory theoretical modelling and is secondary to the neuroscience axis.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Research | Peiman Jannatipour | EEG, Temporal Cognition & Bayesian Timing",
  description:
    "Research by Peiman Jannatipour across EEG residual prediction, temporal cognition, Bayesian timing models, neural time-series workflows, NeuroLab OS, NDMS, biomedical modelling, and exploratory theoretical modelling.",
  path: "/research",
});

export default function ResearchPage() {
  const neurolabProject = projects.find((project) => project.title === "NeuroLab OS");
  const ndmsProject = projects.find(
    (project) => project.title === "Masking Index Prototype",
  );
  const smisProject = projects.find((project) => project.title === "SMIS-ODS");

  return (
    <main id="main">
      <JsonLd data={faqJsonLd(researchFaq)} />
      <Section
        description="The research center of this portfolio is temporal cognition: how human timing behaviour is biased by context, history, and cortical state."
        eyebrow="Research"
        headingLevel={1}
        title="Computational neuroscience and temporal cognition"
      >
        <p className="max-w-4xl border-l-2 border-cyan-700 pl-6 text-base leading-8 text-slate-700">
          The EEG preprint asks whether neural features improve prediction
          after behavioural structure has been modelled. The Bayesian preprint
          asks whether a log-time state-space model can reproduce both the mean
          and variability of human time reproduction. Together, they connect
          empirical EEG analysis with a falsifiable computational account of
          timing.
        </p>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="The empirical EEG study and the Bayesian model are the two main public outputs on human timing."
        eyebrow="Primary neuroscience preprints"
        title="EEG residual prediction and Bayesian timing"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <ResearchCard item={eegTemporalReproductionBias} />
          <ResearchCard item={bayesianLogTimeClock} />
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="A CV-listed developmental neuroimaging line extends the portfolio from time perception into adolescent brain maturation and dimensional neurodevelopmental traits."
        eyebrow="Developmental neuroimaging"
        title="ABCD autism-ADHD research line"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <ResearchCard item={abcdDevelopmentalNeuroimaging} />
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Researchers reviewing laboratory data."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="/images/stock-lab-data-analysis.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock research-review context for developmental neuroimaging.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Ongoing work examines cortical-state dynamics and EEG/fMRI-informed temporal inference."
        eyebrow="Neural time-series"
        title="Cortical state and EEG/fMRI-simulation directions"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Researcher working with a data-analysis notebook."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="/images/stock-data-dashboard.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock computational-modelling context for Bayesian timing research.
            </figcaption>
          </figure>
          <ResearchCard item={corticalStateTemporalInference} />
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="NeuroLab OS and the masking-index prototype translate parts of this work into research workflows and privacy-aware signal processing."
        eyebrow="Research systems"
        title="NeuroLab OS and NDMS"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {neurolabProject ? <ProjectCard project={neurolabProject} /> : null}
          {ndmsProject ? <ProjectCard project={ndmsProject} /> : null}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="Separate projects explore mitochondrial control models and structured review of scientific claims."
        eyebrow="Biomedical and evidence systems"
        title="Mitochondrial modelling and SMIS-ODS"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Researchers working in a biomedical laboratory."
              className="w-full object-cover"
              height={1200}
              src="/images/stock-neuroscience-research.jpg"
              width={1000}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock laboratory context for mitochondrial and biomedical modelling.
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Modular mitochondrial control
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The mitochondrial control thread is framed as conceptual and
                computational modelling around control interfaces, redox
                coupling, Complex I assembly, and neuroenergetic
                interpretation.
              </p>
            </div>
            {smisProject ? <ProjectCard project={smisProject} /> : null}
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="This exploratory theoretical work is separate from the empirical neuroscience program."
        eyebrow="Exploratory theoretical modelling"
        title="Graph-theoretic spacetime"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <ResearchCard item={featuredResearch} />
          <div className="grid gap-4">
            {limitedResearch
              .filter((item) => item.title.includes("Relativistic"))
              .map((item) => (
                <ResearchCard item={item} key={item.title} />
              ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
