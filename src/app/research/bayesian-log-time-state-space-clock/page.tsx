import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Bayesian Model of Human Time Reproduction | Peiman Jannatipour",
  description:
    "SSRN preprint presenting a Bayesian log-time state-space model of human time reproduction, central tendency, multiplicative variability, and posterior-predictive model checking.",
  path: "/research/bayesian-log-time-state-space-clock",
});

const metrics = [
  { label: "Clean trials", value: "15,264" },
  { label: "RMSE", value: "0.8237 s" },
  { label: "MAE", value: "0.5833 s" },
  { label: "R²", value: "0.7099" },
];

export default function BayesianLogTimeStateSpaceClockPage() {
  const title = "A Bayesian Log-Time State-Space Clock for Human Time Reproduction";
  const doi = externalLinks.bayesianTiming.href;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title,
          description:
            "A Bayesian log-time state-space model of human time reproduction evaluated with predictive fit, central-tendency structure, variability diagnostics, and posterior-predictive model checking.",
          path: "/research/bayesian-log-time-state-space-clock",
          doi,
        })}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">SSRN preprint · 2026</span>
            <span className="text-xs font-mono text-slate-400">Peiman Jannatipour</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            This work tests whether a compact Bayesian state-space mechanism in log-time can jointly explain mean reproduction behaviour, central tendency, multiplicative error structure, and duration-dependent variability—not merely whether it can achieve a good average fit.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-600/35" href={doi} rel="noreferrer" target="_blank">View SSRN preprint →</a>
            <Link className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href="/publications">All publications →</Link>
          </div>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Model fit metrics">
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Model architecture</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Sequential inference in log-time</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                On each trial, an effective target duration and a covariate-dependent multiplicative gain define an internal log-time signal. The latent perceived-duration state is updated sequentially with Kalman-like weighting, and observed reproductions are represented with a lognormal observation model.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Parameters were estimated with constrained multi-start optimization, using maximum likelihood or MAP when weak priors were enabled to stabilize weakly identified parameters. Evaluation then used posterior-predictive summaries and model-fit diagnostics rather than treating a single objective value as sufficient evidence.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Dataset and fit</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Strong mean-level agreement with limited data exclusion</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The raw dataset contained 15,336 trials. Pre-specified validity filters retained 15,264 trials and removed 72 (0.47%). In the seconds domain, the model achieved RMSE = 0.8237 s, MAE = 0.5833 s, and R² = 0.7099. In log space, RMSE was 0.2490 and MAE was 0.1862.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Mean predictions reproduced the characteristic central-tendency pattern: shorter intervals were over-reproduced on average, longer intervals were under-reproduced, and the crossover occurred in the mid-range of the target set.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Posterior-predictive diagnosis</p>
              <h2 className="mt-2 text-2xl font-bold text-white">The strongest result is also a model limitation</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Empirical coefficient of variation decreased with duration, approximately from 0.29 to 0.20, while posterior-predictive coefficient of variation under the stationary model remained comparatively stable around 0.24. Residuals also showed clustering and burst-like deviations rather than fully independent stationary noise.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The model therefore captures central tendency and much of the mean-level structure, but its stationary noise formulation does not explain the complete duration-wise variability pattern. This mismatch is treated as a scientific diagnostic, not hidden by the overall R².
              </p>
            </section>

            <section className="rounded-2xl border border-amber-900/50 bg-amber-950/20 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Interpretation</p>
              <h2 className="mt-2 text-2xl font-bold text-white">A useful model because its failure mode is visible</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The paper supports a Bayesian log-time account as a compact explanation of important features of human time reproduction in this dataset, while also showing where that account is incomplete. The central scientific point is not that the model is universally sufficient, but that explicit posterior-predictive checking reveals which behavioural regularities require richer variability structure.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-lg font-bold text-white">Model ingredients</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <li>Log-time latent state</li>
                <li>Kalman-like prior integration</li>
                <li>Covariate-dependent multiplicative gain</li>
                <li>Lognormal observation model</li>
                <li>Posterior-predictive checking</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-lg font-bold text-white">Variability diagnostic</h2>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"><span className="block text-xs uppercase tracking-wider text-slate-500">Empirical CV</span><strong className="mt-1 block text-white">~0.29 → ~0.20</strong></div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"><span className="block text-xs uppercase tracking-wider text-slate-500">Stationary predictive CV</span><strong className="mt-1 block text-white">~0.24</strong></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">DOI</p>
              <p className="mt-2 break-all font-mono text-xs text-slate-300">10.2139/ssrn.6383218</p>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
          <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research/eeg-temporal-reproduction-bias">Related EEG residual-prediction study</Link>
          <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Back to research programme</Link>
        </div>
      </div>
    </main>
  );
}
