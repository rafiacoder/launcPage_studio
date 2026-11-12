import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, tone = "light", align = "center", id }: Props) {
  const isDark = tone === "dark";
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-5 font-display text-[1.75rem] font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${isDark ? "text-white/70" : "text-navy/70"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
