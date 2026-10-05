import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { SiteHeader, SiteFooter, Breadcrumbs } from "@/components/site-chrome";
import type { WrapProduct } from "@/data/wraps-data";
import WrapImageViewer from "./WrapImageViewer";
import WrapApplications from "./WrapApplications";
import WrapSpecifications from "./WrapSpecifications";
import WrapCustomisation from "./WrapCustomisation";
import WrapFAQ from "./WrapFAQ";
import WrapRelatedProducts from "./WrapRelatedProducts";

interface WrapPDPViewProps {
  product: WrapProduct;
  relatedProducts: WrapProduct[];
}

export default function WrapPDPView({ product, relatedProducts }: WrapPDPViewProps) {
  const whatsappMsg = `Hello CASA DI BIZ, I would like to enquire about ${product.name} for my packaging requirements.`;
  const whatsappUrl = `https://wa.me/919995255846?text=${encodeURIComponent(whatsappMsg)}`;
  const quoteUrl = `/contact?category=wraps&product=${encodeURIComponent(product.name)}`;

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Wraps", to: "/wraps" },
    { label: product.name },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-[#0F2744] selection:bg-[#C7A86A]/20 selection:text-[#0F2744]">
      {/* 1. SITE HEADER */}
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* 2. BREADCRUMBS */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 3. HERO SECTION: EDITORIAL SHOWCASE & CONVERSION */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: Single Dedicated Large Inspectable Product Image (Approx 55-60%) */}
            <div className="lg:col-span-7">
              <WrapImageViewer
                src={product.image.src}
                alt={product.image.alt}
                productName={product.name}
              />
            </div>

            {/* RIGHT: Product Information & B2B Actions (Approx 45%) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="mb-2">
                <span className="text-[#C7A86A] tracking-[0.3em] font-semibold text-[11px] uppercase">
                  WRAPPING PAPER
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2744] leading-[1.1] mb-2.5 font-medium">
                {product.name}
              </h1>

              {/* Positioning / Tagline */}
              <p className="text-xs sm:text-sm tracking-[0.15em] font-semibold text-[#C7A86A] uppercase mb-4">
                {product.positioning}
              </p>

              {/* Short Description */}
              <p className="text-[#0F2744]/85 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {product.shortDescription}
              </p>

              {/* Key Specifications Panel */}
              <div className="w-full bg-[#F6F0E8] border border-[#C7A86A]/25 rounded-2xl p-5 mb-8 text-xs space-y-3">
                <div className="flex justify-between items-center pb-2.5 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-wider text-[10px]">
                    MATERIAL / TYPE
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right">
                    {product.materialType}
                  </span>
                </div>

                {product.gsm && (
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#C7A86A]/15">
                    <span className="text-[#0F2744]/65 font-bold uppercase tracking-wider text-[10px]">
                      WEIGHT
                    </span>
                    <span className="font-semibold text-[#0F2744] text-right">
                      {product.gsm}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center pb-2.5 border-b border-[#C7A86A]/15">
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-wider text-[10px]">
                    FINISH
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right">
                    {product.finish}
                  </span>
                </div>

                <div className="flex justify-between items-start pt-0.5">
                  <span className="text-[#0F2744]/65 font-bold uppercase tracking-wider text-[10px] shrink-0 mt-0.5">
                    BEST FOR
                  </span>
                  <span className="font-semibold text-[#0F2744] text-right ml-4">
                    {product.bestFor.join(" · ")}
                  </span>
                </div>
              </div>

              {/* Primary B2B Action Buttons */}
              <div className="w-full grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <Link
                  href={quoteUrl}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0F2744] text-[#FAF8F5] text-[10px] sm:text-xs font-semibold tracking-[0.06em] sm:tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#16233c] shadow-xs min-h-[46px] sm:min-h-[48px] text-center whitespace-nowrap"
                >
                  <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C7A86A] shrink-0" />
                  <span>REQUEST A QUOTE</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366] text-white text-[10px] sm:text-xs font-semibold tracking-[0.05em] sm:tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#20ba5a] shadow-xs min-h-[46px] sm:min-h-[48px] text-center whitespace-nowrap"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE MATERIAL (MATERIAL STORY) */}
        <section className="w-full bg-white border-t border-[#C7A86A]/20 py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <p className="text-[11px] tracking-[0.3em] font-semibold text-[#C7A86A] uppercase mb-2.5">
                THE MATERIAL
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0F2744] font-medium leading-tight">
                {product.materialStory.heading}
              </h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-[#0F2744]/80 leading-relaxed font-sans">
              {product.materialStory.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 5. APPLICATIONS */}
        <WrapApplications product={product} />

        {/* 6. TECHNICAL SPECIFICATIONS */}
        <WrapSpecifications product={product} />

        {/* 7. CUSTOMISATION */}
        <WrapCustomisation product={product} />

        {/* 8. FAQ */}
        <WrapFAQ product={product} />

        {/* 9. RELATED PRODUCTS */}
        <WrapRelatedProducts relatedProducts={relatedProducts} />
      </main>

      {/* 10. SITE FOOTER */}
      <SiteFooter />
    </div>
  );
}
