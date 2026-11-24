export function VisionMission() {
  return (
    <section className="bg-[#FAF8F5] pt-6 sm:pt-7 lg:pt-8 pb-1 sm:pb-2 lg:pb-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_27fr_31fr] items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column: Main Brand Headline (approx. 42% on desktop) */}
          <div>
            <h2
              className="font-display font-serif text-3xl xs:text-[34px] sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#0F2744] leading-[1.18] tracking-tight font-normal max-w-lg"
              style={{ fontWeight: 400 }}
            >
              Crafting Packaging That Defines Luxury.
            </h2>
          </div>

          {/* Middle Column: Our Vision (approx. 27% on desktop) */}
          <div className="flex flex-col">
            <h3
              className="font-sans font-semibold text-lg sm:text-[20px] lg:text-[21px] xl:text-[22px] text-[#0F2744] tracking-[-0.01em] mb-2 sm:mb-2.5"
              style={{ fontWeight: 600 }}
            >
              Our Vision
            </h3>
            <p
              className="font-sans font-normal text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#666666] leading-[1.75]"
              style={{ fontWeight: 400, color: "#666666" }}
            >
              To become a trusted global partner for luxury brands seeking innovative, sustainable, and unforgettable packaging solutions.
            </p>
          </div>

          {/* Right Column: Our Mission (approx. 31% on desktop) */}
          <div className="flex flex-col">
            <h3
              className="font-sans font-semibold text-lg sm:text-[20px] lg:text-[21px] xl:text-[22px] text-[#0F2744] tracking-[-0.01em] mb-2 sm:mb-2.5"
              style={{ fontWeight: 600 }}
            >
              Our Mission
            </h3>
            <p
              className="font-sans font-normal text-[15.5px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#666666] leading-[1.75]"
              style={{ fontWeight: 400, color: "#666666" }}
            >
              To create packaging that enhances product value, strengthens brand perception, and delivers a memorable unboxing experience for every customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
