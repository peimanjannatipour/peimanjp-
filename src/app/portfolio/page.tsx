import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portfolioData from "@/../content/site-copy/portfolio.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { collectionPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Research & Project Portfolio | Peiman Jannatipour",
  description:
    "A connected portfolio of Peiman Jannatipour's research, scientific software, invention work, scholarly profiles, and project websites.",
  path: "/portfolio",
});

const pathways = [
  {
    title: "For research and publications",
    text: "Start with the research programme and publications pages for EEG, human timing, Bayesian modelling, developmental neuroimaging, manuscripts, and public preprints.",
    href: "/research",
    label: "Open research",
  },
  {
    title: "For software and reproducibility",
    text: "Use the NeuroLab OS pages for the local-first neural time-series workbench, workflow architecture, model registry, quality control, and provenance-aware reporting.",
    href: "/neurolab-os",
    label: "Open NeuroLab OS",
  },
  {
    title: "For invention and patent context",
    text: "Use the NDMS and Patent pages for the privacy-aware multimodal neurotechnology programme, public system principles, and PCT status boundaries.",
    href: "/ndms",
    label: "Open NDMS",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={collectionPageJsonLd({
          name: "Research & Project Portfolio | Peiman Jannatipour",
          description: "This portfolio connects Peiman Jannatipour’s research presence, scientific software, invention-related work, scholarly profiles, and associated project websites.",
          path: "/portfolio",
          items: portfolioData.items.filter((item) => item.available !== false).map((item) => ({
            name: item.title,
            url: item.url,
            description: item.text,
          })),
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Connected research presence</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{portfolioData.title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">{portfolioData.introText}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">The portfolio is organized by purpose rather than by platform alone: scholarly outputs, research software, invention work, verification, and public technical profiles each have a distinct role.</p>
        </div>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl" aria-labelledby="portfolio-map-title">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300" id="portfolio-map-title">Portfolio knowledge and web map</h2>
          <div className="mt-4 overflow-hidden rounded-lg bg-white p-3">
            <Image alt="Peiman Jannatipour research portfolio knowledge map" className="h-auto w-full" height={360} src="/assets/figures/portfolio-map.svg" width={800} />
          </div>
        </section>

        <section className="mt-12" aria-labelledby="portfolio-destinations-title">
          <h2 className="sr-only" id="portfolio-destinations-title">Portfolio destinations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.items.map((item) => {
              const isLive = item.available !== false;
              if (!isLive) {
                return (
                  <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 opacity-70" key={item.id}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-300">{item.title}</h3>
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-400">Unavailable</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
                  </div>
                );
              }

              return (
                <a className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-sky-500/50 hover:bg-slate-900/80" href={item.url} key={item.id} rel="noreferrer" target="_blank">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-white transition group-hover:text-sky-300">{item.title}</h3>
                    <span aria-hidden="true" className="text-sky-400 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="portfolio-pathways-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Start by intent</p>
          <h2 className="mt-2 text-3xl font-bold text-white" id="portfolio-pathways-title">Three useful entry points</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {pathways.map((pathway) => (
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6" key={pathway.title}>
                <h3 className="text-lg font-semibold text-white">{pathway.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{pathway.text}</p>
                <Link className="mt-5 text-sm font-semibold text-sky-300 underline underline-offset-4" href={pathway.href}>{pathway.label} →</Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
