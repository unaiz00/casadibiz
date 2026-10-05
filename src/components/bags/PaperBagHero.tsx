"use client";

import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site-chrome";
import PaperBagImageGallery from "@/components/bags/PaperBagImageGallery";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PaperBagHeroProps {
  title: string;
  subtitle?: string;
  shortDescription: string;
  breadcrumbs: BreadcrumbItem[];
  heroImages: string[];
  applications?: { label: string }[];
}

export default function PaperBagHero({
  title,
  subtitle,
  shortDescription,
  breadcrumbs,
  heroImages = [],
  applications = [],
}: PaperBagHeroProps) {

  return (
    <section className="relative pt-6 pb-20 lg:pb-28 border-b border-[#C7A86A]/20 bg-[#F6F0E8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-8 md:mb-12 animate-fade-up">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Premium Editorial Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left order-last lg:order-first animate-fade-up">
            <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase mb-4 block">
              {subtitle || "PAPER BAGS"}
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0F2744] leading-[1.1] mb-6 font-medium">
              {title}
            </h1>
            
            <div className="w-16 h-[2px] bg-[#C7A86A] mb-8 rounded-full" />

            <p className="text-[#0F2744]/80 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
              {shortDescription}
            </p>

            {applications.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C7A86A]/10 text-[#C7A86A] text-[10px] tracking-wider font-semibold uppercase px-3 py-1 rounded-full border border-[#C7A86A]/20"
                  >
                    {app.label}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-bold bg-[#C7A86A] text-[#0F2744] hover:bg-[#0F2744] hover:text-[#F6F0E8] transition-all duration-300 shadow-sm"
              >
                REQUEST A QUOTE <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#construction-section"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs tracking-[0.25em] font-semibold border border-[#0F2744]/20 hover:border-[#C7A86A] hover:text-[#C7A86A] transition-colors text-center text-[#0F2744] cursor-pointer"
              >
                INSPECT DETAILS
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Presentation */}
          <div className="lg:col-span-7 flex flex-col gap-4 order-first lg:order-last animate-fade-up [animation-delay:150ms]">
            <PaperBagImageGallery
              images={heroImages}
              productTitle={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
