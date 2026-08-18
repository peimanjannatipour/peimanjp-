import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import publicationsData from "@/../content/site-copy/publications.json";
import { createPageMetadata } from "@/lib/metadata";

const item = publicationsData.entries[1];

export const metadata: Metadata = createPageMetadata({
  title: `${item.title} | Peiman Jannatipour`,
  description: item.description,
  path: "/research/bayesian-log-time-state-space-clock",
});

export default function BayesianLogTimeStateSpaceClockPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Computational Neuroscience Preprint
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            {item.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
              href={item.url}
              rel="noreferrer"
              target="_blank"
            >
              {item.linkLabel} →
            </a>
            <Link
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
              href="/publications"
            >
              Back to Publications
            </Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <Image
            alt="Close-up of data analysis on monitor for Bayesian timing research"
            className="h-80 w-full object-cover"
            height={800}
            src="/assets/stock/stock6.jpg"
            width={1200}
          />
        </div>
      </div>
    </main>
  );
}
