"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { PhoneInputField, formatFullInternationalPhone } from "@/components/PhoneInputField";

export const COMPANY = {
  phone: "+971 563374248",
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

export const ENQUIRY_PRODUCT_CATEGORIES = [
  "Jewellery Boxes",
  "Corporate Boxes",
  "Bags",
  "Pouches",
  "Ribbons",
  "Wraps",
  "Wedding Collections",
  "Gifting Essentials",
  "Jewellery Storage & Travel Cases",
  "Other",
];

const CONTACT_TIMES = [
  "Anytime",
  "Morning",
  "Afternoon",
  "Evening",
];

export interface ProductEnquiryData {
  productName?: string;
  category?: string;
  material?: string;
  variantOrSize?: string;
  color?: string;
  productUrl?: string;
  specifications?: Record<string, string | undefined>;
}

export interface EnquiryModalProps {
  onClose: () => void;
  product?: ProductEnquiryData;
  initialCategory?: string;
}

export type EnquiryFormState = {
  name: string;
  company: string;
  productInterestedIn: string;
  preferredMaterial: string;
  estimatedQuantity: string;
  bestTimeToContact: string;
  additionalInfo: string;
  phone: string;
};

const normalizeCategory = (cat?: string): string => {
  if (!cat) return "";
  const lower = cat.toLowerCase();
  if (
    lower.includes("ring") ||
    lower.includes("earring") ||
    lower.includes("pendant") ||
    lower.includes("necklace") ||
    lower.includes("bangle") ||
    lower.includes("bracelet") ||
    lower.includes("chain") ||
    lower.includes("jewellery-box") ||
    lower.includes("jewellery box") ||
    lower === "boxes"
  ) {
    return "Jewellery Boxes";
  }
  if (lower.includes("corporate")) {
    return "Corporate Boxes";
  }
  if (lower.includes("bag")) {
    return "Bags";
  }
  if (lower.includes("pouch")) {
    return "Pouches";
  }
  if (lower.includes("ribbon")) {
    return "Ribbons";
  }
  if (lower.includes("wrap")) {
    return "Wraps";
  }
  if (lower.includes("wedding")) {
    return "Wedding Collections";
  }
  if (
    lower.includes("gifting") ||
    lower.includes("tissue") ||
    lower.includes("sticker") ||
    lower.includes("card") ||
    lower.includes("filler")
  ) {
    return "Gifting Essentials";
  }
  if (lower.includes("storage") || lower.includes("travel case")) {
    return "Jewellery Storage & Travel Cases";
  }
  return cat;
};

export function EnquiryModal({ onClose, product, initialCategory }: EnquiryModalProps) {
  const [form, setForm] = useState<EnquiryFormState>(() => {
    const matchedCategory = normalizeCategory(product?.category || initialCategory);
    return {
      name: "",
      company: "",
      productInterestedIn: matchedCategory || "",
      preferredMaterial: product?.material || "",
      estimatedQuantity: "",
      bestTimeToContact: "Anytime",
      additionalInfo: "",
      phone: "",
    };
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormState, string>>>({});

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock background scroll while modal is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const set = (k: keyof EnquiryFormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[k];
        return next;
      });
    }
  };

  function validate() {
    const e: Partial<Record<keyof EnquiryFormState, string>> = {};
    if (!form.name.trim()) {
      e.name = "Please enter your name.";
    } else if (form.name.trim().length > 100) {
      e.name = "Name must be under 100 characters.";
    }

    if (!form.productInterestedIn) {
      e.productInterestedIn = "Please select a product category.";
    }

    if (!form.estimatedQuantity.trim()) {
      e.estimatedQuantity = "Please provide an estimated quantity.";
    }

    if (!form.phone.trim()) {
      e.phone = "Please enter your Phone or WhatsApp number.";
    } else if (!/^[+()\-\s\d]{7,20}$/.test(form.phone.trim())) {
      e.phone = "Enter a valid phone number (e.g. +971 50 123 4567).";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const buildMessage = () => {
    const rows: [string, string][] = [
      ["Product", product?.productName || ""],
      ["Product Category", form.productInterestedIn || product?.category || ""],
      ["Preferred Material", form.preferredMaterial || product?.material || ""],
      ["Selected Size / Variant", product?.variantOrSize || ""],
      ["Selected Colour", product?.color || ""],
    ];

    if (product?.specifications) {
      for (const [key, val] of Object.entries(product.specifications)) {
        if (val && val.trim()) {
          rows.push([key, val.trim()]);
        }
      }
    }

    if (product?.productUrl) {
      rows.push(["Product Page", product.productUrl]);
    }

    rows.push(
      ["Customer Name", form.name],
      ["Company / Brand", form.company],
      ["Estimated Quantity", form.estimatedQuantity],
      ["Best Time to Contact", form.bestTimeToContact],
      ["Phone / WhatsApp Number", formatFullInternationalPhone(form.phone, "AE")],
      ["Additional Information", form.additionalInfo]
    );

    const body = rows
      .filter(([, v]) => v && v.trim())
      .map(([k, v]) => `${k}: ${v.trim()}`)
      .join("\n");

    return `New Packaging Enquiry — CASA DI BIZ\n\n${body}`;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    const whatsappNum = COMPANY.whatsapp.replace(/\D/g, "");
    window.open(
      `https://wa.me/${whatsappNum}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subjectPrefix = product?.productName ? `${product.productName} — ` : "";
    const subject = `Packaging Enquiry: ${subjectPrefix}${form.company.trim() || form.name.trim()}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`;
  };

  const categoriesList =
    product?.category && !ENQUIRY_PRODUCT_CATEGORIES.includes(product.category)
      ? [product.category, ...ENQUIRY_PRODUCT_CATEGORIES]
      : ENQUIRY_PRODUCT_CATEGORIES;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0F2744]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        className="relative w-full max-w-2xl my-auto bg-[#FAF8F5] rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.45)] border border-[#C7A86A]/30 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="relative bg-[#0F2744] px-6 sm:px-9 py-6 sm:py-7 border-b border-[#C7A86A]/20 shrink-0">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase block mb-1">
            CASA DI BIZ — BESPOKE PACKAGING
          </span>
          <h3
            id="enquiry-modal-title"
            className="font-display text-2xl sm:text-3xl text-[#FAF8F5] font-medium leading-tight"
          >
            Let’s Talk Packaging
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed max-w-lg">
            Tell us a little about your requirements. Our team will be happy to assist you.
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 text-[#FAF8F5] grid place-items-center hover:bg-[#C7A86A] hover:text-[#0F2744] transition-colors duration-200 cursor-pointer"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* MODAL BODY (Scrollable) */}
        <div className="px-6 sm:px-9 py-6 sm:py-7 overflow-y-auto overscroll-contain">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp();
            }}
            noValidate
          >
            {/* Optional Product Context Summary if launched from a PDP */}
            {product && (product.productName || product.variantOrSize || product.material) && (
              <div className="mb-5 bg-[#F6F0E8] border border-[#C7A86A]/40 rounded-xl p-3.5 sm:p-4 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] tracking-[0.22em] font-bold text-[#C7A86A] uppercase">
                    Selected Product
                  </span>
                  {product.category && (
                    <span className="text-[10px] tracking-[0.1em] font-medium text-[#0F2744]/70 uppercase">
                      {product.category}
                    </span>
                  )}
                </div>
                {product.productName && (
                  <p className="font-display text-base sm:text-lg text-[#0F2744] font-medium leading-snug">
                    {product.productName}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#0F2744]/85">
                  {product.variantOrSize && (
                    <span>
                      <strong className="text-[#0F2744]">Size / Spec:</strong> {product.variantOrSize}
                    </span>
                  )}
                  {product.color && (
                    <span>
                      <strong className="text-[#0F2744]">Colour:</strong> {product.color}
                    </span>
                  )}
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, val]) =>
                      val ? (
                        <span key={key}>
                          <strong className="text-[#0F2744]">{key}:</strong> {val}
                        </span>
                      ) : null
                    )}
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {/* 1. Your Name — required */}
              <Field label="Your Name" required error={errors.name}>
                <input
                  type="text"
                  className={inputCls}
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Full name"
                  autoFocus
                />
              </Field>

              {/* 2. Company Name — optional */}
              <Field label="Company Name">
                <input
                  type="text"
                  className={inputCls}
                  maxLength={120}
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Brand or company name"
                />
              </Field>

              {/* 3. Product Interested In — required dropdown */}
              <Field label="Product Interested In" required error={errors.productInterestedIn}>
                <select
                  className={`${inputCls} cursor-pointer`}
                  value={form.productInterestedIn}
                  onChange={(e) => set("productInterestedIn", e.target.value)}
                >
                  <option value="">Select a product category</option>
                  {categoriesList.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </Field>

              {/* 4. Preferred Material — optional */}
              <Field label="Preferred Material">
                <input
                  type="text"
                  className={inputCls}
                  maxLength={120}
                  value={form.preferredMaterial}
                  onChange={(e) => set("preferredMaterial", e.target.value)}
                  placeholder="e.g. Rigid board, velvet, kraft, satin"
                />
              </Field>

              {/* 5. Estimated Quantity — required */}
              <Field label="Estimated Quantity" required error={errors.estimatedQuantity}>
                <input
                  type="text"
                  className={inputCls}
                  maxLength={60}
                  value={form.estimatedQuantity}
                  onChange={(e) => set("estimatedQuantity", e.target.value)}
                  placeholder="e.g. 500 units"
                />
              </Field>

              {/* 6. Best Time to Contact You — dropdown */}
              <Field label="Best Time to Contact You">
                <select
                  className={`${inputCls} cursor-pointer`}
                  value={form.bestTimeToContact}
                  onChange={(e) => set("bestTimeToContact", e.target.value)}
                >
                  {CONTACT_TIMES.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </Field>

              {/* 7. Additional Information — optional textarea */}
              <div className="sm:col-span-2">
                <Field label="Additional Information">
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none`}
                    maxLength={1000}
                    value={form.additionalInfo}
                    onChange={(e) => set("additionalInfo", e.target.value)}
                    placeholder="Tell us about your size requirements, branding, design ideas, or timelines..."
                  />
                </Field>
              </div>

              {/* 8. Phone / WhatsApp Number — required */}
              <div className="sm:col-span-2">
                <span className="block text-[10px] tracking-[0.24em] font-semibold text-[#0F2744]/75 mb-1.5 uppercase">
                  Phone / WhatsApp Number <span className="text-[#C7A86A] font-bold">*</span>
                </span>
                <PhoneInputField
                  variant="outline"
                  value={form.phone}
                  onChange={(val) => set("phone", val)}
                  placeholder="50 000 0000"
                  required
                  error={errors.phone}
                />
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-7 pt-5 border-t border-[#C7A86A]/20 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-xs tracking-[0.2em] font-semibold bg-[#C7A86A] text-[#0F2744] hover:bg-[#b09156] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> SEND VIA WHATSAPP
              </button>
              <button
                type="button"
                onClick={sendEmail}
                className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-xs tracking-[0.2em] font-semibold border border-[#0F2744]/30 text-[#0F2744] hover:border-[#0F2744] hover:bg-[#0F2744] hover:text-[#FAF8F5] transition-all duration-300 cursor-pointer"
              >
                <Mail className="h-4 w-4" /> SEND VIA EMAIL
              </button>
            </div>
            <p className="mt-3.5 text-center text-[11px] text-[#0F2744]/65 font-light">
              Our packaging specialists review every enquiry and reply within 1 business day.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-border-luxe/80 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-luxe outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition shadow-xs";

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
      <span className="block text-[10px] tracking-[0.24em] font-semibold text-navy/75 mb-1.5 uppercase">
        {label}
        {required && <span className="text-gold font-bold"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600 font-medium">{error}</span>}
    </label>
  );
}

export default EnquiryModal;
