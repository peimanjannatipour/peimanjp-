import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | PEIMAN JP",
  description:
    "How PEIMAN JP websites use privacy-respecting Google Analytics and handle contact information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main">
      <article className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          PEIMAN JP
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">Effective 13 August 2026</p>

        <div className="mt-10 grid gap-9 text-base leading-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Scope</h2>
            <p className="mt-3">
              This policy covers peimanjp.com and PEIMAN JP product subdomains,
              including neurolabos.peimanjp.com and ndms.peimanjp.com. It does
              not cover separately owned businesses or websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Analytics</h2>
            <p className="mt-3">
              We use Google Analytics 4 to understand aggregate traffic, page
              performance, navigation between PEIMAN JP products, downloads,
              and selected calls to action. We do not send names, email
              addresses, research data, account identifiers, URL query strings,
              or form contents to Analytics.
            </p>
            <p className="mt-3">
              Analytics storage is denied by default. Before a visitor chooses,
              Google Consent Mode may send limited cookieless measurement pings.
              Analytics cookies are used only after the visitor selects
              “Accept analytics”. Advertising storage, advertising user data,
              advertising personalisation, Google signals, and user-provided
              data collection remain disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Your choice</h2>
            <p className="mt-3">
              You may accept or reject analytics cookies and change that choice
              at any time using the “Privacy & analytics” control shown on a
              covered website. The preference is stored in a first-party cookie
              shared across peimanjp.com subdomains for up to 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Retention and providers</h2>
            <p className="mt-3">
              User- and event-level Analytics data is configured for a maximum
              retention period of 14 months. Aggregated reports may remain
              available for longer. Google processes Analytics data under its
              service terms. Learn how Google uses data from partner sites in
              Google’s{" "}
              <a
                className="font-semibold text-cyan-800 underline underline-offset-4"
                href="https://policies.google.com/technologies/partner-sites"
                rel="noopener noreferrer"
                target="_blank"
              >
                partner-sites explanation
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Contact</h2>
            <p className="mt-3">
              If you contact PEIMAN JP by email, the message and the details you
              provide are used only to respond and maintain an appropriate
              professional record. For privacy questions, email{" "}
              <a
                className="font-semibold text-cyan-800 underline underline-offset-4"
                href="mailto:peiman@peimanjp.com"
              >
                peiman@peimanjp.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
