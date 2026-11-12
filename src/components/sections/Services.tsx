import { serviceTiers, type ServiceTier } from "@/data/content";
import { whatsappLink } from "@/config/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function TierCard({ tier }: { tier: ServiceTier }) {
  const dark = tier.highlighted;
  return (
    <article
      className={`group relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 sm:rounded-[2rem] sm:p-9 ${
        dark
          ? "bg-gradient-to-b from-navy to-navy-800 text-white shadow-[0_40px_80px_-30px_rgb(16_42_67/0.7)] ring-1 ring-white/10"
          : "bg-white text-navy shadow-[0_30px_60px_-40px_rgb(16_42_67/0.45)] ring-1 ring-navy/10 hover:ring-ocean/40"
      }`}
    >
      {dark && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-coral px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg">
          Free offer
        </span>
      )}

      <div className="flex items-center justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            dark ? "bg-white/10 text-coral" : "bg-ice text-ocean"
          }`}
        >
          <Icon name={tier.icon} size={22} />
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            dark ? "bg-white/10 text-white/80" : "bg-ice text-ocean"
          }`}
        >
          {tier.tag}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold sm:mt-7 sm:text-2xl tracking-tight">{tier.name}</h3>
      <p className={`mt-3 text-[0.9375rem] leading-relaxed ${dark ? "text-white/70" : "text-navy/65"}`}>{tier.description}</p>

      <div className={`mt-5 border-y py-5 sm:mt-7 sm:py-6 ${dark ? "border-white/10" : "border-navy/10"}`}>
        <p
          className={`font-display font-extrabold tracking-tight ${
            dark ? "text-4xl text-coral sm:text-5xl" : "text-2xl text-navy sm:text-3xl"
          }`}
        >
          {tier.priceLabel}
        </p>
        <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-navy/55"}`}>{tier.priceNote}</p>
      </div>

      <ul className="mt-5 flex-1 space-y-3 sm:mt-7 sm:space-y-3.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[0.9375rem]">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                dark ? "bg-coral text-navy-950" : "bg-ocean/10 text-ocean"
              }`}
            >
              <Icon name="check" size={12} strokeWidth={3} />
            </span>
            <span className={dark ? "text-white/85" : "text-navy/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href={dark ? "#claim" : whatsappLink(`Hi! I'm interested in a ${tier.name}. Could you send me a quote?`)}
        variant={dark ? "primary" : "secondary"}
        size="lg"
        icon="arrowRight"
        className="mt-7 w-full sm:mt-9"
      >
        {tier.cta}
      </ButtonLink>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-white py-14 sm:py-32">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="What can we build?"
          title={
            <>
              Start free. <span className="text-ocean">Grow when you&apos;re ready.</span>
            </>
          }
          description="Three simple levels that grow with your business. Every upgrade is quoted to fit your needs and your budget — no fixed packages you don't need."
        />

        <ul className="mt-10 grid sm:mt-20 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {serviceTiers.map((tier, i) => (
            <Reveal as="li" key={tier.name} delay={i * 120}>
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-coral/30 bg-coral-soft/60 px-5 py-5 sm:px-7 sm:py-6 text-center sm:flex-row sm:text-left">
            <p className="flex items-center gap-3 text-[0.9375rem] font-medium text-navy">
              <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-coral text-navy-950 sm:grid">
                <Icon name="sparkles" size={20} />
              </span>
              Need something specific? Additional pages, features and custom development are available at budget-friendly custom pricing.
            </p>
            <ButtonLink href="#claim" variant="secondary" icon="arrowRight" className="shrink-0">
              Get a Custom Quote
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
