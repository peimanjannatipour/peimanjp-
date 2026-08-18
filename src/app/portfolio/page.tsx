import type { Metadata } from "next";
import Image from "next/image";
import portfolioData from "@/../content/site-copy/portfolio.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Website Portfolio | Peiman Jannatipour",
  description:
    "Peiman Jannatipour's primary research presence, software work, invention-related projects, and public scholarly profiles.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Digital Hub
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {portfolioData.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {portfolioData.introText}
          </p>
        </div>

        {/* Portfolio Knowledge Map Diagram */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Portfolio Knowledge &amp; Web Map
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg">
            <Image
              alt="Peiman Jannatipour Research Portfolio Knowledge Map"
              className="w-full h-auto"
              height={360}
              src="/assets/figures/portfolio-map.svg"
              width={800}
            />
          </div>
        </div>

        {/* Portfolio Items Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.items.map((item) => {
            const isLive = item.available !== false;

            if (!isLive) {
              return (
                <div
                  className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 opacity-60"
                  key={item.id}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-slate-400">
                      {item.title}
                    </h2>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                      Site URL unavailable at build time
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{item.text}</p>
                </div>
              );
            }

            return (
              <a
                className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-sky-500/50 hover:bg-slate-900/80"
                href={item.url}
                key={item.id}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-white group-hover:text-sky-300 transition">
                    {item.title}
                  </h2>
                  <span className="text-sky-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </a>
            );
          })}
        </div>

        {/* Stock Photo Context */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Research team or lab collaboration scene"
              className="h-64 w-full object-cover"
              height={600}
              src="/assets/stock/stock4.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Interdisciplinary scientific collaboration &amp; project networks
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Modern biomedical research environment"
              className="h-64 w-full object-cover"
              height={600}
              src="/assets/stock/stock7.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Connected research presence across public scholarly platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
