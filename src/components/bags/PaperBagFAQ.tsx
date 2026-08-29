"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface PaperBagFAQProps {
  faqs: FAQItem[];
}

export default function PaperBagFAQ({ faqs = [] }: PaperBagFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section id="faq-section" className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
            08 — INFORMATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium">
            Manufacturing Q&A
          </h2>
          <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto mt-6" />
        </div>

        <div className="divide-y divide-[#C7A86A]/20 border-y border-[#C7A86A]/20">
          {faqs.map((faq, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                >
                  <span className="flex items-start gap-3.5 font-display text-base sm:text-lg text-[#0F2744] group-hover:text-[#C7A86A] transition-colors">
                    <HelpCircle className="h-5 w-5 text-[#C7A86A] shrink-0 mt-0.5" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C7A86A] shrink-0 mt-1 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-60 mt-3.5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[#0F2744]/75 leading-relaxed pl-8.5">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
