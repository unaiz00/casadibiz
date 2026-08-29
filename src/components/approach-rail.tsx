"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, PenTool, Diamond, Package } from "lucide-react";

const STEPS = [
  { 
    num: "01", 
    title: "DISCOVER", 
    text: "Understanding your brand identity, product dimensions, and the unboxing experience you want to create.",
    Icon: Eye
  },
  { 
    num: "02", 
    title: "DESIGN", 
    text: "Shaping structure, materials, proportions, and custom details around your product and identity.",
    Icon: PenTool
  },
  { 
    num: "03", 
    title: "REFINE", 
    text: "Perfecting finishes, paper weights, samples, and every tactile detail before production begins.",
    Icon: Diamond
  },
  { 
    num: "04", 
    title: "DELIVER", 
    text: "Bringing the approved design to life with precision manufacturing and carefully managed delivery.",
    Icon: Package
  }
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
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full mt-8" ref={ref}>
      {/* Desktop Layout (4 columns, centered) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-8">
        {STEPS.map((step, idx) => (
          <div 
            key={idx}
            className={`flex flex-col items-center text-center transition-all duration-[1200ms] ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Step Title */}
            <span className="font-sans text-xs text-[#C7A86A] tracking-[0.25em] font-semibold uppercase">
              {step.num} — {step.title}
            </span>

            {/* Horizontal process line and marker */}
            <div className="relative w-full h-[30px] flex items-center justify-center my-4">
              <div className={`absolute left-0 right-1/2 h-[1px] transition-all duration-1000 ${
                inView ? "bg-[#C7A86A]/20" : "bg-transparent"
              } ${idx === 0 ? 'opacity-0' : 'opacity-100'}`} />
              <div className={`absolute left-1/2 right-0 h-[1px] transition-all duration-1000 ${
                inView ? "bg-[#C7A86A]/20" : "bg-transparent"
              } ${idx === STEPS.length - 1 ? 'opacity-0' : 'opacity-100'}`} />
              <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#C7A86A] border-4 border-[#FAF8F5]" />
            </div>

            {/* Icon */}
            <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-[#C7A86A]/30 text-[#0F2744] mb-6">
              <step.Icon className="w-[16px] h-[16px] stroke-[1.25]" />
            </div>

            {/* Description */}
            <p className="font-sans font-light text-[14.5px] lg:text-[15px] leading-[1.7] text-[#0F2744]/75 px-2">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Layout (Stacked timeline, vertical line) */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
        {STEPS.map((step, idx) => (
          <div 
            key={idx}
            className={`flex gap-6 transition-all duration-[1200ms] ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Timeline vertical bar */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C7A86A] mt-1.5" />
              {idx < STEPS.length - 1 && (
                <div className="w-[1px] flex-grow bg-[#C7A86A]/20 my-2 min-h-[120px] md:min-h-[100px]" />
              )}
            </div>

            {/* Content Area */}
            <div className="flex-grow pb-12">
              <span className="font-sans text-xs text-[#C7A86A] tracking-[0.25em] font-semibold uppercase block mb-2">
                {step.num} — {step.title}
              </span>
              <div className="h-[1px] bg-[#C7A86A]/20 w-16 mb-4" />
              
              {/* Icon */}
              <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-[#C7A86A]/30 text-[#0F2744] mb-4">
                <step.Icon className="w-[16px] h-[16px] stroke-[1.25]" />
              </div>

              {/* Description */}
              <p className="font-sans font-light text-[14.5px] sm:text-[15px] leading-[1.7] text-[#0F2744]/75">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
