"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Layers,
  Check,
  ChevronDown,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import PouchImageViewer from "@/components/pouches/PouchImageViewer";
import type { PouchProduct } from "@/data/pouches-data";
import ProductCTAButtons from "@/components/pdp/ProductCTAButtons";

const POUCH_TABS = [
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
    label: "BRANDING METHODS",
    mobileLines: ["BRANDING", "METHODS"],
  },
];

interface PouchPDPProps {
  product: PouchProduct;
  relatedProducts: PouchProduct[];
}

export default function PouchPDP({ product, relatedProducts }: PouchPDPProps) {
  const [selectedSizeId, setSelectedSizeId] = useState<string>(product.sizes[0]?.id || "small");
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "branding">("overview");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const selectedSize = product.sizes.find((s) => s.id === selectedSizeId) || product.sizes[0];

  const primaryImage = product.images[0] || {
    src: "/assets/cats/pouch.jpeg",
    alt: product.name,
  };

  // Dynamic Quote & WhatsApp URLs with selected parameters
  const quoteUrl = `/contact?category=pouches&product=${encodeURIComponent(
    product.name
  )}&size=${encodeURIComponent(
    selectedSize?.dimensions || "Standard"
  )}`;

  const dynamicWhatsappUrl =
    "https://wa.me/919995255846?text=" +
    encodeURIComponent(
      `Hello CASA DI BIZ, I would like to request a bespoke quote for ${product.name} (Size: ${selectedSize?.label} - ${selectedSize?.dimensions}).`
    );

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* 1. SITE HEADER */}
      <SiteHeader />

      <main>
        {/* 2. TOP BREADCRUMB STRIP */}
        <div className="w-full bg-[#FAF8F5] border-b border-[#C7A86A]/15 pt-5 pb-3">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Pouches", to: "/pouches" },
                { label: product.name },
              ]}
            />
          </div>
        </div>

        {/* 3. HERO PRODUCT SECTION */}
        <section className="w-full bg-[#FAF8F5] pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* LEFT: Large Luxury Product Photography with CASA DI BIZ Enlarge Interaction */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <PouchImageViewer
                src={primaryImage.src}
                alt={primaryImage.alt}
                productName={product.name}
              />

              {/* Manufacturer Highlights Strip */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-4 flex flex-col justify-between">
                  <ShieldCheck className="h-5 w-5 text-[#C7A86A] mb-2" />
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-0.5">
                      FABRIC WEAVE
                    </span>
                    <span className="text-xs font-semibold text-[#0F2744] block">
                      {product.keyCharacteristic}
                    </span>
                  </div>
                </div>

                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-4 flex flex-col justify-between">
                  <Layers className="h-5 w-5 text-[#C7A86A] mb-2" />
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-0.5">
                      CLOSURE TYPE
                    </span>
                    <span className="text-xs font-semibold text-[#0F2744] block">
                      {product.closure.split(" ")[0]} Closure
                    </span>
                  </div>
                </div>

                <div className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-4 flex flex-col justify-end">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/70 uppercase block mb-0.5">
                      BRANDING
                    </span>
                    <span className="text-xs font-semibold text-[#0F2744] block">
                      Foil & Monogram
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Information, Specs & Configuration */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Category / Material Eyebrow */}
              <div className="mb-2">
                <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase">
                  {product.eyebrow}
                </span>
              </div>

              {/* Product Heading */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2744] leading-[1.1] mb-2 font-medium">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-[12px] tracking-[0.2em] font-semibold text-[#C7A86A] uppercase mb-4">
                {product.tagline}
              </p>

              {/* Concise Description */}
              <p className="text-[#0F2744]/85 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {product.shortDescription}
              </p>

              {/* Specification Panel */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-4 sm:p-5 mb-6 text-xs space-y-2.5">
                <div className="flex justify-between items-start pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">
                    MATERIAL
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right ml-4">
                    {product.material}
                  </span>
                </div>
                <div className="flex justify-between items-start pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">
                    FINISH
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right ml-4">
                    {product.finish}
                  </span>
                </div>
                <div className="flex justify-between items-start pb-2 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">
                    CLOSURE
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right ml-4">
                    {product.closure}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#0F2744]/70 font-semibold uppercase tracking-wider text-[10px]">
                    APPLICATION
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right ml-4">
                    {product.applications}
                  </span>
                </div>
              </div>

              {/* PROPORTIONS & SIZING */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="w-full mb-6">
                  <div className="flex justify-between items-baseline mb-2.5">
                    <h2 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                      PROPORTIONS & SIZING
                    </h2>
                    <span className="text-[11px] text-[#C7A86A] font-semibold">
                      {selectedSize.dimensions}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
                    {product.sizes.map((s) => {
                      const isSelected = selectedSizeId === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSizeId(s.id)}
                          className={`p-2.5 border rounded-xl text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "border-[#C7A86A] bg-[#F6F0E8] ring-1 ring-[#C7A86A] shadow-xs"
                              : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/40"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="text-xs font-bold text-[#0F2744]">
                              {s.dimensions}
                            </span>
                            {isSelected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[#C7A86A]" />
                            )}
                          </div>
                          <span className="text-[10px] text-[#0F2744]/70 block truncate">
                            {s.label.split("/")[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-[#0F2744]/70 mt-2 italic">
                    Best suited to: {selectedSize.suitableFor}.
                  </p>
                </div>
              )}

              {/* COLOUR CUSTOMISATION INFORMATION (Refined Information Block) */}
              <div className="w-full mb-8 pt-1">
                <span className="text-xs font-semibold text-[#C7A86A] tracking-[0.2em] uppercase block mb-1.5">
                  COLOUR CUSTOMISATION
                </span>
                <p className="text-sm font-medium text-[#0F2744] leading-snug">
                  Made to match your brand.
                </p>
                <p className="text-xs text-[#0F2744]/75 mt-1 leading-relaxed">
                  Pouch colours can be developed to match your brand identity, Pantone references, campaign colours or specific packaging requirements.
                </p>
              </div>

              {/* PRIMARY B2B CTAS (Horizontal Two-Column on Mobile & Desktop) */}
              <ProductCTAButtons
                quoteUrl={quoteUrl}
                whatsappUrl={dynamicWhatsappUrl}
              />

              {/* Supporting B2B Note */}
              <div className="w-full text-center mt-3 sm:mt-3.5">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.03em] sm:tracking-[0.05em] text-[#0F2744]/60 block leading-tight">
                  Bespoke dimensions & linings • Precision foil & screen branding • Global B2B shipping
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EDITORIAL MATERIAL DETAILS & SPECIFICATIONS */}
        <section className="bg-white border-y border-[#C7A86A]/20 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MANUFACTURING EXCELLENCE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Engineered for luxury presentation and protection.
              </h2>
            </div>

            {/* Mobile 3-Column Segmented Control Header (Mobile Only) */}
            <div className="lg:hidden w-full mb-8">
              <div className="grid grid-cols-3 gap-1 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-1.5 w-full min-h-[56px]">
                {POUCH_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[48px] ${
                        isActive
                          ? "bg-[#FAF8F5] text-[#0F2744] border border-[#C7A86A]/40 shadow-xs"
                          : "bg-transparent text-[#0F2744]/65 hover:text-[#0F2744] border border-transparent"
                      }`}
                    >
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.04em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[0]}
                      </span>
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.04em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Tabs Header (Unchanged on Desktop lg+) */}
            <div className="hidden lg:flex border-b border-[#0F2744]/10 mb-10 justify-center gap-12">
              {POUCH_TABS.map((tab) => (
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
                <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-[#0F2744]/80 leading-relaxed">
                  <h3 className="font-display text-2xl text-[#0F2744] font-medium">
                    The {product.material} Construction
                  </h3>
                  <p>{product.editorialStory}</p>
                  <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-xl p-4">
                      <strong className="text-[#0F2744] block mb-1">Key Characteristic:</strong>
                      <span className="text-[#0F2744]/75">{product.keyCharacteristic}</span>
                    </div>
                    <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-xl p-4">
                      <strong className="text-[#0F2744] block mb-1">Recommended Usage:</strong>
                      <span className="text-[#0F2744]/75">{product.applications}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#F6F0E8] border border-[#C7A86A]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase mb-4 block">
                    B2B MANUFACTURING ADVANTAGES
                  </span>
                  <ul className="space-y-3.5 text-xs text-[#0F2744]/85">
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#C7A86A] shrink-0 mt-0.5" />
                      <span>Custom dye formulated to exact corporate Pantone Solid Coated / TCX.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#C7A86A] shrink-0 mt-0.5" />
                      <span>Tailored interior linings (anti-tarnish micro-suede, velvet or satin).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#C7A86A] shrink-0 mt-0.5" />
                      <span>Reinforced stitching with hand-finished cord ends and metal hardware.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#C7A86A] shrink-0 mt-0.5" />
                      <span>Low-MOQ bespoke sampling for physical proofing before full batch production.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SPECS */}
            {activeTab === "specs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6">
                  <h4 className="font-display text-lg text-[#0F2744] mb-4">Fabric & Construction</h4>
                  <div className="space-y-3 text-xs divide-y divide-[#0F2744]/10">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[#0F2744]/70 font-medium">Composition</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.material}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Surface Finish</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.finish}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Closure Mechanism</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.closure}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Lining Options</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.lining}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6">
                  <h4 className="font-display text-lg text-[#0F2744] mb-4">Production & Procurement</h4>
                  <div className="space-y-3 text-xs divide-y divide-[#0F2744]/10">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[#0F2744]/70 font-medium">Minimum Order Quantity</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.minOrderQuantity}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Production Lead Time</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.leadTime}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Colour Calibration</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.pantoneMatching}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-[#0F2744]/70 font-medium">Primary Applications</span>
                      <span className="font-semibold text-[#0F2744] text-right">{product.specifications.applications}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: BRANDING */}
            {activeTab === "branding" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {product.brandingOptions.map((brand, idx) => (
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
                      <span>Available across all pouch styles</span>
                      <span className="text-[#C7A86A] font-semibold">Bespoke Tooling</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. BESPOKE BRANDING & HARDWARE SECTION */}
        <section className="bg-[#FAF8F5] py-16 lg:py-24 border-b border-[#C7A86A]/20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase block">
                  BESPOKE EMBELLISHMENTS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                  Signature Custom Branding & Tailored Hardware
                </h2>
                <p className="text-sm text-[#0F2744]/80 leading-relaxed">
                  Every pouch from CASA DI BIZ is tailored to your exact brand specifications. From micro-etched metallic foil stamping to engraved metal aglets and custom drawstring cords, we engineer each element for an uncompromised luxury unboxing experience.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Metallic Hot Foil Debossing:</strong>
                      <span className="text-xs text-[#0F2744]/75">High-lustre gold, silver, rose gold, and gunmetal foils pressed with precision heated brass dies.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Custom Engraved Cord Hardware:</strong>
                      <span className="text-xs text-[#0F2744]/75">Solid metal aglets, cord beads, and brand badges with laser-etched insignia.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#F6F0E8] border border-[#C7A86A]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#C7A86A]" />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-[#0F2744] block">Exact Pantone Color Dyeing:</strong>
                      <span className="text-xs text-[#0F2744]/75">Yarns and fabrics dyed to your exact corporate Pantone reference with pre-production lab dips.</span>
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
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-[#FAF8F5] shadow-md">
                  <img
                    src={product.images[0]?.src || "/assets/pouches/matte-grosgrain.jpg"}
                    alt={`CASA DI BIZ ${product.name} luxury craftsmanship`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#C7A86A] uppercase mb-1">
                      CASA DI BIZ ATELIER
                    </span>
                    <h3 className="font-display text-xl text-[#FAF8F5]">
                      Hand-Finished Seams & Fine Luxury Detail
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQS SECTION */}
        <section className="bg-white py-16 lg:py-20 border-b border-[#C7A86A]/20">
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
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#C7A86A]/25 rounded-2xl bg-[#FAF8F5] overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4 hover:bg-[#F6F0E8]/40 transition-colors"
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

        {/* 7. RELATED POUCH MATERIALS */}
        {relatedProducts.length > 0 && (
          <section className="bg-[#FAF8F5] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                    EXPLORE THE COLLECTION
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                    Other Pouch Materials
                  </h2>
                </div>
                <Link
                  href="/pouches"
                  className="mt-3 sm:mt-0 text-xs font-bold tracking-[0.2em] text-[#C7A86A] hover:text-[#0F2744] transition-colors inline-flex items-center gap-1.5 uppercase"
                >
                  <span>VIEW ALL POUCHES</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.slug}
                    className="flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/25 transition-all duration-300 hover:border-[#C7A86A]/70 group"
                  >
                    <Link
                      href={`/pouches/${rel.slug}`}
                      className="relative block aspect-[4/3] bg-[#F6F0E8] overflow-hidden"
                    >
                      <img
                        src={rel.images[0]?.src || "/assets/cats/pouch.jpeg"}
                        alt={rel.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-1.5">
                          {rel.keyCharacteristic}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl text-[#0F2744] group-hover:text-[#C7A86A] transition-colors leading-snug">
                          <Link href={`/pouches/${rel.slug}`}>{rel.name}</Link>
                        </h3>
                        <p className="mt-2 text-xs text-[#0F2744]/80 leading-relaxed font-sans">
                          {rel.shortDescription}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                        <Link
                          href={`/pouches/${rel.slug}`}
                          className="w-full inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-[11px] tracking-[0.2em] font-bold bg-[#F6F0E8] text-[#0F2744] group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] transition-all duration-300"
                        >
                          <span>EXPLORE POUCH</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 8. SITE FOOTER */}
      <SiteFooter />
    </div>
  );
}
