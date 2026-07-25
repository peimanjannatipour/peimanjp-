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
      "Published research article with DOI. It should not be described as a peer-reviewed journal article unless final journal acceptance is verified.",
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
        description="Research Article آ· Posted June 1st, 2026 آ· Universita Campus Bio-Medico di Roma (UCBM), Rome, Italy"
        eyebrow="Flagship neuroscience article"
        title={eegTemporalReproductionBias.title}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Illustrative laboratory team reviewing research data."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="https://images.pexels.com/photos/4031694/pexels-photo-4031694.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock research context for EEG and temporal cognition work.
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
                <dt className="font-semibold text-slate-950">Claim boundary</dt>
                <dd>
                  Do not describe as a peer-reviewed journal article unless final
                  journal acceptance is verified.
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
        description="The article is framed as a conservative residual-prediction study, not a broad biomarker claim."
        eyebrow="Research summary"
        title="Conservative residual-prediction framework"
      >
        <p className="max-w-4xl text-base leading-8 text-slate-700">
          This article tests whether sensor-level EEG features explain residual
          temporal reproduction bias beyond behavioural structure. It
          reconstructs 19,419 verified target-reproduction trials from 27
          participants and uses a conservative residual-prediction framework
          with leave-one-subject-out cross-validation, nested ridge
          regularization, shadow EEG controls, ablation analyses,
          artifact-sensitivity analyses, and subject-level inference. The result
          is intentionally cautious: it does not support a subject-independent
          EEG biomarker or direct neural-clock interpretation, but it supports
          the narrower conclusion that temporal reproduction is dominated by
          behavioural context and history while being weakly modulated by
          individualized, calibration-dependent cortical state.
        </p>
      </Section>
    </main>
  );
}
