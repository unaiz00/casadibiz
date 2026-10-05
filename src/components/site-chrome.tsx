'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/assets/logo.png"
        alt="CASA DI BIZ — Luxury Packaging"
        className="h-12 w-auto object-contain"
      />
      <span className="font-display text-xl tracking-wide text-navy">CASA DI BIZ</span>
    </Link>
  );
}

type NavLink = { label: string; href: string; hasChevron?: boolean };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products", hasChevron: true },
  { label: "About Us", href: "/#about" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS: NavLink[] = [
  { label: "Boxes", href: "/boxes" },
  { label: "Bags", href: "/bags" },
  { label: "Pouches", href: "/pouches" },
  { label: "Wraps", href: "/wraps" },
  { label: "Ribbons", href: "/ribbons" },
  { label: "Collections", href: "/collections" },
  { label: "Gifting Essentials", href: "/gifting" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    if (productsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsOpen]);

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-border-luxe/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-9 text-sm">
          {NAV_LINKS.map((l) =>
            l.hasChevron ? (
              <div key={l.label} className="relative" ref={dropdownRef}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setProductsOpen((v) => !v);
                  }}
                  className="relative flex items-center gap-1 tracking-wide transition-colors hover:text-gold text-navy py-2 cursor-pointer"
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                      }`}
                  />
                </a>
                {productsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div className="min-w-[230px] rounded-[12px] border border-border-luxe/60 bg-ivory shadow-[0_24px_60px_-22px_rgba(22,35,60,0.35)] p-2 animate-fade-up">
                      {PRODUCT_LINKS.map((p) => (
                        <Link
                          key={p.label}
                          href={p.href}
                          onClick={() => setProductsOpen(false)}
                          className="block rounded-[8px] px-4 py-2.5 text-sm text-navy/85 hover:bg-cream hover:text-gold transition-colors"
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="relative flex items-center gap-1 tracking-wide transition-colors hover:text-gold text-navy"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-navy hover:text-gold transition shrink-0"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border-luxe/60 bg-ivory">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
            <nav className="flex flex-col divide-y divide-border-luxe/50">
              {NAV_LINKS.map((l) =>
                l.hasChevron ? (
                  <div key={l.label}>
                    <button
                      type="button"
                      aria-expanded={productsOpen}
                      onClick={() => setProductsOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-3 text-sm tracking-wide text-navy hover:text-gold transition"
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {productsOpen && (
                      <div className="pb-3 pl-3 flex flex-col">
                        {PRODUCT_LINKS.map((p) => (
                          <Link
                            key={p.label}
                            href={p.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm text-navy/75 hover:text-gold transition"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-sm tracking-wide text-navy hover:text-gold transition"
                  >
                    {l.label}
                  </Link>
                ),
              )}

            </nav>
            <div className="mt-5 pt-5 border-t border-border-luxe/60">
              <div className="text-[11px] tracking-[0.3em] font-semibold text-gold mb-3">PRODUCTS</div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {PRODUCT_LINKS.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-navy/80 hover:text-gold transition"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-border-luxe/60 space-y-2 text-sm text-navy/80">
              <a href="tel:+919995255846" className="flex items-center gap-2 hover:text-gold transition">
                <Phone className="h-4 w-4 text-gold" /> +91 9995255846
              </a>
              <a href="mailto:hello@casadibiz.com" className="flex items-center gap-2 hover:text-gold transition">
                <Mail className="h-4 w-4 text-gold" /> hello@casadibiz.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> Dubai, UAE
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
        { label: "About Us", href: "/#about" },
        { label: "Our Process", href: "/#about" },
      ],
    },
    {
      title: "HELP",
      items: [
        { label: "FAQs", to: "/contact" },
        { label: "Shipping & Delivery", to: "/contact" },
        { label: "Returns & Exchange", to: "/contact" },
        { label: "Terms & Conditions", to: "/contact" },
        { label: "Privacy Policy", to: "/contact" },
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
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="text-sm text-muted-luxe leading-relaxed mt-5 max-w-xs">
            Luxury packaging and gifting solutions crafted to perfection for premium brands worldwide.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="h-10 w-10 rounded-full border border-gold/50 grid place-items-center text-gold hover:bg-gold hover:text-cream transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[11px] tracking-[0.3em] font-semibold text-gold mb-5">{c.title}</div>
            <ul className="space-y-3 text-sm text-navy/80">
              {c.items.map((i) => (
                <li key={i.label}>
                  {i.to ? (
                    <Link href={i.to} className="hover:text-gold transition">{i.label}</Link>
                  ) : (
                    <a href={i.href} className="hover:text-gold transition">{i.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="text-[11px] tracking-[0.3em] font-semibold text-gold mb-5">CONTACT</div>
          <ul className="space-y-3 text-sm text-navy/80">
            <li>
              <a href="tel:+919995255846" className="flex items-center gap-2 hover:text-gold transition">
                <Phone className="h-4 w-4 text-gold" /> +91 9995255846
              </a>
            </li>
            <li>
              <a href="mailto:hello@casadibiz.com" className="flex items-center gap-2 hover:text-gold transition">
                <Mail className="h-4 w-4 text-gold" /> hello@casadibiz.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Dubai+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition"
              >
                <MapPin className="h-4 w-4 text-gold" /> Dubai, UAE
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-navy text-cream/80">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs tracking-wider">
          © 2024 CASA DI BIZ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs tracking-[0.2em] uppercase text-muted-luxe">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link href={it.to} className="hover:text-gold transition">{it.label}</Link>
            ) : (
              <span className="text-navy">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-gold/60">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
