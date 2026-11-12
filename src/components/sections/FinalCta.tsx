import { siteConfig, whatsappLink } from "@/config/site";
import { RequestForm } from "../RequestForm";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon, type IconName } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

const contactMethods: { icon: IconName; label: string; value: string; href: string }[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: siteConfig.contact.whatsappDisplay,
    href: whatsappLink(),
  },
  {
    icon: "mail",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: "clock",
    label: "Hours",
    value: siteConfig.contact.hours,
    href: "",
  },
];

export function FinalCta() {
  return (
    <section
      id="claim"
      aria-labelledby="claim-title"
      className="relative isolate overflow-hidden bg-navy-950 py-14 sm:py-32"
    >
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -left-32 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-ocean/25 blur-[130px]" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-coral/15 blur-[120px]" aria-hidden="true" />

      <Container className="grid items-start gap-12 sm:gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow tone="dark">Let&apos;s get you online</Eyebrow>
          <h2
            id="claim-title"
            className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Ready to Take Your Small Business <span className="text-coral">Online?</span>
          </h2>
          <p className="mt-5 max-w-lg text-base sm:mt-6 sm:text-lg leading-relaxed text-white/70">
            Tell us about your business and we&apos;ll create your professional introduction page — completely free.
            Upgrade later only if you want to.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink()} size="lg" icon="arrowRight">
              Get Your FREE Intro Page
            </ButtonLink>
          </div>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {contactMethods.map((m) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-coral">
                    <Icon name={m.icon} size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-white/50">{m.label}</span>
                    <span className="block truncate text-sm font-semibold text-white">{m.value}</span>
                  </span>
                </>
              );
              const cls =
                "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/25";
              return (
                <li key={m.label}>
                  {m.href ? (
                    <a href={m.href} className={cls} {...(m.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl bg-white p-5 shadow sm:rounded-[2rem]-[0_50px_100px_-40px_rgb(0_0_0/0.7)] sm:p-10">
            <div className="absolute -top-4 right-8 flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg">
              <Icon name="gift" size={14} /> 100% free
            </div>
            <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">Request your free page</h3>
            <p className="mt-1.5 text-[0.9375rem] text-navy/60">Takes less than a minute. We&apos;ll reach out on WhatsApp.</p>
            <div className="mt-6 sm:mt-8">
              <RequestForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
