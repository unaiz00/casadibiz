import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const COLLECTION_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string; href?: string }
> = {
  "paper-bags": {
    title: "Paper Bags",
    short: "Heavyweight paper bags with custom cotton ribbon handles and foil-stamped branding.",
    long: "Bespoke retail carriers and boutique paper bags crafted from coloured-through pulp, specialty stocks, and luxury finishes.",
    image: "/assets/allimages.jpeg",
    href: "/paperbags",
  },
  "jewellery-collection": {
    title: "Jewellery Boxes",
    short: "Boxes, pouches and inserts built around delicate, high-value pieces.",
    long: "A complete jewellery packaging suite — rigid boxes with custom inserts, velvet pouches, ribbon ties and foiled cards, all colour-matched to your house palette.",
    image: "/assets/rigidd.jpeg",
    href: "/boxes",
  },
  "corporate-collection": {
    title: "Corporate Gift Boxes",
    short: "Considered gifting sets for clients, partners and internal milestones.",
    long: "Magnetic boxes, branded bags, tissue and seals designed for corporate gifting programmes — consistent, repeatable and comfortably scalable across offices and regions.",
    image: "/assets/giftim.jpeg",
    href: "/collections/corporate-collection",
  },
  "wrapping-papers": {
    title: "Wrapping Papers",
    short: "Ultra-soft tissue and luxury custom printed wrapping papers to protect your finest treasures.",
    long: "Printed wraps and tissue in your palette, patterns and monograms — precision-calendered for an unforgettable unboxing experience.",
    image: "/assets/flat_matte_finish_paperwrap.jpeg",
    href: "/wraps",
  },
  "wedding-collection": {
    title: "Wedding Collection",
    short: "Favour boxes, pouches and ribbon detailing for the whole celebration.",
    long: "Wedding packaging from invitation sleeves to favour boxes and satin ribbon — soft palettes, foiled monograms and finishing that photographs beautifully.",
    image: "/assets/allim.jpeg",
    href: "/collections/wedding-collection",
  },
  "seasonal-collection": {
    title: "Seasonal Collection",
    short: "Limited-run packaging for festive drops and campaign moments.",
    long: "Seasonal packaging programmes — festive prints, campaign colourways and limited-edition finishes produced to a fixed calendar so your drops always land on time.",
    image: "/assets/imagesec.jpeg",
    href: "/collections/seasonal-collection",
  },
  "pouches": {
    title: "Fabric Pouches",
    short: "Ultra-soft velvet, satin, and suede pouches designed for cherished pieces.",
    long: "Hand-stitched luxury pouches in velvet, satin, cotton and suede with custom drawstring closures and metallic foil branding.",
    image: "/assets/wovenedge_satinpouch.jpeg",
    href: "/pouches",
  },
  "ribbons": {
    title: "Custom Ribbons",
    short: "Woven edge satin, grosgrain, and printed ribbons cut to perfection.",
    long: "Bespoke ribbon detailing with foil stamping, embossed text, and signature widths configured to your packaging suites.",
    image: "/assets/cotton_nylon_ribbon.jpeg",
    href: "/ribbons",
  },
};

export const metadata: Metadata = {
  title: "Collections — Curated Luxury Packaging Suites | CASA DI BIZ",
  description:
    "Explore CASA DI BIZ luxury packaging collections — Paper Bags, Jewellery Boxes, Corporate Gift Boxes, Wrapping Papers, Wedding and Seasonal suites.",
  openGraph: {
    title: "Luxury Packaging Collections by CASA DI BIZ",
    description:
      "Curated packaging suites, paper bags, jewellery boxes, corporate gifts, and bespoke wrapping papers for premium brands.",
  },
};

export default function CollectionsPage() {
  const items = Object.entries(COLLECTION_CATEGORIES).map(([slug, c]) => ({
    slug,
    ...c,
  }));

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />
      <main>
        {/* Editorial Header Section */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#0F2744]/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-7 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-9">
            <Breadcrumbs
              items={[{ label: "Home", to: "/" }, { label: "Collections" }]}
            />
            <p className="mt-7 sm:mt-8 lg:mt-9 text-[11px] tracking-[0.32em] text-[#C7A86A] font-medium uppercase">
              THE COMPLETE COLLECTIONS
            </p>
            <h1 className="mt-3.5 sm:mt-4 md:mt-5 font-display font-serif text-3xl sm:text-5xl md:text-6xl text-[#0F2744] leading-[1.1] sm:leading-[1.05]">
              Packaging suites,{" "}
              <span className="italic text-[#C7A86A]">not single pieces.</span>
            </h1>
            <p className="mt-5 md:mt-6 max-w-2xl text-sm sm:text-base text-[#0F2744]/75 font-sans leading-relaxed">
              Curated collections that bring boxes, bags, pouches, wraps, and
              finishing touches together into one cohesive, luxury unboxing
              experience.
            </p>
          </div>
        </section>

        {/* Collections Editorial Grid */}
        <section className="w-full bg-[#FAF8F5]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-5 sm:pt-7 lg:pt-8 pb-12 sm:pb-16 lg:pb-24">
            {/* Desktop: 2-column grid | Mobile: Single column with natural vertical scrolling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-10 lg:gap-12">
              {items.map((it, i) => {
                const destination = it.href || `/collections/${it.slug}`;
                return (
                  <Link
                    key={it.slug}
                    href={destination}
                    className="group flex flex-col rounded-[22px] sm:rounded-[28px] md:rounded-[32px] bg-white border border-[#0F2744]/[0.08] hover:border-[#C7A86A]/60 overflow-hidden shadow-[0_4px_20px_rgba(15,39,68,0.03)] hover:shadow-[0_12px_32px_rgba(15,39,68,0.07)] transition-all duration-500 animate-fade-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    {/* Collection Image with Floating Arrow Icon */}
                    <div className="relative overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-[#F4EFEA] w-full">
                      <img
                        src={it.image}
                        alt={it.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      {/* Subtle floating circular indicator */}
                      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-white/80 text-[#0F2744] flex items-center justify-center shadow-sm group-hover:bg-[#0F2744] group-hover:text-[#FAF8F5] group-hover:border-[#0F2744] transition-all duration-300">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Card Content Section */}
                    <div className="p-6 sm:p-8 md:p-9 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h2 className="font-display font-serif text-2xl sm:text-[26px] md:text-3xl text-[#0F2744] leading-tight group-hover:text-[#C7A86A] transition-colors duration-300">
                          {it.title}
                        </h2>
                        <p className="mt-3 text-xs sm:text-sm md:text-[14.5px] text-[#0F2744]/75 leading-relaxed font-sans line-clamp-3">
                          {it.short}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-4 sm:pt-5 border-t border-[#0F2744]/[0.08] flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.22em] font-sans font-semibold text-[#C7A86A] uppercase group-hover:text-[#0F2744] transition-colors duration-300">
                          EXPLORE COLLECTION
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#C7A86A] group-hover:text-[#0F2744]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
