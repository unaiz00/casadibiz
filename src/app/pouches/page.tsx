import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const POUCH_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "velvet-pouches": {
    title: "Velvet Pouches",
    short: "Plush velvet pouches with a soft, luxurious hand-feel.",
    long: "Deep-pile velvet in signature brand tones, lined for protection and finished with satin drawstrings — the classic choice for fine jewellery and watches.",
    image: "/assets/cats/pouch.jpeg",
  },
  "satin-pouches": {
    title: "Satin Pouches",
    short: "Silky satin pouches with a soft sheen and elegant drape.",
    long: "Lightweight satin pouches that catch the light, ideal for cosmetics, perfumes and premium accessories where a delicate, luminous finish matters.",
    image: "/assets/cats/pouch.jpeg",
  },
  "cotton-pouches": {
    title: "Cotton Pouches",
    short: "Natural cotton pouches for a considered, eco-minded feel.",
    long: "Organic and recycled cotton pouches in natural, dyed and printed finishes — a sustainable carrier that still feels crafted and premium.",
    image: "/assets/boxim.jpeg",
  },
  "suede-pouches": {
    title: "Suede Pouches",
    short: "Micro-suede pouches with a soft, tactile matte finish.",
    long: "Vegan micro-suede pouches with a warm, matte surface and structured drape — a modern alternative to velvet for luxury retail and gifting.",
    image: "/assets/allllllimm.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Pouches — Velvet, Satin, Cotton & Suede | CASA DI BIZ",
  description: "Explore CASA DI BIZ luxury pouch collections — velvet, satin, cotton and suede pouches crafted for premium brands.",
  openGraph: {
    title: "Luxury Pouches by CASA DI BIZ",
    description: "Velvet, satin, cotton and suede pouches for premium brands.",
  },
};

export default function PouchesPage() {
  const items = Object.entries(POUCH_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Pouches" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">THE POUCH COLLECTION</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Pouches that <span className="italic text-gradient-gold">protect and present.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four signature pouch fabrics, finished by hand in the colours, closures and branding that fit your product.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/pouches/${it.slug}`}
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
