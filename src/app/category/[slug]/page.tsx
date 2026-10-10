import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const CATEGORIES: Record<string, { title: string; description: string }> = {
  boxes: { title: "Boxes", description: "Rigid, magnetic and drawer boxes crafted for luxury unboxing." },
  bags: { title: "Bags", description: "Premium paper and rope-handle bags finished with foil detailing." },
  pouches: { title: "Pouches", description: "Velvet, satin and suede drawstring pouches for delicate pieces." },
  wraps: { title: "Wraps", description: "Custom printed wrapping papers and tissues in your brand colours." },
  ribbons: { title: "Ribbons", description: "Grosgrain, satin and printed ribbons for a signature finish." },
  collections: { title: "Collections", description: "Curated packaging suites designed to work together." },
  "gifting-essentials": { title: "Gifting Essentials", description: "Tags, seals, cards and finishing touches for every gift." },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = CATEGORIES[slug] ?? { title: "Category", description: "Luxury packaging by CASA DI BIZ." };
  return {
    title: `${c.title} — CASA DI BIZ`,
    description: c.description,
    openGraph: {
      title: `${c.title} — CASA DI BIZ`,
      description: c.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "gifting-essentials") {
    redirect("/collections/corporate-collection");
  }
  const c = CATEGORIES[slug] ?? { title: "Category", description: "Luxury packaging by CASA DI BIZ." };
  return (
    <div className="min-h-screen bg-ivory">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-navy hover:text-gold transition">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <p className="mt-10 text-[11px] tracking-[0.32em] text-gold font-medium">CASA DI BIZ</p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl text-navy leading-tight">{c.title}</h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-luxe leading-relaxed">{c.description}</p>
        <div className="mt-12 border-t border-gold/30 pt-8 text-sm text-muted-luxe">
          Collection page coming soon. Contact us to explore custom options.
        </div>
      </div>
    </div>
  );
}
