type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  Published: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Preprint: "border-cyan-200 bg-cyan-50 text-cyan-800",
  "SSRN preprint": "border-cyan-200 bg-cyan-50 text-cyan-800",
  "Under review": "border-amber-200 bg-amber-50 text-amber-800",
  "Manuscript in progress": "border-slate-200 bg-slate-50 text-slate-700",
  Prototype: "border-indigo-200 bg-indigo-50 text-indigo-800",
  "Patent pending": "border-violet-200 bg-violet-50 text-violet-800",
  Concept: "border-stone-200 bg-stone-50 text-stone-700",
  "Research-use only": "border-rose-200 bg-rose-50 text-rose-800",
  "PCT application filed": "border-violet-200 bg-violet-50 text-violet-800",
  "Verified link": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Verified profile link": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Preprint link": "border-cyan-200 bg-cyan-50 text-cyan-800",
  "User-provided PCT application number":
    "border-violet-200 bg-violet-50 text-violet-800",
  "Pre-production": "border-indigo-200 bg-indigo-50 text-indigo-800",
  "Not clinical": "border-slate-200 bg-slate-50 text-slate-600",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
        statusStyles[status] ?? "border-slate-200 bg-slate-50 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}
