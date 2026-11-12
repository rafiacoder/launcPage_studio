import { offerFeatures } from "@/data/content";
import { whatsappLink } from "@/config/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Offer() {
  return (
    <section id="offer" aria-labelledby="offer-title" className="relative bg-white py-14 sm:py-32">
      <Container>
        <SectionHeading
          id="offer-title"
          eyebrow="Special launch offer"
          title={
            <>
              Everything you need to look professional —{" "}
              <span className="text-coral">for free.</span>
            </>
          }
          description="We'll design and build one professional introduction page for your business at no cost. Need more? Add pages, catalogs or a full store at budget-friendly rates."
        />

        <Reveal className="mt-16">
          <div className="grid overflow-hidden rounded-3xl border border-navy/10 sm:rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgb(16_42_67/0.35)] lg:grid-cols-[0.9fr_1.1fr]">
            {/* FREE panel */}
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy-800 to-royal p-6 text-white sm:p-12">
              <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
              <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-coral/25 blur-3xl" aria-hidden="true" />

              <span className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                <Icon name="gift" size={14} /> Introductory offer
              </span>
              <p className="mt-6 text-sm font-medium uppercase sm:mt-8 tracking-[0.2em] text-white/60">Your business intro page</p>
              <p className="mt-2 font-display text-[4.25rem] font-extrabold leading-none tracking-tighter sm:text-[7.5rem]">
                FREE<span className="text-coral">.</span>
              </p>
              <p className="mt-4 max-w-sm text-white/75">
                No upfront payment. No obligation to upgrade. Just a professional home for your brand online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <ButtonLink href="#claim" size="lg" icon="arrowRight">
                  Claim Your Free Page
                </ButtonLink>
                <ButtonLink href={whatsappLink()} size="lg" variant="ghost-dark" iconLeft="whatsapp">
                  Ask on WhatsApp
                </ButtonLink>
              </div>
            </div>

            {/* Features */}
            <ul className="grid gap-px bg-navy/10 sm:grid-cols-2">
              {offerFeatures.map((f, i) => (
                <li
                  key={f.title}
                  className={`group bg-white p-5 transition-colors duration-300 hover:bg-ice sm:p-8 ${
                    i === offerFeatures.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl transition-transform sm:h-12 sm:w-12 sm:rounded-2xl duration-300 group-hover:-translate-y-1 ${
                      i === 0 ? "bg-coral text-navy-950" : "bg-ice text-ocean group-hover:bg-white"
                    }`}
                  >
                    <Icon name={f.icon} size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy sm:mt-5 sm:text-lg">{f.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-navy/65">{f.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
