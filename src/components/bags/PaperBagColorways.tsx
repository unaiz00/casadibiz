"use client";

interface ColorItem {
  name: string;
  hex: string;
}

interface PaperBagColorwaysProps {
  colors: ColorItem[];
}

export default function PaperBagColorways({ colors = [] }: PaperBagColorwaysProps) {
  return (
    <section id="colorways-section" className="w-full bg-[#FAF8F5] py-20 sm:py-28 border-b border-[#C7A86A]/20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <span className="text-[11px] tracking-[0.35em] text-[#C7A86A] font-semibold uppercase mb-4 block">
          04 — AVAILABLE COLOURWAYS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-[#0F2744] font-medium mb-6">
          Luxury Color Palette Selection
        </h2>
        <div className="w-12 h-[1px] bg-[#C7A86A]/50 mx-auto mb-12" />

        <div className={`grid gap-8 max-w-xl mx-auto grid-cols-1 ${colors.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-[#F6F0E8] border border-[#C7A86A]/20 rounded-2xl shadow-sm hover:border-[#C7A86A] transition-all duration-300"
            >
              {/* Swatch circle with texture gradient */}
              <div
                className="h-24 w-24 rounded-full shadow-md border border-[#0F2744]/10 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: color.hex }}
              >
                {/* Visual texture overlay */}
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]" />
              </div>
              <h4 className="font-display text-xl text-[#0F2744] font-semibold mt-5">
                {color.name}
              </h4>
              <span className="text-[10px] text-[#C7A86A] font-semibold uppercase tracking-widest mt-1">
                Production Standard
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
