"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { WrapProduct } from "@/data/wraps-data";

interface WrapFAQProps {
  product: WrapProduct;
}

export default function WrapFAQ({ product }: WrapFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase mb-2.5">
            <HelpCircle className="h-3.5 w-3.5 text-[#C7A86A]" />
            <span>PRODUCT ADVISORY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0F2744]/75 leading-relaxed">
            Key inquiries regarding specifications, formats, and quotation procedures for {product.name}.
          </p>
        </div>

        <div className="space-y-3.5">
          {product.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F6F0E8] border-[#C7A86A]/40 shadow-xs"
                    : "bg-white border-[#C7A86A]/20 hover:border-[#C7A86A]/45"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg text-[#0F2744] font-medium leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0F2744] text-[#F6F0E8] rotate-180"
                        : "bg-[#F6F0E8] text-[#0F2744]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#0F2744]/80 leading-relaxed font-sans border-t border-[#C7A86A]/15">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
