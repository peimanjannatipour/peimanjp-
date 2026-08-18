import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import researchData from "@/../content/site-copy/research.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Research Areas | Peiman Jannatipour | Computational Neuroscience",
  description:
    "Explore Peiman Jannatipour's research areas across EEG neural time-series, temporal cognition, Bayesian state-space modelling, and neurotechnology systems.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Research Areas | Peiman Jannatipour",
          description: "Peiman Jannatipour’s research spans EEG and neural time-series analysis, temporal cognition and human time reproduction, Bayesian and state-space modelling, developmental neuroimaging, research software, and neurotechnology.",
          path: "/research",
          items: [
            {
              name: "EEG and neural time-series",
              url: "/research/eeg-temporal-reproduction-bias",
              description: "Analysis of sensor-level neural signals, residual prediction, and brain-behaviour relationships in human timing and cognitive variability.",
            },
            {
              name: "Temporal cognition and human time reproduction",
              url: "/research/eeg-temporal-reproduction-bias",
              description: "Research on systematic bias in time reproduction, contextual effects, recent-trial influences, and computational accounts of temporal estimation.",
            },
            {
              name: "Bayesian and state-space modelling",
              url: "/research/bayesian-log-time-state-space-clock",
              description: "Interpretable models of behavioural data, with emphasis on central tendency, multiplicative variability, and diagnostic evaluation of fit and misspecification.",
            },
            {
              name: "Neurotechnology and scientific systems",
              url: "/neurolab-os",
              description: "Design of privacy-aware and reproducible systems for neural analysis, modelling, simulation, and applied multimodal inference.",
            },
          ],
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Computational Neuroscience
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {researchData.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Peiman Jannatipour’s research spans EEG and neural time-series analysis, temporal cognition and human time reproduction, Bayesian and state-space modelling, developmental neuroimaging, research software, and neurotechnology. Across these areas, the emphasis is on explicit computational assumptions, careful validation, reproducible analysis, and scientifically interpretable outputs.
          </p>
        </div>

        {/* Research Ecosystem Diagram */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Research Ecosystem Workflow
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg">
            <Image
              alt="Research Ecosystem Diagram: EEG -> Behavioural Modelling -> Bayesian Analysis -> Scientific Software -> Reproducible Outputs"
              className="w-full h-auto"
              height={240}
              src="/assets/figures/research-ecosystem.svg"
              width={900}
            />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Methodological integration from sensor-level EEG signal processing to reproducible scientific software outputs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {researchData.cards.map((card, idx) => (
            <div
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-sm transition hover:border-slate-700"
              key={card.id}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Area 0{idx + 1}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {card.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <Link
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                  href="/publications"
                >
                  View associated preprints &amp; publications →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stock Photo Grid Support */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Scientist working with EEG-related equipment"
              className="h-60 w-full object-cover"
              height={600}
              src="/assets/stock/stock2.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                EEG instrumentation &amp; signal acquisition environment
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Brain imaging and neural signal display environment"
              className="h-60 w-full object-cover"
              height={600}
              src="/assets/stock/stock3.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Neural signal visualization &amp; state-space analysis
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Close-up of data analysis on monitor"
              className="h-60 w-full object-cover"
              height={600}
              src="/assets/stock/stock6.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Computational fitting &amp; diagnostic evaluation
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
