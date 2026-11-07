"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import CollectionsGrid from "@/components/CollectionsGrid";
import OrderingProcess from "@/components/OrderingProcess";
import CategoriesShowcase from "@/components/CategoriesShowcase";
import HomeCTA from "@/components/HomeCTA";


/* ---------------- Hero ---------------- */
// Desktop hero slides (640px and above)
const DESKTOP_SLIDES = [
  "/assets/hero/herof1.webp",
  "/assets/hero/herof2.webp",
];

// Mobile hero slides (below 640px) — replace with dedicated mobile image paths when uploaded
const MOBILE_SLIDES = [
  "/assets/hero/herom2.webp",
  "/assets/hero/herom1.webp",
];

function Hero() {
  const [i, setI] = useState(0);
  const slideCount = Math.max(DESKTOP_SLIDES.length, MOBILE_SLIDES.length);

  useEffect(() => {
    if (slideCount <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % slideCount), 3000);
    return () => clearInterval(t);
  }, [slideCount]);
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center sm:flex-row h-[460px] xs:h-[490px] sm:h-[640px] md:h-[680px] lg:h-auto lg:min-h-screen portrait:lg:min-h-[720px] portrait:lg:h-[72vh] pt-7 xs:pt-9 sm:pt-0 pb-4 sm:pb-0 justify-start sm:justify-center">
      {/* Background image on mobile (covers controlled hero with products positioned in lower portion) / Desktop full-screen background */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none animate-hero-image-luxe">
        {DESKTOP_SLIDES.map((desktopSrc, idx) => {
          const mobileSrc = MOBILE_SLIDES[idx] || desktopSrc;
          return (
            <picture
              key={desktopSrc}
              className={`absolute inset-0 w-full h-full block transition-opacity duration-[900ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"
                }`}
            >
              <source media="(min-width: 640px)" srcSet={desktopSrc} />
              <source media="(max-width: 639px)" srcSet={mobileSrc} />
              <img
                src={desktopSrc}
                alt="Luxury CASA DI BIZ packaging"
                width={1672}
                height={941}
                className="w-full h-full object-cover object-[76%_bottom] sm:object-[68%_center] lg:object-center portrait:lg:object-[68%_center]"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
              />
            </picture>
          );
        })}
        {/* Subtle top fade behind text area only on mobile — stops at ~200px and fades completely to transparent before products */}
        <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-black/55 via-black/25 to-transparent sm:hidden pointer-events-none z-[1]" />
        {/* Soft overall ambient gradient on desktop */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-navy/25 via-navy/10 to-transparent pointer-events-none" />
      </div>

      {/* Text Content Block (Centered at top on mobile, left-aligned on desktop) */}
      <div className="relative w-full max-w-[1920px] mx-auto px-4 xs:px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-[130px] py-0 sm:py-24 md:py-28 lg:py-36 portrait:lg:py-28 text-center sm:text-left flex flex-col items-center sm:items-start z-10 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-10 xl:-translate-y-12 portrait:lg:-translate-y-6">
        <div className="relative animate-fade-up text-center sm:text-left flex flex-col items-center sm:items-start w-full">
          <div className="relative z-10 w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[550px] mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
            {/* Subtle localized vignette behind mobile text area only — zero tint or overlay on product photography */}
            <div className="absolute -inset-x-4 -inset-y-2 bg-black/15 rounded-3xl blur-xl pointer-events-none sm:hidden -z-10" />

            {/* Heading */}
            <h1 className="animate-hero-heading-luxe font-hero-headline font-semibold text-[22px] xs:text-[25px] sm:text-[36px] md:text-[42px] lg:text-[54px] xl:text-[58px] leading-[1.2] sm:leading-[1.16] md:leading-[1.14] lg:leading-[1.12] tracking-[-0.02em] text-[#FAF8F5] mb-0 text-center sm:text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:drop-shadow-none sm:max-w-[440px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[550px]">
              <span className="block">Luxury Isn't Just Outside</span>
              <span className="block">It Starts With the Packaging</span>
            </h1>

            {/* Supporting description */}
            <p className="animate-hero-support-luxe font-sans text-[12.5px] xs:text-[14px] sm:text-[15px] md:text-[16px] text-[#FAF8F5]/85 font-normal leading-relaxed sm:leading-[1.6] max-w-[290px] xs:max-w-[340px] sm:max-w-[400px] md:max-w-[430px] mt-2 xs:mt-2.5 sm:mt-4 md:mt-6 text-center sm:text-left drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:drop-shadow-none">
              Boxes, Bags & Pouches made for brands <br className="hidden xs:inline" /> People keep on the shelf.
            </p>

            {/* CTA Buttons */}
            <div className="animate-hero-cta flex flex-col items-center sm:items-start w-full mt-3 xs:mt-3.5 sm:mt-6 md:mt-8">
              {/* Desktop CTA: Single explore button preserved */}
              <Link
                href="/collections"
                className="hidden sm:inline-flex items-center justify-center gap-2.5 md:gap-3 rounded-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4.5 lg:py-5 text-xs md:text-sm tracking-[0.25em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] active:scale-95 transition-all duration-300 ease-out cursor-pointer"
              >
                EXPLORE NOW <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>

              {/* Mobile CTA: Synchronized with the 3-second carousel */}
              <div className="relative w-[200px] xs:w-[220px] h-[38px] xs:h-[42px] sm:hidden flex items-center justify-center">
                {/* Slide 0 CTA: EXPLORE NOW (Gold background, navy text) */}
                <Link
                  href="/collections"
                  tabIndex={i === 0 ? 0 : -1}
                  aria-hidden={i !== 0}
                  className={`absolute inset-0 inline-flex items-center justify-center gap-2 rounded-full w-full h-full text-[11px] xs:text-xs tracking-[0.25em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] active:scale-95 transition-all duration-500 ease-in-out cursor-pointer shadow-md ${i === 0
                      ? "opacity-100 pointer-events-auto scale-100"
                      : "opacity-0 pointer-events-none scale-95"
                    }`}
                >
                  EXPLORE NOW <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Slide 1 CTA: CUSTOM INQUIRY (Ivory background, navy text, gold border) */}
                <Link
                  href="/contact?enquiry=open"
                  tabIndex={i === 1 ? 0 : -1}
                  aria-hidden={i !== 1}
                  className={`absolute inset-0 inline-flex items-center justify-center gap-2 rounded-full w-full h-full text-[11px] xs:text-xs tracking-[0.25em] font-semibold bg-[#FAF8F5] text-[#0F2744] border border-[#C7A86A] hover:bg-[#F6F0E8] active:bg-[#F6F0E8] active:scale-95 transition-all duration-500 ease-in-out cursor-pointer shadow-md ${i === 1
                      ? "opacity-100 pointer-events-auto scale-100"
                      : "opacity-0 pointer-events-none scale-95"
                    }`}
                >
                  CUSTOM INQUIRY <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
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
    <section className="w-full">
      <div className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[520px] lg:min-h-[75vh] xl:min-h-[80vh] overflow-hidden flex items-center justify-center p-6 sm:p-10 md:p-12 lg:p-16">

        <img
          src="/assets/imsec2.jpeg"
          alt="Luxury jewelry packaging with ring box, velvet pouch and shopping bag"
          width={1408} height={1104} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/30" />

        <div className="relative z-10 text-center max-w-3xl">
          <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-4 sm:mb-6">FEATURED COLLECTION</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[54px] lg:text-7xl text-[#F6F0E8] leading-tight">
            Luxury Jewelry<br />Packaging
          </h2>
          <p className="text-[#FAF8F5] italic font-display text-lg sm:text-xl mt-4 sm:mt-6">Minimal. Elegant. Memorable.</p>

          <Link
            href="/collections"
            className="mt-6 sm:mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#d9bd85] to-[#c8a15a] text-cream px-6 sm:px-7 py-3 sm:py-3.5 text-xs tracking-[0.28em] font-medium hover:-translate-y-0.5 active:translate-y-0 transition duration-200"
          >
            VIEW COLLECTION <ArrowRight className="h-4 w-4" />
          </Link>
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
    q: "Can I choose the materials, colors and finishes?",
    a: "Yes. Depending on the product, you can explore different materials, textures, colors and finishing options. Our team can help you select combinations that complement your brand's aesthetic and packaging requirements.",
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
  {
    q: "Do you accept international orders and provide shipping?",
    a: "Contact our team with your destination and order requirements to confirm international shipping availability, delivery arrangements and applicable shipping costs.",
  },
];

function HomeFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full bg-ivory py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12 text-center mb-10 sm:mb-12 md:mb-14">
        <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3 uppercase">FAQ</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
          Frequently asked
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
        <CollectionsGrid />
        <HomeFAQ />
        <HomeCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
