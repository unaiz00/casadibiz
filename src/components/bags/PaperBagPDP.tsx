"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, Ribbon } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import PaperBagImageGallery from "@/components/bags/PaperBagImageGallery";
import type { BagCategoryData } from "@/app/bags/paper-bags/data";

// Product-specific visual overrides to match the premium, custom editorial feel of each product
const PRODUCT_VISUAL_OVERLAYS: Record<string, {
  galleryImages?: string[];
  tabHeading: string;
  highlights: { label: string; value: string }[];
  handleDetail: {
    image: string;
    label: string;
    title: string;
    description: string;
  };
}> = {};

interface PaperBagPDPProps {
  category: string;
  data: BagCategoryData;
}

export default function PaperBagPDP({ category, data }: PaperBagPDPProps) {
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const overlays = PRODUCT_VISUAL_OVERLAYS[category] || {
    tabHeading: "Premium Paper Carrier Bags",
    highlights: [
      { label: "PREMIUM", value: "PAPER SPECIFICATION" }
    ],
    handleDetail: {
      image: data.productImages[0] || "",
      label: "HANDLE DETAIL",
      title: "Bespoke Handles",
      description: "Custom handles and closures designed for your packaging."
    }
  };

  const galleryImages = overlays.galleryImages || data.productImages.slice(0, 3);
  const selectedSize = data.sizes[activeSizeIdx]?.value || "";
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${data.category.title} (Size: ${selectedSize})`;
  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main className="text-[#0F2744] overflow-hidden">
        {/* BREADCRUMBS */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6">
          <Breadcrumbs items={data.category.breadcrumbs} />
        </div>

        {/* HERO / MAIN PDP SECTION */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-6 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT: Product Image Gallery */}
            <div className="lg:col-span-7">
              <PaperBagImageGallery
                images={galleryImages}
                productTitle={data.category.title}
              />
            </div>

            {/* RIGHT: Product Information & CTAs */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[#0F2744]/70 tracking-[0.3em] font-semibold text-[11px] uppercase mb-4 block">
                {data.category.subtitle || "PAPER BAGS"}
              </span>

              <h1 className="font-display text-4xl sm:text-5xl text-[#0F2744] leading-[1.1] mb-6 font-medium">
                {data.category.title}
              </h1>

              <div className="w-16 h-[2px] bg-[#C7A86A] mb-8" />

              <p className="text-[#0F2744]/80 text-base leading-relaxed mb-8">
                {data.category.shortDescription}
              </p>

              {/* Material/Construction Summary */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-5 sm:p-5 mb-8 space-y-4 sm:space-y-3">
                {data.materials?.[0]?.name && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      MATERIAL
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {data.materials[0].name}
                    </span>
                  </div>
                )}
                {data.printing?.[0]?.name && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      PRINTING
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {data.printing[0].name}
                    </span>
                  </div>
                )}
                {data.finishes?.[0]?.name && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      FINISH
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {data.finishes[0].name}
                    </span>
                  </div>
                )}
                {data.handles?.[0]?.name && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1.5 sm:gap-4 pb-3 sm:pb-2.5 border-b border-[#C7A86A]/15 last:border-b-0 last:pb-0">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#0F2744]/70 shrink-0">
                      HANDLE
                    </span>
                    <span className="text-[13px] sm:text-sm font-medium sm:font-semibold text-[#0F2744] sm:text-right leading-snug break-words">
                      {data.handles[0].name}
                    </span>
                  </div>
                )}
              </div>

              {/* Sizes Section */}
              <div className="w-full mb-8">
                <div className="flex flex-row gap-3 overflow-x-auto lg:overflow-x-visible w-full pb-2 lg:pb-0 scrollbar-none snap-x">
                  {data.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`flex items-center justify-center h-12 px-5 border rounded-md shrink-0 snap-start transition-all duration-300 cursor-pointer ${
                        activeSizeIdx === idx
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
                  {data.colors.map((color, idx) => (
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
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
                      </div>
                      <span className="text-xs font-semibold text-[#0F2744]">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* B2B CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link
                  href={`/contact?size=${encodeURIComponent(selectedSize)}&product=${encodeURIComponent(data.category.title)}`}
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
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                    activeDetailTab === "description"
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
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                    activeDetailTab === "specifications"
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
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                    activeDetailTab === "customization"
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
                      {overlays.tabHeading}
                    </h3>
                    <p className="text-[#0F2744]/80 text-base leading-relaxed mb-10 font-sans">
                      {data.category.longDescription}
                    </p>
                    
                    {/* highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-8 border-t border-[#C7A86A]/20">
                      {overlays.highlights.map((hl, idx) => (
                        <div
                          key={idx}
                          className={`${
                            idx === 0
                              ? "md:pr-8 md:border-r border-[#C7A86A]/20"
                              : idx === 1
                              ? "md:px-8 md:border-r border-[#C7A86A]/20"
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
                      {data.materials?.[0]?.name && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            MATERIAL
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {data.materials[0].name}
                          </div>
                        </div>
                      )}
                      {data.printing?.[0]?.name && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            PRINTING
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {data.printing[0].name}
                          </div>
                        </div>
                      )}
                      {data.finishes?.[0]?.name && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            FINISH
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {data.finishes[0].name}
                          </div>
                        </div>
                      )}
                      {data.handles?.[0]?.name && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            HANDLE
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {data.handles[0].name}
                          </div>
                        </div>
                      )}
                      {data.construction?.[0]?.name && (
                        <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                          <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                            CONSTRUCTION
                          </div>
                          <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                            {data.construction[0].name}
                          </div>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          AVAILABLE SIZES
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium space-y-1">
                          {data.sizes.map((size, idx) => (
                            <div key={idx}>
                              {size.value} {size.label ? `(${size.label})` : ""}
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
                      {data.customisations && data.customisations.length > 0 ? (
                        data.customisations.map((cust, idx) => (
                          <div key={idx}>
                            <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">
                              {cust.title}
                            </h4>
                            {cust.desc && (
                              <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                                {cust.desc}
                              </p>
                            )}
                          </div>
                        ))
                      ) : (
                        <>
                          <div>
                            <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">SIZE</h4>
                            <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                              Custom dimensions based on your packaging requirements.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">PRINTING</h4>
                            <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                              Brand artwork and logo printing.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">HANDLE</h4>
                            <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                              Bespoke handle and ribbon closure customizations.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">FINISH</h4>
                            <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                              Specialty finishing, foils, and embossing patterns.
                            </p>
                          </div>
                        </>
                      )}
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
                  src={overlays.handleDetail.image}
                  alt={`${overlays.handleDetail.title} handle close-up`}
                  className="w-full aspect-[4/3] object-cover rounded-tl-[14px] rounded-tr-[80px] rounded-br-[14px] rounded-bl-[14px] overflow-hidden shadow-xs"
                />
              </div>

              {/* Handle description (Dynamic or single paragraphs) */}
              <div className="lg:col-span-6 text-left space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase block mb-2">
                    {overlays.handleDetail.label}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium leading-tight">
                    {overlays.handleDetail.title}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#C7A86A] mt-4" />
                </div>

                  <div className="w-full space-y-4">
                    {data.handles.map((handle, idx) => (
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
              {data.category.title} Q&A
            </h3>

            <div className="divide-y divide-[#C7A86A]/20 border-y border-[#C7A86A]/20 text-left">
              {data.faqs.map((faq, i) => {
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

