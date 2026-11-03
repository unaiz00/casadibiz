"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import CollectionsGrid from "@/components/CollectionsGrid";


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
    const t = setInterval(() => setI((v) => (v + 1) % slideCount), 2800);
    return () => clearInterval(t);
  }, [slideCount]);
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center sm:flex-row h-[450px] xs:h-[480px] sm:h-auto sm:min-h-screen pt-8 xs:pt-10 sm:pt-0 pb-4 sm:pb-0 justify-start sm:justify-center">
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
                className="w-full h-full object-cover object-[76%_bottom] sm:object-center"
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
      <div className="relative w-full max-w-[1920px] mx-auto px-4 xs:px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-[130px] py-0 sm:py-36 text-center sm:text-left flex flex-col items-center sm:items-start z-10 sm:-translate-y-6 lg:-translate-y-10 xl:-translate-y-12">
        <div className="relative animate-fade-up text-center sm:text-left flex flex-col items-center sm:items-start w-full">
          <div className="relative z-10 w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[540px] xl:max-w-[550px] mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
            {/* Subtle localized vignette behind mobile text area only — zero tint or overlay on product photography */}
            <div className="absolute -inset-x-4 -inset-y-2 bg-black/15 rounded-3xl blur-xl pointer-events-none sm:hidden -z-10" />

            {/* Heading */}
            <h1 className="animate-hero-heading-luxe font-hero-headline font-semibold text-[22px] xs:text-[25px] sm:text-[46px] md:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.2] sm:leading-[1.12] tracking-[-0.02em] text-[#FAF8F5] mb-0 text-center sm:text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:drop-shadow-none sm:max-w-[540px] xl:max-w-[550px]">
              <span className="block">Luxury Isn't Just Outside</span>
              <span className="block">It Starts With the Packaging</span>
            </h1>

            {/* Supporting description */}
            <p className="animate-hero-support-luxe font-sans text-[12.5px] xs:text-[14px] sm:text-[16px] text-[#FAF8F5]/85 font-normal leading-relaxed sm:leading-[1.6] max-w-[290px] xs:max-w-[340px] sm:max-w-[430px] mt-2 xs:mt-2.5 sm:mt-6 text-center sm:text-left drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:drop-shadow-none">
              Boxes, Bags & Pouches made for brands <br className="hidden xs:inline" /> People keep on the shelf.
            </p>

            {/* CTA Button */}
            <div className="animate-hero-cta flex justify-center sm:justify-start w-full mt-3.5 xs:mt-4 sm:mt-8">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-5 xs:px-6 sm:px-10 py-2 xs:py-2.5 sm:py-5 text-[11px] xs:text-xs sm:text-sm tracking-[0.25em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] transition-all duration-300 ease-out cursor-pointer shadow-lg sm:shadow-none"
              >
                EXPLORE NOW <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */
function Categories() {
  const items = [
    { label: "Boxes", img: "/animatedicon/animboxicon.gif", slug: "boxes" },
    { label: "Bags", img: "/animatedicon/paperbagicon.gif", slug: "bags" },
    { label: "Pouches", img: "/animatedicon/pouchseticon.gif", slug: "pouches" },
    { label: "Wraps", img: "/animatedicon/wrapseticon.gif", slug: "wraps" },
    { label: "Ribbons", img: "/animatedicon/riibonseticon.gif", slug: "ribbons" },
    { label: "Collections", img: "/animatedicon/collectionicon.gif", slug: "collections" },
    { label: "Gifting Essentials", img: "/animatedicon/giftbox.gif", slug: "gifting-essentials" },
  ];
  return (
    <section id="categories" className="w-full bg-[#F6EFE4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-[72px]">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {items.map(({ label, img, slug }, i) => {
            const isVideo = img.endsWith(".mp4");
            const isLastOnMobile = i === items.length - 1;
            const inner = (
              <>
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  {isVideo ? (
                    <video
                      src={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="relative h-full w-full object-contain mix-blend-multiply"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  ) : (
                    <img
                      src={img}
                      alt={label}
                      width={96}
                      height={96}
                      loading="eager"
                      className="relative h-full w-full object-contain"
                    />
                  )}
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm text-navy text-center leading-tight min-h-[28px] sm:min-h-[34px] flex items-center justify-center">{label}</span>
                <span className="h-[2px] w-6 bg-gold/60 rounded-full" />
              </>
            );
            const cls = `group flex flex-col items-center gap-2 sm:gap-3 ${isLastOnMobile ? "col-start-2 sm:col-start-auto" : ""}`;
            if (slug === "boxes") return <Link key={label} href="/boxes/#jewellery-boxes" className={cls}>{inner}</Link>;
            if (slug === "bags") return <Link key={label} href="/bags" className={cls}>{inner}</Link>;
            if (slug === "pouches") return <Link key={label} href="/pouches" className={cls}>{inner}</Link>;
            if (slug === "wraps") return <Link key={label} href="/wraps" className={cls}>{inner}</Link>;
            if (slug === "ribbons") return <Link key={label} href="/ribbons" className={cls}>{inner}</Link>;
            if (slug === "collections") return <Link key={label} href="/collections" className={cls}>{inner}</Link>;
            if (slug === "gifting-essentials") return <Link key={label} href="/collections/corporate-collection" className={cls}>{inner}</Link>;
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

          <Link
            href="/collections"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#d9bd85] to-[#c8a15a] text-cream px-7 py-3.5 text-xs tracking-[0.28em] font-medium hover:-translate-y-0.5 transition"
          >
            VIEW COLLECTION <ArrowRight className="h-4 w-4" />
          </Link>
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
                width={1402}
                height={1122}
                loading="lazy"
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
                  width={1402}
                  height={1122}
                  loading="lazy"
                  className="w-full h-[180px] sm:h-[240px] lg:h-[300px] object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
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
                  width={1535}
                  height={1024}
                  loading="lazy"
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
                className="inline-flex items-center justify-center gap-2 bg-[#0F2744] hover:bg-[#18365B] text-white text-[11px] sm:text-xs tracking-[0.2em] font-semibold uppercase px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-[3px] transition-colors duration-300 w-fit"
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
    q: "What types of luxury packaging do you offer?",
    a: "Our packaging range includes rigid boxes, jewelry boxes, boutique shopping bags, velvet pouches, wrapping paper, silk ribbons and bespoke corporate gifting packaging.",
  },
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Minimum order quantities depend on the packaging type, materials, customization and production requirements. Contact our team with your requirements to receive the applicable MOQ.",
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
    <section className="w-full bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center mb-10 sm:mb-14">
        <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3 uppercase">FAQ</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
          Frequently asked
        </h2>
      </div>
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="divide-y divide-border-luxe">
          {HOME_FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
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
        <Categories />
        <Featured />
        <HowItWorks />
        <Statement />
        <HomeFAQ />
        <CollectionsGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
