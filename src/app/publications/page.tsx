import type { Metadata } from "next";
import Image from "next/image";
import publicationsData from "@/../content/site-copy/publications.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Selected Publications & Preprints | Peiman Jannatipour",
  description:
    "Selected publications, preprints, and manuscripts by Peiman Jannatipour covering EEG residual prediction, Bayesian timing models, and NeuroLab OS.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Selected Publications & Preprints | Peiman Jannatipour",
          description: "Preprints and technical manuscripts documenting empirical findings, computational models, and scientific software systems.",
          path: "/publications",
          items: publicationsData.entries.map((p) => ({
            name: p.title,
            url: p.url,
            description: p.description,
          })),
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Scholarly Outputs
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {publicationsData.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            This section presents public preprints and technical manuscripts across computational neuroscience, human timing, EEG, Bayesian modelling, and research software. Publication status must be represented accurately. A preprint must not be described as peer reviewed unless a peer-reviewed version exists and is explicitly linked.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8 space-y-8">
            {publicationsData.entries.map((entry, idx) => (
              <div
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-sm transition hover:border-slate-700"
                key={entry.id}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    Entry 0{idx + 1} · {entry.type === "preprint" ? "Preprint" : "Technical Manuscript"}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-white">
                  {entry.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {entry.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <a
                    className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
                    href={entry.url}
                    rel="noreferrer"
                    target={entry.url.startsWith("http") ? "_blank" : "_self"}
                  >
                    {entry.linkLabel} →
                  </a>

                  {entry.url.startsWith("http") ? (
                    <span className="text-xs text-slate-500 font-mono">
                      DOI: {entry.url.replace("https://doi.org/", "")}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono">
                      Local PDF Fallback
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
              <Image
                alt="Scholarly manuscript review scene"
                className="h-64 w-full object-cover"
                height={800}
                src="/assets/stock/stock10.jpg"
                width={1200}
              />
              <div className="p-6">
                <h3 className="text-base font-semibold text-white">
                  Research outputs and provenance
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  All preprints and manuscripts prioritize clear data provenance, explicit quality control, and verifiable computational models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
