import Link from "next/link";
import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
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

  const socials: { Icon: typeof Instagram; href: string; label: string }[] = [
    { Icon: Instagram, href: "https://www.instagram.com/casadibiz?cplk=cnE5NjQ3ZHRzMHNl", label: "Instagram" },
    { Icon: MessageCircle, href: "https://wa.me/+971563374248", label: "WhatsApp" },
    { Icon: Mail, href: "mailto:info@casadibiz.com", label: "Email" },
  ];

  return (
    <footer className="w-full bg-ivory text-navy border-t border-border-luxe/60 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 xl:grid-cols-12 gap-8 md:gap-y-10 md:gap-x-10 lg:gap-x-12 xl:gap-8">
          {/* 1. BRAND SECTION (Wider, left-aligned on desktop; full-width on tablet) */}
          <div className="sm:col-span-2 md:col-span-12 xl:col-span-4 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-muted-luxe leading-relaxed max-w-sm md:max-w-xl xl:max-w-sm">
              Luxury packaging and gifting solutions crafted to perfection for premium brands worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-8 w-8 rounded-full border border-gold/40 grid place-items-center text-gold hover:bg-gold hover:text-cream transition-colors duration-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. CONTACT SECTION (Tablet: Row 1 col 1; Desktop: col 2) */}
          <div className="md:col-span-6 xl:col-span-2">
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
                  <span>+971 563374248</span>
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

          {/* 3. PRODUCTS SECTION (Tablet: Row 1 col 2; Desktop: col 3) */}
          <div className="md:col-span-6 xl:col-span-2">
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

          {/* 4. COMPANY SECTION (Tablet: Row 2 col 1; Desktop: col 4) */}
          <div className="md:col-span-6 xl:col-span-2">
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

          {/* 5. HELP SECTION (Tablet: Row 2 col 2; Desktop: col 5) */}
          <div className="md:col-span-6 xl:col-span-2">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-xs tracking-wider text-gold">
          © CASA DI BIZ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
