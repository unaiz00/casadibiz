"use client";

import Link from "next/link";

/* ---------------- Categories (Legacy GIF Implementation) ---------------- */
export function CategoriesLegacy() {
  const items = [
    { label: "Boxes", img: "/animatedicon/animboxicon.gif", slug: "boxes" },
    { label: "Bags", img: "/animatedicon/paperbagicon.gif", slug: "bags" },
    { label: "Pouches", img: "/animatedicon/pouchseticon.gif", slug: "pouches" },
    { label: "Wraps", img: "/animatedicon/wrapseticon.gif", slug: "wraps" },
    { label: "Ribbons", img: "/animatedicon/riibonseticon.gif", slug: "ribbons" },
    { label: "Collections", img: "/animatedicon/collectionicon.gif", slug: "collections" },
    { label: "Gifting Essentials", img: "/animatedicon/giftbox.gif", slug: "gifting-essentials" },
  ];
  return (
    <section id="categories" className="w-full bg-[#F6EFE4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-[72px]">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-y-8 md:gap-x-6 lg:gap-3.5 xl:gap-6">
          {items.map(({ label, img, slug }, i) => {
            const isVideo = img.endsWith(".mp4");
            const isLastOnMobile = i === items.length - 1;
            const inner = (
              <>
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  {isVideo ? (
                    <video
                      src={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="relative h-full w-full object-contain mix-blend-multiply"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  ) : (
                    <img
                      src={img}
                      alt={label}
                      width={96}
                      height={96}
                      loading="eager"
                      className="relative h-full w-full object-contain"
                    />
                  )}
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm text-navy text-center leading-tight min-h-[28px] sm:min-h-[34px] flex items-center justify-center">{label}</span>
                <span className="h-[2px] w-6 bg-gold/60 rounded-full" />
              </>
            );
            const cls = `group flex flex-col items-center gap-2 sm:gap-3 ${isLastOnMobile ? "col-start-2 sm:col-start-auto" : ""}`;
            if (slug === "boxes") return <Link key={label} href="/boxes/#jewellery-boxes" className={cls}>{inner}</Link>;
            if (slug === "bags") return <Link key={label} href="/bags" className={cls}>{inner}</Link>;
            if (slug === "pouches") return <Link key={label} href="/pouches" className={cls}>{inner}</Link>;
            if (slug === "wraps") return <Link key={label} href="/wraps" className={cls}>{inner}</Link>;
            if (slug === "ribbons") return <Link key={label} href="/ribbons" className={cls}>{inner}</Link>;
            if (slug === "collections") return <Link key={label} href="/collections" className={cls}>{inner}</Link>;
            if (slug === "gifting-essentials") return <Link key={label} href="/collections/corporate-collection" className={cls}>{inner}</Link>;
            return <Link key={label} href={`/category/${slug}`} className={cls}>{inner}</Link>;

          })}

        </div>
      </div>
    </section>
  );
}

export default CategoriesLegacy;

