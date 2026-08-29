import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";

export const GIFTING_CATEGORIES: Record<
  string,
  { title: string; short: string; long: string; image: string }
> = {
  "gift-cards": {
    title: "Gift Cards",
    short: "Foiled cards, thank-you notes and message inserts in your brand stock.",
    long: "Thick, tactile card stock printed with your message and monogram — folded notes, flat inserts and gift cards that make the box feel personal.",
    image: "/assets/cats/giftings.png",
  },
  "tissue-paper": {
    title: "Tissue Paper",
    short: "Acid-free tissue in solid colours, prints and custom logo repeats.",
    long: "Soft, acid-free tissue in your palette — plain, printed or logo-repeat — the whisper-quiet first layer every premium unboxing needs.",
    image: "/assets/cats/giftings.png",
  },
  "stickers-seals": {
    title: "Stickers & Seals",
    short: "Wax-look seals, foiled labels and branded stickers that close the story.",
    long: "Die-cut stickers, embossed seals and foiled labels in any shape — the finishing detail that holds tissue in place and signs off your packaging.",
    image: "/assets/allllllimm.jpeg",
  },
  "fillers-accessories": {
    title: "Fillers & Accessories",
    short: "Shreds, inserts, wool fill and the small parts that hold a gift together.",
    long: "Paper shred, crinkle fill, foam and card inserts, tags, twine and ribbon accessories — practical protection presented as part of the design.",
    image: "/assets/giftim.jpeg",
  },
};

export const metadata: Metadata = {
  title: "Gifting Essentials — Cards, Tissue, Seals & Fillers | CASA DI BIZ",
  description: "Premium gifting essentials from CASA DI BIZ — gift cards, tissue paper, stickers & seals and fillers that complete a luxury unboxing.",
  openGraph: {
    title: "Gifting Essentials by CASA DI BIZ",
    description: "Gift cards, tissue paper, stickers & seals and fillers for luxury packaging.",
  },
};

export default function GiftingPage() {
  const items = Object.entries(GIFTING_CATEGORIES).map(([slug, c]) => ({ slug, ...c }));
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-6 sm:pt-14">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Gifting Essentials" }]} />
            <p className="mt-8 text-[11px] tracking-[0.32em] text-gold font-medium">GIFTING ESSENTIALS</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.05]">
              The details people <span className="italic text-gradient-gold">actually remember.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted-luxe leading-relaxed">
              Cards, tissue, seals and fillers — the small finishing pieces that turn a well-made box into a considered gift.
            </p>
          </div>
        </section>

        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/gifting/${it.slug}`}
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
