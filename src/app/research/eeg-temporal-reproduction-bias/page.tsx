import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { eegTemporalReproductionBias } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd, scholarlyArticleJsonLd } from "@/lib/structured-data";

const eegFaq = [
  {
    question: "What is the article about?",
    answer:
      "It tests whether sensor-level EEG features explain residual temporal reproduction bias beyond behavioural structure.",
  },
  {
    question: "Does the article claim a subject-independent EEG biomarker?",
    answer:
      "No. The interpretation is intentionally cautious and does not claim a subject-independent EEG biomarker or direct neural-clock interpretation.",
  },
  {
    question: "What is the status?",
    answer:
      "It is a Research Square preprint with a DOI. No peer-reviewed journal version is claimed here.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title:
    "Sensor-Level EEG Residual Prediction of Temporal Reproduction Bias | Peiman Jannatipour",
  description:
    "Research article by Peiman Jannatipour on EEG residual prediction, temporal reproduction bias, time perception, Bayesian timing, and sensor-level neural state.",
  path: "/research/eeg-temporal-reproduction-bias",
});

export default function EegTemporalReproductionBiasPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd(eegFaq)} />
      <JsonLd
        data={scholarlyArticleJsonLd({
          name: eegTemporalReproductionBias.title,
          description: eegTemporalReproductionBias.summary ?? "",
          urlPath: "/research/eeg-temporal-reproduction-bias",
          status: eegTemporalReproductionBias.status,
          identifier: eegTemporalReproductionBias.doi,
          datePublished: "2026-06-01",
          keywords: eegTemporalReproductionBias.keywords,
        })}
      />
      <Section
        description="Research Square preprint · 2026 · DOI 10.21203/rs.3.rs-9852649/v1"
        eyebrow="EEG and temporal cognition"
        headingLevel={1}
        title={eegTemporalReproductionBias.title}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Researchers working in a biomedical laboratory."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="/images/stock-neuroscience-research.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Illustrative research context; not an image from the reported experiment.
            </figcaption>
          </figure>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <StatusBadge status={eegTemporalReproductionBias.status} />
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
              Article metadata
            </h2>
            <dl className="mt-5 grid gap-3 text-sm text-slate-600">
              <div>
                <dt className="font-semibold text-slate-950">Author</dt>
                <dd>Peiman Jannatipour</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">ORCID</dt>
                <dd>0009-0009-3205-2423</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">DOI</dt>
                <dd>{eegTemporalReproductionBias.doi}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-950">Publication status</dt>
                <dd>
                  Research Square preprint; peer review is not claimed.
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href={eegTemporalReproductionBias.doi ?? "/research"}>
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
        description="Behavioural structure explains most timing error; calibrated EEG adds a small incremental signal."
        eyebrow="Research summary"
        title="What the EEG added — and what it did not"
      >
        <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-700">
          <p>
            The study analyzes 19,419 target–reproduction trials from 27
            participants. It first models timing error from target duration,
            task context, range, trial order, and previous-trial history, then
            tests whether sensor-level theta, alpha, beta, and low-gamma
            features improve held-out prediction under leave-one-subject-out
            cross-validation, nested ridge regularization, shadow controls,
            ablations, artifact-sensitivity analyses, and subject-level
            inference.
          </p>
          <p>
            Strict train-only EEG standardization did not improve held-out
            prediction. Unsupervised within-subject calibration produced a
            small but reliable gain over the behavioural model: RMSE fell from
            0.211012 to 0.210683 (0.156%; permutation p = 0.010), and the
            improvement exceeded the within-subject shadow control.
          </p>
          <p>
            The result does not establish a subject-independent EEG biomarker
            or a direct neural clock. It supports individualized,
            calibration-dependent prediction in which behavioural context and
            history remain the dominant sources of temporal reproduction error.
          </p>
        </div>
      </Section>
    </main>
  );
}
