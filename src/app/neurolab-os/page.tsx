import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { neurolab } from "@/data/neurolab";
import { createPageMetadata } from "@/lib/metadata";
import { neurolabSoftwareJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "NeuroLab OS - Research Workflow Platform",
  path: "/neurolab-os",
});

export default function NeuroLabPage() {
  return (
    <main id="main">
      <JsonLd data={neurolabSoftwareJsonLd} />
      <Section
        description={neurolab.subtitle}
        eyebrow="NeuroLab OS"
        headingLevel={1}
        title={neurolab.title}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex flex-wrap gap-3">
              {neurolab.status.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-slate-700">
              {neurolab.description}
            </p>
            <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-600">
              Research-use only; clinical positioning is not claimed.
            </p>
          </div>

          <div className="grid gap-5">
            <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              <Image
                alt="Researcher working with a data-analysis notebook."
                className="aspect-[4/3] w-full object-cover"
                height={900}
                src="/images/stock-data-dashboard.jpg"
                width={1200}
              />
              <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
                Illustrative data-analysis interface; not a NeuroLab OS product screenshot.
              </figcaption>
            </figure>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Workflow
              </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {neurolab.architecture.workflow.map((step) => (
                <span
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
                  key={step}
                >
                  {step}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Modules are presented as intended research workflow capabilities, not deployed clinical claims."
        eyebrow="Modules"
        title="Workflow modules"
      >
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">Module</th>
                <th className="px-5 py-4 font-semibold">Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {neurolab.modules.map((module) => (
                <tr key={module.name}>
                  <td className="px-5 py-4 font-semibold text-slate-950">
                    {module.name}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{module.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        description="The architecture labels communicate intended stack choices for a pre-production research platform."
        eyebrow="Architecture"
        title="Technical stack"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Backend", neurolab.architecture.backend],
            ["Frontend", neurolab.architecture.frontend],
          ].map(([label, stack]) => (
            <div className="rounded-lg border border-slate-200 bg-white p-6" key={label as string}>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {label as string}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {(stack as string[]).map((item) => (
                  <span
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
