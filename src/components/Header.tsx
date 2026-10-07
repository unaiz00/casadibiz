'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./site-chrome";

type NavLink = { label: string; href: string; hasChevron?: boolean };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products", hasChevron: true },
  { label: "About Us", href: "/about" },
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
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-luxe/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-9 text-sm">
          {NAV_LINKS.map((l) =>
            l.hasChevron ? (
              <div key={l.label} className="relative">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDesktopProductsOpen((v) => !v);
                  }}
                  className="relative flex items-center gap-1 tracking-wide transition-colors hover:text-gold text-navy py-2 cursor-pointer"
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${desktopProductsOpen ? "rotate-180" : ""
                      }`}
                  />
                </a>
                {desktopProductsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div className="min-w-[230px] rounded-[12px] border border-border-luxe/60 bg-ivory shadow-[0_24px_60px_-22px_rgba(22,35,60,0.35)] p-2 animate-fade-up">
                      {PRODUCT_LINKS.map((p) => (
                        <Link
                          key={p.label}
                          href={p.href}
                          onClick={() => setDesktopProductsOpen(false)}
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
                      aria-expanded={mobileProductsOpen}
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-3 text-sm tracking-wide text-navy hover:text-gold transition"
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
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
