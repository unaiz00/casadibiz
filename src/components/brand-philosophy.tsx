"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function BrandPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0F2744] py-20 lg:py-0 lg:h-[720px] lg:flex lg:items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-12 lg:gap-16 items-center">

          {/* Left Content Column */}
          <div
            className={`w-full flex flex-col justify-center transition-all duration-[1000ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {/* Eyebrow / Label Pill */}
            <div className="mb-6 w-fit">
              <span className="inline-block bg-[#F6F0E8] border border-[#C7A86A] text-[#0F2744] text-[11px] font-semibold tracking-[0.18em] uppercase rounded-[4px] px-3.5 py-1.5 leading-none">
                CUSTOM PRINTING & PACKAGING
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.05] font-serif text-[#F6F0E8] tracking-tight mb-6 font-normal">
              Custom packaging <br className="hidden lg:inline" />
              that feels like the <br className="hidden lg:inline" />
              <span className="text-[#C7A86A]">perfect fit.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="max-w-[540px] text-[15px] lg:text-[16px] font-light leading-[1.7] text-[#F6F0E8]/75 mb-8">
              Having a hard time finding the right packaging for your product?
              At CASA DI BIZ, we create bespoke packaging designed around your product, identity and customer experience. From boxes and bags to pouches, ribbons and finishing details, every element can be considered around your brand.
            </p>

            {/* CTA Button */}
            <div className="w-fit">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-[#F6F0E8] text-[#0F2744] hover:bg-[#C7A86A] hover:text-[#0F2744] transition-all duration-300 px-7 py-3 rounded-[5px] text-xs font-semibold tracking-[0.2em] uppercase"
              >
                CONTACT US
                <span className="text-[#C7A86A] group-hover:text-[#0F2744] transition-colors duration-300 ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div
            className={`w-full lg:pl-4 transition-all duration-[1200ms] ease-out transform delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.25] overflow-hidden rounded-[24px_64px_64px_8px] lg:rounded-[32px_120px_120px_12px]"
            >
              <img
                src="/assets/about2.png"
                alt="Bespoke luxury custom packaging experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
