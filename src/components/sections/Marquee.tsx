import { marqueeItems } from "@/data/content";
import { Icon } from "../ui/Icon";

/** Auto-scrolling strip of business types (decorative; duplicated for a seamless loop). */
export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-4 sm:py-5">
      <p className="sr-only">We build websites for: {marqueeItems.join(", ")}.</p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent" aria-hidden="true" />
      <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]" aria-hidden="true">
        {row.map((item, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-base font-semibold text-white/55 sm:text-lg">
            {item}
            <Icon name="sparkles" size={16} className="text-coral" />
          </li>
        ))}
      </ul>
    </div>
  );
}
