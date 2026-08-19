import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "EEG and Temporal Reproduction Bias | Peiman Jannatipour",
  description:
    "Research Square preprint testing whether sensor-level EEG adds predictive information about temporal reproduction bias beyond behavioural context and recent trial history.",
  path: "/research/eeg-temporal-reproduction-bias",
});

const metrics = [
  { label: "Verified trials", value: "19,419" },
  { label: "Participants", value: "27" },
  { label: "Validation", value: "LOSO" },
  { label: "Calibrated EEG gain", value: "0.156%" },
];

const methods = [
  "Signed logarithmic reproduction error was modelled from target duration, task context, range condition, trial order, and previous-trial covariates.",
  "Sensor-level theta, alpha, beta, and low-gamma features were evaluated for incremental prediction of behavioural residuals.",
  "Evaluation used leave-one-subject-out cross-validation, nested ridge regularization, feature-group ablations, shadow EEG controls, expanded raw-EEG-derived feature families, empirical null controls, and subject-level inference.",
];

export default function EEGTemporalReproductionBiasPage() {
  const title = "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias";
  const doi = externalLinks.eegArticle.href;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title,
          description:
            "A preprint testing whether sensor-level EEG explains residual trial-wise temporal reproduction error after behavioural structure has been modelled.",
          path: "/research/eeg-temporal-reproduction-bias",
          doi,
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">Research Square preprint · 2026</span>
            <span className="text-xs font-mono text-slate-400">Peiman Jannatipour</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This study asks a deliberately narrow question: after duration, task context, range condition, trial order, and recent behavioural history have already explained the dominant structure of temporal reproduction error, does sensor-level EEG add reliable trial-wise predictive information?
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-600/35" href={doi} rel="noreferrer" target="_blank">View preprint (DOI) →</a>
            <Link className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href="/publications">All publications →</Link>
          </div>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Study metrics">
          {metrics.map((metric) => (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6" key={metric.label}>
              <p className="text-2xl font-extrabold text-white">{metric.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{metric.label}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Question</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Incremental neural information beyond behaviour</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The analysis reconstructed 19,419 verified target-reproduction trials from 27 participants. The behavioural model was treated as the baseline rather than a weak comparator, so EEG was evaluated only on the residual error remaining after task structure and recent experience were accounted for.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Methods</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Validation-first residual prediction</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {methods.map((method) => <li className="rounded-xl border border-slate-800 bg-slate-950/50 p-4" key={method}>{method}</li>)}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Key result</p>
              <h2 className="mt-2 text-2xl font-bold text-white">A small calibrated effect, not a general EEG biomarker</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Strict train-only EEG standardization did not improve held-out prediction. Unsupervised within-subject EEG calibration reduced RMSE from 0.211012 to 0.210683 (ΔRMSE = 3.29 × 10⁻⁴; 0.156%; permutation p = 0.010) and exceeded the corresponding within-subject shadow-control model.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The improvement was calibration-dependent, heterogeneous across participants, and did not persist as a robust participant-generalizable signal in the expanded raw-EEG analysis. Across broader model families and empirical null controls, EEG added negligible predictive information beyond duration, context, and trial history.
              </p>
            </section>

            <section className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Interpretation boundary</p>
              <h2 className="mt-2 text-2xl font-bold text-white">What the result supports—and what it does not</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The finding supports a conservative physiological interpretation: temporal reproduction bias is dominated by behavioural calibration, temporal context, and recent experience, while scalp EEG contributes at most weak, individualized, calibration-dependent residual information. The study does not support a subject-independent EEG biomarker or a direct sensor-level neural-clock claim.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-lg font-bold text-white">Signal families</h2>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                {['Theta', 'Alpha', 'Beta', 'Low-gamma', 'Raw-EEG feature families'].map((item) => <span className="rounded-full border border-slate-700 px-3 py-1.5" key={item}>{item}</span>)}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-lg font-bold text-white">Validation controls</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <li>Leave-one-subject-out cross-validation</li>
                <li>Nested ridge regularization</li>
                <li>Shadow EEG controls</li>
                <li>Empirical null controls</li>
                <li>Subject-level permutation / bootstrap inference</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">DOI</p>
              <p className="mt-2 break-all font-mono text-xs text-slate-300">10.21203/rs.3.rs-9852649/v1</p>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research/bayesian-log-time-state-space-clock">Related Bayesian timing model</Link>
          <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Back to research programme</Link>
        </div>
      </div>
    </main>
  );
}
