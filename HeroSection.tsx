import Image from "next/image";
import { profile } from "@/data/profile";
import { LinkButton } from "./LinkButton";
import { ScientificPortrait } from "./ScientificPortrait";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
      <div className="research-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto grid min-h-[680px] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:py-20">
        <div className="animate-fade-up max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <Image
              alt="Professional portrait"
              className="h-12 w-12 rounded-full border border-cyan-200/30 object-cover object-top"
              height={96}
              src="/images/inventor-photo.jpg"
              width={96}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {profile.shortName}
            </p>
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.hero}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {profile.ctas.map((cta, index) => (
              <LinkButton
                href={cta.href}
                key={cta.href}
                variant={index === 0 ? "dark" : "secondary"}
              >
                {cta.label}
              </LinkButton>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay grid gap-5">
          <ScientificPortrait />
          <div className="rounded-lg border border-white/15 bg-white/6 p-5 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Evidence ledger
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Preprint", "SSRN DOI 10.2139/ssrn.5891994"],
              ["Preprint", "Bayesian Log-Time item"],
              ["Invention", "Patent pending / PCT application filed"],
              ["Verification", "ORCID, GitHub, DOI, email"],
            ].map(([label, value]) => (
              <div className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0" key={`${label}-${value}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
