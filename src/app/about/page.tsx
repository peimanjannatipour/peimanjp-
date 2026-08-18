import type { Metadata } from "next";
import Image from "next/image";
import homepageData from "@/../content/site-copy/homepage.json";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About | Peiman Jannatipour",
  description: homepageData.about.body,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
              Researcher &amp; Inventor
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {homepageData.about.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {homepageData.about.body}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                alt="Scientist working in biomedical research environment"
                className="h-80 w-full object-cover"
                height={800}
                src="/assets/stock/stock2.jpg"
                width={1200}
              />
              <div className="p-4 border-t border-slate-800">
                <p className="text-xs text-slate-400">
                  Computational neuroscience &amp; neurotechnology systems research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
