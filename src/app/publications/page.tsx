import type { Metadata } from "next";
import Link from "next/link";
import publicationsData from "@/../content/site-copy/publications.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Publications & Manuscripts | Peiman Jannatipour",
  description:
    "Public preprints, technical manuscripts, and research manuscripts by Peiman Jannatipour across EEG, Bayesian timing, neural time-series software, and systems neuroscience.",
  path: "/publications",
});

const internalPages: Record<string, { href: string; label: string }> = {
  "eeg-residual-prediction": { href: "/research/eeg-temporal-reproduction-bias", label: "Read research summary" },
  "bayesian-log-time-clock": { href: "/research/bayesian-log-time-state-space-clock", label: "Read research summary" },
  "neurolab-os-paper": { href: "/neurolab-os", label: "Explore NeuroLab OS" },
  "cortical-state-temporal-inference": { href: "/research/cortical-state-temporal-inference", label: "Open research status page" },
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Publications, Preprints, and Manuscripts | Peiman Jannatipour",
          description: publicationsData.intro,
          path: "/publications",
          items: publicationsData.entries.map((entry) => ({
            name: entry.title,
            url: internalPages[entry.id]?.href || entry.url || "/publications",
            description: entry.description,
          })),
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Scholarly and technical outputs</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{publicationsData.title}</h1>
            <p className="mt-5 text-base leading-8 text-slate-300">{publicationsData.intro}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm leading-7 text-slate-300">
            <strong className="block text-white">Status policy</strong>
            Preprints are labelled as preprints. Manuscripts under revision or in development are not presented as peer-reviewed publications.
          </div>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-label="Publication and manuscript entries">
          {publicationsData.entries.map((entry, index) => {
            const internal = internalPages[entry.id];
            return (
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-sm" key={entry.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">{entry.status}</span>
                  <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                </div>
                <h2 className="mt-5 text-xl font-bold leading-8 text-white">{entry.title}</h2>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">{entry.topic}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{entry.description}</p>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
                  {internal ? (
                    <Link className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-600/35" href={internal.href}>{internal.label} →</Link>
                  ) : null}
                  {entry.url ? (
                    <a
                      className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                      href={entry.url}
                      rel={entry.url.startsWith("http") ? "noreferrer" : undefined}
                      target={entry.url.startsWith("http") ? "_blank" : undefined}
                    >
                      {entry.linkLabel} →
                    </a>
                  ) : !internal ? (
                    <span className="self-center text-sm font-medium text-slate-400">No public full-text link is listed yet.</span>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7" aria-labelledby="publication-practice">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Research practice</p>
              <h2 className="mt-2 text-2xl font-bold text-white" id="publication-practice">Evidence status and provenance are part of the scientific record</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 text-sm leading-7 text-slate-300">
              <p className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">Public preprints link to DOI records and, where available, an internal research page that explains methods, quantitative results, and interpretation boundaries.</p>
              <p className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">Technical manuscripts, manuscripts in revision, and ongoing research lines remain visibly distinct so that trajectory can be shown without overstating peer-review or publication status.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
