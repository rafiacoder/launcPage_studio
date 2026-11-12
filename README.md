# LaunchPage Studio — Free Intro Page Landing Page

A promotional landing page for a student-friendly website development offer, built with **Next.js 15 (App Router), React 19 and Tailwind CSS 4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Customising

| What | Where |
| --- | --- |
| Brand name, WhatsApp number, email, hours, socials | `src/config/site.ts` |
| Categories, audiences, service tiers, steps, FAQ copy | `src/data/content.ts` |
| Colour palette, fonts, animations | `src/app/globals.css` (`@theme` block) |
| SEO title / description | `src/app/layout.tsx` |

### The request form
`src/components/RequestForm.tsx` needs no backend: on submit it opens WhatsApp with the visitor's details pre-filled, and offers an email fallback. To collect submissions server-side instead, replace `handleSubmit` with a call to your API (a Next.js route handler, Formspree, Resend, etc.).

### Images
Category and audience photos are loaded from Unsplash (allowed in `next.config.ts`). Replace the URLs in `src/data/content.ts` with your own client work as your portfolio grows.

## Structure

```
src/
  app/            layout, page, global styles
  config/site.ts  contact details & nav links
  data/content.ts all page copy
  components/
    ui/           Button, Container, Eyebrow, Icon, Reveal, SectionHeading
    sections/     Hero, Marquee, Offer, Audience, Categories, Services, Process, Faq, FinalCta
    Navbar, Footer, DeviceMockups, RequestForm, WhatsAppFloat, Logo
```
