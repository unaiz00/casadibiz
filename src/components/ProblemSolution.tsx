import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ProblemSolution() {
  return (
    <section className="w-full bg-[#F6F0E8] py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 2xl:gap-20 items-center">
          {/* LEFT: Large CASA DI BIZ Packaging Image (Desktop: Left, Mobile: First) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[380px] md:h-[440px] lg:h-[540px] xl:h-[580px] rounded-[10px] overflow-hidden bg-[#FAF8F5]/80 border border-[#C7A86A]/20 shadow-xs">
              <Image
                src="/assets/about2.webp"
                alt="CASA DI BIZ bespoke luxury packaging craftsmanship"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                priority={false}
              />
            </div>
          </div>

          {/* RIGHT: Problem / Agitation / Solution Storytelling Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="w-5 sm:w-6 h-[1px] bg-[#C7A86A]/60" aria-hidden="true" />
              <p className="text-[10.5px] sm:text-xs tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
                THE CASA DI BIZ DIFFERENCE
              </p>
            </div>

            {/* Section Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-medium text-[#0F2744] leading-[1.2] tracking-[-0.015em] mb-7 sm:mb-8">
              Your packaging should be as distinctive as your brand.
            </h2>

            {/* Narrative Storytelling Blocks */}
            <div className="space-y-5 sm:space-y-6">
              {/* 1. Main Problem */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#0F2744] tracking-[0.16em] uppercase">
                  THE PROBLEM
                </h3>
                <p className="font-sans text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#0F2744]/80 font-light leading-relaxed">
                  Does your packaging truly reflect your brand identity? Standard sizes, fixed structures and limited customization can make it difficult to create packaging that feels uniquely yours.
                </p>
              </div>

              {/* Fine Separator */}
              <div className="border-t border-[#C7A86A]/20" aria-hidden="true" />

              {/* 2. Agitation */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#0F2744] tracking-[0.16em] uppercase">
                  WHY IT MATTERS
                </h3>
                <p className="font-sans text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#0F2744]/80 font-light leading-relaxed">
                  Your product may be exceptional, but generic shapes, ordinary branding and packaging that doesn&apos;t quite fit your product can leave your brand looking less distinctive. Why settle for standard when your brand has its own identity?
                </p>
              </div>

              {/* Fine Separator */}
              <div className="border-t border-[#C7A86A]/20" aria-hidden="true" />

              {/* 3. Solution */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#C7A86A] tracking-[0.16em] uppercase">
                  OUR SOLUTION
                </h3>
                <p className="font-sans text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#0F2744]/80 font-light leading-relaxed">
                  At CASA DI BIZ, we believe packaging should be made around your vision. From custom dimensions and unique structures to personalized colours, logo placement and design details, we give you the freedom to create packaging that feels unmistakably yours.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-7 sm:pt-8">
              <Link
                href="/contact?enquiry=open"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-[3px] bg-[#0F2744] text-[#FAF8F5] border border-[#C7A86A]/40 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] active:scale-[0.98] transition-all duration-300 shadow-xs cursor-pointer text-center"
              >
                <span>LET&apos;S CREATE YOUR PACKAGING</span>
                <span
                  className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
