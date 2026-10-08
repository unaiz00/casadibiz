export interface BoxSize {
  label: string;
  dimensions: string;
  description: string;
  suitableFor?: string;
}

export interface BoxMaterialOption {
  id: string;
  name: string;
  image: string;
  description: string;
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
  name: string;
  collection: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  heroHeadline: string;
  images: BoxImage[];
  materialImages?: Record<string, string>;
  sizes: BoxSize[];
  materials: BoxMaterialOption[];
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

// ====================================================
// CENTRAL MATERIAL DATA STRUCTURE
// ====================================================
export const BOX_MATERIAL_REGISTRY: Record<string, BoxMaterialOption> = {
  velvet: {
    id: "velvet",
    name: "Velvet",
    image: "/assets/materials/velvet.png",
    description: "Plush silk-blend velvet with rich tactile pile and soft luster.",
  },
  suede: {
    id: "suede",
    name: "Suede",
    image: "/assets/materials/seude.png",
    description: "Soft micro-suede delivering refined matte elegance and anti-scratch protection.",
  },
  microfiber: {
    id: "microfiber",
    name: "Microfiber",
    image: "/assets/materials/microfiber.png",
    description: "Ultra-fine weave Italian microfiber offering modern luxury and longevity.",
  },
  leatherette: {
    id: "leatherette",
    name: "Leatherette",
    image: "/assets/materials/leather.png",
    description: "Smooth grain vegan leather with subtle sheen and structured durability.",
  },
  "special-paper": {
    id: "special-paper",
    name: "Special Paper",
    image: "/assets/materials/specialpaper.png",
    description: "Pulp-dyed luxury fine paperboard with tactile woven and linen textures.",
  },
  "textured-paper": {
    id: "textured-paper",
    name: "Textured Paper",
    image: "/assets/materials/texturedpaper.png",
    description: "Embossed geometric and linen grain paper stock for contemporary minimalism.",
  },
  "brown-crocodile": {
    id: "brown-crocodile",
    name: "Brown Crocodile Texture",
    // TEMPORARY PLACEHOLDER — replace with dedicated material image later
    image: "/assets/materials/leather.png",
    description: "Embossed exotic crocodile relief leatherette with distinctive luxury grain.",
  },
  "matt-grey-paint": {
    id: "matt-grey-paint",
    name: "Matt Grey Paint",
    // TEMPORARY PLACEHOLDER — replace with dedicated material image later
    image: "/assets/materials/whitepaper.png",
    description: "Sleek contemporary lacquer-coated surface with smooth architectural finish.",
  },
  "hairy-velvet": {
    id: "hairy-velvet",
    name: "Hairy Velvet",
    // TEMPORARY PLACEHOLDER — replace with dedicated material image later
    image: "/assets/materials/velvet.png",
    description: "High-density long-pile velvet delivering dramatic visual richness.",
  },
  "soft-touch": {
    id: "soft-touch",
    name: "Cartier / Soft Touch",
    // TEMPORARY PLACEHOLDER — replace with dedicated material image later
    image: "/assets/materials/microfiber.png",
    description: "Fine nappa soft-touch leatherette with ultra-smooth tactile feel.",
  },
};

// Supported Standard Catalogue Materials (matches the 6 core material visual cards)
export const STANDARD_BOX_MATERIALS: BoxMaterialOption[] = [
  BOX_MATERIAL_REGISTRY.velvet,
  BOX_MATERIAL_REGISTRY.suede,
  BOX_MATERIAL_REGISTRY.microfiber,
  BOX_MATERIAL_REGISTRY.leatherette,
  BOX_MATERIAL_REGISTRY["special-paper"],
  BOX_MATERIAL_REGISTRY["textured-paper"],
];

// Supported Catalogue Finishes
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
    name: "Blind Embossing",
    description: "Deep dimensional debossing without foil, highlighting the natural material texture.",
  },
  {
    id: "metallic-sticker",
    name: "Metallic Sticker",
    description: "Electroformed gold or nickel-silver micro-metal relief crest badge adhered flush.",
  },
  {
    id: "screen-printing",
    name: "Screen Printing",
    description: "Crisp multi-pigment silkscreen branding for intricate line art and typography.",
  },
  {
    id: "debossing",
    name: "Debossing",
    description: "Precision recessed impression stamped directly into the rigid core structure.",
  },
];

export const BOX_CATEGORIES_DATA: Record<string, BoxCategory> = {
  "ring-boxes": {
    slug: "ring-boxes",
    name: "Ring Boxes",
    headline: "Bespoke jewellery boxes crafted for rings in distinctive materials and sizes.",
    shortDescription: "Precision plush inserts and spring closures engineered for fine rings.",
    heroImage: "/assets/boxim.jpeg",
    modelSlugs: ["ring-box"],
  },
  "earring-boxes": {
    slug: "earring-boxes",
    name: "Earring Boxes",
    headline: "Bespoke jewellery boxes crafted for earrings in distinctive materials and sizes.",
    shortDescription: "Custom fitted inserts engineered for fine studs, drops, and hoops.",
    heroImage: "/assets/imsec2.jpeg",
    modelSlugs: ["earring-box"],
  },
  "pendant-boxes": {
    slug: "pendant-boxes",
    name: "Pendant Boxes",
    headline: "Bespoke jewellery boxes crafted for pendants and earrings in distinctive materials and sizes.",
    shortDescription: "Balanced proportions and plush cradles for fine pendants.",
    heroImage: "/assets/allim.jpeg",
    modelSlugs: ["pendant-box", "er-pn-box"],
  },
  "chain-boxes": {
    slug: "chain-boxes",
    name: "Chain Boxes",
    headline: "Bespoke jewellery boxes crafted for chains and pendants in distinctive materials and sizes.",
    shortDescription: "Elongated presentation cases engineered to display fine chains securely.",
    heroImage: "/assets/goodimm.jpeg",
    modelSlugs: ["chain-box", "chain-pn-box"],
  },
  "bracelet-boxes": {
    slug: "bracelet-boxes",
    name: "Bracelet Boxes",
    headline: "Bespoke jewellery boxes crafted for bracelets in distinctive materials and sizes.",
    shortDescription: "Refined linear presentation cases engineered for fine bracelets.",
    heroImage: "/assets/imsec1.jpeg",
    modelSlugs: ["bracelet-box", "bracelet-chain-box"],
  },
  "necklace-boxes": {
    slug: "necklace-boxes",
    name: "Necklace Boxes",
    headline: "Bespoke jewellery boxes crafted for necklaces in distinctive materials and sizes.",
    shortDescription: "Luxury presentation cases engineered to cradle statement colliers and chains.",
    heroImage: "/assets/allllllimm.jpeg",
    modelSlugs: ["necklace-box", "necklace-set-box"],
  },
  "bangle-boxes": {
    slug: "bangle-boxes",
    name: "Bangle Boxes",
    headline: "Bespoke jewellery boxes crafted for bangles in distinctive materials and sizes.",
    shortDescription: "Structured boxes with central pillar cushions for rigid bangles.",
    heroImage: "/assets/rigidd.jpeg",
    modelSlugs: ["bangle-box", "er-bangle-box"],
  },
  "full-set-boxes": {
    slug: "full-set-boxes",
    name: "Jewellery Set Boxes",
    headline: "Bespoke jewellery boxes crafted for coordinated jewellery suites in distinctive materials and sizes.",
    shortDescription: "Multi-compartment bespoke layouts for coordinated jewellery sets.",
    heroImage: "/assets/allimages.jpeg",
    modelSlugs: ["set-box", "full-set-box"],
  },
};

export const BOX_MODELS_DATA: Record<string, BoxModel> = {
  // 1. RING BOX
  "ring-box": {
    id: "ring-box",
    slug: "ring-box",
    categorySlug: "ring-boxes",
    categoryName: "Ring Boxes",
    name: "Ring Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Ring Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Rings.",
    shortDescription: "Bespoke jewellery packaging designed for ring presentation across multiple catalogue dimensions.",
    longDescription: "Hand-crafted bespoke ring box engineered with anti-tarnish interior linings, precision-hinged rigid structure, and tailored ring inserts. Available across a comprehensive range of catalogue dimensions to match your brand requirements.",
    images: [
      { src: "/assets/ring/ring_hairyvelvet.jpeg", alt: "CASA DI BIZ Ring Box - Velvet Edition" },
      { src: "/assets/ring/ring_suede.jpeg", alt: "CASA DI BIZ Ring Box - Suede Edition" },
      { src: "/assets/ring/ring_microfiber.jpeg", alt: "CASA DI BIZ Ring Box - Microfiber Edition" },
      { src: "/assets/ring/ring_premium_leather.jpeg", alt: "CASA DI BIZ Ring Box - Premium Leatherette Edition" },
      { src: "/assets/ring/premiumpaper_suede_ring.jpeg", alt: "CASA DI BIZ Ring Box - Special Paper Edition" },
      { src: "/assets/ring/ring_special_premium_texture.jpeg", alt: "CASA DI BIZ Ring Box - Textured Paper Edition" },
      { src: "/assets/ring/premium_microfiber_ring.jpeg", alt: "CASA DI BIZ Ring Box - Premium Microfiber Edition" },
      { src: "/assets/ring/ring_blueglossy.jpeg", alt: "CASA DI BIZ Ring Box - Glossy Lacquer Edition" },
      { src: "/assets/ring/ring_crocodile.jpeg", alt: "CASA DI BIZ Ring Box - Crocodile Texture Edition" },
      { src: "/assets/ring/ring_blue_crocodile.jpeg", alt: "CASA DI BIZ Ring Box - Blue Crocodile Edition" },
      { src: "/assets/ring/ring_matt grey_paint.jpeg", alt: "CASA DI BIZ Ring Box - Matt Grey Paint Edition" },
      { src: "/assets/ring/ring_specialsoft.jpeg", alt: "CASA DI BIZ Ring Box - Soft Touch Edition" },
    ],
    materialImages: {
      velvet: "/assets/ring/ring_hairyvelvet.jpeg",
      suede: "/assets/ring/ring_suede.jpeg",
      microfiber: "/assets/ring/ring_microfiber.jpeg",
      leatherette: "/assets/ring/ring_premium_leather.jpeg",
      "special-paper": "/assets/ring/premiumpaper_suede_ring.jpeg",
      "textured-paper": "/assets/ring/ring_special_premium_texture.jpeg",
      "brown-crocodile": "/assets/ring/ring_crocodile.jpeg",
      "matt-grey-paint": "/assets/ring/ring_matt grey_paint.jpeg",
      "hairy-velvet": "/assets/ring/ring_hairyvelvet.jpeg",
      "soft-touch": "/assets/ring/ring_specialsoft.jpeg",
    },
    sizes: [
      { label: "5.5 × 5.5 × 5 cm", dimensions: "5.5 × 5.5 × 5 cm", description: "Standard Solitaire & Petite Ring Size" },
      { label: "7 × 7 × 6 cm", dimensions: "7 × 7 × 6 cm", description: "Medium Solitaire & Band Presentation Size" },
      { label: "8 × 8 × 7 cm", dimensions: "8 × 8 × 7 cm", description: "Grand / High-Profile Statement Ring Size" },
      { label: "5 × 5 × 4.5 cm", dimensions: "5 × 5 × 4.5 cm", description: "Compact Classic Ring Size" },
      { label: "5.9 × 5.4 × 5 cm", dimensions: "5.9 × 5.4 × 5 cm", description: "Contour Ring Size" },
      { label: "6 × 6 × 4.5 cm", dimensions: "6 × 6 × 4.5 cm", description: "Low-Profile Band Size" },
      { label: "6 × 6 × 6 cm", dimensions: "6 × 6 × 6 cm", description: "Cube Ring Box Size" },
      { label: "6.5 × 6.5 × 5.4 cm", dimensions: "6.5 × 6.5 × 5.4 cm", description: "Structured Medium Ring Size" },
      { label: "6.5 × 6.5 × 7 cm", dimensions: "6.5 × 6.5 × 7 cm", description: "Elevated Ring Case Size" },
      { label: "6.5 × 7.5 × 5 cm", dimensions: "6.5 × 7.5 × 5 cm", description: "Rectangular Ring Case Size" },
      { label: "7 × 7 × 5 cm", dimensions: "7 × 7 × 5 cm", description: "Standard Square Ring Size" },
      { label: "5.1 × 5.1 × 4.1 cm", dimensions: "5.1 × 5.1 × 4.1 cm", description: "Miniature Ring Size" },
      { label: "8 × 8 × 6 cm", dimensions: "8 × 8 × 6 cm", description: "Wide Band & Twin Ring Size" },
      { label: "10 × 10 × 8 cm", dimensions: "10 × 10 × 8 cm", description: "Statement / Multi-Ring Grand Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Single & Double Ring Insert Pads",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "RING BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Custom Dimensions", description: "Manufactured to exact jewel height and band specifications." },
      { title: "Material & Colour", description: "Customised to your exact brand palette and texture requirements." },
      { title: "Branding Finishes", description: "Gold foiling, silver foiling, blind embossing, or 3D metal crests." },
    ],
    faqs: [
      { q: "Can we order custom sizes not listed above?", a: "Yes, bespoke tooling and custom mold dimensions can be manufactured for your brand." },
      { q: "How are colours matched?", a: "Colours are custom matched to your brand PANTONE or textile swatch." },
    ],
  },

  // 2. EARRING BOX
  "earring-box": {
    id: "earring-box",
    slug: "earring-box",
    categorySlug: "earring-boxes",
    categoryName: "Earring Boxes",
    name: "Earring Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Earring Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Earrings.",
    shortDescription: "Bespoke jewellery packaging designed for stud, drop, hoop, and statement earrings across multiple catalogue dimensions.",
    longDescription: "Hand-crafted bespoke earring box engineered with anti-tarnish interior linings, precision tension tabs, and plush insert pads tailored for studs, chandelier drops, and fine earrings.",
    images: [
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ Earring Box", label: "Primary View" },
      { src: "/assets/boxim.jpeg", alt: "CASA DI BIZ Earring Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "10 × 10 × 6 cm", dimensions: "10 × 10 × 6 cm", description: "Standard Stud & Drop Earring Size" },
      { label: "12 × 12 × 7 cm", dimensions: "12 × 12 × 7 cm", description: "Earring S Size" },
      { label: "15 × 15 × 7 cm", dimensions: "15 × 15 × 7 cm", description: "Earring L / Grand Drop Earring Size" },
      { label: "8 × 10 × 5 cm", dimensions: "8 × 10 × 5 cm", description: "Compact Rectangular Earring Size" },
      { label: "8 × 8 × 7 cm", dimensions: "8 × 8 × 7 cm", description: "Square Earring Case Size" },
      { label: "10 × 10 × 7 cm", dimensions: "10 × 10 × 7 cm", description: "Deep Profile Earring Size" },
      { label: "12 × 12 × 6 cm", dimensions: "12 × 12 × 6 cm", description: "Slim Square Earring Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Stud Slots, Drop Hooks & Multi-Hole Pads",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "EARRING BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Insert Geometry", description: "Pre-drilled holes, hidden drop slots, and hoop supports tailored to your collection." },
      { title: "Material & Colour", description: "Customised to your exact brand palette and texture requirements." },
    ],
    faqs: [
      { q: "Can the insert support both studs and drop earrings?", a: "Yes, convertible and dual-purpose insert layouts are fully supported." },
    ],
  },

  // 3. PENDANT BOX
  "pendant-box": {
    id: "pendant-box",
    slug: "pendant-box",
    categorySlug: "pendant-boxes",
    categoryName: "Pendant Boxes",
    name: "Pendant Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Pendant Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Pendants.",
    shortDescription: "Bespoke jewellery packaging engineered for solitary and statement pendants with fitted retention channels.",
    longDescription: "Hand-crafted bespoke pendant box engineered with anti-tarnish interior cushions, hidden chain wells, and precision retaining clips for flawless presentation.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ Pendant Box", label: "Primary View" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ Pendant Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "10 × 10 × 6 cm", dimensions: "10 × 10 × 6 cm", description: "Standard Pendant Size" },
      { label: "8 × 10 × 5 cm", dimensions: "8 × 10 × 5 cm", description: "Rectangular Pendant Size" },
      { label: "8 × 10 × 4 cm", dimensions: "8 × 10 × 4 cm", description: "Slim Pendant Size" },
      { label: "9 × 9 × 5 cm", dimensions: "9 × 9 × 5 cm", description: "Square Medallion Size" },
      { label: "10 × 10 × 5 cm", dimensions: "10 × 10 × 5 cm", description: "Deep Cushion Pendant Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Pendant Hook with Rear Chain Cavity",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "PENDANT BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Chain Well", description: "Under-pad cavity prevents chain tangling and surface friction during transit." },
    ],
    faqs: [
      { q: "Is sample availability offered?", a: "Yes, prototypes with your selected dimensions and branding are available." },
    ],
  },

  // 4. CHAIN BOX
  "chain-box": {
    id: "chain-box",
    slug: "chain-box",
    categorySlug: "chain-boxes",
    categoryName: "Chain Boxes",
    name: "Chain Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Chain & Collar Link Case",
    heroHeadline: "Bespoke Jewellery Box for Chains.",
    shortDescription: "Elongated presentation cases engineered to display fine chains and collar links securely.",
    longDescription: "Hand-crafted elongated chain box featuring tensioned interior channels and anti-tarnish lining to ensure fine necklaces and chains remain taut and protected.",
    images: [
      { src: "/assets/chain/chainpn1_velvetchamgne.jpeg", alt: "CASA DI BIZ Chain Box - Velvet Edition" },
      { src: "/assets/chain/premiumpaper_suede_chain.jpeg", alt: "CASA DI BIZ Chain Box - Suede Edition" },
      { src: "/assets/chain/chain_microfiber.jpeg", alt: "CASA DI BIZ Chain Box - Microfiber Edition" },
      { src: "/assets/chain/chain_premiumleather.jpeg", alt: "CASA DI BIZ Chain Box - Premium Leatherette Edition" },
      { src: "/assets/chain/premium_microfiber_chain.jpeg", alt: "CASA DI BIZ Chain Box - Special Paper Edition" },
      { src: "/assets/chain/chain__special_premium_texture.jpeg", alt: "CASA DI BIZ Chain Box - Textured Paper Edition" },
      { src: "/assets/chain/chain_specialsoft.jpeg", alt: "CASA DI BIZ Chain Box - Soft Touch Edition" },
      { src: "/assets/chain/chain__matt grey_paint.jpeg", alt: "CASA DI BIZ Chain Box - Matt Grey Paint Edition" },
      { src: "/assets/chain/chainp_velvetchamgne.jpeg", alt: "CASA DI BIZ Chain Box - Velvet Champagne Closed" },
      { src: "/assets/chain/chainpn2_velvetchamgne.jpeg", alt: "CASA DI BIZ Chain Box - Velvet Champagne Open" },
    ],
    materialImages: {
      velvet: "/assets/chain/chainpn1_velvetchamgne.jpeg",
      suede: "/assets/chain/premiumpaper_suede_chain.jpeg",
      microfiber: "/assets/chain/chain_microfiber.jpeg",
      leatherette: "/assets/chain/chain_premiumleather.jpeg",
      "special-paper": "/assets/chain/premium_microfiber_chain.jpeg",
      "textured-paper": "/assets/chain/chain__special_premium_texture.jpeg",
      "matt-grey-paint": "/assets/chain/chain__matt grey_paint.jpeg",
      "soft-touch": "/assets/chain/chain_specialsoft.jpeg",
    },
    sizes: [
      { label: "9 × 13 × 7 cm", dimensions: "9 × 13 × 7 cm", description: "Compact Chain & Link Size" },
      { label: "22 × 5.5 × 3 cm", dimensions: "22 × 5.5 × 3 cm", description: "Linear Fine Chain Size" },
      { label: "24 × 6 × 4 cm", dimensions: "24 × 6 × 4 cm", description: "Medium Chain & Link Size" },
      { label: "26 × 7 × 4 cm", dimensions: "26 × 7 × 4 cm", description: "Grand Elongated Chain Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Dual End Tension Tabs with Velvet Channel",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "CHAIN BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Linear Tensioning", description: "Elasticated tabs and clips hold delicate links without pinching." },
    ],
    faqs: [
      { q: "What materials work best for long chain boxes?", a: "Premium Suede and Microfiber provide optimal grip and luxurious contrast." },
    ],
  },

  // 5. BRACELET BOX
  "bracelet-box": {
    id: "bracelet-box",
    slug: "bracelet-box",
    categorySlug: "bracelet-boxes",
    categoryName: "Bracelet Boxes",
    name: "Bracelet Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Bracelet Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Bracelets.",
    shortDescription: "Refined linear presentation cases engineered for tennis bracelets, link chains, and cuff pieces.",
    longDescription: "Hand-crafted bespoke bracelet box with custom fitted clips and plush recessed channels designed for tennis bracelets, structured cuffs, and link pieces.",
    images: [
      { src: "/assets/bracelet/bracelet__hairyvelvet.jpeg", alt: "CASA DI BIZ Bracelet Box - Velvet Edition" },
      { src: "/assets/bracelet/bracelet_suede.jpeg", alt: "CASA DI BIZ Bracelet Box - Suede Edition" },
      { src: "/assets/bracelet/bracelet_microfiber.jpeg", alt: "CASA DI BIZ Bracelet Box - Microfiber Edition" },
      { src: "/assets/bracelet/bracelet_premiumleather.jpeg", alt: "CASA DI BIZ Bracelet Box - Premium Leatherette Edition" },
      { src: "/assets/bracelet/premiumpaper_suede_bracelet.jpeg", alt: "CASA DI BIZ Bracelet Box - Special Paper Edition" },
      { src: "/assets/bracelet/premium_microfiber_bracelet.jpeg", alt: "CASA DI BIZ Bracelet Box - Textured Paper Edition" },
      { src: "/assets/bracelet/bracelet_specialsoft.jpeg", alt: "CASA DI BIZ Bracelet Box - Soft Touch Edition" },
      { src: "/assets/bracelet/bracelet_crocodile.jpeg", alt: "CASA DI BIZ Bracelet Box - Crocodile Texture Edition" },
      { src: "/assets/bracelet/bracelet_blue_crocodile.jpeg", alt: "CASA DI BIZ Bracelet Box - Blue Crocodile Edition" },
      { src: "/assets/bracelet/braceletvelvetchamgne3.jpeg", alt: "CASA DI BIZ Bracelet Box - Champagne Velvet Edition" },
      { src: "/assets/bracelet/braceletvelvetchamgne.jpeg", alt: "CASA DI BIZ Bracelet Box - Champagne Velvet Open" },
      { src: "/assets/bracelet/braceletvelvetchamgne2.jpeg", alt: "CASA DI BIZ Bracelet Box - Champagne Velvet Closed" },
    ],
    materialImages: {
      velvet: "/assets/bracelet/bracelet__hairyvelvet.jpeg",
      suede: "/assets/bracelet/bracelet_suede.jpeg",
      microfiber: "/assets/bracelet/bracelet_microfiber.jpeg",
      leatherette: "/assets/bracelet/bracelet_premiumleather.jpeg",
      "special-paper": "/assets/bracelet/premiumpaper_suede_bracelet.jpeg",
      "textured-paper": "/assets/bracelet/premium_microfiber_bracelet.jpeg",
      "brown-crocodile": "/assets/bracelet/bracelet_crocodile.jpeg",
      "blue-crocodile": "/assets/bracelet/bracelet_blue_crocodile.jpeg",
      "hairy-velvet": "/assets/bracelet/bracelet__hairyvelvet.jpeg",
      "soft-touch": "/assets/bracelet/bracelet_specialsoft.jpeg",
    },
    sizes: [
      { label: "22 × 6.5 × 5 cm", dimensions: "22 × 6.5 × 5 cm", description: "Standard Tennis Bracelet Size" },
      { label: "23 × 7 × 3.5 cm", dimensions: "23 × 7 × 3.5 cm", description: "Slimline Bracelet Size" },
      { label: "22 × 5.5 × 3 cm", dimensions: "22 × 5.5 × 3 cm", description: "Compact Bracelet Size" },
      { label: "26 × 8 × 7 cm", dimensions: "26 × 8 × 7 cm", description: "Grand / Wide Cuff Bracelet Size" },
      { label: "24 × 6.5 × 4.5 cm", dimensions: "24 × 6.5 × 4.5 cm", description: "Structured Link Bracelet Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Dual Clip Retaining Pad",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "BRACELET BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Bespoke Fasteners", description: "Select from hidden metal spring clips, elastic ribbon tabs, or magnetic bolsters." },
    ],
    faqs: [
      { q: "Can this accommodate wide cuff bracelets?", a: "Yes, the 26 × 8 × 7 cm configuration accommodates wider cuffs comfortably." },
    ],
  },

  // 6. BANGLE BOX
  "bangle-box": {
    id: "bangle-box",
    slug: "bangle-box",
    categorySlug: "bangle-boxes",
    categoryName: "Bangle Boxes",
    name: "Bangle Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Bangle Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Bangles.",
    shortDescription: "Structured boxes featuring central pillar supports engineered for single, pair, and stacking bangles.",
    longDescription: "Hand-crafted bespoke bangle box engineered with custom circular roll bolsters, rigid framework, and anti-tarnish micro-suede linings.",
    images: [
      { src: "/assets/bangle/bangle_hairyvelvet.jpeg", alt: "CASA DI BIZ Bangle Box - Velvet Edition" },
      { src: "/assets/bangle/bangle_suede.jpeg", alt: "CASA DI BIZ Bangle Box - Suede Edition" },
      { src: "/assets/bangle/bangle_microfiber.jpeg", alt: "CASA DI BIZ Bangle Box - Microfiber Edition" },
      { src: "/assets/bangle/bangle_crocodile.jpeg", alt: "CASA DI BIZ Bangle Box - Crocodile Texture Edition" },
      { src: "/assets/bangle/premium_microfiber_bangle.jpeg", alt: "CASA DI BIZ Bangle Box - Special Paper Edition" },
      { src: "/assets/bangle/bangle__special_premium_texture.jpeg", alt: "CASA DI BIZ Bangle Box - Textured Paper Edition" },
      { src: "/assets/bangle/bangle_blueglossy.jpeg", alt: "CASA DI BIZ Bangle Box - Glossy Lacquer Edition" },
      { src: "/assets/bangle/bangle__matt grey_paint.jpeg", alt: "CASA DI BIZ Bangle Box - Matt Grey Paint Edition" },
    ],
    materialImages: {
      velvet: "/assets/bangle/bangle_hairyvelvet.jpeg",
      suede: "/assets/bangle/bangle_suede.jpeg",
      microfiber: "/assets/bangle/bangle_microfiber.jpeg",
      leatherette: "/assets/bangle/bangle_crocodile.jpeg",
      "special-paper": "/assets/bangle/premium_microfiber_bangle.jpeg",
      "textured-paper": "/assets/bangle/bangle__special_premium_texture.jpeg",
      "brown-crocodile": "/assets/bangle/bangle_crocodile.jpeg",
      "matt-grey-paint": "/assets/bangle/bangle__matt grey_paint.jpeg",
      "hairy-velvet": "/assets/bangle/bangle_hairyvelvet.jpeg",
    },
    sizes: [
      { label: "10 × 10 × 8 cm", dimensions: "10 × 10 × 8 cm", description: "Standard Single Bangle Size" },
      { label: "12 × 12 × 8 cm", dimensions: "12 × 12 × 8 cm", description: "Large / Wide Bangle Size" },
      { label: "10 × 10 × 4 cm", dimensions: "10 × 10 × 4 cm", description: "Compact Bangle Size" },
      { label: "18 × 10.5 × 4.5 cm", dimensions: "18 × 10.5 × 4.5 cm", description: "T Bangle Size" },
      { label: "12 × 12 × 9 cm", dimensions: "12 × 12 × 9 cm", description: "Deep Twin Bangle Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Removable Plush Central Cylinder Roll",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "BANGLE BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Removable Cylinder", description: "Easy slip-on core cushion facilitates effortless display and packaging." },
    ],
    faqs: [
      { q: "Is the central bolster removable?", a: "Yes, the padded roll lifts out completely for effortless jewellery positioning." },
    ],
  },

  // 7. NECKLACE BOX
  "necklace-box": {
    id: "necklace-box",
    slug: "necklace-box",
    categorySlug: "necklace-boxes",
    categoryName: "Necklace Boxes",
    name: "Necklace Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Necklace Presentation Case",
    heroHeadline: "Bespoke Jewellery Box for Necklaces.",
    shortDescription: "Luxury presentation cases engineered to cradle statement colliers, chokers, and princess-cut necklaces.",
    longDescription: "Hand-crafted bespoke necklace box engineered with contoured bust inserts, perimeter retention tabs, and anti-tarnish lining to present statement jewellery with grandeur.",
    images: [
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ Necklace Box", label: "Primary View" },
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ Necklace Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "11.5 × 16 × 3.5 cm", dimensions: "11.5 × 16 × 3.5 cm", description: "Necklace S Size" },
      { label: "19 × 22 × 4 cm", dimensions: "19 × 22 × 4 cm", description: "Necklace M Size" },
      { label: "20 × 24 × 5 cm", dimensions: "20 × 24 × 5 cm", description: "Necklace Standard Size" },
      { label: "21 × 21 × 7 cm", dimensions: "21 × 21 × 7 cm", description: "Square Collier Necklace Size" },
      { label: "22 × 26 × 6 cm", dimensions: "22 × 26 × 6 cm", description: "Grand Statement Necklace Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Contoured V-Pad & Hidden Collar Clips",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "NECKLACE BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Contoured Neck Pad", description: "Anatomically curved inner pad showcases necklace pendants at the ideal viewing angle." },
    ],
    faqs: [
      { q: "Can the necklace box support heavy bridal colliers?", a: "Yes, high-density rigid core structure supports heavier gemstone pieces securely." },
    ],
  },

  // 8. NECKLACE SET BOX
  "necklace-set-box": {
    id: "necklace-set-box",
    slug: "necklace-set-box",
    categorySlug: "necklace-boxes",
    categoryName: "Necklace Boxes",
    name: "Necklace Set Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Necklace & Earring Suite Case",
    heroHeadline: "Bespoke Jewellery Box for Necklace Sets.",
    shortDescription: "Grand multi-compartment presentation cases engineered for necklace and matching earring suites.",
    longDescription: "Hand-crafted bespoke necklace set box featuring a contoured central necklace pad and flanking earring cradles engineered for cohesive bridal and high-jewellery sets.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ Necklace Set Box", label: "Primary View" },
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ Necklace Set Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "20 × 30 × 6 cm", dimensions: "20 × 30 × 6 cm", description: "Necklace Set (L) Size" },
      { label: "23 × 40 × 8 cm", dimensions: "23 × 40 × 8 cm", description: "Necklace Set (XL) Grand Size" },
      { label: "25 × 35 × 7 cm", dimensions: "25 × 35 × 7 cm", description: "Bespoke Suite Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Necklace Pad with Dual Flanking Earring Slots",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "NECKLACE SET BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Harmonized Suite Insert", description: "Simultaneous positioning for statement necklace and matching drop earrings." },
    ],
    faqs: [
      { q: "Can custom earring placements be configured?", a: "Yes, positioning can be altered to fit longer chandeliers or studs." },
    ],
  },

  // 9. SET BOX
  "set-box": {
    id: "set-box",
    slug: "set-box",
    categorySlug: "full-set-boxes",
    categoryName: "Jewellery Set Boxes",
    name: "Set Box",
    collection: "Bespoke Packaging",
    subtitle: "Bespoke Multi-Piece Jewellery Suite Box",
    heroHeadline: "Bespoke Jewellery Box for Coordinated Sets.",
    shortDescription: "Coordinated presentation cases engineered for multi-piece jewellery collections.",
    longDescription: "Hand-crafted bespoke set box with multi-compartment tailored layouts for presenting coordinated necklace, earring, and ring collections.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ Set Box", label: "Primary View" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ Set Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "18 × 24 × 6 cm", dimensions: "18 × 24 × 6 cm", description: "Set Box (S) Size" },
      { label: "22 × 28 × 7 cm", dimensions: "22 × 28 × 7 cm", description: "Set Box (M) Size" },
      { label: "26 × 32 × 7.5 cm", dimensions: "26 × 32 × 7.5 cm", description: "Set Box (L) Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "3-Piece Suite Insert (Necklace, Earrings, Ring)",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "SET BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Multi-Piece Layout", description: "Designed to showcase 2-to-3 piece suites in a single unified presentation." },
    ],
    faqs: [
      { q: "Is custom insert cutting available?", a: "Yes, we CNC-cut foam inserts to your exact jewellery pieces." },
    ],
  },

  // 10. FULL SET BOX
  "full-set-box": {
    id: "full-set-box",
    slug: "full-set-box",
    categorySlug: "full-set-boxes",
    categoryName: "Jewellery Set Boxes",
    name: "Full Set Box",
    collection: "Bespoke Packaging",
    subtitle: "Grand Master Suite Jewellery Chest",
    heroHeadline: "Bespoke Full Set Jewellery Chest.",
    shortDescription: "Master bespoke jewellery chests engineered for comprehensive 4-piece and 5-piece high-jewellery collections.",
    longDescription: "Master bespoke jewellery chest featuring custom-milled recessed cavities for necklace, earrings, ring, and bangle or bracelet suites with opulent anti-tarnish lining.",
    images: [
      { src: "/assets/allimages.jpeg", alt: "CASA DI BIZ Full Set Box", label: "Primary View" },
      { src: "/assets/allllllimm.jpeg", alt: "CASA DI BIZ Full Set Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "27 × 34 × 8 cm", dimensions: "27 × 34 × 8 cm", description: "Standard Full Set Box Size" },
      { label: "28 × 36 × 8.5 cm", dimensions: "28 × 36 × 8.5 cm", description: "Grand Suite Size" },
      { label: "30 × 40 × 9 cm", dimensions: "30 × 40 × 9 cm", description: "Master Chest Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "4-Piece Suite Insert (Necklace, Earrings, Ring, Bangle)",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "FULL SET BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Bridal & Master Chest Layout", description: "Full 4-to-5 piece configuration including bangle or bracelet slot." },
    ],
    faqs: [
      { q: "Can drawer compartments be incorporated?", a: "Yes, double-tier chests with pull-out drawers are available." },
    ],
  },

  // 11. E/R PN BOX (Combination)
  "er-pn-box": {
    id: "er-pn-box",
    slug: "er-pn-box",
    categorySlug: "pendant-boxes",
    categoryName: "Pendant Boxes",
    name: "E/R Pn Box",
    collection: "Bespoke Packaging",
    subtitle: "Earring & Pendant Combination Box",
    heroHeadline: "Bespoke Earring & Pendant Box.",
    shortDescription: "Bespoke combination box crafted for matching earring and pendant duos.",
    longDescription: "Hand-crafted bespoke jewellery box engineered with dual-purpose interior pad accommodating both pendant chain hook and earring slots.",
    images: [
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ E/R Pn Box", label: "Primary View" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ E/R Pn Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "8 × 10 × 5 cm", dimensions: "8 × 10 × 5 cm", description: "Standard E/R Pn Box Size" },
      { label: "8 × 10 × 4 cm", dimensions: "8 × 10 × 4 cm", description: "Slim E/R Pn Box Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Dual Earring & Pendant Cushion",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "E/R PN BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Dual Purpose Pad", description: "Precision tabs for both earrings and center pendant." },
    ],
    faqs: [
      { q: "Is this suitable for everyday sets?", a: "Yes, designed specifically for paired earring and pendant sets." },
    ],
  },

  // 12. ER BANGLE BOX (Combination)
  "er-bangle-box": {
    id: "er-bangle-box",
    slug: "er-bangle-box",
    categorySlug: "bangle-boxes",
    categoryName: "Bangle Boxes",
    name: "ER Bangle Box",
    collection: "Bespoke Packaging",
    subtitle: "Earring & Bangle Combination Box",
    heroHeadline: "Bespoke Earring & Bangle Box.",
    shortDescription: "Bespoke combination packaging designed for pairing earrings with bangles.",
    longDescription: "Hand-crafted bespoke jewellery box featuring a central bangle bolster flanked by earring positioning tabs.",
    images: [
      { src: "/assets/rigidd.jpeg", alt: "CASA DI BIZ ER Bangle Box", label: "Primary View" },
      { src: "/assets/imsec2.jpeg", alt: "CASA DI BIZ ER Bangle Box Open", label: "Open View" },
    ],
    sizes: [
      { label: "12 × 12 × 8 cm", dimensions: "12 × 12 × 8 cm", description: "Standard ER Bangle Box Size" },
      { label: "15 × 15 × 8 cm", dimensions: "15 × 15 × 8 cm", description: "Large ER Bangle Box Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Central Bangle Roll with Flanking Earring Slots",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "ER BANGLE BOX" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Bangle & Earring Cradle", description: "Combined insert layout for matching bangle and earring sets." },
    ],
    faqs: [
      { q: "What is the minimum order quantity?", a: "Standard MOQ is 100 units per custom batch." },
    ],
  },

  // 13. BRACELET / CHAIN (Combination)
  "bracelet-chain-box": {
    id: "bracelet-chain-box",
    slug: "bracelet-chain-box",
    categorySlug: "bracelet-boxes",
    categoryName: "Bracelet Boxes",
    name: "Bracelet / Chain",
    collection: "Bespoke Packaging",
    subtitle: "Bracelet & Chain Dual Presentation Box",
    heroHeadline: "Bespoke Bracelet & Chain Box.",
    shortDescription: "Linear presentation case engineered for bracelets and fine chains.",
    longDescription: "Hand-crafted elongated case with universal clips designed to securely cradle either bracelets or link chains.",
    images: [
      { src: "/assets/imsec1.jpeg", alt: "CASA DI BIZ Bracelet / Chain", label: "Primary View" },
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ Bracelet / Chain Open", label: "Open View" },
    ],
    sizes: [
      { label: "23 × 7 × 3.5 cm", dimensions: "23 × 7 × 3.5 cm", description: "Standard Bracelet / Chain Size" },
      { label: "26 × 8 × 7 cm", dimensions: "26 × 8 × 7 cm", description: "Wide Bracelet / Chain Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Dual Elastic Retention Clips",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "BRACELET / CHAIN" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Multi-Jewellery Clips", description: "Supports both stiff tennis bracelets and flexible chain links." },
    ],
    faqs: [
      { q: "Are custom colors available?", a: "Yes, all materials and finishes can be customized." },
    ],
  },

  // 14. CHAIN / PN (Combination)
  "chain-pn-box": {
    id: "chain-pn-box",
    slug: "chain-pn-box",
    categorySlug: "chain-boxes",
    categoryName: "Chain Boxes",
    name: "Chain / PN",
    collection: "Bespoke Packaging",
    subtitle: "Chain & Pendant Dual Case",
    heroHeadline: "Bespoke Chain / PN Box.",
    shortDescription: "Bespoke box crafted for chain and pendant combinations.",
    longDescription: "Hand-crafted bespoke jewellery box engineered with specialized interior retaining clips for chains with attached pendants.",
    images: [
      { src: "/assets/goodimm.jpeg", alt: "CASA DI BIZ Chain / PN", label: "Primary View" },
      { src: "/assets/allim.jpeg", alt: "CASA DI BIZ Chain / PN Open", label: "Open View" },
    ],
    sizes: [
      { label: "9 × 13 × 7 cm", dimensions: "9 × 13 × 7 cm", description: "Standard Chain / PN Size" },
      { label: "10 × 14 × 6 cm", dimensions: "10 × 14 × 6 cm", description: "Medium Chain / PN Size" },
    ],
    materials: STANDARD_BOX_MATERIALS,
    finishes: STANDARD_BOX_FINISHES,
    specifications: {
      outerMaterial: "Available in multiple material options",
      innerMaterial: "Anti-Tarnish Certified Suede / Microfiber",
      hingeClosure: "Precision Spring Hinge Closure",
      insertType: "Chain & Pendant Pad",
      brandingPlacement: "Inner Lid / Outer Lid Custom Stamping",
      outerPackaging: "Two-Piece Rigid Outer Gift Box",
      moq: "100 Units",
      leadTime: "12–18 Working Days",
      sampleAvailability: "Available on request",
    },
    highlights: [
      { label: "FORMAT", value: "CHAIN / PN" },
      { label: "SIZES", value: "MULTIPLE AVAILABLE" },
      { label: "COLOUR", value: "BESPOKE TO CLIENT" },
    ],
    customisationFeatures: [
      { title: "Tension Clip", description: "Holds chain firmly in place while allowing pendant to rest centered." },
    ],
    faqs: [
      { q: "What is the delivery time?", a: "12–18 working days from proof approval." },
    ],
  },
};

// Helper queries
export function getAllBoxModels(): BoxModel[] {
  return Object.values(BOX_MODELS_DATA);
}

export function getBoxModelBySlug(slug: string): BoxModel | undefined {
  return BOX_MODELS_DATA[slug];
}

export function getBoxModel(categorySlug: string, modelSlug: string): BoxModel | undefined {
  const model = BOX_MODELS_DATA[modelSlug];
  if (model && model.categorySlug === categorySlug) {
    return model;
  }
  return BOX_MODELS_DATA[modelSlug];
}

export function getRelatedBoxModels(currentSlug: string, categorySlug: string, limit: number = 4): BoxModel[] {
  const sameCategory = Object.values(BOX_MODELS_DATA).filter(
    (m) => m.categorySlug === categorySlug && m.slug !== currentSlug
  );
  const others = Object.values(BOX_MODELS_DATA).filter(
    (m) => m.categorySlug !== categorySlug && m.slug !== currentSlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getBoxModelsByCategory(categorySlug: string): BoxModel[] {
  return Object.values(BOX_MODELS_DATA).filter((m) => m.categorySlug === categorySlug);
}

export function getBoxCategory(slug: string): BoxCategory | undefined {
  return BOX_CATEGORIES_DATA[slug];
}

export function getAllBoxCategories(): BoxCategory[] {
  return Object.values(BOX_CATEGORIES_DATA);
}
