'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  X,
  Gem,
  Settings,
  CheckCircle,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PhoneInputField, formatFullInternationalPhone } from "@/components/PhoneInputField";
import { EnquiryModal } from "@/components/EnquiryModal";

/* ---------------- Company details ---------------- */
const COMPANY = {
  phone: "+971 56 337 4248",
  phoneRaw: "+971563374248",
  whatsapp: "+971563374248",
  email: "info@casadibiz.com",
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
  Wraps: [
    "130 GSM Gloss Coated Art Paper",
    "Flat Matte Velvet Finish Paper",
    "Recycled Brown Kraft Paper",
    "17 GSM Luxury Tissue Paper",
  ],
  Ribbons: ["Satin Ribbons", "Grosgrain Ribbons", "Printed Ribbons", "Custom Ribbons"],
  Collections: [
    "Jewellery Collection",
    "Jewellery Storage & Travel Cases",
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


const FAQS = [
  { q: "How can I request a quotation?", a: "Use the Get in Touch form on this page. Fill in your product, quantity and finishing preferences and send it through WhatsApp or email — we reply with a costing within one working day." },
  { q: "What is the minimum order quantity (MOQ)?", a: "MOQ depends on the product and construction. Rigid and magnetic boxes typically start at 300 units, bags and pouches at 500, and ribbons at 100 metres. Smaller trial runs can be arranged." },
  { q: "Can I customize my packaging?", a: "Yes — size, board, material, colour, print, foil, emboss, deboss, spot UV, inserts and closures are all made to your specification." },
  { q: "How long does production take?", a: "Standard production is 12–18 working days after artwork and sample approval. Rush timelines can be arranged for repeat orders." },
];

/* ---------------- Contact Hero Images ---------------- */
// Desktop hero background image (640px and above)
export const DESKTOP_CONTACT_HERO_IMAGE = "/assets/contv.webp";

// Mobile hero background image (below 640px) - replace this path when a dedicated mobile image is uploaded
export const MOBILE_CONTACT_HERO_IMAGE = "/assets/contactmp.webp";

export default function ContactPage() {
  const searchParams = useSearchParams();
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
    const enquiryParam = searchParams.get("enquiry");
    const windowEnquiry =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("enquiry")
        : null;

    if (enquiryParam === "open" || windowEnquiry === "open") {
      setFormOpen(true);
    }

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sizeParam = params.get("size") || searchParams.get("size");
      const productParam = params.get("product") || searchParams.get("product");

      if (sizeParam || productParam) {
        setFormData((prev) => ({
          ...prev,
          packaging: productParam ? "Bags" : prev.packaging,
          bagType: productParam === "Kraft Bag" ? "Paper Bags" : prev.bagType,
          requirements: [
            sizeParam ? `Size specification: ${sizeParam}` : "",
            productParam ? `Product: ${productParam}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
        }));
      }
    }
  }, [searchParams]);

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

    const fullPhone = formatFullInternationalPhone(formData.phone, "AE");

    const message = `New B2B Packaging Enquiry — CASA DI BIZ\n\n` +
      `Name: ${formData.name.trim()}\n` +
      `Company/Brand: ${formData.company.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Phone/WhatsApp: ${fullPhone || "N/A"}\n` +
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

  const handleCloseModal = () => {
    setFormOpen(false);
    if (typeof window !== "undefined" && window.location.search.includes("enquiry=open")) {
      const url = new URL(window.location.href);
      url.searchParams.delete("enquiry");
      window.history.replaceState({}, "", url.pathname + (url.search ? url.search : ""));
    }
  };

  const productProp =
    searchParams.get("product") || searchParams.get("model") || searchParams.get("category")
      ? {
        productName: searchParams.get("product") || searchParams.get("model") || undefined,
        category: searchParams.get("category") || undefined,
        material: searchParams.get("material") || undefined,
        variantOrSize: searchParams.get("size") || searchParams.get("width") || undefined,
        color: searchParams.get("color") || undefined,
      }
      : undefined;

  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-[#0A0A0C] flex flex-col items-center h-[450px] xs:h-[480px] sm:min-h-0 sm:h-[720px] md:h-[780px] lg:h-[850px] xl:h-[880px] pt-8 xs:pt-10 sm:pt-10 lg:pt-12 pb-4 sm:pb-0 justify-start sm:justify-start">
          {/* Background image on mobile (covers controlled hero cropped at red boundary) / Desktop full-coverage hero */}
          <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center pointer-events-none animate-hero-image-luxe">
            <picture className="w-full h-full block">
              <source media="(min-width: 640px)" srcSet={DESKTOP_CONTACT_HERO_IMAGE} />
              <source media="(max-width: 639px)" srcSet={MOBILE_CONTACT_HERO_IMAGE} />
              <img
                src={DESKTOP_CONTACT_HERO_IMAGE}
                alt="CASA DI BIZ premium packaging products still life"
                className="w-full h-full object-cover object-[50%_46%] sm:object-cover sm:object-center block"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>

          {/* Text Content Block (Layered ON TOP of image on mobile) */}
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center pt-0 z-10 w-full">
            {/* Heading */}
            <h1 className="animate-hero-heading-luxe font-display font-normal text-[28px] xs:text-[32px] sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.18] tracking-tight mb-2.5 sm:mb-5 max-w-4xl text-center">
              <span className="block sm:inline text-[#C7A86A]">Custom packaging </span>
              <span className="block sm:inline italic text-[#C7A86A] font-normal">done for you</span>
            </h1>

            {/* Paragraph */}
            <p className="animate-hero-support-luxe text-[13px] xs:text-[14px] sm:text-base text-[#FAF8F5] sm:text-[#FAF8F5]/85 font-light leading-snug sm:leading-relaxed max-w-[320px] xs:max-w-[340px] sm:max-w-[700px] mb-5 sm:mb-8 text-center">
              Tell us what you need, and we'll help shape the right packaging for your product from boxes and bags to pouches, ribbons, and finishing details
            </p>

            {/* CTA Button */}
            <div className="animate-hero-cta flex justify-center w-full">
              <button
                onClick={() => setFormOpen(true)}
                className="w-[185px] xs:w-[195px] h-[46px] xs:h-[50px] sm:w-auto sm:h-auto sm:px-8 sm:py-4 bg-[#F6F0E8] text-[#0F2744] hover:bg-[#FAF8F5] transition-colors duration-300 text-[11px] sm:text-xs font-semibold tracking-[0.25em] rounded-[6px] sm:rounded-[4px] uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                CONTACT US <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* FINAL B2B ENQUIRY FORM */}
        <section className="w-full bg-[#0F2744] py-10 sm:py-12 md:py-14 lg:py-16 px-5 sm:px-8 lg:px-12 flex justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-10 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* Left Column - 40% (4 cols) */}
            <div className="lg:col-span-4 flex flex-col text-left">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C7A86A] font-semibold mb-2.5 sm:mb-3">
                LET'S CREATE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#FAF8F5] leading-tight mb-3.5 sm:mb-4">
                Tell us about your packaging.
              </h2>
              <p className="text-sm sm:text-[15px] text-[#FAF8F5]/80 font-light leading-relaxed max-w-md">
                Tell us what you're looking to create and we'll help shape the right packaging solution for your brand.
              </p>
            </div>

            {/* Right Column - 60% (6 cols) */}
            <div className="lg:col-span-6 bg-[#F6F0E8] p-6 sm:p-8 lg:p-9 xl:p-10 rounded-[4px] text-[#0F2744]">
              <form onSubmit={handleOnPageSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">YOUR NAME *</span>
                    <input
                      type="text"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
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
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="Brand or company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                    {formErrors.company && <span className="mt-1.5 block text-xs text-red-600">{formErrors.company}</span>}
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <label className="block">
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">EMAIL ADDRESS *</span>
                    <input
                      type="email"
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                      placeholder="you@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    {formErrors.email && <span className="mt-1.5 block text-xs text-red-600">{formErrors.email}</span>}
                  </label>

                  <div>
                    <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">PHONE / WHATSAPP</span>
                    <PhoneInputField
                      variant="underline"
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      placeholder="50 000 0000"
                      error={formErrors.phone}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-2 uppercase">PACKAGING REQUIRED</span>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
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
                          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 border text-[10px] tracking-wider uppercase transition-colors duration-300 font-semibold rounded-[3px] ${isSelected
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3.5 sm:pt-4 border-t border-[#0F2744]/10 animate-fade-up">
                    {formData.packaging === "Boxes" && (
                      <>
                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">BOX TYPE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxType}
                            onChange={(e) => setFormData({ ...formData, boxType: e.target.value })}
                          >
                            <option value="">Select Box</option>
                            {["Ring Box", "Earring Box", "Pendant Box", "Chain Box", "Bracelet Box", "Necklace Box", "Set Box"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">MATERIAL / COVERING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxMaterial}
                            onChange={(e) => setFormData({ ...formData, boxMaterial: e.target.value })}
                          >
                            <option value="">Select material</option>
                            {["Special Paper", "Ribbed Texture", "Soft Touch", "Micro Fiber", "Premium Micro Fiber", "Leather", "Velvet", "Suede", "Premium Suede", "Blue Glossy Finish", "Crocodile Finish", "Matt Grey Paint"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.boxFinishing}
                            onChange={(e) => setFormData({ ...formData, boxFinishing: e.target.value })}
                          >
                            <option value="">Select finishing</option>
                            {["Gold Foiling ", "Silver Foiling", "Blind Debossing", "Metallic Sticker",].map((o) => (
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
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.bagType}
                            onChange={(e) => setFormData({ ...formData, bagType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Kraft Bags", "Special Paper Bags", "White Card Bags", "White Card Texture Bags"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">HANDLE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
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
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
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
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.pouchType}
                            onChange={(e) => setFormData({ ...formData, pouchType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Cotton/Nylon", "Sheer Organza", "woven Satin", "Double Faced Satin", "Matte Grossgrain"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">CLOSURE</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
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
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
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
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
                            value={formData.ribbonType}
                            onChange={(e) => setFormData({ ...formData, ribbonType: e.target.value })}
                          >
                            <option value="">Select type</option>
                            {["Cotton/Nylon Blend", "Matte Grosgrain", "Woven Edge Polyester Satin", "Sheer Organza"].map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">WIDTH</span>
                          <input
                            type="text"
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
                            placeholder="e.g. 25mm"
                            value={formData.ribbonWidth}
                            onChange={(e) => setFormData({ ...formData, ribbonWidth: e.target.value })}
                          />
                        </label>

                        <label className="block">
                          <span className="block text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/70 mb-1 uppercase">FINISHING</span>
                          <select
                            className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] transition cursor-pointer rounded-none"
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
                          className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
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
                        className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition"
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
                      rows={3}
                      className="w-full border-b border-[#0F2744]/20 focus:border-[#0F2744] bg-transparent py-2 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 transition resize-none"
                      placeholder="Material, size, expected quantity, or delivery dates..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    />
                  </label>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-[#C7A86A] text-[#0F2744] hover:bg-[#0F2744] hover:text-[#FAF8F5] transition-all duration-300 text-xs font-semibold tracking-[0.2em] py-3.5 rounded-[4px] uppercase flex items-center justify-center gap-2"
                  >
                    SEND ENQUIRY →
                  </button>

                  <div className="pt-3 sm:pt-3.5 border-t border-[#0F2744]/10 text-center flex flex-col items-center gap-1.5 animate-fade-up">
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

        {/* GET IN TOUCH / WE'D LOVE TO HEAR FROM YOU */}
        <section className="w-full bg-[#F6F0E8] py-14 sm:py-20 border-t border-[#C7A86A]/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            {/* 1. SECTION HEADING */}
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-[11px] tracking-[0.32em] text-[#C7A86A] font-semibold mb-3 uppercase">
                GET IN TOUCH
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-tight">
                We&apos;d love to hear from you
              </h2>
            </div>

            {/* 2. FIRST ROW — FOUR WAYS TO CONTACT US */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* CALL US */}
              <div className="flex flex-col justify-between text-center bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-[14px] p-5 sm:p-6 hover:-translate-y-1 hover:border-[#C7A86A]/50 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                    <Phone className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] lg:w-[42px] lg:h-[42px]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-medium text-base sm:text-lg text-[#0F2744] tracking-[0.03em] uppercase">
                    Call Us
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                    Our team is here to help.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0F2744] select-all">
                    {COMPANY.phone}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C7A86A]/15 flex justify-center">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#C7A86A] hover:text-[#0F2744] hover:gap-2.5 transition-all uppercase"
                  >
                    Call Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* WHATSAPP US */}
              <div className="flex flex-col justify-between text-center bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-[14px] p-5 sm:p-6 hover:-translate-y-1 hover:border-[#C7A86A]/50 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                    <SiWhatsapp className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] lg:w-[42px] lg:h-[42px]" />
                  </div>
                  <h3 className="font-display font-medium text-base sm:text-lg text-[#0F2744] tracking-[0.03em] uppercase">
                    WhatsApp Us
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                    Quick enquiries and support.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0F2744] select-all">
                    {COMPANY.phone}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C7A86A]/15 flex justify-center">
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#C7A86A] hover:text-[#0F2744] hover:gap-2.5 transition-all uppercase"
                  >
                    Chat with Us <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* EMAIL US */}
              <div className="flex flex-col justify-between text-center bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-[14px] p-5 sm:p-6 hover:-translate-y-1 hover:border-[#C7A86A]/50 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                    <Mail className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] lg:w-[42px] lg:h-[42px]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-medium text-base sm:text-lg text-[#0F2744] tracking-[0.03em] uppercase">
                    Email Us
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                    Send us your query.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0F2744] break-all sm:break-normal select-all">
                    {COMPANY.email}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C7A86A]/15 flex justify-center">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#C7A86A] hover:text-[#0F2744] hover:gap-2.5 transition-all uppercase"
                  >
                    Send Email <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* VISIT US */}
              <div className="flex flex-col justify-between text-center bg-[#FAF8F5] border border-[#C7A86A]/25 rounded-[14px] p-5 sm:p-6 hover:-translate-y-1 hover:border-[#C7A86A]/50 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                    <MapPin className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] lg:w-[42px] lg:h-[42px]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-medium text-base sm:text-lg text-[#0F2744] tracking-[0.03em] uppercase">
                    Visit Us
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                    Visit our studio in Dubai.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0F2744] line-clamp-2">
                    Al Quoz Industrial 3, Dubai
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C7A86A]/15 flex justify-center">
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] tracking-[0.2em] font-semibold text-[#C7A86A] hover:text-[#0F2744] hover:gap-2.5 transition-all uppercase"
                  >
                    Get Directions <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. BUSINESS HOURS */}
            <div className="my-8 sm:my-10 flex items-center justify-center">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#FAF8F5] border border-[#C7A86A]/35 text-[#0F2744] shadow-2xs text-center">
                <Clock className="w-4 h-4 text-[#C7A86A] shrink-0" strokeWidth={1.8} />
                <span className="text-xs sm:text-[13px] font-sans text-[#0F2744]/90 tracking-[0.02em]">
                  <strong className="font-semibold text-[#0F2744]">Business Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* 4. SECOND ROW — WHY CONTACT US (THREE BENEFITS) */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* PACKAGING CONSULTATION */}
              <div className="bg-[#FAF8F5]/75 border border-[#C7A86A]/20 rounded-[12px] p-5 sm:p-6 text-center flex flex-col items-center hover:bg-[#FAF8F5] hover:border-[#C7A86A]/45 transition-colors duration-300">
                <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                  <Gem className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px]" strokeWidth={1.8} />
                </div>
                <h4 className="font-display font-medium text-sm sm:text-[15px] tracking-[0.06em] uppercase text-[#0F2744]">
                  Packaging Consultation
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                  Expert advice for your brand.
                </p>
              </div>

              {/* CUSTOMISATION SUPPORT */}
              <div className="bg-[#FAF8F5]/75 border border-[#C7A86A]/20 rounded-[12px] p-5 sm:p-6 text-center flex flex-col items-center hover:bg-[#FAF8F5] hover:border-[#C7A86A]/45 transition-colors duration-300">
                <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                  <Settings className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px]" strokeWidth={1.8} />
                </div>
                <h4 className="font-display font-medium text-sm sm:text-[15px] tracking-[0.06em] uppercase text-[#0F2744]">
                  Customisation Support
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                  Tailored to your needs.
                </p>
              </div>

              {/* CLEAR QUOTATION */}
              <div className="bg-[#FAF8F5]/75 border border-[#C7A86A]/20 rounded-[12px] p-5 sm:p-6 text-center flex flex-col items-center hover:bg-[#FAF8F5] hover:border-[#C7A86A]/45 transition-colors duration-300">
                <div className="flex items-center justify-center mb-3.5 sm:mb-4 text-[#C7A86A]">
                  <CheckCircle className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px]" strokeWidth={1.8} />
                </div>
                <h4 className="font-display font-medium text-sm sm:text-[15px] tracking-[0.06em] uppercase text-[#0F2744]">
                  Clear Quotation
                </h4>
                <p className="mt-1.5 text-xs sm:text-[13px] text-[#0F2744]/70 leading-relaxed">
                  Transparent and competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="w-full bg-ivory pt-10 sm:pt-14 pb-6 sm:pb-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-5 sm:mb-7">
              <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-2.5 uppercase">OUR STUDIO</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">Find us in Dubai</h2>
            </div>
            <div className="overflow-hidden rounded-[14px]">
              <iframe
                title="CASA DI BIZ location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[260px] sm:h-[320px] md:h-[350px] lg:h-[360px] border-0"
                allowFullScreen
              />
            </div>
            <div className="mt-4 sm:mt-5 text-center">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-3 sm:py-3.5 text-[11px] tracking-[0.28em] font-medium border border-gold/60 text-navy hover:bg-gold hover:text-navy transition"
              >
                OPEN IN GOOGLE MAPS <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="w-full bg-ivory pt-9 sm:pt-11 pb-10 sm:pb-12">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-2.5 sm:mb-3 uppercase">FAQ</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">Frequently asked Questions</h2>
            </div>
            <div className="divide-y divide-border-luxe">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="py-3.5 sm:py-4">
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
      </main>
      <SiteFooter />

      {formOpen && <EnquiryModal onClose={handleCloseModal} product={productProp} />}
    </div>
  );
}


