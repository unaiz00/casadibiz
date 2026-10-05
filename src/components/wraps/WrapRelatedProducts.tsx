import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WrapProduct } from "@/data/wraps-data";

interface WrapRelatedProductsProps {
  relatedProducts: WrapProduct[];
}

export default function WrapRelatedProducts({ relatedProducts }: WrapRelatedProductsProps) {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="w-full bg-[#F6F0E8]/40 py-14 sm:py-20 border-t border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className="text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase mb-2.5">
              THE COLLECTION
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium leading-tight">
              Explore More Wrapping Papers
            </h2>
          </div>
          <Link
            href="/wraps"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#0F2744] hover:text-[#C7A86A] transition-colors uppercase"
          >
            <span>VIEW FULL CATALOGUE</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Desktop Grid / Mobile Horizontal Swipe Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-6 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {relatedProducts.map((item) => (
            <Link
              key={item.slug}
              href={`/wraps/${item.categorySlug}/${item.slug}`}
              className="group bg-white border border-[#C7A86A]/20 rounded-2xl overflow-hidden snap-start shrink-0 w-[82vw] max-w-[340px] sm:w-[300px] lg:w-auto lg:max-w-none lg:shrink flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-[#C7A86A]/60"
            >
              <div className="relative aspect-[16/11] bg-[#FAF8F5] overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C7A86A] uppercase block mb-2">
                    {item.finish}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-[#0F2744] font-medium leading-snug group-hover:text-[#C7A86A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#0F2744]/75 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C7A86A]/15 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#0F2744] uppercase group-hover:text-[#C7A86A] transition-colors">
                    EXPLORE MATERIAL
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#C7A86A] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
