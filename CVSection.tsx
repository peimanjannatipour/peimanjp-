type CVItem = {
  title: string;
  meta: string;
  description: string;
};

type CVSectionProps = {
  title: string;
  items: CVItem[];
};

export function CVSection({ title, items }: CVSectionProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-5 divide-y divide-slate-200">
        {items.map((item) => (
          <article className="py-5 first:pt-0 last:pb-0" key={item.title}>
            <h3 className="text-base font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
              {item.meta}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

