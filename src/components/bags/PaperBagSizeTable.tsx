"use client";

interface SizeItem {
  label?: string;
  value: string;
  desc?: string;
}

interface PaperBagSizeTableProps {
  sizes: SizeItem[];
}

export default function PaperBagSizeTable({ sizes = [] }: PaperBagSizeTableProps) {
  return (
    <section id="sizes-section" className="w-full bg-[#F6F0E8] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
            05 — SIZES & DIMENSIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium">
            Standard Carrier Configurations
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto mt-6" />
        </div>

        {/* Specification Table */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#C7A86A]/20 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F2744] text-[#F6F0E8] border-b border-[#C7A86A]/30">
                  {sizes[0]?.label && (
                    <th className="py-5 px-6 font-display text-sm tracking-wider uppercase font-semibold">
                      Size Reference
                    </th>
                  )}
                  <th className="py-5 px-6 font-display text-sm tracking-wider uppercase font-semibold">
                    Dimensions (W × H × D)
                  </th>
                  <th className="py-5 px-6 font-display text-sm tracking-wider uppercase font-semibold">
                    Ideal Application
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C7A86A]/10 text-[#0F2744]">
                {sizes.map((size, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F0E8]/50 transition-colors">
                    {size.label && (
                      <td className="py-5 px-6 font-display font-semibold text-lg text-[#C7A86A]">
                        {size.label}
                      </td>
                    )}
                    <td className="py-5 px-6 font-mono text-sm font-semibold tracking-wide">
                      {size.value}
                    </td>
                    <td className="py-5 px-6 text-sm text-[#0F2744]/75">
                      {size.desc || "Standard retail configurations."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Enquiry Note */}
        <div className="text-center mt-10">
          <p className="text-xs text-[#0F2744]/70 font-semibold tracking-wider uppercase">
            * Custom dimensions available upon enquiry
          </p>
        </div>
      </div>
    </section>
  );
}
