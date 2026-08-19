import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { techArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Patent & Invention | Peiman Jannatipour",
  description:
    "Public patent and invention context for NDMS, including PCT/IB2025/060348, technology scope, status boundaries, and links to the NDMS project.",
  path: "/patent",
});

const publicScope = [
  "Synchronized multimodal signal processing for a structured masking-estimation workflow.",
  "Signal-quality information used to support quality-aware multimodal or single-modality inference paths.",
  "Edge-oriented processing and privacy-aware system design as core engineering priorities.",
  "Continuous system output framed as an estimate rather than a diagnostic conclusion.",
];

export default function PatentPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={techArticleJsonLd({
          title: "NDMS patent and invention context — PCT/IB2025/060348",
          description:
            "Public patent context for the Neuro Dynamic Masking System, including international PCT application status and conservative technology boundaries.",
          path: "/patent",
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Patent · invention · public status</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">NDMS patent and invention context</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              This page separates the public patent record from the broader NDMS project narrative. NDMS — Neuro Dynamic Masking System — is presented as an invention and technology-development programme, while patent status is reported independently from scientific or clinical validation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 font-semibold text-sky-200">PCT/IB2025/060348</span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-300">International PCT application filed</span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-300">Patent pending</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-600/35" href="/ndms">Explore NDMS technology →</Link>
              <Link className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href="/contact">Patent / technology contact →</Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Public record summary</p>
            <dl className="mt-5 grid gap-5 text-sm">
              <div><dt className="text-slate-500">Identifier</dt><dd className="mt-1 font-mono font-semibold text-white">PCT/IB2025/060348</dd></div>
              <div><dt className="text-slate-500">Related project</dt><dd className="mt-1 font-semibold text-white">NDMS — Neuro Dynamic Masking System</dd></div>
              <div><dt className="text-slate-500">Public status</dt><dd className="mt-1 font-semibold text-white">Patent pending / PCT application filed</dd></div>
              <div><dt className="text-slate-500">Evidence boundary</dt><dd className="mt-1 leading-7 text-slate-300">Patent status does not establish diagnostic, clinical, therapeutic, or real-world performance validity.</dd></div>
            </dl>
          </aside>
        </div>

        <section className="mt-16" aria-labelledby="patent-scope-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Public technology scope</p>
          <h2 className="mt-2 text-3xl font-bold text-white" id="patent-scope-title">What can be described publicly</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {publicScope.map((item) => (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm leading-7 text-slate-300" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3" aria-labelledby="patent-boundaries-title">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Status discipline</p>
            <h2 className="mt-2 text-3xl font-bold text-white" id="patent-boundaries-title">Patent claims and evidence claims are different</h2>
          </div>
          <div className="grid gap-5 lg:col-span-2 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-white">What patent status means</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">The application records an invention and a defined claim strategy within the patent process. It is appropriate to describe the technology as patent pending and to identify the PCT application.</p>
            </article>
            <article className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-6">
              <h3 className="text-lg font-semibold text-white">What patent status does not mean</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">It does not establish clinical validity, diagnostic accuracy, product-market fit, regulatory approval, or scientific validation. Those require separate evidence.</p>
            </article>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7" aria-labelledby="patent-navigation-title">
          <h2 className="text-2xl font-bold text-white" id="patent-navigation-title">Related public pages</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/ndms">NDMS technology programme</Link>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/projects">Projects</Link>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/verification">Verification and status</Link>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/contact">Contact</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
