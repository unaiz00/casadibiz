export interface BoxSize {
  label: string;
  dimensions: string;
  description: string;
  suitableFor?: string;
}

export interface BoxMaterialOption {
  id: string;
  name: string;
  description: string;
  swatchImage?: string;
}

export interface BoxColourOption {
  id: string;
  name: string;
  hex: string;
  previewImage?: string;
}

export interface BoxFinishOption {
  id: string;
  name: string;
  description: string;
}

export interface BoxImage {
  src: string;
  alt: string;
  label?: string;
}

export interface BoxModel {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  modelCode: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  heroHeadline: string;
  images: BoxImage[];
  sizes: BoxSize[];
  materials: BoxMaterialOption[];
  colours: BoxColourOption[];
  finishes: BoxFinishOption[];
  specifications: {
    outerMaterial: string;
    innerMaterial: string;
    hingeClosure: string;
    insertType: string;
    brandingPlacement: string;
    outerPackaging: string;
    moq: string;
    leadTime: string;
    sampleAvailability: string;
  };
  highlights: { label: string; value: string }[];
  customisationFeatures: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export interface BoxCategory {
  slug: string;
  name: string;
  headline: string;
  shortDescription: string;
  heroImage: string;
  modelSlugs: string[];
}

// Global material swatches from public/assets
export const STANDARD_BOX_MATERIALS: BoxMaterialOption[] = [
  {
    id: "velvet",
    name: "Velvet",
    description: "Plush silk-blend velvet with a rich deep pile and tactile softness.",
    swatchImage: "/assets/materials/velvet.png",
  },
  {
    id: "suede",
    name: "Suede",
    description: "Soft micro-suede delivering refined matte elegance and anti-scratch protection.",
    swatchImage: "/assets/materials/seude.png",
  },
  {
    id: "microfiber",
    name: "Microfiber",
    description: "Ultra-fine weave textile offering modern luxury with superior durability.",
    swatchImage: "/assets/materials/microfiber.png",
  },
  {
    id: "leather",
    name: "Leatherette",
    description: "Smooth grain vegan leather with subtle sheen and structured durability.",
    swatchImage: "/assets/materials/leather.png",
  },
  {
    id: "special-paper",
    name: "Special Paper",
    description: "Pulp-dyed luxury fine paperboard with tactile woven textures.",
    swatchImage: "/assets/materials/specialpaper.png",
  },
  {
    id: "textured-paper",
    name: "Textured Paper",
    description: "Embossed geometric and linen grain paper stock for contemporary minimalism.",
    swatchImage: "/assets/materials/texturedpaper.png",
  },
];

// Global colour options
export const STANDARD_BOX_COLOURS: BoxColourOption[] = [
  { id: "champagne", name: "Champagne", hex: "#E6D8B8" },
  { id: "navy-blue", name: "Navy Blue", hex: "#0F2744" },
  { id: "forest-green", name: "Forest Green", hex: "#1C3A27" },
  { id: "burgundy", name: "Burgundy", hex: "#581825" },
  { id: "blush-pink", name: "Blush Pink", hex: "#E8D5CE" },
  { id: "taupe-grey", name: "Taupe Grey", hex: "#9C9288" },
  { id: "noir-black", name: "Noir Black", hex: "#1A1A1A" },
];

// Global finishing options
export const STANDARD_BOX_FINISHES: BoxFinishOption[] = [
  {
    id: "gold-foiling",
    name: "Gold Foiling",
    description: "Hot-stamped metallic gold foil providing sharp contrast on dark and neutral surfaces.",
  },
  {
    id: "silver-foiling",
    name: "Silver Foiling",
    description: "Precision silver hot foil stamping for a clean, cool metallic signature.",
  },
  {
    id: "blind-embossed",
    name: "Blind Embossed",
    description: "Deep dimensional debossing without ink or foil, highlighting natural texture.",
  },
  {
    id: "gold-metallic-sticker",
    name: "Gold Metallic Sticker",
    description: "Electroformed gold micro-metal relief plate adhered flush to the lid surface.",
  },
  {
    id: "silver-metallic-sticker",
    name: "Silver Metallic Sticker",
    description: "Electroplated 3D nickel-silver crest badge with razor-sharp micro-detailing.",
  },
];

export const BOX_CATEGORIES_DATA: Record<string, BoxCategory> = {
  "ring-boxes": {
    slug: "ring-boxes",
    name: "Ring Boxes",
    headline: "Bespoke presentation cases engineered to showcase solitaire, eternity and statement rings.",
    shortDescription: "From classic geometric squares to octagonal and contour silhouettes, our ring boxes combine spring-action closures with precision plush inserts.",
    heroImage: "/assets/boxim.jpeg",
    modelSlugs: [
      "rb-01-classic-square",
      "rb-02-rounded-square",
      "rb-03-octagon",
      "rb-04-circle",
      "rb-05-heart",
      "rb-06-pillow",
    ],
  },
  "earring-boxes": {
    slug: "earring-boxes",
    name: "Earring Boxes",
    headline: "Custom-fitted presentation boxes for studs, drops, hoops, and high-jewellery chandeliers.",
    shortDescription: "Tailored insert geometries with secure tabs, dual-cut velvet slots, and magnetic or hinged closures designed for fine earring collections.",
    heroImage: "/assets/imsec2.jpeg",
    modelSlugs: [
      "eb-01-classic-drop",
      "eb-02-stud-earring",
      "eb-03-slim-presentation",
      "eb-04-octagon-earring",
    ],
  },
  "chain-boxes": {
    slug: "chain-boxes",
    name: "Chain Boxes",
    headline: "Elongated presentation cases crafted for delicate chains, heavy links, and collar necklaces.",
    shortDescription: "Designed with interior clip fasteners and ribbon ties to keep delicate chains untangled and beautifully tensioned on display.",
    heroImage: "/assets/goodimm.jpeg",
    modelSlugs: [
      "cb-01-long-chain",
      "cb-02-slim-pendant-chain",
      "cb-03-wide-collar-chain",
    ],
  },
  "pendant-boxes": {
    slug: "pendant-boxes",
    name: "Pendant Boxes",
    headline: "Focused luxury cradles showcasing solitaire gemstones, medallions, and intricate pendants.",
    shortDescription: "Balanced proportions featuring recessed centre pads and top-anchored chain holders for effortless retail presentation.",
    heroImage: "/assets/allim.jpeg",
    modelSlugs: [
      "pb-01-square-pendant",
      "pb-02-oval-pendant",
      "pb-03-medallion-box",
    ],
  },
  "bracelet-boxes": {
    slug: "bracelet-boxes",
    name: "Bracelet Boxes",
    headline: "Refined linear and wide presentation cases for tennis bracelets, link chains, and cuffs.",
    shortDescription: "Plush padded channels and corner retaining hooks engineered to keep precious bracelets perfectly aligned upon opening.",
    heroImage: "/assets/imsec1.jpeg",
    modelSlugs: [
      "bb-01-slimline-bracelet",
      "bb-02-wide-cuff-bracelet",
      "bb-03-tennis-bracelet",
    ],
  },
  "necklace-boxes": {
    slug: "necklace-boxes",
    name: "Necklace Boxes",
    headline: "Grand-format luxury presentation cases for statement necklaces, chokers, and bridal suites.",
    shortDescription: "Sculpted bust-pads and contour-cut bases that cradle intricate collier designs with generous clearance and grand reveal.",
    heroImage: "/assets/allllllimm.jpeg",
    modelSlugs: [
      "nb-01-grand-collar",
      "nb-02-choker-necklace",
      "nb-03-princess-necklace",
    ],
  },
  "bangle-boxes": {
    slug: "bangle-boxes",
    name: "Bangle Boxes",
    headline: "Structured square and tall boxes with central pillar cushions for rigid bangles and kada sets.",
    shortDescription: "Central bolster supports and wrapped pillar forms allowing single or multi-stacked bangles to sit upright and proud.",
    heroImage: "/assets/rigidd.jpeg",
    modelSlugs: [
      "bn-01-single-bangle",
      "bn-02-double-bangle",
      "bn-03-stacking-bangle",
    ],
  },
  "full-set-boxes": {
    slug: "full-set-boxes",
    name: "Full Set Boxes",
    headline: "Comprehensive master suite cases housing coordinated bridal, coronation, and high-jewellery suites.",
    shortDescription: "Multi-compartment bespoke layouts uniting ring, earring, bracelet, and necklace in a cohesive heirloom showcase.",
    heroImage: "/assets/allimages.jpeg",
    modelSlugs: [
      "fs-01-master-suite",
      "fs-02-bridal-deluxe-suite",
      "fs-03-heritage-keepsake-coffer",
    ],
  },
};

export const BOX_MODELS_DATA: Record<string, BoxModel> = {
  // ----------------------------------------------------
  // RING BOXES
  // ----------------------------------------------------
  "rb-01-classic-square": {
    id: "rb-01",
    slug: "rb-01-classic-square",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-01",
    name: "Classic Square",
    subtitle: "BESPOKE SOLITAIRE & ETERNITY BOX",
    heroHeadline: "The timeless silhouette of refined jewellery presentation.",
    shortDescription: "A balanced square profile engineered with a crisp spring-action hinge and a precision velvet-lined ring channel.",
    longDescription: "The RB-01 Classic Square is the definitive benchmark in fine ring presentation. Constructed around a heavyweight 1200 GSM rigid core, it features precision-cut 90-degree outer bevels wrapped seamlessly by hand. Inside, a high-density foam cushion with a deep velvet ring slit secures solitaires, dual bands, or cocktail rings firmly in place without marking the metal.",
    images: [
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-01 Classic Square luxury ring box in navy velvet closed view", label: "Primary Hero" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ RB-01 Classic Square ring box open reveal with ring cushion", label: "Open Presentation" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ RB-01 Classic Square ring box angled corner profile", label: "Craft Profile" },
      { src: "/assets/imsec.jpeg", alt: "CASA DI BIZ RB-01 Classic Square ring box material texture close-up", label: "Macro Detail" },
    ],
    sizes: [
      { label: "Small", dimensions: "5.0 × 5.0 × 4.0 cm", description: "Standard solitaire and thin diamond band case.", suitableFor: "Single Solitaire Ring" },
      { label: "Medium", dimensions: "6.0 × 6.0 × 4.5 cm", description: "Wider cavity suited for halo and wide men's bands.", suitableFor: "Men's Band or Halo Solitaire" },
      { label: "Large", dimensions: "7.0 × 7.0 × 5.0 cm", description: "Dual-slot presentation for bridal pair or cocktail statement.", suitableFor: "Dual Ring / Bridal Pair" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Plush Silk-Touch Velvet or Italian Microfiber over 1200 GSM Greyboard",
      innerMaterial: "High-Density EVA Foam lined with Anti-Tarnish Microfiber and Satin Lid Liner",
      hingeClosure: "Tempered Steel Spring Hinge with Soft-Snap Sound Retention",
      insertType: "Single or Dual Precision Ring Slot with Memory Foam Base",
      brandingPlacement: "Hot-Stamped Foil on Inner Satin Lid + Blind Debossed Outer Base",
      outerPackaging: "Includes 2-Piece Rigid Sleeve or Protective White Shipping Jacket",
      moq: "100 Units (Standard Finishes) / 250 Units (Custom Pantone Dyeing)",
      leadTime: "12–18 Working Days after Proof Sign-off",
      sampleAvailability: "Material swatches and physical unbranded prototypes available on request",
    },
    highlights: [
      { label: "CORE", value: "1200 GSM RIGID" },
      { label: "HINGE", value: "TEMPERED STEEL" },
      { label: "INSERT", value: "ANTI-TARNISH PLUSH" },
    ],
    customisationFeatures: [
      { title: "Custom Slot Geometries", description: "Precision knife dies configured for thick signet bands, double wedding sets, or delicate wire prongs." },
      { title: "Pantone Color Matching", description: "Fabrics and ribbon accents dyed to your exact corporate brand palette." },
      { title: "Sleeve & Bag Pairing", description: "Matching two-piece outer protective slipcases and matching luxury ribbon gift bags." },
      { title: "Metallic Brand Embellishment", description: "Micro-electroplated metallic badges, hot foil stamping, or blind debossing." },
    ],
    faqs: [
      { q: "Can the RB-01 accommodate wide men's wedding bands?", a: "Yes. The Medium (6×6×4.5 cm) and Large (7×7×5 cm) size options feature widened slit depths accommodating bands up to 10mm width." },
      { q: "Is the inner velvet lining anti-tarnish certified?", a: "All CASA DI BIZ velvet and microfiber linings are treated with sulfur-free, anti-tarnish coatings to protect platinum, white gold, and fine silver." },
      { q: "What is the lead time for bespoke foil stamping?", a: "Standard production with custom foil stamping takes 12–18 working days following digital artwork approval." },
    ],
  },

  "rb-02-rounded-square": {
    id: "rb-02",
    slug: "rb-02-rounded-square",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-02",
    name: "Rounded Square",
    subtitle: "SOFT-CURVE LUXURY RING PRESENTATION",
    heroHeadline: "Sculptural softness meets uncompromising structural precision.",
    shortDescription: "Subtly radiused outer corners that feel remarkably tactile in the palm, paired with a concealed magnetic latch.",
    longDescription: "The RB-02 Rounded Square introduces gentle organic curves to the classic square silhouette. Each corner is CNC-contoured before being upholstered with ultra-soft Italian micro-suede or fine nappa leatherette. It provides an intimate, tactile hand feel ideal for contemporary bridal and boutique fine jewellery collections.",
    images: [
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ RB-02 Rounded Square luxury ring box in blush suede", label: "Hero View" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-02 Rounded Square ring box closed perspective", label: "Exterior Finish" },
      { src: "/assets/imagesec.jpeg", alt: "CASA DI BIZ RB-02 Rounded Square curved corner detail", label: "Radius Detail" },
      { src: "/assets/imsecc5.jpeg", alt: "CASA DI BIZ RB-02 Rounded Square interior presentation", label: "Interior Reveal" },
    ],
    sizes: [
      { label: "Small", dimensions: "5.5 × 5.5 × 4.2 cm", description: "Solitaire and engagement ring box.", suitableFor: "Single Engagement Ring" },
      { label: "Medium", dimensions: "6.5 × 6.5 × 4.5 cm", description: "Bespoke cut-out for high-profile cathedral settings.", suitableFor: "Cathedral & Halo Rings" },
    ],
    materials: STANDARD_BOX_MATERIALS.filter((m) => m.id !== "textured-paper"),
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Micro-Suede or Smooth Leatherette over CNC-Sculpted Board",
      innerMaterial: "Memory Cushion wrapped in Anti-Tarnish Micro-Suede",
      hingeClosure: "Concealed Rare-Earth Neodymium Magnet with Soft Hinge",
      insertType: "Tapered Velvet Ring Slit with Beveled Edge Margin",
      brandingPlacement: "Inner Satin Liner Foil Print / Front Flap Emboss",
      outerPackaging: "Rigid Two-Piece Base & Lid Outer Gift Case",
      moq: "150 Units",
      leadTime: "14–20 Working Days",
      sampleAvailability: "Physical sample shipped within 4 working days",
    },
    highlights: [
      { label: "CONSTRUCTION", value: "CNC RADIUSED" },
      { label: "MAGNET", value: "N52 NEODYMIUM" },
      { label: "SURFACE", value: "ITALIAN SUEDE" },
    ],
    customisationFeatures: [
      { title: "Corner Radius Tuning", description: "Adjust corner curvature from subtle 4mm softenings to bold 10mm capsule profiles." },
      { title: "Contrast Edge Piping", description: "Accent border stitching or gold-foil perimeter rims tailored to brand aesthetics." },
      { title: "LED Light Integration", description: "Optional micro-LED spotlight in the inner lid for dramatic unboxing moments." },
    ],
    faqs: [
      { q: "Can we get custom dual-colour combinations (e.g. Navy exterior, Cream interior)?", a: "Yes. Exterior wrap and interior lining materials can be configured in complementary dual-tone combinations." },
      { q: "Does the magnetic closure hold firmly during transit?", a: "We utilize industrial N52 neodymium magnets embedded inside the board structure for reliable closure strength." },
    ],
  },

  "rb-03-octagon": {
    id: "rb-03",
    slug: "rb-03-octagon",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-03",
    name: "Octagon",
    subtitle: "GEOMETRIC HERITAGE RING CASE",
    heroHeadline: "Architectural facet geometry inspired by vintage gem cuts.",
    shortDescription: "An eight-sided silhouette paying homage to emerald-cut stones and heritage Art Deco jewellery cases.",
    longDescription: "The RB-03 Octagon is an architectural triumph. Its eight precision-angled facets reflect light with sculptural dignity, recalling antique French jewel coffers while preserving clean contemporary lines. Hand-wrapped in rich velvet or fine morocco grain, it serves as the ultimate showpiece for heirloom rings and bespoke commissions.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ RB-03 Octagon luxury ring box in forest green velvet", label: "Octagon Profile" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-03 Octagon ring box open top view", label: "Faceted View" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ RB-03 Octagon ring box hinge and edge bevels", label: "Bevel Detail" },
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ RB-03 Octagon interior presentation", label: "Interior Reveal" },
    ],
    sizes: [
      { label: "Small", dimensions: "5.5 × 5.5 × 4.2 cm", description: "Emerald-cut and solitaire ring showcase.", suitableFor: "Emerald & Cushion Cut Rings" },
      { label: "Medium", dimensions: "6.8 × 6.8 × 4.8 cm", description: "Substantial coffer for statement pieces.", suitableFor: "Heirloom & Cocktail Rings" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Fine Moroccan Grain Leatherette",
      innerMaterial: "Fitted Octagon Velvet Pad with Microfiber Ring Well",
      hingeClosure: "Heavy-Gauge Polished Brass Spring Hinge",
      insertType: "Centred Velvet Well with Dual Flap Tensioners",
      brandingPlacement: "Gold Hot-Stamped Crest on Upper Inner Lid",
      outerPackaging: "Matching Octagon or Square Rigid Outer Box",
      moq: "100 Units",
      leadTime: "15–20 Working Days",
      sampleAvailability: "Handmade sample available upon request",
    },
    highlights: [
      { label: "GEOMETRY", value: "8-FACET ART DECO" },
      { label: "HARDWARE", value: "BRASS SPRING" },
      { label: "FINISH", value: "HAND-BEVELLED" },
    ],
    customisationFeatures: [
      { title: "Bespoke Outer Packaging", description: "Matching octagonal exterior slipcases with ribbon pull tab." },
      { title: "Metal Crest Badges", description: "Solid zinc alloy or brass crest plates inset flush onto the top facet." },
    ],
    faqs: [
      { q: "Is the eight-sided box harder to foil stamp on the lid?", a: "Our precision stamping dies are custom machined to align perfectly within the octagonal perimeter margins." },
    ],
  },

  "rb-04-circle": {
    id: "rb-04",
    slug: "rb-04-circle",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-04",
    name: "Circle",
    subtitle: "CYLINDRICAL PILLBOX RING CASE",
    heroHeadline: "Pure circular harmony and seamless continuous contours.",
    shortDescription: "A circular pillbox construction engineered from rigid spirally-wound cylinder board with a snug friction-fit lid.",
    longDescription: "The RB-04 Circle redefines ring presentation with unbroken cylindrical contours. Free of sharp edges, the circular form draws immediate focus to the central gem. Available with either a snug slip-on friction lid or a concealed swing hinge.",
    images: [
      { src: "/assets/imsec.jpeg", alt: "CASA DI BIZ RB-04 Circle round ring box in velvet", label: "Cylinder Overview" },
      { src: "/assets/imsec1.jpeg", alt: "CASA DI BIZ RB-04 Circle ring box open top view", label: "Top View" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-04 Circle ring box angled profile", label: "Side Profile" },
    ],
    sizes: [
      { label: "Standard", dimensions: "Ø 5.5 × 4.5 cm", description: "Standard round ring cylinder.", suitableFor: "Solitaires & Bands" },
      { label: "Grand", dimensions: "Ø 7.0 × 5.0 cm", description: "Spacious round presentation.", suitableFor: "Large Cocktail Rings" },
    ],
    materials: [STANDARD_BOX_MATERIALS[0], STANDARD_BOX_MATERIALS[1], STANDARD_BOX_MATERIALS[2], STANDARD_BOX_MATERIALS[4]],
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Seamless Wrapped Silk Velvet or Fine Grain Paper",
      innerMaterial: "Circular Dense Foam Insert with Center Ring Pinch",
      hingeClosure: "Precision Friction-Fit Lid or Micro Pin Hinge",
      insertType: "Centered Vertical Ring Slit with Suede Trim",
      brandingPlacement: "Circular Hot Foil Stamping on Top Face & Inner Lid",
      outerPackaging: "Square Outer Protection Box with Suede Bed",
      moq: "200 Units",
      leadTime: "15–22 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "FORM", value: "SEAMLESS CYLINDER" },
      { label: "LID", value: "PRECISION FRICTION" },
      { label: "DETAIL", value: "CIRCULAR FOIL" },
    ],
    customisationFeatures: [
      { title: "Ribbon Pull Tab", description: "Grosgrain or satin finger pull attached to the inner shoulder for effortless opening." },
    ],
    faqs: [
      { q: "How tight is the friction fit?", a: "Lids are calibrated to slide open with a smooth 1.5-second pneumatic release." },
    ],
  },

  "rb-05-heart": {
    id: "rb-05",
    slug: "rb-05-heart",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-05",
    name: "Heart",
    subtitle: "ROMANTIC BESPOKE CONTOUR BOX",
    heroHeadline: "An iconic symbol of devotion rendered with couture precision.",
    shortDescription: "A sculpted heart-shaped silhouette with flowing symmetrical arcs and a discreet rear hinge.",
    longDescription: "The RB-05 Heart provides an undeniably emotional backdrop for proposal rings, Valentine's editions, and romantic bridal suites. Constructed using high-precision die-formed wooden cores wrapped meticulously in velvet or pastel leatherette.",
    images: [
      { src: "/assets/imagesec.jpeg", alt: "CASA DI BIZ RB-05 Heart ring box in blush pink velvet", label: "Heart View" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-05 Heart ring box open presentation", label: "Open View" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ RB-05 Heart ring box craftsmanship detail", label: "Hinge Detail" },
    ],
    sizes: [
      { label: "Standard", dimensions: "6.0 × 5.8 × 4.2 cm", description: "Standard heart proposal box.", suitableFor: "Engagement Ring" },
    ],
    materials: [STANDARD_BOX_MATERIALS[0], STANDARD_BOX_MATERIALS[1], STANDARD_BOX_MATERIALS[3]],
    colours: [STANDARD_BOX_COLOURS[0], STANDARD_BOX_COLOURS[3], STANDARD_BOX_COLOURS[4], STANDARD_BOX_COLOURS[6]],
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Molded Wood Shell with Silk Velvet Wrap",
      innerMaterial: "Heart-Formed Foam Cushion with Ring Notch",
      hingeClosure: "Concealed Rear Spring Hinge",
      insertType: "Angled Slit for Optimal Gem Orientation",
      brandingPlacement: "Inner Lid Foil Monogram",
      outerPackaging: "Square Luxury Box with Heart Die-Cut Bed",
      moq: "200 Units",
      leadTime: "18–25 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "CORE", value: "DIE-FORMED WOOD" },
      { label: "PROFILE", value: "SCULPTED HEART" },
      { label: "CUSHION", value: "ANGLED REVEAL" },
    ],
    customisationFeatures: [
      { title: "Custom Monogramming", description: "Bespoke initials hot-stamped in gold or silver on the top dome." },
    ],
    faqs: [
      { q: "Is the hinge visible on the exterior?", a: "No, the rear hinge is wrapped flush beneath the exterior fabric." },
    ],
  },

  "rb-06-pillow": {
    id: "rb-06",
    slug: "rb-06-pillow",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    modelCode: "RB-06",
    name: "Pillow",
    subtitle: "CURVED-TOP COUTURE RING CASE",
    heroHeadline: "Softly domed crown with tailored architectural edges.",
    shortDescription: "Features a gentle convex pillow-top lid that adds dimension, height, and elevated prestige to the box exterior.",
    longDescription: "The RB-06 Pillow pairs a structured rectangular base with a plush, gently domed top lid. The padded crown creates subtle highlight gradients across velvet or leather surfaces.",
    images: [
      { src: "/assets/imsec1.jpeg", alt: "CASA DI BIZ RB-06 Pillow ring box in champagne velvet", label: "Pillow Crown" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ RB-06 Pillow ring box open presentation", label: "Open Display" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ RB-06 Pillow ring box side silhouette", label: "Side Silhouette" },
    ],
    sizes: [
      { label: "Standard", dimensions: "6.0 × 6.0 × 5.0 cm", description: "High-clearance domed ring case.", suitableFor: "High-Set Gems" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Padded Foam-Backed Velvet on 1200 GSM Board",
      innerMaterial: "Plush Microfiber Ring Channel",
      hingeClosure: "Precision Tension Hinge",
      insertType: "Deep Channel with Dual Support",
      brandingPlacement: "Hot Stamped Logo on Satin Lining",
      outerPackaging: "Protective Slipcase",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "TOP", value: "PADDED CROWN" },
      { label: "CLEARANCE", value: "HIGH DOME" },
      { label: "CLOSURE", value: "TENSION SNAP" },
    ],
    customisationFeatures: [
      { title: "Crown Height Tuning", description: "Adjust dome padding thickness from 3mm to 8mm." },
    ],
    faqs: [
      { q: "Is the pillow top suitable for foiling?", a: "Yes, we use specialized heated silicone dies designed for padded surfaces." },
    ],
  },

  // ----------------------------------------------------
  // EARRING BOXES
  // ----------------------------------------------------
  "eb-01-classic-drop": {
    id: "eb-01",
    slug: "eb-01-classic-drop",
    categorySlug: "earring-boxes",
    categoryName: "Earring Boxes",
    modelCode: "EB-01",
    name: "Classic Drop Earring Box",
    subtitle: "VERTICAL SUSPENSION PRESENTATION",
    heroHeadline: "Showcase chandelier drops and drop earrings at their natural suspended angle.",
    shortDescription: "Engineered with dual micro-hooks and an inclined presentation pad to exhibit dangling earrings without tangling.",
    longDescription: "The EB-01 Classic Drop is designed specifically for long statement earrings, chandelier motifs, and diamond drops. An inclined interior easel pad elevates the pieces toward the viewer, allowing gemstone clusters to catch light instantly upon opening.",
    images: [
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ EB-01 Classic Drop luxury earring box", label: "Drop Presentation" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ EB-01 Earring box exterior", label: "Exterior" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ EB-01 Earring box interior easel", label: "Interior Easel" },
    ],
    sizes: [
      { label: "Medium", dimensions: "7.5 × 7.5 × 4.0 cm", description: "Standard drop and hoop earrings.", suitableFor: "Drops & Hoops" },
      { label: "Large", dimensions: "9.0 × 9.0 × 4.5 cm", description: "High-jewellery chandeliers up to 7cm drop.", suitableFor: "Chandeliers & Statement Drops" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Micro-Suede over 1200 GSM Core",
      innerMaterial: "Inclined Velvet Easel Pad with Concealed Rear Stand",
      hingeClosure: "Spring Hinge with 95-Degree Rest Angle",
      insertType: "Dual Silicone-Lined Earring Holes + Hook Cut-outs",
      brandingPlacement: "Inner Lid Satin Foil Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "PAD", value: "INCLINED EASEL" },
      { label: "ANGLE", value: "95° DISPLAY" },
      { label: "SECURITY", value: "SILICONE NOTCHES" },
    ],
    customisationFeatures: [
      { title: "Multi-Hole Grid", description: "Configure insert with 2, 4, or 6 holes for multi-piercing collections." },
    ],
    faqs: [
      { q: "Will heavy earrings pull down the pad?", a: "The easel board is reinforced with rigid 600 GSM fiberboard to support heavy gold chandeliers." },
    ],
  },

  "eb-02-stud-earring": {
    id: "eb-02",
    slug: "eb-02-stud-earring",
    categorySlug: "earring-boxes",
    categoryName: "Earring Boxes",
    modelCode: "EB-02",
    name: "Stud Earring Box",
    subtitle: "COMPACT PRECISION STUD CASE",
    heroHeadline: "Minimalist proportions tailored for diamond studs and ear jewellery.",
    shortDescription: "A compact square case with dual micro-apertures and rear clearance for push-backs and screw-backs.",
    longDescription: "The EB-02 Stud Earring Box offers a clean, intimate stage for diamond studs, pearl earrings, and gemstones. The interior insert features twin precision laser-drilled holes backed by hollow relief channels for butterfly and screw-post clearance.",
    images: [
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ EB-02 Stud earring box in champagne velvet", label: "Stud Showcase" },
      { src: "/assets/imsec.jpeg", alt: "CASA DI BIZ EB-02 Stud box open view", label: "Open View" },
    ],
    sizes: [
      { label: "Standard", dimensions: "5.5 × 5.5 × 3.8 cm", description: "Solitaire studs and cluster earrings.", suitableFor: "Diamond & Pearl Studs" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Italian Microfiber or Velvet over Rigid Core",
      innerMaterial: "High-Density Foam with Laser-Cut Post Holes",
      hingeClosure: "Spring-Action Steel Hinge",
      insertType: "Dual Post Slots with 12mm Post Depth Clearance",
      brandingPlacement: "Inner Lid Silk Screen or Foil",
      outerPackaging: "Two-Piece Sleeve",
      moq: "100 Units",
      leadTime: "12–16 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "CLEARANCE", value: "12MM POST DEPTH" },
      { label: "PRECISION", value: "LASER DRILLED" },
      { label: "COMPACT", value: "5.5CM SQUARE" },
    ],
    customisationFeatures: [
      { title: "Slit + Hole Combo", description: "Dual-purpose insert featuring both stud holes and side ring slits." },
    ],
    faqs: [
      { q: "Can this box fit screw-back earrings?", a: "Yes, the back foam cavity is recessed by 12mm to accommodate long screw posts." },
    ],
  },

  "eb-03-slim-presentation": {
    id: "eb-03",
    slug: "eb-03-slim-presentation",
    categorySlug: "earring-boxes",
    categoryName: "Earring Boxes",
    modelCode: "EB-03",
    name: "Slim Presentation Box",
    subtitle: "CONTEMPORARY ULTRA-LOW PROFILE CASE",
    heroHeadline: "Ultra-slim architectural profile for modern jewellery retailers.",
    shortDescription: "A modern low-profile case engineered for sleek retail display, travel convenience, and understated luxury.",
    longDescription: "The EB-03 Slim Presentation Box strips away bulk to focus entirely on the jewellery. Standing just 2.8 cm tall, it combines an ultra-dense rigid board core with clean minimalist corners.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ EB-03 Slim Earring presentation box", label: "Slim Profile" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ EB-03 Open case", label: "Open Case" },
    ],
    sizes: [
      { label: "Standard", dimensions: "7.0 × 7.0 × 2.8 cm", description: "Ultra-slim presentation case.", suitableFor: "Studs & Flat Earrings" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Specialty Fine Paperboard or Suede",
      innerMaterial: "Ultra-Thin Dense Foam with Microfiber Facing",
      hingeClosure: "Concealed Magnetic Latch",
      insertType: "Flap-Tensioned Earring Pad",
      brandingPlacement: "Foil Stamping on Front Lid & Inside",
      outerPackaging: "Matching Slipcase",
      moq: "150 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "HEIGHT", value: "28MM ULTRA-SLIM" },
      { label: "LATCH", value: "MAGNETIC" },
      { label: "AESTHETIC", value: "MINIMALIST" },
    ],
    customisationFeatures: [
      { title: "Custom Insert Routing", description: "Tailored die-cuts for huggies, ear cuffs, and crawler earrings." },
    ],
    faqs: [
      { q: "Is this suitable for e-commerce postage?", a: "Yes, the 2.8 cm profile fits standard postal letterbox dimensions." },
    ],
  },

  "eb-04-octagon-earring": {
    id: "eb-04",
    slug: "eb-04-octagon-earring",
    categorySlug: "earring-boxes",
    categoryName: "Earring Boxes",
    modelCode: "EB-04",
    name: "Octagon Earring Box",
    subtitle: "VINTAGE FACETED EARRING COFFER",
    heroHeadline: "Faceted vintage prestige tailored for exquisite earring pairs.",
    shortDescription: "An eight-sided statement case with a generous interior bed designed for precious gemstone earring suites.",
    longDescription: "The EB-04 Octagon Earring Box expands our iconic octagonal silhouette into a generous format tailored for fine earrings. Handcrafted with faceted bevels and lined in rich velvet.",
    images: [
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ EB-04 Octagon Earring box", label: "Octagon Hero" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ EB-04 Interior earring display", label: "Interior Reveal" },
    ],
    sizes: [
      { label: "Standard", dimensions: "8.0 × 8.0 × 4.2 cm", description: "Eight-sided earring presentation coffer.", suitableFor: "Fine Gemstone Earrings" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Fine Morocco Grain Leatherette",
      innerMaterial: "Octagon Velvet Pad with Dual Earring Loops",
      hingeClosure: "Heavy-Duty Brass Spring Hinge",
      insertType: "Dual Earring Slots + Top Hanging Notches",
      brandingPlacement: "Foil Stamping on Inner Lid",
      outerPackaging: "Matching Two-Piece Box",
      moq: "100 Units",
      leadTime: "15–20 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "GEOMETRY", value: "8-FACET ART DECO" },
      { label: "HARDWARE", value: "BRASS SPRING" },
      { label: "BED", value: "EXPANDED VELVET" },
    ],
    customisationFeatures: [
      { title: "Earring & Pendant Combo Pad", description: "Optional center loop allowing the box to display an earring pair and matching pendant." },
    ],
    faqs: [
      { q: "Can this model hold both studs and drops?", a: "Yes, the insert features both upper hook slots and lower post holes." },
    ],
  },

  // ----------------------------------------------------
  // CHAIN BOXES
  // ----------------------------------------------------
  "cb-01-long-chain": {
    id: "cb-01",
    slug: "cb-01-long-chain",
    categorySlug: "chain-boxes",
    categoryName: "Chain Boxes",
    modelCode: "CB-01",
    name: "Long Chain Box",
    subtitle: "ELONGATED PRESENTATION CASE",
    heroHeadline: "Present fine chains and link necklaces in unbroken horizontal elegance.",
    shortDescription: "Features twin elasticated retaining tabs and a plush recessed channel keeping chains perfectly straight.",
    longDescription: "The CB-01 Long Chain Box provides a luxurious elongated horizontal display for gold chains, rope links, and pendants. Twin corner retainers and a velvet base maintain chain tension without stretching delicate links.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ CB-01 Long Chain luxury box", label: "Long Profile" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ CB-01 Open chain view", label: "Open Channel" },
    ],
    sizes: [
      { label: "Standard", dimensions: "21.5 × 4.5 × 3.5 cm", description: "Chains up to 50cm length folded.", suitableFor: "Fine Chains & Links" },
      { label: "Wide", dimensions: "24.0 × 5.5 × 4.0 cm", description: "Heavier Cuban links and statement chains.", suitableFor: "Heavy Cuban & Rope Chains" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet, Leatherette, or Specialty Paper",
      innerMaterial: "Velvet Padded Channel with Dual Retainer Hooks",
      hingeClosure: "Dual Steel Spring Hinges",
      insertType: "Tensioned Velvet Bed with Elastic Tie Corners",
      brandingPlacement: "Inner Lid Foil Print Along Horizontal Axis",
      outerPackaging: "Elongated Protective Slipcase",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "LENGTH", value: "21.5CM PROFILE" },
      { label: "HINGES", value: "DUAL SPRING" },
      { label: "TENSION", value: "CORNER RETAINERS" },
    ],
    customisationFeatures: [
      { title: "Center Pendant Notch", description: "Add a central recessed well to seat attached pendants securely." },
    ],
    faqs: [
      { q: "Do the corner hooks damage delicate gold chains?", a: "No, hooks are lined with soft velvet ribbon or silicone coated tabs." },
    ],
  },

  "cb-02-slim-pendant-chain": {
    id: "cb-02",
    slug: "cb-02-slim-pendant-chain",
    categorySlug: "chain-boxes",
    categoryName: "Chain Boxes",
    modelCode: "CB-02",
    name: "Slim Pendant Chain Box",
    subtitle: "INTEGRATED PENDANT & CHAIN CASE",
    heroHeadline: "Perfect harmony for chains with attached central pendants.",
    shortDescription: "Combines an elongated upper chain path with a dedicated central cavity for the focal gemstone.",
    longDescription: "The CB-02 Slim Pendant Chain Box is engineered specifically for pendant necklaces. It gracefully conceals excess chain beneath the insert while holding the central pendant front and centre.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ CB-02 Slim Pendant Chain box", label: "Pendant Chain" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ CB-02 Open view", label: "Open Display" },
    ],
    sizes: [
      { label: "Standard", dimensions: "16.0 × 6.5 × 3.5 cm", description: "Pendant necklace case.", suitableFor: "Pendant Necklaces" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Micro-Suede or Fine Paperboard over Rigid Core",
      innerMaterial: "Dual-Layer Velvet Pad with Rear Chain Storage Pocket",
      hingeClosure: "Spring Hinge or Magnetic Flap",
      insertType: "Top Slits with Deep Center Pendant Recess",
      brandingPlacement: "Inner Lid Stamping",
      outerPackaging: "Two-Piece Outer Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "FEATURE", value: "REAR CHAIN POCKET" },
      { label: "DESIGN", value: "FOCUSED REVEAL" },
      { label: "FINISH", value: "SEAMLESS SUEDE" },
    ],
    customisationFeatures: [
      { title: "Custom Cavity Shape", description: "Route the center cavity to match custom pendant outlines." },
    ],
    faqs: [
      { q: "Where does the excess chain go?", a: "The insert lifts slightly to allow the chain to rest neatly in a concealed rear velvet pouch." },
    ],
  },

  "cb-03-wide-collar-chain": {
    id: "cb-03",
    slug: "cb-03-wide-collar-chain",
    categorySlug: "chain-boxes",
    categoryName: "Chain Boxes",
    modelCode: "CB-03",
    name: "Wide Collar Chain Box",
    subtitle: "BROAD-FORMAT CHAIN PRESENTATION",
    heroHeadline: "Substantial architecture for wide gourmette and collar chains.",
    shortDescription: "A wide-body presentation case designed for heavy links, statement chokers, and multi-strand chains.",
    longDescription: "The CB-03 Wide Collar Chain Box caters to bold jewellery pieces. With an expanded 8cm width and reinforced dual-hinge construction, it gives substantial gold chains the space and dignity they command.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ CB-03 Wide Collar Chain box", label: "Wide Profile" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ CB-03 Interior display", label: "Interior Reveal" },
    ],
    sizes: [
      { label: "Standard", dimensions: "24.0 × 8.0 × 4.2 cm", description: "Wide chain and choker case.", suitableFor: "Chunky Chains & Chokers" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Heavyweight Velvet or Nappa Leatherette",
      innerMaterial: "Firm Padded Velvet Channel with Dual Brass Clips",
      hingeClosure: "Twin Reinforced Spring Hinges",
      insertType: "Wide Channel with Dual Lateral Retainers",
      brandingPlacement: "Center Inner Lid Gold Foil",
      outerPackaging: "Hardboard Gift Sleeve",
      moq: "100 Units",
      leadTime: "14–20 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "WIDTH", value: "80MM WIDE PROFILE" },
      { label: "CLIPS", value: "POLISHED BRASS" },
      { label: "STRENGTH", value: "REINFORCED CORE" },
    ],
    customisationFeatures: [
      { title: "Custom Clip Finishes", description: "Brass clips available in Gold, Silver, or Rose Gold electroplating." },
    ],
    faqs: [
      { q: "Can it hold chains up to 20mm link thickness?", a: "Yes, the 4.2 cm box height provides generous headroom for thick statement links." },
    ],
  },

  // ----------------------------------------------------
  // PENDANT BOXES
  // ----------------------------------------------------
  "pb-01-square-pendant": {
    id: "pb-01",
    slug: "pb-01-square-pendant",
    categorySlug: "pendant-boxes",
    categoryName: "Pendant Boxes",
    modelCode: "PB-01",
    name: "Square Pendant Box",
    subtitle: "BALANCED SOLITAIRE PENDANT CASE",
    heroHeadline: "A pristine square frame spotlighting solitary gems and medallions.",
    shortDescription: "Symmetrical square format featuring upper chain slots and a plush velvet cushion that catches light at every angle.",
    longDescription: "The PB-01 Square Pendant Box is designed to present fine gemstone pendants, diamonds, and pearls. Symmetrical proportions focus the eye directly upon the suspended jewel.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ PB-01 Square Pendant box", label: "Hero View" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ PB-01 Open presentation", label: "Open Presentation" },
    ],
    sizes: [
      { label: "Small", dimensions: "7.0 × 7.0 × 3.8 cm", description: "Standard solitaire and small medallion.", suitableFor: "Solitaire Pendants" },
      { label: "Medium", dimensions: "8.5 × 8.5 × 4.2 cm", description: "Large cluster and halo pendants.", suitableFor: "Statement Pendants" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk-Touch Velvet or Special Paper over 1200 GSM Board",
      innerMaterial: "High-Density Foam wrapped in Anti-Tarnish Microfiber",
      hingeClosure: "Spring Hinge with Crisp Snap",
      insertType: "Top Dual Chain Slits + Central Recessed Well",
      brandingPlacement: "Hot Stamped Logo on Inner Satin Liner",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "FORMAT", value: "SYMMETRICAL SQUARE" },
      { label: "SLITS", value: "DUAL TOP SLOTS" },
      { label: "CORE", value: "1200 GSM RIGID" },
    ],
    customisationFeatures: [
      { title: "Die-Cut Cavity Shapes", description: "Custom laser routing to cradle teardrop, cross, or heart pendants." },
    ],
    faqs: [
      { q: "Is the chain slot suitable for thick chains?", a: "The slots are angled and reinforced with flexible silicone backing to accept chains from 1mm to 4mm." },
    ],
  },

  "pb-02-oval-pendant": {
    id: "pb-02",
    slug: "pb-02-oval-pendant",
    categorySlug: "pendant-boxes",
    categoryName: "Pendant Boxes",
    modelCode: "PB-02",
    name: "Oval Pendant Box",
    subtitle: "ORGANIC SOFT-OVAL JEWEL COFFER",
    heroHeadline: "Gentle curvilinear geometry framing oval gemstones and cameos.",
    shortDescription: "A refined oval silhouette that naturally echoes oval diamond cuts, cabochons, and locket designs.",
    longDescription: "The PB-02 Oval Pendant Box brings soft curvilinear lines to pendant presentation. Designed with continuous curved walls and a seamless velvet wrap.",
    images: [
      { src: "/assets/imsec.jpeg", alt: "CASA DI BIZ PB-02 Oval Pendant box", label: "Oval Profile" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ PB-02 Open oval view", label: "Open View" },
    ],
    sizes: [
      { label: "Standard", dimensions: "8.5 × 6.5 × 4.0 cm", description: "Oval pendant and cameo showcase.", suitableFor: "Oval Gems & Lockets" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Molded Curved Core with Suede or Velvet",
      innerMaterial: "Contour-Cut Velvet Bed with Top Tensioners",
      hingeClosure: "Precision Friction-Fit Lid",
      insertType: "Oval Recessed Bed with Rear Chain Slot",
      brandingPlacement: "Inner Lid Stamping",
      outerPackaging: "Custom Fitted Outer Box",
      moq: "150 Units",
      leadTime: "15–22 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "SHAPE", value: "SMOOTH OVAL" },
      { label: "FIT", value: "CONTOUR CUSHION" },
      { label: "STYLE", value: "CAMEO & LOCKET" },
    ],
    customisationFeatures: [
      { title: "Ribbon Pull Accent", description: "Custom woven silk ribbon pull on lid." },
    ],
    faqs: [
      { q: "Can we emboss our logo on the curved lid?", a: "Yes, we use 3D CNC-milled contour brass dies for curved lid stamping." },
    ],
  },

  "pb-03-medallion-box": {
    id: "pb-03",
    slug: "pb-03-medallion-box",
    categorySlug: "pendant-boxes",
    categoryName: "Pendant Boxes",
    modelCode: "PB-03",
    name: "Medallion Box",
    subtitle: "HIGH-RELIEF COMMEMORATIVE CASE",
    heroHeadline: "Substantial depth engineered for heavy medallions, coins, and talismans.",
    shortDescription: "Deep recessed cavity with circular or custom routed well designed for large medallions and coins.",
    longDescription: "The PB-03 Medallion Box is built to accommodate substantial pieces. High internal clearance and rigid high-density foam prevent shifting during transit.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ PB-03 Medallion box", label: "Medallion Showcase" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ PB-03 Interior display", label: "Interior Reveal" },
    ],
    sizes: [
      { label: "Standard", dimensions: "9.0 × 9.0 × 4.5 cm", description: "Medallions and large coins up to 55mm diameter.", suitableFor: "Coins & Talismans" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Italian Leatherette or Velvet over 1400 GSM Core",
      innerMaterial: "Die-Cut Velvet-Covered Acrylic Ring Insert",
      hingeClosure: "Spring Hinge with Solid Snap",
      insertType: "Recessed Circular Cavity with Finger Notch",
      brandingPlacement: "Outer Lid Foil + Inner Satin Liner",
      outerPackaging: "Two-Piece Rigid Sleeve",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "DEPTH", value: "45MM DEEP CAVITY" },
      { label: "CORE", value: "1400 GSM HEAVYWEIGHT" },
      { label: "WELL", value: "PRECISION ACRYLIC" },
    ],
    customisationFeatures: [
      { title: "Custom Diameter Cutouts", description: "Exact millimetre-matched cutouts for commemorative coins or irregular talismans." },
    ],
    faqs: [
      { q: "Is there a finger notch to lift the coin easily?", a: "Yes, precision half-moon finger notches are included beside the well." },
    ],
  },

  // ----------------------------------------------------
  // BRACELET BOXES
  // ----------------------------------------------------
  "bb-01-slimline-bracelet": {
    id: "bb-01",
    slug: "bb-01-slimline-bracelet",
    categorySlug: "bracelet-boxes",
    categoryName: "Bracelet Boxes",
    modelCode: "BB-01",
    name: "Slim Line Bracelet Box",
    subtitle: "LINEAR BRACELET PRESENTATION",
    heroHeadline: "A pristine linear showcase for tennis bracelets and fine chain links.",
    shortDescription: "Slender horizontal layout with dual elastic corner retainers keeping bracelets taut and gleaming.",
    longDescription: "The BB-01 Slim Line Bracelet Box is the classic horizontal case for fine diamond tennis bracelets and delicate link styles. The elongated channel creates an impressive unveiling experience.",
    images: [
      { src: "/assets/imsec1.jpeg", alt: "CASA DI BIZ BB-01 Slimline Bracelet box", label: "Bracelet Hero" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ BB-01 Open view", label: "Open Display" },
    ],
    sizes: [
      { label: "Standard", dimensions: "22.0 × 5.0 × 3.2 cm", description: "Bracelets up to 20cm length.", suitableFor: "Tennis Bracelets" },
      { label: "Long", dimensions: "24.0 × 5.5 × 3.5 cm", description: "Extended link and charm bracelets.", suitableFor: "Charm & Link Bracelets" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Micro-Suede over Rigid Greyboard",
      innerMaterial: "Padded Velvet Pillow Bed with Elastic Retention",
      hingeClosure: "Dual Tempered Steel Spring Hinges",
      insertType: "Linear Recessed Bed with Corner Retaining Straps",
      brandingPlacement: "Inner Lid Satin Foil Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "LENGTH", value: "22CM HORIZONTAL" },
      { label: "BED", value: "PADDED PILLOW" },
      { label: "HINGES", value: "DUAL TEMPERED" },
    ],
    customisationFeatures: [
      { title: "Slanted Presentation Incline", description: "Optional interior easel incline tilting the bracelet 15 degrees toward viewer." },
    ],
    faqs: [
      { q: "Will the bracelet shift during shipping?", a: "Twin corner retainers combined with plush lid padding hold the bracelet firmly in place." },
    ],
  },

  "bb-02-wide-cuff-bracelet": {
    id: "bb-02",
    slug: "bb-02-wide-cuff-bracelet",
    categorySlug: "bracelet-boxes",
    categoryName: "Bracelet Boxes",
    modelCode: "BB-02",
    name: "Wide Cuff Bracelet Box",
    subtitle: "RIGID CUFF & BANGLE DISPLAY",
    heroHeadline: "Generous depth and central bolster for wide cuffs and statement wristwear.",
    shortDescription: "Square deep-dish format with a removable central padded cushion for rigid open cuffs and torque bracelets.",
    longDescription: "The BB-02 Wide Cuff Bracelet Box is engineered for rigid bracelets that cannot be laid flat. A plush cylindrical pillow cushion wraps the cuff, keeping it upright and centered in the showcase.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ BB-02 Wide Cuff Bracelet box", label: "Cuff Showcase" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ BB-02 Open view", label: "Open Cushion" },
    ],
    sizes: [
      { label: "Standard", dimensions: "9.5 × 9.5 × 5.5 cm", description: "Wide cuff and torque bracelets.", suitableFor: "Cuffs & Torques" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Nappa Leatherette or Plush Velvet",
      innerMaterial: "Removable Padded Cylindrical Velvet Bolster",
      hingeClosure: "Spring Hinge with Soft Snap",
      insertType: "Central Velvet Roll with Lateral Support Wedges",
      brandingPlacement: "Inner Lid Gold Stamping",
      outerPackaging: "Two-Piece Outer Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "CUSHION", value: "CYLINDRICAL BOLSTER" },
      { label: "DEPTH", value: "55MM DEEP CLEARANCE" },
      { label: "VERSATILITY", value: "CUFFS & WATCHES" },
    ],
    customisationFeatures: [
      { title: "Firm vs Soft Bolster", description: "Choose between memory-foam soft pillow or structured wood-core bolster." },
    ],
    faqs: [
      { q: "Can this box also serve as a luxury watch box?", a: "Yes, the central bolster is sized to accommodate both wide jewellery cuffs and luxury wristwatches." },
    ],
  },

  "bb-03-tennis-bracelet": {
    id: "bb-03",
    slug: "bb-03-tennis-bracelet",
    categorySlug: "bracelet-boxes",
    categoryName: "Bracelet Boxes",
    modelCode: "BB-03",
    name: "Tennis Bracelet Box",
    subtitle: "COUTURE DIAMOND LINE SHOWCASE",
    heroHeadline: "Tailored specifically for the signature sparkle of diamond tennis lines.",
    shortDescription: "Precision velvet channel with micro-spring retention clips keeping every diamond aligned in parallel perfection.",
    longDescription: "The BB-03 Tennis Bracelet Box elevates diamond line presentation. Its channel is lined with ultra-smooth microfiber that enhances gemstone fire without catching on delicate prong settings.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ BB-03 Tennis Bracelet box", label: "Tennis Showcase" },
      { src: "/assets/imsec1.jpeg", alt: "CASA DI BIZ BB-03 Angle view", label: "Angle View" },
    ],
    sizes: [
      { label: "Standard", dimensions: "23.0 × 5.5 × 3.5 cm", description: "Diamond line bracelets up to 21cm.", suitableFor: "Diamond Tennis Bracelets" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Italian Velvet or High-Grade Leatherette",
      innerMaterial: "Non-Snag Microfiber Bed with Hidden Retainers",
      hingeClosure: "Reinforced Dual Steel Hinges",
      insertType: "Continuous Padded Channel with Bevel Edge",
      brandingPlacement: "Foil Stamping on Inner Satin Lid",
      outerPackaging: "Matching Exterior Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "LINING", value: "NON-SNAG MICROFIBER" },
      { label: "ALIGNMENT", value: "PARALLEL CHANNEL" },
      { label: "FINISH", value: "ITALIAN VELVET" },
    ],
    customisationFeatures: [
      { title: "Integrated Certificate Slot", description: "Discreet pocket inside the lid to hold diamond grading reports (GIA / IGI)." },
    ],
    faqs: [
      { q: "Will delicate diamond prongs catch on the fabric?", a: "We use ultra-smooth non-snag microfiber specifically tested against delicate micro-prong diamond settings." },
    ],
  },

  // ----------------------------------------------------
  // NECKLACE BOXES
  // ----------------------------------------------------
  "nb-01-grand-collar": {
    id: "nb-01",
    slug: "nb-01-grand-collar",
    categorySlug: "necklace-boxes",
    categoryName: "Necklace Boxes",
    modelCode: "NB-01",
    name: "Grand Collar Necklace Box",
    subtitle: "STATEMENT HIGH-JEWELLERY COFFER",
    heroHeadline: "A grand stage for high-jewellery colliers and royal diamond suites.",
    shortDescription: "Substantial 18×18cm format with a sculpted bust insert that cradles collar necklaces with regal presence.",
    longDescription: "The NB-01 Grand Collar Necklace Box is designed for high-jewellery colliers, diamond bibs, and royal parures. Its sculpted interior pad naturally forms the gentle arc of the neckline.",
    images: [
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ NB-01 Grand Collar luxury necklace box", label: "Collar Showcase" },
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ NB-01 Open presentation", label: "Open Collar Pad" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ NB-01 Exterior craftsmanship", label: "Exterior Finish" },
    ],
    sizes: [
      { label: "Grand", dimensions: "18.0 × 18.0 × 4.8 cm", description: "Standard collar and choker necklaces.", suitableFor: "Diamond Colliers & Chokers" },
      { label: "Imperial", dimensions: "22.0 × 22.0 × 5.5 cm", description: "Grand bridal bibs and cascading necklaces.", suitableFor: "Cascading Bridal Necklaces" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Plush Italian Velvet or Fine Leatherette over 1400 GSM Board",
      innerMaterial: "Sculpted Ergonomic Bust Pad with Dual Top Hooks and Base Clips",
      hingeClosure: "Dual Heavy-Duty Brass Spring Hinges with Soft-Close Resistance",
      insertType: "Curved 3D Neck Form with Rear Tension Cleats",
      brandingPlacement: "Foil Stamping on Upper Inner Lid & Outer Lid",
      outerPackaging: "Two-Piece Rigid Outer Gift Box with Protective Lining",
      moq: "100 Units",
      leadTime: "15–22 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "SCALE", value: "18×18CM GRAND" },
      { label: "PAD", value: "3D SCULPTED BUST" },
      { label: "HINGES", value: "DUAL HEAVY BRASS" },
    ],
    customisationFeatures: [
      { title: "Multi-Piece Insert", description: "Add companion slots for matching earrings and solitaire ring inside the same coffer." },
      { title: "Silk Dust Cover", description: "Embroidered silk dust blanket layered over the jewellery before closing." },
    ],
    faqs: [
      { q: "Does the necklace stay secured when carried vertically?", a: "Yes, dual upper spring clips and lower tension straps hold the entire collier securely." },
    ],
  },

  "nb-02-choker-necklace": {
    id: "nb-02",
    slug: "nb-02-choker-necklace",
    categorySlug: "necklace-boxes",
    categoryName: "Necklace Boxes",
    modelCode: "NB-02",
    name: "Choker Necklace Box",
    subtitle: "CIRCULAR PAD CHOKER CASE",
    heroHeadline: "Form-fitting elegance for rigid chokers and torque necklaces.",
    shortDescription: "Rounded square format with a circular contour insert tailored for close-fitting neckwear.",
    longDescription: "The NB-02 Choker Necklace Box provides snug contouring for modern chokers and diamond torques. Hand-wrapped in soft microfiber or silk velvet.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ NB-02 Choker Necklace box", label: "Choker View" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ NB-02 Open view", label: "Open View" },
    ],
    sizes: [
      { label: "Standard", dimensions: "16.0 × 16.0 × 4.5 cm", description: "Torque and choker necklaces.", suitableFor: "Torques & Chokers" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Microfiber over Rigid Board",
      innerMaterial: "Circular Form Velvet Cushion with Rear Retention",
      hingeClosure: "Dual Steel Spring Hinges",
      insertType: "Circular Neck Profile with Top Retainer Straps",
      brandingPlacement: "Inner Lid Hot Stamping",
      outerPackaging: "Two-Piece Gift Box",
      moq: "100 Units",
      leadTime: "14–20 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "FORMAT", value: "CIRCULAR CONTOUR" },
      { label: "FIT", value: "TORQUE TAILORED" },
      { label: "FINISH", value: "SEAMLESS WRAP" },
    ],
    customisationFeatures: [
      { title: "Custom Height Adjustments", description: "Configure box depth to accommodate tall gem clusters." },
    ],
    faqs: [
      { q: "Can it hold pearl strands?", a: "Yes, the circular bed is ideal for single and double strand pearl chokers." },
    ],
  },

  "nb-03-princess-necklace": {
    id: "nb-03",
    slug: "nb-03-princess-necklace",
    categorySlug: "necklace-boxes",
    categoryName: "Necklace Boxes",
    modelCode: "NB-03",
    name: "Princess Necklace Box",
    subtitle: "V-NECK CONTOUR PRESENTATION",
    heroHeadline: "Dynamic V-profile insert for pendant drops and graduating necklaces.",
    shortDescription: "Features an angled V-shaped interior channel guiding the eye naturally to central pendant drops.",
    longDescription: "The NB-03 Princess Necklace Box is tailored for graduating diamond necklaces and pendant drops. The angled V-bed aligns the necklace symmetrically for optimal boutique presentation.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ NB-03 Princess Necklace box", label: "Princess View" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ NB-03 Open case", label: "Open Display" },
    ],
    sizes: [
      { label: "Standard", dimensions: "17.0 × 14.0 × 4.2 cm", description: "Princess length and graduating necklaces.", suitableFor: "Princess & Graduating Necklaces" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Italian Micro-Suede or Velvet over 1200 GSM Core",
      innerMaterial: "Angled V-Contour Velvet Insert with Concealed Snaps",
      hingeClosure: "Heavy-Gauge Steel Spring Hinge",
      insertType: "V-Path Guide with Center Focal Recess",
      brandingPlacement: "Inner Lid Satin Foil Stamping",
      outerPackaging: "Rigid Two-Piece Sleeve",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "PATH", value: "V-CONTOUR GUIDE" },
      { label: "FOCUS", value: "CENTER DROP WELL" },
      { label: "CLOSURE", value: "HEAVY GAUGE" },
    ],
    customisationFeatures: [
      { title: "Companion Earring Slots", description: "Add twin earring holes at the upper corners of the V-insert." },
    ],
    faqs: [
      { q: "Does the V-insert prevent chain knotting?", a: "Yes, the tensioned channel holds the chain path firmly, eliminating entanglement." },
    ],
  },

  // ----------------------------------------------------
  // BANGLE BOXES
  // ----------------------------------------------------
  "bn-01-single-bangle": {
    id: "bn-01",
    slug: "bn-01-single-bangle",
    categorySlug: "bangle-boxes",
    categoryName: "Bangle Boxes",
    modelCode: "BN-01",
    name: "Single Bangle Box",
    subtitle: "PILLAR-STAND BANGLE PRESENTATION",
    heroHeadline: "Upright presentation showcasing the circular perfection of fine bangles.",
    shortDescription: "Deep square case featuring a central standing pillar cushion holding a single bangle upright and proud.",
    longDescription: "The BN-01 Single Bangle Box is engineered for rigid bangles, kadas, and eternity wristlets. Instead of laying flat, the bangle rests vertically on a central velvet pillar bolster.",
    images: [
      { src: "/assets/rigidd.jpeg", alt: "CASA DI BIZ BN-01 Single Bangle luxury box", label: "Bangle Showcase" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ BN-01 Open view", label: "Open Pillar" },
    ],
    sizes: [
      { label: "Standard", dimensions: "9.0 × 9.0 × 6.0 cm", description: "Single bangle up to 75mm diameter.", suitableFor: "Single Diamond Bangle" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Velvet or Fine Leatherette over 1400 GSM Board",
      innerMaterial: "Removable Central Standing Pillar Bolster",
      hingeClosure: "Spring Hinge with Solid Snap",
      insertType: "Vertical Pillar Form with Weighted Base",
      brandingPlacement: "Inner Lid Foil Stamping",
      outerPackaging: "Matching Two-Piece Outer Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "PRESENTATION", value: "VERTICAL PILLAR" },
      { label: "DEPTH", value: "60MM TALL BOX" },
      { label: "STABILITY", value: "WEIGHTED BASE" },
    ],
    customisationFeatures: [
      { title: "Pillar Diameter Options", description: "Bolsters calibrated for petite (55mm), medium (65mm), or large (75mm) bangle sizes." },
    ],
    faqs: [
      { q: "Is the central pillar removable?", a: "Yes, the bolster lifts out effortlessly for quick customer trying." },
    ],
  },

  "bn-02-double-bangle": {
    id: "bn-02",
    slug: "bn-02-double-bangle",
    categorySlug: "bangle-boxes",
    categoryName: "Bangle Boxes",
    modelCode: "BN-02",
    name: "Double Bangle Box",
    subtitle: "TWIN PAIR BANGLE SHOWCASE",
    heroHeadline: "Coordinated presentation for bridal bangle pairs and kada sets.",
    shortDescription: "Wide-format coffer with dual adjacent pillar bolsters displaying matched bangle pairs in parallel beauty.",
    longDescription: "The BN-02 Double Bangle Box is designed for matched pairs — traditional wedding kadas, diamond twin bangles, and stacking duos. Twin parallel bolsters showcase both pieces side by side.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ BN-02 Double Bangle box", label: "Double Bangle" },
      { src: "/assets/rigidd.jpeg", alt: "CASA DI BIZ BN-02 Open view", label: "Open View" },
    ],
    sizes: [
      { label: "Standard", dimensions: "14.0 × 9.0 × 6.0 cm", description: "Matched pair of bangles.", suitableFor: "Bangle Pairs & Kada Sets" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Nappa Leatherette",
      innerMaterial: "Twin Velvet Standing Bolsters with Central Divider",
      hingeClosure: "Dual Reinforced Steel Hinges",
      insertType: "Dual Parallel Pillar Cushions",
      brandingPlacement: "Inner Lid Centered Gold Stamping",
      outerPackaging: "Two-Piece Outer Box",
      moq: "100 Units",
      leadTime: "14–20 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "CAPACITY", value: "TWIN PAIR STAND" },
      { label: "DIVIDER", value: "PLUSH BARRIER" },
      { label: "HINGES", value: "DUAL REINFORCED" },
    ],
    customisationFeatures: [
      { title: "Removable Divider", description: "Convertible divider allowing the box to hold one wide cuff instead." },
    ],
    faqs: [
      { q: "Do the two bangles touch or scratch each other?", a: "No, a plush velvet central partition prevents any metal-on-metal contact." },
    ],
  },

  "bn-03-stacking-bangle": {
    id: "bn-03",
    slug: "bn-03-stacking-bangle",
    categorySlug: "bangle-boxes",
    categoryName: "Bangle Boxes",
    modelCode: "BN-03",
    name: "Stacking Bangle Box",
    subtitle: "MULTI-BANGLE BRIDAL ROLL CASE",
    heroHeadline: "Grand coffer designed for stacks of 4 to 12 bangles.",
    shortDescription: "Extended horizontal barrel roll accommodating full bangle stacks for bridal sets and festive collections.",
    longDescription: "The BN-03 Stacking Bangle Box caters to lavish bridal sets and multi-bangle stacks. A long cylindrical velvet roll is suspended between padded end-caps, holding multiple bangles securely.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ BN-03 Stacking Bangle box", label: "Stacking View" },
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ BN-03 Open case", label: "Open Roll" },
    ],
    sizes: [
      { label: "Standard", dimensions: "20.0 × 10.0 × 8.0 cm", description: "Holds 4 to 12 bangles.", suitableFor: "Full Bridal Bangle Sets" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Fine Leatherette over Heavy Rigid Core",
      innerMaterial: "Removable 18cm Velvet Bangle Barrel with Snap Retainers",
      hingeClosure: "Heavy-Duty Brass Spring Hinges",
      insertType: "Horizontal Cylindrical Roll with Locking End Wells",
      brandingPlacement: "Inner Lid Foil Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "15–22 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "CAPACITY", value: "4–12 BANGLES" },
      { label: "ROLL", value: "18CM VELVET BARREL" },
      { label: "LOCKING", value: "SNAP-FIT END CAPS" },
    ],
    customisationFeatures: [
      { title: "Segmented Barrel Rings", description: "Velvet spacer rings to separate individual precious bangles on the roll." },
    ],
    faqs: [
      { q: "How easy is it to load and unload bangles?", a: "The entire velvet barrel lifts out via silk ribbon tabs on either end." },
    ],
  },

  // ----------------------------------------------------
  // FULL SET BOXES
  // ----------------------------------------------------
  "fs-01-master-suite": {
    id: "fs-01",
    slug: "fs-01-master-suite",
    categorySlug: "full-set-boxes",
    categoryName: "Full Set Boxes",
    modelCode: "FS-01",
    name: "Master Suite Box",
    subtitle: "COORDINATED 4-PIECE JEWELLERY SUITE",
    heroHeadline: "Unite ring, earrings, bracelet, and necklace in one harmonious master coffer.",
    shortDescription: "A comprehensive 24×24cm luxury presentation case engineered with tailored cavities for a complete four-piece collection.",
    longDescription: "The FS-01 Master Suite Box is the pinnacle of multi-piece fine jewellery presentation. Featuring an expansive 24×24cm stage, it seamlessly integrates dedicated locations for a ring, an earring pair, a bracelet, and a central collier.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ FS-01 Master Suite luxury full set box in navy velvet", label: "Master Suite Hero" },
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ FS-01 Open presentation with complete set layout", label: "Open Presentation" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ FS-01 Exterior craftsmanship and gold foil", label: "Exterior Finish" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ FS-01 Interior cavities detail", label: "Cavity Detail" },
    ],
    sizes: [
      { label: "Master", dimensions: "24.0 × 24.0 × 5.5 cm", description: "Standard 4-piece suite (Necklace, Ring, Earrings, Bracelet).", suitableFor: "Complete 4-Piece Jewellery Suite" },
      { label: "Grand Master", dimensions: "28.0 × 28.0 × 6.5 cm", description: "Expanded layout for high-jewellery royal collections.", suitableFor: "High-Jewellery Royal Suites" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Plush Italian Velvet or Fine Grain Leatherette over 1600 GSM Rigid Core",
      innerMaterial: "Multi-Cavity High-Density EVA Foam lined with Anti-Tarnish Suede",
      hingeClosure: "Dual Heavy-Duty Brass Spring Hinges with Soft-Snap Sound Retention",
      insertType: "Integrated Cavities: Ring Slot, Dual Earring Holes, Bracelet Channel & Collier Bust",
      brandingPlacement: "Hot-Stamped Foil on Inner Satin Lid + Outer Lid Emblem",
      outerPackaging: "Protective Hardboard Slipcase with Silk Ribbon Pull",
      moq: "100 Units",
      leadTime: "15–22 Working Days",
      sampleAvailability: "Physical sample available on request",
    },
    highlights: [
      { label: "CAPACITY", value: "4-PIECE FULL SUITE" },
      { label: "CORE", value: "1600 GSM HEAVYWEIGHT" },
      { label: "HARDWARE", value: "DUAL HEAVY BRASS" },
    ],
    customisationFeatures: [
      { title: "Custom Cavity Mapping", description: "Laser-cut exact recesses matched to your specific collection samples." },
      { title: "Tiered Lift-Out Tray", description: "Optional secondary tier underneath for certificates, warranties, and cleaning cloths." },
      { title: "Key & Lock Hardware", description: "Optional functional antique gold or silver mortise lock with decorative key." },
    ],
    faqs: [
      { q: "Can the cavity layout be modified for a 3-piece set (e.g., no bracelet)?", a: "Yes, our CNC foam inserts are custom programmed to suit your exact suite composition." },
      { q: "Is the box heavy enough to feel ultra-luxurious?", a: "Yes, built with 1600 GSM board and solid brass hardware, the empty box weighs approximately 1.1 kg, conveying immense luxury." },
    ],
  },

  "fs-02-bridal-deluxe-suite": {
    id: "fs-02",
    slug: "fs-02-bridal-deluxe-suite",
    categorySlug: "full-set-boxes",
    categoryName: "Full Set Boxes",
    modelCode: "FS-02",
    name: "Bridal Deluxe Presentation Suite",
    subtitle: "ROYAL WEDDING PARURE SHOWCASE",
    heroHeadline: "An heirloom treasure box crafted for the most magnificent bridal celebrations.",
    shortDescription: "A grand multi-tier presentation chest featuring double doors, velvet drawers, and full parure staging.",
    longDescription: "The FS-02 Bridal Deluxe Presentation Suite is designed for regal wedding celebrations. Featuring a grand two-door front opening or hinged double-tier layout, it accommodates grand bridal necklaces, maang tikka, bangles, rings, and earrings in an unforgettable reveal.",
    images: [
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ FS-02 Bridal Deluxe Suite box", label: "Bridal Suite" },
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ FS-02 Open multi-piece presentation", label: "Open Parure" },
    ],
    sizes: [
      { label: "Grand Deluxe", dimensions: "30.0 × 26.0 × 8.0 cm", description: "Comprehensive bridal wedding parure chest.", suitableFor: "Full Bridal Wedding Parure" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Silk Velvet or Embroidered Fabric over Heavy Wood-Composite Core",
      innerMaterial: "Multi-Tier Velvet Trays with Gold Metallic Ribbon Pulls",
      hingeClosure: "Dual Brass Piano Hinges with Magnetic Front Closure",
      insertType: "Multi-Level Custom Cavity Trays for 6+ Pieces",
      brandingPlacement: "Custom Metal Emblem on Outer Doors + Inner Lid Foil",
      outerPackaging: "Lined Wooden Shipping Case with Foam Padding",
      moq: "50 Units",
      leadTime: "20–30 Working Days",
      sampleAvailability: "Custom prototype made to order",
    },
    highlights: [
      { label: "STRUCTURE", value: "MULTI-TIER CHEST" },
      { label: "DOORS", value: "DOUBLE FRONT REVEAL" },
      { label: "CAPACITY", value: "6+ PIECE PARURE" },
    ],
    customisationFeatures: [
      { title: "Embroidered Monograms", description: "Bespoke bullion wire crests or monograms embroidered on the outer lid." },
    ],
    faqs: [
      { q: "What is the MOQ for this grand bridal chest?", a: "MOQ starts from 50 units due to the handcrafted multi-tier carpentry." },
    ],
  },

  "fs-03-heritage-keepsake-coffer": {
    id: "fs-03",
    slug: "fs-03-heritage-keepsake-coffer",
    categorySlug: "full-set-boxes",
    categoryName: "Full Set Boxes",
    modelCode: "FS-03",
    name: "Heritage Keepsake Coffer",
    subtitle: "TIMELESS HEIRLOOM JEWEL CHEST",
    heroHeadline: "A permanent sanctuary for treasured jewellery collections across generations.",
    shortDescription: "Solid wood-reinforced coffer with removable modular velvet compartments and hand-polished hardware.",
    longDescription: "The FS-03 Heritage Keepsake Coffer serves as both an unboxing showcase and a lifelong jewellery box. Modular velvet compartments allow the owner to reconfigure slots over time.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ FS-03 Heritage Keepsake Coffer", label: "Heritage Hero" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ FS-03 Interior compartments", label: "Interior Compartments" },
    ],
    sizes: [
      { label: "Standard", dimensions: "26.0 × 20.0 × 7.0 cm", description: "Modular heirloom keepsake jewel chest.", suitableFor: "Multi-Piece Keepsake Collections" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    colours: STANDARD_BOX_COLOURS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Hand-Stitched Leatherette or Rich Velvet over Solid Wood Core",
      innerMaterial: "Removable Modular Micro-Suede Compartments",
      hingeClosure: "Heavy Brass Stop Hinges (90-Degree Hold)",
      insertType: "Reconfigurable Modular Grid with Ring Rows and Watch Bolster",
      brandingPlacement: "Laser-Engraved Brass Plaque on Interior Lid",
      outerPackaging: "Two-Piece Luxury Presentation Box",
      moq: "50 Units",
      leadTime: "18–25 Working Days",
      sampleAvailability: "Available",
    },
    highlights: [
      { label: "CORE", value: "SOLID WOOD FRAME" },
      { label: "INTERIOR", value: "MODULAR GRID" },
      { label: "PLAQUE", value: "ENGRAVED BRASS" },
    ],
    customisationFeatures: [
      { title: "Engraved Plaque Personalisation", description: "Individual serial numbers or brand plaques laser etched onto solid brass." },
    ],
    faqs: [
      { q: "Are the internal dividers adjustable?", a: "Yes, the modular dividers can be repositioned to fit watches, bangles, or necklaces." },
    ],
  },
};

// Helper queries
export function getAllBoxCategories(): BoxCategory[] {
  return Object.values(BOX_CATEGORIES_DATA);
}

export function getBoxCategory(slug: string): BoxCategory | undefined {
  return BOX_CATEGORIES_DATA[slug];
}

export function getAllBoxModels(): BoxModel[] {
  return Object.values(BOX_MODELS_DATA);
}

export function getBoxModel(categorySlug: string, modelSlug: string): BoxModel | undefined {
  const model = BOX_MODELS_DATA[modelSlug];
  if (model && model.categorySlug === categorySlug) {
    return model;
  }
  return undefined;
}

export function getRelatedBoxModels(currentModelSlug: string, categorySlug: string, limit = 4): BoxModel[] {
  const category = BOX_CATEGORIES_DATA[categorySlug];
  if (!category) return [];

  const categoryModels = category.modelSlugs
    .filter((slug) => slug !== currentModelSlug)
    .map((slug) => BOX_MODELS_DATA[slug])
    .filter(Boolean);

  if (categoryModels.length >= limit) {
    return categoryModels.slice(0, limit);
  }

  // If category has fewer models, supplement with models from other categories
  const otherModels = Object.values(BOX_MODELS_DATA).filter(
    (m) => m.slug !== currentModelSlug && m.categorySlug !== categorySlug
  );

  return [...categoryModels, ...otherModels].slice(0, limit);
}
