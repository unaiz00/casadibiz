'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
  { label: "Boxes", href: "/boxes/#jewellery-boxes" },
  { label: "Bags", href: "/bags" },
  { label: "Pouches", href: "/pouches" },
  { label: "Wraps", href: "/wraps" },
  { label: "Ribbons", href: "/ribbons" },
  { label: "Collections", href: "/collections" },
  { label: "Gifting Essentials", href: "/gifting" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isOpenVisible, setIsOpenVisible] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setDesktopProductsOpen(false);
      }
    }
    if (desktopProductsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopProductsOpen]);

  // Handle open/close animation and body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => {
        setIsOpenVisible(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsOpenVisible(false);
      document.body.style.overflow = "";
    }
  }, [open]);

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        closeMobileMenu();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMobileMenu = () => {
    setIsOpenVisible(false);
    setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  const toggleMobileMenu = () => {
    if (open) {
      closeMobileMenu();
    } else {
      setOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-border-luxe/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-9 text-sm">
          {NAV_LINKS.map((l) =>
            l.hasChevron ? (
              <div key={l.label} className="relative" ref={desktopDropdownRef}>
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
          onClick={toggleMobileMenu}
          className="lg:hidden text-navy hover:text-gold transition shrink-0 p-1"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Bottom Sheet Navigation */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            onClick={closeMobileMenu}
            className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
              isOpenVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Bottom Sheet */}
          <div
            className={`relative z-10 w-full max-w-lg mx-auto bg-[#FAF8F5] rounded-t-[24px] border-t border-x border-border-luxe/70 shadow-[0_-12px_40px_rgba(0,0,0,0.18)] transition-transform duration-350 ease-out transform max-h-[75vh] flex flex-col ${
              isOpenVisible ? "translate-y-0" : "translate-y-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Circular Close Button at Top Center */}
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="absolute -top-14 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#FAF8F5] text-navy border border-border-luxe/80 shadow-lg flex items-center justify-center hover:text-gold active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Sheet Content */}
            <div className="overflow-y-auto overscroll-contain px-6 pt-6 pb-8 space-y-5">
              <nav className="flex flex-col divide-y divide-border-luxe/50">
                {NAV_LINKS.map((l) =>
                  l.hasChevron ? (
                    <div key={l.label}>
                      <button
                        type="button"
                        aria-expanded={mobileProductsOpen}
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-3.5 text-base tracking-wide text-navy hover:text-gold transition font-medium"
                      >
                        <span>{l.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-gold transition-transform duration-300 ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileProductsOpen && (
                        <div className="pb-3 pl-3 flex flex-col space-y-1">
                          {PRODUCT_LINKS.map((p) => (
                            <Link
                              key={p.label}
                              href={p.href}
                              onClick={closeMobileMenu}
                              className="py-2 px-2.5 rounded-md text-sm text-navy/80 hover:text-gold hover:bg-cream/60 transition"
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
                      onClick={closeMobileMenu}
                      className="py-3.5 text-base tracking-wide text-navy hover:text-gold transition font-medium"
                    >
                      {l.label}
                    </Link>
                  ),
                )}
              </nav>

              {/* Contact Information & Socials */}
              <div className="pt-5 border-t border-border-luxe/60 space-y-3 text-sm text-navy/80">
                <a
                  href="tel:+919995255846"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <span>+91 9995255846</span>
                </a>
                <a
                  href="mailto:hello@casadibiz.com"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <span>hello@casadibiz.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  <span>Dubai, UAE</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/919995255846"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-cream transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
