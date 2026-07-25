import Image from "next/image";

type ScientificPortraitProps = {
  compact?: boolean;
};

export function ScientificPortrait({ compact = false }: ScientificPortraitProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-lg border border-white/15 bg-slate-900 shadow-2xl shadow-cyan-950/20 ${
        compact ? "max-w-xs" : "w-full max-w-[320px] justify-self-start lg:max-w-[360px] lg:justify-self-end"
      }`}
    >
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_45%,rgba(2,6,23,0.72)_100%)]" />
      <div className="scanline absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-cyan-200/18 to-transparent" />
      <Image
        alt="Professional portrait"
        className="aspect-[4/5] w-full object-cover object-top grayscale-[10%]"
        height={1200}
        priority={!compact}
        sizes={compact ? "(max-width: 768px) 84vw, 320px" : "(max-width: 1024px) 82vw, 360px"}
        src="/images/inventor-photo.jpg"
        width={1200}
      />
      <figcaption className="absolute inset-x-0 bottom-0 z-30 p-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
          Research profile
        </p>
      </figcaption>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full opacity-70"
        preserveAspectRatio="none"
        viewBox="0 0 400 500"
      >
        <path
          className="data-path"
          d="M28 380 C110 330 150 410 230 350 S325 280 378 318"
          fill="none"
          stroke="rgba(103,232,249,0.72)"
          strokeDasharray="7 10"
          strokeWidth="1.5"
        />
        <path
          className="data-path data-path-delay"
          d="M24 118 C95 78 158 132 224 92 S330 86 378 44"
          fill="none"
          stroke="rgba(226,232,240,0.45)"
          strokeDasharray="5 12"
          strokeWidth="1"
        />
      </svg>
    </figure>
  );
}
