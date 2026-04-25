import type { ResearchItem } from "@/data/research";
import { LinkButton } from "./LinkButton";
import { StatusBadge } from "./StatusBadge";

type PublicationCardProps = {
  item: ResearchItem;
};

export function PublicationCard({ item }: PublicationCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={item.status} />
        {item.role ? (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {item.role}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
        {item.title}
      </h3>
      {item.summary ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
      ) : null}
      {item.href ? (
        <div className="mt-5">
          <LinkButton href={item.href} variant="secondary">
            {item.linkLabel ?? "Open"}
          </LinkButton>
        </div>
      ) : null}
    </article>
  );
}

