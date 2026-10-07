"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

// Helper to resolve icon components from lucide-react dynamically
const getIcon = (name: string): React.ComponentType<{ className?: string }> => {
  const IconComponent = (Lucide as any)[name];
  return IconComponent || Lucide.HelpCircle;
};

// ==========================================
// 1. REUSABLE SUB-COMPONENTS
// ==========================================

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center pb-6">
      <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl text-navy leading-tight">{title}</h2>
    </div>
  );
}

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-luxe/40 border-y border-border-luxe/40">
      {faqs.map((faq, i) => {
        const open = openFaq === i;
        return (
          <div key={i} className="py-4.5 sm:py-5.5">
            <button
              onClick={() => setOpenFaq(open ? null : i)}
              className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
            >
              <span className="flex items-start gap-3.5 font-display text-base sm:text-lg text-navy group-hover:text-gold transition-colors">
                <Lucide.HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                {faq.q}
              </span>
              <Lucide.ChevronDown
                className={`h-5 w-5 text-gold shrink-0 mt-1 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? "max-h-60 mt-3.5" : "max-h-0"
              }`}
            >
              <p className="text-sm text-muted-luxe leading-relaxed pl-8.5">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function RequestQuoteCTA({
  ctaText = {
    eyebrow: "BESPOKE COMMISSION",
    title: "Request Custom Product Packaging Solutions",
    desc: "Collaborate with our structural designers to build packaging collections configured to your brand requirements.",
  },
}: {
  ctaText?: { eyebrow?: string; title?: string; desc?: string };
}) {
  return (
    <div className="relative overflow-hidden bg-navy rounded-2xl shadow-xl">
      {/* Soft gold decorative vector line */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-80 h-80">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0 150C80 150 120 50 200 50" stroke="#C7A86A" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
        {ctaText.eyebrow && (
          <p className="text-[10px] sm:text-xs tracking-[0.32em] text-gold font-semibold mb-5 uppercase">
            {ctaText.eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight max-w-2xl mx-auto">
          {ctaText.title}
        </h2>
        {ctaText.desc && (
          <p className="mt-6 text-sm sm:text-base text-cream/75 max-w-xl mx-auto leading-relaxed">
            {ctaText.desc}
          </p>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="btn-gold btn-gold-hover inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-semibold bg-gold text-navy"
          >
            CONTACT A SPECIALIST <Lucide.ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:hello@casadibiz.com"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-semibold border border-gold/40 text-cream hover:bg-cream hover:text-navy transition-all duration-300"
          >
            EMAIL INQUIRY
          </a>
        </div>
      </div>
    </div>
  );
}

export function SpecificationTable({ items }: { items: { label: string; value: string; desc?: string }[] }) {
  return (
    <div className="max-w-3xl mx-auto bg-cream border border-border-luxe/60 rounded-2xl overflow-hidden shadow-xs">
      <div className="divide-y divide-border-luxe/40">
        {items.map((spec, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 hover:bg-ivory/20 transition-colors">
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-gold uppercase self-center">
              {spec.label}
            </div>
            <div className="sm:col-span-2 text-sm text-navy/85 leading-relaxed self-center">
              <p className="font-semibold">{spec.value}</p>
              {spec.desc && <p className="text-xs text-muted-luxe mt-1">{spec.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImageGallery({ images, onImageClick }: { images: string[]; onImageClick: (idx: number) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => onImageClick(i)}
          className="group relative overflow-hidden rounded-[12px] aspect-square bg-cream focus:outline-none focus:ring-1 focus:ring-gold cursor-zoom-in"
        >
          <img
            src={src}
            alt={`Reference example ${i + 1}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-all duration-300" />
        </button>
      ))}
    </div>
  );
}

export function FeatureGrid({
  items,
  bgType = "ivory",
}: {
  items: { title?: string; name?: string; desc: string; iconName?: string }[];
  bgType?: "ivory" | "cream";
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => {
        const titleText = item.title || item.name || "";
        const Icon = item.iconName ? getIcon(item.iconName) : Lucide.Sliders;
        return (
          <div
            key={idx}
            className={`group rounded-[14px] p-6 sm:p-8 border border-border-luxe/50 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500 ${
              bgType === "cream" ? "bg-ivory" : "bg-cream"
            }`}
          >
            <div className="h-11 w-11 rounded-full bg-gold/10 grid place-items-center text-gold group-hover:bg-gold group-hover:text-cream transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            {titleText && <h3 className="mt-5 font-display text-lg text-navy font-semibold">{titleText}</h3>}
            <p className="mt-3 text-sm text-muted-luxe leading-relaxed">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// 2. MAIN COMPONENT (REPURPOSED)
// ==========================================

export interface ProductDetailClientProps {
  category: {
    title: string;
    subtitle?: string;
    shortDescription: string;
    longDescription: string;
    heroImages: string[];
    breadcrumbs: { label: string; to?: string }[];
  };
  productImages?: string[]; // Section 3
  materials?: { name: string; desc: string; type?: string; image?: string }[]; // Section 4
  printing?: { name: string; desc: string; iconName?: string }[]; // Section 5
  handles?: { name: string; desc: string; iconName?: string }[]; // Section 6
  sizes?: { label: string; value: string; desc?: string }[]; // Section 7
  finishes?: { name: string; desc: string; iconName?: string }[]; // Section 8
  customisations?: { title: string; desc: string; iconName?: string }[]; // Section 9
  applications?: { label: string; desc?: string; iconName?: string }[]; // Section 10
  faqs?: { q: string; a: string }[]; // Section 11
  ctaText?: { eyebrow?: string; title?: string; desc?: string }; // Section 12
}

export default function ProductDetailClient({
  category,
  productImages = [],
  materials = [],
  printing = [],
  handles = [],
  sizes = [],
  finishes = [],
  customisations = [],
  applications = [],
  faqs = [],
  ctaText,
}: ProductDetailClientProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightbox, setLightbox] = useState<{ source: "hero" | "product"; index: number } | null>(null);

  const allImages = lightbox?.source === "hero" ? category.heroImages : productImages;

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((v) => (v === null ? null : { ...v, index: (v.index + 1) % allImages.length }));
      }
      if (e.key === "ArrowLeft") {
        setLightbox((v) => (v === null ? null : { ...v, index: (v.index - 1 + allImages.length) % allImages.length }));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, allImages.length]);

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />

      <main className="text-navy">
        {/* 1. HERO & GENERAL METADATA */}
        <section className="relative pt-4 md:pt-6 pb-16 sm:pb-24 border-b border-border-luxe/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 md:mb-10">
              <Breadcrumbs items={category.breadcrumbs} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start animate-fade-up">
              {/* Top Hero Gallery (Left) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Main Viewport */}
                {category.heroImages && category.heroImages.length > 0 && (
                  <div
                    onClick={() => setLightbox({ source: "hero", index: activeImageIdx })}
                    className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border-luxe/60 bg-cream shadow-xs cursor-zoom-in"
                  >
                    <img
                      src={category.heroImages[activeImageIdx]}
                      alt={`${category.title} hero view`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors" />
                    <div className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-navy/85 backdrop-blur-xs text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Lucide.Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Thumbnails row */}
                {category.heroImages && category.heroImages.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                    {category.heroImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative h-20 sm:h-24 aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 shrink-0 snap-start cursor-pointer ${
                          activeImageIdx === idx
                            ? "border-gold ring-1 ring-gold shadow-md"
                            : "border-border-luxe/60 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt={`${category.title} thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Subcategory Summary (Right) */}
              <div className="lg:col-span-5 flex flex-col items-start pt-2">
                {category.subtitle && (
                  <span className="text-gold tracking-[0.3em] font-semibold text-[10px] sm:text-xs uppercase mb-3 block">
                    {category.subtitle}
                  </span>
                )}
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-5">
                  {category.title}
                </h1>
                
                <div className="w-12 h-[1px] bg-gold/50 mb-6" />

                <p className="text-[#0F2744]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {category.shortDescription}
                </p>

                {sizes && sizes.length > 0 && (
                  <div className="w-full bg-cream border border-border-luxe/50 rounded-xl p-5 mb-8">
                    <span className="text-[11px] tracking-[0.2em] font-semibold text-gold uppercase mb-3 block">
                      DIMENSION SUMMARY
                    </span>
                    <ul className="space-y-2.5">
                      {sizes.slice(0, 3).map((sz, i) => (
                        <li key={i} className="flex justify-between text-xs text-navy/90 border-b border-border-luxe/30 pb-2 last:border-b-0 last:pb-0">
                          <span className="font-medium text-navy/70">{sz.label}</span>
                          <span className="font-semibold text-right">{sz.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="#quote"
                    className="btn-gold btn-gold-hover text-center inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-semibold bg-gold text-navy"
                  >
                    REQUEST SPEC SHEET <Lucide.ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#overview"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-medium border border-navy/20 hover:border-gold/60 transition-colors text-center text-navy cursor-pointer"
                  >
                    VIEW SPECS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. NARRATIVE OVERVIEW */}
        <section id="overview" className="w-full bg-cream py-16 sm:py-24 border-b border-border-luxe/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-4">PRODUCTION OVERVIEW</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
              Bespoke packaging finished <span className="italic text-gradient-gold">to your specifications.</span>
            </h2>
            <p className="mt-8 text-muted-luxe leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {category.longDescription}
            </p>
            <p className="mt-5 text-muted-luxe leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              We design and configure every structural element to complement your brand identity. As a direct packaging manufacturer, we manage color matching, precise paperboard creasing, handle integration, and clean foil layouts under strict checks.
            </p>
          </div>
        </section>

        {/* 3. PRODUCT IMAGES / DETAIL GALLERY */}
        {productImages && productImages.length > 0 && (
          <section className="w-full bg-ivory py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="GALLERY" title="Reference Production Examples" />
              <div className="mt-12">
                <ImageGallery
                  images={productImages}
                  onImageClick={(idx) => setLightbox({ source: "product", index: idx })}
                />
              </div>
            </div>
          </section>
        )}

        {/* 4. MATERIAL SPECIFICATIONS */}
        {materials && materials.length > 0 && (
          <section className="w-full bg-cream py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="MATERIALS" title="Luxury Paperboards & Wrapping Options" />

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {materials.map((mat, i) => (
                  <div key={i} className="flex flex-col bg-ivory rounded-2xl overflow-hidden border border-border-luxe/50 shadow-xs hover:border-gold/40 transition">
                    {mat.image ? (
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                        <img src={mat.image} alt={mat.name} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-navy/5 flex items-center justify-center text-navy/20 border-b border-border-luxe/30">
                        <Lucide.Layers className="h-12 w-12 stroke-[1]" />
                      </div>
                    )}
                    <div className="p-6">
                      {mat.type && (
                        <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase mb-1.5 block">
                          {mat.type}
                        </span>
                      )}
                      <h4 className="font-display text-lg text-navy font-semibold mb-2.5">{mat.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-luxe leading-relaxed">{mat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. PRINTING OPTIONS */}
        {printing && printing.length > 0 && (
          <section className="w-full bg-ivory py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="PRINTING" title="Branding & Print Application Methods" />
              <div className="mt-12">
                <FeatureGrid items={printing} bgType="ivory" />
              </div>
            </div>
          </section>
        )}

        {/* 6. HANDLE OPTIONS */}
        {handles && handles.length > 0 && (
          <section className="w-full bg-cream py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="HANDLES" title="Luxury Handle Threading Options" />
              <div className="mt-12">
                <FeatureGrid items={handles} bgType="cream" />
              </div>
            </div>
          </section>
        )}

        {/* 7. AVAILABLE SIZES */}
        {sizes && sizes.length > 0 && (
          <section className="w-full bg-ivory py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="SIZING" title="Standard Sizing Specifications" />
              <div className="mt-12">
                <SpecificationTable items={sizes} />
              </div>
            </div>
          </section>
        )}

        {/* 8. FINISHES */}
        {finishes && finishes.length > 0 && (
          <section className="w-full bg-cream py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="FINISHES" title="Specialty Finishing Selections" />
              <div className="mt-12">
                <FeatureGrid items={finishes} bgType="cream" />
              </div>
            </div>
          </section>
        )}

        {/* 9. CUSTOMISATION OPTIONS */}
        {customisations && customisations.length > 0 && (
          <section className="w-full bg-ivory py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="CUSTOMIZATION" title="Structural Packaging Upgrades" />
              <div className="mt-12">
                <FeatureGrid items={customisations} bgType="ivory" />
              </div>
            </div>
          </section>
        )}

        {/* 10. APPLICATIONS */}
        {applications && applications.length > 0 && (
          <section className="w-full bg-cream py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="APPLICATIONS" title="Optimized for Premium Sectors" />

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {applications.map((app, idx) => {
                  const Icon = app.iconName ? getIcon(app.iconName) : Lucide.HelpCircle;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center group">
                      <div className="h-16 w-16 rounded-full border border-gold/45 grid place-items-center text-gold bg-ivory group-hover:bg-gold group-hover:text-cream transition-all duration-300 shadow-xs mb-3.5">
                        <Icon className="h-6.5 w-6.5" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-navy mb-1">{app.label}</span>
                      {app.desc && <span className="text-[10px] text-muted-luxe leading-tight px-2">{app.desc}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 11. FAQ Accordions */}
        {faqs && faqs.length > 0 && (
          <section className="w-full bg-ivory py-16 sm:py-24 border-b border-border-luxe/40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <SectionHeader eyebrow="FAQ" title="Manufacturing Q&A" />
              <div className="mt-12">
                <FAQ faqs={faqs} />
              </div>
            </div>
          </section>
        )}

        {/* 12. REQUEST QUOTE CTA */}
        <section id="quote" className="w-full">
          <RequestQuoteCTA ctaText={ctaText} />
        </section>
      </main>

      <SiteFooter />

      {/* LIGHTBOX MODAL */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition cursor-pointer"
            aria-label="Close"
          >
            <Lucide.X className="h-5 w-5" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) =>
                v === null ? null : { ...v, index: (v.index - 1 + allImages.length) % allImages.length }
              );
            }}
            className="absolute left-3 sm:left-6 h-11 w-11 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition cursor-pointer"
            aria-label="Previous"
          >
            <Lucide.ChevronLeft className="h-5 w-5" />
          </button>

          <img
            src={allImages[lightbox.index]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) =>
                v === null ? null : { ...v, index: (v.index + 1) % allImages.length }
              );
            }}
            className="absolute right-3 sm:right-6 h-11 w-11 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition cursor-pointer"
            aria-label="Next"
          >
            <Lucide.ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
