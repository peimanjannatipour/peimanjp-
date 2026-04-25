import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "download" | "aria-label">;

const variantStyles = {
  primary:
    "border-slate-950 bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950",
  secondary:
    "border-slate-300 bg-white text-slate-950 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-slate-950",
  ghost:
    "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-950",
  dark:
    "border-white/20 bg-white text-slate-950 hover:bg-slate-100 focus-visible:outline-white",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}

