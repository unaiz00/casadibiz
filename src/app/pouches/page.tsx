import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Ruler } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import { POUCH_PRODUCTS } from "@/data/pouches-data";

export const metadata: Metadata = {
  title: "Luxury Packaging Pouches | Bespoke Pouches Manufacturer | CASA DI BIZ",
  description:
    "Explore CASA DI BIZ bespoke luxury packaging pouches — Matte Grosgrain, Double-Faced Satin, Woven Edge Satin, Cotton/Nylon Blend, and Sheer Organza crafted for jewellery, watches and luxury accessories.",
  alternates: {
    canonical: "https://casadibiz.com/pouches",
  },
  openGraph: {
    title: "Luxury Packaging Pouches by CASA DI BIZ",
    description:
      "Five signature luxury pouch material families with custom Pantone dyeing, tailored linings, and hot foil branding.",
    url: "https://casadibiz.com/pouches",
    siteName: "CASA DI BIZ",
    images: [{ url: "/assets/pouches/matte-grosgrain.jpg" }],
    type: "website",
  },
};

export default function PouchesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://casadibiz.com/pouches#webpage",
        name: "Bespoke Packaging Pouches | CASA DI BIZ",
        description:
          "Five luxury packaging pouch constructions: Matte Grosgrain, Double-Faced Satin, Woven Edge Satin, Cotton/Nylon Blend, and Sheer Organza with custom Pantone matching and foil branding.",
        url: "https://casadibiz.com/pouches",
        isPartOf: {
          "@type": "WebSite",
          name: "CASA DI BIZ Luxury Packaging",
          url: "https://casadibiz.com",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://casadibiz.com/pouches#itemlist",
        name: "CASA DI BIZ Pouch Materials",
        itemListElement: POUCH_PRODUCTS.map((prod, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: prod.name,
          url: `https://casadibiz.com/pouches/${prod.slug}`,
          image: `https://casadibiz.com${prod.images[0]?.src}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HEADER */}
      <SiteHeader />

      <main>
        {/* 2. HERO SECTION */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#C7A86A]/25 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-7 pb-10 sm:pt-9 sm:pb-12">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Pouches" }]} />

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-bold uppercase">
                BESPOKE POUCH COLLECTION
              </span>
              <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
              <span className="text-[11px] tracking-[0.2em] text-[#0F2744]/70 font-semibold uppercase">
                MANUFACTURER CATALOGUE
              </span>
            </div>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-[1.12] max-w-4xl font-medium">
              Luxury packaging pouches engineered to{" "}
              <span className="italic text-[#C7A86A]">protect and present.</span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-[#0F2744]/80 leading-relaxed font-sans">
              Five signature luxury pouch constructions across refined grosgrain, double-faced satin, woven edge satin, cotton-nylon blends, and sheer organza, with calibrated dimensions and bespoke Pantone dyeing.
            </p>

            {/* Quick B2B Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#0F2744]/10 text-xs">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Anti-Tarnish Linings</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Custom Dimensions & Proportions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Pantone Colour Formulation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Hot Foil & Engraved Hardware</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. POUCH COLLECTION GRID */}
        <section className="w-full bg-[#FAF8F5] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                  OUR POUCH MATERIALS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                  Select the pouch material tailored to your product.
                </h2>
              </div>
              <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#0F2744]/75 max-w-lg leading-relaxed">
                Five distinct fabric constructions designed for different luxury expressions, from structured matte grosgrain to fluid satin and natural cotton blends.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {POUCH_PRODUCTS.map((prod) => (
                <div
                  key={prod.slug}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/25 transition-all duration-300 hover:border-[#C7A86A]/70 group shadow-xs"
                >
                  <Link
                    href={`/pouches/${prod.slug}`}
                    className="relative block aspect-[4/3] bg-[#F6F0E8] overflow-hidden"
                  >
                    <img
                      src={prod.images[0]?.src || "/assets/cats/pouch.jpeg"}
                      alt={prod.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-1.5">
                        {prod.keyCharacteristic}
                      </span>

                      <h3 className="font-display text-lg sm:text-xl text-[#0F2744] group-hover:text-[#C7A86A] transition-colors leading-snug">
                        <Link href={`/pouches/${prod.slug}`}>{prod.name}</Link>
                      </h3>

                      <p className="mt-2 text-xs text-[#0F2744]/80 leading-relaxed font-sans">
                        {prod.shortDescription}
                      </p>

                      <div className="mt-3.5 pt-3.5 border-t border-[#0F2744]/10 space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-[#0F2744]/60 font-semibold uppercase tracking-wider text-[9px]">
                            FINISH
                          </span>
                          <span className="font-medium text-[#0F2744]">{prod.finish}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#0F2744]/60 font-semibold uppercase tracking-wider text-[9px]">
                            CLOSURE
                          </span>
                          <span className="font-medium text-[#0F2744]">{prod.closure}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                      <Link
                        href={`/pouches/${prod.slug}`}
                        className="w-full inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-[11px] tracking-[0.2em] font-bold bg-[#F6F0E8] text-[#0F2744] group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] transition-all duration-300"
                      >
                        <span>EXPLORE POUCH</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
