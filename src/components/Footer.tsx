import Link from "next/link";
import { externalLinks, siteConfig } from "@/data/links";

const shareUrl = encodeURIComponent("https://peimanjp.com/");
const shareText = encodeURIComponent(
  "Peiman Jannatipour — Computational Neuroscience Research",
);

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="text-base font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Research portfolio spanning EEG, human timing, computational modelling,
              developmental neuroimaging, scientific software, and neurotechnology.
            </p>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              Public pages distinguish preprints, manuscripts, active research lines,
              prototypes, and patent-pending work.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Key routes</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/research">Research hub</Link></li>
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/publications">Outputs index</Link></li>
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/projects">Projects index</Link></li>
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/about">Profile page</Link></li>
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/contact">Contact route</Link></li>
              <li><Link className="underline-offset-4 transition hover:text-white hover:underline" href="/verification">Evidence policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Research lines</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/eeg-temporal-reproduction-bias">EEG residual prediction</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/bayesian-log-time-state-space-clock">Bayesian timing model</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/research/abcd-developmental-neuroimaging">ABCD neuroimaging line</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/projects/smis-ods">SMIS-ODS evidence system</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/neurolab-os">NeuroLab OS software</Link></li>
              <li><Link className="underline-offset-4 hover:text-white hover:underline" href="/ndms">NDMS technology</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Profiles & sources</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.researchGate.href} rel="noreferrer" target="_blank">ResearchGate profile</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.orcid.href} rel="noreferrer" target="_blank">ORCID record</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.github.href} rel="noreferrer" target="_blank">GitHub projects</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.neurolabOS.href} rel="noreferrer" target="_blank">NeuroLab OS site</a></li>
              <li><a className="underline-offset-4 hover:text-white hover:underline" href={externalLinks.ndms.href} rel="noreferrer" target="_blank">NDMS project site</a></li>
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Share this portfolio</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn share
              </a>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                rel="noreferrer"
                target="_blank"
              >
                X share
              </a>
              <a
                className="underline-offset-4 hover:text-white hover:underline"
                href={`mailto:?subject=${shareText}&body=${shareUrl}`}
              >
                Email share
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="underline-offset-4 hover:text-white hover:underline" href="/privacy">Privacy policy</Link>
            <a className="underline-offset-4 hover:text-white hover:underline" href="/llms.txt">AI site map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
