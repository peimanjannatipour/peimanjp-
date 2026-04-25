import { patent } from "@/data/patent";
import { LinkButton } from "./LinkButton";
import { StatusBadge } from "./StatusBadge";

export function PatentSummary() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status="Patent pending" />
        <StatusBadge status="PCT application filed" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
        {patent.title}
      </h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
        Application: {patent.application}
      </p>
      <p className="mt-5 text-sm leading-7 text-slate-600">
        {patent.description}
      </p>
      <div className="mt-6">
        <LinkButton href="/patent" variant="primary">
          View invention page
        </LinkButton>
      </div>
    </article>
  );
}

