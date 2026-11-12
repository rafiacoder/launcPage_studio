/**
 * Central site configuration.
 * Replace every placeholder below with your real business details —
 * all components read from here, so nothing else needs to change.
 */
export const siteConfig = {
  name: "LaunchPage Studio",
  shortName: "LaunchPage",
  tagline: "Websites for small businesses with big plans.",
  description:
    "Get your first professional business introduction page FREE. Affordable websites, online stores and catalogs for students, home-based businesses and Instagram & WhatsApp sellers.",
  url: "https://www.example.com",

  contact: {
    /** International format, digits only (used to build wa.me links). */
    whatsappNumber: "923234886217",
    /** How the number is shown on the page. */
    whatsappDisplay: "+92 323 4886217",
    phone: "+92 323 4886217",
    email: "rafiafayyaz44@gmail.com",
    location: "Serving clients online, worldwide",
    hours: "Mon – Sat, 10:00 – 19:00",
  },

  /**
   * Social profiles. Leave a value as "" and its icon is hidden automatically.
   * Paste the full profile URL when you create the account, e.g.
   * instagram: "https://instagram.com/yourhandle"
   */
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  /** Default message pre-filled when a visitor opens WhatsApp. */
  whatsappMessage:
    "Hi! I'd like to claim my FREE business introduction page. Here are my details:",
} as const;

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Free Offer", href: "#offer" },
  { label: "Who It's For", href: "#audience" },
  { label: "Categories", href: "#categories" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;
