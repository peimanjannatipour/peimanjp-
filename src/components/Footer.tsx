import Link from "next/link";
import { externalLinks, navItems, siteConfig } from "@/data/links";

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    externalLinks.orcid,
    externalLinks.github,
    externalLinks.ssrn,
    externalLinks.email,
  ].filter((item) => item.visible);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Researcher, inventor, and neurotechnology builder. Patent pending /
            PCT application filed: PCT/IB2025/060348.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Site
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.slice(1).map((item) => (
              <Link
                className="text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Verification
          </p>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <a
                className="text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={item.href}
                key={item.label}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}: {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500 sm:px-8">
        Copyright {year} {siteConfig.name}. Research-use and patent-pending claims
        are labeled conservatively.
      </div>
    </footer>
  );
}
