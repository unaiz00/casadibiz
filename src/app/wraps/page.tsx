import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const WRAP_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "wrapping-paper": {
    title: "Wrapping Paper",
    short: "Heavyweight wrapping paper in signature brand colours and prints.",
    long: "Premium coated and uncoated wrapping paper — printed in your brand palette, foiled and finished for a considered, gift-worthy wrap.",
    image: "/assets/cats/wraps.png",
  },
  "tissue-paper": {
    title: "Tissue Paper",
    short: "Delicate tissue paper for a soft, luxurious unboxing layer.",
    long: "Acid-free tissue paper in solid colours, prints and custom logos — the whisper-soft first layer inside every premium package.",
    image: "/assets/cats/wraps.png",
  },
  "custom-printed-wraps": {
    title: "Custom Printed Wraps",
    short: "Fully bespoke printed wraps built around your brand story.",
    long: "Full-surface printed wraps in your artwork, colours and finishes — from seasonal patterns to signature monograms and campaign designs.",
    image: "/assets/allimages.jpeg",
  },
  "speciality-wraps": {
    title: "Speciality Wraps",
    short: "Textured, foiled and finished wraps for standout gifting.",
    long: "Speciality papers with foil accents, embossed textures and soft-touch coatings — reserved for launches, VIP gifting and hero product moments.",
    image: "/assets/giftim.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Wraps — Wrapping, Tissue, Custom & Speciality | CASA DI BIZ",
  description: "Explore CASA DI BIZ luxury wrap collections — wrapping paper, tissue, custom printed and speciality wraps for premium brands.",
  openGraph: {
    title: "Luxury Wraps by CASA DI BIZ",
    description: "Wrapping paper, tissue, custom printed and speciality wraps for premium brands.",
  },
};

export default function WrapsPage() {
  const items = Object.entries(WRAP_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Wraps" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">THE WRAP COLLECTION</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Wraps worth <span className="italic text-gradient-gold">unwrapping.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four signature wrap styles, printed and finished in the papers, colours and foils that fit your brand.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/wraps/${it.slug}`}
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
