"use client";

import React, { useState } from "react";
import { Typewriter } from "./ui/typewriter";

export function AboutHeroTypewriter() {
  const [phase, setPhase] = useState<"eyebrow" | "heading" | "support" | "done">("eyebrow");

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
      {/* Eyebrow */}
      <span className="text-[#C7A86A] text-xs uppercase tracking-[0.35em] font-semibold mb-6 block">
        <Typewriter
          segments={[{ text: "ABOUT CASA DI BIZ" }]}
          speed={45}
          delay={300}
          start={true}
          showCursor={true}
          cursorColor="#C7A86A"
          onComplete={() => setPhase("heading")}
        />
      </span>
      
      {/* Main Headline */}
      <h1 className="text-[40px] sm:text-5xl lg:text-[72px] lg:leading-[1.1] font-serif text-[#0F2744] tracking-tight mb-8 max-w-4xl mx-auto font-normal">
        <Typewriter
          segments={[
            { text: "Packaging Designed Around Your " },
            { text: "Brand.", className: "italic text-[#C7A86A] font-serif font-normal" }
          ]}
          speed={35}
          delay={150}
          start={phase !== "eyebrow"}
          showCursor={true}
          cursorColor="#C7A86A"
          onComplete={() => setPhase("support")}
        />
      </h1>
      
      {/* Supporting Copy */}
      <p className="font-light text-[#0F2744]/75 text-[15px] sm:text-lg leading-relaxed max-w-[720px] mb-12 lg:mb-16">
        <Typewriter
          segments={[
            { text: "Every detail is considered around your product, identity and the experience you want your customer to remember." }
          ]}
          speed={20}
          delay={150}
          start={phase === "support" || phase === "done"}
          showCursor={true}
          cursorColor="#0F2744"
          onComplete={() => setPhase("done")}
        />
      </p>
    </div>
  );
}
