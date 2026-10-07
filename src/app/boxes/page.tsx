import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const BOX_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "rigid-boxes": {
    title: "Rigid Boxes",
    short: "Structured, sturdy boxes built to protect and impress.",
    long: "Rigid boxes are made from thick, high-density board wrapped in premium paper. They hold their shape, feel substantial in the hand and set the tone the moment a customer lifts the lid.",
    image: "/assets/flowpackaging.jpg",
  },
  "magnetic-closure-boxes": {
    title: "Magnetic Closure Boxes",
    short: "A satisfying snap that turns opening into a moment.",
    long: "Magnetic closure boxes combine the strength of rigid board with a hidden magnetic latch, giving a clean silhouette and a signature soft-close that customers remember.",
    image: "/assets/allim.jpeg",
  },
  "drawer-boxes": {
    title: "Drawer Boxes",
    short: "Slide-out reveals with a tactile, gift-like feel.",
    long: "Drawer boxes glide open with a smooth, deliberate motion. Perfect for layered products, jewellery sets and premium gifting where the reveal is part of the story.",
    image: "/assets/goodimm.jpeg",
  },
  "jewellery-boxes": {
    title: "Jewellery Boxes",
    short: "Fitted interiors that cradle every piece.",
    long: "Jewellery boxes are lined with velvet, foam or satin and shaped to hold rings, chains, earrings and watches securely — a quiet frame for the piece inside.",
    image: "/assets/imsec2.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Boxes — Rigid, Magnetic, Drawer & Jewellery | CASA DI BIZ",
  description: "Explore CASA DI BIZ luxury box collections — rigid, magnetic closure, drawer and jewellery boxes crafted for premium brands.",
  openGraph: {
    title: "Luxury Boxes by CASA DI BIZ",
    description: "Rigid, magnetic closure, drawer and jewellery boxes for premium brands.",
  },
};

export default function BoxesPage() {
  const items = Object.entries(BOX_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Boxes" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">THE BOX COLLECTION</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Boxes made to be <span className="italic text-gradient-gold">remembered.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four signature box constructions, each finished by hand in the materials, colours and closures of your brand.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/boxes/${it.slug}`}
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
                      EXPLORE COLLECTION <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* JEWELLERY BOXES BY CATEGORY */}
            <div className="mt-20 pt-16 border-t border-border-luxe/60">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.32em] text-gold font-medium uppercase">BESPOKE JEWELLERY CASES</p>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl text-navy">Jewellery Boxes by Category</h2>
                </div>
                <span className="text-xs text-muted-luxe font-medium">Bespoke luxury manufacturing</span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Ring Boxes", slug: "ring-boxes", desc: "Ring Box (S), Ring Box (L), and multi-ring formats", image: "/assets/boxim.jpeg" },
                  { name: "Earring Boxes", slug: "earring-boxes", desc: "Earring Box, Earring Box (S), and Earring Box (L)", image: "/assets/imsec2.jpeg" },
                  { name: "Chain & Pendant Boxes", slug: "chain-boxes", desc: "Chain Box, Pendant Box, and Chain / PN formats", image: "/assets/goodimm.jpeg" },
                  { name: "Pendant Boxes", slug: "pendant-boxes", desc: "Pendant Box, Pn Box, and E/R Pn Box cases", image: "/assets/allim.jpeg" },
                  { name: "Bracelet Boxes", slug: "bracelet-boxes", desc: "Bracelet Box, Bracelet / Chain cases", image: "/assets/imsec1.jpeg" },
                  { name: "Necklace Boxes", slug: "necklace-boxes", desc: "Necklace Box (S), Necklace Box (M), and Necklace Box (L)", image: "/assets/allllllimm.jpeg" },
                  { name: "Bangle Boxes", slug: "bangle-boxes", desc: "Bangle Box, T Bangle, and ER Bangle Box", image: "/assets/rigidd.jpeg" },
                  { name: "Set Boxes", slug: "full-set-boxes", desc: "Set Box (S), Set Box (M), Set Box (L), and Full Set Box", image: "/assets/allimages.jpeg" },
                ].map((cat, idx) => (
                  <Link
                    key={cat.slug}
                    href={`/boxes/${cat.slug}`}
                    className="group flex flex-col bg-cream border border-border-luxe/60 rounded-[14px] overflow-hidden hover:-translate-y-1.5 transition-all duration-500 shadow-xs"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="relative aspect-[16/10] bg-white overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-lg text-navy group-hover:text-gold transition-colors">{cat.name}</h3>
                        <p className="mt-1.5 text-xs text-muted-luxe leading-relaxed">{cat.desc}</p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] font-semibold text-gold group-hover:gap-2.5 transition-all">
                        VIEW CATALOGUE <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
