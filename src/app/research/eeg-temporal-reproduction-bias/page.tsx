import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias | Peiman Jannatipour",
  description:
    "A preprint examining whether trial-level EEG information explains residual variation in time reproduction beyond the behavioural structure already captured by duration, context, and recent experience.",
  path: "/research/eeg-temporal-reproduction-bias",
});

export default function EEGTemporalReproductionBiasPage() {
  const title = "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias";
  const status = "Preprint";
  const author = "Peiman Jannatipour";
  const doi = externalLinks.eegArticle.href;

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title,
          description:
            "A preprint examining whether trial-level sensor-level EEG information explains residual variation in time reproduction beyond behavioural structure already captured by duration, task context, and recent experience.",
          path: "/research/eeg-temporal-reproduction-bias",
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
              View preprint (DOI) →
            </a>
            <span className="text-xs text-slate-500 font-mono">
              DOI: 10.21203/rs.3.rs-9852649/v1
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8 text-slate-300 leading-relaxed">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Research Summary</h2>
              <p>
                This work examines whether trial-level sensor-level EEG information explains variation in temporal reproduction beyond behavioural structure already captured by duration, task context, and recent experience.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Methods &amp; Approach</h2>
              <p>
                The research applies sensor-level neural time-series analysis to trial-by-trial EEG recordings captured during human time reproduction tasks. By extracting spectral and temporal features across pre-stimulus, encoding, and reproduction intervals, the study isolates trial-level residual variance after accounting for standard psychophysical context effects.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Scientific Interpretation &amp; Calibration</h2>
              <p>
                The interpretation should remain calibrated: the work evaluates incremental predictive information and should not be presented as establishing a universal EEG biomarker or direct neural clock.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-bold text-white mb-4">Limitations &amp; Caution</h2>
              <p>
                Sensor-level EEG signals reflect superpositions of distributed neural sources. While residual prediction demonstrates that electrophysiological state carries information relevant to temporal estimation bias, further source-localized and invasive recordings are required to pinpoint exact anatomical generators.
              </p>
            </section>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
              <Link
                className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
                href="/research/bayesian-log-time-state-space-clock"
              >
                Related: A Bayesian Log-Time State-Space Clock →
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
                alt="Scientist working with EEG-related equipment"
                className="h-64 w-full object-cover"
                height={800}
                src="/assets/stock/stock2.jpg"
                width={1200}
              />
              <div className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                  Data Context
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  EEG sensor-level analysis and residual prediction in cognitive timing experiments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
