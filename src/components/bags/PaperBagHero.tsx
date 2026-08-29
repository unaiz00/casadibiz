"use client";

import { useState } from "react";
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site-chrome";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PaperBagHeroProps {
  title: string;
  subtitle?: string;
  shortDescription: string;
  breadcrumbs: BreadcrumbItem[];
  heroImages: string[];
  applications?: { label: string }[];
}

export default function PaperBagHero({
  title,
  subtitle,
  shortDescription,
  breadcrumbs,
  heroImages = [],
  applications = [],
}: PaperBagHeroProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative pt-6 pb-20 lg:pb-28 border-b border-[#C7A86A]/20 bg-[#F6F0E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-8 md:mb-12 animate-fade-up">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Premium Editorial Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left order-last lg:order-first animate-fade-up">
            <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase mb-4 block">
              {subtitle || "PAPER BAGS"}
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0F2744] leading-[1.1] mb-6 font-medium">
              {title}
            </h1>
            
            <div className="w-16 h-[2px] bg-[#C7A86A] mb-8 rounded-full" />

            <p className="text-[#0F2744]/80 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
              {shortDescription}
            </p>

            {applications.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C7A86A]/10 text-[#C7A86A] text-[10px] tracking-wider font-semibold uppercase px-3 py-1 rounded-full border border-[#C7A86A]/20"
                  >
                    {app.label}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-bold bg-[#C7A86A] text-[#0F2744] hover:bg-[#0F2744] hover:text-[#F6F0E8] transition-all duration-300 shadow-sm"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#construction-section"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-semibold border border-[#0F2744]/20 hover:border-[#C7A86A] hover:text-[#C7A86A] transition-colors text-center text-[#0F2744] cursor-pointer"
              >
                INSPECT DETAILS
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Presentation */}
          <div className="lg:col-span-7 flex flex-col gap-4 order-first lg:order-last animate-fade-up [animation-delay:150ms]">
            {heroImages.length > 0 && (
              <div className="relative">
                {/* Main Image Container */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-white shadow-[0_20px_50px_-25px_rgba(22,35,60,0.15)] cursor-zoom-in"
                >
                  <img
                    src={heroImages[activeImageIdx]}
                    alt={`${title} premium showcase`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#0F2744]/90 backdrop-blur-md text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="h-5 w-5 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Architectural visual accents */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C7A86A]/40 pointer-events-none rounded-tl-xl hidden sm:block" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#C7A86A]/40 pointer-events-none rounded-br-xl hidden sm:block" />
              </div>
            )}

            {/* Thumbnails Row */}
            {heroImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto py-2 scrollbar-none snap-x justify-start lg:justify-center">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative h-20 w-28 rounded-xl overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer ${
                      activeImageIdx === idx
                        ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/40 shadow-md scale-95"
                        : "border-[#C7A86A]/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${title} preview thumb ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer border border-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length);
            }}
            className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer border border-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] max-w-[85vw] flex items-center justify-center">
            <img
              src={heroImages[activeImageIdx]}
              alt={`${title} lightbox view`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev + 1) % heroImages.length);
            }}
            className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer border border-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
