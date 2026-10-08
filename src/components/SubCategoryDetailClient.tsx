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

interface CategoryData {
  title: string;
  short: string;
  long: string;
  image: string;
  href?: string;
}

interface SubCategoryDetailClientProps {
  category: CategoryData;
  sub: string;
  allCategories: Record<string, CategoryData>;
  categoryPath: string; // e.g. "pouches", "bags"
  gallery: string[];
  features: { iconName: string; title: string; desc: string }[];
  applications: { iconName: string; label: string }[];
  customizations: { iconName: string; title: string; desc: string }[];
  finishes?: { iconName: string; label: string }[];
  faqs: { q: string; a: string }[];
  ctaText: { eyebrow: string; title: string; desc: string };
  included?: { iconName: string; title: string; desc: string }[];
}

export default function SubCategoryDetailClient({
  category,
  sub,
  allCategories,
  categoryPath,
  gallery,
  features,
  applications,
  customizations,
  finishes,
  faqs,
  ctaText,
  included,
}: SubCategoryDetailClientProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? 0 : (v + 1) % gallery.length));
      if (e.key === "ArrowLeft")  setLightbox((v) => (v === null ? 0 : (v - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, gallery.length]);

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden min-h-[60vh] sm:min-h-[75vh] flex items-center">
          <img src={category.image} alt={category.title} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/30" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-24 w-full">
            <div className="max-w-2xl animate-fade-up">
              <Breadcrumbs
                items={[
                  { label: "Home", to: "/" },
                  { label: categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1), to: `/${categoryPath}` },
                  { label: category.title },
                ]}
              />
              <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-[1.05]">
                {category.title}
              </h1>
              <p className="mt-5 text-sm sm:text-lg text-cream/85 max-w-xl leading-relaxed">
                {category.short}
              </p>
              <a href="#quote" className="btn-gold btn-gold-hover mt-8 inline-flex items-center gap-3 rounded-full px-7 sm:px-9 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[0.28em] font-semibold bg-gold text-navy">
                REQUEST A QUOTE <Lucide.ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-14 sm:py-20 text-center">
            <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-4">OVERVIEW</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
              {categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1)} finished <span className="italic text-gradient-gold">to be kept.</span>
            </h2>
            <p className="mt-6 text-muted-luxe leading-relaxed text-sm sm:text-base">{category.long}</p>
            <p className="mt-4 text-muted-luxe leading-relaxed text-sm sm:text-base">
              Every {category.title.toLowerCase()} order is cut, stitched and branded around your product — protecting
              polished surfaces inside while presenting your brand on the outside.
            </p>
          </div>
        </section>

        {/* INCLUDED PACKAGING PRODUCTS */}
        {included && (
          <>
            <SectionHeader eyebrow="INCLUDED PACKAGING PRODUCTS" title="What's in the collection" />
            <section className="w-full bg-ivory">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {included.map(({ iconName, title, desc }) => {
                    const Icon = getIcon(iconName);
                    return (
                      <div key={title} className="group bg-cream rounded-[14px] p-6 sm:p-7 border border-border-luxe/60 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500">
                        <div className="h-11 w-11 rounded-full bg-gold/10 grid place-items-center text-gold group-hover:bg-gold group-hover:text-cream transition">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 font-display text-lg text-navy">{title}</h3>
                        <p className="mt-2 text-sm text-muted-luxe leading-relaxed">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* FEATURES */}
        <SectionHeader eyebrow="FEATURES" title="Crafted with intent" />
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ iconName, title, desc }) => {
                const Icon = getIcon(iconName);
                return (
                  <div key={title} className="group bg-cream rounded-[14px] p-6 sm:p-7 border border-border-luxe/60 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500">
                    <div className="h-11 w-11 rounded-full bg-gold/10 grid place-items-center text-gold group-hover:bg-gold group-hover:text-cream transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg text-navy">{title}</h3>
                    <p className="mt-2 text-sm text-muted-luxe leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <SectionHeader eyebrow="APPLICATIONS" title="Industries we serve" bg="cream" />
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6">
              {applications.map(({ iconName, label }, idx) => {
                const Icon = getIcon(iconName);
                return (
                  <div key={label + idx} className="flex flex-col items-center text-center gap-3 group">
                    <div className="h-14 w-14 rounded-full border border-gold/40 grid place-items-center text-gold group-hover:bg-gold group-hover:text-cream transition">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] sm:text-xs tracking-wide text-navy">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <SectionHeader eyebrow="CUSTOMIZATION" title="Built around your brand" />
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {customizations.map(({ iconName, title, desc }) => {
                const Icon = getIcon(iconName);
                return (
                  <div key={title} className="bg-white rounded-[14px] p-6 border border-border-luxe/60 transition">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-gold" />
                      <h3 className="font-display text-lg text-navy">{title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-luxe leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINISHING */}
        {finishes && (
          <>
            <SectionHeader eyebrow="FINISHING OPTIONS" title="The final touch" bg="cream" />
            <section className="w-full bg-cream">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                  {finishes.map(({ iconName, label }, i) => {
                    const Icon = getIcon(iconName);
                    return (
                      <div key={label + i} className="flex items-center gap-4 bg-ivory rounded-[12px] px-5 py-4 border border-border-luxe/60 hover:border-gold/60 transition">
                        <Icon className="h-5 w-5 text-gold shrink-0" />
                        <span className="text-sm text-navy">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* GALLERY */}
        <SectionHeader eyebrow="GALLERY" title="Details we obsess over" />
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-[12px] aspect-square bg-cream focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
                >
                  <img src={src} alt={`${category.title} detail ${i + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                  <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <SectionHeader eyebrow="FAQ" title="Frequently asked" bg="cream" />
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-14 sm:pb-20">
            <div className="divide-y divide-border-luxe">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="py-4 sm:py-5">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="flex items-start gap-3 font-display text-base sm:text-lg text-navy group-hover:text-gold transition">
                        <Lucide.HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        {f.q}
                      </span>
                      <Lucide.ChevronDown className={`h-5 w-5 text-gold shrink-0 mt-1 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 mt-3" : "max-h-0"}`}>
                      <p className="text-sm text-muted-luxe leading-relaxed pl-8">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="quote" className="w-full">
          <div className="relative overflow-hidden bg-navy">
            <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24 text-center">
              <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-5">{ctaText.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight">
                {ctaText.title}
              </h2>
              <p className="mt-5 text-sm sm:text-base text-cream/75 max-w-xl mx-auto">
                {ctaText.desc}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#quote" className="btn-gold btn-gold-hover inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-semibold bg-gold text-navy">
                  REQUEST A QUOTE <Lucide.ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.28em] font-medium border border-gold/60 text-cream hover:bg-gold hover:text-navy transition">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore other subcategories */}
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
            <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-5 text-center">EXPLORE MORE</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {Object.entries(allCategories).filter(([s]) => s !== sub).map(([slug, c]) => (
                <Link
                  key={slug}
                  href={c.href || `/${categoryPath}/${slug}`}
                  className="group flex flex-col bg-cream rounded-[12px] overflow-hidden hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-base sm:text-lg text-navy">{c.title}</h4>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] tracking-[0.28em] text-gold">
                      VIEW <Lucide.ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition cursor-pointer"
            aria-label="Close"
          >
            <Lucide.X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? 0 : (v - 1 + gallery.length) % gallery.length)); }}
            className="absolute left-3 sm:left-6 h-11 w-11 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition cursor-pointer"
            aria-label="Previous"
          >
            <Lucide.ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={gallery[lightbox]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-[10px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? 0 : (v + 1) % gallery.length)); }}
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

function SectionHeader({ eyebrow, title, bg = "ivory" }: { eyebrow: string; title: string; bg?: "ivory" | "cream" }) {
  return (
    <section className={`w-full ${bg === "cream" ? "bg-cream" : "bg-ivory"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-6 text-center">
        <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">{title}</h2>
      </div>
    </section>
  );
}
