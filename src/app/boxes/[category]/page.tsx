import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles, Shield, Ruler } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import {
  BOX_CATEGORIES_DATA,
  BOX_MODELS_DATA,
  getAllBoxCategories,
  getBoxCategory,
} from "@/data/boxes-data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllBoxCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const cat = getBoxCategory(categorySlug);

  if (!cat) {
    return {
      title: "Box Category Not Found | CASA DI BIZ",
      description: "The requested luxury box category could not be found.",
    };
  }

  const title = `${cat.name} — Luxury Jewellery Packaging | CASA DI BIZ`;
  const description = `${cat.headline} Explore our bespoke collection of ${cat.name.toLowerCase()} manufactured for fine jewellery retailers and luxury brands in the UAE and worldwide.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://casadibiz.com/boxes/${categorySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://casadibiz.com/boxes/${categorySlug}`,
      siteName: "CASA DI BIZ",
      images: [
        {
          url: cat.heroImage,
          width: 1200,
          height: 800,
          alt: `CASA DI BIZ ${cat.name} luxury collection`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cat.heroImage],
    },
  };
}

export default async function BoxCategoryListingPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBoxCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const models = category.modelSlugs
    .map((slug) => BOX_MODELS_DATA[slug])
    .filter(Boolean);

  const otherCategories = getAllBoxCategories().filter((c) => c.slug !== categorySlug);

  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Boxes", to: "/boxes" },
    { label: category.name },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      <SiteHeader />

      <main className="text-[#0F2744]">
        {/* HERO HEADER SECTION */}
        <section className="w-full bg-[#F6F0E8] border-b border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 sm:pt-12 sm:pb-16">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-6 max-w-3xl">
              <span className="text-[11px] tracking-[0.3em] text-[#C7A86A] font-bold uppercase block mb-2">
                JEWELLERY BOX COLLECTION
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0F2744] leading-[1.08] font-medium">
                {category.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#0F2744]/80 leading-relaxed font-sans">
                {category.headline}
              </p>
            </div>
          </div>
        </section>

        {/* MODELS GRID SECTION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-[#C7A86A]/20">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#0F2744] uppercase">
              AVAILABLE {category.name.toUpperCase()} MODELS ({models.length})
            </span>
            <span className="text-xs text-[#0F2744]/60">Bespoke manufacturing</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model, idx) => (
              <Link
                key={model.slug}
                href={`/boxes/${model.categorySlug}/${model.slug}`}
                className="group flex flex-col bg-white border border-[#C7A86A]/25 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-[#C7A86A] transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Image Showcase */}
                <div className="relative aspect-[4/3] bg-[#F6F0E8] overflow-hidden">
                  <img
                    src={model.images[0]?.src || "/assets/boxim.jpeg"}
                    alt={model.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F2744]/90 px-3 py-1 rounded text-[#F6F0E8] text-[10px] tracking-[0.2em] font-semibold uppercase">
                    {model.modelCode}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono text-[#0F2744] font-medium border border-[#C7A86A]/30">
                    {model.sizes[0]?.dimensions}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-[#C7A86A] font-semibold uppercase block mb-1">
                      {model.subtitle}
                    </span>
                    <h2 className="font-display text-2xl text-[#0F2744] font-medium group-hover:text-[#C7A86A] transition-colors">
                      {model.name}
                    </h2>
                    <p className="mt-3 text-sm text-[#0F2744]/75 leading-relaxed font-sans line-clamp-2">
                      {model.shortDescription}
                    </p>
                  </div>

                  {/* Highlights & CTA */}
                  <div className="mt-6 pt-4 border-t border-[#C7A86A]/15 flex items-center justify-between">
                    <span className="text-xs text-[#0F2744]/70 font-medium">
                      {model.materials.length} Materials • {model.colours.length} Colours
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-bold text-[#C7A86A] group-hover:gap-2.5 transition-all">
                      EXPLORE <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXPLORE OTHER BOX CATEGORIES */}
        <section className="w-full bg-[#F6F0E8] py-16 border-t border-[#C7A86A]/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.3em] text-[#C7A86A] font-bold uppercase block mb-1">
                COMPLETE PACKAGING SUITE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#0F2744] font-medium">
                Explore Other Jewellery Box Categories
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.slug}
                  href={`/boxes/${other.slug}`}
                  className="group p-5 bg-white border border-[#C7A86A]/25 rounded-xl hover:border-[#C7A86A] transition-all hover:-translate-y-1 shadow-xs"
                >
                  <span className="font-display text-base sm:text-lg font-medium text-[#0F2744] group-hover:text-[#C7A86A] transition-colors block mb-1">
                    {other.name}
                  </span>
                  <span className="text-[11px] text-[#0F2744]/60 block mb-3">
                    {other.modelSlugs.length} bespoke models
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] font-bold text-[#C7A86A]">
                    VIEW <ArrowRight className="h-3 w-3" />
                  </span>
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
