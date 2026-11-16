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
  textColor?: string;
  titleColor?: string;
  descColor?: string;
  tagColor?: string;
  btnBg: string;
  btnText: string;
  href: string;
  border?: string;
}

const DEFAULT_COLLECTIONS: CollectionItem[] = [
  {
    tag: "LUXURY SERIES",
    title: "Signature Boxes",
    desc: "Custom-designed boxes with carefully selected materials, refined finishes and personalised branding to reflect your brand identity",
    buttonText: "EXPLORE RANGE",
    image: "/assets/rigidd.jpeg",
    bgColor: "bg-[#102945]",
    titleColor: "text-white",
    descColor: "text-white/80",
    tagColor: "text-[#C7A86A]",
    btnBg: "bg-[#C7A86A] hover:bg-[#d8be86]",
    btnText: "text-[#102945]",
    href: "/boxes/#jewellery-boxes",
  },
  {
    tag: "BOUTIQUE SERIES",
    title: "Boutique Bags",
    desc: "Premium paper bags with sturdy construction, quality handles and personalised branding for a refined presentation",
    buttonText: "DISCOVER",
    image: "/assets/bags/special2.jpeg",
    bgColor: "bg-[#C7A86A]",
    titleColor: "text-[#102945]",
    descColor: "text-[#102945]/85",
    tagColor: "text-[#102945]/75",
    btnBg: "bg-[#102945] hover:bg-[#1a385c]",
    btnText: "text-white",
    href: "/bags",
  },
  {
    tag: "ELEGANT SERIES",
    title: "Pouches & Wrapping Paper",
    desc: "Customised pouches and wrapping paper, thoughtfully finished to complement your products and enhance the unboxing experience.",
    buttonText: "VIEW ALL",
    image: "/assets/imsecc5.jpeg",
    bgColor: "bg-[#F6F0E8]",
    border: "border border-[#C7A86A]/25",
    titleColor: "text-[#102945]",
    descColor: "text-[#102945]/85",
    tagColor: "text-[#C7A86A]",
    btnBg: "bg-[#102945] hover:bg-[#1a385c]",
    btnText: "text-white",
    href: "/pouches",
  },
  {
    tag: "SIGNATURE SERIES",
    title: "The Curated Collections",
    desc: "Co-ordinated packaging, satin ribbons and greeting cards, brought together to create a consistent and memorable brand experience",
    buttonText: "EXPLORE RANGE",
    image: "/assets/allimages.jpeg",
    bgColor: "bg-[#102945]",
    titleColor: "text-white",
    descColor: "text-white/80",
    tagColor: "text-[#C7A86A]",
    btnBg: "bg-[#C7A86A] hover:bg-[#d8be86]",
    btnText: "text-[#102945]",
    href: "/collections/corporate-collection",
  },
];

interface CollectionsGridProps {
  title?: string;
  limit?: number;
  items?: CollectionItem[];
  className?: string;
}

export default function CollectionsGrid({
  title,
  limit,
  items,
  className = "",
}: CollectionsGridProps) {
  const displayItems = (items || DEFAULT_COLLECTIONS).slice(0, limit);

  return (
    <section
      className={`pt-4 sm:pt-5 md:pt-5 lg:pt-6 pb-8 sm:pb-10 md:pb-10 lg:pb-12 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {title !== null && (
          <div className="mb-6 sm:mb-8 md:mb-10">
            <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-xs uppercase mb-3 block">
              OUR COLLECTIONS
            </span>
            <h2 className="font-display font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-5xl text-[#0F2744] leading-tight font-normal">
              {title || "Packaging Collections"}
            </h2>
          </div>
        )}

        {/* 2-column desktop & tablet grid / 1-column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 xl:gap-8 items-stretch">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={`w-full rounded-[24px] p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-row items-center justify-between gap-3.5 xs:gap-4 sm:gap-5 lg:gap-6 overflow-hidden transition-all duration-300 min-h-[220px] xs:min-h-[235px] sm:min-h-[250px] md:min-h-[265px] lg:min-h-[275px] xl:min-h-[290px] shadow-sm ${item.bgColor} ${item.border || ""}`}
            >
              {/* Left Column: Content */}
              <div className="flex-1 flex flex-col justify-between self-stretch min-w-0">
                <div>
                  <span
                    className={`text-[10px] xs:text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.25em] font-semibold block mb-1 xs:mb-1.5 sm:mb-2 ${
                      item.tagColor || "text-[#C7A86A]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className={`font-display font-serif text-[18px] xs:text-[20px] sm:text-[22px] md:text-[21px] lg:text-[24px] xl:text-[26px] leading-[1.2] tracking-tight mb-2 sm:mb-2.5 font-normal ${
                      item.titleColor || item.textColor || "text-inherit"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-sans font-light text-[11.5px] xs:text-[12px] sm:text-[13px] lg:text-[13.5px] leading-relaxed ${
                      item.descColor || item.textColor || "text-inherit opacity-85"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom-aligned CTA button */}
                <div className="pt-3 xs:pt-3.5 sm:pt-4 md:pt-4 lg:pt-5 mt-auto">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 text-[10px] xs:text-[10.5px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.18em] uppercase transition-colors duration-200 ${item.btnBg} ${item.btnText}`}
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image (35%–38% of card, vertically centered, identical dimensions) */}
              <div className="w-[36%] xs:w-[36%] sm:w-[37%] lg:w-[37%] xl:w-[38%] shrink-0 self-center my-auto">
                <div className="relative w-full aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden bg-black/5 shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 639px) 36vw, (max-width: 1023px) 20vw, 210px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
