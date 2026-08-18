import Image from "next/image";
import Link from "next/link";
import homepageData from "@/../content/site-copy/homepage.json";
import publicationsData from "@/../content/site-copy/publications.json";
import researchData from "@/../content/site-copy/research.json";
import { JsonLd } from "@/components/JsonLd";
import { externalLinks } from "@/data/links";
import { projects } from "@/data/projects";
import { profilePageJsonLd } from "@/lib/structured-data";

const currentWorkTitles = [
  "ABCD Autism-ADHD Developmental Neuroimaging Research Line",
  "NeuroLab OS",
  "Masking Index Prototype",
  "SMIS-ODS",
];

export default function Home() {
  const currentWork = projects.filter((project) => currentWorkTitles.includes(project.title));

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100" id="main">
      <JsonLd data={profilePageJsonLd("/")} />

      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-24">
        <div aria-hidden="true" className="research-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                {homepageData.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {homepageData.h1}
              </h1>
              <p className="mt-4 max-w-4xl text-lg font-semibold leading-8 text-sky-200 sm:text-xl">
                {homepageData.subtitle}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                {homepageData.heroParagraph}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                {homepageData.heroSecondary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {homepageData.primaryButtons.map((button) => (
                  <Link
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:bg-sky-600/35"
                    href={button.href}
                    key={button.label}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                <a className="underline decoration-slate-600 underline-offset-4 hover:text-white" href={externalLinks.orcid.href} rel="noreferrer" target="_blank">ORCID</a>
                <a className="underline decoration-slate-600 underline-offset-4 hover:text-white" href={externalLinks.researchGate.href} rel="noreferrer" target="_blank">ResearchGate</a>
                <a className="underline decoration-slate-600 underline-offset-4 hover:text-white" href={externalLinks.github.href} rel="noreferrer" target="_blank">GitHub</a>
                <Link className="underline decoration-slate-600 underline-offset-4 hover:text-white" href="/cv">CV</Link>
                <Link className="underline decoration-slate-600 underline-offset-4 hover:text-white" href="/verification">Verification</Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
                <Image
                  alt="Peiman Jannatipour, researcher and inventor"
                  className="aspect-[4/5] w-full object-cover object-center"
                  height={1200}
                  priority
                  src="/images/inventor-photo.jpg"
                  width={960}
                />
                <figcaption className="border-t border-slate-800 px-5 py-4 text-xs leading-5 text-slate-400">
                  Peiman Jannatipour · computational neuroscience, research software, and neurotechnology.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/50 py-14" aria-labelledby="research-highlights">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Research profile</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="research-highlights">Connected research lines</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homepageData.highlights.map((highlight, index) => (
              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6" key={highlight.title}>
                <span className="text-xs font-bold text-sky-300">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 py-16 lg:py-20" aria-labelledby="programme-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Scientific approach</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="programme-title">A research programme built around evidence, models, and reproducibility</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {homepageData.principles.map((principle) => (
                  <li className="flex gap-3" key={principle}>
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              {homepageData.researchProgramme.map((paragraph) => (
                <p className="text-base leading-8 text-slate-300" key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/30 py-16 lg:py-20" aria-labelledby="areas-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Research areas</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="areas-title">{researchData.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{researchData.intro}</p>
            </div>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/research">Full research overview</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchData.cards.map((card) => (
              <Link className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500/60" href={card.href} key={card.id}>
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-200">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-sky-300">Explore this research line →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 py-16 lg:py-20" aria-labelledby="current-work-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">In progress</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="current-work-title">Current research and systems work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Ongoing work is shown at the level appropriate for a public research portfolio. Unpublished hypotheses, results, and implementation details are intentionally not disclosed.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {currentWork.map((project) => (
              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6" key={project.title}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">{project.status}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400" key={tag}>{tag}</span>)}
                </div>
                {project.href ? <Link className="mt-5 inline-block text-sm font-semibold text-sky-300 underline underline-offset-4" href={project.href}>Open project page →</Link> : null}
              </article>
            ))}
          </div>
          <div className="mt-6"><Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/projects">View the complete project portfolio →</Link></div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/30 py-16 lg:py-20" aria-labelledby="publications-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Research outputs</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="publications-title">Publications, preprints, and manuscripts</h2>
            </div>
            <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/publications">View all outputs</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {publicationsData.entries.slice(0, 4).map((entry) => (
              <article className="rounded-xl border border-slate-800 bg-slate-900 p-6" key={entry.id}>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">{entry.status}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{entry.description}</p>
                {entry.url ? <a className="mt-5 inline-block text-sm font-semibold text-sky-300 underline underline-offset-4" href={entry.url} rel={entry.url.startsWith("http") ? "noreferrer" : undefined} target={entry.url.startsWith("http") ? "_blank" : undefined}>{entry.linkLabel} →</a> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-labelledby="about-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image alt="Peiman Jannatipour" className="aspect-[4/3] w-full object-cover" height={900} src="/images/peiman-jp-casual.jpg" width={1200} />
            </figure>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">About</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white" id="about-title">{homepageData.about.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{homepageData.about.body}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/about">Read the full profile</Link>
                <Link className="text-sm font-semibold text-sky-300 underline underline-offset-4" href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
