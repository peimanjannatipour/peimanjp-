"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/links";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          className="flex items-baseline gap-2 rounded-md py-2 pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="hidden whitespace-nowrap text-base font-semibold tracking-tight sm:inline">
            {siteConfig.name}
          </span>
          <span className="whitespace-nowrap text-base font-semibold tracking-tight sm:hidden">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-slate-400 sm:inline">
            Research portfolio
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                className={`rounded-full px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
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
          className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
