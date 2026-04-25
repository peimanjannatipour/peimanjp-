import type { Metadata } from "next";
import Image from "next/image";
import { ScientificPortrait } from "@/components/ScientificPortrait";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Peiman Jannatipour",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <Section
        description="A concise professional profile for collaborators, editors, professors, mentors, and technical reviewers."
        eyebrow="About"
        title="Research-oriented builder of inspectable artifacts"
      >
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.1fr]">
          <div className="space-y-5">
            <ScientificPortrait compact />
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Positioning
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-700">
              {profile.role}
            </p>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              Iranian researcher and inventor working across neurotechnology,
              computational modeling, biomedical systems, and research software.
            </p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Affiliations
              </p>
              <div className="mt-3 grid gap-3">
                {profile.affiliations
                  .filter((item) => item.visible)
                  .map((item) => (
                    <a
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                      href={item.proofUrl}
                      key={item.institution}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.iconUrl ? (
                        <Image
                          alt=""
                          className="h-7 w-7 rounded-md border border-slate-200 bg-white object-contain p-0.5"
                          height={28}
                          src={item.iconUrl}
                          unoptimized
                          width={28}
                        />
                      ) : null}
                      {item.institution}
                    </a>
                  ))}
              </div>
            </div>
            </div>
          </div>

          <div className="space-y-5 self-center">
            {profile.about.map((paragraph) => (
              <p className="text-base leading-8 text-slate-700" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="The site is structured to make claims easier to verify and easier to review."
        eyebrow="Working principles"
        title="How the portfolio is framed"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {profile.principles.map((principle) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700"
              key={principle}
            >
              {principle}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
