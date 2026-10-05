"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import PaperBagImageGallery from "@/components/bags/PaperBagImageGallery";

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
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-xl p-5 mb-8 text-sm space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">MATERIAL</span>
                  <span className="font-semibold text-[#0F2744]">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">PRINTING</span>
                  <span className="font-semibold text-[#0F2744]">{product.printing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">FINISH</span>
                  <span className="font-semibold text-[#0F2744]">{product.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">HANDLE</span>
                  <span className="font-semibold text-[#0F2744]">{product.handle}</span>
                </div>
              </div>

              {/* Sizes Section */}
              <div className="w-full mb-8">
                <div className="flex flex-row gap-3 overflow-x-auto lg:overflow-x-visible w-full pb-2 lg:pb-0 scrollbar-none snap-x">
                  {product.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`flex items-center justify-center h-12 px-5 border rounded-md shrink-0 snap-start transition-all duration-300 cursor-pointer ${activeSizeIdx === idx
                        ? "border-[#C7A86A] bg-[#F6F0E8]"
                        : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/20 hover:translate-y-[-1px]"
                        }`}
                    >
                      <span className="text-[12px] font-medium tracking-[0.08em] text-[#0F2744]">
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
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link
                  href={`/contact?size=${encodeURIComponent(selectedSize)}&product=${encodeURIComponent(product.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-3 rounded-md px-8 py-4.5 text-xs tracking-[0.25em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 text-center"
                >
                  REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-3 rounded-md px-8 py-4.5 text-xs tracking-[0.25em] font-semibold border border-[#C7A86A]/40 text-[#0F2744] hover:bg-[#F6F0E8]/40 transition-all duration-300"
                >
                  <span>ENQUIRE VIA WHATSAPP</span>
                  <ArrowRight className="h-3 w-3 text-[#C7A86A] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

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
        <section className="bg-[#FAF8F5] pt-8 pb-20 lg:pt-12 lg:pb-28 border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Title */}
              <h2 className="text-[11px] font-semibold tracking-[0.3em] text-[#0F2744] uppercase mb-8">
                PRODUCT DETAILS
              </h2>
              {/* Tabs list */}
              <div className="flex border-b border-[#0F2744]/10 mb-12 gap-8 md:gap-12 overflow-x-auto scrollbar-none snap-x">
                <button
                  onClick={() => setActiveDetailTab("description")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "description"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  DESCRIPTION
                  {activeDetailTab === "description" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveDetailTab("specifications")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "specifications"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  SPECIFICATIONS
                  {activeDetailTab === "specifications" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveDetailTab("customization")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "customization"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  CUSTOMIZATION
                  {activeDetailTab === "customization" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="transition-all duration-300 ease-in-out">
                {activeDetailTab === "description" && (
                  <div className="opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-3 block">
                      THE MATERIAL
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight mb-6 font-medium">
                      Natural kraft, thoughtfully constructed.
                    </h3>
                    <p className="text-[#0F2744]/80 text-base leading-relaxed mb-10 font-sans">
                      {product.longDescription}
                    </p>

                    {/* highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-8 border-t border-[#C7A86A]/20">
                      {product.highlights.map((hl, idx) => (
                        <div
                          key={idx}
                          className={`${idx === 0
                            ? "md:pr-8"
                            : idx === 1
                              ? "md:px-8"
                              : "md:pl-8"
                            }`}
                        >
                          <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1">
                            {hl.label}
                          </span>
                          <span className="block font-display text-base text-[#0F2744] font-medium tracking-wide">
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
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          MATERIAL
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.material}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          PRINTING
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.printing}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          FINISH
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.finish}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          HANDLE
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          {product.handle}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      {product.customization.map((cust, idx) => (
                        <div key={idx}>
                          <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">
                            {cust.title}
                          </h4>
                          <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                            {cust.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
