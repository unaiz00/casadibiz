export interface StorageCaseProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  positioning: string;
  description: string;
  category: string;
  eyebrow: string;
  // Easily replaceable image path for final photography
  image: string;
  images: { src: string; alt: string; label?: string }[];
  productType: string;
  recommendedFor: string[];
  customisationOptions: string[];
  packagingNotes: string;
  overviewCards: { label: string; value: string }[];
  overviewDetails: string[];
  specifications: { label: string; value: string }[];
  customisationFeatures: { title: string; description: string }[];
  relatedSlugs: string[];
}

export const STORAGE_CASE_PRODUCTS: Record<string, StorageCaseProduct> = {
  "classic-wooden-jewellery-case": {
    id: "classic-wooden-jewellery-case",
    slug: "classic-wooden-jewellery-case",
    title: "Classic Wooden Jewellery Case",
    subtitle: "Solid Hardwood & Lined Compartments",
    positioning: "Handcrafted natural timber and piano-lacquer cases built for heirloom presentation.",
    description:
      "Hand-finished solid wood jewellery case featuring multi-tier velvet partitions, polished brass quadrant hinges, and discreet lockable closures. Designed for boutique retail presentation, private client gifting, and luxury heirloom preservation.",
    category: "JEWELLERY STORAGE & TRAVEL CASES",
    eyebrow: "HERITAGE STORAGE • BESPOKE MANUFACTURE",
    // Current placeholder from public/assets/ — easily replaceable with final product shoot
    image: "/assets/storage/Classic_Wooden_Jewellery_Case.jpeg",
    images: [
      {
        src: "/assets/storage/Classic_Wooden_Jewellery_Case.jpeg",
        alt: "CASA DI BIZ Classic Wooden Jewellery Case presentation",
        label: "Primary Case View",
      },
    ],
    productType: "Wooden Jewellery Case",
    recommendedFor: [
      "Luxury Jewellery Retail Display",
      "High-Value Private Client Gifting",
      "Bespoke Bridal Keepsake Suites",
      "Flagship Store Counter Merchandising",
    ],
    customisationOptions: [
      "Timber wood species selection (Walnut, Oak, Cherry, Mahogany)",
      "Piano gloss, matte satin, or natural oil finishes",
      "Precision laser engraving or inlaid metallic crests",
      "Bespoke velvet and micro-suede interior colourways",
    ],
    packagingNotes: "Supplied in a tailored branded slipcase and protective luxury gift box.",
    overviewCards: [
      { label: "MATERIAL", value: "Solid Hardwood & Velvet" },
      { label: "APPLICATION", value: "Boutique & Heirloom Storage" },
      { label: "HARDWARE", value: "Quadrant Brass Hinges & Lock" },
    ],
    overviewDetails: [
      "Each wooden case is meticulously constructed using select furniture-grade hardwoods, reinforced corner joints, and precision brass hardware.",
      "Internal trays are hand-lined with non-reactive, anti-tarnish micro-suede and velvet to protect platinum, gold, pearls, and precious gems.",
      "Custom tiered compartments can be configured for rings, necklaces, watches, cufflinks, and bracelet rolls according to your brand's specifications.",
    ],
    specifications: [
      { label: "Product Type", value: "Classic Wooden Jewellery Case" },
      { label: "Exterior Finish", value: "Hand-rubbed lacquer (High Gloss or Satin Matte)" },
      { label: "Interior Lining", value: "Anti-tarnish plush velvet / Italian micro-suede" },
      { label: "Hardware", value: "Concealed brass quadrant hinges with optional lock & key" },
      { label: "Branding", value: "Laser engraving, gold foil debossing, or electroformed metal badge" },
      { label: "MOQ", value: "Custom production runs from 100 units" },
    ],
    customisationFeatures: [
      {
        title: "Wood Species & Finishes",
        description: "Choose from solid European oak, American walnut, or lacquered ash in custom brand stains.",
      },
      {
        title: "Interior Compartment Layout",
        description: "Tailored multi-tier modular trays, ring cushions, necklace hooks, and watch cushions.",
      },
      {
        title: "Metallic Crest & Branding",
        description: "Recessed metal badges, gold or rose gold foil stamping, and laser-carved monograms.",
      },
      {
        title: "Anti-Tarnish Fabric Palette",
        description: "Extensive palette of premium velvets and suedes treated to safeguard delicate fine metals.",
      },
    ],
    relatedSlugs: [
      "velvet-travel-jewellery-case",
      "leatherette-stackable-trays",
      "clear-acrylic-organiser-box",
    ],
  },

  "velvet-travel-jewellery-case": {
    id: "velvet-travel-jewellery-case",
    slug: "velvet-travel-jewellery-case",
    title: "Velvet Travel Jewellery Case",
    subtitle: "Compact Zip & Roll Travel Organiser",
    positioning: "Ultra-soft plush velvet travel case with crush-resistant internal framework.",
    description:
      "Compact, portable travel case wrapped in plush high-density velvet with a structured crush-resistant shell. Engineered with a smooth zip-around closure and custom anti-tarnish interior compartments to protect delicate pieces during transit and travel.",
    category: "JEWELLERY STORAGE & TRAVEL CASES",
    eyebrow: "PORTABLE LUXURY • BESPOKE MANUFACTURE",
    // Current placeholder from public/assets/ — easily replaceable with final product shoot
    image: "/assets/storage/Velvet_Travel Jewellery_Case.jpeg",
    images: [
      {
        src: "/assets/storage/Velvet_Travel Jewellery_Case.jpeg",
        alt: "CASA DI BIZ Velvet Travel Jewellery Case exterior",
        label: "Plush Velvet Case View",
      },
    ],
    productType: "Velvet Travel Case",
    recommendedFor: [
      "Destination Weddings & Bridal Parties",
      "Luxury Brand Client VIP Gifts",
      "Retail Travel Accessories Collections",
      "Bespoke High-Jewellery Purchase Add-ons",
    ],
    customisationOptions: [
      "Velvet colour matching across 40+ seasonal shades",
      "Custom branded metallic zipper pullers",
      "Foil stamped or embroidered brand signature",
      "Removable cross-divider compartments",
    ],
    packagingNotes: "Packed in individual branded dust bags and rigid outer presentation sleeves.",
    overviewCards: [
      { label: "MATERIAL", value: "High-Density Plush Velvet" },
      { label: "APPLICATION", value: "Travel & Daily Organisation" },
      { label: "CLOSURE", value: "Reinforced Metallic Zipper" },
    ],
    overviewDetails: [
      "Constructed around a rigid composite core to prevent jewellery compression during flight or road travel.",
      "Features dedicated ring rolls, elasticated necklace pouch pockets to prevent tangling, and earring bars.",
      "Custom metal zipper puller can be die-cast with your brand mark or monogram.",
    ],
    specifications: [
      { label: "Product Type", value: "Velvet Travel Jewellery Case" },
      { label: "Core Structure", value: "Impact-resistant rigid EVA / molded composite core" },
      { label: "Exterior Material", value: "High-density plush silk velvet or cotton velvet" },
      { label: "Interior Layout", value: "Ring rolls, earring strap, necklace pouch, and loose compartments" },
      { label: "Zipper & Hardware", value: "Smooth-glide metallic gold or nylon zipper with custom puller" },
      { label: "MOQ", value: "Manufactured to order from 250 units" },
    ],
    customisationFeatures: [
      {
        title: "Bespoke Velvet Colours",
        description: "Choose from rich emerald, royal navy, blush champagne, dusty rose, or custom Pantone dyes.",
      },
      {
        title: "Embossed & Foil Signature",
        description: "Metallic hot-foil stamping on top lid or tonal embroidery for subtle luxury.",
      },
      {
        title: "Hardware Detailing",
        description: "Brushed champagne gold, polished chrome, or matte black zipper teeth and branded puller.",
      },
      {
        title: "Protective Dust Bag",
        description: "Includes matching drawstring satin or cotton dust pouch with silk-screened brand mark.",
      },
    ],
    relatedSlugs: [
      "classic-wooden-jewellery-case",
      "leatherette-stackable-trays",
      "clear-acrylic-organiser-box",
    ],
  },

  "leatherette-stackable-trays": {
    id: "leatherette-stackable-trays",
    slug: "leatherette-stackable-trays",
    title: "Leatherette Stackable Trays",
    subtitle: "Modular Counter & Drawer Storage System",
    positioning: "Modular stacking trays wrapped in textured leatherette for showcase counters and safes.",
    description:
      "Modular stackable jewellery display and storage trays covered in fine-grain PU leatherette. Features interlocking edges and interchangeable internal dividers for rings, watches, bangles, and loose gems, tailored for retail counters, safes, and private dressing rooms.",
    category: "JEWELLERY STORAGE & TRAVEL CASES",
    eyebrow: "MODULAR SYSTEMS • BESPOKE MANUFACTURE",
    // Current placeholder from public/assets/ — easily replaceable with final product shoot
    image: "/assets/storage/Leatherette_Stackable_Trays.jpeg",
    images: [
      {
        src: "/assets/storage/Leatherette_Stackable_Trays.jpeg",
        alt: "CASA DI BIZ Leatherette Stackable Trays overview",
        label: "Stackable Tray System",
      },
    ],
    productType: "Modular Stackable Trays",
    recommendedFor: [
      "Fine Jewellery Retail Showcase Counters",
      "Private Vault & Safe Organisers",
      "VIP Salon Presentation Trays",
      "High-End Walk-in Wardrobe Drawers",
    ],
    customisationOptions: [
      "Saffiano, pebbled, or smooth nappa leatherette finishes",
      "Interchangeable compartment inserts (grids, ring rolls, watch pillows)",
      "Perimeter edge saddle stitching in tonal or contrast thread",
      "Blind debossed or gold foil stamped brand logo",
    ],
    packagingNotes: "Wrapped in protective tissue and bulk-packaged with corner protectors.",
    overviewCards: [
      { label: "MATERIAL", value: "Premium Textured Leatherette" },
      { label: "APPLICATION", value: "Showcase & Vault Organisation" },
      { label: "DESIGN", value: "Interlocking Vertical Stacking" },
    ],
    overviewDetails: [
      "Engineered with a recessed perimeter base that locks securely onto lower trays, preventing slippage when stacked.",
      "Internal configurations can be mixed and matched: 24-compartment grids, continuous ring rolls, or open bangle trays.",
      "Wrapped seamlessly with hand-tucked corners and high-grade vegan leatherette resistant to scratches and everyday showroom handling.",
    ],
    specifications: [
      { label: "Product Type", value: "Leatherette Stackable Trays" },
      { label: "Substrate", value: "High-density rigid MDF core board" },
      { label: "Exterior Finish", value: "Pebbled, Saffiano, or Nappa-grain vegan leatherette" },
      { label: "Interior Lining", value: "Anti-tarnish microfiber suede or soft velvet" },
      { label: "Stacking Mechanism", value: "Precision recessed base lip for slip-free interlocking" },
      { label: "MOQ", value: "Custom production runs from 150 units" },
    ],
    customisationFeatures: [
      {
        title: "Modular Grid Sizes",
        description: "Choose standard 300 × 200 mm counter dimensions or bespoke sizing for your drawers and safes.",
      },
      {
        title: "Divider Layouts",
        description: "Specialized inserts for rings, stud earrings, necklaces, watch pillows, and bangle grooves.",
      },
      {
        title: "Perimeter Stitching",
        description: "Artisanal hand-stitched borders available in gold, silver, or matching thread.",
      },
      {
        title: "Debossed Branding",
        description: "Deep blind debossed insignia on the tray rim or gold foiled interior emblem.",
      },
    ],
    relatedSlugs: [
      "classic-wooden-jewellery-case",
      "velvet-travel-jewellery-case",
      "clear-acrylic-organiser-box",
    ],
  },

  "clear-acrylic-organiser-box": {
    id: "clear-acrylic-organiser-box",
    slug: "clear-acrylic-organiser-box",
    title: "Clear Acrylic Organiser Box",
    subtitle: "Optical-Grade Acrylic with Velvet Inserts",
    positioning: "",
    description:
      "Museum-quality optical acrylic jewellery box providing 360-degree clarity. Fitted with slide-out velvet-cushioned trays, dust-sealed magnetic lid closures, and scratch-resistant polished bevelled edges for contemporary retail displays and premium vanity presentation.",
    category: "JEWELLERY STORAGE & TRAVEL CASES",
    eyebrow: "CONTEMPORARY ACRYLIC • BESPOKE MANUFACTURE",
    image: "/assets/storage/clearacrylic.jpeg",
    images: [
      {
        src: "/assets/storage/clearacrylic.jpeg",
        alt: "CASA DI BIZ Clear Acrylic Organiser Box",
        label: "Clear Acrylic Box View",
      },
    ],
    productType: "Acrylic Organiser Box",
    recommendedFor: [
      "Modern Jewellery Counter Merchandising",
      "High-End Vanity & Dressing Table Displays",
      "Limited-Edition Jewellery Capsule Launches",
      "Collector Presentation & Protection",
    ],
    customisationOptions: [
      "Custom acrylic thickness (4mm, 5mm, 6mm cast acrylic)",
      "Tiered drawer counts (2-drawer, 3-drawer, top-lift hinged lid)",
      "Contrasting velvet interior tray colours",
      "Precision laser etched or screen printed branding",
    ],
    packagingNotes: "Shipped with peel-off protective masking film in heavy-duty foam corner boxes.",
    overviewCards: [
      { label: "MATERIAL", value: "Optical-Grade Cast Acrylic" },
      { label: "APPLICATION", value: "Counter Display & Vanity" },
      { label: "CLARITY", value: "Diamond-Polished 360° View" },
    ],
    overviewDetails: [
      "Crafted from 100% virgin cast acrylic with exceptional light transmission and UV resistance to prevent yellowing.",
      "Each edge is precision diamond-polished and flame-smoothed for crystal-clear museum quality.",
      "Includes removable soft velvet trays with custom partitions to protect gold, silver, and gemstone pieces from dust and scratches.",
    ],
    specifications: [
      { label: "Product Type", value: "Clear Acrylic Organiser Box" },
      { label: "Material Grade", value: "High-grade virgin optical cast acrylic (4mm – 6mm)" },
      { label: "Edge Treatment", value: "Diamond machine-polished with chamfered bevels" },
      { label: "Drawers & Inserts", value: "Smooth-glide acrylic drawers with velvet-wrapped inserts" },
      { label: "Lid Hardware", value: "Concealed rare-earth magnets or acrylic pivot hinges" },
      { label: "MOQ", value: "Bespoke production runs from 100 units" },
    ],
    customisationFeatures: [
      {
        title: "Multi-Tier Drawer Configurations",
        description: "Specify 2, 3, 4, or 5 sliding drawer tiers with custom knob pullers or bevel finger-pulls.",
      },
      {
        title: "Laser Etching & Screen Print",
        description: "Subtle frosted laser engraving or metallic silkscreen printing on the lid or front panel.",
      },
      {
        title: "Velvet Insert Customisation",
        description: "Match internal drawer pads with your house colour palette in rich velvet or suede.",
      },
      {
        title: "Bespoke Outer Presentation",
        description: "Custom rigid gift box with foam nest specifically engineered for safe acrylic transit.",
      },
    ],
    relatedSlugs: [
      "classic-wooden-jewellery-case",
      "velvet-travel-jewellery-case",
      "leatherette-stackable-trays",
    ],
  },
};

export function getStorageCaseProduct(slug: string): StorageCaseProduct | undefined {
  return STORAGE_CASE_PRODUCTS[slug];
}

export function getAllStorageCaseProducts(): StorageCaseProduct[] {
  return Object.values(STORAGE_CASE_PRODUCTS);
}

export function getRelatedStorageCaseProducts(
  currentSlug: string,
  limit = 3
): StorageCaseProduct[] {
  const current = STORAGE_CASE_PRODUCTS[currentSlug];
  if (!current) return getAllStorageCaseProducts().slice(0, limit);

  return current.relatedSlugs
    .map((s) => STORAGE_CASE_PRODUCTS[s])
    .filter(Boolean)
    .slice(0, limit);
}
