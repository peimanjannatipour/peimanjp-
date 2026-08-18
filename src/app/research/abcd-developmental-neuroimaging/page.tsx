import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "ABCD Developmental Neuroimaging | Peiman Jannatipour",
  description:
    "Ongoing ABCD developmental neuroimaging research on adolescent brain maturation, resting-state connectivity, and dimensional autism/ADHD traits.",
  path: "/research/abcd-developmental-neuroimaging",
});

export default function AbcdDevelopmentalNeuroimagingPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Ongoing research line</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">ABCD developmental neuroimaging</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This research line uses the Adolescent Brain Cognitive Development (ABCD) study as a large-scale developmental-neuroimaging framework for questions about adolescent brain maturation, resting-state connectivity, and dimensional autism- and ADHD-related traits.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            The public description is intentionally limited to the research direction. Unpublished hypotheses, analysis choices, intermediate results, collaborator-specific material, and interpretation are not disclosed here before scientific release.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <Image
              alt="Researchers reviewing scientific data in a laboratory setting"
              className="aspect-[4/3] w-full object-cover"
              height={900}
              priority
              src="/images/stock-lab-data-analysis.jpg"
              width={1200}
            />
            <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">
              Illustrative research-review context; this is not an ABCD scan or an image from the project dataset.
            </figcaption>
          </figure>

          <div className="grid gap-5">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">Scientific scope</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Adolescent brain maturation and developmental variation.</li>
                <li>Resting-state functional connectivity as a systems-level measure.</li>
                <li>Dimensional rather than purely categorical neurodevelopmental traits.</li>
                <li>Autism- and ADHD-related trait co-occurrence considered within a developmental framework.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">Public-status boundary</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This is an active research line, not a published result page. The purpose of this page is to make the direction visible to collaborators and readers without pre-empting manuscripts or exposing unpublished findings.
              </p>
            </section>

            <div className="flex flex-wrap gap-4">
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Back to research</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/contact">Research contact</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
