import React from "react";
import Image from "next/image";

export function CraftOfPackaging({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full bg-white pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-5 lg:pb-6 overflow-hidden border-t border-[#C7A86A]/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[29%_42%_29%] items-center gap-8 sm:gap-10 lg:gap-0">
          {/* LEFT COLUMN — THE CRAFT OF PACKAGING (~29%) */}
          <div className="w-full text-left flex flex-col justify-center lg:border-r lg:border-[#C7A86A]/25 lg:pr-8 xl:pr-10">
            {/* Small Accent Rule */}
            <div className="w-7 sm:w-8 h-[1px] bg-[#C7A86A] mb-3 sm:mb-3.5" aria-hidden="true" />

            {/* Left Heading (Two-line serif, 21–24px on desktop) */}
            <h2 className="font-display font-medium text-xl sm:text-[22px] lg:text-[23px] xl:text-[24px] text-[#0F2744] tracking-[0.04em] uppercase leading-[1.2] mb-3">
              THE CRAFT OF<br />PACKAGING
            </h2>

            {/* Left Body Text (13–14px, comfortable line height) */}
            <p className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#0F2744]/80 font-normal leading-[1.65]">
              Every detail matters. From thoughtful design and carefully selected materials to refined finishing, we create packaging that tells your brand&apos;s story.
            </p>
          </div>

          {/* CENTER COLUMN — FEATURE IMAGE (~42%, 360–400px wide, ~2.1:1 landscape aspect ratio) */}
          <div className="w-full flex items-center justify-center px-2 sm:px-4 lg:px-6">
            <div className="relative w-full max-w-[380px] h-[170px] sm:h-[180px] lg:h-[180px] xl:h-[185px] rounded-[6px] overflow-hidden bg-[#FAF8F5] border border-[#C7A86A]/30 shadow-xs mx-auto">
              <Image
                src="/assets/giftim.jpeg"
                alt="Coordinated Packaging Details"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 400px, 380px"
                priority={false}
              />

              {/* Translucent Dark Caption Bar across bottom */}
              <div className="absolute inset-x-0 bottom-0 py-2.5 sm:py-3 bg-black/60 backdrop-blur-[2px] text-center z-10 pointer-events-none">
                <p className="font-sans text-[11px] sm:text-[11.5px] text-[#FAF8F5] tracking-[0.08em] font-medium uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Coordinated Packaging Details
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — MATERIALS THAT MATTER (~29%) */}
          <div className="w-full text-left flex flex-col justify-center lg:border-l lg:border-[#C7A86A]/25 lg:pl-8 xl:pl-10">
            {/* Small Accent Rule */}
            <div className="w-7 sm:w-8 h-[1px] bg-[#C7A86A] mb-3 sm:mb-3.5" aria-hidden="true" />

            {/* Right Heading (Two-line serif, 20–22px on desktop) */}
            <h2 className="font-display font-medium text-[19px] sm:text-[20px] lg:text-[21px] xl:text-[22px] text-[#0F2744] tracking-[0.04em] uppercase leading-[1.2] mb-3">
              MATERIALS THAT<br />MATTER
            </h2>

            {/* Right Body Text (13–14px, comfortable line height) */}
            <p className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#0F2744]/80 font-normal leading-[1.65]">
              Designed to be seen. Made to be remembered. Carefully selected materials, refined finishes and considered details come together to create a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Statement = CraftOfPackaging;
export default CraftOfPackaging;
