"use client";

import Link from "next/link";

interface CategoryItem {
  label: string;
  img: string;
  slug: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    label: "Boxes",
    img: "/caticon/boxb.webp",
    slug: "boxes",
    href: "/boxes/#jewellery-boxes",
  },
  {
    label: "Bags",
    img: "/caticon/bagb.webp",
    slug: "bags",
    href: "/bags",
  },
  {
    label: "Pouches",
    img: "/caticon/pouchp.webp",
    slug: "pouches",
    href: "/pouches",
  },
  {
    label: "Wraps",
    img: "/caticon/wrapp.webp",
    slug: "wraps",
    href: "/wraps",
  },
  {
    label: "Ribbons",
    img: "/caticon/ribbonr.webp",
    slug: "ribbons",
    href: "/ribbons",
  },
  {
    label: "Collections",
    img: "/caticon/clictc.webp",
    slug: "collections",
    href: "/collections",
  },
  {
    label: "Gifting Essentials",
    img: "/caticon/giftg.webp",
    slug: "gifting-essentials",
    href: "/collections/corporate-collection",
  },
];

export function CategoriesShowcase() {
  return (
    <section
      id="categories"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 md:py-16 lg:py-20 transition-colors duration-200"
    >
      {/* Dark Reader extension protection: class="darkreader" tells the extension not to parse or invert these rules */}
      <style
        className="darkreader"
        dangerouslySetInnerHTML={{
          __html: `
            html[data-darkreader-mode] #categories,
            html[data-darkreader-scheme="dark"] #categories,
            html.darkreader #categories {
              background-color: #101820 !important;
              --darkreader-inline-bgcolor: #101820 !important;
            }
            html[data-darkreader-mode] #categories .cat-icon-tile,
            html[data-darkreader-scheme="dark"] #categories .cat-icon-tile,
            html.darkreader #categories .cat-icon-tile {
              background-color: #FAF8F5 !important;
              background-image: linear-gradient(0deg, #FAF8F5, #FAF8F5) !important;
              --darkreader-inline-bgcolor: #FAF8F5 !important;
              border-radius: 24px !important;
            }
            html[data-darkreader-mode] #categories .cat-icon-label,
            html[data-darkreader-scheme="dark"] #categories .cat-icon-label,
            html.darkreader #categories .cat-icon-label {
              color: #FAF8F5 !important;
              --darkreader-inline-color: #FAF8F5 !important;
            }
            html[data-darkreader-mode] #categories img,
            html[data-darkreader-scheme="dark"] #categories img,
            html.darkreader #categories img {
              filter: none !important;
            }
          `,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-2 xs:gap-x-4 sm:gap-6 md:gap-y-10 md:gap-x-6 lg:gap-4 xl:gap-6 items-start">
          {CATEGORIES.map(({ label, img, href }, i) => {
            const isLastOnMobile = i === CATEGORIES.length - 1;
            return (
              <Link
                key={label}
                href={href}
                className={`group flex flex-col items-center gap-3 sm:gap-3.5 cursor-pointer text-center ${
                  isLastOnMobile ? "col-start-2 sm:col-start-auto" : ""
                }`}
              >
                <div
                  data-darkreader-ignore=""
                  className="relative w-[100px] h-[100px] xs:w-[115px] xs:h-[115px] sm:w-[130px] sm:h-[130px] md:w-[135px] md:h-[135px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] flex items-center justify-center transition-all duration-200 cat-icon-tile darkreader-ignore"
                >
                  <img
                    data-darkreader-ignore=""
                    src={img}
                    alt={label}
                    width={150}
                    height={150}
                    loading="eager"
                    className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105 darkreader-ignore"
                  />
                </div>
                <span className="text-[12px] xs:text-[13px] sm:text-[13.5px] md:text-sm font-medium text-[#0F2744] text-center leading-tight transition-colors duration-200 cat-icon-label">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoriesShowcase;

