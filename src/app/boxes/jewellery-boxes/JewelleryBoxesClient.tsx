'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
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

const CUSTOMISATION_ITEMS = [
  { title: "Material Options", desc: "Velvet, micro-suede, fine leatherette, textured papers, and wood composite cores." },
  { title: "Bespoke Colour", desc: "Colours and finishes can be customised to your brand requirements." },
  { title: "Fitted Interior", desc: "Precision CNC foam cavities, anti-tarnish linings, ring channels, and bolster pillows." },
  { title: "Logo Finishes", desc: "Metallic hot foil stamping (gold/silver), blind debossing, metallic stickers, or screen printing." },
  { title: "Dimensions", desc: "Select from standard catalogue sizes or request custom millimeter-calibrated dimensions." },
  { title: "Branding Placement", desc: "Inner lid hot stamping, exterior lid insignia, or 3D electroformed metal crests." },
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
      return allModels.filter((m) => m.slug === "pendant-box" || m.slug === "er-pn-box");
    }
    if (activeFilter === "chain") {
      return allModels.filter((m) => m.slug === "chain-box" || m.slug === "chain-pn-box");
    }
    if (activeFilter === "bracelet") {
      return allModels.filter((m) => m.slug === "bracelet-box" || m.slug === "bracelet-chain-box");
    }
    if (activeFilter === "bangle") {
      return allModels.filter((m) => m.slug === "bangle-box" || m.slug === "er-bangle-box");
    }
    if (activeFilter === "necklace") {
      return allModels.filter((m) => m.slug === "necklace-box" || m.slug === "necklace-set-box");
    }
    if (activeFilter === "set-boxes") {
      return allModels.filter((m) => m.slug === "set-box" || m.slug === "full-set-box");
    }
    return allModels;
  }, [activeFilter, allModels]);

  const whatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(
    "Hello CASA DI BIZ, I would like to request a quote for bespoke Jewellery Boxes."
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main>
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-[#0F2744] bg-grain-navy text-[#FAF8F5] pt-10 sm:pt-14 pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
            {/* Breadcrumbs */}
            <div className="mb-8">
              <nav aria-label="Breadcrumb" className="text-xs">
                <ol className="flex flex-wrap items-center gap-2 text-[#FAF8F5]/60">
                  <li>
                    <Link href="/" className="hover:text-[#C7A86A] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/boxes" className="hover:text-[#C7A86A] transition-colors">
                      Boxes
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-[#C7A86A] font-medium" aria-current="page">
                    Jewellery Boxes
                  </li>
                </ol>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-3 block">
                  JEWELLERY BOXES
                </span>

                <h1 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-tight text-[#FAF8F5] mb-5">
                  Bespoke Jewellery <span className="italic text-[#C7A86A]">Packaging</span>
                </h1>

                <p className="text-sm sm:text-base text-[#FAF8F5]/85 font-light leading-relaxed max-w-xl mb-8">
                  A curated selection of jewellery boxes crafted in distinctive materials, finishes and configurations for luxury presentation.
                </p>

                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/contact?product=Jewellery+Boxes"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F6F0E8] text-[#0F2744] hover:bg-[#FAF8F5] text-xs font-semibold tracking-[0.2em] rounded-[4px] uppercase transition-all duration-300 shadow-md"
                  >
                    REQUEST A QUOTE <span className="text-xs">→</span>
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#C7A86A]/50 text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] text-xs font-semibold tracking-[0.2em] rounded-[4px] uppercase transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4 text-[#C7A86A] group-hover:text-[#0F2744]" />
                    ENQUIRE ON WHATSAPP
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image Showcase */}
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-[10px] overflow-hidden border border-[#C7A86A]/30 shadow-2xl">
                  <img
                    src="/assets/boxim.jpeg"
                    alt="CASA DI BIZ luxury bespoke jewellery boxes"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] tracking-[0.25em] text-[#C7A86A] font-semibold uppercase block">
                      HAND-FINISHED LUXURY
                    </span>
                    <p className="text-xs text-[#FAF8F5]/90 font-light">
                      Silk velvet, micro-suede, and fine leatherette jewellery boxes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-[#0F2744]/10">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase block mb-1">
                PRODUCT CATALOGUE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-normal">
                Jewellery Boxes
              </h2>
            </div>
            <span className="text-xs text-[#0F2744]/60">
              Colours and finishes customised to brand requirements
            </span>
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

        {/* CRAFTED AROUND YOUR BRAND (CUSTOMISATION SECTION) */}
        <section className="w-full bg-[#0F2744] bg-grain-navy text-[#FAF8F5] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 text-left">
                <span className="text-[11px] tracking-[0.3em] text-[#C7A86A] font-semibold uppercase mb-3 block">
                  BESPOKE SPECIFICATIONS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-[#FAF8F5] font-normal leading-tight mb-5">
                  Crafted Around <span className="italic text-[#C7A86A]">Your Brand</span>
                </h2>
                <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-8">
                  Every parameter of our jewellery boxes can be tailored to match your brand guidelines, product dimensions, and retail experience.
                </p>
                <Link
                  href="/contact?product=Jewellery+Boxes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] text-xs font-semibold tracking-[0.2em] rounded-[4px] uppercase transition-colors shadow-md"
                >
                  REQUEST A QUOTE <span className="text-xs">→</span>
                </Link>
              </div>

              {/* Right Column: Factual Customization Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {CUSTOMISATION_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-[6px] border border-[#C7A86A]/20 bg-[#FAF8F5]/5 backdrop-blur-xs text-left"
                  >
                    <span className="text-[10px] tracking-[0.25em] text-[#C7A86A] font-semibold uppercase block mb-1">
                      SPECIFICATION
                    </span>
                    <h3 className="font-display text-lg text-[#FAF8F5] font-normal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/75 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
