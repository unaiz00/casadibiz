"use client";

import React, { useEffect, useRef, useState } from "react";
import { Eye, PenTool, Layers, PackageCheck } from "lucide-react";

interface ApproachStep {
  stage: string;
  stageName: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const STEPS: ApproachStep[] = [
  {
    stage: "01",
    stageName: "DISCOVER",
    title: "Understand",
    description:
      "We learn about your brand, product dimensions, packaging requirements and the experience you want to create.",
    Icon: Eye,
  },
  {
    stage: "02",
    stageName: "DESIGN",
    title: "Create",
    description:
      "We explore suitable structures, materials, proportions, branding and finishing possibilities.",
    Icon: PenTool,
  },
  {
    stage: "03",
    stageName: "SOURCE & CUSTOMIZE",
    title: "Refine",
    description:
      "We coordinate with our manufacturing partners to develop your selected specifications, samples and custom details.",
    Icon: Layers,
  },
  {
    stage: "04",
    stageName: "SUPPLY",
    title: "Deliver",
    description:
      "We coordinate the supply of your approved packaging solution according to the agreed order requirements.",
    Icon: PackageCheck,
  },
];

export function ApproachRail() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full" ref={ref}>
      {/* Desktop Layout (4 evenly distributed columns with continuous horizontal timeline connecting icon circles) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 xl:gap-8">
        {STEPS.map((step, idx) => (
          <div
            key={step.stage}
            className={`group flex flex-col items-center text-center transition-all duration-[1000ms] ease-out motion-reduce:transition-none ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Stage Label */}
            <span className="font-sans text-[11px] xl:text-xs text-[#C7A86A] tracking-[0.24em] font-semibold uppercase block min-h-[18px]">
              STAGE {step.stage} &mdash; {step.stageName}
            </span>

            {/* Horizontal Timeline Connector with Centered Icon Circle */}
            <div className="relative w-full flex items-center justify-center my-5">
              {/* Left Line Segment */}
              <div
                className={`absolute left-0 right-1/2 h-[1px] bg-[#C7A86A]/30 transition-all duration-1000 ${
                  idx === 0 ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden="true"
              />
              {/* Right Line Segment */}
              <div
                className={`absolute left-1/2 right-0 h-[1px] bg-[#C7A86A]/30 transition-all duration-1000 ${
                  idx === STEPS.length - 1 ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden="true"
              />

              {/* Node Circular Container */}
              <div className="relative z-10 flex items-center justify-center w-[46px] h-[46px] rounded-full border border-[#C7A86A]/40 bg-[#FAF8F5] text-[#0F2744] group-hover:border-[#C7A86A] group-hover:bg-[#F6F0E8] transition-all duration-300 shadow-xs">
                <step.Icon className="w-[19px] h-[19px] stroke-[1.4] text-[#0F2744] group-hover:text-[#C7A86A] transition-colors duration-300" />
              </div>
            </div>

            {/* Action Title */}
            <h3 className="font-serif text-lg xl:text-xl font-medium text-[#0F2744] mb-2 tracking-tight group-hover:text-[#C7A86A] transition-colors duration-300">
              {step.title}
            </h3>

            {/* Description */}
            <p className="font-sans font-light text-[13.5px] xl:text-[14px] leading-relaxed text-[#0F2744]/75 max-w-[280px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Layout (Clean, connected vertical process timeline) */}
      <div className="lg:hidden max-w-xl mx-auto px-2 sm:px-4">
        <div className="relative">
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;
            return (
              <div
                key={step.stage}
                className={`group relative flex gap-4 sm:gap-6 transition-all duration-[1000ms] ease-out motion-reduce:transition-none ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline Column: Icon Node + Vertical Connecting Bar */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Outlined Icon Circle */}
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C7A86A]/40 bg-[#FAF8F5] text-[#0F2744] group-hover:border-[#C7A86A] group-hover:bg-[#F6F0E8] transition-all duration-300 shadow-xs">
                    <step.Icon className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] stroke-[1.4] text-[#0F2744] group-hover:text-[#C7A86A] transition-colors duration-300" />
                  </div>

                  {/* Vertical Line Connector */}
                  {!isLast && (
                    <div
                      className="w-[1px] flex-grow bg-[#C7A86A]/30 my-2 min-h-[50px] sm:min-h-[60px]"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Narrative Content */}
                <div className={`flex-grow ${isLast ? "pb-2" : "pb-8 sm:pb-10"}`}>
                  <span className="font-sans text-[11px] sm:text-xs text-[#C7A86A] tracking-[0.24em] font-semibold uppercase block mb-1">
                    STAGE {step.stage} &mdash; {step.stageName}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#0F2744] mb-2 tracking-tight group-hover:text-[#C7A86A] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="font-sans font-light text-[13.5px] sm:text-[14px] leading-relaxed text-[#0F2744]/75">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ApproachRail;
