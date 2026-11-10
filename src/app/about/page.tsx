import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { MaterialsCarousel } from "@/components/materials-carousel";
import { ApproachRail } from "@/components/approach-rail";
import { WhatWeCreate } from "@/components/what-we-create";
import { WhyCasaDiBiz } from "@/components/why-casa-di-biz";
import { BrandPhilosophy } from "@/components/brand-philosophy";


export const metadata: Metadata = {
  title: "About Us — Casa Di Biz | Bespoke Luxury Packaging Manufacturer",
  description: "Learn about Casa Di Biz, a bespoke luxury packaging manufacturer specializing in rigid boxes, boutique paper bags, velvet pouches, and premium ribbons in the UAE.",
  openGraph: {
    title: "About Us — Casa Di Biz",
    description: "Learn about Casa Di Biz, a bespoke luxury packaging manufacturer specializing in rigid boxes, boutique paper bags, velvet pouches, and premium ribbons in the UAE.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-navy">
      {/* Hide scrollbars for mobile carousels */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <SiteHeader />
      <main className="bg-ivory text-navy">
        {/* 1. HERO - Two-Column Editorial Composition */}
        <section className="relative bg-ivory py-10 sm:py-14 lg:py-16 xl:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] items-center gap-10 lg:gap-12 xl:gap-16">
              {/* Left Column: Content (approx. 42% on desktop) */}
              <div className="flex flex-col justify-center">
                <span className="text-[#C7A86A] text-xs uppercase tracking-[0.35em] font-semibold mb-3 sm:mb-4 block">
                  ABOUT CASA DI BIZ
                </span>

                <h1 className="font-display font-serif text-3xl xs:text-4xl sm:text-[42px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] text-[#0F2744] leading-[1.16] tracking-tight mb-5 sm:mb-6 font-normal">
                  Packaging Designed Around Your{" "}
                  <span className="italic text-[#C7A86A] font-serif font-normal">
                    Brand.
                  </span>
                </h1>

                <p className="font-sans font-light text-navy/80 text-[14.5px] sm:text-base leading-relaxed mb-6 sm:mb-7 max-w-xl">
                  We bring together thoughtful design, quality materials and
                  trusted manufacturing partners to create packaging that reflects
                  your brand. From custom boxes and bags to ribbons and gifting
                  essentials, we manage the sourcing and customisation process to
                  deliver packaging tailored to your requirements.
                </p>

                {/* Supporting Highlights */}
                <div className="pt-4 sm:pt-5 border-t border-[#C7A86A]/25">
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-2.5 sm:gap-x-3.5 text-xs sm:text-[13px] font-medium text-navy/85 tracking-wide">
                    <span>Bespoke Design & Branding</span>
                    <span className="text-[#C7A86A]/60 select-none font-light" aria-hidden="true">|</span>
                    <span>Global Product Sourcing</span>
                    <span className="text-[#C7A86A]/60 select-none font-light" aria-hidden="true">|</span>
                    <span>Customisation & Bulk Supply</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image (approx. 58% on desktop) */}
              <div className="w-full">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/3] min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] xl:min-h-[500px] rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/assets/about1.webp"
                    alt="Bespoke luxury packaging campaign"
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BRAND PHILOSOPHY */}
        <BrandPhilosophy />

        {/* 3. WHAT WE CREATE */}
        <WhatWeCreate />

        {/* WHY CASA DI BIZ */}
        <WhyCasaDiBiz />

        {/* 4. MATERIALS & CRAFT */}
        <section className="pt-8 md:pt-10 pb-8 md:pb-12 bg-cream border-t border-border-luxe/60 overflow-hidden">
          <MaterialsCarousel />
        </section>

        {/* 5. OUR APPROACH */}
        <section className="py-20 lg:py-28 bg-ivory border-t border-border-luxe/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">
              <span className="text-gold text-xs uppercase tracking-[0.35em] font-semibold mb-4 sm:mb-5 block">
                HOW WE WORK
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] lg:leading-[62px] font-serif text-navy leading-tight tracking-tight">
                From Vision to Packaging,<br className="hidden sm:inline" />{" "}
                <span className="italic font-serif text-gold font-normal">Thoughtfully Delivered.</span>
              </h2>
              <p className="font-light text-navy/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans mt-6 sm:mt-7">
                Every great packaging solution begins with understanding your brand. We bring together design, sourcing and customization to turn your requirements into a considered final product.
              </p>
            </div>

            <ApproachRail />
          </div>
        </section>



        {/* 7. SIGNATURE SHOWCASE (Climax Full-Width Image) */}
        <section className="relative h-[65vh] sm:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#0F2744]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/imagesec.jpeg"
              alt="Cinematic showcase of luxury packaging details"
              fill
              loading="lazy"
              className="object-cover brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-[#0F2744]/25 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FAF8F5]">
            <h2 className="font-display font-serif text-4xl sm:text-6xl md:text-7xl leading-tight mb-8 tracking-wide">
              Made to Be Remembered.
            </h2>
            <div className="h-[1px] w-24 bg-[#C7A86A] mx-auto" />
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="bg-[#0F2744] text-[#FAF8F5] py-24 md:py-32 relative overflow-hidden">
          {/* Subtle gold ribbon SVG vector layout */}
          <div className="absolute -right-32 -bottom-32 opacity-10 pointer-events-none w-[500px] h-[500px]">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <path d="M0 150C80 150 120 50 200 50" stroke="#C7A86A" strokeWidth="1" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF8F5] leading-tight mb-6 max-w-4xl mx-auto">
              Let's Create Something<br />Worth Unboxing.
            </h2>
            <p className="text-[#FAF8F5]/75 text-sm sm:text-base leading-relaxed mb-12 max-w-lg mx-auto">
              Tell us about your brand and the packaging experience you envision. Our design and material specialists are ready to collaborate.
            </p>

            <div className="flex justify-center items-center">
              <Link href="/contact" className="inline-flex justify-center items-center gap-3 bg-[#C7A86A] hover:bg-[#bfa05d] text-[#0F2744] transition-all rounded-none px-10 py-4.5 text-xs tracking-[0.25em] font-semibold uppercase">
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
