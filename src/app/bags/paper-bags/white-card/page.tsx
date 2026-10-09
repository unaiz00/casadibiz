"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, Ribbon } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import PaperBagImageGallery from "@/components/bags/PaperBagImageGallery";
import ProductCTAButtons from "@/components/pdp/ProductCTAButtons";

// =====================================================
// WHITE CARD BAG — PRODUCT CONTENT
// =====================================================

const product = {
  name: "White Card Bags",
  subtitle: "SBS ARTBOARD CARRIERS",
  shortDescription: "High-density white solid bleached artboard carriers providing high graphic resolution and crisp color printing.",
  longDescription: "The White Card bag is the ultimate canvas for high-resolution graphics and dynamic full-surface branding. Utilizing heavy Solid Bleached Sulfate (SBS) paperboard, it provides a rigid structure that holds its crisp vertical lines. Laminated in matte or soft-touch varnishes, it supports foil stamping, spot UV, and inside-liner prints.",

  images: [
    { src: "/assets/white1.jpeg", alt: "White Card Bag premium showcase 1" },
    { src: "/assets/white2.jpeg", alt: "White Card Bag premium showcase 2" },
    { src: "/assets/white1.jpeg", alt: "White Card Bag premium showcase 3" }
  ],

  highlights: [
    { label: "250 GSM", value: "WHITE CARD" },
    { label: "MATTE", value: "LAMINATION" },
    { label: "1-COLOR", value: "OFFSET INK" }
  ],

  material: "250 GSM White Card",
  printing: "1-Color Printing (1C)",
  finish: "Matte Lamination",
  handle: "Twisted Plastic Rope Handle",

  handles: [
    { name: "Twisted Plastic Rope Handle with Plastic End Caps", desc: "Rigid plastic rope handles with secure transparent caps locking under the turn-top." },
    { name: "2 cm Gold Satin Ribbon", desc: "Lustrous double-faced gold satin ribbon closures." },
    { name: "1.5 cm Center Satin Ribbon", desc: "Satin ribbons applied at the top center to seal the bag opening." }
  ],

  sizes: [
    { value: "15 × 20 × 9 cm", desc: "Perfect for cosmetics, eyewear, and gift envelopes." },
    { value: "20 × 25 × 10 cm", desc: "Versatile layout for apparel accessories and premium perfumes." },
    { value: "25.5 × 34 × 11 cm", desc: "Grand retail carrier for footwear, apparel, and corporate gifts." }
  ],

  handleDetail: {
    image: "/assets/white2.jpeg",
    label: "HANDLE & RIBBON DETAILS",
    title: "Bespoke Ties & Handles",
    description: "We offer curated handles, ribbons, and custom closures crafted from premium cords, satin, and grosgrain fibers designed to elevate carrying utility."
  },

  customization: [
    { title: "Embossed Logo with Gold Foil", desc: "Raised relief debossing coupled with bright gold hot foil stamping." },
    { title: "Gold Foil Text on Both Sides", desc: "Both front and back panels are finished with matching metallic gold text." }
  ],

  faqs: [
    { q: "Is the lamination environmentally friendly?", a: "We offer recyclable film laminates and eco-friendly water-based dispersion coatings upon request." },
    { q: "What is the maximum weight these bags can carry?", a: "Thanks to the reinforced turn-top and thick base insert, standard sizes can support up to 4kg safely." },
    { q: "What finish options are available?", a: "Custom finishing options are available to suit your brand." },
    { q: "Can I print both sides?", a: "Yes, both front and back panels can be printed." },
    { q: "Can I add a ribbon tie?", a: "Yes." }
  ],

  breadcrumbs: [
    { label: "Home", to: "/" },
    { label: "Bags", to: "/bags" },
    { label: "White Card" }
  ]
};

// =====================================================
// COMPONENT
// =====================================================

const BAG_TABS = [
  { id: "description" as const, label: "DESCRIPTION" },
  { id: "specifications" as const, label: "SPECIFICATIONS" },
  { id: "customization" as const, label: "CUSTOMISATION" },
];

export default function WhiteCardPage() {
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const selectedSize = product.sizes[activeSizeIdx]?.value || "";
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${product.name} (Size: ${selectedSize})`;
  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* SEO / META TAGS */}
      <title>{product.name} Specs — CASA DI BIZ</title>
      <meta name="description" content={product.shortDescription} />
      <meta property="og:title" content={`${product.name} Specs — CASA DI BIZ`} />
      <meta property="og:description" content={product.shortDescription} />
      <meta property="og:image" content={product.images[0].src} />

      {/* HEADER */}
      <SiteHeader />

      <main className="text-[#0F2744] overflow-hidden">
        {/* BREADCRUMBS */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6">
          <Breadcrumbs items={product.breadcrumbs} />
        </div>

        {/* HERO / MAIN PDP SECTION */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-6 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT: Product Image Gallery */}
            <div className="lg:col-span-7">
              <PaperBagImageGallery
                images={product.images}
                productTitle={product.name}
              />
            </div>

            {/* RIGHT: Product Information & CTAs */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[#0F2744]/70 tracking-[0.3em] font-semibold text-[11px] uppercase mb-4 block">
                {product.subtitle}
              </span>

              <h1 className="font-display text-4xl sm:text-5xl text-[#0F2744] leading-[1.1] mb-6 font-medium">
                {product.name}
              </h1>
              <p className="text-[#0F2744]/80 text-base leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Material/Construction Summary */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-5 sm:p-5 mb-8 space-y-4 sm:space-y-3">
                {product.material && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      MATERIAL
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {product.material}
                    </span>
                  </div>
                )}
                {product.printing && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      PRINTING
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {product.printing}
                    </span>
                  </div>
                )}
                {product.finish && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      FINISH
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {product.finish}
                    </span>
                  </div>
                )}
                {product.handle && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      HANDLE
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {product.handle}
                    </span>
                  </div>
                )}
              </div>

              {/* Sizes Section */}
              <div className="w-full mb-8">
                <div
                  className={`grid ${
                    product.sizes.length === 1
                      ? "grid-cols-1"
                      : product.sizes.length === 2
                      ? "grid-cols-2"
                      : product.sizes.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3"
                  } gap-2 w-full lg:flex lg:flex-row lg:gap-3 lg:w-auto`}
                >
                  {product.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`flex items-center justify-center min-h-[48px] py-2 px-1.5 sm:px-3 lg:px-5 lg:h-12 border rounded-md transition-all duration-300 cursor-pointer text-center ${
                        activeSizeIdx === idx
                          ? "border-[#C7A86A] bg-[#F6F0E8]"
                          : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/20 hover:translate-y-[-1px]"
                      }`}
                    >
                      <span className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-medium tracking-[0.02em] sm:tracking-[0.08em] text-[#0F2744] leading-tight text-center whitespace-normal break-words">
                        {size.value}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* B2B CTAs */}
              <ProductCTAButtons
                quoteUrl={`/contact?size=${encodeURIComponent(selectedSize)}&product=${encodeURIComponent(product.name)}`}
                whatsappUrl={dynamicWhatsappUrl}
              />

              {/* Supporting Line */}
              <div className="w-full text-center mt-3">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.05em] text-[#0F2744]/40">
                  Custom quantities • Custom dimensions • B2B orders
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-y border-[#C7A86A]/20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Title / Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MANUFACTURING SPECIFICATIONS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] leading-tight font-medium">
                Product Details
              </h2>
            </div>

            {/* Mobile 3-Column Segmented Control Header (Mobile Only) */}
            <div className="lg:hidden w-full mb-8 sm:mb-9">
              <div className="grid grid-cols-3 gap-1 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-1.5 w-full min-h-[52px]">
                {BAG_TABS.map((tab) => {
                  const isActive = activeDetailTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDetailTab(tab.id)}
                      className={`flex items-center justify-center py-2.5 px-1 rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[44px] ${
                        isActive
                          ? "bg-[#FAF8F5] text-[#0F2744] border border-[#C7A86A]/40 shadow-xs"
                          : "bg-transparent text-[#0F2744]/65 hover:text-[#0F2744] border border-transparent"
                      }`}
                    >
                      <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-bold tracking-[0.03em] sm:tracking-[0.08em] uppercase leading-tight text-center block break-words">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Tabs Header */}
            <div className="hidden lg:flex border-b border-[#0F2744]/10 mb-10 justify-center gap-12">
              {BAG_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDetailTab(tab.id)}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                    activeDetailTab === tab.id
                      ? "text-[#0F2744] font-bold"
                      : "text-[#0F2744]/50 hover:text-[#0F2744]"
                  }`}
                >
                  {tab.label}
                  {activeDetailTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="transition-all duration-300 ease-in-out">
              {activeDetailTab === "description" && (
                <div className="opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-3 block">
                    THE MATERIAL
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight mb-4 font-medium">
                    SBS artboard carriers, high graphic resolution.
                  </h3>
                  <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-8 font-sans">
                    {product.longDescription}
                  </p>

                  {/* highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#C7A86A]/20">
                    {product.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
                      >
                        <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1.5">
                          {hl.label}
                        </span>
                        <span className="block font-display text-base sm:text-lg text-[#0F2744] font-semibold">
                          {hl.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeDetailTab === "specifications" && (
                <div className="opacity-100 transition-opacity duration-300">
                  <div className="divide-y divide-[#C7A86A]/20 border-t border-[#C7A86A]/20">
                    {product.material && (
                      <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          MATERIAL
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.material}
                        </div>
                      </div>
                    )}
                    {product.printing && (
                      <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          PRINTING
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.printing}
                        </div>
                      </div>
                    )}
                    {product.finish && (
                      <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          FINISH
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.finish}
                        </div>
                      </div>
                    )}
                    {product.handle && (
                      <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          HANDLE
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.handle}
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                      <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        AVAILABLE SIZES
                      </div>
                      <div className="md:col-span-8 text-sm text-[#0F2744] font-medium space-y-1">
                        {product.sizes.map((size, idx) => (
                          <div key={idx}>
                            {size.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeDetailTab === "customization" && (
                <div className="opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {product.customization.map((cust, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-2">
                            BESPOKE EMBELLISHMENT
                          </span>
                          <h4 className="font-display text-xl text-[#0F2744] mb-2 font-medium">
                            {cust.title}
                          </h4>
                          <p className="text-xs text-[#0F2744]/80 leading-relaxed font-sans">
                            {cust.desc}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-[#0F2744]/10 flex items-center justify-between text-[11px] text-[#0F2744]/70">
                          <span>Available across all bag formats</span>
                          <span className="text-[#C7A86A] font-semibold">Bespoke Tooling</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HANDLE DETAIL SECTION (PRODUCT-SPECIFIC LAYOUT OPTIONS) */}
        <section className="w-full bg-[#FAF8F5] py-12 lg:py-14 border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Handle Illustration */}
              <div className="lg:col-span-6">
                <img
                  src={product.handleDetail.image}
                  alt={`${product.handleDetail.title} handle close-up`}
                  className="w-full aspect-[4/3] object-cover rounded-tl-[14px] rounded-tr-[80px] rounded-br-[14px] rounded-bl-[14px] overflow-hidden shadow-xs"
                />
              </div>

              {/* Handle description */}
              <div className="lg:col-span-6 text-left space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase block mb-2">
                    {product.handleDetail.label}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium leading-tight">
                    {product.handleDetail.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#C7A86A] mt-4" />
                </div>
                <div className="w-full space-y-4">
                  {product.handles.map((handle, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white/60 border border-[#C7A86A]/20 rounded-xl hover:border-[#C7A86A] transition-all duration-300 shadow-xs"
                    >
                      <div className="h-9 w-9 rounded-full bg-[#C7A86A]/10 grid place-items-center text-[#C7A86A] shrink-0">
                        <Ribbon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm text-[#0F2744] font-semibold">
                          {handle.name}
                        </h4>
                        {handle.desc && (
                          <p className="text-[11.5px] text-[#0F2744]/70 mt-1 leading-relaxed font-sans">
                            {handle.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="w-full bg-[#FAF8F5] py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
              INFORMATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium mb-12">
              {product.name} Q&A
            </h3>

            <div className="divide-y divide-[#C7A86A]/20 border-y border-[#C7A86A]/20 text-left">
              {product.faqs.map((faq, i) => {
                const open = openFaqIdx === i;
                return (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenFaqIdx(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="flex items-start gap-3.5 font-display text-base sm:text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                        <HelpCircle className="h-5 w-5 text-[#C7A86A] shrink-0 mt-0.5" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#C7A86A] shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-3.5" : "max-h-0"
                        }`}
                    >
                      <p className="text-sm text-[#0F2744]/75 leading-relaxed pl-8.5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
