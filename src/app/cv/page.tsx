import type { Metadata } from "next";
import { CVSection } from "@/components/CVSection";
import { LinkButton } from "@/components/LinkButton";
import { Section } from "@/components/Section";
import { cv } from "@/data/cv";
import { externalLinks } from "@/data/links";
import { getAvailableDownloads } from "@/lib/downloads";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "CV - Peiman Jannatipour",
  path: "/cv",
});

export default function CVPage() {
  const availableDownloads = getAvailableDownloads();

  return (
    <main id="main">
      <Section
        description={cv.summary}
        eyebrow="CV"
        title="Professional CV"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="grid gap-6">
            {cv.sections.map((section) => (
              <CVSection
                items={section.items}
                key={section.title}
                title={section.title}
              />
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Downloads
              </h2>
              {availableDownloads.length > 0 ? (
                <div className="mt-5 grid gap-3">
                  {availableDownloads.map((item) => (
                    <LinkButton
                      download
                      href={item.href}
                      key={item.href}
                      variant="secondary"
                    >
                      {item.label}
                    </LinkButton>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  PDF download links appear here only after final files are added
                  to public/docs.
                </p>
              )}
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                Contact
              </h2>
              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                <a
                  className="font-medium text-cyan-800 underline-offset-4 hover:underline"
                  href={externalLinks.email.href}
                >
                  {externalLinks.email.value}
                </a>
                <a
                  className="font-medium text-cyan-800 underline-offset-4 hover:underline"
                  href={externalLinks.orcid.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ORCID: {externalLinks.orcid.value}
                </a>
                <a
                  className="font-medium text-cyan-800 underline-offset-4 hover:underline"
                  href={externalLinks.github.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub: {externalLinks.github.value}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description="Skills are grouped for review by research, engineering, and product audiences."
        eyebrow="Skills"
        title="Capabilities"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {cv.skills.map((group) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-6"
              key={group.group}
            >
              <h2 className="text-lg font-semibold tracking-tight text-slate-950">
                {group.group}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
