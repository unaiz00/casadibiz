"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Check,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { BoxModel } from "@/data/boxes-data";
import ProductCTAButtons from "@/components/pdp/ProductCTAButtons";
import { EnquiryModal } from "@/components/EnquiryModal";
import { BOX_LISTING_IMAGES } from "@/app/boxes/BoxesClient";
import MobileBoxMaterialSelector from "./MobileBoxMaterialSelector";

const BOX_TABS = [
  {
    id: "description" as const,
    label: "OVERVIEW & CRAFTSMANSHIP",
    mobileLines: ["OVERVIEW", "& CRAFTSMANSHIP"],
  },
  {
    id: "specifications" as const,
    label: "TECHNICAL SPECIFICATIONS",
    mobileLines: ["TECHNICAL", "SPECIFICATIONS"],
  },
  {
    id: "customization" as const,
    label: "TAILORED CUSTOMISATION",
    mobileLines: ["TAILORED", "CUSTOMISATION"],
  },
];

interface BoxPDPViewProps {
  model: BoxModel;
  relatedModels: BoxModel[];
}

export default function BoxPDPView({ model, relatedModels }: BoxPDPViewProps) {
  const isBraceletBox = model.slug === "bracelet-box" || model.id === "bracelet-box";
  const isSetBox = model.slug === "set-box" || model.id === "set-box";
  const isNecklaceBox = model.slug === "necklace-box" || model.id === "necklace-box";
  const isPendantBox = model.slug === "pendant-box" || model.id === "pendant-box";
  const isRingBox = model.slug === "ring-box" || model.id === "ring-box";
  const isChainBox = model.slug === "chain-box" || model.id === "chain-box";

  // Dedicated Finish-to-Material & Image mapping for all Box PDPs
  const BOX_FINISH_MAPS: Record<string, Record<string, { src: string; matId: string }>> = {
    "ring-box": {
      "blind-debossed": {
        src: "/assets/ring/ring_hairyvelvet.jpeg",
        matId: "hairy-velvet",
      },
      "metallic-sticker": {
        src: "/assets/ring/ring_matt grey_paint.jpeg",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/ring/ring_blueglossy.jpeg",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/ring/ring_special_premium_texture.jpeg",
        matId: "ribbed-texture",
      },
    },
    "earring-box": {
      "blind-debossed": {
        src: "/assets/earring/Velvet_Earring_Box.png",
        matId: "hairy-velvet",
      },
      "metallic-sticker": {
        src: "/assets/earring/earring_Gray Jewelry Box Collage.png",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/earring/earring_blueglossy.jpeg",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/earring/erpin_special_premium_texture.jpeg",
        matId: "ribbed-texture",
      },
    },
    "pendant-box": {
      "blind-debossed": {
        src: "/assets/pendant/hairyvelvet_pendantbox.png",
        matId: "velvet",
      },
      "metallic-sticker": {
        src: "/assets/pendant/mattgrey_pendant.png",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/pendant/bluglossy_pendant.png",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/pendant/pendant_ribbed.jpeg",
        matId: "ribbed-texture",
      },
    },
    "necklace-box": {
      "blind-debossed": {
        src: "/assets/necklace/hairyvelvet_necklace.png",
        matId: "velvet",
      },
      "metallic-sticker": {
        src: "/assets/necklace/matt_paint_necklace.png",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/necklace/necklace_blueglossy.jpeg",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/necklace/Ribbed_Necklace Box_Showcase.png",
        matId: "ribbed-texture",
      },
    },
    "bracelet-box": {
      "blind-debossed": {
        src: "/assets/bracelet/bracelet__hairyvelvet.jpeg",
        matId: "velvet",
      },
      "metallic-sticker": {
        src: "/assets/bracelet/Mattgreypaint_bracelet.jpg",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/bracelet/blurglossy_bracelet.png",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/bracelet/ribbed_bracelet.png",
        matId: "ribbed-texture",
      },
    },
    "bangle-box": {
      "blind-debossed": {
        src: "/assets/bangle/bangle_hairyvelvet.jpeg",
        matId: "hairy-velvet",
      },
      "metallic-sticker": {
        src: "/assets/bangle/bangle__matt grey_paint.jpeg",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/bangle/bangle_blueglossy.jpeg",
        matId: "blue-glossy",
      },
      "gold-foiling": {
        src: "/assets/bangle/bangle__special_premium_texture.jpeg",
        matId: "special-premium-texture",
      },
    },
    "set-box": {
      "blind-debossed": {
        src: "/assets/allsetbox/allset_hairyvelvet.jpeg",
        matId: "velvet",
      },
      "metallic-sticker": {
        src: "/assets/allsetbox/Luxury Jewelry Box Collage.png",
        matId: "matt-grey-paint",
      },
      "silver-foiling": {
        src: "/assets/allsetbox/Casa Di Biz Jewelry Box Collection.png",
        matId: "glossy-navy",
      },
      "gold-foiling": {
        src: "/assets/allsetbox/allset_ribbed.jpeg",
        matId: "ribbed-texture",
      },
    },
    "chain-box": {
      "blind-debossed": {
        src: "/assets/chain/chainpn1_velvetchamgne.jpeg",
        matId: "velvet",
      },
      "metallic-sticker": {
        src: "/assets/chain/chain__matt grey_paint.jpeg",
        matId: "matt-grey-paint",
      },
      "gold-foiling": {
        src: "/assets/chain/chain__special_premium_texture.jpeg",
        matId: "textured-paper",
      },
      "silver-foiling": {
        src: "/assets/chain/chain_microfiber.jpeg",
        matId: "microfiber",
      },
    },
  };

  const getFinishMap = (): Record<string, { src: string; matId: string }> | null => {
    return BOX_FINISH_MAPS[model.slug] || BOX_FINISH_MAPS[model.id] || null;
  };

  const getFinishForMaterial = (matId: string): string => {
    if (matId === "hairy-velvet" || matId === "velvet") return "blind-debossed";
    if (matId === "matt-grey-paint") return "metallic-sticker";
    if (matId === "glossy-navy" || matId === "blue-glossy") return "silver-foiling";
    // For all other materials on any box PDP, default to gold foiling
    return "gold-foiling";
  };

  const initialMaterialId = model.materials[0]?.id || "";
  const initialFinishId = getFinishForMaterial(initialMaterialId) || model.finishes[0]?.id || "";

  // Active states
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMaterialId, setActiveMaterialId] = useState(initialMaterialId);
  const [activeFinishId, setActiveFinishId] = useState(initialFinishId);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<"description" | "specifications" | "customization">("description");
  const [mobileMaterialOpen, setMobileMaterialOpen] = useState(false);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const sizeDropdownRef = useRef<HTMLDivElement>(null);

  const activeSize = model.sizes[activeSizeIdx] || model.sizes[0];
  const activeMaterial = model.materials.find((m) => m.id === activeMaterialId) || model.materials[0];
  const activeFinish = model.finishes.find((f) => f.id === activeFinishId) || model.finishes[0];

  // Reset size selection when model changes
  useEffect(() => {
    setActiveSizeIdx(0);
    setSizeDropdownOpen(false);
  }, [model.slug, model.id]);

  // Close size dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sizeDropdownRef.current && !sizeDropdownRef.current.contains(e.target as Node)) {
        setSizeDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSizeDropdownOpen(false);
      }
    };
    if (sizeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sizeDropdownOpen]);

  // Material selection handler (links material to main product image and logo finish)
  const handleMaterialSelect = (materialId: string) => {
    setActiveMaterialId(materialId);

    // Dynamic logo finish synchronization matching Ring Box PDP across all box PDPs
    const targetFinish = getFinishForMaterial(materialId);
    setActiveFinishId(targetFinish);

    if (model.materialImages) {
      const targetSrc =
        model.materialImages[materialId] ||
        model.materialImages[materialId.toLowerCase()];
      if (targetSrc) {
        const foundIdx = model.images.findIndex((img) => img.src === targetSrc);
        if (foundIdx !== -1) {
          setActiveImageIdx(foundIdx);
          return;
        }
      }
    }

    // Fallback: match material by name / id against image alt, src, or label
    const selectedMat = model.materials.find((m) => m.id === materialId);
    const searchTerms = [
      materialId.toLowerCase().replace(/-/g, " "),
      materialId.toLowerCase().replace(/-/g, ""),
      selectedMat?.name.toLowerCase(),
    ].filter(Boolean) as string[];

    const foundIdx = model.images.findIndex((img) => {
      const alt = (img.alt || "").toLowerCase();
      const src = (img.src || "").toLowerCase();
      const label = (img.label || "").toLowerCase();
      return searchTerms.some((term) =>
        alt.includes(term) || src.includes(term.replace(/\s+/g, "")) || label.includes(term)
      );
    });

    if (foundIdx !== -1) {
      setActiveImageIdx(foundIdx);
    }
  };

  // Finish selection handler (links finish option to showcase product image on Ring Box & Earring Box PDP)
  const handleFinishSelect = (finishId: string) => {
    setActiveFinishId(finishId);

    // Dynamic product image & material synchronization matching Ring Box PDP across all box PDPs
    const finishMap = getFinishMap();
    const target = finishMap ? finishMap[finishId] : undefined;
    if (target) {
      const foundIdx = model.images.findIndex((img) => img.src === target.src);
      if (foundIdx !== -1) {
        setActiveImageIdx(foundIdx);
      }
      setActiveMaterialId(target.matId);
    }
  };

  // Thumbnail / image navigation handler (synchronises selected material and logo finish on Ring Box & Earring Box)
  const handleImageSelect = (idx: number) => {
    setActiveImageIdx(idx);
    const img = model.images[idx];
    if (!img) return;

    let matchedMatId = "";

    if (model.materialImages) {
      const matchedEntry = Object.entries(model.materialImages).find(
        ([_, src]) => src === img.src
      );
      if (matchedEntry && model.materials.some((m) => m.id === matchedEntry[0])) {
        matchedMatId = matchedEntry[0];
      }
    }

    if (!matchedMatId && img.src.includes("blue_crocodile") && model.materials.some((m) => m.id === "blue-crocodile")) {
      matchedMatId = "blue-crocodile";
    } else if (!matchedMatId && img.src.includes("crocodile") && model.materials.some((m) => m.id === "brown-crocodile")) {
      matchedMatId = "brown-crocodile";
    }

    if (
      !matchedMatId &&
      (img.src.toLowerCase().includes("velvet") || img.src.toLowerCase().includes("vlevet")) &&
      model.materials.some((m) => m.id === "hairy-velvet" || m.id === "velvet")
    ) {
      matchedMatId = model.materials.some((m) => m.id === "hairy-velvet") ? "hairy-velvet" : "velvet";
    }

    if (!matchedMatId) {
      for (const mat of model.materials) {
        const searchTerms = [
          mat.id.toLowerCase().replace(/-/g, " "),
          mat.id.toLowerCase().replace(/-/g, ""),
          mat.name.toLowerCase(),
        ];
        const alt = (img.alt || "").toLowerCase();
        const src = (img.src || "").toLowerCase();
        const label = (img.label || "").toLowerCase();
        if (
          searchTerms.some(
            (term) =>
              alt.includes(term) || src.includes(term.replace(/\s+/g, "")) || label.includes(term)
          )
        ) {
          matchedMatId = mat.id;
          break;
        }
      }
    }

    if (matchedMatId) {
      setActiveMaterialId(matchedMatId);
      const targetFinish = getFinishForMaterial(matchedMatId);
      setActiveFinishId(targetFinish);
    }
  };

  // Dynamic WhatsApp prefill message
  const whatsappMsg = `Hello CASA DI BIZ, I would like to request a quote for the ${model.name}.
Selected Specs:
- Size: ${activeSize?.label} (${activeSize?.dimensions})
- Material Preference: ${activeMaterial?.name}
- Logo Finish: ${activeFinish?.name}
- Colour: Bespoke to brand requirement`;

  const dynamicWhatsappUrl = `https://wa.me/+971563374248?text=${encodeURIComponent(whatsappMsg)}`;

  // Dynamic Contact Page URL with prefilled query
  const quoteUrl = `/contact?category=${encodeURIComponent(model.categorySlug)}&model=${encodeURIComponent(model.name)}&size=${encodeURIComponent(activeSize?.dimensions || "")}&material=${encodeURIComponent(activeMaterial?.name || "")}&finish=${encodeURIComponent(activeFinish?.name || "")}`;

  const productEnquiryData = {
    productName: model.name,
    category: "Jewellery Boxes",
    material: activeMaterial?.name,
    variantOrSize: activeSize ? `${activeSize.label} (${activeSize.dimensions})` : undefined,
    specifications: {
      "Logo Finish": activeFinish?.name,
      "Interior / Insert": model.specifications?.insertType || model.specifications?.innerMaterial || undefined,
    },
  };

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        handleImageSelect((activeImageIdx + 1) % model.images.length);
      }
      if (e.key === "ArrowLeft") {
        handleImageSelect((activeImageIdx - 1 + model.images.length) % model.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, model.images.length, activeImageIdx]);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Boxes", to: "/boxes" },
    { label: model.categoryName, to: `/boxes/${model.categorySlug}` },
    { label: model.name },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* HEADER */}
      <SiteHeader />

      <main className="text-[#0F2744] overflow-hidden">
        {/* BREADCRUMBS */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* HERO / PRODUCT DISPLAY SECTION */}
        <section className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT: Product Image Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-3 md:gap-4">
              {/* Large Main Showcase Image (Single instance for both Desktop and Mobile - Zero duplicate downloads) */}
              <div
                onClick={() => {
                  setLightboxOpen(true);
                }}
                className={`group relative aspect-square ${isChainBox ? "md:max-h-[460px] lg:max-h-none" : ""} rounded-xl overflow-hidden border border-[#C7A86A]/30 md:border-[#C7A86A]/25 bg-white cursor-zoom-in shadow-xs transition-all duration-500 hover:border-[#C7A86A]/60`}
              >
                <img
                  key={`main-${model.images[activeImageIdx]?.src || "main"}`}
                  src={model.images[activeImageIdx]?.src || model.images[0]?.src}
                  alt={model.images[activeImageIdx]?.alt || `${model.name} luxury jewellery box`}
                  className={`absolute inset-0 h-full w-full ${isBraceletBox || isSetBox || isNecklaceBox || isPendantBox ? "object-contain bg-[#FAF8F5]" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.02] animate-fade-in`}
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Zoom indicator button */}
                <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 h-9 w-9 md:h-11 md:w-11 rounded-full bg-[#0F2744]/90 md:bg-[#0F2744]/95 text-[#F6F0E8] flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-1 hover:bg-[#C7A86A] hover:text-[#0F2744]">
                  <Maximize2 className="h-4 w-4 md:h-4.5 md:w-4.5 text-[#C7A86A] md:group-hover:text-[#0F2744] transition-colors" />
                </div>
              </div>

              {/* Desktop Sub-grid of thumbnails / gallery angles */}
              <div className={`hidden md:grid ${isSetBox || isNecklaceBox ? "grid-cols-5" : "grid-cols-6"} gap-2.5 sm:gap-3`}>
                {model.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleImageSelect(idx)}
                    aria-label={`View ${img.alt || `product image ${idx + 1}`}`}
                    className={`group relative aspect-square rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer bg-white ${
                      activeImageIdx === idx
                        ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/40 scale-[0.98]"
                        : "border-[#C7A86A]/20 opacity-75 hover:opacity-100 hover:border-[#C7A86A]/60"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* Mobile Horizontal scrollable thumbnails */}
              <div className="md:hidden flex gap-2.5 overflow-x-auto py-1 scrollbar-none snap-x w-full">
                {model.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleImageSelect(idx)}
                    aria-label={`View ${img.alt || `product image ${idx + 1}`}`}
                    className={`relative h-16 w-16 sm:h-20 sm:w-20 rounded-lg overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer bg-white ${
                      activeImageIdx === idx
                        ? "border-[#C7A86A] ring-2 ring-[#C7A86A]/50"
                        : "border-[#C7A86A]/20 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>

              {/* Mobile Material & Texture Selector - Directly after Gallery & Thumbnails */}
              <div className="md:hidden w-full mt-2 pt-3 border-t border-[#0F2744]/10 min-w-0">
                <MobileBoxMaterialSelector
                  materials={model.materials}
                  activeMaterialId={activeMaterialId}
                  isOpen={mobileMaterialOpen}
                  onToggle={() => setMobileMaterialOpen((prev) => !prev)}
                  onSelectMaterial={(matId) => {
                    handleMaterialSelect(matId);
                    setMobileMaterialOpen(false);
                  }}
                />
              </div>
              </div>

            {/* RIGHT: Product Information & Interactive Configurator */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Eyebrow & Category */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#0F2744]/70 tracking-[0.3em] font-semibold text-[11px] uppercase">
                  {model.categoryName}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
                <span className="text-[#C7A86A] text-xs font-semibold tracking-wider uppercase">
                  Bespoke Manufacture
                </span>
              </div>

              {/* Title */}
              <h1 className={`font-display text-3xl sm:text-4xl ${isChainBox ? "lg:text-[38px] xl:text-5xl" : "lg:text-5xl"} text-[#0F2744] leading-[1.1] mb-3 font-medium`}>
                {model.name}
              </h1>

              {/* Subtitle / Headline */}
              <p className="text-[11px] tracking-[0.25em] font-semibold text-[#C7A86A] uppercase mb-4">
                {model.subtitle}
              </p>

              {/* Short Description */}
              <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {model.shortDescription}
              </p>

              {/* SECTION 1: AVAILABLE SIZES */}
              <div className="w-full mb-6 relative" ref={sizeDropdownRef}>
                <div className="flex justify-between items-baseline mb-2.5">
                  <span className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    AVAILABLE SIZES
                  </span>
                  <span className="text-[11px] text-[#C7A86A] font-semibold font-mono">
                    Selected: {activeSize?.dimensions}
                  </span>
                </div>

                {/* Dropdown Selector Trigger */}
                <button
                  type="button"
                  onClick={() => setSizeDropdownOpen((prev) => !prev)}
                  aria-expanded={sizeDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Available size selector"
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-[#C7A86A]/40 bg-white hover:border-[#C7A86A] transition-all duration-200 shadow-2xs cursor-pointer text-left"
                >
                  <div className="flex flex-col min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-[#0F2744] font-mono leading-none">
                        {activeSize?.dimensions}
                      </span>
                      {activeSize?.label && activeSize.label !== activeSize.dimensions && (
                        <span className="text-[10px] font-semibold text-[#C7A86A] uppercase tracking-wider truncate">
                          {activeSize.label}
                        </span>
                      )}
                    </div>
                    {activeSize?.description && (
                      <span className="text-[10px] sm:text-[11px] text-[#0F2744]/65 mt-1 truncate">
                        {activeSize.description}
                      </span>
                    )}
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#FAF8F5] border border-[#0F2744]/10 flex items-center justify-center shrink-0 text-[#0F2744] transition-colors">
                    <ChevronDown
                      className={`h-4 w-4 text-[#0F2744]/70 transition-transform duration-300 ${
                        sizeDropdownOpen ? "rotate-180 text-[#C7A86A]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Dropdown Options List */}
                {sizeDropdownOpen && (
                  <div
                    role="listbox"
                    aria-label="Available sizes options"
                    className="absolute top-full left-0 right-0 mt-1.5 z-40 max-h-60 overflow-y-auto bg-white border border-[#C7A86A]/40 rounded-xl shadow-lg p-1.5 space-y-1 animate-fade-in"
                  >
                    {model.sizes.map((size, idx) => {
                      const isSelected = activeSizeIdx === idx;
                      return (
                        <button
                          key={idx}
                          role="option"
                          aria-selected={isSelected}
                          type="button"
                          onClick={() => {
                            setActiveSizeIdx(idx);
                            setSizeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? "bg-[#F6F0E8] border border-[#C7A86A] text-[#0F2744] shadow-2xs"
                              : "border border-transparent hover:border-[#C7A86A]/30 hover:bg-[#FAF8F5] text-[#0F2744]"
                          }`}
                        >
                          <div className="flex flex-col min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs sm:text-sm font-mono ${
                                  isSelected ? "font-bold text-[#0F2744]" : "font-medium text-[#0F2744]"
                                }`}
                              >
                                {size.dimensions}
                              </span>
                              {size.label && size.label !== size.dimensions && (
                                <span className="text-[10px] font-semibold text-[#C7A86A] uppercase tracking-wider truncate">
                                  {size.label}
                                </span>
                              )}
                            </div>
                            {size.description && (
                              <span className="text-[10px] sm:text-[11px] text-[#0F2744]/65 mt-0.5 line-clamp-1">
                                {size.description}
                              </span>
                            )}
                          </div>
                          {isSelected && (
                            <div className="h-5 w-5 rounded-full bg-[#C7A86A] text-[#0F2744] flex items-center justify-center shrink-0 shadow-xs">
                              <Check className="h-3 w-3 stroke-[2.5]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Accessible hidden select for form compatibility */}
                <select
                  aria-hidden="true"
                  tabIndex={-1}
                  className="sr-only"
                  value={activeSizeIdx}
                  onChange={(e) => setActiveSizeIdx(Number(e.target.value))}
                >
                  {model.sizes.map((size, idx) => (
                    <option key={idx} value={idx}>
                      {size.dimensions}
                    </option>
                  ))}
                </select>

                {/* Active Size Description */}
                {activeSize?.description && (
                  <p className="mt-2 text-[11px] text-[#0F2744]/70 italic">
                    {activeSize.description}
                  </p>
                )}
              </div>

              {/* SECTION 2: MATERIAL & TEXTURE (Desktop only; Mobile is positioned below gallery) */}
              <div className="hidden md:block w-full mb-6">
                {/* Desktop Header (Hidden on Tablet <xl where MobileBoxMaterialSelector renders its own header) */}
                <div className="hidden xl:flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    MATERIAL & TEXTURE
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeMaterial?.name}
                  </span>
                </div>

                {/* Tablet / iPad View (md to <xl): Mobile-style dropdown selector for ALL 8 Box PDPs */}
                <div className="xl:hidden w-full">
                  <MobileBoxMaterialSelector
                    materials={model.materials}
                    activeMaterialId={activeMaterialId}
                    isOpen={mobileMaterialOpen}
                    onToggle={() => setMobileMaterialOpen((prev) => !prev)}
                    onSelectMaterial={(matId) => {
                      handleMaterialSelect(matId);
                      setMobileMaterialOpen(false);
                    }}
                  />
                </div>

                {/* Desktop View (xl+): Preserved desktop material cards layout */}
                {isRingBox ? (
                  /* Permanently expanded 3-column grid for Ring Box on desktop with larger texture thumbnails */
                  <div className="hidden xl:grid grid-cols-3 gap-2.5 w-full">
                    {model.materials.map((mat) => {
                      const isSelected = activeMaterialId === mat.id;
                      return (
                        <button
                          key={mat.id}
                          type="button"
                          onClick={() => handleMaterialSelect(mat.id)}
                          aria-label={`Select ${mat.name} material`}
                          className={`p-2.5 rounded-xl border flex items-center gap-3 text-left transition-all duration-200 cursor-pointer min-w-0 ${
                            isSelected
                              ? "border-[#C7A86A] border-[1.5px] bg-[#F6F0E8] shadow-xs ring-1 ring-[#C7A86A]"
                              : "border-[#0F2744]/15 bg-white hover:border-[#C7A86A]/60 hover:bg-[#FAF8F5]"
                          }`}
                        >
                          {/* Larger, clearly visible texture thumbnail */}
                          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-lg overflow-hidden border border-[#0F2744]/10 bg-[#F6F0E8] shrink-0 relative shadow-2xs">
                            <img
                              src={mat.image}
                              alt={mat.name}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          {/* Full material name without truncation */}
                          <span
                            className={`text-xs leading-tight min-w-0 break-words ${
                              isSelected ? "text-[#0F2744] font-semibold" : "text-[#0F2744]/85 font-medium"
                            }`}
                          >
                            {mat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  /* Approved 3-column grid for all other Box PDPs on desktop */
                  <div className="hidden xl:grid grid-cols-3 gap-2.5 w-full">
                    {model.materials.map((mat) => {
                      const isSelected = activeMaterialId === mat.id;
                      return (
                        <button
                          key={mat.id}
                          type="button"
                          onClick={() => handleMaterialSelect(mat.id)}
                          className={`p-2 sm:p-2.5 rounded-lg border flex items-center gap-2.5 text-left transition-all duration-300 cursor-pointer min-w-0 ${
                            isSelected
                              ? "border-[#C7A86A] border-[1.5px] bg-[#F6F0E8] shadow-xs ring-1 ring-[#C7A86A]"
                              : "border-[#0F2744]/15 bg-white hover:border-[#C7A86A]/60 hover:bg-[#FAF8F5]"
                          }`}
                        >
                          {/* Thumbnail Image */}
                          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-md overflow-hidden border border-[#0F2744]/10 bg-[#F6F0E8] shrink-0 relative">
                            <img
                              src={mat.image}
                              alt={mat.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-xs font-medium text-[#0F2744] leading-snug truncate min-w-0">
                            {mat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* SECTION 3: LOGO FINISH */}
              <div className="w-full mb-6">
                <div className="flex justify-between items-baseline mb-2.5">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    LOGO FINISH
                  </h3>
                  <span className="text-[11px] text-[#C7A86A] font-medium">
                    {activeFinish?.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {model.finishes.map((finish) => (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => handleFinishSelect(finish.id)}
                      className={`p-2.5 border rounded-md text-xs font-medium transition-all duration-300 cursor-pointer text-center ${
                        activeFinishId === finish.id
                          ? "border-[#C7A86A] bg-[#0F2744] text-[#FAF8F5]"
                          : "border-[#C7A86A]/30 text-[#0F2744] bg-white/70 hover:border-[#C7A86A]"
                      }`}
                    >
                      {finish.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 4: COLOUR (Bespoke B2B statement, no swatches) */}
              <div className="w-full mb-8 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xs font-semibold text-[#0F2744] tracking-[0.2em] uppercase">
                    COLOUR
                  </h3>
                  <span className="text-[10px] font-semibold text-[#C7A86A] uppercase tracking-wider">
                    BESPOKE FINISH
                  </span>
                </div>
                <p className="text-xs text-[#0F2744] font-medium mb-1">
                  Customised to your brand requirements.
                </p>
                <p className="text-[11px] text-[#0F2744]/70 leading-relaxed">
                  Colours and finishes can be customised to your brand requirements. Representative product image shown.
                </p>
              </div>

              {/* B2B CTAS */}
              <ProductCTAButtons
                quoteUrl={quoteUrl}
                whatsappUrl={dynamicWhatsappUrl}
                variant={isChainBox ? "boxes" : "default"}
                onQuoteClick={() => setEnquiryOpen(true)}
              />

              {/* Supporting B2B Note */}
              <div className="w-full text-center mt-3.5">
                <span className="text-[11px] font-medium tracking-[0.05em] text-[#0F2744]/60">
                  Custom tooling • Bespoke cavity inserts • Global & Gulf shipping
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL PRODUCT DETAILS SECTION */}
        <section className="bg-white border-y border-[#C7A86A]/20 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MANUFACTURING SPECIFICATIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] leading-tight font-medium">
                Engineered for Luxury Packaging Excellence
              </h2>
            </div>

            {/* Mobile 3-Column Segmented Control Header (Mobile Only) */}
            <div className={`lg:hidden w-full ${isChainBox ? "max-w-xl md:max-w-2xl mx-auto" : ""} mb-8`}>
              <div className="grid grid-cols-3 gap-1 bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-1.5 w-full min-h-[56px]">
                {BOX_TABS.map((tab) => {
                  const isActive = activeDetailTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveDetailTab(tab.id)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all duration-300 cursor-pointer min-h-[48px] ${
                        isActive
                          ? "bg-[#FAF8F5] text-[#0F2744] border border-[#C7A86A]/40 shadow-xs"
                          : "bg-transparent text-[#0F2744]/65 hover:text-[#0F2744] border border-transparent"
                      }`}
                    >
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.04em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[0]}
                      </span>
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-[0.04em] sm:tracking-[0.08em] uppercase leading-tight text-center block">
                        {tab.mobileLines[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Tabs Header */}
            <div className={`hidden lg:flex border-b border-[#0F2744]/10 mb-10 justify-center ${isChainBox ? "gap-6 xl:gap-12" : "gap-12"}`}>
              {BOX_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDetailTab(tab.id)}
                  className={`pb-4 text-xs font-semibold ${isChainBox ? "tracking-[0.14em] xl:tracking-[0.2em]" : "tracking-[0.2em]"} uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer ${
                    activeDetailTab === tab.id
                      ? "text-[#0F2744] font-bold"
                      : "text-[#0F2744]/50 hover:text-[#0F2744]"
                  }`}
                >
                  {tab.label}
                  {activeDetailTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C7A86A]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview & Craftsmanship */}
            {activeDetailTab === "description" && (
              <div className="max-w-4xl mx-auto animate-fade-in">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C7A86A] uppercase mb-2 block">
                  {model.name} MANIFESTO
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#0F2744] leading-tight mb-4 font-medium">
                  {model.heroHeadline}
                </h3>
                <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-8">
                  {model.longDescription}
                </p>

                {/* Highlights Information Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#C7A86A]/20">
                  {model.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <span className="block text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] uppercase mb-1.5">
                        {hl.label}
                      </span>
                      <span className="block font-display text-base sm:text-lg text-[#0F2744] font-semibold">
                        {hl.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Technical Specifications */}
            {activeDetailTab === "specifications" && (
              <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6">
                    <h4 className="font-display text-lg text-[#0F2744] mb-4">Material & Architecture</h4>
                    <div className="space-y-3 text-xs divide-y divide-[#0F2744]/10">
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[#0F2744]/70 font-medium">Outer Shell</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.outerMaterial}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Interior Lining</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.innerMaterial}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Hinge & Mechanism</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.hingeClosure}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Fitted Insert</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.insertType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6">
                    <h4 className="font-display text-lg text-[#0F2744] mb-4">Production & Procurement</h4>
                    <div className="space-y-3 text-xs divide-y divide-[#0F2744]/10">
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[#0F2744]/70 font-medium">Branding Placement</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.brandingPlacement}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Minimum Order (MOQ)</span>
                        <span className="font-bold text-[#C7A86A] text-right">{model.specifications.moq}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Production Lead Time</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.leadTime}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-[#0F2744]/70 font-medium">Sample Prototyping</span>
                        <span className="font-semibold text-[#0F2744] text-right">{model.specifications.sampleAvailability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Tailored Customisation */}
            {activeDetailTab === "customization" && (
              <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {model.customisationFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-2xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-2">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block">
                            BESPOKE EMBELLISHMENT
                          </span>
                        </div>
                        <h4 className="font-display text-xl text-[#0F2744] mb-2 font-medium">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-[#0F2744]/80 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-[#0F2744]/10 flex items-center justify-between text-[11px] text-[#0F2744]/70">
                        <span>Available across all box formats</span>
                        <span className="text-[#C7A86A] font-semibold">Bespoke Tooling</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        {model.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
            <div className="text-center mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                CLIENT ENQUIRIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3.5">
              {model.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#C7A86A]/25 bg-white rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-display text-base text-[#0F2744] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#C7A86A] transition-transform duration-300 shrink-0 ${
                        openFaqIdx === idx ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIdx === idx && (
                    <div className="px-5 pb-5 pt-0 text-xs text-[#0F2744]/75 leading-relaxed border-t border-[#C7A86A]/10 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RELATED PRODUCTS */}
        {relatedModels.length > 0 && (
          <section className="bg-[#F6F0E8] border-t border-[#C7A86A]/20 py-16">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                    COORDINATED FORMATS
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                    Complementary Jewellery Boxes
                  </h2>
                </div>
                <Link
                  href="/boxes/#jewellery-boxes"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#C7A86A] tracking-[0.15em] hover:gap-3 transition-all"
                >
                  VIEW FULL CATALOGUE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {relatedModels.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/boxes/${rel.categorySlug}/${rel.slug}`}
                    className="group flex flex-col bg-white border border-[#C7A86A]/20 rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-500 shadow-xs snap-start shrink-0 w-[78vw] xs:w-[72vw] max-w-[300px] sm:w-auto sm:max-w-none sm:shrink"
                  >
                    <div className="relative aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={BOX_LISTING_IMAGES[rel.slug] || rel.images[0]?.src || "/assets/boxim.jpeg"}
                        alt={rel.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] tracking-[0.2em] text-[#C7A86A] font-semibold uppercase block mb-1">
                          {rel.categoryName}
                        </span>
                        <h3 className="font-display text-lg text-[#0F2744] font-medium group-hover:text-[#C7A86A] transition-colors">
                          {rel.name}
                        </h3>
                        <p className="text-xs text-[#0F2744]/70 mt-2 line-clamp-2 leading-relaxed">
                          {rel.shortDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#C7A86A]/15 flex items-center justify-between">
                        <span className="text-[10px] text-[#0F2744]/60">
                          Available in multiple sizes
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-bold text-[#C7A86A] group-hover:gap-2.5 transition-all">
                          VIEW DETAILS <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile View Full Catalogue CTA */}
              <div className="mt-6 text-center sm:hidden">
                <Link
                  href="/boxes/#jewellery-boxes"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C7A86A] tracking-[0.15em] hover:gap-3 transition-all"
                >
                  VIEW FULL CATALOGUE <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${model.name} enlarged view`}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#FAF8F5] text-[#0F2744] flex items-center justify-center border border-[#C7A86A]/30 hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer shadow-xs"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation controls if multiple images */}
          {model.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  handleImageSelect((activeImageIdx - 1 + model.images.length) % model.images.length)
                }
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#FAF8F5] text-[#0F2744] flex items-center justify-center border border-[#C7A86A]/30 hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  handleImageSelect((activeImageIdx + 1) % model.images.length)
                }
                aria-label="Next image"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#FAF8F5] text-[#0F2744] flex items-center justify-center border border-[#C7A86A]/30 hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 cursor-pointer shadow-xs"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Centered Image against pure white background */}
          <div className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center relative">
            <img
              src={model.images[activeImageIdx]?.src}
              alt={model.images[activeImageIdx]?.alt || model.name}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <SiteFooter />

      {/* ENQUIRY MODAL */}
      {enquiryOpen && (
        <EnquiryModal
          onClose={() => setEnquiryOpen(false)}
          product={productEnquiryData}
        />
      )}
    </div>
  );
}
