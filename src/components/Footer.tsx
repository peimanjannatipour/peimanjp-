import Link from "next/link";
import { externalLinks, navItems, siteConfig } from "@/data/links";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h2 className="text-base font-semibold text-white">{siteConfig.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{siteConfig.role}</p>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              Public pages distinguish preprints, manuscripts, active research lines, prototypes, and patent-pending work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Navigation</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="underline-offset-4 transition hover:text-white hover:underline" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Research lines</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/eeg-temporal-reproduction-bias">EEG temporal reproduction</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/bayesian-log-time-state-space-clock">Bayesian timing</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/abcd-developmental-neuroimaging">ABCD developmental neuroimaging</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/projects/smis-ods">SMIS-ODS evidence system</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/neurolab-os">NeuroLab OS</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/ndms">NDMS / patent</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Profiles & external links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.researchGate.href} rel="noreferrer" target="_blank">ResearchGate</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.orcid.href} rel="noreferrer" target="_blank">ORCID</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.github.href} rel="noreferrer" target="_blank">GitHub</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.neurolabOS.href} rel="noreferrer" target="_blank">NeuroLab OS site</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.ndms.href} rel="noreferrer" target="_blank">NDMS site</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="underline-offset-4 hover:text-white hover:underline" href="/privacy">Privacy</Link>
            <Link className="underline-offset-4 hover:text-white hover:underline" href="/verification">Verification</Link>
            <Link className="underline-offset-4 hover:text-white hover:underline" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
