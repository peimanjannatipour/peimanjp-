import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { createPageMetadata } from "@/lib/metadata";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";
import "./theme-overrides.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: "Peiman Jannatipour | Computational Neuroscience Research",
  description:
    "Research by Peiman Jannatipour in computational neuroscience, EEG, human timing, Bayesian modelling, neuroimaging, scientific software and neurotechnology.",
  path: "/",
});

const themeBootScript = `
(() => {
  try {
    const saved = localStorage.getItem('pjp-theme') || 'system';
    const resolved = saved === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : saved;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = saved;
  } catch (_) {
    document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow-xl"
          href="#main"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
