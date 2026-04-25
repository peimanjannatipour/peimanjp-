import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  tone = "light",
  className = "",
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`py-20 sm:py-24 ${
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          {eyebrow ? (
            <p
              className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark ? "text-cyan-200" : "text-cyan-700"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-4 max-w-2xl text-base leading-7 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

