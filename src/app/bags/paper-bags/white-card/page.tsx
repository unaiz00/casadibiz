"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, X, ChevronLeft, ChevronRight, Maximize2, Ribbon } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

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

  colors: [
    { name: "Brown", hex: "#6E553F" },
    { name: "Green", hex: "#2E523A" }
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

export default function WhiteCardPage() {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const selectedSize = product.sizes[activeSizeIdx]?.value || "";
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${product.name} (Size: ${selectedSize})`;
  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % product.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

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
              {/* Desktop layout: 1 + 2 + 2 */}
              <div className="hidden md:flex flex-col gap-4">
                {/* Large full-width image at the top */}
                <div
                  onClick={() => {
                    setActiveImageIdx(0);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[16/10] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white cursor-zoom-in shadow-xs"
                >
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1">
                    <Maximize2 className="h-5 w-5 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Two equal-sized images side-by-side underneath */}
                <div className="grid grid-cols-2 gap-4">
                  {product.images.slice(1, 3).map((img, idx) => (
                    <div
                      key={idx + 1}
                      onClick={() => {
                        setActiveImageIdx(idx + 1);
                        setLightboxOpen(true);
                      }}
                      className="group relative aspect-[4/3] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white cursor-zoom-in shadow-xs"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Maximize2 className="h-4 w-4 text-[#C7A86A]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile layout: large active image + scrollable thumbnail strip underneath */}
              <div className="md:hidden w-full flex flex-col gap-3">
                {/* Active Image */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white shadow-xs"
                >
                  <img
                    src={product.images[activeImageIdx].src}
                    alt={product.images[activeImageIdx].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-[#0F2744]/90 text-[#F6F0E8] flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Horizontal scrollable thumbnails */}
                <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none snap-x w-full">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative h-14 w-20 rounded-md overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer ${activeImageIdx === idx
                        ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/30 scale-95"
                        : "border-[#C7A86A]/10 opacity-70 hover:opacity-100"
                        }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
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
                {product.material && (
                  <div className="flex justify-between">
                    <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">MATERIAL</span>
                    <span className="font-semibold text-[#0F2744]">{product.material}</span>
                  </div>
                )}
                {product.printing && (
                  <div className="flex justify-between">
                    <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">PRINTING</span>
                    <span className="font-semibold text-[#0F2744]">{product.printing}</span>
                  </div>
                )}
                {product.finish && (
                  <div className="flex justify-between">
                    <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">FINISH</span>
                    <span className="font-semibold text-[#0F2744]">{product.finish}</span>
                  </div>
                )}
                {product.handle && (
                  <div className="flex justify-between">
                    <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">HANDLE</span>
                    <span className="font-semibold text-[#0F2744]">{product.handle}</span>
                  </div>
                )}
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
                      SBS artboard carriers, high graphic resolution.
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
                      {product.material && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            MATERIAL
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {product.material}
                          </div>
                        </div>
                      )}
                      {product.printing && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            PRINTING
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {product.printing}
                          </div>
                        </div>
                      )}
                      {product.finish && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            FINISH
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {product.finish}
                          </div>
                        </div>
                      )}
                      {product.handle && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            HANDLE
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {product.handle}
                          </div>
                        </div>
                      )}
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

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#FAF8F5]/98 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-transparent text-[#0F2744] grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-[#0F2744]/10 hover:border-[#C7A86A]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
            }}
            className="absolute left-4 sm:left-8 h-10 w-10 rounded-full bg-transparent text-[#0F2744] grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-[#0F2744]/10 hover:border-[#C7A86A]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative max-h-[85vh] max-w-[85vw] flex items-center justify-center">
            <img
              src={product.images[activeImageIdx].src}
              alt={product.images[activeImageIdx].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg border border-[#0F2744]/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev + 1) % product.images.length);
            }}
            className="absolute right-4 sm:right-8 h-10 w-10 rounded-full bg-transparent text-[#0F2744] grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-[#0F2744]/10 hover:border-[#C7A86A]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
