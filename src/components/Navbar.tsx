"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/links";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-5 sm:px-8"
      >
        <Link
          className="flex min-h-11 items-center gap-2 rounded-md py-2 pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="hidden whitespace-nowrap text-base font-semibold tracking-tight sm:inline">
            {siteConfig.name}
          </span>
          <span className="whitespace-nowrap text-base font-semibold tracking-tight sm:hidden">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-400 lg:inline">
            Research · Invention · Software
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-1 xl:flex">
          {navItems.slice(0, 7).map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`min-h-10 rounded-full px-3 py-2 text-xs font-medium transition ${
                isActive(item.href)
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}

          <details className="relative">
            <summary className="min-h-10 cursor-pointer list-none rounded-full px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">
              More
            </summary>
            <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
              {navItems.slice(7).map((item) => (
                <Link
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block min-h-10 rounded-lg px-3 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          className="border-t border-white/10 bg-slate-950 px-5 py-4 xl:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            <div className="mb-3 md:hidden">
              <ThemeToggle />
            </div>
            {navItems.map((item) => (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`min-h-11 rounded-lg px-3 py-3 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-white text-slate-950"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
