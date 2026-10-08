"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Layers,
  Sparkles,
  Maximize2,
  X,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { CorporateGiftProduct } from "@/data/corporate-data";

const CORPORATE_TABS = [
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

interface CorporateGiftPDPProps {
  product: CorporateGiftProduct;
  relatedProducts: CorporateGiftProduct[];
}

export default function CorporateGiftPDP({
  product,
  relatedProducts,
}: CorporateGiftPDPProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "customisation"
  >("overview");
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const primaryImage = product.images[activeImageIdx] ||
    product.images[0] || {
      src: product.image,
      alt: product.title,
    };

  // Dynamic Quote & WhatsApp URLs
  const quoteUrl = `/contact?category=corporate-collection&product=${encodeURIComponent(
    product.title
  )}&inquiry=quote`;

  const dynamicWhatsappUrl =
    "https://wa.me/919995255846?text=" +
    encodeURIComponent(
      `Hello CASA DI BIZ, I would like to request a bespoke quote for ${product.title} (Corporate Gifting Collection).`
    );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % product.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx(
          (prev) => (prev - 1 + product.images.length) % product.images.length
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
  }, [lightboxOpen, product.images.length]);

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
                  label: "Corporate Gifts",
                  to: "/collections/corporate-collection",
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
                className="group relative w-full overflow-hidden rounded-2xl border border-[#C7A86A]/25 bg-white cursor-zoom-in shadow-xs transition-all duration-500 hover:border-[#C7A86A]/60"
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

              {/* Gallery Thumbnails (if multiple images) */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none">
                  {product.images.map((img, idx) => (
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
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Highlights Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {product.overviewCards.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-xl p-4 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F2744]/65 uppercase block mb-1">
                      {card.label}
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F2744] block">
                      {card.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Product Information, Specs & CTAs */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Category / Eyebrow */}
              <div className="mb-2">
                <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase">
                  {product.eyebrow}
                </span>
              </div>

              {/* Product Heading */}
              <h1 className="font-display font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F2744] leading-[1.1] mb-2.5 font-medium">
                {product.title}
              </h1>

              {/* Positioning Subtitle */}
              <p className="text-xs sm:text-[13px] tracking-[0.2em] font-semibold text-[#C7A86A] uppercase mb-4 leading-snug">
                {product.subtitle}
              </p>

              {/* Description */}
              <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {product.description}
              </p>

              {/* Key Highlights / Recommended For */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-5 mb-6 text-xs space-y-3.5">
                <div>
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">
                    RECOMMENDED FOR
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.recommendedFor.map((rec, rIdx) => (
                      <span
                        key={rIdx}
                        className="inline-block px-2.5 py-1 text-[11px] font-medium text-[#0F2744] bg-white border border-[#C7A86A]/20 rounded-md"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-[0.2em] text-[10px] block mb-1.5">
                    CUSTOMISATION OPTIONS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.customisationOptions.map((opt, oIdx) => (
                      <span
                        key={oIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#0F2744] bg-white/70 rounded-md"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#C7A86A]" /> {opt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-[0.2em] text-[10px] block mb-0.5">
                    PACKAGING
                  </span>
                  <span className="text-[12px] text-[#0F2744]/85 font-medium">
                    {product.packagingNotes}
                  </span>
                </div>
              </div>

              {/* CTA BUTTONS (Desktop + Mobile responsive) */}
              <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={quoteUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs tracking-[0.24em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#0F2744] hover:text-[#FAF8F5] transition-all duration-300 shadow-md text-center"
                >
                  REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs tracking-[0.22em] font-semibold border border-[#C7A86A] text-[#0F2744] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 text-center bg-transparent"
                >
                  <MessageCircle className="h-4 w-4 text-[#C7A86A]" />
                  <span className="hidden sm:inline">ENQUIRE VIA WHATSAPP</span>
                  <span className="sm:hidden">QUICK QUOTE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PDP INFORMATION TABS SECTION */}
        <section className="w-full bg-[#F6F0E8] border-y border-[#0F2744]/5 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            {/* Mobile 3-Column Segmented Control Header (Mobile Only) */}
            <div className="lg:hidden w-full mb-8">
              <div className="grid grid-cols-3 gap-1 bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-1.5 w-full min-h-[56px]">
                {CORPORATE_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[48px] ${
                        isActive
                          ? "bg-white text-[#0F2744] border border-[#C7A86A]/40 shadow-xs"
                          : "bg-transparent text-[#0F2744]/65 hover:text-[#0F2744] border border-transparent"
                      }`}
                    >
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.02em] xs:tracking-[0.05em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[0]}
                      </span>
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.02em] xs:tracking-[0.05em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Tabs Header (lg+): Centered cohesive tab group */}
            <div className="hidden lg:flex border-b border-[#0F2744]/10 mb-10 justify-center gap-12">
              {CORPORATE_TABS.map((tab) => (
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

            {/* TAB 1: OVERVIEW & CRAFTSMANSHIP */}
            {activeTab === "overview" && (
              <div className="max-w-4xl space-y-6 animate-fade-in">
                <h3 className="font-display font-serif text-2xl sm:text-3xl text-[#0F2744]">
                  Editorial Overview
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-[#0F2744]/80 leading-relaxed font-sans">
                  {product.overviewDetails.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: TECHNICAL SPECIFICATIONS */}
            {activeTab === "specs" && (
              <div className="max-w-4xl animate-fade-in">
                <h3 className="font-display font-serif text-2xl sm:text-3xl text-[#0F2744] mb-6">
                  Technical Specifications
                </h3>
                <div className="bg-white rounded-2xl border border-[#0F2744]/[0.08] divide-y divide-[#0F2744]/[0.06] overflow-hidden">
                  {product.specifications.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-sm"
                    >
                      <span className="text-[#0F2744]/60 font-semibold tracking-wider text-xs uppercase">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-[#0F2744]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TAILORED CUSTOMISATION */}
            {activeTab === "customisation" && (
              <div className="max-w-5xl animate-fade-in">
                <h3 className="font-display font-serif text-2xl sm:text-3xl text-[#0F2744] mb-6">
                  Tailored Customisation Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {product.customisationFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-[#0F2744]/[0.08]"
                    >
                      <div className="h-2 w-8 bg-[#C7A86A] rounded-full mb-3.5" />
                      <h4 className="font-display font-serif text-lg text-[#0F2744] font-semibold mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. EXPLORE OTHER PRODUCTS IN CORPORATE COLLECTION */}
        {relatedProducts.length > 0 && (
          <section className="w-full bg-[#FAF8F5] py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#C7A86A] uppercase block mb-1">
                    THE COLLECTION
                  </span>
                  <h2 className="font-display font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F2744]">
                    More Corporate Gifting Suites
                  </h2>
                </div>
                <Link
                  href="/collections/corporate-collection"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C7A86A] uppercase hover:text-[#0F2744] transition"
                >
                  VIEW FULL COLLECTION <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/collections/corporate-collection/${rel.slug}`}
                    className="group flex flex-col rounded-2xl bg-white border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/60 overflow-hidden shadow-xs transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden flex items-center justify-center p-2 border-b border-[#0F2744]/[0.05]">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-serif text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                          {rel.title}
                        </h4>
                        <p className="mt-2 text-xs text-[#0F2744]/70 line-clamp-2 font-sans leading-relaxed">
                          {rel.description}
                        </p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold tracking-widest text-[#C7A86A] uppercase group-hover:text-[#0F2744] transition-colors">
                        VIEW DETAILS <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. FINAL CTA BANNER */}
        <section className="w-full bg-[#0F2744] text-[#FAF8F5]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24 text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-4">
              CREATE YOUR CORPORATE GIFT
            </p>
            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight">
              A gift that carries your brand beyond the moment.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto font-sans leading-relaxed">
              Tell us what you&apos;re planning and we&apos;ll help create a corporate gifting solution
              tailored to your brand.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={quoteUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.24em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] transition-all duration-300 shadow-md"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={dynamicWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.24em] font-semibold border border-[#C7A86A]/70 text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" /> ENQUIRE VIA WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* 7. CLEAN LIGHTBOX MODAL (White background, centered, no dark blue overlay) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 h-12 w-12 rounded-full bg-[#FAF8F5] border border-[#0F2744]/15 text-[#0F2744] flex items-center justify-center hover:bg-[#0F2744] hover:text-white transition cursor-pointer shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Centered Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-[#0F2744]/10 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
