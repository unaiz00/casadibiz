"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { StorageCaseProduct } from "@/data/storage-cases-data";
import ProductCTAButtons from "@/components/pdp/ProductCTAButtons";

const STORAGE_TABS = [
  {
    id: "overview" as const,
    label: "OVERVIEW & CRAFTSMANSHIP",
    mobileLines: ["OVERVIEW &", "CRAFTSMANSHIP"],
  },
  {
    id: "specs" as const,
    label: "TECHNICAL SPECIFICATIONS",
    mobileLines: ["TECHNICAL", "SPECIFICATIONS"],
  },
  {
    id: "customisation" as const,
    label: "TAILORED CUSTOMISATION",
    mobileLines: ["TAILORED", "CUSTOMISATION"],
  },
];

interface StorageCasePDPProps {
  product: StorageCaseProduct;
  relatedProducts: StorageCaseProduct[];
}

export default function StorageCasePDP({
  product,
  relatedProducts,
}: StorageCasePDPProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "customisation"
  >("overview");
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [{ src: product.image, alt: product.title, label: "Primary View" }];

  const primaryImage = images[activeImageIdx] || images[0];

  // Dynamic Quote & WhatsApp URLs
  const quoteUrl = `/contact?category=jewellery-storage-travel-cases&product=${encodeURIComponent(
    product.title
  )}&inquiry=quote`;

  const dynamicWhatsappUrl =
    "https://wa.me/+971563374248?text=" +
    encodeURIComponent(
      `Hello CASA DI BIZ, I would like to request a bespoke quote for ${product.title} (Jewellery Storage & Travel Cases Collection).`
    );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, images.length]);

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
                { label: "Collections", to: "/collections" },
                {
                  label: "Jewellery Storage & Travel Cases",
                  to: "/collections/jewellery-storage-travel-cases",
                },
                { label: product.title },
              ]}
            />
          </div>
        </div>

        {/* 3. HERO PRODUCT SECTION */}
        <section className="w-full bg-[#FAF8F5] pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* LEFT: Large Luxury Product Image & Lightbox */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div
                onClick={() => setLightboxOpen(true)}
                className="group relative w-full overflow-hidden rounded-2xl border border-[#C7A86A]/25 bg-white cursor-zoom-in shadow-xs transition-all duration-500 hover:border-[#C7A86A]/60 active:scale-[0.995] touch-manipulation"
              >
                <img
                  src={primaryImage.src}
                  alt={primaryImage.alt}
                  className="block w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01] animate-fade-in"
                  loading="eager"
                />
                {/* Clean Zoom Indicator */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/95 text-[#0F2744] flex items-center justify-center shadow-md group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] transition-all duration-300">
                  <Maximize2 className="h-4.5 w-4.5 text-[#C7A86A] group-hover:text-[#FAF8F5]" />
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative h-20 w-24 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer bg-white p-1 ${
                        activeImageIdx === idx
                          ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/50"
                          : "border-[#C7A86A]/20 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Information, Specs & CTAs */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#C7A86A] uppercase block mb-2">
                  {product.eyebrow}
                </span>
                <h1 className="font-display font-serif text-3xl sm:text-4xl text-[#0F2744] leading-[1.15]">
                  {product.title}
                </h1>
                <p className="mt-2 text-sm text-[#0F2744]/75 font-medium tracking-wide">
                  {product.subtitle}
                </p>
                <p className="mt-3 text-xs sm:text-[13px] text-[#0F2744]/70 italic border-l-2 border-[#C7A86A]/50 pl-3">
                  {product.positioning}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-[#0F2744]/80 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Key Overview Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-2">
                {product.overviewCards.map((card, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white border border-[#C7A86A]/20 flex flex-col justify-center text-center shadow-xs"
                  >
                    <span className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#0F2744]/60 font-semibold block mb-1">
                      {card.label}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#0F2744] leading-tight">
                      {card.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Customisation Options Bullet Points */}
              <div className="p-4 rounded-xl bg-[#F6F0E8] border border-[#C7A86A]/20 space-y-2">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#0F2744] uppercase block">
                  BESPOKE MANUFACTURE OPTIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {product.customisationOptions.map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-1.5 text-xs text-[#0F2744]/85"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0 mt-0.5" />
                      <span className="leading-tight">{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2">
                <ProductCTAButtons
                  quoteUrl={quoteUrl}
                  whatsappUrl={dynamicWhatsappUrl}
                  quoteLabel="REQUEST A QUOTE"
                  whatsappLabel="QUICK QUOTE"
                />
              </div>

              {/* Packaging & Minimum Notes */}
              <div className="pt-2 border-t border-[#0F2744]/10 flex flex-col space-y-2 text-xs text-[#0F2744]/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#C7A86A]" />
                  <span>
                    Bespoke manufacture tailored to your brand identity.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#C7A86A]" />
                  <span>{product.packagingNotes}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TABBED SPECIFICATIONS & CRAFTSMANSHIP SECTION */}
        <section className="w-full bg-[#F6F0E8] border-y border-[#0F2744]/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            {/* Desktop Tabs Header Navigation (Preserved on sm+) */}
            <div className="hidden sm:flex justify-center border-b border-[#0F2744]/15 mb-8 sm:mb-10">
              <div className="flex gap-8">
                {STORAGE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 sm:pb-4 px-3 text-[13px] tracking-[0.18em] font-semibold uppercase transition-all duration-300 relative cursor-pointer ${
                      activeTab === tab.id
                        ? "text-[#0F2744] font-bold"
                        : "text-[#0F2744]/60 hover:text-[#0F2744]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Segmented Control Header (Mobile Only - Matching Pouch PDP) */}
            <div className="sm:hidden w-full mb-8">
              <div
                role="tablist"
                aria-label="Manufacturing Specifications Tabs"
                className="grid grid-cols-3 gap-1 bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-1 w-full shadow-xs"
              >
                {STORAGE_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center py-2.5 px-1.5 rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[48px] select-none ${
                        isActive
                          ? "bg-[#102945] text-[#FFFFFF] shadow-xs"
                          : "bg-transparent text-[#102945] hover:bg-[#102945]/5"
                      }`}
                    >
                      <span className="text-[9.5px] xs:text-[10px] font-semibold tracking-[0.04em] uppercase leading-tight text-center block max-w-full">
                        {tab.mobileLines[0]}
                        <br />
                        {tab.mobileLines[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab 1: Overview & Craftsmanship */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
                {product.overviewDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#C7A86A]/20 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-8 w-8 rounded-full bg-[#FAF8F5] border border-[#C7A86A]/30 flex items-center justify-center text-[#C7A86A] font-serif font-bold text-sm mb-4">
                        0{idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-[#0F2744]/80 leading-relaxed font-sans">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Technical Specifications */}
            {activeTab === "specs" && (
              <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#C7A86A]/20 p-6 sm:p-8 shadow-xs animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col py-2 border-b border-[#0F2744]/[0.08]"
                    >
                      <span className="text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/60 uppercase">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#0F2744] mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Tailored Customisation */}
            {activeTab === "customisation" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in">
                {product.customisationFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#C7A86A]/20 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] tracking-[0.22em] font-semibold text-[#C7A86A] uppercase block mb-1">
                        PILLAR 0{idx + 1}
                      </span>
                      <h4 className="font-display font-serif text-base sm:text-lg text-[#0F2744] mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#0F2744]/75 leading-relaxed font-sans">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. RELATED PRODUCTS IN THIS COLLECTION */}
        {relatedProducts.length > 0 && (
          <section className="w-full bg-[#FAF8F5] py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
                <div>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#C7A86A] uppercase block mb-1">
                    EXPLORE THE RANGE
                  </span>
                  <h3 className="font-display font-serif text-2xl sm:text-3xl text-[#0F2744]">
                    More from Jewellery Storage & Travel Cases
                  </h3>
                </div>
                <Link
                  href="/collections/jewellery-storage-travel-cases"
                  className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-semibold text-[#C7A86A] hover:text-[#0F2744] transition-colors uppercase"
                >
                  VIEW ALL CASES <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/collections/jewellery-storage-travel-cases/${rel.slug}`}
                    className="group flex flex-col rounded-2xl bg-white border border-[#C7A86A]/25 overflow-hidden shadow-xs hover:border-[#C7A86A]/60 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-[#C7A86A]/15">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9.5px] tracking-[0.2em] font-semibold text-[#C7A86A] uppercase block mb-1">
                          {rel.subtitle}
                        </span>
                        <h4 className="font-display font-serif text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                          {rel.title}
                        </h4>
                        <p className="mt-2 text-xs text-[#0F2744]/70 line-clamp-2 leading-relaxed">
                          {rel.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#0F2744]/10 flex items-center justify-between text-xs font-semibold text-[#C7A86A] group-hover:text-[#0F2744] uppercase tracking-wider">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 7. FULLSCREEN LUXURY WHITE LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} Fullscreen Image Viewer`}
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in select-none"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Circular Close Button (Top-Right) */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white text-[#0F2744] border border-[#0F2744]/15 hover:border-[#C7A86A] hover:bg-[#FAF8F5] shadow-xs hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
          >
            <X className="h-5 w-5 text-[#0F2744]" />
          </button>

          {/* Central Image Viewport */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
                }}
                aria-label="Previous image"
                className="absolute left-1 sm:left-4 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-[#0F2744] border border-[#0F2744]/15 hover:border-[#C7A86A] hover:bg-[#FAF8F5] shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}

            {/* Main Lightbox Image */}
            <div className="relative max-h-[85vh] sm:max-h-[88vh] max-w-full flex items-center justify-center">
              <img
                src={primaryImage.src}
                alt={primaryImage.alt || product.title}
                className="max-h-[82vh] sm:max-h-[86vh] max-w-[94vw] sm:max-w-[88vw] object-contain rounded-xl shadow-[0_16px_50px_rgba(15,39,68,0.08)] border border-[#0F2744]/5 transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIdx((prev) => (prev + 1) % images.length);
                }}
                aria-label="Next image"
                className="absolute right-1 sm:right-4 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 text-[#0F2744] border border-[#0F2744]/15 hover:border-[#C7A86A] hover:bg-[#FAF8F5] shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Thumbnail Navigation only if multiple images */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3 py-1.5 px-3 rounded-2xl bg-white/90 border border-[#0F2744]/10 shadow-sm max-w-[90vw] overflow-x-auto shrink-0 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative h-12 w-14 sm:h-14 sm:w-16 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    activeImageIdx === idx
                      ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/50 scale-105"
                      : "border-[#0F2744]/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 8. SITE FOOTER */}
      <SiteFooter />
    </div>
  );
}
