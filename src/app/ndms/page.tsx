import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { techArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "NDMS | Privacy-Aware Multimodal Neurotechnology",
  description:
    "NDMS is a privacy-aware multimodal neurotechnology programme focused on quality-aware inference, edge-oriented processing, interpretability, and responsible use.",
  path: "/ndms",
});

const pillars = [
  {
    title: "Quality-aware multimodal inference",
    text: "The system direction combines synchronized multimodal signals with explicit signal-quality information so inference can adapt when one modality is degraded or unavailable.",
  },
  {
    title: "Edge-oriented privacy",
    text: "The invention programme emphasizes local or edge-oriented processing and consent-aware system design rather than treating raw multimodal data as an unconstrained cloud resource.",
  },
  {
    title: "Interpretability and responsible use",
    text: "Outputs are framed as calibrated system estimates with explicit limitations. The project is not presented as a validated diagnostic, clinical, hiring, or surveillance product.",
  },
];

const architecture = [
  { step: "01", title: "Synchronized inputs", text: "Audio and visual streams enter a time-aligned processing path." },
  { step: "02", title: "Windowed features", text: "Features are extracted over consecutive analysis windows rather than treated as one undifferentiated recording." },
  { step: "03", title: "Signal quality", text: "Per-modality quality information is estimated alongside the behavioural features." },
  { step: "04", title: "Quality-conditioned gating", text: "The inference path can favor multimodal or single-modality processing when signal quality changes." },
  { step: "05", title: "Continuous estimate", text: "The system produces a continuous masking-probability estimate rather than a categorical diagnostic label." },
];

export default function NDMSPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={techArticleJsonLd({
          title: "NDMS — Neuro Dynamic Masking System",
          description: "A privacy-aware multimodal neurotechnology programme focused on structured signal integration, quality-aware inference, edge-oriented processing, and interpretable system design.",
          path: "/ndms",
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Neurotechnology · invention · patent pending</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">NDMS — Neuro Dynamic Masking System</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              NDMS is a privacy-aware multimodal neurotechnology programme focused on structured multimodal signal integration, quality-aware inference, edge-oriented processing, and interpretable system design.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The project sits between neurotechnology, multimodal machine learning, and responsible system design. Its public presentation is deliberately bounded: NDMS is an invention and technology-development programme, not a validated diagnostic or clinical product.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 font-semibold text-sky-200">PCT/IB2025/060348</span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-300">Patent pending</span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-300">Privacy-aware</span>
              <span className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-300">Multimodal AI</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-600/35" href={externalLinks.ndms.href} rel="noreferrer" target="_blank">Visit NDMS project site →</a>
              <Link className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href="/patent">Patent context →</Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <Image alt="Peiman Jannatipour, inventor of NDMS" className="aspect-[4/5] w-full object-cover object-center" height={1200} priority src="/images/inventor-photo.jpg" width={960} />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Peiman Jannatipour — inventor and project lead. NDMS is presented here as a technology-development programme.</figcaption>
          </figure>
        </div>

        <section className="mt-16" aria-labelledby="ndms-principles-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">System principles</p>
          <h2 className="mt-2 text-3xl font-bold text-white" id="ndms-principles-title">What the public concept emphasizes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6" key={pillar.title}>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7 lg:p-8" aria-labelledby="ndms-architecture-title">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Public architecture schematic</p>
            <h2 className="mt-2 text-3xl font-bold text-white" id="ndms-architecture-title">From synchronized signals to a quality-aware continuous estimate</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">This schematic shows the public system logic at a deliberately high level. It communicates the engineering structure without turning the portfolio into a disclosure of unpublished implementation details or claim drafting.</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5" role="list" aria-label="NDMS public processing architecture">
            {architecture.map((item, index) => (
              <div className="relative rounded-2xl border border-slate-700 bg-slate-950/60 p-5" key={item.step} role="listitem">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-sky-300">{item.step}</span>
                  {index < architecture.length - 1 ? <span aria-hidden="true" className="hidden text-slate-600 lg:block">→</span> : null}
                </div>
                <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
            <span className="rounded-full border border-slate-700 px-3 py-1.5">Edge-oriented execution</span>
            <span className="rounded-full border border-slate-700 px-3 py-1.5">Quality-aware routing</span>
            <span className="rounded-full border border-slate-700 px-3 py-1.5">Multimodal / single-modality fallback</span>
            <span className="rounded-full border border-slate-700 px-3 py-1.5">Continuous output</span>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start" aria-labelledby="ndms-boundary-title">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Claim boundary</p>
            <h2 className="mt-2 text-2xl font-bold text-white" id="ndms-boundary-title">Technology development is not clinical validation</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Patent status, prototype development, and system architecture do not establish clinical validity. The site therefore separates invention claims from evidence claims and avoids describing NDMS as a diagnostic, therapeutic, or clinically validated product.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <h2 className="text-2xl font-bold text-white">Responsible-use boundary</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">The public positioning does not frame NDMS as a hiring, surveillance, or coercive decision system. The emphasis is consent-aware, privacy-conscious technology development with calibrated outputs and explicit limitations.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/patent">Patent record and status</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/contact">Technology and collaboration contact</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
