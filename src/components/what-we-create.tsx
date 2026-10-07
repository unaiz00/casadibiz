"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardItem {
  id: string;
  title: string;
  copy: string;
  img: string;
  link: string;
}

const CARDS: CardItem[] = [
  {
    id: "boxes",
    title: "BOXES",
    copy: "Structured forms. Refined finishes.",
    img: "/assets/rigidd.jpeg",
    link: "/boxes/#jewellery-boxes",
  },
  {
    id: "bags",
    title: "BAGS",
    copy: "Signature silhouettes. Effortless presentation.",
    img: "/assets/kraft2.png",
    link: "/bags",
  },
  {
    id: "pouches",
    title: "POUCHES",
    copy: "Soft textures. Considered details.",
    img: "/assets/allimages.jpeg", // Real pouches photo instead of line art
    link: "/pouches",
  },
  {
    id: "ribbons",
    title: "RIBBONS",
    copy: "The finishing touch that completes the presentation.",
    img: "/assets/giftim.jpeg", // Real ribbons and box finishing photo instead of gold bow render
    link: "/ribbons",
  },
];

export function WhatWeCreate() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // BAGS (idx 1) is active by default on desktop

  // Viewport intersection observer for entrance fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Animate once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Center active card (BAGS - idx 1) on mobile load
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (container && window.innerWidth < 1024) {
      setTimeout(() => {
        const card = container.children[1] as HTMLElement;
        if (card) {
          const containerWidth = container.clientWidth;
          const cardWidth = card.offsetWidth;
          // Center-align position: card offset minus half the leftover container space
          const scrollTarget = card.offsetLeft - (containerWidth - cardWidth) / 2;
          container.scrollTo({
            left: scrollTarget,
            behavior: "instant",
          });
        }
      }, 60);
    }
  }, []);

  // Scroll handler for mobile to scale cards based on proximity to center
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) return;

    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const scrollCenter = scrollLeft + width / 2;
    const cardsElements = container.children;

    if (cardsElements.length > 0) {
      let closestIdx = 0;
      let minDiff = Infinity;

      for (let i = 0; i < cardsElements.length; i++) {
        const card = cardsElements[i] as HTMLElement;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const diff = Math.abs(scrollCenter - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }

      if (closestIdx !== activeIndex && closestIdx < CARDS.length) {
        setActiveIndex(closestIdx);
      }
    }
  };

  // Sync scroll on indicator dot click
  const handleIndicatorClick = (idx: number) => {
    setActiveIndex(idx);
    const container = mobileScrollRef.current;
    if (container) {
      const card = container.children[idx] as HTMLElement;
      if (card) {
        const containerWidth = container.clientWidth;
        const cardWidth = card.offsetWidth;
        const scrollTarget = card.offsetLeft - (containerWidth - cardWidth) / 2;
        container.scrollTo({
          left: scrollTarget,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-24 bg-[#FAF8F5] border-t border-[#C7A86A]/10 overflow-hidden luxury-cards-wrapper ${isVisible ? "section-visible" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12 entrance-heading">
          <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-xs uppercase mb-3 block">
            WHAT WE CREATE
          </span>
          <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] lg:leading-[54px] text-[#0F2744] max-w-3xl mx-auto leading-tight">
            Packaging Designed Around Your Brand.
          </h2>
        </div>

        {/* Stable Focal Cards Container */}
        <div
          className="relative w-full"
          onMouseLeave={() => {
            if (window.innerWidth >= 1024) {
              setActiveIndex(1); // Revert to BAGS active on mouse leave
            }
          }}
        >
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="luxury-cards-container"
          >
            {CARDS.map((card, idx) => {
              const isActive = idx === activeIndex;

              return (
                <Link
                  key={card.id}
                  href={card.link}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      setActiveIndex(idx); // Make hovered card active/large
                    }
                  }}
                  className={`group luxury-card ${isActive ? "is-active" : ""}`}
                >
                  {/* Product Image Frame */}
                  <div className="luxury-image-container">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(max-w-768px) 70vw, 300px"
                      priority={card.id === "boxes" || card.id === "bags"}
                      className="object-cover"
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Subtle Radial Overlay */}
                    <div className="luxury-gold-overlay z-15" />

                    {/* Card Meta Content (Positioned inside at the bottom-left) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-20 text-left card-text-content">
                      <h3 className="font-display font-serif text-xl lg:text-2xl text-white tracking-wide mb-1 transition-colors duration-300 group-hover:text-[#C7A86A]">
                        {card.title}
                      </h3>

                      {/* Short Description: Visible when active */}
                      <p className={`font-sans text-[12px] text-white/85 leading-relaxed font-light mb-2.5 max-w-[240px] transition-all duration-500 overflow-hidden ${isActive ? "opacity-100 max-h-[80px]" : "opacity-0 max-h-0 pointer-events-none"
                        }`}>
                        {card.copy}
                      </p>

                      {/* Understated Explore Link */}
                      <div className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#C7A86A] uppercase transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                        } group-hover:text-white`}>
                        EXPLORE <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Pagination Indicator */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-[#C7A86A]" : "w-1.5 bg-[#0F2744]/25"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
