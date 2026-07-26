import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { corticalStateTemporalInference } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cortical State Temporal Inference Manuscript | Peiman Jannatipour",
  description:
    "Manuscript in preparation on cortical-state dynamics, temporal inference, and EEG/fMRI-informed workflows.",
  path: "/research/cortical-state-temporal-inference",
});

export default function CorticalStateTemporalInferencePage() {
  return (
    <main id="main">
      <Section
        description="Manuscript in preparation on cortical-state dynamics, temporal inference, and EEG/fMRI-informed analysis."
        eyebrow="Temporal inference"
        headingLevel={1}
        title="Cortical State Temporal Inference Manuscript"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Researchers reviewing laboratory data."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="/images/stock-lab-data-analysis.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Illustrative research context; not an image from the manuscript.
            </figcaption>
          </figure>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <StatusBadge status={corticalStateTemporalInference.status} />
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
              Current scope
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ongoing work connects cortical-state dynamics with temporal
              inference and EEG/fMRI-informed analysis. Methods and results
              will be added when a public manuscript is available.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/research" variant="secondary">
                Back to research
              </LinkButton>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
