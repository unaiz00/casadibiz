"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CraftOfPackaging() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-hidden rounded-[10px] shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)] group cursor-pointer">
              <img
                src="/assets/imagesec.jpeg"
                alt="Luxury magnetic packaging"
                width={1402}
                height={1122}
                loading="lazy"
                className="w-full h-[260px] sm:h-[320px] md:h-[280px] lg:h-[440px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="mt-6 sm:mt-8 font-display text-[32px] sm:text-[38px] md:text-[36px] lg:text-[52px] font-medium text-[#111] leading-[1.05] lg:leading-[0.98] tracking-[-1px]">
              THE CRAFT OF<br />PACKAGING
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#777]">
              Every package is thoughtfully designed with premium materials,
              precision craftsmanship, and timeless elegance.
            </p>

            {/* Left Overlapping Images composition wrapper */}
            <div className="relative w-full mt-6 sm:mt-8 pb-[100px] sm:pb-[110px] md:pb-[110px] lg:pb-[160px]">
              {/* Image 1: Large primary supporting image */}
              <div className="w-[60%] overflow-hidden rounded-[10px] shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)] group cursor-pointer">
                <img
                  src="/assets/boxim.jpeg"
                  alt="Jewelry packaging set"
                  width={1402}
                  height={1122}
                  loading="lazy"
                  className="w-full h-[180px] sm:h-[210px] md:h-[190px] lg:h-[300px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Image 2: Smaller overlapping image positioned over bottom-right of Image 1 */}
              <div className="absolute right-[5%] bottom-0 w-[46%] overflow-hidden rounded-[10px] shadow-[0_20px_50px_rgba(17,17,17,0.3)] z-10 group cursor-pointer">
                <img
                  src="/assets/giftim.jpeg"
                  alt="Branded packaging details"
                  width={1402}
                  height={1122}
                  loading="lazy"
                  className="w-full h-[140px] sm:h-[160px] md:h-[150px] lg:h-[220px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Handcrafted Ribbon Finish + Refined Editorial Text block */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Top whitespace and ribbon image */}
            <figure className="group cursor-pointer mt-6 sm:mt-8 md:mt-2 lg:mt-32">
              <div className="overflow-hidden rounded-[10px] shadow-[0_10px_24px_-14px_rgba(17,17,17,0.2)]">
                <img
                  src="/assets/allimages.jpeg"
                  alt="Hand-tied ribbon box"
                  width={1535}
                  height={1024}
                  loading="lazy"
                  className="w-full h-[240px] sm:h-[260px] md:h-[220px] lg:h-[320px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-2 text-[11px] uppercase tracking-[2px] text-[#777]">
                Handcrafted Ribbon Finish
              </figcaption>
            </figure>

            {/* Whitespace before materials text block */}
            <div className="max-w-md lg:max-w-[340px] flex flex-col items-start bg-transparent mt-10 sm:mt-12 md:mt-10 lg:mt-36 xl:mt-48 mb-8 sm:mb-12 lg:mb-0">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-navy uppercase tracking-[2px] mb-3 sm:mb-4">
                MATERIALS THAT MATTER
              </h3>
              <p className="text-sm leading-relaxed text-[#555] mb-5 sm:mb-6 font-light">
                Thoughtfully selected materials, refined finishes and considered details come together to create packaging worthy of the brand it represents.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#0F2744] hover:bg-[#18365B] active:scale-95 text-white text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-[3px] transition-all duration-300 w-fit"
              >
                <span>DISCOVER OUR CRAFT</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#C7A86A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Statement = CraftOfPackaging;
export default CraftOfPackaging;

