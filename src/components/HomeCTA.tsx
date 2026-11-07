import Link from "next/link";
import Image from "next/image";

/**
 * Premium Homepage CTA Section – CASA DI BIZ
 * Compact, balanced two-column split layout with controlled image height (~400px desktop, ~240px mobile)
 */
export function HomeCTA() {
  return (
    <section className="w-full bg-[#0F2744] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-[57%_43%] lg:grid-cols-[56%_44%] items-stretch">
        {/* Left Column: CTA Content (approx 56% width on desktop, vertically centered) */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 xs:py-9 sm:py-10 md:py-8 lg:py-10 text-left">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs tracking-[0.32em] text-[#C7A86A] font-semibold uppercase mb-2.5 sm:mb-3">
              LET'S CREATE SOMETHING DISTINCTIVE
            </p>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-[30px] lg:text-[36px] xl:text-[40px] font-medium text-[#FAF8F5] leading-[1.18] tracking-[-0.01em] mb-3 sm:mb-3.5">
              Have a Packaging Idea?
            </h2>

            {/* Description */}
            <p className="font-sans text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#FAF8F5]/85 font-light leading-relaxed mb-6 sm:mb-7 max-w-lg">
              Tell us what you're looking for. We'll help you explore the right packaging options for your brand.
            </p>

            {/* Button */}
            <div className="pt-0.5">
              <Link
                href="/contact?enquiry=open"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase bg-[#C7A86A] text-[#0F2744] hover:bg-[#FAF8F5] hover:text-[#0F2744] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>GET A CUSTOM QUOTE</span>
                <span
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Controlled Image (~44% width, ~400px desktop, ~240px mobile) */}
        <div className="relative w-full h-[230px] xs:h-[240px] sm:h-[260px] md:h-auto md:min-h-[350px] lg:min-h-[390px] lg:h-[400px] xl:h-[410px] overflow-hidden">
          <Image
            src="/assets/imagesec.jpeg"
            alt="CASA DI BIZ bespoke luxury packaging showcase"
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
            className="object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
