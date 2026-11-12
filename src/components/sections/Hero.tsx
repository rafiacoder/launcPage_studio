import { DeviceMockups } from "../DeviceMockups";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";

const trustPoints = ["No hidden fees", "Mobile-first design", "WhatsApp-ready"];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-navy-950 via-navy to-navy-800 pb-16 pt-28 sm:pb-24 sm:pt-40 lg:pb-32"
    >
      {/* Background decoration */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-ocean/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-royal/40 blur-[120px]" aria-hidden="true" />

      <Container className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="max-w-2xl">
          <a
            href="#offer"
            className="group inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 py-1.5 pl-1.5 pr-4 text-sm text-white/90 transition hover:border-coral/60"
          >
            <span className="rounded-full bg-coral px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-navy-950">Free</span>
            Your first business page is on us
            <Icon name="arrowRight" size={16} className="text-coral transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[2.25rem] font-extrabold leading-[1.04] tracking-tight text-white text-balance sm:text-6xl lg:text-[4.1rem]"
          >
            Your Small Business Deserves{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-coral">Its Own Website.</span>
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-coral/40"
                aria-hidden="true"
              >
                <path d="M2 9c60-6 180-8 296-3" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 text-pretty sm:text-xl">
            Are you a student or a small business owner? Get your first professional business introduction page{" "}
            <strong className="font-semibold text-white">absolutely FREE!</strong>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <ButtonLink href="#claim" size="lg" icon="arrowRight">
              Claim Your Free Page
            </ButtonLink>
            <ButtonLink href="#services" size="lg" variant="ghost-dark">
              Explore What We Build
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ocean/30 text-white">
                  <Icon name="check" size={12} strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative px-2 pb-10 sm:px-8 lg:px-0">
          <DeviceMockups />
        </div>
      </Container>
    </section>
  );
}
