import type { ResearchItem } from "@/data/research";
import { LinkButton } from "./LinkButton";
import { ScientificCover } from "./ScientificCover";
import { StatusBadge } from "./StatusBadge";

type ResearchCardProps = {
  item: ResearchItem;
};

export function ResearchCard({ item }: ResearchCardProps) {
  const isDetailed = item.visibility === "detailed";
  const limitedText =
    item.status === "Preprint"
      ? "Preprint item listed. Public link can be added when available."
      : item.status === "Under review"
        ? "Manuscript under review. Details stay limited until public release."
        : "Public detail intentionally limited until release.";

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-950/5">
      {item.cover ? <ScientificCover variant={item.cover} /> : null}
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={item.status} />
        {item.role && (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {item.role}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-balance text-xl font-semibold tracking-tight text-slate-950">
        {item.title}
      </h3>
      {isDetailed && item.summary ? (
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
      ) : (
        <p className="mt-4 text-sm leading-7 text-slate-500">
          {limitedText}
        </p>
      )}
      {isDetailed && item.keywords ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.keywords.map((keyword) => (
            <span
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              key={keyword}
            >
              {keyword}
            </span>
          ))}
        </div>
      ) : null}
      {item.href ? (
        <div className="mt-6">
          <LinkButton href={item.href} variant="secondary">
            {item.linkLabel ?? "Open source"}
          </LinkButton>
        </div>
      ) : null}
    </article>
  );
}
