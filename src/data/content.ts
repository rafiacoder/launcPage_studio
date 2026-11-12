import type { IconName } from "@/components/ui/Icon";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export type Category = {
  title: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
  { title: "Jewelry & Accessories", blurb: "Showcase every piece in sparkling detail.", image: img("1515562141207-7a88fb7ce338") },
  { title: "Frozen & Homemade Food", blurb: "Menus, order info and delivery areas.", image: img("1504674900247-0877df9cc836") },
  { title: "Clothing & Fashion", blurb: "Lookbooks and new-drop announcements.", image: img("1445205170230-053b83016050") },
  { title: "Bakeries & Desserts", blurb: "Cakes, treats and custom-order forms.", image: img("1551024601-bec78aea704b") },
  { title: "Cosmetics & Skincare", blurb: "Clean product pages that build trust.", image: img("1596462502278-27bfdc403348") },
  { title: "Handmade Crafts", blurb: "Tell the story behind every handmade item.", image: img("1452860606245-08befc0ff44b") },
  { title: "Customized Gifts", blurb: "Personalisation options, made simple.", image: img("1513885535751-8b9238bd345a") },
  { title: "Bags & Shoes", blurb: "Size guides, colours and collections.", image: img("1543163521-1bf539c55dd2") },
  { title: "Thrift Stores", blurb: "Curated drops that sell out fast.", image: img("1489987707025-afc232f7ea0f") },
  { title: "Cafes & Food Spots", blurb: "Menus, hours, location and reservations.", image: img("1501339847302-ac426a4a7cbb") },
  { title: "Floral Businesses", blurb: "Bouquets, events and seasonal specials.", image: img("1487070183336-b863922373d4") },
  { title: "Digital & Creative Services", blurb: "Portfolios that win you new clients.", image: img("1561070791-2526d30994b5") },
];

export type Audience = {
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

export const audiences: Audience[] = [
  {
    title: "College & University Students",
    description: "Turn your side hustle into a real brand — without spending your semester budget.",
    image: img("1523240795612-9a054b0db644", 700),
    icon: "graduation",
  },
  {
    title: "Home-Based Entrepreneurs",
    description: "Run your business from home and still look as professional as any storefront.",
    image: img("1593062096033-9a26b09da705", 700),
    icon: "home",
  },
  {
    title: "Small Business Owners",
    description: "Give customers one trusted place to find your products, hours and contact details.",
    image: img("1556742049-0cfed4f6a45d", 700),
    icon: "store",
  },
  {
    title: "Instagram & WhatsApp Sellers",
    description: "Move beyond DMs with a link-in-bio website that answers questions before they ask.",
    image: img("1611926653458-09294b3142bf", 700),
    icon: "phone",
  },
];

export type OfferFeature = { title: string; description: string; icon: IconName };

export const offerFeatures: OfferFeature[] = [
  { title: "FREE Introductory Webpage", description: "A complete, professionally designed page for your business — on us.", icon: "gift" },
  { title: "Mobile-Friendly Design", description: "Looks sharp on every phone, tablet and laptop your customers use.", icon: "devices" },
  { title: "Professional Presentation", description: "Your logo, story, products and photos laid out like a real brand.", icon: "sparkles" },
  { title: "WhatsApp Integration", description: "One tap and customers are chatting with you, ready to order.", icon: "whatsapp" },
  { title: "Affordable Add-Ons", description: "Extra pages and features at budget-friendly custom pricing, only when you need them.", icon: "layers" },
];

export type ServiceTier = {
  name: string;
  tag: string;
  priceLabel: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: IconName;
};

export const serviceTiers: ServiceTier[] = [
  {
    name: "Free Introduction Page",
    tag: "Start here",
    priceLabel: "FREE",
    priceNote: "Your first page, on us",
    description: "A polished one-page website that introduces your business and gets customers talking to you.",
    features: [
      "Custom one-page design",
      "About, products & services overview",
      "Photo gallery section",
      "WhatsApp & social media buttons",
      "Fully mobile responsive",
    ],
    cta: "Claim Free Page",
    highlighted: true,
    icon: "rocket",
  },
  {
    name: "Multi-Page Business Website",
    tag: "Grow",
    priceLabel: "Custom quote",
    priceNote: "Budget-friendly pricing",
    description: "Room to grow: dedicated pages for products, services, your story and customer reviews.",
    features: [
      "Everything in the free page",
      "Additional pages (About, Menu, Gallery…)",
      "Product or service catalog",
      "Inquiry & booking forms",
      "Basic SEO setup",
    ],
    cta: "Request a Quote",
    icon: "layers",
  },
  {
    name: "Complete Online Store",
    tag: "Sell online",
    priceLabel: "Custom quote",
    priceNote: "Priced to your needs",
    description: "A full e-commerce website so customers can browse, add to cart and order any time.",
    features: [
      "Product listings with variants",
      "Shopping cart & checkout",
      "Payment & delivery options",
      "Order management",
      "Advanced features on request",
    ],
    cta: "Discuss My Store",
    icon: "cart",
  },
];

export type Step = { title: string; description: string; icon: IconName };

export const steps: Step[] = [
  { title: "Contact Us", description: "Message us on WhatsApp or fill in the quick request form below.", icon: "chat" },
  { title: "Share Your Details", description: "Send your business name, logo, photos, products and contact info.", icon: "upload" },
  { title: "Get Your Free Page", description: "We design and launch your professional introduction page.", icon: "rocket" },
  { title: "Upgrade Anytime", description: "Add pages, a catalog or a full online store whenever you're ready.", icon: "trending" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is the introductory page really free?",
    answer:
      "Yes. We design and build your first business introduction page at no cost — no hidden fees and no obligation to upgrade. It's our way of helping students and small businesses get started online. Optional extras such as a custom domain or hosting upgrades are always discussed with you upfront.",
  },
  {
    question: "Can I add more pages later?",
    answer:
      "Absolutely. Your free page is built so it can grow with you. Whenever you're ready, we can add pages like About, Menu, Gallery, Testimonials or a product catalog at budget-friendly custom pricing.",
  },
  {
    question: "Can I sell products through my website?",
    answer:
      "Yes. We build complete online stores with product listings, a shopping cart, checkout and payment options. If you're not ready for a full store yet, we can start with a catalog that sends orders straight to your WhatsApp.",
  },
  {
    question: "Is the website mobile-friendly?",
    answer:
      "Every website we build is fully responsive and tested on phones, tablets and desktops. Most of your customers will visit from their phone, so we design mobile-first.",
  },
  {
    question: "How can I request a website?",
    answer:
      "Tap any “Claim Your Free Page” button to message us on WhatsApp, or fill in the short request form on this page. We'll reply, collect your business details, and get started on your page.",
  },
];

export const marqueeItems = [
  "Jewelry",
  "Homemade Food",
  "Fashion",
  "Bakeries",
  "Skincare",
  "Handmade Crafts",
  "Custom Gifts",
  "Bags & Shoes",
  "Thrift Stores",
  "Cafes",
  "Florists",
  "Creative Services",
];
