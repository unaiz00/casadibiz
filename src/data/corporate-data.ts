export interface CorporateGiftProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  positioning: string;
  description: string;
  category: string;
  eyebrow: string;
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

export const CORPORATE_GIFT_PRODUCTS: Record<string, CorporateGiftProduct> = {
  "executive-stationery-set": {
    id: "executive-stationery-set",
    slug: "executive-stationery-set",
    title: "Executive Stationery Set",
    subtitle: "A refined executive set designed for meaningful corporate gifting.",
    positioning: "A refined executive set designed to carry your brand into every working day.",
    description:
      "A premium stationery ensemble combining practical everyday essentials with understated luxury. Designed for executive gifting, client appreciation and corporate occasions, with materials, colours and branding tailored to the identity of your organisation.",
    category: "CORPORATE GIFTING",
    eyebrow: "CORPORATE GIFTING • BESPOKE MANUFACTURE",
    // Clean, easily replaceable image path
    image: "/assets/corporate_collection/book.jpeg",
    images: [
      {
        src: "/assets/corporate_collection/book.jpeg",
        alt: "CASA DI BIZ Executive Stationery Set Presentation",
        label: "Executive Set View",
      },
    ],
    productType: "Executive Stationery Set",
    recommendedFor: [
      "Executive Gifting",
      "Client Appreciation",
      "Employee Recognition",
      "Corporate Events",
    ],
    customisationOptions: [
      "Custom branding",
      "Logo application",
      "Custom colours",
      "Bespoke presentation",
    ],
    packagingNotes: "Bespoke packaging available according to brand requirements.",
    overviewCards: [
      { label: "PRODUCT TYPE", value: "Executive Stationery Set" },
      { label: "APPLICATION", value: "Executive & Corporate Gifting" },
      { label: "CUSTOMISATION", value: "Bespoke Branding Available" },
    ],
    overviewDetails: [
      "Designed for executive desks and C-suite relationships, this ensemble pairs essential stationery with artisanal tactile finishing.",
      "Each piece can be customized with exact Pantone color matching, metallic foil stamping, or blind debossing to reflect your corporate identity with quiet sophistication.",
      "Supplied in a bespoke rigid presentation box or custom sleeve tailored to your event or campaign.",
    ],
    specifications: [
      { label: "Product Type", value: "Executive Stationery Set" },
      { label: "Construction", value: "Bespoke multi-piece configuration" },
      { label: "Branding", value: "Custom debossing, foil stamping, or screen print" },
      { label: "Materials", value: "Premium papers, leatherette, and custom accents" },
      { label: "Packaging", value: "Bespoke presentation box or sleeve available" },
      { label: "Production", value: "Manufactured to order with tiered volume options" },
    ],
    customisationFeatures: [
      {
        title: "Brand Colours",
        description: "Exact colour matching to your brand palette across papers and presentation trims.",
      },
      {
        title: "Logo Application",
        description: "Precision blind debossing, screen printing, or metallic foil stamping.",
      },
      {
        title: "Foiling / Engraving",
        description: "Metallic gold, silver, rose gold, and sculpted metallic crest branding.",
      },
      {
        title: "Bespoke Packaging",
        description: "Rigid magnetic presentation boxes, slipcases, and tailored interior inserts.",
      },
      {
        title: "Corporate Quantity Requirements",
        description: "Flexible minimum order quantities scaled for boutique batches or large-scale corporate rollouts.",
      },
    ],
    relatedSlugs: [
      "luxury-date-chocolate-box",
      "bespoke-falcon-desk-ornament",
      "tech-accessories-kit",
    ],
  },

  "luxury-date-chocolate-box": {
    id: "luxury-date-chocolate-box",
    slug: "luxury-date-chocolate-box",
    title: "Luxury Date & Chocolate Box",
    subtitle: "A premium presentation for exceptional UAE gifting.",
    positioning: "An opulent confectionery presentation box engineered for prestigious hospitality and festive moments.",
    description:
      "A sophisticated presentation box created for premium dates, chocolates and curated confectionery. Designed for corporate gifting, festive occasions, VIP clients and executive relationships, with bespoke branding and presentation options.",
    category: "CORPORATE GIFTING",
    eyebrow: "CORPORATE GIFTING • BESPOKE MANUFACTURE",
    image: "/assets/corporate_collection/Luxury_Date & Chocolate_Box.jpeg",
    images: [
      {
        src: "/assets/corporate_collection/Luxury_Date & Chocolate_Box.jpeg",
        alt: "CASA DI BIZ Luxury Date & Chocolate Box Presentation",
        label: "Date & Chocolate Box View",
      },
    ],
    productType: "Luxury Date & Chocolate Box",
    recommendedFor: [
      "Corporate Gifting",
      "Festive Gifting",
      "VIP Clients",
      "Client Appreciation",
      "UAE Hospitality",
    ],
    customisationOptions: [
      "Custom box dimensions",
      "Brand colours",
      "Logo application",
      "Foiling",
      "Custom inserts",
      "Bespoke presentation",
    ],
    packagingNotes: "Luxury presentation packaging tailored to the gifting experience.",
    overviewCards: [
      { label: "PRODUCT TYPE", value: "Luxury Date & Chocolate Box" },
      { label: "APPLICATION", value: "UAE Hospitality & Festive Gifting" },
      { label: "CUSTOMISATION", value: "Custom Cavities & Foiling" },
    ],
    overviewDetails: [
      "Engineered specifically for premium UAE gourmet gifting, offering high-rigidity structural presentation with food-grade interior safety.",
      "Custom internal dividers and molded trays accommodate single-layer or tiered configurations of gourmet dates, artisan pralines, and confectionery.",
      "Finished with magnetic closures, ribbon pulls, and metallic foil monograms tailored to festive Ramadan, Eid, and corporate milestones.",
    ],
    specifications: [
      { label: "Product Type", value: "Luxury Date & Chocolate Box" },
      { label: "Construction", value: "Rigid magnetic or two-piece confectionery case" },
      { label: "Branding", value: "Metallic foil stamping, embossing, or crest plaque" },
      { label: "Interior", value: "Food-safe custom compartment dividers" },
      { label: "Packaging", value: "Luxury presentation packaging tailored to the experience" },
      { label: "Production", value: "Manufactured to order for regional corporate gifting" },
    ],
    customisationFeatures: [
      {
        title: "Custom Box Dimensions",
        description: "Built to your exact confection counts and packaging dimensions.",
      },
      {
        title: "Brand Colours & Foils",
        description: "Custom dyed papers with metallic hot-stamped branding and accents.",
      },
      {
        title: "Food-Safe Inserts",
        description: "Certified food-safe dividers, grease-resistant pads, and gold-lined compartments.",
      },
      {
        title: "Bespoke Presentation",
        description: "Coordinated satin ribbon wraps, branded seal stickers, and custom message cards.",
      },
      {
        title: "Corporate Quantity Requirements",
        description: "Planned production schedules with guaranteed seasonal delivery for regional campaigns.",
      },
    ],
    relatedSlugs: [
      "executive-stationery-set",
      "bespoke-falcon-desk-ornament",
      "tech-accessories-kit",
    ],
  },

  "bespoke-falcon-desk-ornament": {
    id: "bespoke-falcon-desk-ornament",
    slug: "bespoke-falcon-desk-ornament",
    title: "Bespoke Falcon Desk Ornament",
    subtitle: "A distinguished corporate keepsake inspired by the UAE.",
    positioning: "A distinguished desk sculpture embodying UAE heritage and institutional prestige.",
    description:
      "A premium desk ornament designed as a distinctive corporate keepsake. The falcon form creates a strong connection to UAE identity while providing an elegant canvas for bespoke branding and presentation.",
    category: "CORPORATE GIFTING",
    eyebrow: "CORPORATE GIFTING • BESPOKE MANUFACTURE",
    image: "/assets/corporate_collection/falcon_desk.jpeg",
    images: [
      {
        src: "/assets/corporate_collection/falcon_desk.jpeg",
        alt: "CASA DI BIZ Bespoke Falcon Desk Ornament",
        label: "Falcon Keepsake View",
      },
    ],
    productType: "Bespoke Falcon Desk Ornament",
    recommendedFor: [
      "Executive Gifting",
      "VIP Gifting",
      "Corporate Milestones",
      "Government & Institutional Gifting",
      "UAE Brand Events",
    ],
    customisationOptions: [
      "Bespoke finish",
      "Brand plaque",
      "Engraving",
      "Custom presentation box",
      "Corporate branding",
    ],
    packagingNotes: "Custom presentation box with velvet or satin-lined protective cradle.",
    overviewCards: [
      { label: "PRODUCT TYPE", value: "Bespoke Falcon Desk Ornament" },
      { label: "APPLICATION", value: "Institutional & VIP Keepsake" },
      { label: "CUSTOMISATION", value: "Laser Engraving & Plaque" },
    ],
    overviewDetails: [
      "An emblem of vision, strength, and heritage in the UAE, the falcon desk ornament serves as a prestigious institutional commemorative piece.",
      "Designed to sit prominently in boardrooms and executive suites with a balanced, weighted base that carries your engraved crest or message.",
      "Housed in a handcrafted velvet-lined rigid presentation box with magnetic closure for an unforgettable unboxing moment.",
    ],
    specifications: [
      { label: "Product Type", value: "Bespoke Falcon Desk Ornament" },
      { label: "Construction", value: "Sculpted keepsake with weighted display base" },
      { label: "Branding", value: "Laser engraving, sculpted relief, or metallic plaque" },
      { label: "Finishes", value: "Bespoke metallic, brushed, or patinated finishes" },
      { label: "Packaging", value: "Bespoke rigid display box with tailored protective cradle" },
      { label: "Production", value: "Manufactured to order with tailored volume runs" },
    ],
    customisationFeatures: [
      {
        title: "Bespoke Finishes",
        description: "Curated surface treatments to match institutional or brand aesthetics.",
      },
      {
        title: "Engraved Brand Plaque",
        description: "Precision laser engraved brass or steel plaques with recipient personalization.",
      },
      {
        title: "Custom Protective Cradle",
        description: "Molded velvet or satin interior cavity ensuring flawless transit and presentation.",
      },
      {
        title: "Institutional Presentation",
        description: "Outer luxury sleeve with foil-stamped government or corporate seal.",
      },
      {
        title: "Corporate Quantity Requirements",
        description: "Tiered production runs suited for VIP delegations, milestone ceremonies, and annual summits.",
      },
    ],
    relatedSlugs: [
      "executive-stationery-set",
      "luxury-date-chocolate-box",
      "tech-accessories-kit",
    ],
  },

  "tech-accessories-kit": {
    id: "tech-accessories-kit",
    slug: "tech-accessories-kit",
    title: "Tech & Accessories Kit",
    subtitle: "Useful technology essentials presented with a premium corporate finish.",
    positioning: "A modern corporate ensemble combining functional technology with bespoke presentation.",
    description:
      "A curated technology and accessories set designed for modern corporate gifting. Practical everyday essentials are brought together in a refined presentation kit that can be customised around your brand.",
    category: "CORPORATE GIFTING",
    eyebrow: "CORPORATE GIFTING • BESPOKE MANUFACTURE",
    image: "/assets/corporate_collection/tech& accessorykit.jpeg",
    images: [
      {
        src: "/assets/corporate_collection/tech& accessorykit.jpeg",
        alt: "CASA DI BIZ Tech & Accessories Kit Presentation",
        label: "Tech Kit View",
      },
    ],
    productType: "Tech & Accessories Kit",
    recommendedFor: [
      "Employee Gifting",
      "Executive Gifting",
      "Corporate Events",
      "Client Appreciation",
      "Technology Companies",
    ],
    customisationOptions: [
      "Custom accessory selection",
      "Brand colours",
      "Logo application",
      "Custom packaging",
      "Bespoke presentation",
      "Branded accessories where applicable",
    ],
    packagingNotes: "Custom presentation gift box with molded protective insert.",
    overviewCards: [
      { label: "PRODUCT TYPE", value: "Tech & Accessories Kit" },
      { label: "APPLICATION", value: "Executive Travel & Corporate Gifting" },
      { label: "CUSTOMISATION", value: "Custom Component Layout" },
    ],
    overviewDetails: [
      "A functional corporate gift suite curated for mobile professionals, travel, and seamless executive workflow.",
      "The accessory selection can be configured around your specific event or budget, unified inside a precision-cut protective organizer.",
      "Each component and the outer presentation casing are branded with consistent typography, logo application, and color accents.",
    ],
    specifications: [
      { label: "Product Type", value: "Tech & Accessories Kit" },
      { label: "Construction", value: "Multi-component set in custom presentation casing" },
      { label: "Branding", value: "Laser marking, UV print, or foil stamped case" },
      { label: "Insert", value: "Custom CNC-cut EVA foam or velvet-wrapped organizer" },
      { label: "Packaging", value: "Custom rigid presentation box with precision insert" },
      { label: "Production", value: "Configurable component selection manufactured to order" },
    ],
    customisationFeatures: [
      {
        title: "Accessory Selection",
        description: "Flexible configuration of practical corporate tech accessories tailored to brief.",
      },
      {
        title: "Harmonized Branding",
        description: "Consistent logo application across both the outer box and internal pieces.",
      },
      {
        title: "Custom Precision Insert",
        description: "High-density EVA foam or fabric-wrapped interior cut to the exact component profile.",
      },
      {
        title: "Bespoke Outer Case",
        description: "Magnetic closure rigid box with soft-touch lamination or textured fine papers.",
      },
      {
        title: "Corporate Quantity Requirements",
        description: "Reliable batch manufacturing scaled for corporate onboarding, client giftings, or major events.",
      },
    ],
    relatedSlugs: [
      "executive-stationery-set",
      "luxury-date-chocolate-box",
      "bespoke-falcon-desk-ornament",
    ],
  },
};

export function getCorporateProduct(slug: string): CorporateGiftProduct | undefined {
  return CORPORATE_GIFT_PRODUCTS[slug];
}

export function getAllCorporateProducts(): CorporateGiftProduct[] {
  return Object.values(CORPORATE_GIFT_PRODUCTS);
}

export function getRelatedCorporateProducts(currentSlug: string, limit = 3): CorporateGiftProduct[] {
  return Object.values(CORPORATE_GIFT_PRODUCTS).filter((p) => p.slug !== currentSlug).slice(0, limit);
}
