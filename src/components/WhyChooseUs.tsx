import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Package, Layers, ShoppingBag, Gem, Handshake } from "lucide-react";

interface ReasonItem {
  number: string;
  title: string;
  description: string;
  icon: typeof Package;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "Tailored to Your Brand",
    description: "Custom branding, colours, dimensions and finishes.",
    icon: Package,
  },
  {
    number: "02",
    title: "Premium Materials",
    description: "A curated range of refined textures and finishes.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Complete Solutions",
    description: "Boxes, bags, pouches and ribbons in perfect harmony.",
    icon: ShoppingBag,
  },
  {
    number: "04",
    title: "Detail-Driven Craftsmanship",
    description: "Precision in structure, finishing and presentation.",
    icon: Gem,
  },
  {
    number: "05",
    title: "From Concept to Production",
    description: "A guided journey from initial idea to production.",
    icon: Handshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F6F0E8] py-14 sm:py-16 md:py-20 lg:py-22 xl:py-26 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Top Area: Editorial Split Layout (~65% visual weight) */}

        {/* Mobile & Tablet Layout (<1024px): Stacked in exact required order */}
        <div className="lg:hidden text-center max-w-2xl mx-auto">
          {/* 1. Centered gold eyebrow */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
            <span className="w-5 sm:w-7 h-[1px] bg-[#C7A86A]/50" aria-hidden="true" />
            <p className="text-[10.5px] sm:text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
              THE CASA DI BIZ DIFFERENCE
            </p>
            <span className="w-5 sm:w-7 h-[1px] bg-[#C7A86A]/50" aria-hidden="true" />
          </div>

          {/* 2. Centered heading: Balanced two lines */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] font-medium text-[#0F2744] leading-[1.18] tracking-[-0.01em] mb-2.5 sm:mb-3">
            <span className="block">Why Choose</span>
            <span className="block">CASA DI BIZ?</span>
          </h2>

          {/* 3. Short supporting paragraph */}
          <p className="font-sans text-[13px] sm:text-[14px] text-[#0F2744]/75 font-light leading-relaxed max-w-lg mx-auto mb-4.5 sm:mb-5">
            A trusted packaging partner for brands that value design, quality and consistency.
          </p>

          {/* 4. Understated CTA */}
          <div className="mb-6 sm:mb-7">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[3px] border border-[#C7A86A]/50 text-[10.5px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-[#0F2744] hover:border-[#C7A86A] hover:text-[#C7A86A] active:scale-[0.98] transition-all duration-300"
            >
              <span>EXPLORE OUR CAPABILITIES</span>
              <span className="text-[11px] text-[#C7A86A] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* 5. Packaging image (controlled height ~200-230px on mobile) */}
          <div className="relative w-full h-[205px] xs:h-[215px] sm:h-[230px] md:h-[290px] max-w-xl mx-auto rounded-lg sm:rounded-xl overflow-hidden bg-[#FAF8F5]/80 border border-[#C7A86A]/20">
            <Image
              src="/assets/imsecc5.jpeg"
              alt="CASA DI BIZ bespoke luxury packaging collection showcasing premium craftsmanship"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 600px, 100vw"
              priority={false}
            />
          </div>
        </div>

        {/* Desktop Layout (1024px and above): Two-column editorial top area */}
        <div className="hidden lg:grid lg:grid-cols-[40%_60%] xl:grid-cols-[38%_62%] gap-10 xl:gap-14 2xl:gap-16 items-center">
          {/* Left Column (~40%): Brand messaging and CTA */}
          <div className="flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C7A86A]/50" aria-hidden="true" />
              <p className="text-[10.5px] xl:text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold uppercase">
                THE CASA DI BIZ DIFFERENCE
              </p>
            </div>

            {/* Main Heading: Balanced two lines */}
            <h2 className="font-display text-3xl lg:text-[36px] xl:text-[42px] font-medium text-[#0F2744] leading-[1.16] tracking-[-0.01em] mb-3.5 xl:mb-4 max-w-sm xl:max-w-md">
              <span className="block">Why Choose</span>
              <span className="block">CASA DI BIZ?</span>
            </h2>

            {/* Supporting text */}
            <p className="font-sans text-[13.5px] xl:text-[14.5px] text-[#0F2744]/75 font-light leading-relaxed mb-6 xl:mb-7 max-w-md">
              A trusted packaging partner for brands that value design, quality and consistency.
            </p>

            {/* Understated CTA */}
            <div>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-4.5 py-2 rounded-[3px] border border-[#C7A86A]/50 text-[10.5px] xl:text-[11px] tracking-[0.2em] uppercase font-medium text-[#0F2744] hover:border-[#C7A86A] hover:text-[#C7A86A] active:scale-[0.98] transition-all duration-300"
              >
                <span>EXPLORE OUR CAPABILITIES</span>
                <span className="text-[11px] text-[#C7A86A] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (~60%): Desktop packaging image reduced to ~380-420px */}
          <div className="relative w-full h-[380px] lg:h-[390px] xl:h-[410px] max-h-[420px] rounded-xl overflow-hidden bg-[#FAF8F5]/80 border border-[#C7A86A]/20">
            <Image
              src="/assets/imsecc5.jpeg"
              alt="CASA DI BIZ bespoke luxury packaging collection showcasing premium craftsmanship"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1280px) 780px, (min-width: 1024px) 60vw, 100vw"
              priority={false}
            />
          </div>
        </div>

        {/* Bottom Area: Five Reasons Feature Strip (~35% visual weight) */}
        <div className="border-t border-[#C7A86A]/20 pt-8 sm:pt-9 md:pt-11 mt-8 sm:mt-9 md:mt-11 lg:mt-13 xl:mt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y divide-[#C7A86A]/15 md:divide-y-0 md:gap-x-8 md:gap-y-6 lg:gap-0 lg:divide-x lg:divide-[#C7A86A]/20">
            {REASONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className={`py-3.5 sm:py-4 md:py-0 flex md:flex-col items-start gap-3 sm:gap-3.5 md:gap-2.5
                    ${idx === 4 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:mx-0 lg:max-w-none" : ""}
                    lg:px-4 xl:px-5 2xl:px-6 first:lg:pl-0 last:lg:pr-0
                  `}
                >
                  {/* Smaller standalone gold outline icon (no circular background or border) */}
                  <div className="shrink-0 text-[#C7A86A] pt-0.5 md:pt-0">
                    <Icon className="h-4 w-4 xl:h-[18px] xl:w-[18px] stroke-[1.5]" aria-hidden="true" />
                  </div>

                  {/* Heading and Short Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-[13.5px] sm:text-[14px] xl:text-[14.5px] text-[#0F2744] font-medium leading-snug tracking-[-0.01em]">
                      <span className="text-[#C7A86A] font-sans text-[11px] xl:text-xs tracking-wider font-semibold mr-1.5">
                        {item.number} —
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] xl:text-[12.5px] text-[#0F2744]/75 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
