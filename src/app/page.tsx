import Image from "next/image";
import Link from "next/link";
import homepageData from "@/../content/site-copy/homepage.json";
import portfolioData from "@/../content/site-copy/portfolio.json";
import publicationsData from "@/../content/site-copy/publications.json";
import researchData from "@/../content/site-copy/research.json";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen" id="main">
      {/* Hero Section */}
      <section className="relative border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                {homepageData.eyebrow}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {homepageData.h1}
              </h1>
              <p className="mt-4 text-lg font-medium text-sky-300/90 sm:text-xl">
                {homepageData.subtitle}
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                {homepageData.heroParagraph}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {homepageData.primaryButtons.map((btn) => (
                  <Link
                    className="inline-flex items-center justify-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                    href={btn.href}
                    key={btn.label}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
                <Image
                  alt="Research workstation displaying neural data analysis"
                  className="h-80 w-full object-cover transition duration-300 hover:scale-105"
                  height={800}
                  priority
                  src="/assets/stock/stock1.jpg"
                  width={1200}
                />
                <div className="p-4 bg-slate-900/95 border-t border-slate-800">
                  <p className="text-xs text-slate-400">
                    Neural time-series &amp; computational research workstation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-b border-slate-800 bg-slate-900/50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {homepageData.highlights.map((highlight, idx) => (
              <div
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-slate-700"
                key={highlight.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">
                  {highlight.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-slate-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <Image
                  alt="Scientist working in biomedical research environment"
                  className="h-80 w-full object-cover"
                  height={800}
                  src="/assets/stock/stock2.jpg"
                  width={1200}
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {homepageData.about.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                {homepageData.about.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview Section */}
      <section className="border-b border-slate-800 bg-slate-900/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Focus Areas
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                {researchData.title}
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
              href="/research"
            >
              View all research →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {researchData.cards.map((card) => (
              <div
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm hover:border-slate-700 transition"
                key={card.id}
              >
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="border-b border-slate-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Scholarly Output
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                {publicationsData.title}
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
              href="/publications"
            >
              View all publications →
            </Link>
          </div>

          <div className="mt-10 space-y-6">
            {publicationsData.entries.map((entry) => (
              <div
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700"
                key={entry.id}
              >
                <h3 className="text-lg font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {entry.description}
                </p>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300 transition"
                    href={entry.url}
                    rel="noreferrer"
                    target={entry.url.startsWith("http") ? "_blank" : "_self"}
                  >
                    {entry.linkLabel} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="border-b border-slate-800 bg-slate-900/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              {portfolioData.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {portfolioData.introText}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.items.map((item) => {
              if (item.available === false) return null;
              return (
                <a
                  className="group block rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:border-sky-500/50 hover:bg-slate-900/80"
                  href={item.url}
                  key={item.id}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition">
                      {item.title}
                    </h3>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              {homepageData.contact.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              {homepageData.contact.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-600/20 px-5 py-2.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-600/40 hover:text-white"
                href="https://orcid.org/0009-0009-3205-2423"
                rel="noreferrer"
                target="_blank"
              >
                ORCID Profile
              </a>
              <a
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 hover:text-white"
                href="https://www.researchgate.net/profile/Peiman-Jannatipour-2"
                rel="noreferrer"
                target="_blank"
              >
                ResearchGate Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
