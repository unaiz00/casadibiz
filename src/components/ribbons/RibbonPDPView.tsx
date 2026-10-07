"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShieldCheck,
  Layers,
  Check,
  MessageCircle,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { RibbonMaterial, RibbonWidth } from "@/data/ribbons-data";

const RIBBON_TABS = [
  {
    id: "overview" as const,
    label: "MATERIAL OVERVIEW",
    mobileLines: ["MATERIAL", "OVERVIEW"],
  },
  {
    id: "specs" as const,
    label: "TECHNICAL SPECIFICATIONS",
    mobileLines: ["TECHNICAL", "SPECIFICATIONS"],
  },
  {
    id: "branding" as const,
    label: "CUSTOM BRANDING & PRINTING",
    mobileLines: ["BRANDING", "& PRINTING"],
  },
  {
    id: "applications" as const,
    label: "APPLICATIONS & BEST USE",
    mobileLines: ["APPLICATIONS", "& BEST USE"],
  },
];

interface RibbonPDPViewProps {
  material: RibbonMaterial;
  relatedMaterials: RibbonMaterial[];
}

export default function RibbonPDPView({ material, relatedMaterials }: RibbonPDPViewProps) {
  // Configuration State
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedWidthMm, setSelectedWidthMm] = useState<number>(material.widths[2]?.mm || 25);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "branding" | "applications">("overview");

  const selectedWidth: RibbonWidth =
    material.widths.find((w) => w.mm === selectedWidthMm) || material.widths[0];

  // Dynamic WhatsApp Quote Message (No internal IDs/codes)
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a bespoke quote for custom ribbons:
Material: ${material.name}
Selected Width: ${selectedWidth.label} (${selectedWidth.position})
Colour: Custom Brand / Pantone matching
Please share MOQ, sample lead time, and branding options.`;

  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  // Dynamic Contact Quote URL (No internal IDs/codes)
  const quoteUrl = `/contact?category=ribbons&material=${encodeURIComponent(material.name)}&width=${encodeURIComponent(selectedWidth.label)}`;

  // Keyboard navigation for image lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % material.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev - 1 + material.images.length) % material.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, material.images.length]);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Ribbons", to: "/ribbons" },
    { label: material.name },
  ];

  const currentImage = material.images[activeImageIdx] || material.images[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#0F2744] selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* SITE HEADER */}
      <SiteHeader />

      <main className="overflow-hidden">
        {/* BREADCRUMB */}
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO SECTION: EDITORIAL PRODUCT SHOWCASE & CONFIGURATOR */}
        <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT: Large Ribbon Product Photography & Thumbnails */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Desktop Gallery */}
              <div className="flex flex-col gap-4">
                {/* Large Main Showcase Image */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#C7A86A]/25 bg-white cursor-zoom-in shadow-sm transition-all duration-500 hover:border-[#C7A86A]/60"
                >
                  <img
                    src={currentImage.src}
                    alt={`${material.name} - ${selectedWidth.label} luxury packaging ribbon`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#0F2744]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Zoom Indicator */}
                  <div className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 hover:bg-[#C7A86A] hover:text-[#0F2744]">
                    <Maximize2 className="h-4.5 w-4.5 text-[#C7A86A] group-hover:text-[#0F2744] transition-colors" />
                  </div>
                </div>

                {/* Sub-grid of thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {material.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`group relative aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer text-left ${
                        activeImageIdx === idx
                          ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/40 scale-[0.98]"
                          : "border-[#C7A86A]/20 bg-white/80 opacity-80 hover:opacity-100 hover:border-[#C7A86A]/60"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Craft Highlights - Responsive Mobile Carousel / Desktop 3-Column Row */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pt-2 pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-3 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Card 1: Edge Integrity */}
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-5 lg:p-3.5 snap-start shrink-0 w-[80vw] lg:w-auto lg:shrink flex flex-col justify-between min-h-[115px] lg:min-h-0">
                  <div className="mb-3 lg:mb-2">
                    <ShieldCheck className="h-5 w-5 text-[#C7A86A] shrink-0" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-1">
                      EDGE INTEGRITY
                    </span>
                    <span className="text-sm lg:text-xs font-semibold text-[#0F2744] block leading-snug">
                      {material.edgeFinish.split(" ")[0]} Finish
                    </span>
                  </div>
                </div>

                {/* Card 2: Tactile Weave */}
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-5 lg:p-3.5 snap-start shrink-0 w-[80vw] lg:w-auto lg:shrink flex flex-col justify-between min-h-[115px] lg:min-h-0">
                  <div className="mb-3 lg:mb-2">
                    <Layers className="h-5 w-5 text-[#C7A86A] shrink-0" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-1">
                      TACTILE WEAVE
                    </span>
                    <span className="text-sm lg:text-xs font-semibold text-[#0F2744] block leading-snug">
                      {material.positioning}
                    </span>
                  </div>
                </div>

                {/* Card 3: Branding */}
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-5 lg:p-3.5 snap-start shrink-0 w-[80vw] lg:w-auto lg:shrink flex flex-col justify-end min-h-[115px] lg:min-h-0">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-1">
                      BRANDING
                    </span>
                    <span className="text-sm lg:text-xs font-semibold text-[#0F2744] block leading-snug">
                      Foil & Screen Print
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Information & Configuration Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="mb-2">
                <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase">
                  RIBBON COLLECTION
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2744] leading-[1.1] mb-2.5 font-medium">
                {material.name}
              </h1>

              {/* Tagline */}
              <p className="text-[12px] tracking-[0.22em] font-semibold text-[#C7A86A] uppercase mb-4">
                {material.tagline}
              </p>

              {/* Short Description */}
              <p className="text-[#0F2744]/85 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {material.shortDescription}
              </p>

              {/* Key Specs Summary Pill Box */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-4 mb-6 text-xs space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">MATERIAL</span>
                  <span className="font-semibold text-[#0F2744]">{material.name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">SELECTED WIDTH</span>
                  <span className="font-semibold text-[#0F2744]">{selectedWidth.label} • {selectedWidth.position}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">COLOUR</span>
                  <span className="font-semibold text-[#0F2744]">Custom / Pantone Matched</span>
                </div>
              </div>

              {/* 1. SELECT WIDTH */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h2 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    1. SELECT WIDTH
                  </h2>
                  <span className="text-[11px] text-[#C7A86A] font-semibold">
                    {selectedWidth.position}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
                  {material.widths.map((w) => {
                    const isSelected = selectedWidthMm === w.mm;
                    return (
                      <button
                        key={w.mm}
                        type="button"
                        onClick={() => setSelectedWidthMm(w.mm)}
                        className={`p-3 border rounded-xl text-left transition-all duration-300 cursor-pointer relative ${
                          isSelected
                            ? "border-[#C7A86A] bg-[#F6F0E8] shadow-xs ring-1 ring-[#C7A86A]"
                            : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/40"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-[#0F2744]">{w.mm} mm</span>
                          {isSelected && (
                            <span className="h-2 w-2 rounded-full bg-[#C7A86A]" />
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-[#0F2744]/70 block">
                          {w.inches}
                        </span>
                        <span className="text-[9px] font-medium text-[#C7A86A] block mt-1 truncate">
                          {w.position}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {/* Width Context Note */}
                <p className="text-[11px] text-[#0F2744]/70 mt-2 italic">
                  Recommended for: {selectedWidth.suitableFor.join(", ")}.
                </p>
              </div>

              {/* COLOUR CUSTOMISATION STATEMENT */}
              <div className="w-full mb-8 pt-1">
                <span className="text-xs font-semibold text-[#C7A86A] tracking-[0.2em] uppercase block mb-1.5">
                  COLOUR CUSTOMISATION
                </span>
                <p className="text-sm font-medium text-[#0F2744] leading-snug">
                  Ribbon colours can be customised to match your brand requirements.
                </p>
                <p className="text-xs text-[#0F2744]/70 mt-1 leading-relaxed">
                  Custom brand colours and Pantone references can be matched for production.
                </p>
              </div>

              {/* B2B CTAS */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 w-full">
                <Link
                  href={quoteUrl}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl px-2.5 sm:px-7 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.06em] sm:tracking-[0.22em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 text-center shadow-md min-h-[46px] sm:min-h-[48px]"
                >
                  <span className="truncate">REQUEST A QUOTE</span>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </Link>
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-xl px-2.5 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.05em] sm:tracking-[0.2em] font-semibold border border-[#C7A86A]/60 bg-white text-[#0F2744] hover:bg-[#F6F0E8] transition-all duration-300 shadow-xs min-h-[46px] sm:min-h-[48px] text-center"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C7A86A] shrink-0" />
                  <span className="truncate">ENQUIRE ON WHATSAPP</span>
                </a>
              </div>

              {/* Supporting B2B Note */}
              <div className="w-full text-center mt-3 sm:mt-3.5">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.03em] sm:tracking-[0.05em] text-[#0F2744]/60 block leading-tight">
                  Custom widths & lengths • Hot-stamped logo printing • Global B2B shipping
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL MATERIAL DETAILS & SPECIFICATIONS */}
        <section className="bg-white border-y border-[#C7A86A]/20 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MANUFACTURING EXCELLENCE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Engineered specifically for luxury brand presentation.
              </h2>
            </div>

            {/* Mobile Segmented Control Header (Mobile Only - Single Line 4-Column Row) */}
            <div className="lg:hidden w-full mb-8">
              <div className="grid grid-cols-4 gap-0.5 xs:gap-1 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl sm:rounded-2xl p-1 w-full min-h-[52px]">
                {RIBBON_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-2 px-0.5 xs:px-1 rounded-lg sm:rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[48px] h-full ${
                        isActive
                          ? "bg-[#FAF8F5] text-[#0F2744] border border-[#C7A86A]/40 shadow-xs"
                          : "bg-transparent text-[#0F2744]/65 hover:text-[#0F2744] border border-transparent"
                      }`}
                    >
                      <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] font-bold tracking-[0.01em] xs:tracking-[0.02em] sm:tracking-[0.04em] uppercase leading-[1.2] text-center block w-full truncate sm:overflow-visible">
                        {tab.mobileLines[0]}
                      </span>
                      <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10px] font-bold tracking-[0.01em] xs:tracking-[0.02em] sm:tracking-[0.04em] uppercase leading-[1.2] text-center block w-full truncate sm:overflow-visible">
                        {tab.mobileLines[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Tabs Header (Unchanged on Desktop lg+) */}
            <div className="hidden lg:flex border-b border-[#0F2744]/10 mb-10 justify-center gap-12">
              {RIBBON_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? "text-[#0F2744] font-bold"
                      : "text-[#0F2744]/50 hover:text-[#0F2744]"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-[#0F2744]">
                    Tactile Aesthetics & Structural Integrity
                  </h3>
                  <p className="text-sm text-[#0F2744]/80 leading-relaxed">
                    {material.longDescription}
                  </p>
                  <div className="pt-3">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C7A86A] mb-3">
                      MATERIAL CHARACTERISTICS
                    </h4>
                    <ul className="space-y-2.5">
                      {material.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#0F2744]/85">
                          <Check className="h-4 w-4 text-[#C7A86A] shrink-0 mt-0.5" />
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-[#0F2744] uppercase">
                    CRAFT BENCHMARKS
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="border-b border-[#0F2744]/10 pb-3">
                      <span className="text-[#0F2744]/60 block text-[10px] uppercase font-bold tracking-wider">WEAVE CONSTRUCTION</span>
                      <span className="font-semibold text-[#0F2744] mt-1 block">{material.weaveConstruction}</span>
                    </div>
                    <div className="border-b border-[#0F2744]/10 pb-3">
                      <span className="text-[#0F2744]/60 block text-[10px] uppercase font-bold tracking-wider">TACTILE FINISH</span>
                      <span className="font-semibold text-[#0F2744] mt-1 block">{material.tactileFinish}</span>
                    </div>
                    <div className="border-b border-[#0F2744]/10 pb-3">
                      <span className="text-[#0F2744]/60 block text-[10px] uppercase font-bold tracking-wider">COMPOSITION</span>
                      <span className="font-semibold text-[#0F2744] mt-1 block">{material.composition}</span>
                    </div>
                    <div className="border-b border-[#0F2744]/10 pb-3">
                      <span className="text-[#0F2744]/60 block text-[10px] uppercase font-bold tracking-wider">EDGE FINISH</span>
                      <span className="font-semibold text-[#0F2744] mt-1 block">{material.edgeFinish}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#0F2744]/60 block text-[10px] uppercase font-bold tracking-wider mb-1">RECOMMENDED PACKAGING ROLES</span>
                    <div className="flex flex-wrap gap-1.5">
                      {material.bestFor.map((item, idx) => (
                        <span key={idx} className="bg-[#F6F0E8] border border-[#C7A86A]/30 text-[#0F2744] text-[11px] px-2.5 py-1 rounded-md font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SPECS */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-[#C7A86A]/25 rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  <div className="bg-[#F6F0E8] px-6 py-4 border-b border-[#C7A86A]/25">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-[#0F2744] uppercase">
                      MANUFACTURING METRICS
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 text-xs divide-y divide-[#0F2744]/10">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[#0F2744]/70 font-medium">Material</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.name}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Texture</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.positioning}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Composition</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.composition}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Surface Finish</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.finish}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Edge Construction</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.edgeType}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Standard Roll Length</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.standardRollLength}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Eco Profile</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.ecoProfile}</span>
                    </div>
                  </div>
                </div>

                <div className="border border-[#C7A86A]/25 rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  <div className="bg-[#F6F0E8] px-6 py-4 border-b border-[#C7A86A]/25">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-[#0F2744] uppercase">
                      PROCUREMENT & LOGISTICS
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 text-xs divide-y divide-[#0F2744]/10">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[#0F2744]/70 font-medium">Minimum Order Quantity (MOQ)</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.moq}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Production Lead Time</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.leadTime}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Colour Calibration</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.specifications.pantoneMatching}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Spool Presentation</span>
                      <span className="font-semibold text-[#0F2744] text-right">{material.spoolPackaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: BRANDING */}
            {activeTab === "branding" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {material.brandingOptions.map((brand, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block">
                          {brand.method}
                        </span>
                      </div>
                      <h4 className="font-display text-xl text-[#0F2744] mb-2">{brand.title}</h4>
                      <p className="text-xs text-[#0F2744]/80 leading-relaxed">{brand.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#0F2744]/10 flex items-center justify-between text-[11px] text-[#0F2744]/70">
                      <span>Suitable for all standard widths</span>
                      <span className="text-[#C7A86A] font-semibold">Bespoke Setup</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: APPLICATIONS */}
            {activeTab === "applications" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {material.applications.map((app, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-1">
                        {app.category}
                      </span>
                      <h4 className="font-display text-lg text-[#0F2744] mb-2">{app.title}</h4>
                      <p className="text-xs text-[#0F2744]/80 leading-relaxed mb-4">{app.description}</p>
                    </div>
                    <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-lg px-3 py-2 text-[10px] font-semibold text-[#0F2744] text-center">
                      Recommended: {app.recommendedWidth}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* WIDTH GUIDE & ARCHITECTURAL COMPARISON SECTION */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20 border-b border-[#C7A86A]/20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                PRECISION PROPORTIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Standard Width Comparison Guide
              </h2>
              <p className="text-xs sm:text-sm text-[#0F2744]/75 mt-3">
                Every material supports our four calibrated packaging widths. Select the ideal proportion for your box dimensions and branding visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {material.widths.map((w) => {
                const isSelected = selectedWidthMm === w.mm;
                return (
                  <div
                    key={w.mm}
                    onClick={() => setSelectedWidthMm(w.mm)}
                    className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#F6F0E8] border-[#C7A86A] shadow-md ring-1 ring-[#C7A86A]"
                        : "bg-white border-[#C7A86A]/20 hover:border-[#C7A86A]/60"
                    }`}
                  >
                    <div>
                      {/* Visual ribbon scale bar */}
                      <div className="h-14 bg-[#FAF8F5] border border-[#0F2744]/10 rounded-xl flex items-center justify-center mb-5 p-2">
                        <div
                          className="bg-[#0F2744] rounded transition-all duration-500"
                          style={{
                            height: `${Math.max(4, Math.min(38, w.mm * 0.9))}px`,
                            width: "85%",
                          }}
                        />
                      </div>

                      <div className="flex items-baseline justify-between mb-1">
                        <span className="font-display text-2xl text-[#0F2744] font-bold">{w.mm} mm</span>
                        <span className="font-mono text-xs font-semibold text-[#C7A86A]">{w.inches}</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-3">
                        {w.position}
                      </span>
                      <p className="text-xs text-[#0F2744]/80 leading-relaxed mb-4">
                        {w.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] font-bold tracking-[0.15em] text-[#C7A86A] uppercase block mb-2">
                        SUITABLE APPLICATIONS:
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-[#0F2744]/75">
                        {w.suitableFor.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DEDICATED CUSTOM BRANDING SECTION */}
        <section className="bg-white py-16 lg:py-24 border-b border-[#C7A86A]/20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase block">
                  BESPOKE LOGO & ARTWORK
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                  Custom Branding for Signature Brand Presentation
                </h2>
                <p className="text-sm text-[#0F2744]/80 leading-relaxed">
                  Elevate your packaging with precision-engineered ribbon branding tailored to your brand guidelines. We manufacture custom ribbons with continuous repeat logos, metallic foil stamping, embossed relief, and exact Pantone colour matching.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Custom Logo & Repeating Artwork:</strong>
                      <span className="text-xs text-[#0F2744]/75">High-definition screen print and heat-transfer monograms calibrated with exact repeat intervals.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Hot Foil Stamping (Gold, Silver, Rose Gold):</strong>
                      <span className="text-xs text-[#0F2744]/75">High-lustre reflective metallic foil pressed with micro-etched brass dies for sharp typographic edges.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Custom Pantone Matching & Weaving:</strong>
                      <span className="text-xs text-[#0F2744]/75">Yarn dyed to your exact corporate Pantone Solid Coated / TCX color formula with pre-production lab dip swatches.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={quoteUrl}
                    className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-xs tracking-[0.2em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300"
                  >
                    <span>REQUEST BRANDING PROOFS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-[#FAF8F5] shadow-lg">
                  <img
                    src="/assets/giftim.jpeg"
                    alt={`CASA DI BIZ custom branded ${material.name}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#C7A86A] uppercase mb-1">
                      B2B SPECIFICATION READY
                    </span>
                    <h3 className="font-display text-xl text-[#FAF8F5]">
                      Precision Spooled for Production Assembly Lines
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="bg-[#FAF8F5] py-16 lg:py-20 border-b border-[#C7A86A]/20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                B2B PROCUREMENT & PRODUCTION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {material.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#C7A86A]/25 rounded-2xl bg-white overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4 hover:bg-[#F6F0E8]/30 transition-colors"
                    >
                      <span className="text-sm font-semibold text-[#0F2744]">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#C7A86A] transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#0F2744]/80 leading-relaxed border-t border-[#0F2744]/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BOTTOM FULL-WIDTH QUOTE CTA */}
        <section className="bg-[#0F2744] text-[#FAF8F5] py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-3 block">
              B2B BESPOKE PACKAGING MANUFACTURING
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] leading-tight mb-5 font-medium">
              Start Your Custom Ribbon Project
            </h2>
            <p className="text-sm sm:text-base text-[#F6F0E8]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our bespoke packaging specialists to request fabric swatches, pre-production digital proofs, and custom volume pricing tailored to your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={quoteUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-xs tracking-[0.22em] font-bold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] transition-all duration-300 shadow-lg"
              >
                <span>REQUEST A FORMAL QUOTE</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={dynamicWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-xs tracking-[0.2em] font-semibold border border-[#C7A86A]/70 text-[#FAF8F5] hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 text-[#C7A86A]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </section>

        {/* RELATED RIBBON MATERIALS */}
        <section className="bg-[#FAF8F5] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                  EXPLORE THE COLLECTION
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium">
                  Related Ribbon Materials
                </h2>
              </div>
              <Link
                href="/ribbons"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C7A86A] hover:text-[#0F2744] transition-colors uppercase"
              >
                <span>VIEW ALL RIBBON MATERIALS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedMaterials.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/ribbons/${rel.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/25 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C7A86A]/60 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                    <img
                      src={rel.images[0]?.src || "/assets/cats/ribbon.png"}
                      alt={rel.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl text-[#0F2744] group-hover:text-[#C7A86A] transition-colors leading-snug mb-2">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-[#0F2744]/75 leading-relaxed line-clamp-3">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#0F2744]/10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                        {rel.widths.length} Standard Widths
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] text-[#C7A86A] group-hover:gap-2 transition-all uppercase">
                        <span>EXPLORE</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#F6F0E8] flex items-center justify-center p-4 sm:p-8 animate-fade-up"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close image zoom view"
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 sm:right-2 text-[#0F2744] hover:text-[#C7A86A] transition-colors p-2 cursor-pointer"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full aspect-[16/11] max-h-[75vh] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-white flex items-center justify-center shadow-xs">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  setActiveImageIdx((prev) => (prev - 1 + material.images.length) % material.images.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-[#0F2744] border border-[#C7A86A]/30 flex items-center justify-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={() =>
                  setActiveImageIdx((prev) => (prev + 1) % material.images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 text-[#0F2744] border border-[#C7A86A]/30 flex items-center justify-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
