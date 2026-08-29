import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./site-chrome";

type FooterItem = { label: string; to?: string; href?: string };

export function SiteFooter() {
  const cols: { title: string; items: FooterItem[] }[] = [
    {
      title: "PRODUCTS",
      items: [
        { label: "Boxes", to: "/boxes" },
        { label: "Bags", to: "/bags" },
        { label: "Pouches", to: "/pouches" },
        { label: "Wraps", to: "/wraps" },
        { label: "Ribbons", to: "/ribbons" },
        { label: "Collections", to: "/collections" },
        { label: "Gifting Essentials", to: "/gifting" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "About Us", to: "/about" },
        { label: "Our Process", href: "/#about" },
      ],
    },
    {
      title: "HELP",
      items: [
        { label: "FAQs", to: "/contact" },
        { label: "Shipping & Delivery", to: "/contact" },
      ],
    },
  ];

  const socials: { Icon: typeof Instagram; href: string; label: string }[] = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: MessageCircle, href: "https://wa.me/919995255846", label: "WhatsApp" },
    { Icon: Mail, href: "mailto:hello@casadibiz.com", label: "Email" },
  ];

  return (
    <footer className="w-full bg-[#0F2744] text-[#F6F0E8] border-t border-[#C7A86A]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Column (Brand info & Contact) */}
        <div className="max-w-md space-y-6">
          <div>
            <Logo />
            <p className="text-sm text-[#F6F0E8]/70 leading-relaxed mt-5">
              Luxury packaging and gifting solutions crafted to perfection for premium brands worldwide.
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="h-10 w-10 rounded-full border border-[#C7A86A]/50 grid place-items-center text-[#C7A86A] hover:bg-[#C7A86A] hover:text-[#0F2744] transition"
              >
                {/* ICON TODO: Swap icon */}
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <ul className="space-y-3 text-sm text-[#F6F0E8]/80">
            <li>
              <a href="tel:+919995255846" className="flex items-center gap-2 hover:text-[#C7A86A] transition">
                {/* ICON TODO: Swap icon */}
                <Phone className="h-4 w-4 text-[#C7A86A]" /> +91 9995255846
              </a>
            </li>
            <li>
              <a href="mailto:hello@casadibiz.com" className="flex items-center gap-2 hover:text-[#C7A86A] transition">
                {/* ICON TODO: Swap icon */}
                <Mail className="h-4 w-4 text-[#C7A86A]" /> hello@casadibiz.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Dubai+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C7A86A] transition"
              >
                {/* ICON TODO: Swap icon */}
                <MapPin className="h-4 w-4 text-[#C7A86A]" /> Dubai, UAE
              </a>
            </li>
          </ul>
        </div>

        {/* Right Columns (Links) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 w-full lg:w-auto">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] mb-5">{c.title}</div>
              <ul className="space-y-3 text-sm text-[#F6F0E8]/80">
                {c.items.map((i) => (
                  <li key={i.label}>
                    {i.to ? (
                      <Link href={i.to} className="hover:text-[#C7A86A] transition">
                        {i.label}
                      </Link>
                    ) : (
                      <a href={i.href} className="hover:text-[#C7A86A] transition">
                        {i.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full mt-12 pt-6 border-t border-[#C7A86A]/10 text-center text-xs text-[#F6F0E8]/70">
        © 2024 CASA DI BIZ. All Rights Reserved.
      </div>
    </footer>
  );
}
