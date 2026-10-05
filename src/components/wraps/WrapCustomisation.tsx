import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WrapProduct } from "@/data/wraps-data";

interface WrapCustomisationProps {
  product: WrapProduct;
}

export default function WrapCustomisation({ product }: WrapCustomisationProps) {
  const quoteUrl = `/contact?category=wraps&product=${encodeURIComponent(product.name)}`;

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20 border-b border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-[#0F2744] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#C7A86A]/30 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mb-10 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight">
              Tailored to Your Brand
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
              We collaborate with premier brands to configure custom wrapping paper formats, palettes, and finishes suited precisely to their packaging programs.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {product.customisation.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#E2C98F] border border-[#C7A86A] rounded-2xl p-6 sm:p-7 shadow-2xs"
              >
                <h3 className="font-display text-lg sm:text-xl text-[#0F2744] font-semibold mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0F2744]/90 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={quoteUrl}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C7A86A] text-[#0F2744] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#d9bd85] shadow-xs min-h-[48px]"
            >
              <span>DISCUSS YOUR REQUIREMENT</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
