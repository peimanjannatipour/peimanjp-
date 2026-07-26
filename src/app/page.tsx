import { CredibilityStrip } from "@/components/CredibilityStrip";
import { HeroSection } from "@/components/HeroSection";
import { LinkButton } from "@/components/LinkButton";
import { PatentSummary } from "@/components/PatentSummary";
import { ProjectCard } from "@/components/ProjectCard";
import { ResearchCard } from "@/components/ResearchCard";
import { Section } from "@/components/Section";
import { externalLinks } from "@/data/links";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import {
  abcdDevelopmentalNeuroimaging,
  bayesianLogTimeClock,
  eegTemporalReproductionBias,
  featuredResearch,
} from "@/data/research";

export default function Home() {
  const neurolabProject = projects.find((project) => project.title === "NeuroLab OS");
  const smisProject = projects.find((project) => project.title === "SMIS-ODS");

  return (
    <main id="main">
      <HeroSection />
      <CredibilityStrip items={profile.credibility} />

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Two public preprints anchor the timing work: one empirical EEG study and one computational model."
        eyebrow="Primary research"
        title="Selected research"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ResearchCard item={eegTemporalReproductionBias} />
          <ResearchCard item={bayesianLogTimeClock} />
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="ABCD developmental neuroimaging adds a neurodevelopmental line alongside the EEG and Bayesian timing work."
        eyebrow="Developmental neuroimaging"
        title="ABCD autism-ADHD research line"
      >
        <ResearchCard item={abcdDevelopmentalNeuroimaging} />
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Research software and privacy-preserving neurotechnology support the neuroscience-centered portfolio."
        eyebrow="Systems"
        title="Research systems and neurotechnology"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {neurolabProject ? <ProjectCard project={neurolabProject} /> : null}
          <PatentSummary />
          {smisProject ? <ProjectCard project={smisProject} /> : null}
        </div>
      </Section>

      <Section
        className="border-y border-slate-200 bg-white"
        description="Additional work covers mitochondrial modelling, evidence-review systems, and an exploratory graph-theoretic model of spacetime."
        eyebrow="Supporting work"
        title="Biomedical, evidence, and exploratory modelling"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Mitochondrial and biomedical modelling
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Biomedical modelling work includes mitochondrial control maps and
              neuroenergetic interpretation as supporting research directions
              within the broader systems-neuroscience portfolio.
            </p>
          </div>
          <ResearchCard item={featuredResearch} />
        </div>
      </Section>

      <Section
        description="For research collaboration, mentorship, admissions verification, editorial review context, or technical/product discussions, contact by email."
        eyebrow="Contact"
        title="Professional contact"
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href={externalLinks.email.href ?? "/contact"}>
            Email Peiman
          </LinkButton>
          <LinkButton href="/verification" variant="secondary">
            View verification
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}
