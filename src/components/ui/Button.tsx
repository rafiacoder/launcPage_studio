import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 text-center sm:whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform focus-visible:outline-offset-4 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-navy-950 shadow-[0_10px_30px_-10px_rgb(255_120_107/0.8)] hover:bg-coral-600 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(255_120_107/0.9)]",
  secondary:
    "bg-navy text-white hover:bg-navy-800 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgb(16_42_67/0.6)]",
  "ghost-dark":
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
  "ghost-light":
    "border border-navy/15 bg-white text-navy hover:border-navy/30 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-navy-950 hover:bg-[#1fbe5a] hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgb(37_211_102/0.7)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem] sm:h-14 sm:px-7 sm:text-base",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconLeft?: IconName;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconLeft,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={size === "lg" ? 20 : 18} />}
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={size === "lg" ? 20 : 18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}

export const buttonClasses = (variant: Variant = "primary", size: Size = "md") =>
  `${base} ${variants[variant]} ${sizes[size]}`;
