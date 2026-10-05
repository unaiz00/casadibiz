import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import { getAllWrapProducts } from "@/data/wraps-data";

export const metadata: Metadata = {
  title: "Luxury Wrapping Paper & Tissue Paper | CASA DI BIZ",
  description:
    "Explore CASA DI BIZ luxury wrapping papers, tissue paper and bespoke wrapping materials crafted for jewellery, gift and premium packaging presentation.",
  alternates: {
    canonical: "https://casadibiz.com/wraps",
  },
  openGraph: {
    title: "Luxury Wrapping Paper & Tissue Paper | CASA DI BIZ",
    description:
      "Explore CASA DI BIZ luxury wrapping papers, tissue paper and bespoke wrapping materials crafted for jewellery, gift and premium packaging presentation.",
    url: "https://casadibiz.com/wraps",
    siteName: "CASA DI BIZ",
    images: [{ url: "/assets/cats/wraps.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wrapping Paper & Tissue Paper | CASA DI BIZ",
    description:
      "Explore CASA DI BIZ luxury wrapping papers, tissue paper and bespoke wrapping materials crafted for jewellery, gift and premium packaging presentation.",
    images: ["/assets/cats/wraps.png"],
  },
};

export default function WrapsPage() {
  const wrapProducts = getAllWrapProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://casadibiz.com/wraps#webpage",
        name: "Luxury Wrapping Paper & Tissue Paper | CASA DI BIZ",
        description:
          "Explore CASA DI BIZ luxury wrapping papers, tissue paper and bespoke wrapping materials crafted for jewellery, gift and premium packaging presentation.",
        url: "https://casadibiz.com/wraps",
        isPartOf: {
          "@type": "WebSite",
          name: "CASA DI BIZ Luxury Packaging",
          url: "https://casadibiz.com",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://casadibiz.com/wraps#itemlist",
        name: "CASA DI BIZ Wrapping Paper Materials",
        itemListElement: wrapProducts.map((prod, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: prod.name,
          url: `https://casadibiz.com/wraps/${prod.categorySlug}/${prod.slug}`,
          image: `https://casadibiz.com${prod.image.src}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        {/* HERO SECTION */}
        <section className="w-full bg-white border-b border-[#0F2744]/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-6 pb-4 sm:pt-14 sm:pb-6">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Wraps" }]} />
            <p className="mt-3.5 sm:mt-8 text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.32em] text-gold font-medium uppercase">
              THE WRAP COLLECTION
            </p>
            <h1 className="mt-2 sm:mt-3 font-display text-[28px] sm:text-5xl md:text-6xl text-navy leading-[1.12] sm:leading-[1.05]">
              Wrapping papers crafted to make unboxing{" "}
              <span className="italic text-gradient-gold">unforgettable.</span>
            </h1>
            <p className="mt-2.5 sm:mt-5 max-w-2xl text-[13px] sm:text-base text-muted-luxe leading-relaxed">
              Four signature wrapping paper materials, precision-calendered, printed, and finished in the papers, textures, and dimensions tailored to your brand.
            </p>
          </div>
        </section>

        {/* MATERIAL CATALOGUE SECTION */}
        <section className="w-full bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-6 pb-12 sm:pt-12 sm:pb-16">
            <div className="mb-4 sm:mb-10">
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.32em] text-gold font-medium uppercase">
                MATERIAL CATALOGUE
              </p>
              <h2 className="mt-1.5 sm:mt-3 font-display text-2xl sm:text-3xl lg:text-4xl text-navy leading-tight">
                Our Wrapping Paper Materials
              </h2>
            </div>

            <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {wrapProducts.map((it, i) => (
                <Link
                  key={it.slug}
                  href={`/wraps/${it.categorySlug}/${it.slug}`}
                  className="group flex flex-col bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-[14px] overflow-hidden hover:border-[#C7A86A]/70 hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-white">
                    <img
                      src={it.image.src}
                      alt={it.image.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg sm:text-2xl text-navy leading-tight">
                      {it.name}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-luxe leading-relaxed flex-1">
                      {it.shortDescription}
                    </p>
                    <span className="mt-3.5 sm:mt-5 inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.28em] font-semibold text-gold group-hover:gap-3 transition-all">
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
