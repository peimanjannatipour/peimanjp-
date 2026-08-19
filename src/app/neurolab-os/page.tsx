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

const capabilityCards = [
  {
    label: "Execution model",
    value: "Local-first",
    text: "Electron/React desktop interface connected to a local Python/FastAPI scientific engine.",
  },
  {
    label: "Model registry",
    value: "11 families",
    text: "Computational model families are exposed through scientist-visible model specifications rather than hidden behind a single opaque workflow.",
  },
  {
    label: "Perturbation layer",
    value: "8 operations",
    text: "Explicitly in silico model-space perturbation operations support structured simulation and counterfactual exploration.",
  },
  {
    label: "Scientific control",
    value: "QC + provenance",
    text: "Quality-control decisions, seeded fitting, and report generation are connected to a traceable execution path.",
  },
];

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

        <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="NeuroLab OS capabilities">
          {capabilityCards.map((card) => (
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6" key={card.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{card.label}</p>
              <p className="mt-2 text-2xl font-extrabold text-white">{card.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl" aria-labelledby="neurolab-workflow-title">
          <h2 className="mb-6 text-xl font-bold text-white" id="neurolab-workflow-title">Workflow architecture and execution pipeline</h2>
          <figure>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-white p-2">
              <Image alt="NeuroLab OS workflow diagram showing input data, quality control, model contract, seeded fitting, in silico perturbation, and provenance reporting" className="h-auto w-full object-contain" height={900} priority src="/assets/figures/neurolab-os-workflow.jpg" width={1600} />
            </div>
            <figcaption className="mt-4 border-t border-slate-800 pt-4 text-xs font-medium leading-6 text-slate-400">{data.figureCaption}</figcaption>
          </figure>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3" aria-labelledby="neurolab-science-title">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Scientific design</p>
            <h2 className="mt-2 text-3xl font-bold text-white" id="neurolab-science-title">Why the workflow is structured this way</h2>
          </div>
          <div className="grid gap-5 lg:col-span-2 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">Researcher-visible model meaning</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Model specifications remain explicit enough for the researcher to understand what is being fitted or simulated, reducing the distance between scientific interpretation and execution.</p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">Executable lineage</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">The same workflow records quality control, seeded fitting, simulation, perturbation, and reporting so that the path from input to output is easier to inspect and reproduce.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
