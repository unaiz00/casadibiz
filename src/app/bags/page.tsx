import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const BAG_PRODUCTS = [
  {
    slug: "special-paper",
    title: "Special Paper Bags",
    short: "Bespoke retail carriers crafted from colored-through pulp, specialty stocks and paperboard wraps.",
    image: "/assets/special1.jpeg",
  },
  {
    slug: "white-card",
    title: "White Card Bags",
    short: "High-density white solid bleached artboard carriers providing high graphic resolution and color printing.",
    image: "/assets/white1.jpeg",
  },
  {
    slug: "white-card-texture",
    title: "White Card with Texture Press Bags",
    short: "Heavy white artboards embossed with felt, or custom textures to provide tactile depth.",
    image: "/assets/whitetext1.jpeg",
  },
  {
    slug: "kraft-bag",
    title: "Kraft Bags",
    short: "Durable, unbleached brown or bleached white kraft paper carriers providing high tear resistance.",
    image: "/assets/kraft3.png",
  },
];

export const metadata: Metadata = {
  title: "Bags — Premium Paper Carrier Bags | CASA DI BIZ",
  description: "Explore CASA DI BIZ luxury paper bag collections — Special Paper, White Card, White Card Texture, and Kraft bags crafted for premium brands.",
  openGraph: {
    title: "Luxury Paper Bags by CASA DI BIZ",
    description: "Special Paper, White Card, White Card Texture, and Kraft bags for premium brands.",
  },
};

export default function BagsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-6 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Bags" }]} />
            <p className="mt-4 sm:mt-8 text-[11px] tracking-[0.32em] text-gold font-medium uppercase">THE BAG COLLECTION</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Paper Bags made <span className="italic text-gradient-gold">with intent.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four signature paper bag styles, finished by hand in the papers, handles and foils that fit your brand. Inspect specifications, sizing, and customisation options below.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {BAG_PRODUCTS.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/bags/paper-bags/${it.slug}`}
                  className="group flex flex-col bg-cream rounded-[14px] overflow-hidden hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-white">
                    <img
                      src={it.image}
                      alt={it.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl sm:text-2xl text-navy leading-tight">{it.title}</h3>
                    <p className="mt-3 text-sm text-muted-luxe leading-relaxed flex-1">{it.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] font-semibold text-gold group-hover:gap-3 transition-all">
                      EXPLORE DETAILS <ArrowRight className="h-4 w-4" />
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
