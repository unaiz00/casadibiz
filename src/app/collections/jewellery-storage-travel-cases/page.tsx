import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Layers, Box } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import { getAllStorageCaseProducts } from "@/data/storage-cases-data";

export const metadata: Metadata = {
  title: "Jewellery Storage & Travel Cases — Bespoke Organisers | CASA DI BIZ",
  description:
    "Thoughtfully designed cases and organisers for storing, travelling with and presenting fine jewellery. Handcrafted wooden boxes, velvet travel cases, stackable trays, and acrylic organisers.",
  openGraph: {
    title: "Jewellery Storage & Travel Cases | CASA DI BIZ",
    description:
      "Bespoke jewellery storage and travel solutions designed to organise, protect and present precious pieces with understated elegance.",
    images: [{ url: "/assets/allsetbox/allset_specialsoft.jpeg" }],
  },
};

export default function JewelleryStorageCollectionPage() {
  const products = getAllStorageCaseProducts();
  const whatsappMsg =
    "Hello CASA DI BIZ, I would like to inquire about the Jewellery Storage & Travel Cases collection.";
  const dynamicWhatsappUrl = `https://wa.me/+971563374248?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744]">
      <SiteHeader />

      <main>
        {/* 1. COMPACT EDITORIAL HERO */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#0F2744]/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-7 sm:pt-10 md:pt-12 pb-8 sm:pb-10">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Collections", to: "/collections" },
                { label: "Jewellery Storage & Travel Cases" },
              ]}
            />
            <p className="mt-6 sm:mt-7 text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
              JEWELLERY ORGANISATION
            </p>
            <h1 className="mt-3 sm:mt-4 font-display font-serif text-3xl sm:text-5xl md:text-6xl text-[#0F2744] leading-[1.1] sm:leading-[1.05]">
              Storage, <span className="italic text-[#C7A86A]">thoughtfully crafted.</span>
            </h1>
            <p className="mt-4 md:mt-5 max-w-2xl text-sm sm:text-base text-[#0F2744]/75 font-sans leading-relaxed">
              Bespoke jewellery storage and travel solutions designed to organise, protect and
              present precious pieces with understated elegance.
            </p>
          </div>
        </section>

        {/* 2. PRODUCT GRID SECTION */}
        <section className="w-full bg-[#FAF8F5]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
            <div className="mb-8 sm:mb-10">
              <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#C7A86A] uppercase block mb-1">
                STORAGE & PRESENTATION RANGE
              </span>
              <h2 className="font-display font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F2744]">
                Curated Cases & Organisers
              </h2>
            </div>

            {/* Desktop: 4 Columns (lg: 1024px+) | Tablet: 2 Columns | Mobile: 1 Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {products.map((product, i) => (
                <Link
                  key={product.id}
                  href={`/collections/jewellery-storage-travel-cases/${product.slug}`}
                  className="group flex flex-col h-full rounded-[16px] sm:rounded-[18px] bg-white border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/60 overflow-hidden shadow-[0_3px_14px_rgba(15,39,68,0.03)] hover:shadow-[0_8px_22px_rgba(15,39,68,0.06)] transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square bg-white w-full border-b border-[#0F2744]/[0.06]">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 h-8 w-8 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-[#0F2744]/10 text-[#0F2744] flex items-center justify-center shadow-xs group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] group-hover:border-[#0F2744] transition-all duration-300">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Product Content Section */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <span className="text-[9.5px] sm:text-[10px] tracking-[0.2em] font-semibold text-[#C7A86A] uppercase block mb-1">
                        {product.subtitle}
                      </span>
                      <h3 className="font-display font-serif text-lg sm:text-xl text-[#0F2744] leading-snug group-hover:text-[#C7A86A] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] text-[#0F2744]/75 leading-relaxed font-sans line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Badges & View Details CTA */}
                    <div className="mt-5 pt-3.5 border-t border-[#0F2744]/[0.08] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-block px-2 py-0.5 text-[9.5px] font-medium tracking-wider text-[#0F2744]/70 bg-[#F6F0E8] rounded">
                          {product.productType}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] tracking-[0.18em] font-sans font-semibold text-[#C7A86A] uppercase group-hover:text-[#0F2744] transition-colors duration-300 shrink-0">
                        VIEW DETAILS
                        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C7A86A] group-hover:text-[#0F2744]" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MATERIAL & CRAFTSMANSHIP HIGHLIGHTS */}
        <section className="w-full bg-[#F6F0E8] border-y border-[#0F2744]/5 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
                ENGINEERED FOR PRECIOUS PIECES
              </p>
              <h2 className="mt-2.5 font-display font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F2744]">
                The Craft of Fine Jewellery Storage
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#0F2744]/70 leading-relaxed font-sans">
                Each organiser balances structural integrity with gentle, non-reactive interior linings
                designed to prevent scratches, oxidisation, and travel friction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Anti-Tarnish Linings",
                  desc: "Treated micro-suede and plush velvet interiors shield gold, platinum, and pearls from discoloration.",
                },
                {
                  icon: Layers,
                  title: "Modular Partitioning",
                  desc: "Flexible, interchangeable compartment grids designed to hold rings, necklaces, watches, and bangles securely.",
                },
                {
                  icon: Sparkles,
                  title: "Bespoke Brand Detailing",
                  desc: "Precision hot-foil debossing, laser-engraved plaques, and custom die-cast metal hardware pullers.",
                },
                {
                  icon: Box,
                  title: "Crush-Resistant Protection",
                  desc: "Rigid hardwood, reinforced composite, and cast acrylic cores ensure durability for international retail and travel.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#C7A86A]/20 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-full bg-[#FAF8F5] border border-[#C7A86A]/30 flex items-center justify-center text-[#C7A86A] mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-serif text-lg text-[#0F2744] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#0F2744]/75 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. RESTRAINED CLOSING ENQUIRY SECTION */}
        <section id="quote" className="w-full bg-[#0F2744] text-[#FAF8F5]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24 text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-4">
              BESPOKE JEWELLERY STORAGE
            </p>
            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight">
              Present your jewellery with enduring sophistication.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto font-sans leading-relaxed">
              Tell us your requirements and our packaging design specialists will provide material samples,
              custom dimensions, and tailored volume costing.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?category=jewellery-storage-travel-cases&inquiry=quote"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.24em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] transition-all duration-300 shadow-md"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={dynamicWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.24em] font-semibold border border-[#C7A86A]/70 text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" /> ENQUIRE ON WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
