"use client";

import React, { useRef, useState } from "react";

/* ---------------- Custom Luxury Packaging Visual Symbols (48x48) ---------------- */

/** 1. Share Your Requirements – elegant conversation / enquiry symbol */
function RequirementsIcon({ className = "w-[34px] h-[34px] sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Primary Conversation Bubble - Client Consultation (Navy) */}
      <path
        d="M8 13C8 10.24 10.24 8 13 8H31C33.76 8 36 10.24 36 13V22C36 24.76 33.76 27 31 27H18L11 32V27H13C10.24 27 8 24.76 8 22V13Z"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Brief Specification Lines (Navy) */}
      <path
        d="M14 14.5H25"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 19.5H29"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Secondary Consultation Bubble (Soft Gold) */}
      <path
        d="M21 27H35C37.76 27 40 29.24 40 32V36C40 38.76 37.76 41 35 41H30L24 45V41H23C21.34 41 20 39.66 20 38V33C20 30.5 21.3 28.5 23 27.5"
        stroke="#C7A86A"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Refined Gold Dialogue Dots */}
      <circle cx="26" cy="34" r="1.3" fill="#C7A86A" />
      <circle cx="30" cy="34" r="1.3" fill="#C7A86A" />
      <circle cx="34" cy="34" r="1.3" fill="#C7A86A" />
    </svg>
  );
}

/** 2. Review Your Quote & Design – design document with drafting pencil */
function QuoteDesignIcon({ className = "w-[34px] h-[34px] sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Design Document / Spec Sheet (Navy) */}
      <path
        d="M10 7H27L36 16V39C36 40.66 34.66 42 33 42H10C8.34 42 7 40.66 7 39V10C7 8.34 8.34 7 10 7Z"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Folded Top Corner */}
      <path
        d="M27 7V16H36"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spec / Quotation Lines (Navy) */}
      <path
        d="M13 20H23"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 26H20"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 32H18"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Drafting Pencil at 45deg (Soft Gold) */}
      <path
        d="M25 35L36.5 23.5C37.3 22.7 38.7 22.7 39.5 23.5L40.5 24.5C41.3 25.3 41.3 26.7 40.5 27.5L29 39L23 41L25 35Z"
        stroke="#C7A86A"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />
      {/* Pencil Tip Details */}
      <path
        d="M27 37L25 35"
        stroke="#C7A86A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <polygon points="23,41 24.5,37.5 26.5,39.5" fill="#C7A86A" />
    </svg>
  );
}

/** 3. Approve the Details – document with approval checkmark seal */
function ApproveDetailsIcon({ className = "w-[34px] h-[34px] sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Approval Specification Document (Navy) */}
      <path
        d="M10 7H27L36 16V39C36 40.66 34.66 42 33 42H10C8.34 42 7 40.66 7 39V10C7 8.34 8.34 7 10 7Z"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Folded Top Corner */}
      <path
        d="M27 7V16H36"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Document Content Lines */}
      <path
        d="M13 18H22"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 24H20"
        stroke="#0F2744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Approval Seal Badge & Checkmark (Soft Gold) */}
      <circle
        cx="29"
        cy="31"
        r="8.5"
        stroke="#C7A86A"
        strokeWidth="1.9"
        fill="#FFFFFF"
      />
      {/* Bold Approval Checkmark */}
      <path
        d="M25 31L27.8 33.8L33.5 28"
        stroke="#C7A86A"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 4. Production Begins – refined packaging box illustration */
function ProductionBeginsIcon({ className = "w-[34px] h-[34px] sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Luxury Packaging Box Base (Navy / Themed) */}
      <path
        d="M9 20H39V38C39 39.66 37.66 41 36 41H12C10.34 41 9 39.66 9 38V20Z"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Luxury Inner Shoulder / Neck Line (Soft Gold) */}
      <line
        x1="9"
        y1="20"
        x2="39"
        y2="20"
        stroke="#C7A86A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Packaging Box Lid (Navy / Themed) */}
      <path
        d="M7 13C7 11.9 7.9 11 9 11H39C40.1 11 41 11.9 41 13V19C41 19.55 40.55 20 40 20H8C7.45 20 7 19.55 7 19V13Z"
        stroke="#0F2744"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical Ribbon Bands (Soft Gold) */}
      <path
        d="M21 11V41"
        stroke="#C7A86A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M27 11V41"
        stroke="#C7A86A"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* Ribbon Bow on Top (Soft Gold) */}
      <path
        d="M24 11C21 6.5 15.5 7.5 17 11C18.5 13.8 23.5 11.5 24 11Z"
        stroke="#C7A86A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 11C27 6.5 32.5 7.5 31 11C29.5 13.8 24.5 11.5 24 11Z"
        stroke="#C7A86A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="11" r="1.6" fill="#C7A86A" />
      <path
        d="M22.5 12L19 16.5"
        stroke="#C7A86A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M25.5 12L29 16.5"
        stroke="#C7A86A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Process Steps Configuration ---------------- */

export interface ProcessStep {
  step: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    stepNumber: "01",
    title: "Share Your Requirements",
    description: "Tell us your product, quantity, sizes and customization needs.",
    icon: RequirementsIcon,
  },
  {
    step: 2,
    stepNumber: "02",
    title: "Review Your Quote & Design",
    description: "Review the proposed packaging details and quotation.",
    icon: QuoteDesignIcon,
  },
  {
    step: 3,
    stepNumber: "03",
    title: "Approve the Details",
    description: "Confirm the design, materials and finishes before production.",
    icon: ApproveDetailsIcon,
  },
  {
    step: 4,
    stepNumber: "04",
    title: "Production Begins",
    description: "Your packaging moves into production after final approval.",
    icon: ProductionBeginsIcon,
  },
];

interface OrderingProcessProps {
  /**
   * Flexible configuration: switch to clean numbered indicators if desired
   */
  showNumbersInsteadOfIcons?: boolean;
}

export function OrderingProcess({
  showNumbersInsteadOfIcons = false,
}: OrderingProcessProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth === 0) return;
    // Calculate current visible card on mobile based on snap item width (~78vw)
    const cardWidth = offsetWidth * 0.78;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), PROCESS_STEPS.length - 1));
  };

  const scrollToStep = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section className="w-full bg-[#F6F0E8] overflow-hidden pt-9 sm:pt-10 md:pt-11 lg:pt-12 pb-3.5 sm:pb-4 md:pb-4 lg:pb-3.5">
      {/* Inner Container: 92% width on desktop/tablet with ~4% side margins, non-restrictive */}
      <div className="w-full px-4 sm:px-6 md:w-[92%] md:px-0 md:mx-auto max-w-[1920px]">
        {/* Section Heading - Left-Aligned */}
        <div className="text-left mb-5 sm:mb-6 lg:mb-7">
          <p className="text-[11px] sm:text-xs tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-1 sm:mb-1.5">
            OUR PROCESS
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[40px] font-medium text-[#0F2744] leading-[1.15] tracking-[-0.01em]">
            From Your Idea to Production
          </h2>
        </div>

        {/* Process Cards Container */}
        {/* Mobile: Horizontal swipe carousel with snap scrolling & partial next-card preview */}
        {/* Tablet: 2-column grid */}
        {/* Desktop: 4 equal-width horizontally stretched cards in 1 row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-3 md:pb-0 pt-0.5 md:pt-0"
        >
          {PROCESS_STEPS.map((stepItem) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="w-[78vw] xs:w-[74vw] sm:w-[62vw] md:w-auto shrink-0 md:shrink snap-center md:snap-align-none flex"
              >
                <div className="w-full h-auto md:h-full md:min-h-[215px] lg:h-[225px] bg-white border border-[#E8DFD1] hover:border-[#C7A86A]/60 rounded-[15px] p-6 lg:p-[26px] flex flex-col items-start transition-colors duration-200">
                  {/* Top Center: Icon Centered Horizontally at Top of Card */}
                  {showNumbersInsteadOfIcons ? (
                    <div className="w-full flex justify-center mb-5 lg:mb-[22px] shrink-0">
                      <span className="font-display text-2xl font-medium text-[#0F2744] tracking-tight">
                        {stepItem.stepNumber}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center mb-5 lg:mb-[22px] shrink-0">
                      <Icon className="w-[34px] h-[34px] sm:w-9 sm:h-9" />
                    </div>
                  )}

                  {/* Card Title - Left-Aligned, 19-21px */}
                  <h3 className="w-full text-left font-display text-[19px] sm:text-[20px] lg:text-[19px] xl:text-[21px] font-medium text-[#0F2744] leading-snug mb-3 lg:mb-[13px]">
                    {stepItem.title}
                  </h3>

                  {/* Card Description - Left-Aligned, 15px, font-normal, soft text color, locally scoped font */}
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 400,
                      fontSynthesis: "none",
                      lineHeight: 1.6,
                      fontSize: "15px",
                      color: "#5F6470",
                    }}
                    className="w-full text-left !font-normal !text-[15px] !leading-[1.6] !text-[#5F6470]"
                  >
                    {stepItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Indicators (minimal dots for mobile carousel navigation) */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-3 pt-0.5">
          {PROCESS_STEPS.map((stepItem, index) => (
            <button
              key={stepItem.step}
              type="button"
              onClick={() => scrollToStep(index)}
              aria-label={`Go to step ${stepItem.step}: ${stepItem.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === index
                  ? "w-6 bg-[#C7A86A]"
                  : "w-1.5 bg-[#C7A86A]/30 hover:bg-[#C7A86A]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrderingProcess;
