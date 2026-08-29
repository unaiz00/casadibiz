"use client";

import { useEffect, useRef, useState } from "react";

interface ChapterProps {
  num: string;
  title: string;
  subtitle: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

function ChapterRow({
  num,
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt,
  reversed = false,
}: ChapterProps) {
  const rowRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 ${reversed
          ? "lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16"
          : "lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16"
        } gap-6 lg:gap-12 items-center`}
    >
      {/* Image container */}
      <div
        className={`w-full aspect-[4/3] relative overflow-hidden rounded-md bg-[#FAF8F5]/5 transition-all duration-[1400ms] ease-out transform ${reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"
          } ${isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-[1.03]"
          }`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text container */}
      <div
        className={`flex flex-col justify-center ${reversed
            ? "order-2 lg:order-1 lg:pr-12 xl:pr-20"
            : "order-2 lg:order-2 lg:pl-12 xl:pl-20"
          }`}
      >
        {/* Chapter label/number */}
        <span
          className={`text-[#C7A86A] text-[12px] lg:text-[14px] uppercase tracking-[0.2em] font-medium mb-3 lg:mb-4 block transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {num} — {title}
        </span>

        {/* Title */}
        <h3
          className={`text-2xl sm:text-3xl lg:text-[38px] font-serif text-[#0F2744] mb-4 lg:mb-6 leading-tight transition-all duration-1000 delay-100 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {subtitle}
        </h3>

        {/* Description */}
        <p
          className={`font-normal text-[#0F2744]/70 text-sm sm:text-base leading-[1.7] md:leading-[1.75] tracking-wide max-w-md transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function WhyCasaDiBiz() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-16 pb-6 lg:pt-32 lg:pb-10 bg-[#F6F0E8] border-t border-[#C7A86A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-1000 ease-out transform mb-12 lg:mb-16 ${headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-[#C7A86A] text-xs uppercase tracking-[0.35em] font-semibold mb-5 block">
            WHY CASA DI BIZ
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-serif text-[#0F2744] leading-tight tracking-tight">
              Packaging Made Around Your{" "}
              <span className="italic font-serif text-[#C7A86A] font-normal">
                Brand.
              </span>
            </h2>
            <p className="lg:col-span-5 font-light text-[#0F2744]/75 text-base md:text-lg leading-relaxed max-w-md lg:mb-2">
              Every detail is considered around your product, identity and the
              experience you want your customer to remember.
            </p>
          </div>
        </div>

        {/* Chapters Editorial Layout */}
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          {/* Chapter 01 */}
          <ChapterRow
            num="01"
            title="PRECISION"
            subtitle="Structural Engineering"
            text="Every proportion, finish, and structural detail is considered with absolute precision — creating packaging that feels as refined as what it holds."
            imageSrc="/assets/boxim.jpeg"
            imageAlt="Rigid box craftsmanship"
            reversed={false}
          />

          {/* Chapter 02 */}
          <ChapterRow
            num="02"
            title="MATERIALITY"
            subtitle="Tactile Luxury"
            text="Rich papers, velvet textiles, and fine ribbons are selected to elevate the sensory experience — because luxury should be felt before the box is opened."
            imageSrc="/assets/allim.jpeg"
            imageAlt="Velvet and paper textures"
            reversed={true}
          />

          {/* Chapter 03 */}
          <ChapterRow
            num="03"
            title="BESPOKE"
            subtitle="Tailored Presentation"
            text="Custom-tailored packaging suites are designed around your product, your identity, and the moment it is presented."
            imageSrc="/assets/imsec.jpeg"
            imageAlt="Ribbons and finished luxury suite"
            reversed={false}
          />
        </div>

        {/* Subtle transition line to next section */}
        <div className="h-[1px] w-24 bg-[#C7A86A]/20 mx-auto mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
