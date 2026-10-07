"use client";

import { Palette } from "lucide-react";

interface SpecDetail {
  name?: string;
  title?: string;
  desc?: string;
}

interface PaperBagFinishingProps {
  finishes?: SpecDetail[];
  customisations?: SpecDetail[];
}

export default function PaperBagFinishing({
  finishes = [],
  customisations = [],
}: PaperBagFinishingProps) {
  const hasFinishes = finishes.length > 0;
  const hasCustomisations = customisations.length > 0;

  if (!hasFinishes && !hasCustomisations) return null;

  return (
    <section id="finishing-section" className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
            06 — BRANDING & FINISHING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium">
            Bespoke Finishing Options
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto mt-6" />
        </div>

        <div className={`grid gap-8 max-w-5xl mx-auto ${hasFinishes && hasCustomisations ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {/* Premium Finishes */}
          {hasFinishes && (
            <div className="bg-[#F6F0E8] rounded-2xl p-8 border border-[#C7A86A]/20">
              <h3 className="font-display text-xl text-[#0F2744] font-semibold mb-6 flex items-center gap-3">
                Surface Finishes
              </h3>
              <ul className="space-y-6">
                {finishes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-[#C7A86A]/10 grid place-items-center text-[#C7A86A] shrink-0 mt-0.5 font-display font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-base text-[#0F2744] font-semibold">
                        {item.name || item.title}
                      </h4>
                      {item.desc && (
                        <p className="text-xs text-[#0F2744]/70 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Customizations */}
          {hasCustomisations && (
            <div className="bg-[#F6F0E8] rounded-2xl p-8 border border-[#C7A86A]/20">
              <h3 className="font-display text-xl text-[#0F2744] font-semibold mb-6 flex items-center gap-3">
                <Palette className="h-5 w-5 text-[#C7A86A]" /> Branding Details
              </h3>
              <ul className="space-y-6">
                {customisations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-[#C7A86A]/10 grid place-items-center text-[#C7A86A] shrink-0 mt-0.5 font-display font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-base text-[#0F2744] font-semibold">
                        {item.title || item.name}
                      </h4>
                      {item.desc && (
                        <p className="text-xs text-[#0F2744]/70 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
