"use client";

interface SpecItem {
  label: string;
  value: string;
  desc?: string;
}

interface PaperBagOverviewProps {
  longDescription: string;
  specs: SpecItem[];
}

export default function PaperBagOverview({ longDescription, specs = [] }: PaperBagOverviewProps) {
  return (
    <section id="construction-section" className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-5 block">
            02 — THE CONSTRUCTION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-tight font-medium">
            Production & Specification Details
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto my-6" />
          <p className="text-[#0F2744]/75 text-base sm:text-lg leading-relaxed">
            {longDescription}
          </p>
        </div>

        {/* Specifications List (Editorial Layout) */}
        <div className="max-w-4xl mx-auto bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl p-8 sm:p-12 shadow-sm">
          <h3 className="font-display text-2xl text-[#0F2744] font-semibold mb-8 border-b border-[#C7A86A]/20 pb-4">
            Technical Profile
          </h3>
          
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex flex-col items-start border-l-2 border-[#C7A86A]/40 pl-5">
                <dt className="text-[11px] tracking-[0.25em] font-semibold text-[#C7A86A] uppercase mb-2">
                  {spec.label}
                </dt>
                <dd className="font-display text-lg text-[#0F2744] font-semibold mb-2">
                  {spec.value}
                </dd>
                {spec.desc && (
                  <dd className="text-xs text-[#0F2744]/70 leading-relaxed">
                    {spec.desc}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
