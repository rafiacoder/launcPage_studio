import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white/80"
      : "border-navy/10 bg-white text-navy/70";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${styles}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
      {children}
    </span>
  );
}
