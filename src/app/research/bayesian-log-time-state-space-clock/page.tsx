import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { bayesianLogTimeClock } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd, scholarlyArticleJsonLd } from "@/lib/structured-data";

const bayesianFaq = [
  {
    question: "What is the Bayesian Log-Time article about?",
    answer:
      "It models human time reproduction using a Bayesian log-time state-space clock with Kalman-like prior integration and lognormal observation noise.",
  },
  {
    question: "What is its main contribution?",
    answer:
      "It provides a quantitative timing benchmark and identifies a mean-variance dissociation that motivates heteroscedastic or multi-source timing models.",
  },
  {
    question: "What is the status?",
    answer: "SSRN preprint with DOI.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title:
    "A Bayesian Log-Time State-Space Clock for Human Time Reproduction | Peiman Jannatipour",
  description:
    "SSRN preprint by Peiman Jannatipour on Bayesian timing, log-time state-space modelling, central tendency, temporal cognition, and human time reproduction.",
  path: "/research/bayesian-log-time-state-space-clock",
});

export default function BayesianLogTimeStateSpaceClockPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd(bayesianFaq)} />
      <JsonLd
        data={scholarlyArticleJsonLd({
          name: bayesianLogTimeClock.title,
          description: bayesianLogTimeClock.summary ?? "",
          urlPath: "/research/bayesian-log-time-state-space-clock",
          status: bayesianLogTimeClock.status,
          identifier: bayesianLogTimeClock.doi,
          keywords: bayesianLogTimeClock.keywords,
        })}
      />
      <Section
        description="SSRN preprint with DOI آ· Near East University"
        eyebrow="Second neuroscience anchor"
        title={bayesianLogTimeClock.title}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Illustrative data-analysis workspace used as context for computational modelling."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?auto=format&fit=crop&fm=jpg&q=82&w=1800"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock computational-modelling context for Bayesian timing research.
            </figcaption>
          </figure>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <StatusBadge status={bayesianLogTimeClock.status} />
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
              Article metadata
            </h2>
            <dl className="mt-5 grid gap-3 text-sm text-slate-600">
              <div>
                <dt className="font-semibold text-slate-950">Author</dt>
                <dd>Peiman Jannatipour</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Affiliation</dt>
                <dd>Near East University</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">DOI</dt>
                <dd>{bayesianLogTimeClock.doi}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href={bayesianLogTimeClock.doi ?? "/research"}>
                Open DOI
              </LinkButton>
              <LinkButton href="/research" variant="secondary">
                Back to research
              </LinkButton>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="The article is presented as a computational neuroscience preprint and timing-model benchmark."
        eyebrow="Research summary"
        title="Bayesian timing benchmark"
      >
        <p className="max-w-4xl text-base leading-8 text-slate-700">
          This article models human time reproduction using a Bayesian log-time
          state-space clock with Kalman-like prior integration and lognormal
          observation noise. It analyzes cleaned trial-level behavioural data
          with Nclean = 15,264 of Nraw = 15,336 trials and achieves strong
          mean-level predictive performance, including RMSE = 0.8237 s, MAE =
          0.5833 s, R2 = 0.7099, log-RMSE = 0.2490, and log-MAE = 0.1862. The
          model reproduces the canonical central-tendency profile:
          overestimation at short durations and underestimation at long
          durations. Its major contribution is not only fit quality, but
          falsification: it identifies a mean-variance dissociation where
          empirical CV decreases with duration while stationary
          posterior-predictive CV remains near constant, motivating
          next-generation heteroscedastic or multi-source timing models.
        </p>
      </Section>
    </main>
  );
}
