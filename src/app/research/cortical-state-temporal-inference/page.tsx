import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { corticalStateTemporalInference } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";
import { scholarlyArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Cortical State Temporal Inference Manuscript | Peiman Jannatipour",
  description:
    "Status-labelled computational neuroscience manuscript direction on cortical-state dynamics, temporal inference, and EEG/fMRI-informed workflows.",
  path: "/research/cortical-state-temporal-inference",
});

export default function CorticalStateTemporalInferencePage() {
  return (
    <main id="main">
      <JsonLd
        data={scholarlyArticleJsonLd({
          name: corticalStateTemporalInference.title,
          description:
            "Status-labelled computational neuroscience manuscript direction on cortical-state dynamics, temporal inference, and EEG/fMRI-informed workflows.",
          urlPath: "/research/cortical-state-temporal-inference",
          status: "Manuscript in preparation",
        })}
      />
      <Section
        description="Status-labelled computational neuroscience manuscript direction."
        eyebrow="Temporal inference"
        title="Cortical State Temporal Inference Manuscript"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt="Illustrative research team reviewing results at a workstation."
              className="aspect-[4/3] w-full object-cover"
              height={900}
              src="https://images.pexels.com/photos/9574543/pexels-photo-9574543.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={1200}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              Stock research-review context for cortical-state and temporal inference work.
            </figcaption>
          </figure>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <StatusBadge status={corticalStateTemporalInference.status} />
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
              Status-labelled research direction
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This page keeps the cortical-state temporal inference direction
              visible while avoiding claims beyond available public artifacts.
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
