import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Palette,
  Scissors,
  CheckCircle2,
  MessageCircle,
  Mail,
  Ruler,
  Package,
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

// Application Use Cases Data
const RIBBON_APPLICATIONS = [
  {
    title: "Jewellery Packaging",
    subtitle: "Fine jewellery boxes and pouches",
    description:
      "Understated 10 mm and 15 mm ribbon ties creating delicate, secure closures for rigid jewellery presentation cases and suede pouches.",
    image: "/assets/allim.jpeg",
    recommendedWidths: "10 mm · 15 mm",
    materials: "Cotton / Nylon · Matte Grosgrain",
  },
  {
    title: "Luxury Gifting",
    subtitle: "Gift boxes, hampers and presentation packaging",
    description:
      "High-lustre 25 mm and 38 mm ribbons engineered to tie crisp, symmetrical bows that hold volume across rigid gift boxes and festive hampers.",
    image: "/assets/giftim.jpeg",
    recommendedWidths: "25 mm · 38 mm",
    materials: "Woven Edge Satin · Matte Grosgrain",
  },
  {
    title: "Boutique Retail",
    subtitle: "Shopping bags and premium retail packaging",
    description:
      "Reinforced woven selvedge ribbons suited for turn-top bag handle slots and luxury retail carrier closures.",
    image: "/assets/allllllimm.jpeg",
    recommendedWidths: "25 mm · 38 mm",
    materials: "Matte Grosgrain · Cotton / Nylon",
  },
  {
    title: "Beauty & Fragrance",
    subtitle: "Fragrance bottles, beauty presentation and gifting",
    description:
      "Tactile neck collars and box trims adding an ethereal sensory layer to fine perfume flacons and skincare sets.",
    image: "/assets/woven_edge _polyester_satin_ribbon_white.jpeg",
    recommendedWidths: "10 mm · 15 mm · 25 mm",
    materials: "Sheer Organza · Woven Edge Satin",
  },
  {
    title: "Weddings & Events",
    subtitle: "Delicate wrapping and decorative applications",
    description:
      "Romantic, translucent and lustrous ribbons crafted for haute couture event suites, bespoke confectionery, and bridal favours.",
    image: "/assets/flowpackaging.jpg",
    recommendedWidths: "15 mm · 25 mm · 38 mm",
    materials: "Sheer Organza · Woven Edge Satin",
  },
];

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
    conciseDescription: "Smooth satin surface with a defined woven edge.",
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
  const whatsappGeneralUrl =
    "https://wa.me/919995255846?text=" +
    encodeURIComponent(
      "Hello CASA DI BIZ, I would like to request a bespoke quote for custom luxury packaging ribbons."
    );

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
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-7 pb-10 sm:pt-9 sm:pb-12">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Ribbons" }]} />

            <div className="mt-5 flex items-center gap-3">
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

            <p className="mt-4 max-w-3xl text-sm sm:text-base text-[#0F2744]/80 leading-relaxed font-sans">
              Premium packaging ribbons crafted across refined satin, grosgrain, cotton-blend and organza constructions, with calibrated widths and bespoke branding options for luxury packaging.
            </p>

            {/* High-Level B2B Quick Facts Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-7 sm:mt-8 pt-6 border-t border-[#0F2744]/10 text-xs">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Non-Fray Woven Selvedges</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">10 mm · 15 mm · 25 mm · 38 mm</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Palette className="h-4 w-4 text-[#C7A86A] shrink-0" />
                <span className="text-[#0F2744]/80 font-medium">Pantone Colour Matching</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#0F2744]/80 font-medium">Hot Foil Stamping & Screen Print</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. RIBBON COLLECTION / PRODUCT DISCOVERY (MOVED MUCH EARLIER) */}
        <section id="our-ribbons" className="w-full bg-[#FAF8F5] py-12 sm:py-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                  OUR RIBBON MATERIALS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                  Choose the ribbon that completes your packaging.
                </h2>
              </div>
              <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#0F2744]/75 max-w-lg leading-relaxed">
                Four refined constructions designed for different packaging expressions, from soft natural texture to structured grosgrain and translucent organza.
              </p>
            </div>

            {/* Mobile horizontal swipe carousel + Desktop 4-col Grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible -mx-5 px-5 md:mx-0 md:px-0">
              {RIBBON_CORE_PRODUCTS.map((prod) => {
                return (
                  <div
                    key={prod.slug}
                    className="min-w-[82vw] sm:min-w-[320px] md:min-w-0 snap-start flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/25 transition-all duration-300 hover:border-[#C7A86A]/70 group"
                  >
                    {/* Clean Product Photography: No overlays, no pills, no code badges */}
                    <Link
                      href={`/ribbons/${prod.slug}`}
                      className="relative block aspect-[4/3] bg-[#F6F0E8] overflow-hidden"
                    >
                      <img
                        src={prod.image}
                        alt={prod.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </Link>

                    {/* Product Details Outside Photography */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Material Characteristic Tag */}
                        <span className="text-[9px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-1.5">
                          {prod.keyCharacteristic}
                        </span>

                        {/* Customer-Facing Product Name */}
                        <h3 className="font-display text-lg sm:text-xl text-[#0F2744] group-hover:text-[#C7A86A] transition-colors leading-snug">
                          <Link href={`/ribbons/${prod.slug}`}>{prod.name}</Link>
                        </h3>

                        {/* Concise Description */}
                        <p className="mt-2 text-xs text-[#0F2744]/80 leading-relaxed font-sans">
                          {prod.conciseDescription}
                        </p>

                        {/* Best Suited To */}
                        <div className="mt-3.5 pt-3.5 border-t border-[#0F2744]/10">
                          <span className="text-[9px] font-bold tracking-[0.18em] text-[#0F2744]/55 uppercase block mb-1">
                            BEST SUITED TO
                          </span>
                          <p className="text-[11px] font-medium text-[#0F2744]/85 leading-snug">
                            {prod.bestSuitedTo}
                          </p>
                        </div>

                        {/* Widths */}
                        <div className="mt-3">
                          <span className="text-[9px] font-bold tracking-[0.18em] text-[#0F2744]/55 uppercase block mb-1">
                            AVAILABLE WIDTHS
                          </span>
                          <span className="text-xs font-semibold text-[#0F2744] font-mono">
                            {prod.widths}
                          </span>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                        <Link
                          href={`/ribbons/${prod.slug}`}
                          className="w-full inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-[11px] tracking-[0.2em] font-bold bg-[#F6F0E8] text-[#0F2744] group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] transition-all duration-300"
                        >
                          <span>EXPLORE RIBBON</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Scroll Indicator Helper */}
            <div className="mt-3 flex items-center justify-center gap-1.5 md:hidden text-[10px] text-[#0F2744]/50">
              <span>← Swipe to explore all 4 ribbon materials →</span>
            </div>
          </div>
        </section>

        {/* 4. WIDTH & CUSTOMISATION */}
        <section id="width-guide" className="w-full bg-[#F6F0E8] py-14 sm:py-18 border-y border-[#C7A86A]/25">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                CALIBRATED FOR YOUR PACKAGING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                The right width for the right presentation.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed">
                Choose from four standardized narrow-loom widths engineered to deliver balanced proportions across every packaging dimension.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* 10 MM */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/20 flex flex-col justify-between hover:border-[#C7A86A]/60 transition-all duration-300">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display text-2xl font-bold text-[#0F2744]">10 MM</span>
                    <span className="text-[10px] font-mono text-[#0F2744]/60">3/8 INCH</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-[#C7A86A] uppercase mb-3">
                    NARROW & UNDERSTATED
                  </span>
                  <p className="text-xs text-[#0F2744]/80 leading-relaxed">
                    Narrow and understated. Suitable for jewellery packaging, small gift boxes and refined single-line branding.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                  <div className="h-2.5 w-full bg-[#FAF8F5] rounded-full overflow-hidden flex items-center p-0.5 border border-[#0F2744]/10 mb-2.5">
                    <div className="h-full bg-[#0F2744] rounded-full w-[26%]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#0F2744]/70 block">
                    Ideal for: Jewellery Boxes · Pouches · Gift Tags
                  </span>
                </div>
              </div>

              {/* 15 MM */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/20 flex flex-col justify-between hover:border-[#C7A86A]/60 transition-all duration-300">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display text-2xl font-bold text-[#0F2744]">15 MM</span>
                    <span className="text-[10px] font-mono text-[#0F2744]/60">5/8 INCH</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-[#C7A86A] uppercase mb-3">
                    VERSATILE EVERYDAY
                  </span>
                  <p className="text-xs text-[#0F2744]/80 leading-relaxed">
                    Versatile everyday width. Suitable for boutique packaging, cosmetics and gift wrapping.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                  <div className="h-2.5 w-full bg-[#FAF8F5] rounded-full overflow-hidden flex items-center p-0.5 border border-[#0F2744]/10 mb-2.5">
                    <div className="h-full bg-[#0F2744] rounded-full w-[39%]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#0F2744]/70 block">
                    Ideal for: Boutique Gifts · Cosmetics · Perfumes
                  </span>
                </div>
              </div>

              {/* 25 MM */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/20 flex flex-col justify-between hover:border-[#C7A86A]/60 transition-all duration-300">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display text-2xl font-bold text-[#0F2744]">25 MM</span>
                    <span className="text-[10px] font-mono text-[#0F2744]/60">1.0 INCH</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-[#C7A86A] uppercase mb-3">
                    STANDARD PRESENTATION
                  </span>
                  <p className="text-xs text-[#0F2744]/80 leading-relaxed">
                    A strong standard presentation width. Suitable for retail bags, apparel packaging and medium-to-large gift boxes.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                  <div className="h-2.5 w-full bg-[#FAF8F5] rounded-full overflow-hidden flex items-center p-0.5 border border-[#0F2744]/10 mb-2.5">
                    <div className="h-full bg-[#0F2744] rounded-full w-[65%]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#0F2744]/70 block">
                    Ideal for: Retail Bags · Apparel Boxes · Symmetrical Bows
                  </span>
                </div>
              </div>

              {/* 38 MM */}
              <div className="bg-white rounded-2xl p-6 border border-[#C7A86A]/20 flex flex-col justify-between hover:border-[#C7A86A]/60 transition-all duration-300">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display text-2xl font-bold text-[#0F2744]">38 MM</span>
                    <span className="text-[10px] font-mono text-[#0F2744]/60">1.5 INCH</span>
                  </div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-[#C7A86A] uppercase mb-3">
                    STATEMENT CEREMONIAL
                  </span>
                  <p className="text-xs text-[#0F2744]/80 leading-relaxed">
                    A wide statement ribbon. Suitable for presentation boxes, hampers and prominent decorative bows.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#0F2744]/10">
                  <div className="h-2.5 w-full bg-[#FAF8F5] rounded-full overflow-hidden flex items-center p-0.5 border border-[#0F2744]/10 mb-2.5">
                    <div className="h-full bg-[#0F2744] rounded-full w-[100%]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#0F2744]/70 block">
                    Ideal for: Luxury Hampers · Large Boxes · Statement Ties
                  </span>
                </div>
              </div>
            </div>

            {/* Contextual Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl p-6 border border-[#C7A86A]/25 gap-4">
              <div>
                <h3 className="font-display text-lg text-[#0F2744] font-medium">
                  Need a bespoke narrow-loom width (e.g. 6 mm, 50 mm, 75 mm)?
                </h3>
                <p className="text-xs text-[#0F2744]/70 mt-1">
                  We engineer custom loom calibrations for signature luxury packaging programs.
                </p>
              </div>
              <Link
                href="/contact?category=ribbons"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs tracking-[0.2em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 shrink-0"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. MATERIAL / WEAVE STORY */}
        <section id="material-expressions" className="w-full bg-[#FAF8F5] py-14 sm:py-20">
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

        {/* 6. BRANDING & FINISHING */}
        <section id="branding" className="w-full bg-[#0F2744] text-[#FAF8F5] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                  MAKE THE RIBBON YOURS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] font-medium">
                  Branded to become part of the identity.
                </h2>
              </div>
              <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#F6F0E8]/75 max-w-md leading-relaxed">
                From metallic foil stamping to Pantone-matched yarn dyeing, we engineer custom trims tailored to your brand specification.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Foil Stamping */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Hot Foil Stamping
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  Deep-relief metallic gold, silver, platinum, copper, and rose-gold foils applied with precision heated brass dies for pin-sharp typography.
                </p>
              </div>

              {/* Pantone Colour Matching */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <Palette className="h-6 w-6 text-[#C7A86A] mb-4" />
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Pantone Colour Matching
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  Lab-dipped yarn dyeing calibrated across the complete Pantone Solid Coated and Textile TCX libraries to match your packaging suite.
                </p>
              </div>

              {/* Screen Printing */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <Layers className="h-6 w-6 text-[#C7A86A] mb-4" />
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Precision Screen Printing
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  High-opacity matte and glossy pigment inks engineered to penetrate flat and ribbed weave textures without rigid plastic buildup.
                </p>
              </div>

              {/* Jacquard Weave */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <ShieldCheck className="h-6 w-6 text-[#C7A86A] mb-4" />
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Jacquard Woven Logos
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  Your monogram or pattern woven directly into the structural warp and weft on specialized narrow jacquard looms.
                </p>
              </div>

              {/* Calibrated Widths */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <Ruler className="h-6 w-6 text-[#C7A86A] mb-4" />
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Calibrated Custom Widths
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  Standard 10 mm, 15 mm, 25 mm, and 38 mm setups alongside bespoke narrow-loom width developments from 6 mm to 100 mm.
                </p>
              </div>

              {/* Cut to Length */}
              <div className="bg-[#FAF8F5]/5 border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/60 transition-all duration-300">
                <Scissors className="h-6 w-6 text-[#C7A86A] mb-4" />
                <h3 className="font-display text-lg text-[#FAF8F5] font-medium">
                  Sealed Cut-to-Length
                </h3>
                <p className="mt-2 text-xs text-[#F6F0E8]/75 leading-relaxed">
                  Pre-cut lengths with 45° angle or swallowtail ultrasonic sealed edges supplied ready for high-speed luxury packing lines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. APPLICATION / USE CASES */}
        <section id="applications" className="w-full bg-[#FAF8F5] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-2 block">
                APPLICATION & PRESENTATION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium">
                Engineered for luxury presentations.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed">
                Discover how leading jewellers, luxury boutiques, perfumers, and gifting brands deploy CASA DI BIZ ribbons.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RIBBON_APPLICATIONS.map((app, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-[#C7A86A]/20 flex flex-col justify-between hover:border-[#C7A86A]/60 transition-all duration-300 group"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#F6F0E8]">
                    <img
                      src={app.image}
                      alt={`CASA DI BIZ ribbons applied in ${app.title}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-1">
                        {app.subtitle}
                      </span>
                      <h3 className="font-display text-lg text-[#0F2744] font-medium">
                        {app.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#0F2744]/75 leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#0F2744]/10 flex items-center justify-between text-[10px]">
                      <div>
                        <span className="text-[#0F2744]/55 block font-bold uppercase tracking-wider">WIDTHS</span>
                        <span className="font-semibold text-[#0F2744] font-mono">{app.recommendedWidths}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[#0F2744]/55 block font-bold uppercase tracking-wider">POPULAR WEAVES</span>
                        <span className="font-semibold text-[#0F2744]">{app.materials}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CUSTOM ENQUIRY CTA / CONVERSION SECTION */}
        <section id="enquire" className="w-full bg-[#F6F0E8] py-16 sm:py-20 border-t border-[#C7A86A]/25">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86A] uppercase mb-3 block">
              START YOUR BESPOKE RIBBON SPECIFICATION
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-tight font-medium mb-4">
              Create a ribbon for your brand.
            </h2>

            <p className="text-sm sm:text-base text-[#0F2744]/80 max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
              Tell us your preferred material, width, colour and branding requirements. Our team can help develop a ribbon specification suited to your packaging.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href="/contact?category=ribbons"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-xs tracking-[0.22em] font-bold bg-[#0F2744] text-[#FAF8F5] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 shadow-sm"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-xs tracking-[0.22em] font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>ENQUIRE ON WHATSAPP</span>
              </a>
            </div>

            {/* B2B Manufacturer Commitments */}
            <div className="mt-12 pt-8 border-t border-[#0F2744]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#0F2744]/75 max-w-3xl mx-auto">
              <div>
                <span className="font-bold text-[#0F2744] block">MOQ: 500 Metres</span>
                <span className="text-[11px]">Per bespoke colourway / width</span>
              </div>
              <div>
                <span className="font-bold text-[#0F2744] block">Production: 10–16 Days</span>
                <span className="text-[11px]">Sampling turnaround: 4–6 days</span>
              </div>
              <div>
                <span className="font-bold text-[#0F2744] block">Global & GCC Delivery</span>
                <span className="text-[11px]">UAE, Saudi Arabia & International</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <SiteFooter />
    </div>
  );
}
