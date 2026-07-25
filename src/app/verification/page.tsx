import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import {
  claimStatusRule,
  hiddenIdentifiers,
  verificationItems,
} from "@/data/verification";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Verification & Status - Peiman Jannatipour",
  path: "/verification",
});

export default function VerificationPage() {
  return (
    <main id="main">
      <Section
        description="This page separates verified links, listed identifiers, hidden identifiers, and status labels."
        eyebrow="Verification"
        title="Verification and status"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {verificationItems.map((item) => {
            const content = (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={item.status} />
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                  {item.label}
                </h2>
                <p className="mt-2 break-words text-sm text-slate-600">
                  {item.value}
                </p>
              </>
            );

            return item.href ? (
              <a
                className="rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                href={item.href}
                key={item.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <div
                className="rounded-lg border border-slate-200 bg-white p-6"
                key={item.label}
              >
                {content}
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200 bg-slate-50"
        description={claimStatusRule.description}
        eyebrow="Status labels"
        title={claimStatusRule.title}
      >
        <div className="flex flex-wrap gap-3">
          {claimStatusRule.statuses.map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </div>
      </Section>

      <Section
        description="These fields are intentionally not rendered elsewhere until a verified URL or exact role is available."
        eyebrow="Hidden until verified"
        title="Missing identifiers"
      >
        <div className="grid gap-3 md:grid-cols-2">
          {hiddenIdentifiers.map((identifier) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700"
              key={identifier}
            >
              {identifier}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
