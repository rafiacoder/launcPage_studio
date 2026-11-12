import Image from "next/image";
import { audiences } from "@/data/content";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Audience() {
  return (
    <section id="audience" aria-labelledby="audience-title" className="relative overflow-hidden bg-ice py-14 sm:py-32">
      <div className="bg-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          id="audience-title"
          eyebrow="Who is this for?"
          title="Built for the people building something of their own."
          description="Whether you sell from your dorm room, your kitchen or your Instagram bio — this offer was made for you."
        />

        <ul className="mt-10 grid sm:mt-16 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-30px_rgb(16_42_67/0.4)] ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgb(16_42_67/0.5)]">
                <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 sm:bottom-4 sm:left-4 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-white text-ocean shadow-lg">
                    <Icon name={a.icon} size={22} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-base font-bold leading-snug sm:text-lg text-navy">{a.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-navy/65">{a.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
