"use client";

import Link from "next/link";
import {
  ArrowRight,
  Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import CollectionsGrid from "@/components/CollectionsGrid";

/* ---------------- Sparkles + ribbons decoration ---------------- */
function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      className={`absolute animate-sparkle text-gold ${className}`}
      style={{ animationDelay: `${delay}s` }}
      viewBox="0 0 20 20" fill="currentColor" aria-hidden
    >
      <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
    </svg>
  );
}

function RibbonSwoopTopLeft({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <path d="M20 180C60 140 140 180 180 20" stroke="url(#gold-grad)" strokeWidth="0.5" className="blur-[0.5px]" />
        <path d="M10 170C50 130 130 170 170 10" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="1 2" />
        <path d="M30 190C70 150 150 190 190 30" stroke="url(#gold-grad)" strokeWidth="0.2" />
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#846126" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F9E4B7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function RibbonSwoopBottomRight({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
        <path d="M0 150C80 150 120 50 200 50" stroke="url(#gold-grad-2)" strokeWidth="0.75" />
        <path d="M0 160C80 160 120 60 200 60" stroke="url(#gold-grad-2)" strokeWidth="2" opacity="0.4" />
        <path d="M0 140C80 140 120 40 200 40" stroke="url(#gold-grad-2)" strokeWidth="0.25" />
        <defs>
          <linearGradient id="gold-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E4B7" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#846126" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const slides = ["/assets/hero2.png", "/assets/herobg.png"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 2800);
    return () => clearInterval(t);
  }, [slides.length]);
  return (
    <section className="relative overflow-hidden min-h-[60vh] sm:min-h-screen flex items-center">
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Luxury CASA DI BIZ packaging"
          width={1408}
          height={1200}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[900ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
      {/* Soft overall ambient gradient cast to integrate imagery, keeping it bright and tactile */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/25 via-navy/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-1 sm:px-1 lg:px-1 py-20 sm:py-36 w-full text-left">
        <div className="relative max-w-3xl animate-fade-up text-center sm:text-left mx-auto sm:mx-0">
          <div className="relative z-10 max-w-[580px] lg:max-w-[620px]">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight">
              <span className="text-[#FAF8F5]">Packaging worth</span>
              <br />
              <span className="italic text-[#C7A86A]">unwrapping.</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-[#FAF8F5] opacity-90 max-w-[560px] leading-relaxed mt-4 sm:mt-6 mx-auto sm:mx-0 font-light">
              Boxes, bags and ribbons made for brands people keep on the shelf.
            </p>
            <button className="mt-8 sm:mt-10 inline-flex items-center gap-2 sm:gap-3 rounded-full px-6 sm:px-10 py-3.5 sm:py-5 text-xs sm:text-sm tracking-[0.25em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] transition-all duration-300 ease-out cursor-pointer">
              EXPLORE NOW <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */
function Categories() {
  const items = [
    { label: "Boxes", img: "/assets/cats/boxclor.mp4", slug: "boxes" },
    { label: "Bags", img: "/assets/cats/papercolr.mp4", slug: "bags" },
    { label: "Pouches", img: "/assets/cats/pouchcolr.mp4", slug: "pouches" },
    { label: "Wraps", img: "/assets/cats/wrapedit.mp4", slug: "wraps" },
    { label: "Ribbons", img: "/assets/cats/ribboncolr.mp4", slug: "ribbons" },
    { label: "Collections", img: "/assets/cats/cllctv.mp4", slug: "collections" },
    { label: "Gifting Essentials", img: "/assets/cats/giftcolr.mp4", slug: "gifting-essentials" },
  ];
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {items.map(({ label, img, slug }, i) => {
            const isVideo = img.endsWith(".mp4");
            const inner = (
              <>
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-100" />
                  {isVideo ? (
                    <video
                      src={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="relative h-full w-full object-contain mix-blend-multiply"
                    />
                  ) : (
                    <img
                      src={img}
                      alt={label}
                      loading="lazy"
                      className="relative h-full w-full object-contain mix-blend-multiply"
                    />
                  )}
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm text-navy text-center leading-tight">{label}</span>
                <span className="h-[2px] w-6 bg-gold/60 rounded-full" />
              </>
            );
            const cls = "group flex flex-col items-center gap-2 sm:gap-3";
            if (slug === "boxes") return <Link key={label} href="/boxes" className={cls}>{inner}</Link>;
            if (slug === "bags") return <Link key={label} href="/bags" className={cls}>{inner}</Link>;
            if (slug === "pouches") return <Link key={label} href="/pouches" className={cls}>{inner}</Link>;
            if (slug === "wraps") return <Link key={label} href="/wraps" className={cls}>{inner}</Link>;
            if (slug === "ribbons") return <Link key={label} href="/ribbons" className={cls}>{inner}</Link>;
            if (slug === "collections") return <Link key={label} href="/collections" className={cls}>{inner}</Link>;
            if (slug === "gifting-essentials") return <Link key={label} href="/gifting" className={cls}>{inner}</Link>;
            return <Link key={label} href={`/category/${slug}`} className={cls}>{inner}</Link>;

          })}

        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured collection ---------------- */
function Featured() {
  return (
    <section className="w-full">
      <div className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] overflow-hidden flex items-center justify-center p-6 sm:p-10 md:p-16">

        <img
          src="/assets/imsec2.jpeg"
          alt="Luxury jewelry packaging with ring box, velvet pouch and shopping bag"
          width={1408} height={1104} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/30" />

        <div className="relative z-10 text-center max-w-3xl">
          <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-6">FEATURED COLLECTION</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F6F0E8] leading-tight">
            Luxury Jewelry<br />Packaging
          </h2>
          <p className="text-[#FAF8F5] italic font-display text-lg sm:text-xl mt-6">Minimal. Elegant. Memorable.</p>

          <button className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#d9bd85] to-[#c8a15a] text-cream px-7 py-3.5 text-xs tracking-[0.28em] font-medium hover:-translate-y-0.5 transition">
            VIEW COLLECTION <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Pick your packaging", desc: "Choose from boxes, bags, pouches, ribbons and wraps in sizes that fit your product." },
    { n: "02", title: "Add your finish", desc: "Select materials, foil stamping, embossing, and colours to match your brand." },
    { n: "03", title: "We make and ship", desc: "Our team produces your order and delivers it to your door, ready for the shelf." },
  ];
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-10 sm:py-12">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3">HOW IT WORKS</p>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">Order in three steps</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-display text-4xl sm:text-5xl text-gold/30">{s.n}</span>
              <h4 className="font-display text-lg sm:text-xl text-navy mt-2 mb-2">{s.title}</h4>
              <p className="text-sm text-muted-luxe leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs tracking-[0.28em] font-medium bg-navy text-[#C7A86A] hover:bg-gold transition">
            START YOUR ORDER <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- image gallery---------------- */
function Statement() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-hidden rounded-[10px] shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)] group cursor-pointer">
              <img
                src="/assets/imagesec.jpeg"
                alt="Luxury magnetic packaging"
                className="w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="mt-6 sm:mt-8 font-display text-[32px] sm:text-[44px] lg:text-[52px] font-medium text-[#111] leading-[0.98] tracking-[-1px]">
              THE CRAFT OF<br />PACKAGING
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#777]">
              Every package is thoughtfully designed with premium materials,
              precision craftsmanship, and timeless elegance.
            </p>

            {/* Left Overlapping Images composition wrapper */}
            <div className="relative w-full mt-8 pb-[100px] sm:pb-[130px] lg:pb-[160px]">
              {/* Image 1: Large primary supporting image */}
              <div className="w-[60%] overflow-hidden rounded-[10px] shadow-[0_16px_40px_-20px_rgba(17,17,17,0.2)] group cursor-pointer">
                <img
                  src="/assets/boxim.jpeg"
                  alt="Jewelry packaging set"
                  className="w-full h-[180px] sm:h-[240px] lg:h-[300px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Image 2: Smaller overlapping image positioned over bottom-right of Image 1 */}
              <div className="absolute right-[5%] bottom-0 w-[46%] overflow-hidden rounded-[10px] shadow-[0_20px_50px_rgba(17,17,17,0.3)] z-10 group cursor-pointer">
                <img
                  src="/assets/giftim.jpeg"
                  alt="Branded packaging details"
                  className="w-full h-[140px] sm:h-[180px] lg:h-[220px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Handcrafted Ribbon Finish + Refined Editorial Text block */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Top whitespace and ribbon image */}
            <figure className="group cursor-pointer mt-12 lg:mt-32">
              <div className="overflow-hidden rounded-[10px] shadow-[0_10px_24px_-14px_rgba(17,17,17,0.2)]">
                <img
                  src="/assets/allimages.jpeg"
                  alt="Hand-tied ribbon box"
                  className="w-full h-[240px] sm:h-[280px] lg:h-[320px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-2 text-[11px] uppercase tracking-[2px] text-[#777]">
                Handcrafted Ribbon Finish
              </figcaption>
            </figure>

            {/* Whitespace before materials text block */}
            <div className="max-w-md lg:max-w-[340px] flex flex-col items-start bg-transparent mt-16 lg:mt-48 mb-12 lg:mb-0">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-navy uppercase tracking-[2px] mb-4">
                MATERIALS THAT MATTER
              </h3>
              <p className="text-sm leading-relaxed text-[#555] mb-6 font-light">
                Thoughtfully selected materials, refined finishes and considered details come together to create packaging worthy of the brand it represents.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-[11px] font-medium tracking-[2px] text-navy uppercase hover:text-gold transition duration-300"
              >
                DISCOVER OUR CRAFT <span className="text-gold ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About Us ---------------- */
function AboutUs() {
  return (
    <section id="about" className="w-full bg-grain-navy py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left-side Content (45% width on desktop) */}
          <div className="w-full lg:w-[45%] flex flex-col space-y-6 text-left">
            {/* Eyebrow */}

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight font-normal text-[#FAF8F5]">
              Crafted for Brands That <span className="text-[#C7A86A]">Stand Out.</span>
            </h2>

            {/* Body copy */}
            <p className="text-sm sm:text-base leading-relaxed text-[#FAF8F5]/85 max-w-[520px] font-sans">
              CASA DI BIZ designs luxury packaging for jewelers, boutiques, and premium brands across the Gulf.
              From bespoke boxes to hand-finished ribbons, every piece is made to feel like part of the gift itself.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-[#F6F0E8] text-[#0F2744] hover:bg-[#C7A86A] transition-all duration-300 px-6 py-3.5 rounded-[4px] text-xs font-semibold tracking-[0.2em] w-fit"
            >
              DISCOVER US <span className="text-[#C7A86A] group-hover:text-[#0F2744] inline-block transition-all duration-300 ease-out group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right-side Image (55% width on desktop) */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div
              className="w-full max-w-[620px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden group cursor-pointer"
              style={{ borderRadius: '12px 64px 64px 12px' }}
            >
              <img
                src="/assets/about2.png"
                alt="Luxury packaging design by Casa Di Biz"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
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
        <Categories />
        <Featured />
        <HowItWorks />
        <Statement />
        <AboutUs />
        <CollectionsGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
