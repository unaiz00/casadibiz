import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Bespoke Packaging Ribbons — Cotton/Nylon, Satin, Grosgrain & Organza | CASA DI BIZ",
  description:
    "Explore CASA DI BIZ luxury bespoke packaging ribbons: Cotton/Nylon blend, Woven Edge Polyester Satin, Matte Grosgrain, and Sheer Organza with calibrated widths, Pantone colour matching, and custom foil branding.",
  alternates: {
    canonical: "https://casadibiz.com/ribbons",
  },
  openGraph: {
    title: "Bespoke Packaging Ribbons | CASA DI BIZ Luxury Packaging",
    description:
      "Four refined ribbon constructions engineered for fine jewellery, luxury retail, beauty, and bespoke gift packaging.",
    url: "https://casadibiz.com/ribbons",
    siteName: "CASA DI BIZ",
    images: [
      {
        url: "/assets/cats/ribbon.png",
        width: 1200,
        height: 800,
        alt: "CASA DI BIZ luxury packaging ribbon collection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Packaging Ribbons | CASA DI BIZ",
    description:
      "Luxury custom packaging ribbons crafted across satin, grosgrain, cotton-blend, and organza weaves.",
    images: ["/assets/cats/ribbon.png"],
  },
};

// 4 Ribbon Core Specifications for Product Cards
const RIBBON_CORE_PRODUCTS = [
  {
    slug: "cotton-nylon-blend",
    name: "Cotton / Nylon Blend",
    conciseDescription: "Soft, tactile and naturally understated.",
    bestSuitedTo: "Boutique packaging and natural luxury presentations.",
    widths: "10 mm · 15 mm · 25 mm · 38 mm",
    image: "/assets/cotton_nylon_ribbon.jpeg",
    alt: "CASA DI BIZ cotton nylon blend packaging ribbon",
    keyCharacteristic: "Organic Soft Hand-Feel",
    weaveHighlight: "Cotton Warp with Reinforcing Nylon Weft",
  },
  {
    slug: "woven-edge-polyester-satin",
    name: "Woven Edge Polyester Satin",
    conciseDescription: "Smooth satin with a refined woven edge.",
    bestSuitedTo: "Luxury gifting, apparel packaging and presentation boxes.",
    widths: "10 mm · 15 mm · 25 mm · 38 mm",
    image: "/assets/woven_edge _polyester_satin_ribbon.jpeg",
    alt: "CASA DI BIZ woven edge polyester satin ribbon",
    keyCharacteristic: "Mirror Lustre & Non-Fray Selvedge",
    weaveHighlight: "Double-Faced High-Filament Satin",
  },
  {
    slug: "matte-grosgrain",
    name: "Matte Grosgrain",
    conciseDescription: "Structured ribbed texture with a refined matte finish.",
    bestSuitedTo: "Luxury boxes, structured bows and premium gifting.",
    widths: "10 mm · 15 mm · 25 mm · 38 mm",
    image: "/assets/matte_grosgrain_ribbed.jpeg",
    alt: "CASA DI BIZ matte grosgrain ribbon spool",
    keyCharacteristic: "Architectural Ribs & Firm Bow Hold",
    weaveHighlight: "Corded Transverse Rib Construction",
  },
  {
    slug: "sheer-organza",
    name: "Sheer Organza",
    conciseDescription: "Light, translucent and delicate.",
    bestSuitedTo: "Floral arrangements, fragrance packaging and delicate gifting.",
    widths: "10 mm · 15 mm · 25 mm · 38 mm",
    image: "/assets/sheer_organza_transparent_ribbon.jpeg",
    alt: "CASA DI BIZ sheer organza packaging ribbon",
    keyCharacteristic: "Translucent Ethereal Gauze",
    weaveHighlight: "Fine Open Mesh with Woven Satin Border",
  },
];

export default function RibbonsHubPage() {
  // JSON-LD Structured Data for the Ribbon Collection
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://casadibiz.com/ribbons#webpage",
        name: "Bespoke Packaging Ribbons | CASA DI BIZ",
        description:
          "Four luxury packaging ribbon constructions: Cotton/Nylon blend, Woven Edge Polyester Satin, Matte Grosgrain, and Sheer Organza with custom widths and hot foil branding.",
        url: "https://casadibiz.com/ribbons",
        isPartOf: {
          "@type": "WebSite",
          name: "CASA DI BIZ Luxury Packaging",
          url: "https://casadibiz.com",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://casadibiz.com/ribbons#itemlist",
        name: "CASA DI BIZ Ribbon Materials",
        itemListElement: RIBBON_CORE_PRODUCTS.map((prod, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: prod.name,
          url: `https://casadibiz.com/ribbons/${prod.slug}`,
          image: `https://casadibiz.com${prod.image}`,
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
        {/* 2. COMPACT HERO */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#C7A86A]/25 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-6 pb-7 sm:pt-8 sm:pb-9">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Ribbons" }]} />

            <div className="mt-4 sm:mt-5 flex items-center gap-3">
              <span className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-bold uppercase">
                BESPOKE RIBBON COLLECTION
              </span>
              <span className="h-1 w-1 rounded-full bg-[#C7A86A]" />
              <span className="text-[11px] tracking-[0.2em] text-[#0F2744]/70 font-semibold uppercase">
                MANUFACTURER CATALOGUE
              </span>
            </div>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-[1.12] max-w-4xl font-medium">
              Bespoke packaging ribbons engineered to{" "}
              <span className="italic text-[#C7A86A]">complete the brand ritual.</span>
            </h1>

            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-[#0F2744]/80 leading-relaxed font-sans">
              Premium ribbons in satin, grosgrain, cotton blends and organza, tailored to your packaging.
            </p>
          </div>
        </section>

        {/* 3. RIBBON COLLECTION GRID */}
        <section id="our-ribbons" className="w-full bg-[#FAF8F5] pt-8 pb-14 sm:pt-10 sm:pb-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-1.5 block">
                OUR MATERIALS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                Explore Our Ribbon Materials
              </h2>
            </div>

            {/* Ribbon Material Cards Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {RIBBON_CORE_PRODUCTS.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/ribbons/${prod.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/25 transition-all duration-300 hover:border-[#C7A86A]/70 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A86A] focus-visible:ring-offset-2"
                >
                  {/* Clean Product Photography: No overlays, no pills, no code badges */}
                  <div className="relative block aspect-[4/3] bg-[#F6F0E8] overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details Outside Photography */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Customer-Facing Product Name */}
                      <h3 className="font-display text-lg sm:text-xl text-[#0F2744] group-hover:text-[#C7A86A] transition-colors leading-snug font-medium">
                        {prod.name}
                      </h3>

                      {/* Concise Description */}
                      <p className="mt-2 text-xs sm:text-[13px] text-[#0F2744]/75 leading-relaxed font-sans">
                        {prod.conciseDescription}
                      </p>
                    </div>

                    {/* Minimal Card Action */}
                    <div className="pt-5 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#C7A86A] group-hover:text-[#0F2744] group-hover:gap-2.5 transition-all">
                        EXPLORE RIBBON <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* 4. MATERIAL / WEAVE STORY */}
        <section id="material-expressions" className="w-full bg-[#FAF8F5] py-14 sm:py-20 border-t border-[#C7A86A]/25">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                MATERIAL & WEAVE ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                Four Material Expressions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed">
                Each construction is calibrated for specific tactile feedback, light reflection, and structural stability.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Cotton / Nylon Blend */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/25 flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#F6F0E8]">
                    <img
                      src="/assets/materials/linen.png"
                      alt="Cotton nylon blend weave texture detail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-[#0F2744] font-medium">
                    Cotton / Nylon Blend
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Soft hand-feel</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Organic, tactile character</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#0F2744]/75 leading-relaxed">
                    Combines natural combed cotton softness with high-strength nylon filaments to resist wrinkling.
                  </p>
                </div>
                <Link
                  href="/ribbons/cotton-nylon-blend"
                  className="mt-5 pt-3 border-t border-[#0F2744]/10 inline-flex items-center justify-between text-[11px] tracking-[0.2em] font-bold text-[#C7A86A] hover:text-[#0F2744] transition-colors"
                >
                  <span>SPECIFICATION</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Woven Edge Polyester Satin */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/25 flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#F6F0E8]">
                    <img
                      src="/assets/woven_edge _polyester_satin_ribbon_blue.jpeg"
                      alt="Woven edge polyester satin smooth weave detail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-[#0F2744] font-medium">
                    Woven Edge Polyester Satin
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Smooth satin surface</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Defined woven edge</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#0F2744]/75 leading-relaxed">
                    High-filament double-faced satin with genuine woven selvedges for high-lustre light reflection without fraying.
                  </p>
                </div>
                <Link
                  href="/ribbons/woven-edge-polyester-satin"
                  className="mt-5 pt-3 border-t border-[#0F2744]/10 inline-flex items-center justify-between text-[11px] tracking-[0.2em] font-bold text-[#C7A86A] hover:text-[#0F2744] transition-colors"
                >
                  <span>SPECIFICATION</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Matte Grosgrain */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/25 flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#F6F0E8]">
                    <img
                      src="/assets/matte_gross_ribbon_ribbed_white.jpeg"
                      alt="Matte grosgrain horizontal ribbed grain texture"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-[#0F2744] font-medium">
                    Matte Grosgrain
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Structured ribbed texture</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Refined matte finish</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#0F2744]/75 leading-relaxed">
                    Heavy transverse cords provide non-slip friction and structural body, ensuring bows stay voluminous and upright.
                  </p>
                </div>
                <Link
                  href="/ribbons/matte-grosgrain"
                  className="mt-5 pt-3 border-t border-[#0F2744]/10 inline-flex items-center justify-between text-[11px] tracking-[0.2em] font-bold text-[#C7A86A] hover:text-[#0F2744] transition-colors"
                >
                  <span>SPECIFICATION</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Sheer Organza */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/25 flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#F6F0E8]">
                    <img
                      src="/assets/materials/specialpaper.png"
                      alt="Sheer organza open mesh translucent texture detail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-[#0F2744] font-medium">
                    Sheer Organza
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Translucent and delicate</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2744]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C7A86A] shrink-0" />
                      <span>Lightweight layered appearance</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#0F2744]/75 leading-relaxed">
                    Fine monofilament gauze weave with narrow stitched satin borders, diffusing light for romantic packaging layering.
                  </p>
                </div>
                <Link
                  href="/ribbons/sheer-organza"
                  className="mt-5 pt-3 border-t border-[#0F2744]/10 inline-flex items-center justify-between text-[11px] tracking-[0.2em] font-bold text-[#C7A86A] hover:text-[#0F2744] transition-colors"
                >
                  <span>SPECIFICATION</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <SiteFooter />
    </div>
  );
}
