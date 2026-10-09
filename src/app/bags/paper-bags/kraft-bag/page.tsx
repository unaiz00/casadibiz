"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import PaperBagImageGallery from "@/components/bags/PaperBagImageGallery";
import ProductCTAButtons from "@/components/pdp/ProductCTAButtons";

// =====================================================
// KRAFT BAG — PRODUCT CONTENT
// =====================================================

const product = {
  name: "Kraft Bags",
  subtitle: "SUSTAINABLE LONG-FIBER WRAPS",
  shortDescription: "Durable, unbleached brown or bleached white kraft paper carriers providing high tear resistance.",
  longDescription: "Our Kraft bags offer an authentic organic aesthetic without sacrificing luxury metrics. Constructed from 120 GSM natural long-fiber conifer wood pulp, the paper has natural high tensile strength and tear resistance. Made with intent, they are 100% recyclable, compostable, and FSC-certified.",

  images: [
    { src: "/assets/kraftmain.png", alt: "Kraft Bag premium showcase 1" },
    { src: "/assets/kraft2.png", alt: "Kraft Bag premium showcase 2" },
    { src: "/assets/kraft3.png", alt: "Kraft Bag premium showcase 3" }
  ],

  highlights: [
    { label: "120 GSM", value: "NATURAL KRAFT" },
    { label: "UNCOATED", value: "NATURAL FINISH" },
    { label: "PAPER ROPE", value: "TIE-END HANDLE" }
  ],

  material: "120 GSM Natural Kraft Paper",
  printing: "1-Color Printing (Black)",
  finish: "Uncoated Natural Kraft Finish",
  handle: "Paper Rope Tie End",

  sizes: [
    { value: "15 × 19 × 8 cm", desc: "Perfect for cosmetics and small retail items." },
    { value: "26 × 20 × 8 cm", desc: "Most popular retail size for boxes and gifts." },
    { value: "36 × 47 × 16 cm", desc: "Wide gusset shopper for gourmet goods and bulky clothing." }
  ],

  colors: [
    { name: "Brown", hex: "#8A6D55" },
    { name: "White", hex: "#FAF8F5" }
  ],

  handleDetail: {
    image: "/assets/krafthandle.png",
    label: "HANDLE DETAIL",
    title: "Paper Rope Tie End",
    description: "Naturally textured paper rope handle with reinforced adhesive attachments hidden under the fold-over top."
  },

  customization: [
    { title: "Reinforced Bottom Patch", desc: "Applying thick kraft card inserts to double the load bearing capacity." }
  ],

  faqs: [
    { q: "Are these bags fully compostable?", a: "Yes. Bags with natural twisted paper handles using starch glues are 100% compostable and recyclable." },
    { q: "What is the paper weight?", a: "We use thick, high-grade kraft paper certified at 120 GSM." },
    { q: "Can the bags be customised?", a: "Yes. Custom sizes, quantities, and branding are available." },
    { q: "What printing is available?", a: "1-colour black printing." }
  ],

  breadcrumbs: [
    { label: "Home", to: "/" },
    { label: "Bags", to: "/bags" },
    { label: "Kraft Bags" }
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

export default function KraftBagPage() {
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
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

              {/* Colours Section */}
              <div className="w-full mb-10">
                <h4 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase mb-4">
                  AVAILABLE COLOURWAYS
                </h4>
                <div className="flex gap-4">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColorIdx(idx)}
                      className={`flex items-center gap-3 px-4 py-3 border rounded-lg transition-all duration-300 ${activeColorIdx === idx
                        ? "border-[#C7A86A] bg-[#F6F0E8]"
                        : "border-[#C7A86A]/20 bg-transparent hover:border-[#C7A86A]/50"
                        }`}
                    >
                      <div
                        className="h-6 w-6 rounded-full border border-[#0F2744]/15 shadow-xs relative"
                        style={{ backgroundColor: color.hex }}
                      >
                      </div>
                      <span className="text-xs font-semibold text-[#0F2744]">{color.name}</span>
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
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-2 block">
                    THE MATERIAL
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] leading-tight mb-4 font-medium">
                    Natural kraft, thoughtfully constructed.
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
                    <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                      <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        MATERIAL
                      </div>
                      <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                        {product.material}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                      <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        PRINTING
                      </div>
                      <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                        {product.printing}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                      <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        FINISH
                      </div>
                      <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                        {product.finish}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 py-4 sm:py-5 gap-1.5 md:gap-4">
                      <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        HANDLE
                      </div>
                      <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                        {product.handle}
                      </div>
                    </div>
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
                <p className="text-sm text-[#0F2744]/85 leading-relaxed">
                  {product.handleDetail.description}
                </p>
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
