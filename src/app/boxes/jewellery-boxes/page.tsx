import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Ruler, Layers, Check } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import { getAllBoxCategories } from "@/data/boxes-data";

export const metadata: Metadata = {
  title: "Jewellery Boxes — Bespoke Luxury Packaging | CASA DI BIZ",
  description: "Explore CASA DI BIZ bespoke jewellery box collections — ring boxes, earring boxes, chain boxes, pendant boxes, bracelet boxes, necklace boxes, bangle boxes and full suite boxes.",
  openGraph: {
    title: "Jewellery Boxes by CASA DI BIZ",
    description: "Bespoke luxury jewellery packaging engineered for fine jewellery retailers and luxury brands.",
    images: [{ url: "/assets/imsec2.jpeg" }],
  },
};

export default function JewelleryBoxesPage() {
  const categories = getAllBoxCategories();

  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Boxes", to: "/boxes" },
    { label: "Jewellery Boxes" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      <SiteHeader />

      <main className="text-[#0F2744]">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden min-h-[55vh] flex items-center bg-[#F6F0E8] border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 w-full">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8 max-w-3xl">
              <span className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-bold uppercase block mb-3">
                BESPOKE JEWELLERY PACKAGING
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0F2744] leading-[1.05] font-medium">
                Fitted interiors that <span className="italic text-gradient-gold">cradle every piece.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#0F2744]/80 leading-relaxed font-sans max-w-2xl">
                Explore our eight bespoke jewellery box categories, each engineered around specific jewellery silhouettes with precision plush linings, spring closures, and custom metallic branding.
              </p>
            </div>
          </div>
        </section>

        {/* 8 JEWELLERY BOX CATEGORIES GRID */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="flex justify-between items-baseline mb-10 pb-4 border-b border-[#C7A86A]/20">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-bold uppercase block mb-1">
                JEWELLERY CATEGORIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                Select a Jewellery Category
              </h2>
            </div>
            <span className="text-xs text-[#0F2744]/60 font-medium">8 Collections</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/boxes/${cat.slug}`}
                className="group flex flex-col bg-white border border-[#C7A86A]/25 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:border-[#C7A86A] transition-all duration-500 shadow-xs"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="relative aspect-[16/11] bg-[#F6F0E8] overflow-hidden">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#0F2744]/90 px-2.5 py-1 rounded text-[9px] font-medium tracking-wider text-[#FAF8F5]">
                    {cat.modelSlugs.length} models
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl text-[#0F2744] font-medium group-hover:text-[#C7A86A] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#0F2744]/75 leading-relaxed line-clamp-2">
                      {cat.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#C7A86A]/15 flex items-center justify-between">
                    <span className="text-[11px] text-[#0F2744]/60">
                      Bespoke Tooling
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-bold text-[#C7A86A] group-hover:gap-2.5 transition-all">
                      EXPLORE <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CRAFTSMANSHIP & MATERIALS */}
        <section className="w-full bg-[#F6F0E8] py-16 sm:py-24 border-t border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-bold uppercase block mb-2">
                BESPOKE MANUFACTURING STANDARDS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium leading-tight">
                Engineered for High Jewellery & Fine Watches
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-white border border-[#C7A86A]/25 rounded-xl p-6 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-[#C7A86A]/15 text-[#C7A86A] grid place-items-center mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-[#0F2744] font-semibold mb-2">Anti-Tarnish Linings</h3>
                <p className="text-xs text-[#0F2744]/75 leading-relaxed">
                  Sulfur-free velvet, microfiber, and silk linings formulated to protect white gold, platinum, and precious stones from oxidation.
                </p>
              </div>

              <div className="bg-white border border-[#C7A86A]/25 rounded-xl p-6 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-[#C7A86A]/15 text-[#C7A86A] grid place-items-center mb-4">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-[#0F2744] font-semibold mb-2">1200+ GSM Rigid Core</h3>
                <p className="text-xs text-[#0F2744]/75 leading-relaxed">
                  Heavyweight dense board wrapped meticulously by hand with sharp 90-degree bevels and weighted tactile hand feel.
                </p>
              </div>

              <div className="bg-white border border-[#C7A86A]/25 rounded-xl p-6 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-[#C7A86A]/15 text-[#C7A86A] grid place-items-center mb-4">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-[#0F2744] font-semibold mb-2">Metallic Embellishment</h3>
                <p className="text-xs text-[#0F2744]/75 leading-relaxed">
                  Hot foil stamping in gold and silver, 3D electroplated metallic badges, and blind debossing tailored to your brand crest.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
