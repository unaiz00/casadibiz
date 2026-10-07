"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  ChevronDown,
  X,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Layers,
  Check,
  MessageCircle,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { BoxModel } from "@/data/boxes-data";

interface BoxPDPViewProps {
  model: BoxModel;
  relatedModels: BoxModel[];
}

export default function BoxPDPView({ model, relatedModels }: BoxPDPViewProps) {
  // Active states
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeMaterialId, setActiveMaterialId] = useState(model.materials[0]?.id || "");
  const [activeFinishId, setActiveFinishId] = useState(model.finishes[0]?.id || "");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const activeSize = model.sizes[activeSizeIdx] || model.sizes[0];
  const activeMaterial = model.materials.find((m) => m.id === activeMaterialId) || model.materials[0];
  const activeFinish = model.finishes.find((f) => f.id === activeFinishId) || model.finishes[0];

  // Dynamic WhatsApp prefill message
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${model.name}.
Selected Specs:
- Size: ${activeSize?.label} (${activeSize?.dimensions})
- Material Preference: ${activeMaterial?.name}
- Logo Finish: ${activeFinish?.name}
- Colour: Bespoke to brand requirement`;

  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  // Dynamic Contact Page URL with prefilled query
  const quoteUrl = `/contact?category=${encodeURIComponent(model.categorySlug)}&model=${encodeURIComponent(model.name)}&size=${encodeURIComponent(activeSize?.dimensions || "")}&material=${encodeURIComponent(activeMaterial?.name || "")}&finish=${encodeURIComponent(activeFinish?.name || "")}`;

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % model.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev - 1 + model.images.length) % model.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, model.images.length]);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Boxes", to: "/boxes" },
    { label: "Jewellery Boxes", to: "/boxes/jewellery-boxes" },
    { label: model.name },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main className="text-[#0F2744] overflow-hidden">
        {/* BREADCRUMBS */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO / PRODUCT DISPLAY SECTION */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT: Product Image Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Desktop gallery: main hero + sub-grid */}
              <div className="hidden md:flex flex-col gap-4">
                {/* Large Main Showcase Image */}
                <div
                  onClick={() => {
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[16/11] rounded-xl overflow-hidden border border-[#C7A86A]/25 bg-white cursor-zoom-in shadow-xs transition-all duration-500 hover:border-[#C7A86A]/60"
                >
                  <img
                    src={model.images[activeImageIdx]?.src || model.images[0]?.src}
                    alt={model.images[activeImageIdx]?.alt || `${model.name} luxury jewellery box`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle catalogue badge on top left */}
                  <div className="absolute top-5 left-5 bg-[#0F2744]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-md border border-[#C7A86A]/40 text-[#F6F0E8] text-[10px] tracking-[0.2em] font-semibold uppercase">
                    {model.name}
                  </div>

                  {/* Zoom indicator button */}
                  <div className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 hover:bg-[#C7A86A] hover:text-[#0F2744]">
                    <Maximize2 className="h-4.5 w-4.5 text-[#C7A86A] group-hover:text-[#0F2744] transition-colors" />
                  </div>
                </div>

                {/* Sub-grid of thumbnails / gallery angles */}
                <div className="grid grid-cols-4 gap-3.5">
                  {model.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`group relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer text-left ${
                        activeImageIdx === idx
                          ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/30 scale-[0.98]"
                          : "border-[#C7A86A]/20 bg-white/70 opacity-75 hover:opacity-100 hover:border-[#C7A86A]/60"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {img.label && (
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F2744]/80 via-[#0F2744]/40 to-transparent p-1.5 text-center">
                          <span className="text-[9px] tracking-[0.1em] text-[#F6F0E8] font-medium block truncate">
                            {img.label}
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Layout: Active Image + Horizontal Thumbnails */}
              <div className="md:hidden w-full flex flex-col gap-3">
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#C7A86A]/30 bg-white shadow-xs"
                >
                  <img
                    src={model.images[activeImageIdx]?.src || model.images[0]?.src}
                    alt={model.images[activeImageIdx]?.alt || `${model.name} luxury jewellery box`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F2744]/90 px-3 py-1 rounded text-[#F6F0E8] text-[9px] tracking-[0.2em] font-semibold uppercase">
                    {model.name}
                  </div>
                  <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-[#0F2744]/90 text-[#F6F0E8] flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Horizontal scrollable thumbnails */}
                <div className="flex gap-2.5 overflow-x-auto py-1 scrollbar-none snap-x w-full">
                  {model.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative h-16 w-20 rounded-md overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer ${
                        activeImageIdx === idx
                          ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/40"
                          : "border-[#C7A86A]/20 opacity-70"
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specification Badges Row */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-lg p-3.5 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#C7A86A] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#0F2744]/60 uppercase block">ANTI-TARNISH</span>
                    <span className="text-xs font-semibold text-[#0F2744] truncate block">Certified Linings</span>
                  </div>
                </div>
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-lg p-3.5 flex items-center gap-3">
                  <Layers className="h-5 w-5 text-[#C7A86A] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#0F2744]/60 uppercase block">CORE RIGIDITY</span>
                    <span className="text-xs font-semibold text-[#0F2744] truncate block">1200+ GSM Board</span>
                  </div>
                </div>
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-lg p-3.5 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#C7A86A] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#0F2744]/60 uppercase block">BESPOKE EMBELLISH</span>
                    <span className="text-xs font-semibold text-[#0F2744] truncate block">Foil & 3D Crest</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Information & Interactive Configurator */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Eyebrow & Category */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#0F2744]/70 tracking-[0.3em] font-semibold text-[11px] uppercase">
                  {model.categoryName}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
                <span className="text-[#C7A86A] text-xs font-semibold tracking-wider uppercase">
                  Bespoke Manufacture
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2744] leading-[1.1] mb-3 font-medium">
                {model.name}
              </h1>

              {/* Subtitle / Headline */}
              <p className="text-[11px] tracking-[0.25em] font-semibold text-[#C7A86A] uppercase mb-4">
                {model.subtitle}
              </p>

              {/* Short Description */}
              <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {model.shortDescription}
              </p>

              {/* SECTION 1: AVAILABLE SIZES */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    AVAILABLE SIZES
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-semibold font-mono">
                    Selected: {activeSize?.dimensions}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-h-56 overflow-y-auto pr-1">
                  {model.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`p-2.5 border rounded-lg text-left transition-all duration-300 cursor-pointer relative ${
                        activeSizeIdx === idx
                          ? "border-[#C7A86A] bg-[#F6F0E8] shadow-xs ring-1 ring-[#C7A86A]"
                          : "border-[#C7A86A]/20 bg-white/70 hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/30"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[11px] font-bold text-[#0F2744] font-mono leading-none">{size.dimensions}</span>
                        {activeSizeIdx === idx && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C7A86A] shrink-0" />
                        )}
                      </div>
                      <span className="text-[9px] text-[#0F2744]/65 block truncate">
                        {size.label !== size.dimensions ? size.label : size.description}
                      </span>
                    </button>
                  ))}
                </div>
                {activeSize?.description && (
                  <p className="mt-2 text-[11px] text-[#0F2744]/70 italic">
                    {activeSize.description}
                  </p>
                )}
              </div>

              {/* SECTION 2: MATERIAL & TEXTURE */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    MATERIAL & TEXTURE
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeMaterial?.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
                  {model.materials.map((mat) => {
                    const isSelected = activeMaterialId === mat.id;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        onClick={() => setActiveMaterialId(mat.id)}
                        className={`p-2 sm:p-2.5 rounded-lg border flex items-center gap-2.5 text-left transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-[#C7A86A] border-[1.5px] bg-[#F6F0E8] shadow-xs"
                            : "border-[#0F2744]/15 bg-white hover:border-[#C7A86A]/60 hover:bg-[#FAF8F5]"
                        }`}
                      >
                        {/* Thumbnail Image */}
                        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-md overflow-hidden border border-[#0F2744]/10 bg-[#F6F0E8] shrink-0 relative">
                          <img
                            src={mat.image}
                            alt={mat.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs font-medium text-[#0F2744] leading-snug truncate">
                          {mat.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: COLOUR (Bespoke B2B statement, no swatches) */}
              <div className="w-full mb-6 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    COLOUR
                  </h3>
                  <span className="text-[10px] font-semibold text-[#C7A86A] uppercase tracking-wider">
                    BESPOKE FINISH
                  </span>
                </div>
                <p className="text-xs text-[#0F2744] font-medium mb-1">
                  Customised to your brand requirements.
                </p>
                <p className="text-[11px] text-[#0F2744]/70 leading-relaxed">
                  Colours and finishes can be customised to your brand requirements. Representative product image shown.
                </p>
              </div>

              {/* SECTION 4: LOGO FINISH */}
              <div className="w-full mb-8">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    LOGO FINISH
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeFinish?.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                  {model.finishes.map((finish) => (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setActiveFinishId(finish.id)}
                      className={`p-2.5 border rounded-md text-xs font-medium transition-all duration-300 cursor-pointer text-center ${
                        activeFinishId === finish.id
                          ? "border-[#C7A86A] bg-[#0F2744] text-[#FAF8F5]"
                          : "border-[#C7A86A]/30 text-[#0F2744] bg-white/70 hover:border-[#C7A86A]"
                      }`}
                    >
                      {finish.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* B2B CTAS */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full">
                <Link
                  href={quoteUrl}
                  className="flex-1 inline-flex items-center justify-center gap-3 rounded-lg px-7 py-4 text-xs tracking-[0.22em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 text-center shadow-md"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-xs tracking-[0.2em] font-semibold border border-[#C7A86A]/60 bg-white/60 text-[#0F2744] hover:bg-[#F6F0E8] transition-all duration-300 shadow-xs"
                >
                  <MessageCircle className="h-4 w-4 text-[#C7A86A]" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>
              </div>

              {/* Supporting B2B Note */}
              <div className="w-full text-center mt-3.5">
                <span className="text-[11px] font-medium tracking-[0.05em] text-[#0F2744]/60">
                  Custom tooling • Bespoke cavity inserts • Global & Gulf shipping
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL PRODUCT DETAILS SECTION */}
        <section className="bg-white border-y border-[#C7A86A]/20 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MANUFACTURING SPECIFICATIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Engineered for Luxury Packaging Excellence
              </h2>
            </div>

            {/* Tabs Header */}
            <div className="flex border-b border-[#0F2744]/10 mb-10 justify-center gap-6 sm:gap-12 overflow-x-auto scrollbar-none snap-x">
              <button
                type="button"
                onClick={() => setActiveDetailTab("description")}
                className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                  activeDetailTab === "description"
                    ? "text-[#0F2744] font-bold"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                }`}
              >
                OVERVIEW & CRAFTSMANSHIP
                {activeDetailTab === "description" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveDetailTab("specifications")}
                className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                  activeDetailTab === "specifications"
                    ? "text-[#0F2744] font-bold"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                }`}
              >
                TECHNICAL SPECIFICATIONS
                {activeDetailTab === "specifications" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveDetailTab("customization")}
                className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${
                  activeDetailTab === "customization"
                    ? "text-[#0F2744] font-bold"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                }`}
              >
                TAILORED CUSTOMISATION
                {activeDetailTab === "customization" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                )}
              </button>
            </div>

            {/* Tab 1: Overview & Craftsmanship */}
            {activeDetailTab === "description" && (
              <div className="max-w-4xl mx-auto animate-fade-up">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-2 block">
                  {model.name} MANIFESTO
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] leading-tight mb-5 font-medium">
                  {model.heroHeadline}
                </h3>
                <p className="text-[#0F2744]/80 text-base leading-relaxed mb-8">
                  {model.longDescription}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#C7A86A]/20">
                  {model.highlights.map((hl, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] border border-[#C7A86A]/20 rounded-xl p-5">
                      <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1">
                        {hl.label}
                      </span>
                      <span className="block font-display text-base text-[#0F2744] font-semibold">
                        {hl.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Technical Specifications */}
            {activeDetailTab === "specifications" && (
              <div className="max-w-4xl mx-auto animate-fade-up">
                <div className="border border-[#C7A86A]/25 rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <table className="w-full text-left text-xs border-collapse">
                    <tbody>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50 w-1/3">
                          Outer Shell
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.outerMaterial}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Interior Lining
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.innerMaterial}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Hinge / Mechanism
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.hingeClosure}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Fitted Insert
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.insertType}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Branding Placement
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.brandingPlacement}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Minimum Order (MOQ)
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-bold text-[#C7A86A]">
                          {model.specifications.moq}
                        </td>
                      </tr>
                      <tr className="border-b border-[#C7A86A]/15">
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Production Lead Time
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.leadTime}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-5 font-semibold text-[#0F2744]/70 uppercase tracking-wider bg-[#F6F0E8]/50">
                          Sample Prototyping
                        </td>
                        <td className="p-4 sm:p-5 text-[#0F2744] font-medium">
                          {model.specifications.sampleAvailability}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 3: Tailored Customisation */}
            {activeDetailTab === "customization" && (
              <div className="max-w-4xl mx-auto animate-fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {model.customisationFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-xl p-6">
                      <h4 className="font-display text-lg text-[#0F2744] font-medium mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#0F2744]/75 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        {model.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
            <div className="text-center mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                CLIENT ENQUIRIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3.5">
              {model.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#C7A86A]/25 bg-white rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-display text-base text-[#0F2744] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#C7A86A] transition-transform duration-300 shrink-0 ${
                        openFaqIdx === idx ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIdx === idx && (
                    <div className="px-5 pb-5 pt-0 text-xs text-[#0F2744]/75 leading-relaxed border-t border-[#C7A86A]/10 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RELATED PRODUCTS */}
        {relatedModels.length > 0 && (
          <section className="bg-[#F6F0E8] border-t border-[#C7A86A]/20 py-16">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                    COORDINATED FORMATS
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                    Complementary Jewellery Boxes
                  </h2>
                </div>
                <Link
                  href="/boxes/jewellery-boxes"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#C7A86A] tracking-[0.15em] hover:gap-3 transition-all"
                >
                  VIEW FULL CATALOGUE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedModels.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/boxes/${rel.categorySlug}/${rel.slug}`}
                    className="group flex flex-col bg-white border border-[#C7A86A]/20 rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-500 shadow-xs"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={rel.images[0]?.src || "/assets/boxim.jpeg"}
                        alt={rel.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] tracking-[0.2em] text-[#C7A86A] font-semibold uppercase block mb-1">
                          {rel.categoryName}
                        </span>
                        <h3 className="font-display text-lg text-[#0F2744] font-medium group-hover:text-[#C7A86A] transition-colors">
                          {rel.name}
                        </h3>
                        <p className="text-xs text-[#0F2744]/70 mt-2 line-clamp-2 leading-relaxed">
                          {rel.shortDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#C7A86A]/15 flex items-center justify-between">
                        <span className="text-[10px] text-[#0F2744]/60">
                          Available in multiple sizes
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] group-hover:gap-2.5 transition-all">
                          VIEW DETAILS <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center relative">
            <img
              src={model.images[activeImageIdx]?.src}
              alt={model.images[activeImageIdx]?.alt}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
