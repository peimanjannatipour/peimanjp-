"use client";

import { useState } from "react";

type CitationToolsProps = {
  citation: string;
  bibtex: string;
};

export function CitationTools({ citation, bibtex }: CitationToolsProps) {
  const [copied, setCopied] = useState<"citation" | "bibtex" | null>(null);

  const copy = async (value: string, kind: "citation" | "bibtex") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Suggested citation
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{citation}</p>
        <button
          className="mt-3 inline-flex min-h-10 items-center rounded border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          onClick={() => copy(citation, "citation")}
          type="button"
        >
          {copied === "citation" ? "Copied" : "Copy citation"}
        </button>
      </div>

      <details className="border-t border-slate-200 pt-4">
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
          BibTeX
        </summary>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-slate-950 p-4 text-xs leading-5 text-slate-100">
          {bibtex}
        </pre>
        <button
          className="mt-3 inline-flex min-h-10 items-center rounded border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          onClick={() => copy(bibtex, "bibtex")}
          type="button"
        >
          {copied === "bibtex" ? "Copied" : "Copy BibTeX"}
        </button>
      </details>
    </div>
  );
}
