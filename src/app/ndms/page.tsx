import type { Metadata } from "next";
import Image from "next/image";
import seoData from "@/../content/site-copy/seo.json";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { techArticleJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "NDMS | Privacy-Aware Multimodal Neurotechnology Concept",
  description:
    "NDMS is a privacy-aware multimodal neurotechnology concept focused on structured signal integration, real-time inference, and interpretable system design.",
  path: "/ndms",
});

export default function NDMSPage() {
  const data = seoData.ndms;

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen py-16 lg:py-24" id="main">
      <JsonLd
        data={techArticleJsonLd({
          title: "NDMS — Privacy-Aware Multimodal Neurotechnology Project",
          description: "NDMS is a privacy-aware multimodal neurotechnology project focused on structured multimodal signal integration, quality-aware inference, edge-oriented processing, and interpretable system design.",
          path: "/ndms",
        })}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
            Neurotechnology &amp; Invention
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            NDMS is a privacy-aware multimodal neurotechnology project focused on structured multimodal signal integration, quality-aware inference, edge-oriented processing, and interpretable system design. It should be presented as an invention and technology-development program, not as a validated diagnostic or clinical product.
          </p>
        </div>

        {/* Supporting Stock Photo Context */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Modern biomedical research environment for neurotechnology"
              className="h-72 w-full object-cover"
              height={600}
              src="/assets/stock/stock7.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Multimodal signal integration &amp; privacy-aware architecture
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              alt="Neuroscience and cognition-themed lab image"
              className="h-72 w-full object-cover"
              height={600}
              src="/assets/stock/stock8.jpg"
              width={800}
            />
            <div className="p-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Interpretable real-time inference &amp; technology direction
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
