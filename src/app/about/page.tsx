import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import homepageData from "@/../content/site-copy/homepage.json";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { createPageMetadata } from "@/lib/metadata";
import { profilePageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "About | Peiman Jannatipour",
  description:
    "About Peiman Jannatipour: computational neuroscience, EEG, developmental neuroimaging, research software, evidence systems, and neurotechnology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-slate-100 lg:py-24" id="main">
      <JsonLd data={profilePageJsonLd("/about")} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Researcher · inventor · scientific-systems builder</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{homepageData.about.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{homepageData.about.body}</p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The work spans empirical neuroscience, computational modelling, active developmental-neuroimaging research, research software, privacy-aware neurotechnology, and evidence-review systems. Across those areas, I prefer explicit assumptions, reproducible workflows, conservative interpretation, and public status labels that distinguish preprints, manuscripts, research lines, prototypes, and patent-pending work.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Research programme</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/publications">Publications and manuscripts</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/projects">Projects</Link>
              <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/contact">Contact</Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <Image alt="Peiman Jannatipour" className="aspect-[4/5] w-full object-cover object-center" height={1200} priority src="/images/inventor-photo.jpg" width={960} />
              <figcaption className="border-t border-slate-800 p-4 text-xs leading-6 text-slate-400">Peiman Jannatipour · computational neuroscience, research software, and neurotechnology.</figcaption>
            </figure>
          </div>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5" aria-labelledby="about-principles-title">
          <h2 className="sr-only" id="about-principles-title">Research principles</h2>
          {homepageData.principles.map((principle) => (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm font-semibold leading-6 text-slate-200" key={principle}>{principle}</div>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-7" aria-labelledby="profile-links-title">
          <h2 className="text-2xl font-bold text-white" id="profile-links-title">Public scholarly and technical profiles</h2>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a className="font-semibold text-sky-300 underline underline-offset-4" href={externalLinks.orcid.href} rel="noreferrer" target="_blank">ORCID</a>
            <a className="font-semibold text-sky-300 underline underline-offset-4" href={externalLinks.researchGate.href} rel="noreferrer" target="_blank">ResearchGate</a>
            <a className="font-semibold text-sky-300 underline underline-offset-4" href={externalLinks.github.href} rel="noreferrer" target="_blank">GitHub</a>
            <Link className="font-semibold text-sky-300 underline underline-offset-4" href="/cv">CV</Link>
            <Link className="font-semibold text-sky-300 underline underline-offset-4" href="/verification">Verification</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
