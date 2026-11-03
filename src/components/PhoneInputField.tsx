"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Input from "react-phone-number-input/input";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumber,
  formatPhoneNumberIntl,
  type Country,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en.json";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown, Search, X, Check } from "lucide-react";

// Safe module resolution for Next.js ESM / CJS interop
const FLAG_MAP: Record<string, any> = (flags as any).default || flags;
const EN_MAP: Record<string, string> = (en as any).default || en;

export interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  defaultCountry?: Country;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  variant?: "underline" | "outline";
  className?: string;
  error?: string;
}

// Popular / GCC countries placed at the top for quick access
const PRIORITY_COUNTRIES: Country[] = ["AE", "SA", "QA", "KW", "BH", "OM", "GB", "US", "IN"];

// Common search aliases for countries
const SEARCH_ALIASES: Record<string, string[]> = {
  AE: ["uae", "emirates", "dubai", "abu dhabi", "sharjah", "ajman"],
  SA: ["ksa", "saudi", "riyadh", "jeddah", "saudi arabia"],
  US: ["usa", "america", "united states of america"],
  GB: ["uk", "britain", "england", "scotland", "wales", "great britain"],
  IN: ["ind", "bharat", "hindustan", "india"],
  NL: ["holland", "netherlands"],
  RU: ["russia"],
  KR: ["south korea", "korea"],
  QA: ["qatar", "doha"],
  KW: ["kuwait"],
  BH: ["bahrain", "manama"],
  OM: ["oman", "muscat"],
};

export function CountryFlag({ country, className = "w-5 h-3.5" }: { country: Country; className?: string }) {
  const FlagComponent = FLAG_MAP[country];
  if (!FlagComponent) {
    return (
      <span className={`${className} inline-flex items-center justify-center text-[10px] font-mono font-bold bg-[#0F2744]/10 text-[#0F2744] rounded-[2px]`}>
        {country}
      </span>
    );
  }
  return (
    <span
      className={`${className} inline-flex items-center justify-center shrink-0 rounded-[2px] overflow-hidden border border-[#0F2744]/15 shadow-xs [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover`}
    >
      <FlagComponent title={EN_MAP[country] || country} />
    </span>
  );
}

export function PhoneInputField({
  value,
  onChange,
  defaultCountry = "AE",
  placeholder = "50 000 0000",
  required = false,
  disabled = false,
  id,
  variant = "underline",
  className = "",
  error,
}: PhoneInputFieldProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // If a full international number with + is pasted, auto-detect country
  useEffect(() => {
    if (value && value.startsWith("+")) {
      try {
        const parsed = parsePhoneNumber(value);
        if (parsed?.country && parsed.country !== selectedCountry) {
          setSelectedCountry(parsed.country);
        }
      } catch {
        // Ignore partial parse errors
      }
    }
  }, [value, selectedCountry]);

  // Focus search input when popover opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Precompute country list
  const allCountries = useMemo(() => {
    const list = getCountries();
    return list.map((c) => {
      const name = EN_MAP[c] || c;
      let callingCode = "";
      try {
        callingCode = getCountryCallingCode(c);
      } catch {
        callingCode = "";
      }
      return {
        code: c,
        name,
        callingCode,
        aliases: SEARCH_ALIASES[c] || [],
      };
    });
  }, []);

  // Filter countries
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allCountries;

    const cleanQ = q.replace(/^\+/, "");
    return allCountries.filter((c) => {
      if (c.name.toLowerCase().includes(q)) return true;
      if (c.code.toLowerCase().includes(q)) return true;
      if (c.callingCode.includes(cleanQ)) return true;
      if (c.aliases.some((alias) => alias.includes(q))) return true;
      return false;
    });
  }, [allCountries, searchQuery]);

  const priorityList = useMemo(() => {
    if (searchQuery.trim()) return [];
    return PRIORITY_COUNTRIES.map((code) =>
      allCountries.find((c) => c.code === code)
    ).filter(Boolean) as typeof allCountries;
  }, [allCountries, searchQuery]);

  const otherList = useMemo(() => {
    if (searchQuery.trim()) return filteredCountries;
    return allCountries.filter((c) => !PRIORITY_COUNTRIES.includes(c.code));
  }, [allCountries, filteredCountries, searchQuery]);

  const activeCallingCode = useMemo(() => {
    try {
      return getCountryCallingCode(selectedCountry);
    } catch {
      return "971";
    }
  }, [selectedCountry]);

  const handleCountrySelect = (countryCode: Country) => {
    setSelectedCountry(countryCode);
    setIsOpen(false);
    setSearchQuery("");

    // Re-prefix current phone number if present
    if (value && value.trim()) {
      try {
        const parsed = parsePhoneNumber(value);
        if (parsed?.nationalNumber) {
          const newCallingCode = getCountryCallingCode(countryCode);
          onChange(`+${newCallingCode}${parsed.nationalNumber}`);
          return;
        }
      } catch {
        const digits = value.replace(/\D/g, "");
        if (digits) {
          const newCallingCode = getCountryCallingCode(countryCode);
          onChange(`+${newCallingCode}${digits.replace(/^0+/, "")}`);
          return;
        }
      }
    }
  };

  const handlePhoneChange = (newVal: string | undefined) => {
    if (!newVal) {
      onChange("");
      return;
    }
    onChange(newVal);
  };

  // Visually refined containers
  const containerCls =
    variant === "underline"
      ? "relative flex items-center w-full border-b border-[#0F2744]/20 focus-within:border-[#0F2744] transition-colors pb-1.5 pt-0.5"
      : "relative flex items-center w-full rounded-[10px] border border-[#C7A86A]/30 bg-white px-3 py-2 text-sm text-[#0F2744] focus-within:border-[#C7A86A] focus-within:ring-1 focus-within:ring-[#C7A86A]/40 transition shadow-xs";

  const triggerCls =
    variant === "underline"
      ? "flex items-center gap-2 py-1 px-2.5 rounded-[4px] bg-[#0F2744]/5 hover:bg-[#0F2744]/10 text-sm font-semibold text-[#0F2744] transition cursor-pointer shrink-0 select-none outline-none group border border-[#0F2744]/10"
      : "flex items-center gap-2 py-1 px-2.5 rounded-[6px] bg-[#0F2744]/5 hover:bg-[#0F2744]/10 text-xs sm:text-sm font-semibold text-[#0F2744] transition cursor-pointer shrink-0 select-none outline-none group border border-[#0F2744]/10";

  const inputCls =
    variant === "underline"
      ? "flex-1 min-w-0 bg-transparent py-1.5 pl-3 outline-none text-sm text-[#0F2744] placeholder-[#0F2744]/40 font-mono sm:font-sans transition"
      : "flex-1 min-w-0 bg-transparent py-1 pl-3 outline-none text-sm text-[#0F2744] placeholder:text-[#0F2744]/40 font-mono sm:font-sans transition";

  return (
    <div className={`w-full ${className}`}>
      <div className={containerCls}>
        {/* Radix Popover for Country Selector */}
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              disabled={disabled}
              aria-label={`Select country calling code. Currently selected: ${EN_MAP[selectedCountry] || selectedCountry} (+${activeCallingCode})`}
              className={triggerCls}
            >
              <CountryFlag country={selectedCountry} className="w-5 h-3.5" />
              <span className="text-xs sm:text-sm font-bold tracking-wider font-mono text-[#0F2744]">
                +{activeCallingCode}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#0F2744]/60 group-hover:text-[#0F2744] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </Popover.Trigger>

          {/* Radix Portal & Content */}
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={8}
              className="z-[99999] w-[300px] xs:w-[340px] sm:w-[370px] max-w-[calc(100vw-2rem)] bg-[#FAF8F5] border border-[#0F2744]/15 rounded-lg shadow-2xl overflow-hidden focus:outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            >
              {/* Search Bar */}
              <div className="p-2.5 border-b border-[#0F2744]/10 bg-[#FAF8F5]">
                <div className="relative flex items-center">
                  <Search className="absolute left-2.5 w-3.5 h-3.5 text-[#0F2744]/40 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search country or code (e.g. UAE, 971)..."
                    className="w-full bg-[#F6F0E8] border border-[#0F2744]/15 rounded-[4px] pl-8 pr-7 py-2 text-xs text-[#0F2744] placeholder-[#0F2744]/40 focus:outline-none focus:border-[#C7A86A] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                      className="absolute right-2 text-[#0F2744]/40 hover:text-[#0F2744] transition-colors p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Scrollable list */}
              <div className="max-h-60 sm:max-h-72 overflow-y-auto overscroll-contain py-1 divide-y divide-[#0F2744]/5">
                {filteredCountries.length === 0 ? (
                  <div className="px-4 py-8 text-center text-xs text-[#0F2744]/50">
                    No matching countries found
                  </div>
                ) : (
                  <>
                    {/* Priority region countries */}
                    {priorityList.length > 0 && (
                      <div>
                        <div className="px-3.5 pt-2 pb-1 text-[10px] tracking-[0.2em] font-semibold text-[#C7A86A] uppercase">
                          Popular / Region
                        </div>
                        {priorityList.map((c) => {
                          const isSelected = c.code === selectedCountry;
                          return (
                            <button
                              key={`priority-${c.code}`}
                              type="button"
                              onClick={() => handleCountrySelect(c.code)}
                              className={`w-full flex items-center justify-between px-3.5 py-2 text-left transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-[#0F2744]/10 text-[#0F2744]"
                                  : "hover:bg-[#0F2744]/5 text-[#0F2744]"
                              }`}
                              role="option"
                              aria-selected={isSelected}
                            >
                              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                <CountryFlag country={c.code} className="w-5 h-3.5" />
                                <span className="text-xs font-medium truncate">{c.name}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="text-[11px] font-mono font-medium text-[#0F2744]/60">
                                  +{c.callingCode}
                                </span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#C7A86A]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* All other countries */}
                    <div>
                      {priorityList.length > 0 && (
                        <div className="px-3.5 pt-3 pb-1 text-[10px] tracking-[0.2em] font-semibold text-[#0F2744]/50 uppercase">
                          All Countries
                        </div>
                      )}
                      {otherList.map((c) => {
                        const isSelected = c.code === selectedCountry;
                        return (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => handleCountrySelect(c.code)}
                            className={`w-full flex items-center justify-between px-3.5 py-2 text-left transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#0F2744]/10 text-[#0F2744]"
                                : "hover:bg-[#0F2744]/5 text-[#0F2744]"
                            }`}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <CountryFlag country={c.code} className="w-5 h-3.5" />
                              <span className="text-xs font-medium truncate">{c.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="text-[11px] font-mono font-medium text-[#0F2744]/60">
                                +{c.callingCode}
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#C7A86A]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* Smart Phone Number Input from react-phone-number-input */}
        <Input
          id={id}
          country={selectedCountry}
          international={true}
          withCountryCallingCode={false}
          value={value}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputCls}
          autoComplete="tel"
        />
      </div>
      {error && <span className="mt-1.5 block text-xs text-red-600 font-medium">{error}</span>}
    </div>
  );
}

/**
 * Helper to ensure any phone string submitted to WhatsApp, Email, or backend
 * contains the full international calling code and format.
 */
export function formatFullInternationalPhone(
  phoneStr: string,
  fallbackCountry: Country = "AE"
): string {
  if (!phoneStr || !phoneStr.trim()) return "";
  const trimmed = phoneStr.trim();

  // If already starts with +, format directly
  if (trimmed.startsWith("+")) {
    try {
      const formatted = formatPhoneNumberIntl(trimmed as any);
      if (formatted) return formatted;
    } catch {
      // ignore
    }
    return trimmed;
  }

  // Parse with fallback country
  try {
    const parsed = parsePhoneNumber(trimmed, fallbackCountry);
    if (parsed) {
      const formatted = formatPhoneNumberIntl(parsed.number);
      if (formatted) return formatted;
      return parsed.number;
    }
  } catch {
    // ignore
  }

  // Fallback: prefix with country calling code
  try {
    const code = getCountryCallingCode(fallbackCountry);
    const cleanDigits = trimmed.replace(/^0+/, "").replace(/\D/g, "");
    return `+${code} ${cleanDigits}`;
  } catch {
    return trimmed;
  }
}
