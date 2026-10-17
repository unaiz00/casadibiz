'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import { getAllBoxModels, type BoxModel } from "@/data/boxes-data";

const FILTER_TABS = [
  { id: "all", label: "ALL" },
  { id: "ring", label: "RING" },
  { id: "earring", label: "EARRING" },
  { id: "pendant", label: "PENDANT" },
  { id: "chain", label: "CHAIN" },
  { id: "bracelet", label: "BRACELET" },
  { id: "bangle", label: "BANGLE" },
  { id: "necklace", label: "NECKLACE" },
  { id: "set-boxes", label: "SET BOXES" },
];


// Listing card preview images for /boxes/#jewellery-boxes (change here without affecting the PDP)
export const BOX_LISTING_IMAGES: Record<string, string> = {
  "ring-box": "/assets/ring/ring_hairyvelvet.jpeg",                 // Card 1: Ring Box
  "earring-box": "/assets/earring/premium_microfiber_earring.jpeg",         // Card 2: Earring Box
  "pendant-box": "/assets/pendant/bluglossy_pendant.png",                              // Card 3: Pendant Box
  "chain-box": "/assets/chain/chain__matt grey_paint.jpeg",         // Card 4: Chain Box
  "bracelet-box": "/assets/bracelet/premium_microfiber_bracelet.jpeg",    // Card 5: Bracelet Box
  "bangle-box": "/assets/bangle/bangle_crocodile.jpeg",             // Card 6: Bangle Box
  "necklace-box": "/assets/necklace/Ribbed_Necklace Box_Showcase.png",                        // Card 7: Necklace Box
  "set-box": "/assets/allsetbox/allset_suede.jpeg",           // Card 8: Set Box
};

export default function JewelleryBoxesClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allModels = useMemo(() => getAllBoxModels(), []);

  const filteredModels = useMemo(() => {
    if (activeFilter === "all") return allModels;
    if (activeFilter === "ring") {
      return allModels.filter((m) => m.slug === "ring-box");
    }
    if (activeFilter === "earring") {
      return allModels.filter((m) => m.slug === "earring-box");
    }
    if (activeFilter === "pendant") {
      return allModels.filter((m) => m.slug === "pendant-box");
    }
    if (activeFilter === "chain") {
      return allModels.filter((m) => m.slug === "chain-box");
    }
    if (activeFilter === "bracelet") {
      return allModels.filter((m) => m.slug === "bracelet-box");
    }
    if (activeFilter === "bangle") {
      return allModels.filter((m) => m.slug === "bangle-box");
    }
    if (activeFilter === "necklace") {
      return allModels.filter((m) => m.slug === "necklace-box");
    }
    if (activeFilter === "set-boxes") {
      return allModels.filter((m) => m.slug === "set-box");
    }
    return allModels;
  }, [activeFilter, allModels]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main>
        {/* TOP BREADCRUMB STRIP */}
        <div className="w-full bg-[#FAF8F5] border-b border-[#C7A86A]/15 pt-5 pb-3">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Boxes" },
              ]}
            />
          </div>
        </div>

        {/* JEWELLERY TYPE FILTER / NAVIGATION */}
        <section className="sticky top-[65px] z-40 bg-[#FAF8F5] border-b border-[#0F2744]/10 shadow-xs py-3.5 sm:py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-2 px-2 snap-x">
                {FILTER_TABS.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`shrink-0 px-4 py-2 rounded-[4px] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-200 snap-start cursor-pointer ${isActive
                        ? "bg-[#0F2744] text-[#FAF8F5] shadow-xs"
                        : "text-[#0F2744]/70 hover:text-[#0F2744] hover:bg-[#F6F0E8]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCT GRID */}
        <section id="jewellery-boxes" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-14 sm:pb-20 scroll-mt-24">
          <div className="mb-8 pb-4 border-b border-[#0F2744]/10">
            <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase block mb-1">
              PRODUCT CATALOGUE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-normal">
              Jewellery Boxes
            </h2>
          </div>

          {/* Grid Container: Desktop 4-col, Mobile horizontal snap scroll */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-5 sm:gap-6 -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none">
            {filteredModels.map((item, idx) => {
              const primaryImage = BOX_LISTING_IMAGES[item.id] || item.images[0]?.src || "/assets/boxim.jpeg";

              return (
                <Link
                  key={item.id}
                  href={`/boxes/${item.categorySlug}/${item.slug}`}
                  className="group w-[80vw] xs:w-[72vw] sm:w-auto shrink-0 snap-start flex flex-col bg-[#FFFFFF] border border-[#0F2744]/10 hover:border-[#C7A86A] rounded-[8px] overflow-hidden hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-[#F6F0E8] overflow-hidden">
                    <img
                      src={primaryImage}
                      alt={`CASA DI BIZ ${item.name}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body: PRODUCT TYPE -> AVAILABLE IN MULTIPLE SIZES -> VIEW DETAILS */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Product Type */}
                      <h3 className="font-display text-lg text-[#0F2744] font-normal group-hover:text-[#C7A86A] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Available in multiple sizes */}
                      <p className="mt-1 text-xs text-[#0F2744]/70 font-light">
                        Available in multiple sizes
                      </p>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-5 pt-3 border-t border-[#0F2744]/10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-semibold text-[#C7A86A] group-hover:gap-2.5 transition-all uppercase">
                        VIEW DETAILS <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-16 bg-[#F6F0E8] rounded-[8px] border border-[#0F2744]/10">
              <p className="text-sm text-[#0F2744]/70">No boxes found in this category.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-3 text-xs font-semibold tracking-wider text-[#C7A86A] uppercase underline cursor-pointer"
              >
                View all boxes
              </button>
            </div>
          )}
        </section>


      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
