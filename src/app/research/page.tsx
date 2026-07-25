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
      "The two main anchors are the Sensor-Level EEG Residual Prediction article and the Bayesian Log-Time State-Space Clock SSRN preprint.",
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
        title="Computational neuroscience and temporal cognition"
      >
        <p className="max-w-4xl rounded-lg border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700">
          The two strongest public anchors are the EEG residual-prediction
          article and the Bayesian log-time state-space model. Together, they
          frame timing as a systems-neuroscience problem involving behavioural
          calibration, neural time-series, Bayesian inference, residual
          dynamics, and conservative model checking.
        </p>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="These articles now lead the research page and define the computational neuroscience axis of the site."
        eyebrow="Primary neuroscience articles"
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
              alt="Illustrative research team reviewing results at a workstation."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="https://images.pexels.com/photos/9574543/pexels-photo-9574543.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        description="Additional neuroscience directions remain status-labelled and lower than the two public neuroscience anchors."
        eyebrow="Neural time-series"
        title="Cortical state and EEG/fMRI-simulation directions"
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Illustrative data-analysis workspace on a laptop."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?auto=format&fit=crop&fm=jpg&q=82&w=1800"
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
        description="Software and neurotechnology systems are positioned as infrastructure and support systems around neural and behavioural modelling."
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
        description="Biomedical modelling and evidence-system design remain supporting research directions."
        eyebrow="Biomedical and evidence systems"
        title="Mitochondrial modelling and SMIS-ODS"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Illustrative laboratory team reviewing research data."
              className="w-full object-cover"
              height={1200}
              src="https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        description="Graph-spacetime remains available but is no longer the central identity of the research page."
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
