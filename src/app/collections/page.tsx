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
    image: "/assets/papercollct.jpeg",
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
    href: "/boxes",
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
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        {/* Editorial Header Section */}
        <section className="w-full bg-cream border-b border-[#0F2744]/5">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-6 pb-6 sm:pt-14">
            <Breadcrumbs
              items={[{ label: "Home", to: "/" }, { label: "Collections" }]}
            />
            <p className="mt-4 sm:mt-8 text-[11px] tracking-[0.32em] text-gold font-medium uppercase">
              THE COMPLETE COLLECTIONS
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Packaging suites,{" "}
              <span className="italic text-gradient-gold">not single pieces.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Curated collections that bring boxes, bags, pouches, wraps, and
              finishing touches together into one cohesive, luxury unboxing
              experience.
            </p>
          </div>
        </section>

        {/* Collections Editorial Grid */}
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16">
            {/* Desktop: 4-column grid (lg: 1024px+) | Tablet: 2 columns | Mobile: 1 column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {items.map((it, i) => {
                const destination = it.href || `/collections/${it.slug}`;
                return (
                  <Link
                    key={it.slug}
                    href={destination}
                    className="group flex flex-col bg-cream rounded-[14px] overflow-hidden hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {/* Collection Image */}
                    <div className="relative overflow-hidden aspect-[4/3] bg-white">
                      <img
                        src={it.image}
                        alt={it.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </div>

                    {/* Card Content Section */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="font-display text-lg sm:text-xl lg:text-[21px] text-navy leading-tight group-hover:text-gold transition-colors duration-300">
                          {it.title}
                        </h2>
                        <p className="mt-2.5 text-xs sm:text-[13.5px] text-muted-luxe leading-relaxed flex-1 line-clamp-3">
                          {it.short}
                        </p>
                      </div>

                      {/* CTA */}
                      <span className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.24em] font-semibold text-gold group-hover:gap-2.5 transition-all uppercase">
                        EXPLORE COLLECTION <ArrowRight className="h-3.5 w-3.5" />
                      </span>
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
