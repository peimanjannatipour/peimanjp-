import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { externalLinks } from "@/data/links";
import { smisOds } from "@/data/smis";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "SMIS-ODS - Supplement Claim Evidence Review",
  description:
    "SMIS-ODS is a research-use evidence-review and claim-verification system for supplement and health-related claims.",
  path: smisOds.route,
});

export default function SmisOdsPage() {
  return (
    <main id="main">
      <JsonLd data={faqJsonLd(smisOds.faq)} />
      <Section
        description={smisOds.positioning}
        eyebrow={smisOds.category}
        title={smisOds.name}
      >
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {smisOds.status.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
            <p className="text-base leading-8 text-slate-700">
              {smisOds.summary}
            </p>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
              <h2 className="font-semibold tracking-tight">Limitations</h2>
              <p className="mt-2">{smisOds.limitations}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={externalLinks.email.href ?? "/contact"}>
                Request project info
              </LinkButton>
              <LinkButton href="/projects" variant="secondary">
                Back to projects
              </LinkButton>
            </div>
          </div>

          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <Image
              alt={smisOds.image.alt}
              className="aspect-[16/9] w-full object-cover"
              height={900}
              priority
              src={smisOds.image.src}
              width={1600}
            />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">
              {smisOds.image.caption}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="The system separates claims from sources and review criteria so the evidence structure can be inspected."
        eyebrow="Review model"
        title="What SMIS-ODS evaluates"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {smisOds.evaluates.map((item) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-medium leading-7 text-slate-700"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-white"
        description="Clear boundaries prevent the project from being read as a product making health instructions."
        eyebrow="Claim safety"
        title="What SMIS-ODS is not"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "It is not a diagnostic system, treatment system, or replacement for qualified clinicians.",
            "It does not recommend supplements, prescribe products, or claim that a supplement effect is proven.",
            "It is not a generic supplement content site. The emphasis is evidence structure, source reliability, risk of bias, and support status.",
            "It is intended for research, review, and decision-support contexts where claims need to be inspected carefully.",
          ].map((item) => (
            <p
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Short public answers. More implementation detail can be provided privately when appropriate."
        eyebrow="FAQ"
        title="SMIS-ODS questions"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {smisOds.faq.map((item) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5"
              key={item.question}
            >
              <h2 className="text-base font-semibold tracking-tight text-slate-950">
                {item.question}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
