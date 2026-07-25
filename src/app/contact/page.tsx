import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { externalLinks, siteConfig } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact - Peiman Jannatipour",
  path: "/contact",
});

export default function ContactPage() {
  const contactLinks = [
    externalLinks.email,
    externalLinks.github,
    externalLinks.orcid,
    externalLinks.ssrn,
    externalLinks.website,
  ].filter((item) => item.visible);

  return (
    <main id="main">
      <Section
        description="For research collaboration, mentorship, admissions verification, editorial review context, or technical/product discussions, contact by email."
        eyebrow="Contact"
        title="Professional contact"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="mb-6 flex items-center gap-4">
              <Image
                alt="Casual profile portrait of Peiman Jannatipour"
                className="h-20 w-20 rounded-lg border border-slate-200 object-cover object-top"
                height={320}
                src="/images/peiman-jp-casual.jpg"
                width={320}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Peiman JP
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {siteConfig.name}
                </p>
              </div>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Preferred channel
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Email is the best channel for collaboration, review, or
              verification requests.
            </p>
            <div className="mt-6">
              <LinkButton href={externalLinks.email.href ?? "#"}>
                {externalLinks.email.value}
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                href={item.href}
                key={item.label}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </span>
                <span className="mt-2 block break-words text-sm font-semibold text-slate-950">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
