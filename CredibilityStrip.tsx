import type { ExternalLink } from "@/data/links";

type CredibilityStripProps = {
  items: ExternalLink[];
};

export function CredibilityStrip({ items }: CredibilityStripProps) {
  const visibleItems = items.filter((item) => item.visible);

  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl gap-px px-5 py-4 sm:px-8 md:grid-cols-4">
        {visibleItems.map((item) => {
          const content = (
            <>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </span>
              <span className="mt-1 block break-words text-sm font-semibold text-slate-950">
                {item.value}
              </span>
            </>
          );

          return item.href ? (
            <a
              className="rounded-lg px-3 py-2 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
              href={item.href}
              key={item.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {content}
            </a>
          ) : (
            <div className="rounded-lg px-3 py-2" key={item.label}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

