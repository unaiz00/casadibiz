import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ---------------- How it works ---------------- */
export function HowItWorks() {
    const steps = [
        { n: "01", title: "Pick your packaging", desc: "Choose from boxes, bags, pouches, ribbons and wraps in sizes that fit your product." },
        { n: "02", title: "Add your finish", desc: "Select materials, foil stamping, embossing, and colours to match your brand." },
        { n: "03", title: "We make and ship", desc: "Our team produces your order and delivers it to your door, ready for the shelf." },
    ];
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-14 md:py-16 lg:py-20">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <p className="text-[11px] tracking-[0.32em] text-gold font-medium mb-2.5 sm:mb-3">HOW IT WORKS</p>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">Order in three steps</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-10">
                    {steps.map((s) => (
                        <div key={s.n} className="relative">
                            <span className="font-display text-4xl sm:text-5xl md:text-[46px] lg:text-5xl text-gold/30">{s.n}</span>
                            <h4 className="font-display text-lg sm:text-xl text-navy mt-2 mb-2">{s.title}</h4>
                            <p className="text-sm text-muted-luxe leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <Link href="/contact" className="inline-flex items-center gap-3 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs tracking-[0.28em] font-medium bg-navy text-gold hover:bg-gold hover:text-navy active:scale-95 transition-all duration-200">
                        START YOUR ORDER <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
