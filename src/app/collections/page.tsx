import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const COLLECTION_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "jewellery-collection": {
    title: "Jewellery Collection",
    short: "Boxes, pouches and inserts built around delicate, high-value pieces.",
    long: "A complete jewellery packaging suite — rigid boxes with custom inserts, velvet pouches, ribbon ties and foiled cards, all colour-matched to your house palette.",
    image: "/assets/rigidd.jpeg",
  },
  "corporate-collection": {
    title: "Corporate Collection",
    short: "Considered gifting sets for clients, partners and internal milestones.",
    long: "Magnetic boxes, branded bags, tissue and seals designed for corporate gifting programmes — consistent, repeatable and comfortably scalable across offices and regions.",
    image: "/assets/giftim.jpeg",
  },
  "wedding-collection": {
    title: "Wedding Collection",
    short: "Favour boxes, pouches and ribbon detailing for the whole celebration.",
    long: "Wedding packaging from invitation sleeves to favour boxes and satin ribbon — soft palettes, foiled monograms and finishing that photographs beautifully.",
    image: "/assets/allim.jpeg",
  },
  "seasonal-collection": {
    title: "Seasonal Collection",
    short: "Limited-run packaging for festive drops and campaign moments.",
    long: "Seasonal packaging programmes — festive prints, campaign colourways and limited-edition finishes produced to a fixed calendar so your drops always land on time.",
    image: "/assets/imagesec.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Collections — Jewellery, Corporate, Wedding & Seasonal | CASA DI BIZ",
  description: "Complete luxury packaging collections from CASA DI BIZ — jewellery, corporate, wedding and seasonal suites built around your brand.",
  openGraph: {
    title: "Luxury Packaging Collections by CASA DI BIZ",
    description: "Jewellery, corporate, wedding and seasonal packaging collections for premium brands.",
  },
};

export default function CollectionsPage() {
  const items = Object.entries(COLLECTION_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Collections" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">THE COMPLETE COLLECTIONS</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Packaging suites, <span className="italic text-gradient-gold">not single pieces.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four curated collections that bring boxes, bags, pouches, wraps and finishing touches together into one coherent unboxing experience.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pb-24">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-pl-5 scrollbar-none gap-6 pb-6 -mx-5 pl-5 pr-5 sm:mx-0 sm:pl-0 sm:pr-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/collections/${it.slug}`}
                  className={`group flex flex-col w-[82vw] sm:w-auto shrink-0 snap-start bg-transparent transition-all duration-500 animate-fade-up ${
                    i % 2 === 1 ? "lg:translate-y-[24px]" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-[4px] bg-[#FAF8F5]">
                    <img
                      src={it.image}
                      alt={it.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover rounded-[4px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-4 flex-1 flex flex-col">
                    <h3 className="font-display text-lg sm:text-xl text-navy leading-tight group-hover:text-[#C7A86A] transition-colors duration-500">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-muted-luxe/80 leading-relaxed font-sans flex-1">
                      {it.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] font-sans font-semibold text-[#C7A86A] uppercase transition-all duration-500">
                      EXPLORE COLLECTION
                      <ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
