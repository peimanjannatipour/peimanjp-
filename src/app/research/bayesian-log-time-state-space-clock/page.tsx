import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "A Bayesian Log-Time State-Space Clock for Human Time Reproduction | Peiman Jannatipour",
  description:
    "A preprint presenting a Bayesian log-time state-space model of human time reproduction, focusing on central tendency, multiplicative error, and diagnostic evaluation of model adequacy.",
  path: "/research/bayesian-log-time-state-space-clock",
});

export default function BayesianLogTimeStateSpaceClockPage() {
  const title = "A Bayesian Log-Time State-Space Clock for Human Time Reproduction";
  const status = "Preprint";
  const author = "Peiman Jannatipour";
  const doi = externalLinks.bayesianTiming.href;

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title,
          description:
            "A preprint presenting a Bayesian log-time state-space model of human time reproduction, focusing on central tendency, multiplicative error, and diagnostic evaluation of model adequacy.",
          path: "/research/bayesian-log-time-state-space-clock",
          doi,
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
              {status}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Author: {author}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a
              className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
              href={doi}
              rel="noreferrer"
              target="_blank"
            >
              View preprint (SSRN) →
            </a>
            <span className="text-xs text-slate-500 font-mono">
              DOI: 10.2139/ssrn.6383218
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8 text-slate-300 leading-relaxed">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Research Overview</h2>
              <p>
                This work develops a computational account of human time reproduction using a Bayesian log-time state-space framework. It focuses on central tendency, multiplicative variability, predictive adequacy, and model diagnostics, with particular attention to where a compact timing model succeeds and where remaining structure motivates richer models.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Research Scope &amp; Focus</h2>
              <p>
                Interpretable models of behavioural data, with emphasis on central tendency, multiplicative variability, and diagnostic evaluation of fit and misspecification.
              </p>
            </section>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
              <Link
                className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
                href="/research/eeg-temporal-reproduction-bias"
              >
                Related: Sensor-Level EEG Residual Prediction →
              </Link>
              <Link
                className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
                href="/publications"
              >
                All Publications →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl sticky top-24">
              <Image
                alt="Data analysis display showing Bayesian computational fitting"
                className="h-64 w-full object-cover"
                height={800}
                src="/assets/stock/stock6.jpg"
                width={1200}
              />
              <div className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                  Model Fit &amp; Analysis
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Bayesian state-space dynamics and diagnostic model evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
