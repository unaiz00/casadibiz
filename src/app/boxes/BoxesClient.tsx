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

const COLLECTIONS_LIST = [
  { name: "Box Collection 01 — Velvet Champagne", material: "Velvet Champagne", desc: "Plush silk velvet covering with champagne tone" },
  { name: "Box Collection 02 — Premium Microfiber", material: "Premium Microfiber", desc: "Ultra-fine weave Italian microfiber texture" },
  { name: "Box Collection 03 — Premium Suede", material: "Premium Suede", desc: "Soft micro-suede with anti-scratch surface" },
  { name: "Box Collection 04 — Brown Crocodile Texture", material: "Brown Crocodile Texture", desc: "Embossed exotic crocodile relief leatherette" },
  { name: "Box Collection 05 — Premium Suede / Special Paper", material: "Premium Suede / Special Paper", desc: "Dual material combination of suede and pulp-dyed paper" },
  { name: "Box Collection 06 — Premium Suede / Special Paper", material: "Premium Suede / Special Paper", desc: "Refined paperboard shell with suede interior" },
  { name: "Box Collection 07 — Matt Grey Paint", material: "Matt Grey Paint", desc: "Smooth lacquer finished wood composite" },
  { name: "Box Collection 08 — Special Premium Texture", material: "Special Premium Texture", desc: "Structured geometric and linen grain stock" },
  { name: "Box Collection 09 — Blue Crocodile Texture", material: "Blue Crocodile Texture", desc: "Deep navy embossed crocodile grain leatherette" },
  { name: "Box Collection 10 — Premium Microfiber / Special Paper", material: "Premium Microfiber / Special Paper", desc: "Microfiber lining paired with fine paperboard outer" },
  { name: "Box Collection 11 — Blue Glossy Finish", material: "Blue Glossy Finish", desc: "High-gloss reflective lacquer coat" },
  { name: "Box Collection 12 — Hairy Velvet", material: "Hairy Velvet", desc: "Long-pile textured velvet with deep tactile hand" },
  { name: "Box Collection 13 — Cartier / Special Soft Touch", material: "Cartier / Special Soft Touch", desc: "Fine nappa soft-touch leatherette" },
  { name: "Box Collection 14 — Premium Leather", material: "Premium Leather", desc: "Structured edge-stitched full grain leatherette" },
];


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
                      className={`shrink-0 px-4 py-2 rounded-[4px] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-200 snap-start cursor-pointer ${
                        isActive
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
              const primaryImage = item.images[0]?.src || "/assets/boxim.jpeg";

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

        {/* MATERIALS & FINISHES SECTION */}
        <section className="w-full bg-[#F6F0E8] py-16 sm:py-24 border-t border-[#0F2744]/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-12 text-left sm:text-center sm:mx-auto">
              <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase block mb-2">
                TACTILE SURFACE OPTIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-normal leading-tight">
                Materials & Finishes
              </h2>
              <p className="mt-3 text-sm text-[#0F2744]/75 font-light leading-relaxed">
                Authentic coverings and fine finishes available across all CASA DI BIZ jewellery box collections.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {COLLECTIONS_LIST.map((col) => (
                <div
                  key={col.name}
                  className="bg-[#FAF8F5] p-5 rounded-[6px] border border-[#0F2744]/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] tracking-wider text-[#C7A86A] font-semibold uppercase block mb-1">
                      {col.material}
                    </span>
                    <h3 className="font-display text-base text-[#0F2744] font-normal">
                      {col.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-[#0F2744]/65 font-light">
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
