import type { WrapProduct } from "@/data/wraps-data";

interface WrapSpecificationsProps {
  product: WrapProduct;
}

export default function WrapSpecifications({ product }: WrapSpecificationsProps) {
  return (
    <section className="w-full bg-[#F6F0E8]/50 border-t border-b border-[#C7A86A]/20 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase mb-2.5">
            SPECIFICATION MATRIX
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium leading-tight">
            Technical Specifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0F2744]/75 leading-relaxed">
            Verified material properties and confirmed technical parameters for {product.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {product.specifications.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C7A86A]/20 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#C7A86A]/45"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0F2744]/60 uppercase mb-2 block">
                {spec.label}
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#0F2744] leading-snug">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
