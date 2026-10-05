import type { WrapProduct } from "@/data/wraps-data";

interface WrapApplicationsProps {
  product: WrapProduct;
}

export default function WrapApplications({ product }: WrapApplicationsProps) {
  return (
    <section className="w-full bg-[#F6F0E8] py-14 sm:py-20 border-t border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase mb-2.5">
            RECOMMENDED USE CASES
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium leading-tight">
            Applications & Presentation Roles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0F2744]/75 leading-relaxed">
            Engineered specifically to support the following presentation formats and retail environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {product.applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C7A86A]/25 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg sm:text-xl text-[#0F2744] font-semibold mb-3 leading-snug">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0F2744]/75 leading-relaxed font-sans">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
