"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PaperBagQuoteCTAProps {
  productTitle: string;
}

export default function PaperBagQuoteCTA({ productTitle }: PaperBagQuoteCTAProps) {
  return (
    <section id="quote-section" className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden bg-[#0F2744] rounded-3xl shadow-[0_30px_70px_-25px_rgba(22,35,60,0.35)] border border-[#C7A86A]/20">
          {/* Soft gold decorative vector line */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-96 h-96">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <path d="M0 150C80 150 120 50 200 50" stroke="#C7A86A" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="mx-auto max-w-4xl px-6 sm:px-8 py-16 sm:py-24 text-center relative z-10">
            <p className="text-[10px] sm:text-xs tracking-[0.35em] text-[#C7A86A] font-bold mb-6 uppercase">
              09 — SPECIFY CONFIGURATION
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F6F0E8] leading-tight font-medium max-w-3xl mx-auto">
              Discuss Your Packaging Options for {productTitle}
            </h2>
            <p className="mt-6 text-sm sm:text-base text-[#F6F0E8]/75 max-w-xl mx-auto leading-relaxed">
              Share your packaging specifications, dimensions, print requirements, and quantities to receive an expert consultation and direct quote.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-bold bg-[#C7A86A] text-[#0F2744] hover:bg-[#F6F0E8] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@casadibiz.com?subject=Inquiry%20about%20CASA%20DI%20BIZ%20Paper%20Bags"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-semibold border border-[#C7A86A]/40 text-[#F6F0E8] hover:bg-[#F6F0E8] hover:text-[#0F2744] transition-all duration-300 hover:-translate-y-0.5"
              >
                EMAIL INQUIRY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
