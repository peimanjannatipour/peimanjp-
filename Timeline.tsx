type TimelineItemProps = {
  title: string;
  meta: string;
  description: string;
};

export function TimelineItem({ title, meta, description }: TimelineItemProps) {
  return (
    <article className="relative border-l border-slate-200 pl-6">
      <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-cyan-600" />
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {meta}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

