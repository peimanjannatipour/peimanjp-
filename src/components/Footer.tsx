import Link from "next/link";
import { externalLinks, navItems, siteConfig } from "@/data/links";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-white">{siteConfig.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{siteConfig.role}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="hover:text-white transition"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Profiles & Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-white transition"
                  href={externalLinks.researchGate.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href={externalLinks.orcid.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  ORCID
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href={externalLinks.primarySite.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  peimanjp.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href={externalLinks.neurolabOS.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  NeuroLab OS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
