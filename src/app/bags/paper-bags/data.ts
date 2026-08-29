export interface BagCategoryData {
  category: {
    title: string;
    subtitle?: string;
    shortDescription: string;
    longDescription: string;
    heroImages: string[];
    breadcrumbs: { label: string; to?: string }[];
  };
  productImages: string[];
  materials: { name: string; desc?: string; type?: string }[];
  printing: { name: string; desc?: string }[];
  handles: { name: string; desc?: string }[];
  sizes: { label?: string; value: string; desc?: string }[];
  finishes: { name: string; desc?: string }[];
  customisations: { title: string; desc?: string }[];
  applications: { label: string; desc?: string }[];
  faqs: { q: string; a: string }[];
  colors: { name: string; hex: string }[];
  construction?: { name: string; desc?: string }[];
}

export const PAPER_BAG_DATA: Record<string, BagCategoryData> = {
  "special-paper": {
    category: {
      title: "Special Paper Bags",
      subtitle: "PREMIUM SPECIALTY WEAVES",
      shortDescription: "Bespoke retail carriers crafted from colored-through pulp, linen specialty stocks, and metallic paperboard wraps.",
      longDescription: "Our Special Paper bags represent the pinnacle of boutique presentation. Using papers colored directly in the pulp mill, they maintain a solid color across fold-lines and corners, eliminating the raw white paper edges typical of standard bags. Ideal for luxury watchmakers, heritage jewelers, and elite boutiques seeking maximum texture and visual depth.",
      heroImages: ["/assets/special-paper-ref.png", "/assets/cats/bag.jpeg", "/assets/allim.jpeg"],
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Bags", to: "/bags" },
        { label: "Special Paper" }
      ]
    },
    productImages: ["/assets/special-paper-ref.png", "/assets/cats/bag.jpeg", "/assets/allim.jpeg", "/assets/boxim.jpeg"],
    materials: [
      { name: "250 GSM Special Paper", desc: "Premium colored-through wood pulp paperboard with custom density and stiffness.", type: "Structural Core" }
    ],
    printing: [],
    handles: [
      { name: "Light Gold Twisted Microfiber Rope Handle with Metal End Caps", desc: "Ultra-premium soft-touch rope capped with gold metallic ends slotted through reinforced folds." },
      { name: "2 cm Cream Grosgrain Ribbon", desc: "Woven ribbed premium ribbon ties for an elegant box-closure presentation." },
      { name: "1.5 cm Center Ribbon", desc: "Narrower center satin ribbon accentuating the boutique top fold." },
      { name: "Premium Grosgrain Ribbon", desc: "Standard high-density textured ribbon closure." }
    ],
    sizes: [
      { label: "S", value: "18 × 16 × 8 cm", desc: "Designed for small jewel boxes, envelopes, and card packaging." },
      { label: "M", value: "20 × 25 × 12 cm", desc: "Ideal for medium watches, perfumes, and cosmetic bottles." },
      { label: "L", value: "36 × 30 × 11.5 cm", desc: "Large format boutique shopper for fashion accessory suites." }
    ],
    finishes: [
      { name: "Cartier Textured Matte Finish (Unlaminated)", desc: "Luxury uncoated matte surface featuring a subtle linen/pebble texture sheet." }
    ],
    customisations: [
      { title: "Embossed Logo with Flat Gold Foil", desc: "Raised relief stamp combined with luxury gold foil applied flat over the textures." }
    ],
    construction: [
      { name: "Japanese Folded Bottom", desc: "Hand-finished bottom fold reinforcing base support without visible raw margins." }
    ],
    applications: [
      { label: "Fine Jewelry", desc: "Engagement rings, necklaces" },
      { label: "Luxury Watches", desc: "Bespoke watch chronometers" }
    ],
    colors: [
      { name: "Champagne", hex: "#E6D8B8" },
      { name: "Burgundy", hex: "#800020" }
    ],
    faqs: [
      { q: "What makes special paper different from standard paper?", a: "Special paper is dyed in the pulp stage, meaning the color goes all the way through. When folded, it never leaves unsightly white lines along the creases." },
      { q: "What is the minimum order quantity (MOQ)?", a: "MOQ for Specialty Paper bags starts at 500 units per size due to the specialty pulp setup." }
    ]
  },
  "white-card": {
    category: {
      title: "White Card Bags",
      subtitle: "SBS ARTBOARD CARRIERS",
      shortDescription: "High-density white solid bleached artboard carriers providing high graphic resolution and crisp color printing.",
      longDescription: "The White Card bag is the ultimate canvas for high-resolution graphics and dynamic full-surface branding. Utilizing heavy Solid Bleached Sulfate (SBS) paperboard, it provides a rigid structure that holds its crisp vertical lines. Laminated in matte or soft-touch varnishes, it supports foil stamping, spot UV, and inside-liner prints.",
      heroImages: ["/assets/white-card-ref.png", "/assets/flowpackaging.jpg", "/assets/allllllimm.jpeg"],
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Bags", to: "/bags" },
        { label: "White Card" }
      ]
    },
    productImages: ["/assets/white-card-ref.png", "/assets/flowpackaging.jpg", "/assets/allllllimm.jpeg", "/assets/imsecc5.jpeg"],
    materials: [
      { name: "250 GSM White Card", desc: "Heavyweight solid bleached sulfate (SBS) paperboard ensuring exceptional structure rigidity and pure white base.", type: "Structural Core" }
    ],
    printing: [
      { name: "1-Color Printing (1C)", desc: "Precision offset screen ink application for clean logo and textual layouts." }
    ],
    handles: [
      { name: "Twisted Plastic Rope Handle with Plastic End Caps", desc: "Rigid plastic rope handles with secure transparent caps locking under the turn-top." },
      { name: "2 cm Gold Satin Ribbon", desc: "Lustrous double-faced gold satin ribbon closures." },
      { name: "1.5 cm Center Satin Ribbon", desc: "Satin ribbons applied at the top center to seal the bag opening." }
    ],
    sizes: [
      { label: "S", value: "15 × 20 × 9 cm", desc: "Perfect for cosmetics, eyewear, and gift envelopes." },
      { label: "M", value: "20 × 25 × 10 cm", desc: "Versatile layout for apparel accessories and premium perfumes." },
      { label: "L", value: "25.5 × 34 × 11 cm", desc: "Grand retail carrier for footwear, apparel, and corporate gifts." }
    ],
    finishes: [
      { name: "Matte Lamination", desc: "White card is fully printed and laminated with a protective, soft matte surface sealant." }
    ],
    customisations: [
      { title: "Embossed Logo with Gold Foil", desc: "Raised relief debossing coupled with bright gold hot foil stamping." },
      { title: "Gold Foil Text on Both Sides", desc: "Both front and back panels are finished with matching metallic gold text." }
    ],
    applications: [
      { label: "Fashion Apparel", desc: "Apparel & accessories" },
      { label: "Cosmetics & Perfumes", desc: "Skincare sets & beauty gifts" }
    ],
    colors: [
      { name: "Brown", hex: "#6E553F" },
      { name: "Green", hex: "#2E523A" }
    ],
    faqs: [
      { q: "Is the lamination environmentally friendly?", a: "We offer recyclable film laminates and eco-friendly water-based dispersion coatings upon request." },
      { q: "What is the maximum weight these bags can carry?", a: "Thanks to the reinforced turn-top and thick base insert, standard sizes can support up to 4kg safely." }
    ]
  },
  "white-card-texture": {
    category: {
      title: "White Card with Texture Press Bags",
      subtitle: "EMBOSSED TACTILE DESIGNS",
      shortDescription: "Heavy white artboards embossed with felt, linen, or custom textures to provide tactile depth.",
      longDescription: "Designed to engage the senses, our White Card with Texture Press bags apply specialty embossing rolls onto thick card stock after printing. The textured grain (linen, ribbed, canvas, or pebble skin) adds a premium tactile friction and diffuse light reflection that elevates simple graphics into luxury.",
      heroImages: ["/assets/white-card-texture-ref.png", "/assets/imsecc5.jpeg", "/assets/boxim.jpeg"],
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Bags", to: "/bags" },
        { label: "White Card with Texture Press" }
      ]
    },
    productImages: ["/assets/white-card-texture-ref.png", "/assets/imsecc5.jpeg", "/assets/boxim.jpeg", "/assets/allimages.jpeg"],
    materials: [
      { name: "250 GSM White Card", desc: "Pure bleached SBS artboard textured after printing using high-pressure rollers.", type: "Structural Core" }
    ],
    printing: [],
    handles: [
      { name: "Light Gold Twisted Microfiber Rope Handle with Metal End Caps", desc: "Soft microfiber rope slotted with gold metallic ends." },
      { name: "2 cm Light Gold Cotton Ribbon", desc: "Soft-textured natural cotton ribbon closures." },
      { name: "1.5 cm Light Gold Satin Center Ribbon with Printed Logo", desc: "Lustrous gold center ribbon printed with brand logo repeat." }
    ],
    sizes: [
      { label: "S", value: "14 × 20 × 7 cm", desc: "Optimized for boutique jewelry and watch boxes." },
      { label: "M", value: "20 × 25 × 10 cm", desc: "Medium retail layout for cosmetics and premium accessories." },
      { label: "L", value: "36 × 30 × 11.5 cm", desc: "Generous layout for designer apparel and complete product suites." }
    ],
    finishes: [
      { name: "Matte Finish on Both Inside and Outside Surfaces", desc: "Double-sided smooth matte coating for a completely unified interior and exterior view." }
    ],
    customisations: [
      { title: "Square Pattern Embossing", desc: "Geometric textured embossing pressed cleanly across the paper." },
      { title: "Embossed Logo with Gold Foil", desc: "Crisp raised logo layout with gold foil overlay." },
      { title: "CASA DI BIZ Logo Texture Pressed Across the Entire Paper Bag", desc: "A bespoke overall press of the signature CASA DI BIZ monogram texture." }
    ],
    applications: [
      { label: "High Fashion", desc: "Designer boutiques" },
      { label: "Premium Gifting", desc: "Curated gift suites" }
    ],
    colors: [
      { name: "Sage Green", hex: "#9CAF88" },
      { name: "Orange", hex: "#D97724" }
    ],
    faqs: [
      { q: "Can we print complex images on textured card?", a: "Yes. However, we recommend solid colors, line art, or foil stamps, as heavy textures can slightly diffuse photographic print details." }
    ]
  },
  "kraft-bag": {
    category: {
      title: "Kraft Bags",
      subtitle: "SUSTAINABLE LONG-FIBER WRAPS",
      shortDescription: "Durable, unbleached brown or bleached white kraft paper carriers providing high tear resistance.",
      longDescription: "Our Kraft bags offer an authentic organic aesthetic without sacrificing luxury metrics. Constructed from 120 GSM natural long-fiber conifer wood pulp, the paper has natural high tensile strength and tear resistance. Made with intent, they are 100% recyclable, compostable, and FSC-certified.",
      heroImages: ["/assets/kraft-bag-ref.png", "/assets/goodimm.jpeg", "/assets/allim.jpeg"],
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Bags", to: "/bags" },
        { label: "Kraft Bags" }
      ]
    },
    productImages: ["/assets/kraft-bag-ref.png", "/assets/goodimm.jpeg", "/assets/allim.jpeg", "/assets/boxim.jpeg"],
    materials: [
      { name: "120 GSM Natural Kraft Paper", desc: "Long-fiber conifer wood pulp providing natural high tensile strength, stiffness, and raw tear resistance.", type: "Organic Wrap" }
    ],
    printing: [
      { name: "1-Color Printing (Black)", desc: "High-contrast single-color branding using eco-friendly water-based soy inks that dry flat on absorbent kraft fibers." }
    ],
    handles: [
      { name: "Paper Rope Tie End", desc: "Natural, twisted paper rope handles attached securely inside the top fold with a reinforced patch." }
    ],
    sizes: [
      { value: "15 × 19 × 8 cm", desc: "Perfect for cosmetics and small retail items." },
      { value: "36 × 20 × 8 cm", desc: "Most popular retail size for boxes and gifts." },
      { value: "36 × 47 × 16 cm", desc: "Wide gusset shopper for gourmet goods and bulky clothing." }
    ],
    finishes: [
      { name: "Uncoated Natural Kraft Finish", desc: "An organic, tactile matte surface that preserves the authentic grain and raw hand-feel of conifer pulp." }
    ],
    customisations: [
      { title: "Reinforced Bottom Patch", desc: "Applying thick kraft card inserts to double the load bearing capacity." }
    ],
    applications: [
      { label: "Eco Cosmetics", desc: "Organic beauty brands" },
      { label: "Boutique Retail", desc: "Handcrafted goods & fashion" }
    ],
    colors: [
      { name: "Brown", hex: "#8A6D55" },
      { name: "White", hex: "#FAF8F5" }
    ],
    faqs: [
      { q: "Are these bags fully compostable?", a: "Yes. Bags with natural twisted paper handles using starch glues are 100% compostable and recyclable." },
      { q: "What is the paper weight?", a: "We use thick, high-grade kraft paper certified at 120 GSM." }
    ]
  }
};
