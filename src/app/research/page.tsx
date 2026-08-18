import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import researchData from "@/../content/site-copy/research.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Research | Peiman Jannatipour | Computational Neuroscience",
  description:
    "Research across EEG, temporal cognition, Bayesian modelling, ABCD developmental neuroimaging, scientific software, evidence systems, and neurotechnology.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Research | Peiman Jannatipour",
          description: researchData.intro,
          path: "/research",
          items: researchData.cards.map((card) => ({
            name: card.title,
            url: card.href,
            description: card.text,
          })),
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Computational neuroscience and research systems</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{researchData.title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">{researchData.intro}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            The public portfolio shows enough methodological and conceptual context to make each research line understandable, while ongoing and unpublished work is deliberately described at a high level until it is ready for release.
          </p>
        </div>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl" aria-labelledby="research-ecosystem-title">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300" id="research-ecosystem-title">Research ecosystem</h2>
          <div className="mt-4 overflow-hidden rounded-lg bg-white p-3">
            <Image
              alt="Research ecosystem from EEG and behavioural modelling through Bayesian analysis, scientific software, and reproducible outputs"
              className="h-auto w-full"
              height={240}
              src="/assets/figures/research-ecosystem.svg"
              width={900}
            />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">The research programme connects empirical signals and behaviour to explicit computational models, diagnostics, scientific software, and reproducible outputs rather than treating these as separate activities.</p>
        </section>

        <section className="mt-16" aria-labelledby="research-lines-title">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Active and established lines</p>
            <h2 className="mt-2 text-3xl font-bold text-white" id="research-lines-title">Six connected research directions</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchData.cards.map((card, index) => (
              <Link
                className="group flex min-h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:border-sky-500/60"
                href={card.href}
                key={card.id}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Area 0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-bold leading-8 text-white group-hover:text-sky-200">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                </div>
                <span className="mt-6 text-sm font-semibold text-sky-300">Open research line →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3" aria-label="Research environments">
          <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image alt="Biomedical neuroscience research environment" className="h-60 w-full object-cover" height={700} src="/images/stock-neuroscience-research.jpg" width={900} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative neuroscience research context; not a photograph from a specific experiment.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image alt="Researchers reviewing scientific data" className="h-60 w-full object-cover" height={700} src="/images/stock-lab-data-analysis.jpg" width={900} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative data-review context for developmental neuroimaging and model evaluation.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image alt="Computational data analysis workspace" className="h-60 w-full object-cover" height={700} src="/images/stock-data-dashboard.jpg" width={900} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative computational-analysis context for modelling, software, and evidence systems.</figcaption>
          </figure>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7" aria-labelledby="research-boundaries-title">
          <h2 className="text-2xl font-bold text-white" id="research-boundaries-title">Public research boundaries</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">Public pages distinguish established preprints and manuscripts from active research lines. For projects such as ABCD developmental neuroimaging, the site communicates the scientific domain, datasets, and broad questions without exposing unpublished hypotheses, analyses, intermediate results, or collaborator-specific material.</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/publications">Publications and manuscripts</Link>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/projects">Research systems and projects</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
