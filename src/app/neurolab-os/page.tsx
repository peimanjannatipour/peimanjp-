import type { Metadata } from "next";
import Image from "next/image";
import seoData from "@/../content/site-copy/seo.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "NeuroLab OS | Neural Time-Series Research Software",
  description:
    "NeuroLab OS is a local-first research environment for scientist-reviewed neural time-series modelling, explicit quality control, simulation, and provenance-aware reporting.",
  path: "/neurolab-os",
});

export default function NeuroLabPage() {
  const data = seoData.neurolabOS;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "NeuroLab OS",
          description: "A local-first research-software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation.",
          path: "/neurolab-os",
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Scientific software workbench</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{data.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            NeuroLab OS is a local-first research-software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation. The evaluated technical beta combines an Electron/React desktop interface with a local Python/FastAPI scientific engine.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The workflow connects neural time-series ingestion, preprocessing, explicit quality-control review, scientist-visible model specifications, seeded model fitting, simulation, in silico perturbation, and provenance-aware reporting within one local execution path.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            The evaluated runtime supports EEG-oriented and generic time-series ingestion together with ROI/BOLD matrix workflows. It contains 11 computational model families and eight explicitly in silico model-space perturbation operations.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            NeuroLab OS is designed to preserve continuity between researcher-visible model semantics and executable computational provenance. Its scientific contribution is centered on traceability between model interpretation and execution rather than the introduction of a new neural equation.
          </p>
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm leading-7 text-slate-300">
            <strong className="block text-white">Evidence boundary</strong>
            The present evidence establishes software and release-level verification of the evaluated technical beta. It does not establish biological, diagnostic, therapeutic, or clinical validity; external reference-dataset validation remains a distinct evidential requirement.
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/35" href="/assets/papers/neurolab-os-preprint.pdf">Open manuscript PDF →</a>
            <a className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700" href="https://neurolabos.peimanjp.com/" rel="noreferrer" target="_blank">Visit NeuroLab OS Website →</a>
          </div>
        </div>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl" aria-labelledby="neurolab-workflow-title">
          <h2 className="mb-6 text-xl font-bold text-white" id="neurolab-workflow-title">Workflow architecture and execution pipeline</h2>
          <figure>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-white p-2">
              <Image alt="NeuroLab OS workflow diagram showing input data, quality control, model contract, seeded fitting, in silico perturbation, and provenance reporting" className="h-auto w-full object-contain" height={900} priority src="/assets/figures/neurolab-os-workflow.jpg" width={1600} />
            </div>
            <figcaption className="mt-4 border-t border-slate-800 pt-4 text-xs font-medium leading-6 text-slate-400">{data.figureCaption}</figcaption>
          </figure>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2" aria-label="Illustrative scientific software contexts">
          <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image alt="Scientific data-analysis workspace" className="h-64 w-full object-cover" height={700} src="/images/stock-data-dashboard.jpg" width={900} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative computational-analysis context for local model fitting and provenance review.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image alt="Biomedical neuroscience research environment" className="h-64 w-full object-cover" height={700} src="/images/stock-neuroscience-research.jpg" width={900} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative neuroscience context; not a screenshot of NeuroLab OS or a project dataset.</figcaption>
          </figure>
        </section>
      </div>
    </main>
  );
}
