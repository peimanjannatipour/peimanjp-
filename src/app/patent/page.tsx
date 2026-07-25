import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { patent } from "@/data/patent";
import { createPageMetadata } from "@/lib/metadata";
import { patentTechArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Patent & Invention - Peiman Jannatipour",
  path: "/patent",
});

export default function PatentPage() {
  return (
    <main id="main">
      <JsonLd data={patentTechArticleJsonLd} />
      <Section
        description={patent.subtitle}
        eyebrow="Patent / invention"
        title={patent.title}
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="Patent pending" />
              <StatusBadge status="PCT application filed" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Application
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-950">
              {patent.application}
            </p>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              This page does not state or imply granted or issued patent status.
            </p>
          </aside>

          <div>
            <p className="text-base leading-8 text-slate-700">
              {patent.description}
            </p>
            <div className="mt-8 grid gap-4">
              {patent.sections.map((section) => (
                <article
                  className="rounded-lg border border-slate-200 bg-white p-6"
                  key={section.title}
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  {"body" in section && section.body ? (
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {section.body}
                    </p>
                  ) : null}
                  {"bullets" in section && section.bullets ? (
                    <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
                      {section.bullets.map((bullet) => (
                        <li className="flex gap-3" key={bullet}>
                          <span
                            aria-hidden="true"
                            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
