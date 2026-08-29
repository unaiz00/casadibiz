"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const MATERIALS = [
  { id: 1, title: "VELVET", category: "TEXTILES", img: "/assets/materials/velvet.png" },
  { id: 2, title: "SPECIAL PAPER", category: "PAPER", img: "/assets/materials/specialpaper.png" },
  { id: 3, title: "Kraft Paper", category: "PAPER", img: "/assets/materials/kraftpaper.png" },
  { id: 4, title: "SATIN", category: "TEXTILES", img: "/assets/materials/satin.png" },
  { id: 5, title: "LEATHER", category: "TEXTILES", img: "/assets/materials/leather.png" },
  { id: 6, title: "TEXTURED PAPER", category: "PAPER", img: "/assets/materials/texturedpaper.png" },
];

const FILTERS = ["ALL", "TEXTILES", "PAPER"];

export function MaterialsCarousel() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);

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
          <p className="text-[#0F2744]/75 font-light text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            We carefully select surfaces and textures that balance visual elegance with tactile richness.
          </p>

          {/* Filters - Subtle pills */}
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] tracking-[0.15em] font-semibold uppercase px-3.5 py-1.5 rounded-full transition-colors ${activeFilter === filter
                  ? "bg-[#0F2744] text-[#FAF8F5]"
                  : "bg-[#0F2744]/5 text-[#0F2744]/50 hover:bg-[#0F2744]/10"
                  }`}
              >
                {filter}
              </button>
            ))}
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
              className="snap-start shrink-0 w-[50vw] sm:w-[160px] md:w-[180px] lg:w-[200px] group flex flex-col cursor-pointer bg-[#FDFBF9] rounded-[16px] p-2.5 transition-transform duration-300 hover:scale-110 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#E8E4DD]"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-[10px] mb-3 bg-[#EBE5DC]/20">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
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
    </div>
  );
}
