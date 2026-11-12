import { steps } from "@/data/content";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-gradient-to-br from-navy-950 via-navy to-royal py-14 sm:py-32"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />

      <Container>
        <SectionHeading
          id="process-title"
          tone="dark"
          eyebrow="How it works"
          title="From first message to live website in four simple steps."
          description="No tech knowledge needed. You focus on your business — we handle the design and the build."
        />

        <ol className="relative mt-10 grid sm:mt-20 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[60px] hidden h-px bg-gradient-to-r from-coral/0 via-coral/50 to-coral/0 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center sm:p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-coral/40 hover:bg-white/[0.07]">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 rounded-2xl bg-coral/30 opacity-0 group-hover:animate-pulse-ring group-hover:opacity-100" aria-hidden="true" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-coral text-navy-950 shadow-[0_15px_35px_-12px_rgb(255_120_107/0.8)]">
                    <Icon name={step.icon} size={26} />
                  </span>
                </div>
                <p className="mt-4 text-xs font-bold uppercase sm:mt-6 tracking-[0.2em] text-coral">Step {i + 1}</p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-white sm:mt-2 sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65 sm:mt-3">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 text-center sm:mt-14">
          <ButtonLink href="#claim" size="lg" icon="arrowRight">
            Start with Step 1
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
