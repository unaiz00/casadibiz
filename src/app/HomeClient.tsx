"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import CollectionsGrid from "@/components/CollectionsGrid";
import OrderingProcess from "@/components/OrderingProcess";
import CraftOfPackaging from "@/components/CraftOfPackaging";
import CategoriesShowcase from "@/components/CategoriesShowcase";
import HomeCTA from "@/components/HomeCTA";


/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center sm:flex-row h-[525px] xs:h-[560px] sm:h-[640px] md:h-[680px] lg:h-auto lg:min-h-screen portrait:lg:min-h-[720px] portrait:lg:h-[72vh] pt-7 xs:pt-8 sm:pt-0 pb-4 sm:pb-0 justify-start sm:justify-center">
      {/* Background image: herof2 on desktop, herom2 on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none animate-hero-image-luxe">
        <picture className="absolute inset-0 w-full h-full block">
          <source media="(min-width: 640px)" srcSet="/assets/hero/herof2.webp" />
          <source media="(max-width: 639px)" srcSet="/assets/hero/herom2.webp" />
          <img
            src="/assets/hero/herof2.webp"
            alt="Luxury CASA DI BIZ packaging"
            width={1672}
            height={941}
            className="w-full h-full object-cover object-[76%_bottom] sm:object-[68%_center] lg:object-center portrait:lg:object-[68%_center]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Subtle top fade behind text area only on mobile — stops at ~200px and fades completely to transparent before products */}
        <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-black/55 via-black/25 to-transparent sm:hidden pointer-events-none z-[1]" />
        {/* Soft overall ambient gradient on desktop */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-navy/25 via-navy/10 to-transparent pointer-events-none" />
      </div>

      {/* Text Content Block (Centered at top on mobile, left-aligned on desktop) */}
      <div className="relative w-full max-w-[1920px] mx-auto px-4 xs:px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-[130px] py-0 sm:py-24 md:py-28 lg:py-36 portrait:lg:py-28 text-center sm:text-left flex flex-col items-center sm:items-start z-10 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-10 xl:-translate-y-12 portrait:lg:-translate-y-6">
        <div className="relative animate-fade-up text-center sm:text-left flex flex-col items-center sm:items-start w-full">
          <div className="relative z-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
            {/* Subtle localized vignette behind mobile text area only — zero tint or overlay on product photography */}
            <div className="absolute -inset-x-4 -inset-y-2 bg-black/15 rounded-3xl blur-xl pointer-events-none sm:hidden -z-10" />

            {/* Heading */}
            <h1 className="animate-hero-heading-luxe font-hero-headline font-medium text-[28px] xs:text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[54px] leading-[1.16] sm:leading-[1.12] tracking-[-0.02em] text-[#FAF8F5] mb-0 text-center sm:text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:drop-shadow-none sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px]">
              <span className="block">Luxury Isn&apos;t Just Inside</span>
              <span className="block">It Starts With the Packaging</span>
            </h1>

            {/* Supporting description */}
            <p className="animate-hero-support-luxe font-sans text-[13px] xs:text-[13.5px] sm:text-[15px] md:text-[16px] text-[#FAF8F5]/85 font-normal leading-relaxed sm:leading-[1.6] max-w-[310px] xs:max-w-[350px] sm:max-w-[440px] md:max-w-[480px] mt-2.5 xs:mt-3 sm:mt-4 md:mt-5 text-center sm:text-left drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:drop-shadow-none">
              Bespoke packaging and customised gifts, thoughtfully crafted to reflect your brand.
            </p>

            {/* CTA Buttons */}
            <div className="animate-hero-cta flex flex-wrap items-center justify-center sm:justify-start gap-[8px] sm:gap-[16px] w-full mt-4 xs:mt-4.5 sm:mt-6 md:mt-8">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-[38px] sm:h-[48px] px-3 sm:px-6 rounded-full text-[10.5px] sm:text-[14px] tracking-[0.14em] sm:tracking-[0.18em] font-semibold uppercase bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] border border-[#C7A86A] active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-md sm:shadow-none whitespace-nowrap"
              >
                EXPLORE NOW
              </Link>
              <Link
                href="/contact?enquiry=open"
                className="inline-flex items-center justify-center h-[38px] sm:h-[48px] px-3 sm:px-6 rounded-full text-[10.5px] sm:text-[14px] tracking-[0.14em] sm:tracking-[0.18em] font-semibold uppercase bg-[#FAF8F5] text-[#0F2744] hover:bg-[#C7A86A] hover:text-[#0F2744] hover:border-[#C7A86A] border border-[#FAF8F5] active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-md sm:shadow-none whitespace-nowrap"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured collection ---------------- */
function Featured() {
  return (
    <section className="w-full bg-[#071526]">
      <div className="relative min-h-[350px] xs:min-h-[365px] sm:min-h-[370px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[410px] sm:h-[370px] md:h-[360px] lg:h-[400px] xl:h-[410px] overflow-hidden flex items-start sm:items-center">

        {/* Responsive Background Images: Mobile dedicated ftcp.webp, Desktop imsec2.jpeg */}
        <picture className="absolute inset-0 h-full w-full block">
          <source media="(min-width: 640px)" srcSet="/assets/imsec2.jpeg" />
          <source media="(max-width: 639px)" srcSet="/assets/ftcp.webp" />
          <img
            src="/assets/imsec2.jpeg"
            alt="Luxury jewelry packaging with ring box, velvet pouch and shopping bag"
            width={1672}
            height={941}
            loading="lazy"
            className="h-full w-full object-cover object-right sm:object-center"
          />
        </picture>

        {/* Desktop Gradient Overlay preserved / subtle fade on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071526]/85 via-[#071526]/35 to-transparent sm:from-navy/85 sm:via-navy/60 sm:to-navy/20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 xs:px-6 lg:px-8 pt-7 xs:pt-8 sm:pt-0 sm:py-0">
          <div className="w-full max-w-[58%] xs:max-w-[54%] sm:max-w-lg lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[740px] text-left flex flex-col items-start">
            <p className="text-[11px] xs:text-[12px] sm:text-xs tracking-[0.2em] xs:tracking-[0.24em] sm:tracking-[0.32em] text-gold font-medium mb-1.5 sm:mb-2 lg:mb-2.5 uppercase text-left">
              FEATURED COLLECTION
            </p>
            <h2 className="font-display text-[24px] xs:text-[26px] sm:text-[42px] md:text-[52px] lg:text-[70px] xl:text-[78px] 2xl:text-[82px] text-[#F6F0E8] leading-[1.06] sm:leading-[0.98] lg:leading-[0.96] tracking-tight font-normal text-left">
              <span className="block">Luxury Jewellery</span>
              <span className="block">Packaging</span>
            </h2>
            <p className="text-[#FAF8F5] italic font-display text-[14px] xs:text-[15px] sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] mt-2 sm:mt-2.5 lg:mt-3 text-left">
              Minimal. Elegant. Memorable.
            </p>

            <Link
              href="/collections"
              className="mt-3.5 xs:mt-4 sm:mt-5 lg:mt-6 inline-flex items-center gap-1.5 sm:gap-3 rounded-md bg-gradient-to-r from-[#d9bd85] to-[#c8a15a] text-cream px-3.5 xs:px-4 sm:px-7 py-2 xs:py-2.5 sm:py-3.5 text-[9.5px] xs:text-[10.5px] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] font-medium hover:-translate-y-0.5 active:translate-y-0 transition duration-200"
            >
              VIEW COLLECTION <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- FAQ ---------------- */
const HOME_FAQS = [
  {
    q: "How can I get a quotation for my packaging requirements?",
    a: "Simply contact our team through the enquiry form or WhatsApp. Share your preferred packaging type, dimensions, quantity, material preferences and customization requirements. Our team will review your requirements and provide a quotation.",
  },
  {
    q: "Can I customize packaging with my own brand identity?",
    a: "Yes. We offer bespoke packaging solutions tailored to your brand. Customization options can include logo placement, colors, materials, textures, finishes, ribbons and other detailing to reflect your brand identity.",
  },
  {
    q: "Can I request a sample before placing a bulk order?",
    a: "Sample availability depends on the product and customization requirements. Contact our team to discuss sample options, associated costs and timelines before proceeding with bulk production.",
  },
  {
    q: "What do you need from me to create custom packaging?",
    a: "Ideally, provide your brand logo in a high-resolution vector format, preferred colors, packaging dimensions, reference images and any specific design requirements. Our team can use these details to understand your vision.",
  },
  {
    q: "How long does custom packaging production take?",
    a: "Production timelines depend on the product type, order quantity, material availability and customization complexity. An estimated timeline can be provided after reviewing and confirming your requirements.",
  },
];

function HomeFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full bg-ivory pt-8 sm:pt-10 md:pt-11 lg:pt-12 pb-10 sm:pb-11 md:pb-12 lg:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 text-center mb-7 sm:mb-8 md:mb-9 lg:mb-10">
        <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-2.5 sm:mb-3 uppercase">FAQ</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
          Frequently asked Questions
        </h2>
      </div>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-10 lg:px-8">
        <div className="divide-y divide-border-luxe">
          {HOME_FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer active:opacity-75 transition-opacity"
                  aria-expanded={open}
                >
                  <span className="flex items-start gap-3 font-display text-base sm:text-lg text-navy group-hover:text-gold transition">
                    <HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-muted-luxe leading-relaxed pl-8 font-sans">
                    {f.a}
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

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <Hero />
        <CategoriesShowcase />
        <Featured />
        <OrderingProcess />
        <CraftOfPackaging />
        <CollectionsGrid />
        <HomeFAQ />
        <HomeCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
