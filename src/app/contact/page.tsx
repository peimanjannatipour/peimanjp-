import type { Metadata } from "next";
import homepageData from "@/../content/site-copy/homepage.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { contactPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Peiman Jannatipour",
  description: homepageData.contact.body,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd data={contactPageJsonLd("/contact")} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Inquiries
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {homepageData.contact.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {homepageData.contact.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
              href="https://orcid.org/0009-0009-3205-2423"
              rel="noreferrer"
              target="_blank"
            >
              ORCID Profile →
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
              href="https://www.researchgate.net/profile/Peiman-Jannatipour-2"
              rel="noreferrer"
              target="_blank"
            >
              ResearchGate Profile →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
