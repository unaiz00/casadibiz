"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

// ==========================================
// KRAFT BAG — EDITABLE PRODUCT CONTENT
// ==========================================
const KRAFT_BAG_CONTENT = {
  // Breadcrumbs & Categorization
  breadcrumbs: [
    { label: "Home", to: "/" },
    { label: "Bags", to: "/bags" },
    { label: "Kraft Bag" }
  ],
  subtitle: "PAPER BAGS",

  // Core Product Info
  title: "Kraft Bag",
  shortDescription: "A refined natural kraft presentation designed for considered brand packaging.",

  // Product specifications summary card
  material: "120 GSM Natural Kraft Paper",
  printing: "1-Color Printing (Black)",
  finish: "Uncoated Natural Kraft Finish",
  handle: "Paper Rope Tie End",

  // Sizes & Dimensions (Change/Add/Remove sizes easily)
  sizes: [
    { value: "15 × 19 × 8 cm" },
    { value: "26 × 20 × 8 cm" },
    { value: "36 × 47 × 16 cm" }
  ],

  // Color options (name & hex visual swatch)
  colors: [
    { name: "Brown", hex: "#8A6D55" },
    { name: "White", hex: "#FAF8F5" }
  ],

  // Gallery Images (Exactly 3 images for the 1 + 2 layout)
  galleryImages: [
    "/assets/kraftmain.png",
    "/assets/kraft2.png",
    "/assets/kraft3.png"
  ],


  // Handle Detail Section
  handleDetail: {
    label: "HANDLE DETAIL",
    title: "Paper Rope Tie End",
    description: "Naturally textured paper rope handle with reinforced adhesive attachments hidden under the fold-over top.",
    image: "/assets/krafthandle.png"
  },



  // Collapsible accordion FAQ
  faqs: [
    {
      q: "What makes conifer wood pulp base Kraft bags compostable?",
      a: "Our Kraft bags utilize natural organic conifer wood fibers without plastic film laminations or chemical coatings, making them entirely biodegradable and compostable."
    },
    {
      q: "Is 120 GSM weight strong enough for heavier items?",
      a: "Yes, the 120 GSM long-fiber organic kraft provides exceptional burst strength. Combined with the reinforced turn-top and bottom patch inserts, it easily handles luxury weights."
    }
  ],

  // Final CTA Consultation Block
  finalCta: {
    eyebrow: "CREATE YOUR PACKAGING",
    heading: "Packaging made around your brand.",
    description: "Tell us about your dimensions, materials, finishes and branding requirements. Our team will help shape the right packaging solution for you.",
    buttonText: "REQUEST A QUOTE",
    whatsappText: "ENQUIRE ON WHATSAPP"
  },

  // Destination URLs
  quoteUrl: "/contact",
  whatsappUrl: "https://wa.me/919995255846"
};

export default function KraftBagPDP() {
  // State variables for gallery, lightboxes, and selections
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");

  const galleryImages = KRAFT_BAG_CONTENT.galleryImages;

  const selectedSize = KRAFT_BAG_CONTENT.sizes[activeSizeIdx]?.value || "";
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the Kraft Bag (Size: ${selectedSize})`;
  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;

  // Set up event listeners for keyboard navigation when lightbox is active
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, galleryImages.length]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main className="text-[#0F2744] overflow-hidden">
        {/* BREADCRUMBS */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6">
          <Breadcrumbs items={KRAFT_BAG_CONTENT.breadcrumbs} />
        </div>

        {/* HERO / MAIN PDP SECTION */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-6 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* LEFT: Product Image Gallery */}
            <div className="lg:col-span-7 lg:pt-8">
              {/* Desktop layout: 1 + 2 + 2 */}
              <div className="hidden md:flex flex-col gap-4">
                {/* Large full-width image at the top */}
                <div
                  onClick={() => {
                    setActiveImageIdx(0);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[16/10] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white cursor-zoom-in shadow-xs"
                >
                  <img
                    src={galleryImages[0]}
                    alt={`${KRAFT_BAG_CONTENT.title} showcase 1`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1">
                    <Maximize2 className="h-5 w-5 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Two equal-sized images side-by-side underneath */}
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.slice(1, 3).map((img, idx) => (
                    <div
                      key={idx + 1}
                      onClick={() => {
                        setActiveImageIdx(idx + 1);
                        setLightboxOpen(true);
                      }}
                      className="group relative aspect-[4/3] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white cursor-zoom-in shadow-xs"
                    >
                      <img
                        src={img}
                        alt={`${KRAFT_BAG_CONTENT.title} showcase ${idx + 2}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#0F2744]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Maximize2 className="h-4 w-4 text-[#C7A86A]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile layout: large active image + scrollable thumbnail strip underneath */}
              <div className="md:hidden w-full flex flex-col gap-3">
                {/* Active Image */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#C7A86A]/20 bg-white shadow-xs"
                >
                  <img
                    src={galleryImages[activeImageIdx]}
                    alt={`${KRAFT_BAG_CONTENT.title} mobile active`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-[#0F2744]/90 text-[#F6F0E8] flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-[#C7A86A]" />
                  </div>
                </div>

                {/* Horizontal scrollable thumbnails */}
                <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none snap-x w-full">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative h-14 w-20 rounded-md overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer ${activeImageIdx === idx
                        ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/30 scale-95"
                        : "border-[#C7A86A]/10 opacity-70 hover:opacity-100"
                        }`}
                    >
                      <img
                        src={img}
                        alt={`${KRAFT_BAG_CONTENT.title} mobile thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Product Information & CTAs */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase mb-4 block">
                {KRAFT_BAG_CONTENT.subtitle}
              </span>

              <h1 className="font-display text-4xl sm:text-5xl text-[#0F2744] leading-[1.1] mb-6 font-medium">
                {KRAFT_BAG_CONTENT.title}
              </h1>

              <div className="w-16 h-[2px] bg-[#C7A86A] mb-8" />

              <p className="text-[#0F2744]/80 text-base leading-relaxed mb-8">
                {KRAFT_BAG_CONTENT.shortDescription}
              </p>

              {/* Material/Construction Summary */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-xl p-5 mb-8 text-sm space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">MATERIAL</span>
                  <span className="font-semibold text-[#0F2744]">{KRAFT_BAG_CONTENT.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">PRINTING</span>
                  <span className="font-semibold text-[#0F2744]">{KRAFT_BAG_CONTENT.printing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0F2744] font-semibold uppercase tracking-wider text-[10px]">FINISH</span>
                  <span className="font-semibold text-[#0F2744]">{KRAFT_BAG_CONTENT.finish}</span>
                </div>
              </div>

              {/* Sizes Section */}
              <div className="w-full mb-8">
                <div className="flex flex-row gap-3 overflow-x-auto lg:overflow-x-visible w-full pb-2 lg:pb-0 scrollbar-none snap-x">
                  {KRAFT_BAG_CONTENT.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSizeIdx(idx)}
                      className={`flex items-center justify-center h-12 px-5 border rounded-md shrink-0 snap-start transition-all duration-300 cursor-pointer ${activeSizeIdx === idx
                        ? "border-[#C7A86A] bg-[#F6F0E8]"
                        : "border-[#C7A86A]/20 bg-[#FAF8F5] hover:border-[#C7A86A]/50 hover:bg-[#F6F0E8]/20 hover:translate-y-[-1px]"
                        }`}
                    >
                      <span className="text-[12px] font-medium tracking-[0.08em] text-[#0F2744]">
                        {size.value}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Colours Section */}
              <div className="w-full mb-10">
                <h4 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase mb-4">
                  AVAILABLE COLOURWAYS
                </h4>
                <div className="flex gap-4">
                  {KRAFT_BAG_CONTENT.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColorIdx(idx)}
                      className={`flex items-center gap-3 px-4 py-3 border rounded-lg transition-all duration-300 ${activeColorIdx === idx
                        ? "border-[#C7A86A] bg-[#F6F0E8]"
                        : "border-[#C7A86A]/20 bg-transparent hover:border-[#C7A86A]/50"
                        }`}
                    >
                      <div
                        className="h-6 w-6 rounded-full border border-[#0F2744]/15 shadow-xs relative"
                        style={{ backgroundColor: color.hex }}
                      >
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
                      </div>
                      <span className="text-xs font-semibold text-[#0F2744]">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* B2B CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="#quote-section"
                  className="flex-1 inline-flex items-center justify-center gap-3 rounded-md px-8 py-4.5 text-xs tracking-[0.25em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 text-center"
                >
                  {KRAFT_BAG_CONTENT.finalCta.buttonText} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={dynamicWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-3 rounded-md px-8 py-4.5 text-xs tracking-[0.25em] font-semibold border border-[#C7A86A]/40 text-[#0F2744] hover:bg-[#F6F0E8]/40 transition-all duration-300"
                >
                  <svg className="h-4 w-4 fill-[#C7A86A]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.639-1.026-5.122-2.892-6.991C16.576 1.882 14.09 .856 11.45.856c-5.44 0-9.866 4.415-9.87 9.869-.001 2.015.528 3.987 1.53 5.751l-.997 3.636 3.734-.978zm11.332-6.84c-.302-.15-1.787-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.276-.47-2.43-1.499-.899-.8-1.505-1.79-1.682-2.09-.177-.3-.018-.463.13-.61.134-.134.302-.35.453-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.244-.59-.49-.51-.678-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.276.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52.714.31 1.27.496 1.703.635.717.227 1.368.195 1.883.118.574-.085 1.786-.73 2.037-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                  <span>{KRAFT_BAG_CONTENT.finalCta.whatsappText}</span>
                  <ArrowRight className="h-3 w-3 text-[#C7A86A] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Supporting Line */}
              <div className="w-full text-center mt-3">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.05em] text-[#0F2744]/40">
                  Custom quantities • Custom dimensions • B2B orders
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Title */}
              <h2 className="text-[11px] font-semibold tracking-[0.3em] text-[#0F2744] uppercase mb-8">
                PRODUCT DETAILS
              </h2>
              {/* Tabs list */}
              <div className="flex border-b border-[#0F2744]/10 mb-12 gap-8 md:gap-12 overflow-x-auto scrollbar-none snap-x">
                <button
                  onClick={() => setActiveDetailTab("description")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "description"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  DESCRIPTION
                  {activeDetailTab === "description" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveDetailTab("specifications")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "specifications"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  SPECIFICATIONS
                  {activeDetailTab === "specifications" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveDetailTab("customization")}
                  className={`pb-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer snap-start ${activeDetailTab === "customization"
                    ? "text-[#0F2744] font-medium"
                    : "text-[#0F2744]/50 hover:text-[#0F2744]"
                    }`}
                >
                  CUSTOMIZATION
                  {activeDetailTab === "customization" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="transition-all duration-300 ease-in-out">
                {activeDetailTab === "description" && (
                  <div className="opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-3 block">
                      THE MATERIAL
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight mb-6 font-medium">
                      Natural kraft, thoughtfully constructed.
                    </h3>
                    <p className="text-[#0F2744]/80 text-base leading-relaxed mb-10 font-sans">
                      A refined 120 GSM natural kraft paper bag designed for branded retail, boutique, gifting, and presentation. The uncoated paper retains its natural tactile character, complemented by a paper rope tie-end handle for a considered finish.
                    </p>

                    {/* highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-8 border-t border-[#C7A86A]/20">
                      <div className="md:pr-8 md:border-r border-[#C7A86A]/20">
                        <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1">
                          120 GSM
                        </span>
                        <span className="block font-display text-base text-[#0F2744] font-medium tracking-wide">
                          NATURAL KRAFT
                        </span>
                      </div>
                      <div className="md:px-8 md:border-r border-[#C7A86A]/20">
                        <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1">
                          UNCOATED
                        </span>
                        <span className="block font-display text-base text-[#0F2744] font-medium tracking-wide">
                          NATURAL FINISH
                        </span>
                      </div>
                      <div className="md:pl-8">
                        <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1">
                          PAPER ROPE
                        </span>
                        <span className="block font-display text-base text-[#0F2744] font-medium tracking-wide">
                          TIE-END HANDLE
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {activeDetailTab === "specifications" && (
                  <div className="opacity-100 transition-opacity duration-300">
                    <div className="divide-y divide-[#C7A86A]/20 border-t border-[#C7A86A]/20">
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          MATERIAL
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          120 GSM Natural Kraft Paper
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          PRINTING
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          1-Color Printing (Black)
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          FINISH
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          Uncoated Natural Kraft Finish
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          HANDLE
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium">
                          Paper Rope Tie-End
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-4">
                        <div className="md:col-span-4 text-[10px] font-semibold tracking-[0.2em] text-[#0F2744]/60 uppercase">
                          AVAILABLE SIZES
                        </div>
                        <div className="md:col-span-8 text-sm text-[#0F2744] font-medium space-y-1">
                          <div>15 × 19 × 8 cm</div>
                          <div>26 × 20 × 8 cm</div>
                          <div>36 × 47 × 16 cm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeDetailTab === "customization" && (
                  <div className="opacity-100 transition-opacity duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div>
                        <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">SIZE</h4>
                        <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                          Custom dimensions based on your packaging requirements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">PRINTING</h4>
                        <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                          Brand artwork and logo printing.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">HANDLE</h4>
                        <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                          Paper rope tie-end construction.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-display text-base text-[#0F2744] font-semibold tracking-wide mb-2">FINISH</h4>
                        <p className="text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                          Material and finishing options based on project requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* HANDLE DETAIL SECTION */}
        <section className="w-full bg-[#FAF8F5] py-12 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Handle Illustration */}
              <div className="lg:col-span-6">
                <img
                  src={KRAFT_BAG_CONTENT.handleDetail.image}
                  alt={`${KRAFT_BAG_CONTENT.handleDetail.title} handle close-up`}
                  className="w-full aspect-[4/3] object-cover rounded-tl-[14px] rounded-tr-[80px] rounded-br-[14px] rounded-bl-[14px] overflow-hidden shadow-xs"
                />
              </div>

              {/* Handle description */}
              <div className="lg:col-span-6 text-left space-y-4">
                <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase block">
                  {KRAFT_BAG_CONTENT.handleDetail.label}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium leading-tight">
                  {KRAFT_BAG_CONTENT.handleDetail.title}
                </h3>
                <div className="w-12 h-[2px] bg-[#C7A86A]" />
                <p className="text-sm text-[#0F2744]/85 leading-relaxed">
                  {KRAFT_BAG_CONTENT.handleDetail.description}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* FAQS SECTION */}
        <section className="w-full bg-[#FAF8F5] py-20 border-b border-[#C7A86A]/20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-[10px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
              INFORMATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium mb-12">
              Kraft Bag Q&A
            </h3>

            <div className="divide-y divide-[#C7A86A]/20 border-y border-[#C7A86A]/20 text-left">
              {KRAFT_BAG_CONTENT.faqs.map((faq, i) => {
                const open = openFaqIdx === i;
                return (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => setOpenFaqIdx(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="flex items-start gap-3.5 font-display text-base sm:text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                        <HelpCircle className="h-5 w-5 text-[#C7A86A] shrink-0 mt-0.5" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#C7A86A] shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-3.5" : "max-h-0"
                        }`}
                    >
                      <p className="text-sm text-[#0F2744]/75 leading-relaxed pl-8.5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <SiteFooter />

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
            }}
            className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] max-w-[85vw] flex items-center justify-center">
            <img
              src={galleryImages[activeImageIdx]}
              alt={`${KRAFT_BAG_CONTENT.title} lightbox zoom`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
            }}
            className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
