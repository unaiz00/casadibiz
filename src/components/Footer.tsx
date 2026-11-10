import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Logo } from "./site-chrome";

type FooterItem = { label: string; to?: string; href?: string };

export function SiteFooter() {
  const products: FooterItem[] = [
    { label: "Boxes", to: "/boxes/#jewellery-boxes" },
    { label: "Bags", to: "/bags" },
    { label: "Pouches", to: "/pouches" },
    { label: "Wraps", to: "/wraps" },
    { label: "Ribbons", to: "/ribbons" },
    { label: "Collections", to: "/collections" },
    { label: "Gifting Essentials", to: "/collections/corporate-collection" },
  ];

  const company: FooterItem[] = [
    { label: "About Us", to: "/about" },
    { label: "Our Process", to: "/about" },
  ];

  const help: FooterItem[] = [
    { label: "FAQs", to: "/contact" },
    { label: "Shipping & Delivery", to: "/contact" },
    { label: "Returns & Exchange", to: "/contact" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ];

  return (
    <footer className="w-full bg-ivory text-navy border-t border-border-luxe/60 transition-colors duration-200">
      <div
        className="mx-auto max-w-[1480px] py-10 sm:py-12"
        style={{ paddingInline: "clamp(24px, 4vw, 64px)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.15fr_0.8fr_1fr] gap-8 md:gap-y-10 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12">
          {/* 1. BRAND SECTION (Wider, left-aligned on desktop; full-width on tablet) */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-navy/80 leading-relaxed">
              Luxury isn&rsquo;t just inside.
              <br />
              It starts with the packaging.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/casadibiz?cplk=cnE5NjQ3ZHRzMHNl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-8 w-8 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition-colors duration-200"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://wa.me/+971563374248"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-8 w-8 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition-colors duration-200"
              >
                <SiWhatsapp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* 2. CONTACT SECTION */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-[11px] tracking-[0.28em] font-semibold text-gold uppercase mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-navy/80">
              <li>
                <a
                  href="tel:+971563374248"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>+971 56 337 4248</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@casadibiz.com"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>info@casadibiz.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>Dubai, UAE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 3. PRODUCTS SECTION */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-[11px] tracking-[0.28em] font-semibold text-gold uppercase mb-4">
              PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-navy/80">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to || "#"}
                    className="hover:text-gold transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. COMPANY SECTION */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-[11px] tracking-[0.28em] font-semibold text-gold uppercase mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-navy/80">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to || "#"}
                    className="hover:text-gold transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. HELP SECTION */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-[11px] tracking-[0.28em] font-semibold text-gold uppercase mb-4">
              HELP
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-navy/80">
              {help.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to || "#"}
                    className="hover:text-gold transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="bg-[#0F2744] text-gold border-t border-[#C7A86A]/10">
        <div
          className="mx-auto max-w-[1480px] py-4 text-center text-xs tracking-wider text-gold"
          style={{ paddingInline: "clamp(24px, 4vw, 64px)" }}
        >
          © CASA DI BIZ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
