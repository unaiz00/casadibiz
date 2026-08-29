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
import { AboutHeroTypewriter } from "@/components/about-hero-typewriter";


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
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hide scrollbars for mobile carousels */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <SiteHeader />
      <main className="bg-[#FAF8F5] text-[#0F2744]">
        {/* 1. HERO - Centered Editorial Composition */}
        <section className="relative overflow-hidden bg-[#FAF8F5] pt-20 lg:pt-28 pb-16 lg:pb-24">
          <AboutHeroTypewriter />

          {/* Hero Image */}
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="relative h-[320px] sm:h-[450px] lg:h-[580px] w-full rounded-lg overflow-hidden animate-hero-image-luxe">
              <Image
                src="/assets/about1.png"
                alt="Bespoke luxury packaging campaign"
                fill
                priority
                className="object-cover"
              />
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
        <section className="pt-8 md:pt-10 pb-8 md:pb-12 bg-[#F6F0E8] border-t border-[#C7A86A]/10 overflow-hidden">
          <MaterialsCarousel />
        </section>

        {/* 5. OUR APPROACH */}
        <section className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#C7A86A]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-24">
              <span className="text-[#C7A86A] text-xs uppercase tracking-[0.35em] font-semibold mb-6 block">
                OUR APPROACH
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-serif text-[#0F2744] leading-tight tracking-tight">
                From Idea to Finished{" "}
                <span className="italic font-serif text-[#C7A86A] font-normal">Experience.</span>
              </h2>
              <p className="font-light text-[#0F2744]/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans mt-8">
                From the first conversation to the final presentation, every stage is considered with purpose — ensuring the finished packaging feels unmistakably yours.
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
              priority
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
