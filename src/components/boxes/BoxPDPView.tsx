"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  HelpCircle,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Layers,
  Check,
  Phone,
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
  const [activeColourId, setActiveColourId] = useState(model.colours[0]?.id || "");
  const [activeFinishId, setActiveFinishId] = useState(model.finishes[0]?.id || "");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const activeSize = model.sizes[activeSizeIdx] || model.sizes[0];
  const activeMaterial = model.materials.find((m) => m.id === activeMaterialId) || model.materials[0];
  const activeColour = model.colours.find((c) => c.id === activeColourId) || model.colours[0];
  const activeFinish = model.finishes.find((f) => f.id === activeFinishId) || model.finishes[0];

  // Dynamic WhatsApp prefill message
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${model.modelCode} ${model.name} (${model.categoryName}).
Selected Specs:
- Size: ${activeSize?.label} (${activeSize?.dimensions})
- Material: ${activeMaterial?.name}
- Colour: ${activeColour?.name}
- Finishing: ${activeFinish?.name}`;

  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  // Dynamic Contact Page URL with prefilled query
  const quoteUrl = `/contact?category=${encodeURIComponent(model.categorySlug)}&model=${encodeURIComponent(model.modelCode + " - " + model.name)}&size=${encodeURIComponent(activeSize?.dimensions || "")}&material=${encodeURIComponent(activeMaterial?.name || "")}&colour=${encodeURIComponent(activeColour?.name || "")}&finish=${encodeURIComponent(activeFinish?.name || "")}`;

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
    { label: model.categoryName, to: `/boxes/${model.categorySlug}` },
    { label: `${model.modelCode} ${model.name}` },
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
                  
                  {/* Subtle model badge on top left */}
                  <div className="absolute top-5 left-5 bg-[#0F2744]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-md border border-[#C7A86A]/40 text-[#F6F0E8] text-[10px] tracking-[0.25em] font-semibold uppercase">
                    {model.modelCode}
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
                    {model.modelCode}
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
              {/* Eyebrow & Model Badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#0F2744]/70 tracking-[0.3em] font-semibold text-[11px] uppercase">
                  {model.categoryName}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
                <span className="text-[#C7A86A] font-mono text-xs font-bold tracking-widest">
                  {model.modelCode}
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

              {/* Summary Specs Pill Card */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-4.5 mb-6 text-xs space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">CATEGORY</span>
                  <span className="font-semibold text-[#0F2744]">{model.categoryName}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">HINGE / CLOSURE</span>
                  <span className="font-semibold text-[#0F2744] text-right">{model.specifications.hingeClosure.split(" with ")[0]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">INSERT FORMAT</span>
                  <span className="font-semibold text-[#0F2744] text-right">{model.specifications.insertType.split(" with ")[0]}</span>
                </div>
              </div>

              {/* CONFIGURATION STEP 1: SIZE / FORMAT SELECTOR */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    1. SELECT FORMAT / SIZE
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeSize?.dimensions}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
                  {model.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`p-3 border rounded-lg text-left transition-all duration-300 cursor-pointer relative ${
                        activeSizeIdx === idx
                          ? "border-[#C7A86A] bg-[#F6F0E8] shadow-xs"
                          : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/30"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-[#0F2744]">{size.label}</span>
                        {activeSizeIdx === idx && (
                          <span className="h-2 w-2 rounded-full bg-[#C7A86A]" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-[#0F2744]/75 block">
                        {size.dimensions}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CONFIGURATION STEP 2: MATERIAL SELECTION */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    2. MATERIAL & TEXTURE
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeMaterial?.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                  {model.materials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setActiveMaterialId(mat.id)}
                      className={`p-2.5 border rounded-lg flex items-center gap-2.5 transition-all duration-300 text-left cursor-pointer ${
                        activeMaterialId === mat.id
                          ? "border-[#C7A86A] bg-[#F6F0E8] shadow-xs"
                          : "border-[#C7A86A]/20 bg-transparent hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/20"
                      }`}
                    >
                      {mat.swatchImage ? (
                        <div className="h-6 w-6 rounded-full overflow-hidden border border-[#0F2744]/20 shrink-0">
                          <img src={mat.swatchImage} alt={mat.name} className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-[#0F2744]/10 shrink-0" />
                      )}
                      <span className="text-xs font-medium text-[#0F2744] truncate">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CONFIGURATION STEP 3: COLOUR SELECTOR */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    3. COLOURWAY
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeColour?.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {model.colours.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setActiveColourId(color.id)}
                      title={color.name}
                      className={`group flex items-center gap-2 px-3 py-2 border rounded-full transition-all duration-300 cursor-pointer ${
                        activeColourId === color.id
                          ? "border-[#C7A86A] bg-[#F6F0E8] ring-1 ring-[#C7A86A]"
                          : "border-[#C7A86A]/25 bg-white/60 hover:border-[#C7A86A]/60"
                      }`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-black/20 shrink-0 shadow-xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-[#0F2744]">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CONFIGURATION STEP 4: FINISHING / BRANDING */}
              <div className="w-full mb-8">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    4. BRANDING & FINISHING
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeFinish?.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {model.finishes.map((finish) => (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setActiveFinishId(finish.id)}
                      className={`px-3.5 py-2 border rounded-md text-xs font-medium transition-all duration-300 cursor-pointer ${
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
                  Custom tooling • Custom cavity inserts • Global & Gulf shipping
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
                  {model.modelCode} DESIGN MANIFESTO
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
              <div className="max-w-4xl mx-auto divide-y divide-[#C7A86A]/20 border-t border-b border-[#C7A86A]/20 animate-fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    OUTER STRUCTURE
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.outerMaterial}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    INTERNAL LINING
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.innerMaterial}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    HINGE & CLOSURE
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.hingeClosure}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    INSERT CONFIGURATION
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.insertType}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    BRANDING CAPABILITY
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.brandingPlacement}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    OUTER PACKAGING
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.outerPackaging}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    MINIMUM ORDER QTY
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.moq}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    PRODUCTION LEAD TIME
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.leadTime}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                    SAMPLE AVAILABILITY
                  </div>
                  <div className="sm:col-span-8 text-sm text-[#0F2744] font-medium">
                    {model.specifications.sampleAvailability}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Customisation Features */}
            {activeDetailTab === "customization" && (
              <div className="max-w-4xl mx-auto animate-fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {model.customisationFeatures.map((cust, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] border border-[#C7A86A]/20 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="h-7 w-7 rounded-full bg-[#C7A86A]/15 text-[#C7A86A] grid place-items-center">
                          <Check className="h-4 w-4" />
                        </div>
                        <h4 className="font-display text-base text-[#0F2744] font-semibold">
                          {cust.title}
                        </h4>
                      </div>
                      <p className="text-sm text-[#0F2744]/75 leading-relaxed pl-10">
                        {cust.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Custom Requirements CTA */}
                <div className="text-center pt-4">
                  <Link
                    href={`/contact?category=${encodeURIComponent(model.categorySlug)}&custom=bespoke-dimensions`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F2744] text-[#FAF8F5] text-xs tracking-[0.25em] font-bold rounded-lg hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all"
                  >
                    <span>DISCUSS YOUR BESPOKE REQUIREMENT</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* LUXURY MATERIALS & FINISHES SPOTLIGHT */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20 border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase block">
                  BESPOKE TACTILITY
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium leading-tight">
                  Materials Sourced from Europe&apos;s Finest Paper & Textile Mills
                </h2>
                <div className="w-12 h-[2px] bg-[#C7A86A]" />
                <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed">
                  Every CASA DI BIZ box is constructed with high-density board wrapped by hand in tactile velvet, Italian micro-suede, vegan leatherette, or pulp-dyed fine art papers. Lined with sulfur-free anti-tarnish fabrics to preserve high-jewellery lustre.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#0F2744] hover:text-[#C7A86A] transition-colors"
                  >
                    <span>REQUEST MATERIAL SWATCH BOOK</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column Swatch Cards */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {model.materials.slice(0, 6).map((mat) => (
                  <div
                    key={mat.id}
                    className="bg-white border border-[#C7A86A]/20 rounded-xl overflow-hidden p-3.5 shadow-xs hover:border-[#C7A86A]/60 transition-all group"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-[#F6F0E8]">
                      {mat.swatchImage && (
                        <img
                          src={mat.swatchImage}
                          alt={mat.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#0F2744] mb-1">
                      {mat.name}
                    </h4>
                    <p className="text-[11px] text-[#0F2744]/70 leading-snug line-clamp-2">
                      {mat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="w-full bg-[#FAF8F5] py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-3 block">
              PROCUREMENT & B2B ADVICE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium mb-10">
              {model.name} — Frequently Asked Questions
            </h2>

            <div className="divide-y divide-[#C7A86A]/20 border-y border-[#C7A86A]/20 text-left">
              {model.faqs.map((faq, i) => {
                const open = openFaqIdx === i;
                return (
                  <div key={i} className="py-4.5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="flex items-start gap-3.5 font-display text-base sm:text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                        <HelpCircle className="h-5 w-5 text-[#C7A86A] shrink-0 mt-0.5" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#C7A86A] shrink-0 mt-1 transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open ? "max-h-60 mt-3.5" : "max-h-0"
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

        {/* RELATED BOX MODELS SECTION */}
        {relatedModels.length > 0 && (
          <section className="bg-white py-16 lg:py-24 border-t border-[#C7A86A]/20">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase mb-2 block">
                    EXPLORE COLLECTION
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                    More {model.categoryName}
                  </h2>
                </div>
                <Link
                  href={`/boxes/${model.categorySlug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#0F2744] hover:text-[#C7A86A] transition-colors"
                >
                  <span>VIEW ALL {model.categoryName.toUpperCase()}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Desktop Grid & Mobile Horizontal Swipe Carousel */}
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 sm:pb-0 scrollbar-none snap-x">
                {relatedModels.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/boxes/${rel.categorySlug}/${rel.slug}`}
                    className="group min-w-[280px] sm:min-w-0 flex flex-col bg-[#FAF8F5] border border-[#C7A86A]/20 rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-500 snap-start shadow-xs"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={rel.images[0]?.src || "/assets/boxim.jpeg"}
                        alt={rel.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F2744]/90 px-2.5 py-1 rounded text-[#F6F0E8] text-[9px] tracking-[0.2em] font-semibold uppercase">
                        {rel.modelCode}
                      </div>
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
                        <span className="text-[10px] font-mono text-[#0F2744]/60">
                          {rel.sizes[0]?.dimensions}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] group-hover:gap-2.5 transition-all">
                          VIEW <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM REQUEST QUOTE BANNER */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="relative overflow-hidden bg-[#0F2744] rounded-2xl shadow-xl p-8 sm:p-14 text-center">
            {/* Subtle luxury gold vector background element */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-96 h-96">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <path d="M0 150C80 150 120 50 200 50" stroke="#C7A86A" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <span className="text-[10px] sm:text-xs tracking-[0.32em] text-[#C7A86A] font-semibold uppercase block">
                COMMISSION YOUR BESPOKE COLLECTION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight font-medium">
                Tailored Packaging Solutions for Exceptional Brands
              </h2>
              <p className="text-sm sm:text-base text-[#FAF8F5]/75 max-w-xl mx-auto leading-relaxed">
                Connect directly with our packaging structural specialists in Dubai. We build custom samples, dye fabrics to your Pantone code, and deliver worldwide.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href={quoteUrl}
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.25em] font-bold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] rounded-lg transition-all shadow-md"
                >
                  <span>REQUEST CUSTOM QUOTE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+919995255846"
                  className="inline-flex items-center gap-2.5 px-6 py-4 text-xs tracking-[0.2em] font-semibold border border-[#C7A86A]/50 text-[#FAF8F5] hover:bg-white/10 rounded-lg transition-all"
                >
                  <Phone className="h-4 w-4 text-[#C7A86A]" />
                  <span>CALL SPECIALIST</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image zoom"
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20 hover:border-[#C7A86A] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev - 1 + model.images.length) % model.images.length);
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20 hover:border-[#C7A86A] cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Zoom Image */}
          <div className="relative max-h-[85vh] max-w-[85vw] flex flex-col items-center justify-center">
            <img
              src={model.images[activeImageIdx]?.src || model.images[0]?.src}
              alt={model.images[activeImageIdx]?.alt || `${model.name} zoomed inspection`}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {model.images[activeImageIdx]?.label && (
              <span className="mt-3 text-xs tracking-[0.2em] uppercase text-[#C7A86A] font-semibold bg-[#0F2744]/80 px-4 py-1.5 rounded-full border border-[#C7A86A]/30">
                {model.images[activeImageIdx]?.label}
              </span>
            )}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev + 1) % model.images.length);
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20 hover:border-[#C7A86A] cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
