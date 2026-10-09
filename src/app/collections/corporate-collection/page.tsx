import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Palette, Sparkles, Box, CheckCircle2 } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export interface CorporateProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  highlights: string[];
}

export const CORPORATE_PRODUCTS: CorporateProduct[] = [
  {
    id: "executive-stationery-set",
    slug: "executive-stationery-set",
    title: "Executive Stationery Set",
    subtitle: "Desk & Executive Essentials",
    description:
      "A refined executive stationery set combining premium materials, understated branding and practical everyday essentials.",
    image: "/assets/corporate_collection/book.jpeg",
    href: "/collections/corporate-collection/executive-stationery-set",
    highlights: ["Embossed Leatherette Cover", "Custom Pen & Notebook", "Gift Sleeve Box"],
  },
  {
    id: "luxury-date-chocolate-box",
    slug: "luxury-date-chocolate-box",
    title: "Luxury Date & Chocolate Box",
    subtitle: "Confectionery & Gourmet Presentation",
    description:
      "A premium presentation box designed for UAE dates, chocolates and curated corporate gifting.",
    image: "/assets/corporate_collection/Luxury_Date & Chocolate_Box.jpeg",
    href: "/collections/corporate-collection/luxury-date-chocolate-box",
    highlights: ["Food-Grade Rigid Interior", "Gold Foil Emblem", "Magnetic Lid Closure"],
  },
  {
    id: "bespoke-falcon-desk-ornament",
    slug: "bespoke-falcon-desk-ornament",
    title: "Bespoke Falcon Desk Ornament",
    subtitle: "Heritage & Commemorative Keepsake",
    description:
      "A distinguished desk piece created as a premium corporate keepsake with bespoke branding and presentation.",
    image: "/assets/corporate_collection/falcon_desk.jpeg",
    href: "/collections/corporate-collection/bespoke-falcon-desk-ornament",
    highlights: ["Sculpted Metallic Accent", "Engraved Wooden Base", "Plush Display Case"],
  },
  {
    id: "tech-accessories-kit",
    slug: "tech-accessories-kit",
    title: "Tech & Accessories Kit",
    subtitle: "Modern Business & Travel Essentials",
    description:
      "A refined corporate tech set combining practical accessories with premium branded presentation.",
    image: "/assets/corporate_collection/tech& accessorykit.jpeg",
    href: "/collections/corporate-collection/tech-accessories-kit",
    highlights: ["Wireless Fast Charger", "Braided Leather Cables", "Custom Molded EVA Insert"],
  },
];

const CUSTOMISATION_PILLARS = [
  {
    title: "Brand Colours",
    description: "Exact Pantone matching across boards, fabrics, papers and ribbons.",
  },
  {
    title: "Logo Application",
    description: "Precision screen, offset, and high-definition digital logo printing.",
  },
  {
    title: "Luxury Foiling",
    description: "Metallic gold, silver, bronze, rose gold, and holographic foil stamping.",
  },
  {
    title: "Laser Engraving",
    description: "Deep laser engraving and sculpted crest relief on wood, metal, and acrylic.",
  },
  {
    title: "Custom Packaging",
    description: "Bespoke rigid boxes, drawer chests, magnetic closures, and carry bags.",
  },
  {
    title: "Bespoke Inserts",
    description: "Custom CNC-milled EVA foam, velvet-lined trays, and tailored satin cradles.",
  },
  {
    title: "Custom Presentation",
    description: "Branded satin ribbons, foil-stamped greeting cards, and wax seals.",
  },
  {
    title: "Bulk Corporate Quantities",
    description: "Scalable volume production runs with planned regional delivery schedules.",
  },
];

const OCCASIONS = [
  {
    title: "Executive Gifting",
    desc: "Curated presentation suites for board members, C-suite executives and key partners.",
  },
  {
    title: "Client Appreciation",
    desc: "Memorable corporate gifts designed to strengthen long-term client relationships.",
  },
  {
    title: "Employee Recognition",
    desc: "Distinguished milestone awards and appreciation hampers for company teams.",
  },
  {
    title: "Corporate Events",
    desc: "Branded luxury gifts for conferences, annual summits, and gala banquets.",
  },
  {
    title: "Festive Gifting",
    desc: "Special seasonal packaging and curated hampers for Ramadan, Eid, and New Year drops.",
  },
  {
    title: "VIP Gifting",
    desc: "Exclusive bespoke pieces and private keepsakes created for high-value dignitaries.",
  },
];

export const metadata: Metadata = {
  title: "Corporate Gifting Collection — Executive Suites & Luxury Hampers | CASA DI BIZ",
  description:
    "Explore the CASA DI BIZ Corporate Gifts collection — bespoke executive stationery sets, luxury date & chocolate boxes, falcon desk ornaments, and tech accessories kits crafted for UAE brands.",
  openGraph: {
    title: "Corporate Gifts Collection | CASA DI BIZ",
    description:
      "Bespoke gifting solutions created for executive relationships, client appreciation, corporate occasions, and premium UAE brands.",
    images: [{ url: "/assets/giftim.jpeg" }],
  },
};

export default function CorporateCollectionPage() {
  const whatsappMsg =
    "Hello CASA DI BIZ, I would like to inquire about your Corporate Gifting Collection and bespoke corporate gift sets.";
  const dynamicWhatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2744]">
      <SiteHeader />

      <main>
        {/* HERO SECTION */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#0F2744]/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-7 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-9">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Collections", to: "/collections" },
                { label: "Corporate Gifts" },
              ]}
            />
            <p className="mt-7 sm:mt-8 lg:mt-9 text-[11px] tracking-[0.32em] text-[#C7A86A] font-medium uppercase">
              CORPORATE GIFTING COLLECTION
            </p>
            <h1 className="mt-3.5 sm:mt-4 md:mt-5 font-display font-serif text-3xl sm:text-5xl md:text-6xl text-[#0F2744] leading-[1.1] sm:leading-[1.05]">
              Corporate gifts,{" "}
              <span className="italic text-[#C7A86A]">crafted to be remembered.</span>
            </h1>
            <p className="mt-5 md:mt-6 max-w-2xl text-sm sm:text-base text-[#0F2744]/75 font-sans leading-relaxed">
              Bespoke gifting solutions created for executive relationships, client appreciation,
              corporate occasions, and premium UAE brands.
            </p>
          </div>
        </section>

        {/* 2x2 PRODUCT GRID SECTION */}
        <section className="w-full bg-[#FAF8F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#C7A86A] uppercase block mb-1">
                CURATED SUITES
              </span>
              <h2 className="font-display font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0F2744]">
                The Corporate Collection Range
              </h2>
            </div>

            {/* Desktop: 2x2 Grid (32px x 40px gap) | Mobile: Single Column (24px gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 md:gap-x-8 md:gap-y-10 lg:gap-x-8 lg:gap-y-12">
              {CORPORATE_PRODUCTS.map((product, i) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group flex flex-col rounded-2xl sm:rounded-[24px] md:rounded-[28px] bg-white border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/60 overflow-hidden shadow-[0_4px_20px_rgba(15,39,68,0.03)] hover:shadow-[0_12px_32px_rgba(15,39,68,0.07)] transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden aspect-square bg-white w-full border-b border-[#0F2744]/[0.06]">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-[#0F2744]/10 text-[#0F2744] flex items-center justify-center shadow-sm group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] group-hover:border-[#0F2744] transition-all duration-300">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Product Content Section */}
                  <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C7A86A] uppercase block mb-1">
                        {product.subtitle}
                      </span>
                      <h3 className="font-display font-serif text-xl sm:text-2xl lg:text-[26px] text-[#0F2744] leading-snug group-hover:text-[#C7A86A] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Badges & CTA */}
                    <div className="mt-5 pt-4 border-t border-[#0F2744]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {product.highlights.slice(0, 2).map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-block px-2.5 py-1 text-[10px] font-medium tracking-wider text-[#0F2744]/70 bg-[#F6F0E8] rounded-md"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs tracking-[0.2em] font-sans font-semibold text-[#C7A86A] uppercase group-hover:text-[#0F2744] transition-colors duration-300 shrink-0">
                        VIEW DETAILS
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#C7A86A] group-hover:text-[#0F2744]" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATE CUSTOMISATION SECTION */}
        <section className="w-full bg-[#F6F0E8] border-y border-[#0F2744]/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
                CORPORATE CUSTOMISATION
              </p>
              <h2 className="mt-2 font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-tight">
                Made around <span className="italic text-[#C7A86A]">your brand.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#0F2744]/75 font-sans leading-relaxed">
                Every corporate gift suite is customized to your exact brand guidelines — ensuring
                consistent palettes, immaculate logo execution, and tailored presentation packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {CUSTOMISATION_PILLARS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/60 transition-all duration-300 shadow-xs"
                >
                  <div className="h-2 w-8 bg-[#C7A86A] rounded-full mb-4" />
                  <h4 className="font-display font-serif text-lg text-[#0F2744] mb-2 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0F2744]/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OCCASIONS SECTION */}
        <section className="w-full bg-[#FAF8F5]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
                DESIGNED FOR THE MOMENT
              </p>
              <h2 className="mt-2 font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F2744]">
                Occasions that demand <span className="italic text-[#C7A86A]">distinction.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {OCCASIONS.map((occ, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[18px] p-6 sm:p-7 border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/50 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-[#C7A86A] font-bold block mb-2">
                    0{i + 1}
                  </span>
                  <h4 className="font-display font-serif text-xl text-[#0F2744] mb-2 font-semibold">
                    {occ.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0F2744]/70 leading-relaxed font-sans">
                    {occ.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section id="quote" className="w-full bg-[#0F2744] text-[#FAF8F5]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24 text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-4">
              CREATE YOUR CORPORATE GIFT
            </p>
            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight">
              A gift that carries your brand beyond the moment.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto font-sans leading-relaxed">
              Tell us what you&apos;re planning and we&apos;ll help create a corporate gifting solution
              tailored to your brand.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?category=corporate-collection&inquiry=quote"
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

