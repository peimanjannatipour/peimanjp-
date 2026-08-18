import type { Metadata } from "next";
import Image from "next/image";
import seoData from "@/../content/site-copy/seo.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd, softwareApplicationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "NeuroLab OS | Scientist-Reviewed Neural Time-Series Modelling",
  description:
    "NeuroLab OS is a local-first software environment designed for scientist-reviewed neural time-series modelling and provenance-aware simulation.",
  path: "/neurolab-os",
});

export default function NeuroLabPage() {
  const data = seoData.neurolabOS;

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "NeuroLab OS",
          description: "A local-first software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation.",
          path: "/neurolab-os",
        })}
      />
      <JsonLd
        data={scholarlyArticleJsonLd({
          title: "NeuroLab OS: A local-first software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation",
          description: "A technical manuscript describing a local-first scientific workbench for neural time-series ingestion, explicit quality control, computational model fitting, in silico perturbation workflows, and provenance-aware reporting.",
          path: "/neurolab-os",
          pdfUrl: "/assets/papers/neurolab-os-preprint.pdf",
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Scientific Software Workbench
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            NeuroLab OS is a local-first research-software environment for scientist-reviewed neural time-series modelling and provenance-aware simulation. The evaluated technical beta combines an Electron/React desktop interface with a local Python/FastAPI scientific engine.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            The workflow connects neural time-series ingestion, preprocessing, explicit quality-control review, scientist-visible model specifications, seeded model fitting, simulation, in silico perturbation, and provenance-aware reporting within one local execution path.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            The evaluated runtime supports EEG-oriented and generic time-series ingestion together with ROI/BOLD matrix workflows. It contains 11 computational model families and eight explicitly in silico model-space perturbation operations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            NeuroLab OS is designed to preserve continuity between researcher-visible model semantics and executable computational provenance. Its scientific contribution is therefore centered on traceability between model interpretation and execution rather than the introduction of a new neural equation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 font-medium text-slate-400">
            The present evidence establishes software and release-level verification of the evaluated technical beta. It should not be described as establishing biological, diagnostic, therapeutic, or clinical validity. External reference-dataset validation remains a distinct evidential requirement.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
              href="/assets/papers/neurolab-os-preprint.pdf"
            >
              Open manuscript PDF →
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
              href="https://neurolabos.peimanjp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Visit NeuroLab OS Website →
            </a>
          </div>
        </div>

        {/* Workflow Figure Section */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">
            Workflow Architecture &amp; Execution Pipeline
          </h2>
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
            <Image
              alt="NeuroLab OS workflow diagram showing input data, quality control, model contract, seeded fitting, in silico perturbation, and provenance reporting"
              className="w-full h-auto object-contain"
              height={900}
              priority
              src="/assets/figures/neurolab-os-workflow.jpg"
              width={1600}
            />
          </div>
          <figcaption className="mt-4 border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-400 font-medium">
            {data.figureCaption}
          </figcaption>
        </div>

        {/* Supporting Stock Photo Context */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Professional desk setup for scientific software work"
              className="h-64 w-full object-cover"
              height={600}
              src="/assets/stock/stock5.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Local-first execution &amp; scientist-reviewed workstation environment
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Minimal professional technology workspace"
              className="h-64 w-full object-cover"
              height={600}
              src="/assets/stock/stock9.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Traceable reporting &amp; in silico perturbation workflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
