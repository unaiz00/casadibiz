"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  img: string;
  link: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "boxes",
    title: "Boxes",
    img: "/assets/rigidd.jpeg",
    link: "/boxes/#jewellery-boxes",
  },
  {
    id: "bags",
    title: "Bags",
    img: "/assets/papercollct.jpeg",
    link: "/bags",
  },
  {
    id: "pouches",
    title: "Pouches",
    img: "/assets/sheer_organza_pouch.jpeg",
    link: "/pouches",
  },
  {
    id: "ribbons",
    title: "Ribbons",
    img: "/assets/giftim.jpeg",
    link: "/ribbons",
  },
  {
    id: "wraps",
    title: "Wraps",
    img: "/assets/recycled_brown_kraftpaperwrap.jpeg",
    link: "/wraps",
  },
];

export function WhatWeCreate() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 pb-3 sm:pb-4 lg:pb-6 bg-[#FAF8F5] border-t border-[#C7A86A]/10 overflow-hidden">
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-xs uppercase mb-2.5 sm:mb-3 block">
            WHAT WE CREATE
          </span>
          <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[46px] lg:leading-[52px] text-[#0F2744] max-w-3xl mx-auto leading-tight font-normal">
            Packaging Designed Around Your Brand.
          </h2>
        </div>

        {/* Responsive Category Cards Container
            - Desktop (lg:): 5 cards in a single row
            - Tablet (md:): 3 + 2 cards (row 1: 3 cards, row 2: 2 cards centered)
            - Mobile: 2 cards per row (row 1: 2, row 2: 2, row 3: 1 card centered)
        */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3.5 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 w-full">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group relative block w-[calc(50%-8px)] sm:w-[calc(50%-10px)] md:w-[calc((100%-42px)/3)] lg:w-auto lg:flex-1 lg:min-w-0 aspect-[3/4] rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] xl:rounded-[32px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 bg-[#F6F0E8]"
            >
              {/* Product Photograph (Fills entire card) */}
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(min-width: 1280px) 280px, (min-width: 1024px) 240px, (min-width: 768px) 30vw, 50vw"
                priority={idx < 2}
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Dark Gradient Overlay at the bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none transition-opacity duration-300" />

              {/* Bottom Meta Bar: Category Name & Circular Arrow Button */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 md:p-5 xl:p-6 flex items-end justify-between gap-2 sm:gap-3 z-10">
                <h3 className="font-display font-serif text-lg xs:text-xl sm:text-2xl lg:text-[21px] xl:text-[24px] 2xl:text-[26px] text-white tracking-wide font-normal leading-tight group-hover:text-white transition-colors duration-300">
                  {cat.title}
                </h3>
                <div
                  className="shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#C7A86A] group-hover:border-[#C7A86A] group-hover:text-[#0F2744] group-hover:scale-105 shadow-xs"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeCreate;
