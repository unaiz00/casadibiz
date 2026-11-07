"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface MaterialItem {
  id: number;
  title: string;
  category: string;
  img: string;
}

const MATERIALS: MaterialItem[] = [
  { id: 1, title: "VELVET", category: "TEXTILES", img: "/assets/materials/velvet.png" },
  { id: 2, title: "HAIRY VELVET", category: "TEXTILES", img: "/assets/materials/hairy_velvet.png" },
  { id: 3, title: "SPECIAL SOFT", category: "TEXTILES", img: "/assets/materials/specialsoft.png" },
  { id: 4, title: "SATIN", category: "TEXTILES", img: "/assets/materials/satin.png" },
  { id: 5, title: "NATURAL LINEN", category: "TEXTILES", img: "/assets/materials/linen.png" },
  { id: 6, title: "RIBBED GROSGRAIN", category: "TEXTILES", img: "/assets/materials/Ribbed Texture Fold.png" },
  { id: 7, title: "PREMIUM SUEDE", category: "TEXTILES", img: "/assets/materials/premium_suede.png" },
  { id: 8, title: "PREMIUM MICROFIBER", category: "TEXTILES", img: "/assets/materials/premium_micro_fiber.png" },
  { id: 9, title: "LEATHER", category: "TEXTILES", img: "/assets/materials/leather.png" },
  { id: 10, title: "CROCODILE LEATHER", category: "TEXTILES", img: "/assets/materials/Luxurious Brown Crocodile Leather Texture.png" },
  { id: 11, title: "GLOSSY PATENT", category: "TEXTILES", img: "/assets/materials/Glossy Navy Blue Fold.png" },
  { id: 12, title: "SPECIAL PAPER", category: "PAPER", img: "/assets/materials/specialpaper.png" },
  { id: 13, title: "KRAFT PAPER", category: "PAPER", img: "/assets/materials/kraftpaper.png" },
  { id: 14, title: "TEXTURED PAPER", category: "PAPER", img: "/assets/materials/texturedpaper.png" },
  { id: 15, title: "WHITE ART PAPER", category: "PAPER", img: "/assets/materials/whitepaper.png" },
  { id: 16, title: "MATTE SOFT-TOUCH", category: "PAPER", img: "/assets/materials/Curled Matte Gray Material Wave.png" },
];

const FILTERS = ["ALL", "TEXTILES", "PAPER"];

export function MaterialsCarousel() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const savedScrollLeft = useRef<number>(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleOpenPreview = (material: MaterialItem) => {
    if (scrollRef.current) {
      savedScrollLeft.current = scrollRef.current.scrollLeft;
    }
    setSelectedMaterial(material);
  };

  const handleClosePreview = () => {
    setSelectedMaterial(null);
    // Restore exact carousel scroll position on return
    requestAnimationFrame(() => {
      if (scrollRef.current && typeof savedScrollLeft.current === "number") {
        scrollRef.current.scrollLeft = savedScrollLeft.current;
      }
    });
  };

  // Close preview on Escape key press
  useEffect(() => {
    if (!selectedMaterial) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClosePreview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMaterial]);

  // Lock background page scroll while preview modal is open
  useEffect(() => {
    if (selectedMaterial) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedMaterial]);

  const filteredMaterials = activeFilter === "ALL"
    ? MATERIALS
    : MATERIALS.filter(m => m.category === activeFilter);

  return (
    <div className="w-full">
      {/* Header Area - Compact, minimal spacing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl w-full">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#C7A86A] tracking-[0.2em] font-semibold text-[13px] uppercase whitespace-nowrap">
              <span className="mr-2 opacity-75">01</span> MATERIALS & CRAFT
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-[#C7A86A]/40" />
          </div>

          <h2 className="font-display font-serif text-3xl sm:text-4xl text-[#0F2744] leading-tight mb-4">
            Luxury Is Felt Before It Is Seen.
          </h2>
          <p className="text-[#0F2744]/75 font-light text-sm sm:text-base leading-relaxed mb-6 max-w-md">
            We carefully select surfaces and textures that balance visual elegance with tactile richness.
          </p>

          {/* Filters & Scroll Controls */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[10px] tracking-[0.15em] font-semibold uppercase px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${activeFilter === filter
                    ? "bg-[#0F2744] text-[#FAF8F5]"
                    : "bg-[#0F2744]/5 text-[#0F2744]/50 hover:bg-[#0F2744]/10"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous materials"
                className="h-8 w-8 rounded-full border border-[#0F2744]/15 hover:border-[#C7A86A] hover:bg-[#0F2744] hover:text-[#FAF8F5] text-[#0F2744] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next materials"
                className="h-8 w-8 rounded-full border border-[#0F2744]/15 hover:border-[#C7A86A] hover:bg-[#0F2744] hover:text-[#FAF8F5] text-[#0F2744] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel - Extends to the right, small cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-12 pt-6"
        >
          {filteredMaterials.map(m => (
            <div
              key={m.id}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenPreview(m)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenPreview(m);
                }
              }}
              aria-label={`Enlarge ${m.title} material texture`}
              className="snap-start shrink-0 w-[50vw] sm:w-[160px] md:w-[180px] lg:w-[200px] group flex flex-col cursor-pointer bg-[#FDFBF9] rounded-[16px] p-2.5 transition-transform duration-300 hover:scale-110 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#E8E4DD] focus:outline-none focus:ring-2 focus:ring-[#C7A86A]"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-[10px] mb-3 bg-[#EBE5DC]/20">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-1 text-center pb-1">
                <h4 className="font-sans font-medium text-[11px] text-[#0F2744] tracking-[0.15em] uppercase">
                  {m.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tap-to-Enlarge Centered Image Preview Modal */}
      {selectedMaterial && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMaterial.title} Material Preview`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm select-none"
          onClick={handleClosePreview}
        >
          {/* Close button in top-right */}
          <button
            type="button"
            onClick={handleClosePreview}
            aria-label="Close preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 h-11 w-11 rounded-full bg-white/10 hover:bg-[#C7A86A] text-[#FAF8F5] hover:text-[#0F2744] flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C7A86A]"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Modal Container: stop propagation so clicking image or text won't close modal */}
          <div
            className="relative flex flex-col items-center justify-center max-w-[90vw] sm:max-w-xl md:max-w-2xl max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged Image Box with object-contain */}
            <div className="relative w-[85vw] max-w-[460px] sm:max-w-[540px] md:max-w-[600px] h-[50vh] sm:h-[58vh] md:h-[64vh] max-h-[580px] rounded-2xl overflow-hidden bg-black/30 border border-white/10 shadow-2xl flex items-center justify-center p-2 sm:p-4">
              <Image
                src={selectedMaterial.img}
                alt={selectedMaterial.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 540px, 600px"
                className="object-contain"
                priority
              />
            </div>

            {/* Material Name & Category Beneath Image */}
            <div className="mt-4 sm:mt-5 text-center px-4">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#C7A86A] uppercase font-semibold mb-1">
                {selectedMaterial.category}
              </p>
              <h3 className="font-sans font-medium text-base sm:text-lg md:text-xl text-[#FAF8F5] tracking-[0.18em] uppercase">
                {selectedMaterial.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
