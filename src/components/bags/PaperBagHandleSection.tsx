"use client";

import { Ribbon } from "lucide-react";

interface HandleItem {
  name: string;
  desc?: string;
}

interface PaperBagHandleSectionProps {
  handles: HandleItem[];
  productImage: string;
  productTitle: string;
}

export default function PaperBagHandleSection({
  handles = [],
  productImage,
  productTitle,
}: PaperBagHandleSectionProps) {
  return (
    <section id="handle-section" className="w-full bg-[#F6F0E8] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Tactical Image/Blueprint Panel */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="relative bg-[#FAF8F5] rounded-2xl p-8 border border-[#C7A86A]/20 shadow-sm overflow-hidden aspect-[4/3] flex items-center justify-center group">
              {/* Grid lines decoration for blueprint feel */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(200,161,90,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,161,90,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <img
                src={productImage}
                alt={`${productTitle} handle close-up`}
                className="relative z-10 max-h-full max-w-full object-contain rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-4 left-4 z-20 bg-[#0F2744]/90 text-[9px] font-mono tracking-widest text-[#C7A86A] py-1 px-3 rounded-full border border-[#C7A86A]/20">
                CASA DI BIZ // HANDLE ARCHITECTURE
              </div>
            </div>
          </div>

          {/* Right Column: Visual editorial items */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
              03 — HANDLE & RIBBON DETAILS
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium mb-6">
              Bespoke Ties & Handles
            </h2>
            
            <div className="w-16 h-[2px] bg-[#C7A86A] mb-8 rounded-full" />
            
            <p className="text-[#0F2744]/80 text-base leading-relaxed mb-8">
              We offer curated handles, ribbons, and custom closures crafted from premium cords, satin, and grosgrain fibers designed to elevate carrying utility.
            </p>

            <div className="w-full space-y-6">
              {handles.map((handle, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-[#FAF8F5] border border-[#C7A86A]/20 rounded-xl hover:border-[#C7A86A] transition-colors shadow-xs"
                >
                  <div className="h-10 w-10 rounded-full bg-[#C7A86A]/10 grid place-items-center text-[#C7A86A] shrink-0">
                    <Ribbon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-[#0F2744] font-semibold">
                      {handle.name}
                    </h4>
                    {handle.desc && (
                      <p className="text-xs text-[#0F2744]/70 mt-1 leading-relaxed">
                        {handle.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
