'use client';

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  X,
  Sparkles,
  PenTool,
  Factory,
  Zap,
  Gem,
  Truck,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

/* ---------------- Company details ---------------- */
const COMPANY = {
  phone: "+91 9995255846",
  phoneRaw: "+919995255846",
  whatsapp: "919995255846",
  email: "hello@casadibiz.com",
  address: "Al Quoz Industrial Area 3, Dubai, United Arab Emirates",
  mapQuery: "Al Quoz Industrial Area 3, Dubai, UAE",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

const PRODUCT_TYPES: Record<string, string[]> = {
  Boxes: ["Rigid Boxes", "Magnetic Closure Boxes", "Drawer Boxes", "Jewellery Boxes"],
  Bags: ["Paper Bags", "Luxury Shopping Bags", "Boutique Bags", "Gift Bags"],
  Pouches: ["Velvet Pouches", "Satin Pouches", "Cotton Pouches", "Suede Pouches"],
  Wraps: ["Wrapping Paper", "Tissue Paper", "Custom Printed Wraps", "Speciality Wraps"],
  Ribbons: ["Satin Ribbons", "Grosgrain Ribbons", "Printed Ribbons", "Custom Ribbons"],
  Collections: [
    "Jewellery Collection",
    "Corporate Collection",
    "Wedding Collection",
    "Seasonal Collection",
  ],
  "Gifting Essentials": ["Gift Cards", "Tissue Paper", "Stickers & Seals", "Fillers & Accessories"],
  Other: ["Not listed / Custom"],
};

const PRINTING = [
  "Logo Printing",
  "Foil Stamping",
  "Embossing",
  "Debossing",
  "Spot UV",
  "Not Sure",
];

const WHY = [
  { Icon: Sparkles, title: "Expert Packaging Consultation", text: "Talk it through with people who make packaging every day, not a sales script." },
  { Icon: PenTool, title: "Custom Design Support", text: "Dielines, mockups and finish samples prepared around your brand guidelines." },
  { Icon: Factory, title: "Bulk Manufacturing", text: "In-house production capacity for repeat runs without losing hand-finished quality." },
  { Icon: Zap, title: "Fast Response", text: "Enquiries answered the same working day, with a costing to follow shortly after." },
  { Icon: Gem, title: "Premium Quality", text: "Every unit checked by hand before it leaves the floor — no compromises on finish." },
  { Icon: Truck, title: "Reliable Delivery", text: "Scheduled dispatch across the GCC and worldwide freight for international brands." },
];

const FAQS = [
  { q: "How can I request a quotation?", a: "Use the Get in Touch form on this page. Fill in your product, quantity and finishing preferences and send it through WhatsApp or email — we reply with a costing within one working day." },
  { q: "What is the minimum order quantity (MOQ)?", a: "MOQ depends on the product and construction. Rigid and magnetic boxes typically start at 300 units, bags and pouches at 500, and ribbons at 100 metres. Smaller trial runs can be arranged." },
  { q: "Can I customize my packaging?", a: "Yes — size, board, material, colour, print, foil, emboss, deboss, spot UV, inserts and closures are all made to your specification." },
  { q: "How long does production take?", a: "Standard production is 12–18 working days after artwork and sample approval. Rush timelines can be arranged for repeat orders." },
  { q: "Do you provide samples?", a: "We provide plain structural samples free of charge and fully branded pre-production samples at a nominal cost that is credited against your bulk order." },
  { q: "Do you ship internationally?", a: "Yes. We ship across the GCC, Europe, the UK and the US by air and sea freight, with door delivery available." },
];

export default function ContactPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    packaging: "",
    requirements: "",
    boxType: "",
    boxMaterial: "",
    boxFinishing: "",
    bagType: "",
    bagHandle: "",
    bagFinishing: "",
    pouchType: "",
    pouchClosure: "",
    pouchFinishing: "",
    ribbonType: "",
    ribbonWidth: "",
    ribbonFinishing: "",
    customType: "",
    estimatedQuantity: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sizeParam = params.get("size");
      const productParam = params.get("product");

      if (sizeParam || productParam) {
        setFormData((prev) => ({
          ...prev,
          packaging: productParam ? "Bags" : prev.packaging,
          bagType: productParam === "Kraft Bag" ? "Paper Bags" : prev.bagType,
          requirements: [
            sizeParam ? `Size specification: ${sizeParam}` : "",
            productParam ? `Product: ${productParam}` : ""
          ].filter(Boolean).join("\n")
        }));
      }
    }
  }, []);

  const handleOnPageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.company.trim()) errors.company = "Please enter your company / brand.";
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    let specs = "";
    if (formData.packaging === "Boxes") {
      specs = `\n- Box Type: ${formData.boxType || "N/A"}\n- Material/Covering: ${formData.boxMaterial || "N/A"}\n- Finishing: ${formData.boxFinishing || "N/A"}\n- Estimated Quantity: ${formData.estimatedQuantity || "N/A"}`;
    } else if (formData.packaging === "Bags") {
      specs = `\n- Bag Type: ${formData.bagType || "N/A"}\n- Handle: ${formData.bagHandle || "N/A"}\n- Finishing: ${formData.bagFinishing || "N/A"}\n- Estimated Quantity: ${formData.estimatedQuantity || "N/A"}`;
    } else if (formData.packaging === "Pouches") {
      specs = `\n- Pouch Type: ${formData.pouchType || "N/A"}\n- Closure: ${formData.pouchClosure || "N/A"}\n- Finishing: ${formData.pouchFinishing || "N/A"}\n- Estimated Quantity: ${formData.estimatedQuantity || "N/A"}`;
    } else if (formData.packaging === "Ribbons") {
      specs = `\n- Ribbon Type: ${formData.ribbonType || "N/A"}\n- Width: ${formData.ribbonWidth || "N/A"}\n- Finishing: ${formData.ribbonFinishing || "N/A"}\n- Estimated Quantity: ${formData.estimatedQuantity || "N/A"}`;
    } else if (formData.packaging === "Custom") {
      specs = `\n- Type of Packaging: ${formData.customType || "N/A"}\n- Estimated Quantity: ${formData.estimatedQuantity || "N/A"}`;
    }

    const message = `New B2B Packaging Enquiry — CASA DI BIZ\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Company/Brand: ${formData.company.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Phone/WhatsApp: ${formData.phone.trim() || "N/A"}\n` +
      `Packaging Required: ${formData.packaging || "N/A"}${specs}\n` +
      `Requirements: ${formData.requirements.trim() || "N/A"}`;

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&z=14&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`;

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-[#0F2744] bg-grain-navy pt-8 sm:pt-10 lg:pt-12 pb-0 flex flex-col items-center h-[620px] sm:h-[780px] lg:h-[850px]">
          {/* Inner container for text content */}
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center pt-0 z-10">
            {/* Heading */}
            <h1 className="animate-hero-heading-luxe font-display font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight tracking-tight mb-6 max-w-4xl">
              <span className="text-[#C7A86A]">Custom packaging </span>
              <span className="italic text-[#C7A86A] font-normal">done for you</span>
            </h1>

            {/* Paragraph */}
            <p className="animate-hero-support-luxe text-sm sm:text-base text-[#FAF8F5]/85 font-light leading-relaxed max-w-[650px] sm:max-w-[700px] mb-8 sm:mb-10 text-center">
              Tell us what you need, and we'll help shape the right packaging for your product from boxes and bags to pouches, ribbons, and finishing details
            </p>

            {/* CTA */}
            <div className="animate-hero-cta">
              <button
                onClick={() => setFormOpen(true)}
                className="bg-[#F6F0E8] text-[#0F2744] hover:bg-[#FAF8F5] transition-colors duration-300 text-[11px] sm:text-xs font-semibold tracking-[0.25em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[4px] uppercase flex items-center gap-2"
              >
                CONTACT US <span className="text-xs">→</span>
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center items-end z-0 animate-hero-image-luxe">
            <img
              src="/assets/contactim1.png"
              alt="CASA DI BIZ premium packaging products still life"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </section>

        {/* reach us */}
        <SectionHeader eyebrow="REACH US" title="Four ways to start a conversation" bg="cream" />
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard
                Icon={Phone}
                title="Call Us"
                lines={[COMPANY.phone]}
                actionLabel="CALL NOW"
                href={`tel:${COMPANY.phoneRaw}`}
                delay={0}
              />
              <InfoCard
                Icon={Mail}
                title="Mail Us"
                lines={[COMPANY.email]}
                actionLabel="SEND EMAIL"
                href={`mailto:${COMPANY.email}`}
                delay={0.08}
              />
              <InfoCard
                Icon={MapPin}
                title="Visit Us"
                lines={[COMPANY.address]}
                actionLabel="GET DIRECTIONS"
                href={mapLink}
                external
                delay={0.16}
              />
              <InfoCard
                Icon={Clock}
                title="Business Hours"
                lines={COMPANY.hours.map((h) => `${h.day} — ${h.time}`)}
                delay={0.24}
              />
            </div>
          </div>
        </section>

        {/* MAP */}
        <SectionHeader eyebrow="OUR STUDIO" title="Find us in Dubai" bg="ivory" />
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="overflow-hidden rounded-[14px] shadow-[0_16px_42px_-18px_rgba(22,35,60,0.22)]">
              <iframe
                title="CASA DI BIZ location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[320px] sm:h-[440px] border-0"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[11px] tracking-[0.28em] font-medium border border-gold/60 text-navy hover:bg-gold hover:text-navy transition"
              >
                OPEN IN GOOGLE MAPS <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* WHY CONTACT US */}
        <SectionHeader eyebrow="WHY CONTACT US" title="What you get when you write in" bg="cream" />
        <section className="w-full bg-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  className="bg-ivory rounded-[14px] p-6 sm:p-7 shadow-[0_16px_42px_-18px_rgba(22,35,60,0.18)] hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-display text-lg sm:text-xl text-navy leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-muted-luxe leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <SectionHeader eyebrow="FAQ" title="Frequently asked" bg="ivory" />
        <section className="w-full bg-ivory">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-14 sm:pb-20">
            <div className="divide-y divide-border-luxe">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="py-4 sm:py-5">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-start justify-between gap-6 text-left group"
                    >
                      <span className="flex items-start gap-3 font-display text-base sm:text-lg text-navy group-hover:text-gold transition">
                        <HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        {f.q}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-gold shrink-0 mt-1 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-3" : "max-h-0"}`}>
                      <p className="text-sm text-muted-luxe leading-relaxed pl-8">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL B2B ENQUIRY FORM */}
        <section className="w-full bg-[#0F2744] py-16 sm:py-24 px-5 sm:px-8 lg:px-12 flex justify-center">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-start">
            {/* Left Column - 40% (4 cols) */}
            <div className="lg:col-span-4 flex flex-col text-left">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C7A86A] font-semibold mb-4">
                LET'S CREATE
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FAF8F5] leading-tight mb-6">
                Tell us about your packaging.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed max-w-md">
                Tell us what you're looking to create and we'll help shape the right packaging solution for your brand.
              </p>
            </div>

            {/* Right Column - 60% (6 cols) */}
            <div className="lg:col-span-6 bg-[#F6F0E8] p-8 sm:p-12 rounded-[4px] text-[#0F2744]">
              <form onSubmit={handleOnPageSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">YOUR NAME *</span>
                    <input
                      type="text"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    {formErrors.name && <span className="mt-1.5 block text-xs text-red-600">{formErrors.name}</span>}
                  </label>

                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">COMPANY / BRAND *</span>
                    <input
                      type="text"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="Brand or company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                    {formErrors.company && <span className="mt-1.5 block text-xs text-red-600">{formErrors.company}</span>}
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">EMAIL ADDRESS *</span>
                    <input
                      type="email"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="you@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    {formErrors.email && <span className="mt-1.5 block text-xs text-red-600">{formErrors.email}</span>}
                  </label>

                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">PHONE / WHATSAPP</span>
                    <input
                      type="tel"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </label>
                </div>

                <div>
                  <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-3 uppercase">PACKAGING REQUIRED</span>
                  <div className="flex flex-wrap gap-2.5">
                    {['Boxes', 'Bags', 'Pouches', 'Ribbons', 'Custom'].map((opt) => {
                      const isSelected = formData.packaging === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({
                            ...formData,
                            packaging: opt,
                            estimatedQuantity: "",
                            boxType: "",
                            boxMaterial: "",
                            boxFinishing: "",
                            bagType: "",
                            bagHandle: "",
                            bagFinishing: "",
                            pouchType: "",
                            pouchClosure: "",
                            pouchFinishing: "",
                            ribbonType: "",
                            ribbonWidth: "",
                            ribbonFinishing: "",
                            customType: "",
                          })}
                          className={`px-4 py-2 border text-[10px] tracking-wider uppercase transition-colors duration-300 font-semibold rounded-[3px] ${isSelected
                            ? "border-[#0F2744] bg-[#0F2744] text-[#FAF8F5]"
                            : "border-[#0F2744]/20 hover:border-[#0F2744] text-[#0F2744] bg-transparent"
                            }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.packaging && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[#0F2744]/10 animate-fade-up">
                    {formData.packaging === "Boxes" && (
                      <>
                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">BOX TYPE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxType}
                            onChange={(e) => setFormData({ ...formData, boxType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Rigid Boxes", "Magnetic Boxes", "Drawer Boxes", "Folding Boxes", "Jewelry Boxes", "Custom Box"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">MATERIAL / COVERING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxMaterial}
                            onChange={(e) => setFormData({ ...formData, boxMaterial: e.target.value })}
                          >
                            <option value="">Select material</option>
                            {["Special Paper", "Textured Paper", "PU Leather", "Velvet", "Suede", "Linen", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxFinishing}
                            onChange={(e) => setFormData({ ...formData, boxFinishing: e.target.value })}
                          >
                            <option value="">Select finishing</option>
                            {["Foil Stamping", "Embossing", "Debossing", "Spot UV", "Printing", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>
                      </>
                    )}

                    {formData.packaging === "Bags" && (
                      <>
                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">BAG TYPE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.bagType}
                            onChange={(e) => setFormData({ ...formData, bagType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Kraft Bags", "Special Paper Bags", "White Card Bags", "White Card Texture Bags", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">HANDLE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.bagHandle}
                            onChange={(e) => setFormData({ ...formData, bagHandle: e.target.value })}
                          >
                            <option value="">Select handle</option>
                            {["Rope", "Ribbon", "Other"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.bagFinishing}
                            onChange={(e) => setFormData({ ...formData, bagFinishing: e.target.value })}
                          >
                            <option value="">Select finishing</option>
                            {["Printing", "Foil Stamping", "Embossing", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>
                      </>
                    )}

                    {formData.packaging === "Pouches" && (
                      <>
                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">POUCH TYPE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.pouchType}
                            onChange={(e) => setFormData({ ...formData, pouchType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Velvet", "Suede", "Satin", "Microfiber", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">CLOSURE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.pouchClosure}
                            onChange={(e) => setFormData({ ...formData, pouchClosure: e.target.value })}
                          >
                            <option value="">Select closure</option>
                            {["Drawstring", "Ribbon", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.pouchFinishing}
                            onChange={(e) => setFormData({ ...formData, pouchFinishing: e.target.value })}
                          >
                            <option value="">Select finishing</option>
                            {["Printing", "Foil", "Embroidery", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>
                      </>
                    )}

                    {formData.packaging === "Ribbons" && (
                      <>
                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">RIBBON TYPE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.ribbonType}
                            onChange={(e) => setFormData({ ...formData, ribbonType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Satin", "Grosgrain", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">WIDTH</span>
                          <input
                            type="text"
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                            placeholder="e.g. 25mm"
                            value={formData.ribbonWidth}
                            onChange={(e) => setFormData({ ...formData, ribbonWidth: e.target.value })}
                          />
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.ribbonFinishing}
                            onChange={(e) => setFormData({ ...formData, ribbonFinishing: e.target.value })}
                          >
                            <option value="">Select finishing</option>
                            {["Printing", "Foil", "Custom"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>
                      </>
                    )}

                    {formData.packaging === "Custom" && (
                      <label className="block">
                        <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">TYPE OF PACKAGING</span>
                        <input
                          type="text"
                          className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                          placeholder="e.g. Luxury Gift Set"
                          value={formData.customType}
                          onChange={(e) => setFormData({ ...formData, customType: e.target.value })}
                        />
                      </label>
                    )}

                    {/* ESTIMATED QUANTITY */}
                    <label className="block">
                      <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">ESTIMATED QUANTITY</span>
                      <input
                        type="text"
                        className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                        placeholder="e.g. 500 units"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      />
                    </label>
                  </div>
                )}

                <div>
                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">TELL US ABOUT YOUR REQUIREMENTS</span>
                    <textarea
                      rows={4}
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2.5 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition resize-none"
                      placeholder="Material, size, expected quantity, or delivery dates..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    />
                  </label>
                </div>

                <div className="space-y-6">
                  <button
                    type="submit"
                    className="w-full bg-[#C7A86A] text-[#0F2744] hover:bg-[#0F2744] hover:text-[#FAF8F5] transition-all duration-300 text-xs font-semibold tracking-[0.2em] py-4 rounded-[4px] uppercase flex items-center justify-center gap-2"
                  >
                    SEND ENQUIRY →
                  </button>

                  <div className="pt-4 border-t border-[#0F2744]/10 text-center flex flex-col items-center gap-1.5 animate-fade-up">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#0F2744]/60 font-medium">
                      Prefer a quick conversation?
                    </p>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0F2744] hover:text-[#C7A86A] transition-colors duration-300 flex items-center gap-1.5"
                    >
                      CHAT ON WHATSAPP →
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {formOpen && <EnquiryModal onClose={() => setFormOpen(false)} />}
    </div>
  );
}

function SectionHeader({ eyebrow, title, bg = "ivory" }: { eyebrow: string; title: string; bg?: "ivory" | "cream" }) {
  return (
    <section className={`w-full ${bg === "cream" ? "bg-cream" : "bg-ivory"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-6 text-center">
        <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">{title}</h2>
      </div>
    </section>
  );
}

function InfoCard({
  Icon,
  title,
  lines,
  actionLabel,
  href,
  external,
  delay = 0,
}: {
  Icon: typeof Phone;
  title: string;
  lines: string[];
  actionLabel?: string;
  href?: string;
  external?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="flex flex-col bg-ivory rounded-[14px] p-6 sm:p-7 shadow-[0_16px_42px_-18px_rgba(22,35,60,0.22)] hover:-translate-y-1.5 transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="h-11 w-11 rounded-full border border-gold/50 grid place-items-center text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
      <div className="mt-3 flex-1 space-y-1.5">
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-luxe leading-relaxed">{l}</p>
        ))}
      </div>
      {actionLabel && href && (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] font-semibold text-gold hover:gap-3 transition-all"
        >
          {actionLabel} <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

/* ---------------- Enquiry modal ---------------- */

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  contactMethod: string;
  category: string;
  productType: string;
  material: string;
  color: string;
  printing: string;
  dimensions: string;
  quantity: string;
  deliveryDate: string;
  reference: string;
  notes: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  contactMethod: "WhatsApp",
  category: "",
  productType: "",
  material: "",
  color: "",
  printing: "",
  dimensions: "",
  quantity: "",
  deliveryDate: "",
  reference: "",
  notes: "",
};

function EnquiryModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const types = useMemo(() => (form.category ? PRODUCT_TYPES[form.category] ?? [] : []), [form.category]);

  const set = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v, ...(k === "category" ? { productType: "" } : null) }));

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    else if (form.name.trim().length > 100) e.name = "Name must be under 100 characters.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!/^[+()\-\s\d]{7,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.category) e.category = "Select a product category.";
    if (!form.quantity.trim()) e.quantity = "Tell us the quantity you need.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const buildMessage = () => {
    const rows: [string, string][] = [
      ["Name", form.name],
      ["Company", form.company],
      ["Email", form.email],
      ["Phone", form.phone],
      ["Preferred Contact", form.contactMethod],
      ["Product Category", form.category],
      ["Product Type", form.productType],
      ["Material", form.material],
      ["Preferred Colour", form.color],
      ["Printing / Branding", form.printing],
      ["Dimensions / Size", form.dimensions],
      ["Quantity Required", form.quantity],
      ["Expected Delivery", form.deliveryDate],
      ["Reference Image", form.reference],
      ["Additional Requirements", form.notes],
    ];
    const body = rows
      .filter(([, v]) => v && v.trim())
      .map(([k, v]) => `${k}: ${v.trim()}`)
      .join("\n");
    return `New Packaging Enquiry — CASA DI BIZ\n\n${body}`;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "Packaging Enquiry — " + (form.company.trim() || form.name.trim()),
    )}&body=${encodeURIComponent(buildMessage())}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div
        className="relative w-full max-w-3xl my-6 bg-ivory rounded-[16px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy px-6 sm:px-9 py-7 sm:py-9">
          <p className="text-[11px] tracking-[0.32em] text-gold font-medium">REQUEST A QUOTATION</p>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl text-cream leading-tight">
            Tell us what you're <span className="italic text-gradient-gold">creating.</span>
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-cream/10 text-cream grid place-items-center hover:bg-gold hover:text-navy transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 sm:px-9 py-7 sm:py-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your Name" required error={errors.name}>
              <input className={inputCls} maxLength={100} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" />
            </Field>
            <Field label="Company Name (Optional)">
              <input className={inputCls} maxLength={120} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Brand or company" />
            </Field>
            <Field label="Email Address" required error={errors.email}>
              <input type="email" className={inputCls} maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@brand.com" />
            </Field>
            <Field label="Phone Number" required error={errors.phone}>
              <input type="tel" className={inputCls} maxLength={20} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+971 50 000 0000" />
            </Field>
            <Field label="Preferred Contact Method">
              <select className={inputCls} value={form.contactMethod} onChange={(e) => set("contactMethod", e.target.value)}>
                {["WhatsApp", "Phone Call", "Email"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Product Category" required error={errors.category}>
              <select className={inputCls} value={form.category} onChange={(e) => set("category", e.target.value)}>
                <option value="">Select a category</option>
                {Object.keys(PRODUCT_TYPES).map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Product Type">
              <select className={inputCls} value={form.productType} onChange={(e) => set("productType", e.target.value)} disabled={!types.length}>
                <option value="">{types.length ? "Select a type" : "Select a category first"}</option>
                {types.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Material">
              <input className={inputCls} maxLength={120} value={form.material} onChange={(e) => set("material", e.target.value)} placeholder="e.g. rigid board, velvet, kraft" />
            </Field>
            <Field label="Preferred Color">
              <input className={inputCls} maxLength={80} value={form.color} onChange={(e) => set("color", e.target.value)} placeholder="e.g. navy with gold foil" />
            </Field>
            <Field label="Printing / Branding">
              <select className={inputCls} value={form.printing} onChange={(e) => set("printing", e.target.value)}>
                <option value="">Select an option</option>
                {PRINTING.map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Dimensions / Size">
              <input className={inputCls} maxLength={120} value={form.dimensions} onChange={(e) => set("dimensions", e.target.value)} placeholder="L × W × H in cm" />
            </Field>
            <Field label="Quantity Required" required error={errors.quantity}>
              <input className={inputCls} maxLength={40} value={form.quantity} onChange={(e) => set("quantity", e.target.value)} placeholder="e.g. 500 units" />
            </Field>
            <Field label="Expected Delivery Date">
              <input type="date" className={inputCls} value={form.deliveryDate} onChange={(e) => set("deliveryDate", e.target.value)} />
            </Field>
            <Field label="Reference Image Link (Optional)">
              <input className={inputCls} maxLength={300} value={form.reference} onChange={(e) => set("reference", e.target.value)} placeholder="Paste a link, or attach in WhatsApp" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Additional Requirements">
                <textarea rows={4} className={`${inputCls} resize-none`} maxLength={1000} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Anything else we should know" />
              </Field>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={sendWhatsApp}
              className="btn-gold btn-gold-hover inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[11px] tracking-[0.24em] font-semibold bg-gold text-navy"
            >
              <MessageCircle className="h-4 w-4" /> SEND ENQUIRY VIA WHATSAPP
            </button>
            <button
              onClick={sendEmail}
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[11px] tracking-[0.24em] font-medium border border-gold/60 text-navy hover:bg-gold hover:text-navy transition"
            >
              <Mail className="h-4 w-4" /> SEND EMAIL ENQUIRY
            </button>
          </div>
          <p className="mt-4 text-xs text-muted-luxe">
            Attach reference images directly in the WhatsApp chat after the message opens.
          </p>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-border-luxe bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-muted-luxe/70 outline-none focus:border-gold focus:bg-cream transition";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.24em] font-semibold text-navy/70 mb-2 uppercase">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
