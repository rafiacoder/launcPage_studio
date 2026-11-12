import { navLinks, siteConfig, whatsappLink } from "@/config/site";
import { Container } from "./ui/Container";
import { Icon } from "./ui/Icon";
import { Logo } from "./Logo";

// WhatsApp and email always show; social icons appear only once a URL is set in site.ts.
const socials = [
  { name: "WhatsApp", href: whatsappLink(), icon: "whatsapp" as const },
  { name: "Email", href: `mailto:${siteConfig.contact.email}`, icon: "mail" as const },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "instagram" as const },
  { name: "Facebook", href: siteConfig.social.facebook, icon: "facebook" as const },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" as const },
].filter((s) => s.href);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white/70">
      <Container className="grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{siteConfig.tagline} Affordable websites for students, home-based businesses and social sellers.</p>
          <ul className="mt-6 flex gap-2.5" aria-label="Contact and social links">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-coral">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition hover:text-coral">
                <Icon name="whatsapp" size={16} /> {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2.5 transition hover:text-coral">
                <Icon name="mail" size={16} /> {siteConfig.contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <Icon name="pin" size={16} /> {siteConfig.contact.location}
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-coral">
            Back to top <Icon name="arrowUpRight" size={14} className="-rotate-45" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
