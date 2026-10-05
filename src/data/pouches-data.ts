export interface PouchSize {
  id: string;
  label: string;
  dimensions: string;
  suitableFor: string;
}

export interface PouchBrandingOption {
  method: string;
  title: string;
  description: string;
}

export interface PouchSpecification {
  material: string;
  finish: string;
  closure: string;
  lining: string;
  minOrderQuantity: string;
  leadTime: string;
  pantoneMatching: string;
  applications: string;
}

export interface PouchFAQ {
  q: string;
  a: string;
}

export interface PouchProduct {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  keyCharacteristic: string;
  shortDescription: string;
  editorialStory: string;
  material: string;
  finish: string;
  closure: string;
  applications: string;
  styles: string[];
  sizes: PouchSize[];
  specifications: PouchSpecification;
  brandingOptions: PouchBrandingOption[];
  faqs: PouchFAQ[];
  images: {
    src: string;
    alt: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const POUCH_PRODUCTS: PouchProduct[] = [
  {
    slug: "matte-grosgrain",
    name: "Matte Grosgrain Drawstring Pouch",
    eyebrow: "MATTE GROSGRAIN POUCH",
    tagline: "Structured • Matte Finish • Premium Ribbed Texture",
    keyCharacteristic: "Structured Matte Texture",
    shortDescription:
      "A structured ribbed pouch with a refined matte finish, designed for premium jewellery, gifting and luxury accessory presentation.",
    editorialStory:
      "Engineered from high-density ribbed grosgrain fabric with tailored non-fray seams and a structured architectural body. The fine horizontal rib weave provides superior tactile feedback while resisting creases, making it an exceptional presentation vessel for fine jewellery, timepieces, and heirloom keepsakes.",
    material: "Matte Grosgrain / Ribbed Fabric",
    finish: "Structured Matte Texture",
    closure: "Drawstring Closure with Gold Aglets",
    applications: "Jewellery • Gifting • Luxury Accessories",
    styles: ["Drawstring Pouch", "Flat Pouch", "Custom Pouch"],
    sizes: [
      {
        id: "small",
        label: "Small / Jewellery",
        dimensions: "8 × 10 cm",
        suitableFor: "Rings, earrings, pendants & fine charms",
      },
      {
        id: "medium",
        label: "Medium / Watch & Cuff",
        dimensions: "10 × 14 cm",
        suitableFor: "Watches, bangles, bracelets & compact accessories",
      },
      {
        id: "large",
        label: "Large / Gift & Eyewear",
        dimensions: "15 × 20 cm",
        suitableFor: "Eyewear, small leather goods & signature cosmetics",
      },
      {
        id: "custom",
        label: "Bespoke Proportions",
        dimensions: "Custom Sizing",
        suitableFor: "Calibrated to your exact product silhouette",
      },
    ],
    specifications: {
      material: "100% High-Density Polyester Grosgrain",
      finish: "Anti-crease, structured matte rib weave",
      closure: "Braided cord or grosgrain ribbon with polished metal aglets",
      lining: "Optional micro-suede or soft tonal satin protective lining",
      minOrderQuantity: "500 units per bespoke production run",
      leadTime: "12–18 business days (sampling available in 5–7 days)",
      pantoneMatching: "Exact Pantone Matching System (PMS / TCX) dyed to order",
      applications: "Jewellery houses, luxury watchmakers, eyewear & couture gifting",
    },
    brandingOptions: [
      {
        method: "Hot Foil Stamping",
        title: "Metallic Foil Stamping",
        description:
          "Precision brass die pressing with high-lustre gold, silver, rose gold or matte pigment foils.",
      },
      {
        method: "Screen Printing",
        title: "High-Definition Screen Print",
        description:
          "Crisp typographic logo rendering with opaque pigment inks matched to brand Pantone codes.",
      },
      {
        method: "Embroidery",
        title: "Tone-on-Tone Monogram Embroidery",
        description:
          "High-density Madeira thread embroidery for rich relief texture and heirloom luxury feel.",
      },
      {
        method: "Custom Hardware",
        title: "Bespoke Engraved Aglets & Badges",
        description:
          "Laser-engraved brass drawstring aglets and bespoke metal brand tags in brushed or polished finishes.",
      },
    ],
    faqs: [
      {
        q: "Can the grosgrain pouch be dyed to our exact brand Pantone color?",
        a: "Yes. All CASA DI BIZ grosgrain fabrics are yarn-dyed to match your exact corporate Pantone Solid Coated or TCX color reference, with lab dips provided for pre-production sign-off.",
      },
      {
        q: "What lining options are available for scratch-sensitive jewellery?",
        a: "We offer plush micro-suede, anti-tarnish cotton flannel, and ultra-soft satin inner linings that protect polished metals, gemstones, and delicate surfaces.",
      },
      {
        q: "Can we customize the drawstring cords and aglet finishes?",
        a: "Yes. You can select braided cord, matching grosgrain ribbon, or twisted silk cords, fitted with gold, silver, gunmetal, or antique brass engraved aglets.",
      },
      {
        q: "What is the minimum order quantity for bespoke sizes?",
        a: "Our standard MOQ for custom-sized and custom-dyed grosgrain pouches starts at 500 units per production run.",
      },
    ],
    images: [
      {
        src: "/assets/matte_grossinribbed_pouch.jpeg",
        alt: "CASA DI BIZ Matte Grosgrain luxury packaging drawstring pouch",
      },
    ],
    seo: {
      title: "Matte Grosgrain Pouches | Bespoke Luxury Drawstring Pouches | CASA DI BIZ",
      description:
        "Bespoke matte grosgrain drawstring packaging pouches engineered with structured ribbed fabric, custom Pantone dyeing, and hot foil branding.",
      keywords: [
        "grosgrain pouch",
        "ribbed drawstring pouch",
        "luxury jewellery pouch",
        "custom branded pouch",
        "bespoke packaging pouch",
      ],
    },
  },
  {
    slug: "double-faced-satin",
    name: "Double-Faced Satin Drawstring Pouch",
    eyebrow: "DOUBLE-FACED SATIN POUCH",
    tagline: "Luxurious • High-Gloss Finish • Soft Fluid Hand-Feel",
    keyCharacteristic: "Lustrous Smooth Satin",
    shortDescription:
      "An ultra-smooth, high-lustre double-faced satin pouch designed for luxury cosmetics, fine jewellery and premium beauty presentation.",
    editorialStory:
      "Woven with continuous micro-filament yarns on both faces, creating a luminous, fluid drape that protects delicate polished surfaces. The dense weave provides a rich tactile touch with matching double-faced satin ribbon ties and tailored French seams.",
    material: "Double-Faced Premium Satin",
    finish: "High-Gloss Mirror Luster",
    closure: "Double-Faced Ribbon Drawstring",
    applications: "Cosmetics • Fine Jewellery • Perfumery • Luxury Gifts",
    styles: ["Drawstring Pouch", "Flat Pouch", "Custom Pouch"],
    sizes: [
      {
        id: "small",
        label: "Small / Jewellery",
        dimensions: "8 × 10 cm",
        suitableFor: "Rings, delicate necklaces & earrings",
      },
      {
        id: "medium",
        label: "Medium / Beauty & Fragrance",
        dimensions: "12 × 16 cm",
        suitableFor: "Perfume flacons, compacts & luxury cosmetics",
      },
      {
        id: "large",
        label: "Large / Luxury Accessories",
        dimensions: "18 × 24 cm",
        suitableFor: "Silk scarves, lingerie & premium gifting sets",
      },
      {
        id: "custom",
        label: "Bespoke Proportions",
        dimensions: "Custom Sizing",
        suitableFor: "Calibrated to your exact product silhouette",
      },
    ],
    specifications: {
      material: "High-Density Micro-Filament Double-Faced Satin",
      finish: "Silky high-luster surface on both exterior and interior",
      closure: "Matching 10mm or 15mm double-faced satin ribbon drawstring",
      lining: "Self-lined double-faced construction or soft contrast satin",
      minOrderQuantity: "500 units per bespoke production run",
      leadTime: "12–18 business days",
      pantoneMatching: "Exact Pantone matching with dye-bath formulation",
      applications: "Prestige cosmetics, haute perfumery, fine jewellery & bridal packaging",
    },
    brandingOptions: [
      {
        method: "Hot Foil Stamping",
        title: "Foil Debossed Branding",
        description:
          "High-definition foil stamping pressed seamlessly into smooth satin fibers with sharp edges.",
      },
      {
        method: "Screen Printing",
        title: "Micro-Detail Silk Screen",
        description:
          "Fine typographic reproduction with durable, flexible pigment inks.",
      },
      {
        method: "Woven Ribbon",
        title: "Custom Branded Ribbon Drawstrings",
        description:
          "Repeat hot-foiled or screen-printed brand logos along the drawstring ribbon.",
      },
    ],
    faqs: [
      {
        q: "Is double-faced satin smooth on the inside as well?",
        a: "Yes. Double-faced satin features a mirror-smooth finish on both sides, ensuring sensitive polished flacons and jewellery are completely protected from abrasion.",
      },
      {
        q: "Can we print our logo on the drawstring ribbon itself?",
        a: "Absolutely. We can hot foil stamp or screen print repeating brand typography directly onto the matching double-faced satin drawstring ribbons.",
      },
      {
        q: "What colors are available?",
        a: "Every order is customized. We dye the satin fabric to your exact corporate Pantone specifications.",
      },
    ],
    images: [
      {
        src: "/assets/doublefacedsatinpouchsmooth.jpeg",
        alt: "CASA DI BIZ Double-Faced Satin luxury packaging pouch",
      },
    ],
    seo: {
      title: "Double-Faced Satin Pouches | Custom Luxury Packaging | CASA DI BIZ",
      description:
        "Premium double-faced satin drawstring pouches crafted for luxury cosmetics, perfume, and fine jewellery presentation.",
      keywords: [
        "satin pouch",
        "double faced satin pouch",
        "cosmetics packaging pouch",
        "luxury satin drawstring",
        "jewellery pouch manufacturer",
      ],
    },
  },
  {
    slug: "woven-edge-satin",
    name: "Woven Edge Satin Drawstring Pouch",
    eyebrow: "WOVEN EDGE SATIN POUCH",
    tagline: "Crisp Woven Edge • Refined Drape • Tailored Luxury",
    keyCharacteristic: "Woven Selvedge Edge",
    shortDescription:
      "A refined satin pouch featuring precision woven selvedges for crisp architectural edges and a structured luxury silhouette.",
    editorialStory:
      "Combining the smooth sheen of premium satin with reinforced woven edges that prevent fraying and maintain sharp contours. Engineered for couture accessories, timepieces, and flagship brand packaging where architectural structure and soft luster meet.",
    material: "Woven Edge Satin",
    finish: "Semi-Matte Satin with Defined Edge",
    closure: "Corded Drawstring with Gold Aglets",
    applications: "Timepieces • Couture Accessories • High Jewellery",
    styles: ["Drawstring Pouch", "Flat Pouch", "Custom Pouch"],
    sizes: [
      {
        id: "small",
        label: "Small / Jewellery",
        dimensions: "9 × 11 cm",
        suitableFor: "Brooches, cufflinks, rings & signature tokens",
      },
      {
        id: "medium",
        label: "Medium / Watch & Fine Goods",
        dimensions: "11 × 15 cm",
        suitableFor: "Timepieces, leather keyholders & luxury charms",
      },
      {
        id: "large",
        label: "Large / Flagship Accessories",
        dimensions: "16 × 22 cm",
        suitableFor: "Evening clutches, fine leather goods & VIP gifting",
      },
      {
        id: "custom",
        label: "Bespoke Proportions",
        dimensions: "Custom Sizing",
        suitableFor: "Calibrated to your exact product silhouette",
      },
    ],
    specifications: {
      material: "Woven Edge Technical Satin",
      finish: "Crisp selvedge borders with fluid satin panel body",
      closure: "Tailored braided cord with precision machined metal tips",
      lining: "Lined with velvet or anti-tarnish microfiber",
      minOrderQuantity: "500 units per bespoke production run",
      leadTime: "12–18 business days",
      pantoneMatching: "Exact Pantone matching with custom lab dips",
      applications: "Watchmakers, high jewellery salons & flagship boutique packaging",
    },
    brandingOptions: [
      {
        method: "Hot Foil Stamping",
        title: "Sculpted Hot Foil",
        description: "Mirror-metallic foil stamping with micro-etched brass dies.",
      },
      {
        method: "Embossed Monogram",
        title: "Blind Heat Deboss",
        description: "Subtle tactile relief mark pressed directly into the satin.",
      },
      {
        method: "Metal Hardware",
        title: "Custom Engraved Finials",
        description: "Solid brass drawstring finials engraved with your hallmark.",
      },
    ],
    faqs: [
      {
        q: "What makes woven edge satin different from standard satin?",
        a: "Woven edge satin features woven selvedges that do not fray and hold a tailored, crisp structural shape while maintaining a luxurious fluid hand-feel.",
      },
      {
        q: "Can we request custom hardware for the drawstrings?",
        a: "Yes. We manufacture bespoke metal cord stoppers and aglets in gold, silver, rose gold, matte black, and antique bronze.",
      },
    ],
    images: [
      {
        src: "/assets/wovenedge_satinpouch.jpeg",
        alt: "CASA DI BIZ Woven Edge Satin bespoke drawstring pouch",
      },
    ],
    seo: {
      title: "Woven Edge Satin Pouches | Tailored Luxury Packaging | CASA DI BIZ",
      description:
        "Bespoke woven edge satin packaging pouches with non-fray selvedges, custom Pantone dyeing, and precision hardware.",
      keywords: [
        "woven edge satin pouch",
        "luxury watch pouch",
        "bespoke jewellery pouch",
        "custom satin packaging",
      ],
    },
  },
  {
    slug: "cotton-nylon-blend",
    name: "Cotton / Nylon Blend Drawstring Pouch",
    eyebrow: "COTTON / NYLON BLEND POUCH",
    tagline: "Soft • Tactile Texture • Naturally Understated",
    keyCharacteristic: "Artisanal Textured Weave",
    shortDescription:
      "A soft, tactile blend combining natural cotton warmth with nylon durability, crafted for artisanal luxury and understated packaging.",
    editorialStory:
      "Interweaving combed organic cotton fibres with high-tenacity nylon yarns for a matte organic texture that offers remarkable tear resistance and structural longevity. Ideal for conscious luxury, leather goods, artisanal perfumery, and lifestyle brands seeking quiet tactile elegance.",
    material: "Combed Cotton & Nylon Blend",
    finish: "Matte Natural Textile Grain",
    closure: "Organic Cotton Braided Cord",
    applications: "Artisanal Luxury • Leather Goods • Skincare • Lifestyle",
    styles: ["Drawstring Pouch", "Flat Pouch", "Custom Pouch"],
    sizes: [
      {
        id: "small",
        label: "Small / Artisan Goods",
        dimensions: "10 × 12 cm",
        suitableFor: "Artisanal soaps, jewellery, organic balms & small goods",
      },
      {
        id: "medium",
        label: "Medium / Skincare & Leather",
        dimensions: "14 × 18 cm",
        suitableFor: "Skincare jars, wallets, cardholders & accessories",
      },
      {
        id: "large",
        label: "Large / Footwear & Lifestyle",
        dimensions: "22 × 30 cm",
        suitableFor: "Footwear dust bags, handbag protectors & premium apparel",
      },
      {
        id: "custom",
        label: "Bespoke Proportions",
        dimensions: "Custom Sizing",
        suitableFor: "Calibrated to your exact product silhouette",
      },
    ],
    specifications: {
      material: "65% Combed Organic Cotton / 35% High-Tenacity Nylon",
      finish: "Textured natural hand-feel with anti-pilling matte weave",
      closure: "Natural braided cotton cord or twill tape drawstring",
      lining: "Unlined natural reverse or breathable organic cotton lining",
      minOrderQuantity: "500 units per bespoke production run",
      leadTime: "12–18 business days",
      pantoneMatching: "Low-impact reactive dyes matched to Pantone TCX",
      applications: "Clean beauty, organic skincare, heritage leather & artisanal goods",
    },
    brandingOptions: [
      {
        method: "Screen Printing",
        title: "Water-Based Screen Print",
        description: "Soft-hand eco-friendly water-based ink printing.",
      },
      {
        method: "Embroidery",
        title: "Artisanal Chainstitch Embroidery",
        description: "Tactile embroidered typography and brand emblems.",
      },
      {
        method: "Woven Label",
        title: "Damask Woven Brand Labels",
        description: "Organic cotton or recycled damask woven side seam tags.",
      },
    ],
    faqs: [
      {
        q: "Is the cotton/nylon blend durable for repeat customer use?",
        a: "Yes. The nylon core adds high tensile strength and tear resistance, while the cotton exterior ensures a soft, natural, and breathable tactile feel.",
      },
      {
        q: "Can we get unbleached natural ecru as well as custom dyed colors?",
        a: "Yes. We offer pure unbleached natural ecru with subtle organic flecks, as well as low-impact custom Pantone dyeing.",
      },
    ],
    images: [
      {
        src: "/assets/cottonnylonblendpouch.jpeg",
        alt: "CASA DI BIZ Cotton Nylon Blend organic luxury pouch",
      },
    ],
    seo: {
      title: "Cotton Nylon Blend Pouches | Artisanal Luxury Packaging | CASA DI BIZ",
      description:
        "Natural, tactile cotton nylon blend drawstring packaging pouches tailored for organic skincare, leather accessories, and luxury retail.",
      keywords: [
        "cotton nylon pouch",
        "organic cotton drawstring pouch",
        "artisanal packaging pouch",
        "natural luxury dust bag",
      ],
    },
  },
  {
    slug: "sheer-organza",
    name: "Sheer Organza Drawstring Pouch",
    eyebrow: "SHEER ORGANZA POUCH",
    tagline: "Lightweight • Translucent • Delicate & Ethereal",
    keyCharacteristic: "Translucent Delicate Weave",
    shortDescription:
      "An ethereal translucent organza pouch with delicate drape, designed for fine jewellery, bridal accessories and elegant layered presentation.",
    editorialStory:
      "Woven from ultra-fine filament yarns with high structural integrity and transparent clarity. Features refined French seams and matching satin ribbon ties to showcase inner packaging with ethereal sophistication and delicate luxury.",
    material: "High-Tensile Sheer Organza",
    finish: "Crisp Translucent Shimmer",
    closure: "Satin Ribbon Tie Closure",
    applications: "Bridal Accessories • Fine Jewellery • Event Presentation",
    styles: ["Drawstring Pouch", "Flat Pouch", "Custom Pouch"],
    sizes: [
      {
        id: "small",
        label: "Small / Jewellery",
        dimensions: "7 × 9 cm",
        suitableFor: "Bridal rings, delicate gemstones & bespoke charms",
      },
      {
        id: "medium",
        label: "Medium / Keepsakes & Gifts",
        dimensions: "10 × 15 cm",
        suitableFor: "Favours, scented sachets, hair accessories & cosmetics",
      },
      {
        id: "large",
        label: "Large / Apparel Accents",
        dimensions: "15 × 22 cm",
        suitableFor: "Bridal veils, lingerie presentation & evening accessories",
      },
      {
        id: "custom",
        label: "Bespoke Proportions",
        dimensions: "Custom Sizing",
        suitableFor: "Calibrated to your exact product silhouette",
      },
    ],
    specifications: {
      material: "100% High-Tensile Micro-Filament Organza",
      finish: "Translucent crisp weave with subtle light-refracting luster",
      closure: "Double satin ribbon drawstrings with hot-cut sealed ends",
      lining: "Unlined sheer construction with micro French seams",
      minOrderQuantity: "500 units per bespoke production run",
      leadTime: "12–18 business days",
      pantoneMatching: "Exact Pantone matching with sheer yarn dye formulation",
      applications: "Bridal boutiques, fine jewellery salons & VIP event gifting",
    },
    brandingOptions: [
      {
        method: "Hot Foil Stamping",
        title: "Metallic Foil Stamping",
        description: "Precise metallic gold and silver foil stamping onto sheer organza.",
      },
      {
        method: "Silk Screen",
        title: "High-Opacity Silk Screen",
        description: "Opaque crisp typography printed cleanly on translucent mesh.",
      },
      {
        method: "Ribbon Branding",
        title: "Branded Ribbon Drawstrings",
        description: "Foil-stamped logos along the satin drawstring ribbons.",
      },
    ],
    faqs: [
      {
        q: "Does the organza pouch hold its shape when filled?",
        a: "Yes. Our high-tensile organza is woven with crisp structural filaments that hold their silhouette gracefully without collapsing or creasing easily.",
      },
      {
        q: "Can the transparency level and tint be calibrated?",
        a: "Yes. We offer sheer crystal clear, soft frosted, and custom tinted organza matched to your brand colors.",
      },
    ],
    images: [
      {
        src: "/assets/sheer_organza_pouch.jpeg",
        alt: "CASA DI BIZ Sheer Organza luxury bridal and jewellery pouch",
      },
    ],
    seo: {
      title: "Sheer Organza Pouches | Translucent Luxury Packaging | CASA DI BIZ",
      description:
        "Delicate sheer organza drawstring packaging pouches crafted for bridal, jewellery, and luxury event presentations.",
      keywords: [
        "organza pouch",
        "sheer drawstring pouch",
        "bridal jewellery pouch",
        "translucent packaging pouch",
      ],
    },
  },
];

export function getAllPouchSlugs(): string[] {
  return POUCH_PRODUCTS.map((p) => p.slug);
}

export function getPouchProduct(slug: string): PouchProduct | undefined {
  return POUCH_PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedPouchProducts(currentSlug: string, count: number = 3): PouchProduct[] {
  return POUCH_PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
