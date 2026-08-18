import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { corticalStateTemporalInference } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cortical State Temporal Inference | Peiman Jannatipour",
  description:
    "Manuscript research line on cortical-state dynamics and temporal inference across fMRI, EEG, and simulation, presented without unpublished results.",
  path: "/research/cortical-state-temporal-inference",
});

export default function CorticalStateTemporalInferencePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Systems neuroscience manuscript</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Cortical State Dynamics Support a Near-Linear Physiological Proxy for Temporal Inference Across fMRI, EEG, and Simulation
          </h1>
          <div className="mt-5"><StatusBadge status={corticalStateTemporalInference.status} /></div>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This research line examines cortical-state dynamics and temporal inference across fMRI, EEG, and simulation. The page makes the scientific direction visible while intentionally withholding unpublished analyses and results.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <Image alt="Researchers reviewing scientific data" className="aspect-[4/3] w-full object-cover" height={900} priority src="/images/stock-lab-data-analysis.jpg" width={1200} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Illustrative research-review context; not an image from the manuscript or its datasets.</figcaption>
          </figure>

          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">Current public scope</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The public scope is limited to cortical-state dynamics, temporal inference, and the use of fMRI-, EEG-, and simulation-informed analysis. Detailed methods, quantitative results, and interpretation remain tied to the manuscript rather than being pre-released through the portfolio.
              </p>
            </section>
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">Evidence-status boundary</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This is presented as a manuscript research line, not as a peer-reviewed publication. Public status will be updated when an appropriate public manuscript or publication becomes available.
              </p>
            </section>
            <div className="flex flex-wrap gap-4">
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Back to research</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/publications">Publications and manuscripts</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
