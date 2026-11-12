import Image from "next/image";
import { Icon } from "./ui/Icon";

const bakeryImg =
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=75";
const jewelryImgs = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=300&q=70",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=70",
];

/** Laptop + phone frames rendering sample client sites built in HTML/CSS. */
export function DeviceMockups() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]" aria-label="Example websites shown on a laptop and a phone" role="img">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-ocean/30 blur-3xl" aria-hidden="true" />

      {/* Laptop */}
      <div className="relative animate-float">
        <div className="rounded-t-2xl border border-white/15 bg-[#0d1b2a] p-2 shadow-2xl shadow-black/50 sm:p-2.5">
          <div className="overflow-hidden rounded-lg bg-white">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </span>
              <span className="mx-auto flex items-center gap-1 rounded-md bg-white px-3 py-0.5 text-[9px] text-slate-400 ring-1 ring-slate-200 sm:text-[10px]">
                <Icon name="shield" size={10} /> sugarandcrumb.com
              </span>
            </div>
            {/* Mini site */}
            <div className="relative aspect-[16/9.4]">
              <Image src={bakeryImg} alt="" fill sizes="(min-width: 1024px) 600px, 90vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a12]/90 via-[#2a1a12]/60 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-[5%] py-[3%]">
                <span className="font-display text-[10px] font-bold text-white sm:text-xs">Sugar&nbsp;&amp;&nbsp;Crumb</span>
                <span className="hidden gap-3 text-[8px] text-white/70 sm:flex">
                  <span>Menu</span><span>Custom Cakes</span><span>About</span><span>Contact</span>
                </span>
              </div>
              <div className="absolute left-[5%] top-1/2 max-w-[55%] -translate-y-1/2">
                <span className="rounded-full bg-[#f7c59f] px-2 py-0.5 text-[7px] font-semibold text-[#2a1a12] sm:text-[8px]">
                  Fresh daily · Home bakery
                </span>
                <p className="mt-2 font-display text-[13px] font-bold leading-tight text-white sm:text-xl">
                  Baked with love, delivered to your door.
                </p>
                <div className="mt-2.5 flex gap-1.5 sm:mt-3">
                  <span className="rounded-full bg-[#f7c59f] px-2.5 py-1 text-[7px] font-semibold text-[#2a1a12] sm:text-[9px]">Order Now</span>
                  <span className="rounded-full border border-white/40 px-2.5 py-1 text-[7px] text-white sm:text-[9px]">View Menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="relative mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-[#c9d6e3] to-[#8fa3b8] shadow-xl sm:h-4">
          <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#7d91a6]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -bottom-10 right-0 w-[34%] max-w-[190px] animate-float-delayed sm:-right-6">
        <div className="rounded-[1.6rem] border border-white/20 bg-[#0d1b2a] p-1.5 shadow-2xl shadow-black/60">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-[#fdf8f5]">
            <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-[#0d1b2a]" aria-hidden="true" />
            <div className="px-2.5 pb-3 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-[9px] font-bold text-[#3b2a35]">Luna Jewels</span>
                <Icon name="menu" size={10} className="text-[#3b2a35]" />
              </div>
              <p className="mt-2 font-display text-[11px] font-bold leading-tight text-[#3b2a35]">New Spring Collection</p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {jewelryImgs.map((src) => (
                  <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={src} alt="" fill sizes="90px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 rounded-full bg-[#25D366] py-1.5 text-[8px] font-semibold text-white">
                <Icon name="whatsapp" size={10} /> Order on WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-2 top-[18%] hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur sm:flex lg:-left-10">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#25D366]/15 text-[#128C4B]">
          <Icon name="whatsapp" size={16} />
        </span>
        <span className="leading-tight">
          <span className="block text-[11px] font-bold text-navy">New inquiry</span>
          <span className="block text-[10px] text-navy/60">“Do you deliver today?”</span>
        </span>
      </div>
      <div className="absolute -bottom-6 left-[6%] hidden items-center gap-2 rounded-2xl border border-white/10 bg-navy-800/90 px-3.5 py-2.5 text-white shadow-xl backdrop-blur sm:flex">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-coral text-navy-950">
          <Icon name="devices" size={15} />
        </span>
        <span className="text-[11px] font-semibold">100% mobile-ready</span>
      </div>
    </div>
  );
}
