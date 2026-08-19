import type { Metadata } from "next";
import Link from "next/link";
import homepageData from "@/../content/site-copy/homepage.json";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { contactPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Collaboration | Peiman Jannatipour",
  description:
    "Contact Peiman Jannatipour for computational neuroscience, EEG, research software, NeuroLab OS, NDMS, evidence systems, and scientific collaboration inquiries.",
  path: "/contact",
});

const inquiryTypes = [
  {
    title: "Research collaboration",
    text: "Computational neuroscience, EEG, temporal cognition, Bayesian modelling, developmental neuroimaging, manuscripts, and scientific discussion.",
    subject: "Research collaboration inquiry",
  },
  {
    title: "NeuroLab OS & research software",
    text: "Scientific workflows, neural time-series analysis, reproducibility, provenance, technical beta feedback, and software collaboration.",
    subject: "NeuroLab OS / research software inquiry",
  },
  {
    title: "NDMS & invention",
    text: "Technology-development, patent, privacy-aware multimodal inference, responsible-use, and commercialization conversations.",
    subject: "NDMS / invention inquiry",
  },
  {
    title: "Evidence systems & other projects",
    text: "SMIS-ODS, structured evidence review, research infrastructure, exploratory systems, and other technical project discussions.",
    subject: "Project inquiry",
  },
];

export default function ContactPage() {
  const email = externalLinks.email.value;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd data={contactPageJsonLd("/contact")} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Research · software · invention · collaboration</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{homepageData.contact.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{homepageData.contact.body}</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The fastest route is email. A short message with the topic, why you are reaching out, and any relevant paper, project, dataset, or technical context is usually enough to start a focused conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="inline-flex min-h-11 items-center rounded-lg border border-sky-500/30 bg-sky-600/25 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-600/40" href={externalLinks.email.href}>Email Peiman →</a>
              <a className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href={externalLinks.orcid.href} rel="noreferrer" target="_blank">ORCID →</a>
              <a className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700" href={externalLinks.researchGate.href} rel="noreferrer" target="_blank">ResearchGate →</a>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Direct contact</p>
            <a className="mt-3 block break-all text-lg font-bold text-sky-200 underline underline-offset-4" href={externalLinks.email.href}>{email}</a>
            <p className="mt-4 text-sm leading-7 text-slate-400">For identity and output verification, use the public ORCID, ResearchGate, GitHub, and Verification pages linked below.</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a className="font-semibold text-sky-300 underline underline-offset-4" href={externalLinks.github.href} rel="noreferrer" target="_blank">GitHub</a>
              <Link className="font-semibold text-sky-300 underline underline-offset-4" href="/verification">Verification</Link>
              <Link className="font-semibold text-sky-300 underline underline-offset-4" href="/cv">CV</Link>
            </div>
          </aside>
        </div>

        <section className="mt-16" aria-labelledby="inquiry-types-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Inquiry routes</p>
          <h2 className="mt-2 text-3xl font-bold text-white" id="inquiry-types-title">Choose the most relevant context</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {inquiryTypes.map((item) => (
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6" key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{item.text}</p>
                <a className="mt-5 text-sm font-semibold text-sky-300 underline underline-offset-4" href={`mailto:${email}?subject=${encodeURIComponent(item.subject)}`}>Start email →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7" aria-labelledby="contact-context-title">
          <h2 className="text-2xl font-bold text-white" id="contact-context-title">Useful context before reaching out</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3 text-sm leading-7 text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">For a research inquiry, include the scientific question and the specific role or discussion you have in mind.</div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">For software or invention work, include the use case, technical constraints, and whether the conversation is exploratory or implementation-focused.</div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">For manuscripts or publications, link the relevant public paper or identify the work by title so the context is unambiguous.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
