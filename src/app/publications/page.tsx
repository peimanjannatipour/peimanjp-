import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PublicationCard } from "@/components/PublicationCard";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { abcdDevelopmentalNeuroimaging, publications } from "@/data/research";
import { createPageMetadata } from "@/lib/metadata";
import { faqJsonLd, preprintJsonLd } from "@/lib/structured-data";

const publicationsFaq = [
  {
    question: "What leads the publication record?",
    answer:
      "The publication record starts with two computational neuroscience preprints on EEG residual prediction and Bayesian log-time state-space timing.",
  },
  {
    question: "Is the Research Square article a peer-reviewed journal article?",
    answer:
      "It is a Research Square preprint with a DOI. No peer-reviewed journal version is claimed here.",
  },
  {
    question: "How are other outputs classified?",
    answer:
      "Other outputs are separated as manuscripts, patent-pending invention work, research software, evidence systems, or exploratory theoretical modelling.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Publications | Peiman Jannatipour | Computational Neuroscience Articles",
  description:
    "Computational neuroscience preprints, manuscripts, PCT-filed invention work, research software, and exploratory modelling by Peiman Jannatipour.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <main id="main">
      <JsonLd data={preprintJsonLd} />
      <JsonLd data={faqJsonLd(publicationsFaq)} />
      <Section
        description="Public preprints, ongoing manuscripts, software, and patent work are listed separately with their current status."
        eyebrow="Publications"
        headingLevel={1}
        title="Publications and manuscripts"
      >
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Computational neuroscience preprints
            </h2>
            <div className="mt-5 grid gap-5">
              {publications.neuroscienceArticles.map((item) => (
                <PublicationCard item={item} key={item.title} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Ongoing manuscripts and research
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <StatusBadge status={abcdDevelopmentalNeuroimaging.status} />
                <p className="mt-4 font-semibold text-slate-950">
                  {abcdDevelopmentalNeuroimaging.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {abcdDevelopmentalNeuroimaging.summary}
                </p>
              </div>
              {publications.manuscripts.map((item) => (
                <div
                  className="rounded-lg border border-slate-200 bg-white p-5"
                  key={item.title}
                >
                  <StatusBadge status={item.status} />
                  <p className="mt-4 font-semibold text-slate-950">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.summary ??
                      "This work is in preparation; methods and results will be added with a public manuscript."}
                  </p>
                  {item.href ? (
                    <a
                      className="mt-4 inline-flex text-sm font-semibold text-cyan-800 underline-offset-4 hover:underline"
                      href={item.href}
                    >
                      Open status page
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Patent-pending invention
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <StatusBadge status={publications.patent.status} />
              <StatusBadge status="PCT application filed" />
            </div>
            <p className="mt-4 font-semibold text-slate-950">
              {publications.patent.title}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Application: {publications.patent.identifier}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Exploratory theoretical modelling
            </h2>
            <div className="mt-5 grid gap-5">
              <PublicationCard item={publications.preprints[1]} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
