/* home page above footer */


import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface CollectionItem {
  tag: string;
  title: string;
  desc: string;
  buttonText: string;
  image: string;
  bgColor: string;
  textColor: string;
  btnBg: string;
  btnText: string;
  href: string;
}

const DEFAULT_COLLECTIONS: CollectionItem[] = [
  {
    tag: "LUXURY SERIES",
    title: "Custom Rigid Boxes",
    desc: "Indestructible structure wrapped in fine art papers, complete with magnetic closure.",
    buttonText: "EXPLORE RANGE",
    image: "/assets/rigidd.jpeg",
    bgColor: "bg-[#0F2744]",
    textColor: "text-[#F6F0E8]",
    btnBg: "bg-[#C7A86A] hover:bg-[#b09156]",
    btnText: "text-[#0F2744]",
    href: "/boxes",
  },
  {
    tag: "BOUTIQUE SERIES",
    title: "Boutique Paper Bags",
    desc: "Heavyweight paper bags with custom cotton ribbon handles and foil-stamped branding.",
    buttonText: "DISCOVER",
    image: "/assets/allimages.jpeg",
    bgColor: "bg-[#C7A86A]",
    textColor: "text-[#0F2744]",
    btnBg: "bg-[#0F2744] hover:bg-[#1a385c]",
    btnText: "text-[#F6F0E8]",
    href: "/bags",
  },
  {
    tag: "ELEGANT SERIES",
    title: "Pouches & Wraps",
    desc: "Ultra-soft velvet pouches and silk wrapping paper to protect your finest treasures.",
    buttonText: "VIEW ALL",
    image: "/assets/giftim.jpeg",
    bgColor: "bg-[#F6F0E8] border border-[#C7A86A]/20",
    textColor: "text-[#0F2744]",
    btnBg: "bg-[#0F2744] hover:bg-[#1a385c]",
    btnText: "text-[#F6F0E8]",
    href: "/pouches",
  },
  {
    tag: "SIGNATURE SERIES",
    title: "Gifting Essentials",
    desc: "Custom printed satin ribbons and greeting cards to complete the unwrapping experience.",
    buttonText: "EXPLORE RANGE",
    image: "/assets/allllllimm.jpeg",
    bgColor: "bg-[#0F2744]",
    textColor: "text-[#F6F0E8]",
    btnBg: "bg-[#C7A86A] hover:bg-[#b09156]",
    btnText: "text-[#0F2744]",
    href: "/gifting",
  },
];

interface CollectionsGridProps {
  title?: string;
  limit?: number;
  items?: CollectionItem[];
}

export default function CollectionsGrid({ title, limit, items }: CollectionsGridProps) {
  const displayItems = (items || DEFAULT_COLLECTIONS).slice(0, limit);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {title !== null && (
          <div className="mb-12">
            <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-xs uppercase mb-3 block">
              OUR COLLECTIONS
            </span>
            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F2744] leading-tight">
              {title || "Packaging Collections"}
            </h2>
          </div>
        )}

        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-6 scrollbar-none gap-4 pb-4 -mx-4 pl-4 pr-4 sm:-mx-6 sm:pl-6 sm:pr-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={`w-[85vw] max-w-[340px] flex-shrink-0 snap-start md:w-auto md:max-w-none md:flex-shrink rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-stretch gap-5 sm:gap-6 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 ${item.bgColor} ${item.textColor}`}
            >
              {/* Left Column: Content */}
              <div className="flex flex-col justify-between flex-1 space-y-4 sm:space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] opacity-80 font-semibold block mb-1.5 sm:mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-serif text-xl sm:text-2xl md:text-3xl leading-tight mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-1 sm:pt-0">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${item.btnBg} ${item.btnText}`}
                  >
                    {item.buttonText} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative w-full sm:w-44 h-40 sm:h-auto min-h-[140px] sm:min-h-0 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center self-center sm:self-stretch shrink-0">
                {/* IMAGE TODO: Check path */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
