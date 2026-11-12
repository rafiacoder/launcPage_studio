"use client";

import { useState, type FormEvent } from "react";
import { categories, serviceTiers } from "@/data/content";
import { siteConfig, whatsappLink } from "@/config/site";
import { buttonClasses } from "./ui/Button";
import { Icon } from "./ui/Icon";

type Status = "idle" | "sent";

const field =
  "mt-2 block w-full rounded-xl border border-navy/15 bg-white px-3.5 py-2.5 text-[0.9375rem] sm:px-4 sm:py-3 text-navy placeholder:text-navy/35 transition focus:border-ocean focus:outline-none focus:ring-4 focus:ring-ocean/15";
const label = "text-sm font-semibold text-navy";

/**
 * Free-page request form.
 * No backend required: on submit it composes a WhatsApp message (or email)
 * containing the visitor's details. Swap `handleSubmit` for an API call
 * (e.g. Formspree, Resend, a Next.js route handler) when you have one.
 */
export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mailHref, setMailHref] = useState("");

  function buildMessage(data: FormData) {
    const lines = [
      siteConfig.whatsappMessage,
      "",
      `• Name: ${data.get("name")}`,
      `• WhatsApp / Phone: ${data.get("phone")}`,
      `• Business name: ${data.get("business") || "—"}`,
      `• Category: ${data.get("category")}`,
      `• Interested in: ${data.get("plan")}`,
    ];
    const note = String(data.get("message") || "").trim();
    if (note) lines.push(`• Notes: ${note}`);
    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = buildMessage(data);
    setMailHref(
      `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Free intro page request")}&body=${encodeURIComponent(message)}`,
    );
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#25D366]/15 text-[#128C4B]">
          <Icon name="check" size={30} strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-navy">Almost there!</h3>
        <p className="mt-3 max-w-sm text-navy/65">
          We&apos;ve opened WhatsApp with your details filled in — just press send. Prefer email?
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={mailHref} className={buttonClasses("secondary")}>
            <Icon name="mail" size={18} /> Send by email instead
          </a>
          <button type="button" onClick={() => setStatus("idle")} className={buttonClasses("ghost-light")}>
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name <span className="text-coral-600" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            WhatsApp number <span className="text-coral-600" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="03XX XXXXXXX"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="business" className={label}>
            Business name
          </label>
          <input id="business" name="business" autoComplete="organization" placeholder="e.g. Luna Jewels" className={field} />
        </div>
        <div>
          <label htmlFor="category" className={label}>
            Business category <span className="text-coral-600" aria-hidden="true">*</span>
          </label>
          <select id="category" name="category" required defaultValue="" className={`${field} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23102A43' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((c) => (
              <option key={c.title}>{c.title}</option>
            ))}
            <option>Other</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={label}>What are you interested in?</legend>
        <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <label
              key={tier.name}
              className="relative flex cursor-pointer items-center gap-2.5 rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-sm font-medium text-navy transition hover:border-ocean/50 has-[:checked]:border-coral has-[:checked]:bg-coral-soft/50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-ocean/20"
            >
              <input type="radio" name="plan" value={tier.name} defaultChecked={i === 0} className="h-4 w-4 accent-[#FF786B]" />
              <span className="leading-tight">{tier.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={label}>
          Tell us a little about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="What do you sell? Do you have a logo and photos ready?"
          className={`${field} resize-none`}
        />
      </div>

      <button type="submit" className={`${buttonClasses("primary", "lg")} w-full`}>
        <span>Get Your FREE Intro Page</span>
        <Icon name="arrowRight" size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p id="form-note" className="flex items-center justify-center gap-2 text-center text-xs text-navy/55">
        <Icon name="shield" size={14} /> Free, no obligation. Your details are only used to contact you about your website.
      </p>
    </form>
  );
}
