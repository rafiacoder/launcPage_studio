"use client";

import { useId, useState } from "react";
import { faqs } from "@/data/content";
import { siteConfig, whatsappLink } from "@/config/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function FaqItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;
  return (
    <li
      className={`rounded-2xl border bg-white transition-all duration-300 ${
        open ? "border-ocean/30 shadow-[0_20px_50px_-30px_rgb(16_42_67/0.45)]" : "border-navy/10 hover:border-navy/20"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left sm:gap-6 sm:px-7 sm:py-6"
        >
          <span className="font-display text-[0.95rem] font-semibold text-navy sm:text-lg">{question}</span>
          <span
            className={`grid h-8 w-8 shrink-0 sm:h-9 sm:w-9 place-items-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-coral text-navy-950" : "bg-ice text-ocean"
            }`}
          >
            <Icon name="plus" size={18} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-400 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[0.9375rem] sm:px-6 sm:pb-6 leading-relaxed text-navy/70 sm:px-7">{answer}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-ice py-14 sm:py-32">
      <Container className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQ"
            title="Questions? We've got answers."
            description="Everything you need to know about the free introduction page and our upgrade options."
          />
          <Reveal delay={100} className="mt-6 rounded-3xl bg-navy p-6 sm:mt-8 sm:p-7 text-white">
            <p className="font-display text-lg font-bold">Still have a question?</p>
            <p className="mt-2 text-sm text-white/70">
              Chat with us directly — we usually reply during {siteConfig.contact.hours}.
            </p>
            <ButtonLink
              href={whatsappLink("Hi! I have a question about your free website offer.")}
              variant="whatsapp"
              iconLeft="whatsapp"
              className="mt-5"
            >
              Chat on WhatsApp
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal>
          <ul className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
