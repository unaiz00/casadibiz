import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const RIBBON_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "satin-ribbons": {
    title: "Satin Ribbons",
    short: "Lustrous satin ribbons with a smooth, elegant drape for premium gifting.",
    long: "Soft, high-sheen satin ribbons woven for a fluid drape and rich colour depth — the signature finish on luxury boxes, bags and gifting.",
    image: "/assets/cats/ribbon.png",
  },
  "grosgrain-ribbons": {
    title: "Grosgrain Ribbons",
    short: "Structured grosgrain ribbons with a refined ribbed texture and firm hold.",
    long: "Densely woven grosgrain with a crisp ribbed finish — a considered, tailored choice for branded bows and closures.",
    image: "/assets/cats/ribbon.png",
  },
  "printed-ribbons": {
    title: "Printed Ribbons",
    short: "Ribbons printed with your logo, monogram or bespoke pattern.",
    long: "Screen and heat-transfer printed ribbons carrying your artwork, monograms and campaign designs in your exact brand palette.",
    image: "/assets/allimages.jpeg",
  },
  "custom-ribbons": {
    title: "Custom Ribbons",
    short: "Bespoke widths, weaves and finishes engineered around your brand.",
    long: "Fully custom ribbons — woven logos, foil-stamped detailing, metallic edges and bespoke widths developed for signature packaging.",
    image: "/assets/giftim.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Ribbons — Satin, Grosgrain, Printed & Custom | CASA DI BIZ",
  description: "Explore CASA DI BIZ luxury ribbon collections — satin, grosgrain, printed and custom ribbons for premium brands.",
  openGraph: {
    title: "Luxury Ribbons by CASA DI BIZ",
    description: "Satin, grosgrain, printed and custom ribbons for premium brands.",
  },
};

export default function RibbonsPage() {
  const items = Object.entries(RIBBON_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Ribbons" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">THE RIBBON COLLECTION</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              Ribbons that <span className="italic text-gradient-gold">finish the story.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Four signature ribbon styles, woven and printed in the widths, colours and finishes that fit your brand.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/ribbons/${it.slug}`}
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
