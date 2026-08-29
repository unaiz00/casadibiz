"use client";

import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PaperBagGalleryProps {
  productImages: string[];
  productTitle: string;
}

export default function PaperBagGallery({ productImages = [], productTitle }: PaperBagGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (productImages.length === 0) return null;

  return (
    <section id="gallery-section" className="w-full bg-[#F6F0E8] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
            07 — REFERENCE GALLERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium">
            Luxury Packaging Portfolio
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto mt-6" />
        </div>

        {/* Editorial Layout: Large Cover on Left + Grid on Right (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Main Cover (Large Editorial Image) */}
          <div className="col-span-7">
            <button
              onClick={() => setLightboxIdx(0)}
              className="group relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-white cursor-zoom-in shadow-sm flex"
            >
              <img
                src={productImages[0]}
                alt={`${productTitle} main composition`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-[#0F2744]/90 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1">
                <Maximize2 className="h-4.5 w-4.5 text-[#C7A86A]" />
              </div>
            </button>
          </div>

          {/* Grid of Supporting Shots */}
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            {productImages.slice(1, 3).map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i + 1)}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#C7A86A]/30 bg-white cursor-zoom-in shadow-sm flex"
              >
                <img
                  src={src}
                  alt={`${productTitle} detail ${i + 2}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-[#0F2744]/90 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 className="h-3.5 w-3.5 text-[#C7A86A]" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipeable Gallery (Peek Effect) */}
        <div className="md:hidden w-full overflow-x-auto scrollbar-none snap-x flex gap-4 pr-12">
          {productImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="snap-start shrink-0 w-[80vw] aspect-[4/3] rounded-xl overflow-hidden border border-[#C7A86A]/20 bg-white relative flex"
            >
              <img
                src={src}
                alt={`${productTitle} slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer border border-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev !== null ? (prev - 1 + productImages.length) % productImages.length : 0));
            }}
            className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer border border-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] max-w-[85vw] flex items-center justify-center">
            <img
              src={productImages[lightboxIdx]}
              alt={`${productTitle} full view`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev !== null ? (prev + 1) % productImages.length : 0));
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
