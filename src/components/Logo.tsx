import { siteConfig } from "@/config/site";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-white" : "text-navy";
  return (
    <a href="#top" className="group inline-flex items-center gap-2.5" aria-label={`${siteConfig.name} — back to top`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-ocean to-navy-800 shadow-lg ring-1 ring-white/15">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="text-white">
          <path d="M5 19V5h3v11h6v3z" fill="currentColor" />
          <path d="M14 5h5v5h-3V8h-2z" fill="var(--color-coral)" />
        </svg>
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${text}`}>
        {siteConfig.shortName}
        <span className="text-coral">.</span>
        <span className={`ml-1 hidden font-medium opacity-60 sm:inline`}>studio</span>
      </span>
    </a>
  );
}
