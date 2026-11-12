import Image from "next/image";
import { categories } from "@/data/content";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="relative isolate overflow-hidden bg-navy py-14 sm:py-32"
    >
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-ocean/20 blur-[120px]" aria-hidden="true" />

      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="categories-title"
            tone="dark"
            align="left"
            eyebrow="Business categories"
            title="Whatever you sell, we'll make it shine online."
            description="A taste of the businesses we design for. Don't see yours? We build for every kind of small business."
          />
          <Reveal className="shrink-0">
            <ButtonLink href="#claim" variant="ghost-dark" icon="arrowRight">
              My business isn&apos;t listed
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-10 grid sm:mt-14 grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 4) * 80}>
              <a
                href="#claim"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:rounded-3xl ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-coral"
                aria-label={`${c.title}: request a website for this kind of business`}
              >
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-navy-950/40 px-2 py-0.5 text-[0.65rem] sm:left-5 sm:top-5 sm:px-2.5 sm:py-1 sm:text-xs font-semibold text-white/85 backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-5 top-5 hidden h-10 w-10 sm:grid translate-y-1 place-items-center rounded-full bg-coral text-navy-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Icon name="arrowUpRight" size={18} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-6">
                  <h3 className="font-display text-sm font-bold leading-snug text-white sm:text-xl">{c.title}</h3>
                  <p className="mt-1 text-[0.7rem] leading-snug text-white/70 sm:mt-1.5 sm:text-sm sm:leading-relaxed transition-colors group-hover:text-white/90">
                    {c.blurb}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
