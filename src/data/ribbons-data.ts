export interface RibbonWidth {
  mm: number;
  inches: string;
  label: string;
  position: string;
  description: string;
  suitableFor: string[];
}

export interface RibbonColour {
  id: string;
  name: string;
  hex: string;
  pantoneRef?: string;
  image?: string;
}

export interface RibbonImage {
  src: string;
  alt: string;
  role: "hero" | "roll" | "flat" | "texture" | "application" | "branding" | "width-guide";
  label?: string;
}

export interface RibbonApplication {
  title: string;
  category: string;
  description: string;
  recommendedWidth: string;
}

export interface RibbonBrandingOption {
  title: string;
  method: string;
  description: string;
  minimumWidth?: string;
}

export interface RibbonMaterial {
  slug: string;
  name: string;
  code: string;
  tagline: string;
  positioning: string;
  shortDescription: string;
  longDescription: string;
  characteristics: string[];
  bestFor: string[];
  weaveConstruction: string;
  tactileFinish: string;
  composition: string;
  edgeFinish: string;
  spoolPackaging: string;
  widths: RibbonWidth[];
  colours: RibbonColour[];
  images: RibbonImage[];
  applications: RibbonApplication[];
  brandingOptions: RibbonBrandingOption[];
  specifications: {
    composition: string;
    finish: string;
    edgeType: string;
    standardRollLength: string;
    moq: string;
    leadTime: string;
    pantoneMatching: string;
    ecoProfile: string;
  };
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const STANDARD_RIBBON_WIDTHS: RibbonWidth[] = [
  {
    mm: 10,
    inches: '3/8"',
    label: '10 mm (3/8")',
    position: "Narrow Width",
    description: "Delicate and discreet width engineered for fine jewellery packaging, gift tag ties, and understated minimalist branding.",
    suitableFor: [
      "Jewellery packaging",
      "Small gift tags",
      "Small presentation boxes",
      "Minimal branding",
    ],
  },
  {
    mm: 15,
    inches: '5/8"',
    label: '15 mm (5/8")',
    position: "Versatile Width",
    description: "Balanced proportions suited for cosmetics, boutique retail bags, and medium presentation boxes with refined logo repeats.",
    suitableFor: [
      "Boutique packaging",
      "Cosmetics & perfumes",
      "Gift wrapping",
      "Smaller presentation boxes",
    ],
  },
  {
    mm: 25,
    inches: '1"',
    label: '1" (25 mm)',
    position: "Popular Standard Size",
    description: "Our signature flagship width delivering high visual impact, prominent logo readability, and clean bow symmetry on gift boxes.",
    suitableFor: [
      "Retail bags",
      "Apparel packaging",
      "Medium-to-large gift boxes",
      "Strong logo visibility",
    ],
  },
  {
    mm: 38,
    inches: '1.5"',
    label: '1.5" (38 mm)',
    position: "Wide Ribbon Choice",
    description: "Substantial architectural width crafted for statement gift presentation, luxury hampers, ceremonial boxes, and lavish full bows.",
    suitableFor: [
      "Hamper baskets",
      "Luxury presentation boxes",
      "Large gift packaging",
      "Prominent decorative bows",
    ],
  },
];

export const RIBBON_MATERIALS: Record<string, RibbonMaterial> = {
  "cotton-nylon-blend": {
    slug: "cotton-nylon-blend",
    name: "Cotton / Nylon Blend Ribbon",
    code: "RBN-CNB-01",
    tagline: "Artisanal Softness with Structural Resilience",
    positioning: "Soft Hand-Feel",
    shortDescription: "A thoughtfully engineered blend combining organic cotton softness with nylon tensile stability, delivering an understated tactile aesthetic for heritage and artisanal brands.",
    longDescription: "Our Cotton/Nylon Blend ribbon represents the epitome of conscious luxury. By uniting natural cotton fibers with high-strength nylon filaments, this weave achieves an ultra-soft hand-feel that drapes effortlessly while resisting fraying and wrinkling. Perfect for organic cosmetics, fine jewellers, and bespoke boutiques seeking an authentic, tactile presentation.",
    characteristics: [
      "Eco-conscious natural fiber aesthetic",
      "Artisanal packaging character with organic drape",
      "Soft tactile finish with subtle matte texture",
      "High tensile weft preventing elongation under tension",
    ],
    bestFor: [
      "Handmade boutiques",
      "Natural product wrapping",
      "Boutique packaging",
      "Heritage jewellery boxes",
    ],
    weaveConstruction: "Fine cotton warp interlocked with reinforced nylon filament weft",
    tactileFinish: "Soft, organic matte touch with velvety drape",
    composition: "65% Premium Cotton / 35% Filament Nylon",
    edgeFinish: "Heat-sealed micro-woven border preventing fraying",
    spoolPackaging: "100-metre continuous rolls on luxury recyclable wooden cores or kraft spools",
    widths: STANDARD_RIBBON_WIDTHS,
    colours: [
      { id: "natural-ivory", name: "Natural Ivory", hex: "#F6F0E8", pantoneRef: "11-0601 TCX" },
      { id: "oat-cream", name: "Oat Cream", hex: "#EAE2D5", pantoneRef: "12-0703 TCX" },
      { id: "sage-herbal", name: "Sage Herbal", hex: "#8F9B89", pantoneRef: "14-6316 TCX" },
      { id: "charcoal-noir", name: "Charcoal Noir", hex: "#2B2D2F", pantoneRef: "19-3908 TCX" },
      { id: "dusty-rose", name: "Dusty Rose", hex: "#C9A6A1", pantoneRef: "15-1607 TCX" },
    ],
    images: [
      {
        src: "/assets/cotton_nylon_ribbon.jpeg",
        alt: "CASA DI BIZ Cotton Nylon Blend luxury packaging ribbon",
        role: "hero",
        label: "Master Spool Overview",
      },
      {
        src: "/assets/materials/linen.png",
        alt: "CASA DI BIZ Cotton Nylon Blend organic soft-weave texture detail",
        role: "texture",
        label: "Weave Texture Detail",
      },
      {
        src: "/assets/allim.jpeg",
        alt: "CASA DI BIZ artisanal ribbon on bespoke packaging boxes",
        role: "application",
        label: "Boutique Packaging Presentation",
      },
      {
        src: "/assets/giftim.jpeg",
        alt: "CASA DI BIZ custom printed soft ribbon on luxury gift package",
        role: "branding",
        label: "Custom Printed Ribbon Tie",
      },
    ],
    applications: [
      {
        title: "Fine Jewellery Boxes",
        category: "Jewellery Packaging",
        description: "Provides an artisanal tactile contrast against smooth leatherette and rigid jewellery boxes.",
        recommendedWidth: "10 mm or 15 mm",
      },
      {
        title: "Boutique Shopper Ties",
        category: "Retail Packaging",
        description: "Creates soft hand-tied closures for kraft and specialty paper boutique carriers.",
        recommendedWidth: "25 mm",
      },
      {
        title: "Organic Fragrance & Cosmetics",
        category: "Natural Product Wrapping",
        description: "Enhances apothecary bottles and botanical skincare suites with an earth-friendly touch.",
        recommendedWidth: "15 mm or 25 mm",
      },
      {
        title: "Heritage Gifting Hampers",
        category: "Luxury Hampers",
        description: "Bold 38 mm wide ties for artisanal wooden crates, gift hampers, and seasonal collections.",
        recommendedWidth: "38 mm",
      },
    ],
    brandingOptions: [
      {
        title: "Soft Pigment Screen Print",
        method: "Water-based Ink Screen Printing",
        description: "Matte, breathable inks that sink into cotton fibers without creating a rigid plastic surface.",
      },
      {
        title: "Debossed Foil Stamping",
        method: "Hot Foil Stamping",
        description: "Deep relief metallic gold, copper, or silver foil pressed into the textured weave.",
      },
      {
        title: "Continuous Brand Monogram",
        method: "Repeat Logo Printing",
        description: "Precision equidistant logo spacing calibrated to your preferred bow tie dimensions.",
      },
      {
        title: "Pantone-Matched Dyeing",
        method: "Custom Yarn Dyeing",
        description: "Lab-dip colour matching across the full Pantone Matching System (PMS) library.",
      },
    ],
    specifications: {
      composition: "65% Long-staple Cotton, 35% Reinforcing Nylon",
      finish: "Natural Matte Tactile Soft-Hand",
      edgeType: "Woven non-curl selvedge",
      standardRollLength: "100 Metres (Custom lengths available)",
      moq: "500 Metres per custom color / width",
      leadTime: "12–18 Working Days (Bespoke Sampling: 4–6 Days)",
      pantoneMatching: "Exact Pantone Formula Guide / Solid Coated match",
      ecoProfile: "Biodegradable natural cotton component, OEKO-TEX compliant dyes",
    },
    faqs: [
      {
        q: "What makes Cotton/Nylon ribbon ideal for boutique packaging?",
        a: "The blend delivers the organic, natural drape of combed cotton with the structural firmness of nylon, ensuring bows hold their volume without sagging or curling.",
      },
      {
        q: "Can we print intricate logos on this textured weave?",
        a: "Yes. We use micro-screen printing and high-pressure foil stamping calibrated specifically for textured surfaces to maintain crisp logo typography.",
      },
      {
        q: "What are the standard roll lengths supplied?",
        a: "Standard supply is 100-metre spools on reinforced cores. Pre-cut and heat-sealed bespoke lengths are also available upon request.",
      },
      {
        q: "What is the Minimum Order Quantity (MOQ)?",
        a: "Standard MOQ starts from 500 metres per bespoke color and width combination.",
      },
    ],
    seo: {
      title: "Cotton Nylon Blend Ribbon | Custom Luxury Packaging Ribbon | CASA DI BIZ",
      description: "Explore CASA DI BIZ custom cotton/nylon blend ribbons with soft hand-feel and artisanal character. Available in 10 mm, 15 mm, 25 mm, and 38 mm widths with bespoke branding.",
      keywords: [
        "cotton nylon ribbon",
        "custom cotton ribbon",
        "luxury packaging ribbon",
        "artisanal ribbon",
        "bespoke jewellery ribbon",
        "CASA DI BIZ ribbons",
      ],
    },
  },

  "woven-edge-polyester-satin": {
    slug: "woven-edge-polyester-satin",
    name: "Woven Edge Polyester Satin Ribbon",
    code: "RBN-WES-02",
    tagline: "Flawless Lustre with Non-Fray Selvedge Borders",
    positioning: "Durable Finished Edge",
    shortDescription: "A high-density luxury satin ribbon featuring engineered woven selvedges that resist fraying, paired with a mirror-smooth lustrous finish designed for prestigious jewellery and retail packaging.",
    longDescription: "Engineered for uncompromising luxury, our Woven Edge Polyester Satin ribbon delivers an immaculate high-sheen drape. Unlike slit-edge alternatives, each ribbon is woven on precision shuttle looms with reinforced woven borders, ensuring razor-sharp edges that never fray or curl. It serves as the quintessential branding ribbon for international luxury houses, fine jewellers, and confectionery ateliers.",
    characteristics: [
      "Smooth, high-sheen satin surface with uniform light reflection",
      "Defined woven selvedge edges ensuring structural durability and non-fray performance",
      "Refined fluid drape that ties into immaculate, balanced bows",
      "High-density yarn count preventing print bleed and transparency",
    ],
    bestFor: [
      "Apparel boxes",
      "Gifting hampers",
      "Luxury packaging",
      "Uniform branding",
    ],
    weaveConstruction: "Double-faced high-filament count polyester satin with woven selvedge border",
    tactileFinish: "Silky smooth, high-lustre, fluid drape",
    composition: "100% High-Tenacity Filament Polyester",
    edgeFinish: "Integral woven selvedge border (no heat-slit edges)",
    spoolPackaging: "50m and 100m spools on gold-foiled luxury brand spools",
    widths: STANDARD_RIBBON_WIDTHS,
    colours: [
      { id: "champagne-gold", name: "Champagne Gold", hex: "#E3CCA2", pantoneRef: "13-0922 TCX" },
      { id: "classic-navy", name: "Classic Navy", hex: "#0F2744", pantoneRef: "19-4024 TCX" },
      { id: "emerald-luxe", name: "Emerald Luxe", hex: "#1E3F2D", pantoneRef: "19-5513 TCX" },
      { id: "bordeaux-red", name: "Bordeaux Red", hex: "#5B1E28", pantoneRef: "19-1725 TCX" },
      { id: "pearl-white", name: "Pearl White", hex: "#FAF8F5", pantoneRef: "11-0602 TCX" },
      { id: "onyx-black", name: "Onyx Black", hex: "#1A1A1A", pantoneRef: "19-4005 TCX" },
    ],
    images: [
      {
        src: "/assets/woven_edge _polyester_satin_ribbon.jpeg",
        alt: "CASA DI BIZ Woven Edge Polyester Satin luxury ribbon showcase",
        role: "hero",
        label: "Satin Ribbon Roll Display",
      },
      {
        src: "/assets/woven_edge _polyester_satin_ribbon_blue.jpeg",
        alt: "CASA DI BIZ high-density polyester satin smooth weave detail",
        role: "texture",
        label: "Lustrous Satin Texture",
      },
      {
        src: "/assets/woven_edge _polyester_satin_ribbon_white.jpeg",
        alt: "CASA DI BIZ woven edge satin ribbons styled across luxury boxes",
        role: "application",
        label: "Rigid Box Presentation",
      },
      {
        src: "/assets/woven_edge _polyester_satin_ribbon_green.jpeg",
        alt: "CASA DI BIZ gold foil printed satin ribbon tying a bespoke gift box",
        role: "branding",
        label: "Hot Stamped Foil Detailing",
      },
    ],
    applications: [
      {
        title: "Rigid Jewellery & Watch Boxes",
        category: "Jewellery Packaging",
        description: "Creates an opulent, mirror-sheen exterior wrap around luxury hinged presentation cases.",
        recommendedWidth: "15 mm or 25 mm",
      },
      {
        title: "Luxury Apparel Packaging",
        category: "Apparel Boxes",
        description: "Generous 38 mm satin ribbon closures that elevate garments and cashmere unboxing.",
        recommendedWidth: "38 mm",
      },
      {
        title: "Curated Gift Hampers",
        category: "Gifting Hampers",
        description: "Resilient double-faced satin ties for multi-tier gourmet hampers and corporate gifting.",
        recommendedWidth: "25 mm or 38 mm",
      },
      {
        title: "Boutique Retail Shoppers",
        category: "Uniform Branding",
        description: "Threaded through turn-top eyelets or knotted as bag handles and closure bows.",
        recommendedWidth: "25 mm",
      },
    ],
    brandingOptions: [
      {
        title: "Metallic Hot Foil Stamping",
        method: "High-Temperature Precision Foil Press",
        description: "Reflective mirror gold, platinum, and rose gold foils applied with crisp edge definition.",
      },
      {
        title: "Raised 3D Silicone Printing",
        method: "Dimensional Polymer Print",
        description: "Subtle tactile rubberized embossing creating an ultra-modern tactile relief.",
      },
      {
        title: "Rotary Screen Printing",
        method: "Continuous Screen Print",
        description: "Sharp opaque ink reproduction for crisp typography, monograms, and brand slogans.",
      },
      {
        title: "Jacquard Weave Integration",
        method: "Woven Logo Technique",
        description: "Your logo woven directly into the fabric structure using contrasting lustrous warp threads.",
      },
    ],
    specifications: {
      composition: "100% High-Tenacity Polyester Filament",
      finish: "Double-Faced High Sheen Satin",
      edgeType: "Reinforced woven selvedge edge (Non-fray)",
      standardRollLength: "100 Metres (50m, 200m or custom spools)",
      moq: "500 Metres per color / width",
      leadTime: "10–15 Working Days",
      pantoneMatching: "Exact Pantone Solid Coated / Textile TCX matching",
      ecoProfile: "Recycled rPET polyester options available upon request",
    },
    faqs: [
      {
        q: "What is the difference between woven edge and cut edge satin?",
        a: "Slit or cut edge ribbons are cut from large fabric rolls and heat-sealed, which can leave sharp or rough edges that fray. Woven edge satin is individually woven on narrow looms with genuine selvedge borders, ensuring smooth, non-fray edges and superior drape.",
      },
      {
        q: "Is this ribbon double-faced or single-faced?",
        a: "Our standard luxury satin is double-faced, exhibiting identical mirror-smooth lustre and color vibrancy on both sides.",
      },
      {
        q: "Can we order custom widths outside the standard 10–38 mm?",
        a: "Yes. We support custom narrow-loom setups ranging from 6 mm up to 100 mm for signature bespoke packaging projects.",
      },
    ],
    seo: {
      title: "Woven Edge Polyester Satin Ribbon | Luxury Packaging Ribbon | CASA DI BIZ",
      description: "Discover CASA DI BIZ woven edge polyester satin ribbon with mirror-smooth lustre and durable non-fray edges. Available in 10 mm, 15 mm, 25 mm, and 38 mm widths.",
      keywords: [
        "woven edge satin ribbon",
        "custom satin ribbon",
        "luxury packaging satin",
        "double faced satin ribbon",
        "hot stamped satin ribbon",
        "CASA DI BIZ satin",
      ],
    },
  },

  "matte-grosgrain": {
    slug: "matte-grosgrain",
    name: "Matte Grosgrain Ribbon (Ribbed)",
    code: "RBN-MGR-03",
    tagline: "Architectural Ribs with Firm Bow Architecture",
    positioning: "Traditional Ribbed Texture",
    shortDescription: "A structured, corded grosgrain ribbon characterized by pronounced horizontal ribs and a sophisticated matte surface that creates crisp, architectural bows that hold their shape.",
    longDescription: "Recognized for its tailored, equestrian elegance, our Matte Grosgrain ribbon features a densely woven ribbed construction. The heavy transverse cords provide structural rigidity, ensuring that bows maintain a voluminous three-dimensional shape without wilting. The matte finish diffuses light softly, offering an understated alternative to glossy satins.",
    characteristics: [
      "Pronounced ribbed construction offering high tactile friction",
      "Structured appearance that holds crisp knots and voluminous bows",
      "Sophisticated matte finish without excessive glare or slip",
      "High tensile durability and resistance to crush deformation",
    ],
    bestFor: [
      "Classic packaging",
      "Luxury gifts",
      "Structured bows",
      "Premium presentation",
    ],
    weaveConstruction: "Heavy horizontal weft cords densely bound by fine warp yarns (Corded Rib)",
    tactileFinish: "Textured, tactile ribbed grain with dry matte hand",
    composition: "100% Premium Spun Polyester & High-Denier Weft Cords",
    edgeFinish: "Integrated reinforced corded selvedge",
    spoolPackaging: "100-metre spools on heavy-duty wooden or kraft cores",
    widths: STANDARD_RIBBON_WIDTHS,
    colours: [
      { id: "midnight-navy", name: "Midnight Navy", hex: "#0F2744", pantoneRef: "19-3921 TCX" },
      { id: "taupe-pebble", name: "Taupe Pebble", hex: "#8C8275", pantoneRef: "17-0808 TCX" },
      { id: "forest-pine", name: "Forest Pine", hex: "#1C3326", pantoneRef: "19-5411 TCX" },
      { id: "warm-sand", name: "Warm Sand", hex: "#D9CAB3", pantoneRef: "13-0908 TCX" },
      { id: "crimson", name: "Crimson", hex: "#6B1D24", pantoneRef: "19-1663 TCX" },
      { id: "noir", name: "Noir", hex: "#181818", pantoneRef: "19-4007 TCX" },
    ],
    images: [
      {
        src: "/assets/matte_grosgrain_ribbed.jpeg",
        alt: "CASA DI BIZ Matte Grosgrain ribbed luxury packaging ribbon",
        role: "hero",
        label: "Grosgrain Spool Display",
      },
      {
        src: "/assets/matte_gross_ribbon_ribbed_white.jpeg",
        alt: "CASA DI BIZ grosgrain pronounced horizontal corded rib texture",
        role: "texture",
        label: "Ribbed Weave Texture",
      },
      {
        src: "/assets/matte_gross_ribbon_ribbed_red.jpeg",
        alt: "CASA DI BIZ grosgrain ribbon tied on rigid jewellery box",
        role: "application",
        label: "Architectural Box Bow",
      },
      {
        src: "/assets/matte_gross_ribbon_ribbed_green.jpeg",
        alt: "CASA DI BIZ bespoke matte grosgrain packaging presentation",
        role: "branding",
        label: "Printed Monogram Detailing",
      },
    ],
    applications: [
      {
        title: "Structured Jewellery Boxes",
        category: "Classic Packaging",
        description: "The non-slip ribbed weave creates tight, crisp square knots that stay fastened in transit.",
        recommendedWidth: "10 mm or 15 mm",
      },
      {
        title: "Boutique Paper Bag Handles",
        category: "Boutique Bags",
        description: "Used as soft-yet-sturdy carrier handles slotted into reinforced bag top-folds.",
        recommendedWidth: "25 mm",
      },
      {
        title: "Haute Horlogerie & Watch Cases",
        category: "Luxury Gifts",
        description: "Architectural grosgrain ties providing a distinguished, tailored finish for timepieces.",
        recommendedWidth: "25 mm or 38 mm",
      },
      {
        title: "Statement Presentation Boxes",
        category: "Structured Bows",
        description: "Heavyweight 38 mm ribbon holding wide loops without droop for high-end retail suites.",
        recommendedWidth: "38 mm",
      },
    ],
    brandingOptions: [
      {
        title: "High-Build Screen Print",
        method: "Thick Film Screen Print",
        description: "Crisp ink deposits that bridge the ribbed channels without distortion.",
      },
      {
        title: "Metallic Foil Deboss",
        method: "Precision Heated Die Stamping",
        description: "Deep relief stamping flattening the ribs beneath the gold or silver foil.",
      },
      {
        title: "Jacquard Woven Pattern",
        method: "Woven Weft Relief",
        description: "Inverted weave structures creating subtle self-color or two-tone brand patterns.",
      },
      {
        title: "Custom Cut-to-Length with Sealed Ends",
        method: "Ultrasonic / Angle Cut",
        description: "Pre-cut ribbons with sealed 45-degree angle or swallowtail ends ready for production lines.",
      },
    ],
    specifications: {
      composition: "100% High-Density Polyester with Corded Weft",
      finish: "Tactile Matte Ribbed Weave",
      edgeType: "Reinforced selvedge rib",
      standardRollLength: "100 Metres",
      moq: "500 Metres per color / width",
      leadTime: "12–16 Working Days",
      pantoneMatching: "Exact Pantone Formula Guide matching",
      ecoProfile: "Certified low-impact colorants, OEKO-TEX Standard 100",
    },
    faqs: [
      {
        q: "Why choose Grosgrain ribbon over Satin ribbon?",
        a: "Grosgrain offers a tailored, structured look with pronounced horizontal ribs. Its non-slip texture makes it easier to tie tightly, and its rigidity ensures bows hold a crisp, upright shape.",
      },
      {
        q: "Does the ribbed texture affect print clarity?",
        a: "We utilize specialized high-density screen inks and calibrated stamping dies that maintain pin-sharp typography across the ribbed grooves.",
      },
      {
        q: "Can this ribbon be used as paper bag handles?",
        a: "Yes. Grosgrain ribbon (especially in 25 mm and 38 mm widths) is widely specified for luxury paper bag handles due to its comfort and high tensile strength.",
      },
    ],
    seo: {
      title: "Matte Grosgrain Ribbon | Custom Luxury Packaging Ribbon | CASA DI BIZ",
      description: "Explore CASA DI BIZ matte grosgrain ribbon with a refined ribbed texture, available in 10 mm, 15 mm, 25 mm and 38 mm widths with custom colours and branding options.",
      keywords: [
        "matte grosgrain ribbon",
        "ribbed packaging ribbon",
        "custom grosgrain ribbon",
        "luxury packaging ribbon",
        "structured ribbon bows",
        "CASA DI BIZ grosgrain",
      ],
    },
  },

  "sheer-organza": {
    slug: "sheer-organza",
    name: "Sheer Organza Ribbon",
    code: "RBN-SOG-04",
    tagline: "Translucent Ethereal Weave with Soft Sheen",
    positioning: "Translucent & Delicate",
    shortDescription: "An ultra-lightweight, translucent ribbon woven from fine open-weave monofilaments with reinforced satin borders, creating an ethereal and luminous layer for high-end gifting.",
    longDescription: "Our Sheer Organza ribbon introduces airy lightness and romantic translucency to bespoke packaging. Woven with an ultra-fine open mesh structure, it catches and diffuses light delicately while allowing packaging textures and colours underneath to subtly show through. Equipped with stitched satin selvedges, it maintains bow structure despite its whisper-light weight.",
    characteristics: [
      "Lightweight, translucent open weave allowing underlying packaging to shimmer through",
      "Fine open filament construction offering subtle optical sheen",
      "Engineered woven satin selvedge borders for structural bow hold",
      "Delicate, weightless drape suited for multi-ribbon layered styling",
    ],
    bestFor: [
      "Floral arrangements",
      "Wedding favours",
      "Fragrance packaging",
      "Delicate gift presentation",
    ],
    weaveConstruction: "Plain open monofilament gauze weave with reinforced satin selvedge edges",
    tactileFinish: "Crisp, airy, lightweight with delicate crystalline sheen",
    composition: "100% Fine Denier Polyamide / Polyester Filament",
    edgeFinish: "Woven narrow satin border preventing edge unravelling",
    spoolPackaging: "50m and 100m spools on crystal clear or gold-foiled spools",
    widths: STANDARD_RIBBON_WIDTHS,
    colours: [
      { id: "crystal-white", name: "Crystal White", hex: "#FDFCFA", pantoneRef: "11-4001 TCX" },
      { id: "champagne-shimmer", name: "Champagne Shimmer", hex: "#EFE4CD", pantoneRef: "12-0710 TCX" },
      { id: "blush-petal", name: "Blush Petal", hex: "#F3D8D8", pantoneRef: "12-1406 TCX" },
      { id: "soft-gold", name: "Soft Gold", hex: "#D4BC8B", pantoneRef: "14-1036 TCX" },
      { id: "powder-blue", name: "Powder Blue", hex: "#CADAE3", pantoneRef: "13-4308 TCX" },
    ],
    images: [
      {
        src: "/assets/sheer_organza_transparent_ribbon.jpeg",
        alt: "CASA DI BIZ Sheer Organza translucent transparency luxury ribbon roll",
        role: "hero",
        label: "Organza Ribbon Overview",
      },
      {
        src: "/assets/materials/specialpaper.png",
        alt: "CASA DI BIZ fine translucent open weave organza texture",
        role: "texture",
        label: "Translucent Mesh Detail",
      },
      {
        src: "/assets/allllllimm.jpeg",
        alt: "CASA DI BIZ sheer organza ribbon styled with fragrance packaging",
        role: "application",
        label: "Delicate Fragrance Styling",
      },
      {
        src: "/assets/flowpackaging.jpg",
        alt: "CASA DI BIZ custom printed organza ribbon on luxury wedding suite",
        role: "branding",
        label: "Ethereal Gift Tie",
      },
    ],
    applications: [
      {
        title: "Fine Fragrance & Perfume Bottles",
        category: "Fragrance Packaging",
        description: "Tied around bottle collars and presentation boxes to add an airy, floating aesthetic.",
        recommendedWidth: "10 mm or 15 mm",
      },
      {
        title: "Haute Couture Wedding Favours",
        category: "Wedding Favours",
        description: "Luminous, romantic bows for bridal stationery, bomboniere, and confectionery pouches.",
        recommendedWidth: "15 mm or 25 mm",
      },
      {
        title: "Artisanal Floral Packaging",
        category: "Floral Arrangements",
        description: "Fluid water-resistant ribbons framing bridal bouquets and luxury botanical boxes.",
        recommendedWidth: "25 mm or 38 mm",
      },
      {
        title: "Layered Ribbon Styling",
        category: "Delicate Gift Presentation",
        description: "Layered atop solid satin or grosgrain ribbons to create multi-dimensional visual depth.",
        recommendedWidth: "25 mm or 38 mm",
      },
    ],
    brandingOptions: [
      {
        title: "Crisp Foil Stamping",
        method: "Fine-Line Metallic Stamping",
        description: "Reflective metallic accents that float against the translucent mesh.",
      },
      {
        title: "Precision Micro-Screen Print",
        method: "High-Tension Screen Printing",
        description: "Opaque white or tonal inks creating ethereal floating text and monograms.",
      },
      {
        title: "Metallic Edge Border",
        method: "Lurex Selvedge Weaving",
        description: "Woven gold or silver metallic thread along the outer selvedge borders.",
      },
      {
        title: "Bespoke Tint Dyeing",
        method: "Pantone Translucent Matching",
        description: "Custom hue calibration specifically for sheer optical transparency.",
      },
    ],
    specifications: {
      composition: "100% Fine Denier Polyamide Monofilament",
      finish: "Translucent Ethereal Sheer with Satin Selvedge",
      edgeType: "Woven satin-finish border (Non-fraying)",
      standardRollLength: "100 Metres (50m spools also available)",
      moq: "500 Metres per bespoke color / width",
      leadTime: "12–15 Working Days",
      pantoneMatching: "Exact Pantone matching calibrated for sheer transparency",
      ecoProfile: "REACH & OEKO-TEX Standard 100 certified non-toxic dyes",
    },
    faqs: [
      {
        q: "Is Sheer Organza durable enough to tie tight bows?",
        a: "Yes. Our organza is woven with reinforced satin selvedges along both edges, providing tensile stability and preventing the delicate mesh from tearing when knotted.",
      },
      {
        q: "Can you print logos on translucent organza?",
        a: "Yes. We specialize in high-opacity screen inks and micro-foil stamping that remain crisp and clearly legible against the sheer fabric.",
      },
      {
        q: "Is this ribbon suitable for layering with other materials?",
        a: "Absolutely. Layering sheer organza over solid satin or matte grosgrain is a signature technique used by luxury gift curators to create dimensional luxury.",
      },
    ],
    seo: {
      title: "Sheer Organza Ribbon | Custom Luxury Packaging Ribbon | CASA DI BIZ",
      description: "Explore CASA DI BIZ sheer organza ribbon with a delicate translucent weave, available in 10 mm, 15 mm, 25 mm and 38 mm widths with bespoke branding.",
      keywords: [
        "sheer organza ribbon",
        "translucent packaging ribbon",
        "custom organza ribbon",
        "wedding gift ribbon",
        "perfume packaging ribbon",
        "CASA DI BIZ organza",
      ],
    },
  },
};

export function getAllRibbonSlugs(): string[] {
  return Object.keys(RIBBON_MATERIALS);
}

export function getAllRibbonMaterials(): RibbonMaterial[] {
  return Object.values(RIBBON_MATERIALS);
}

export function getRibbonMaterial(slug: string): RibbonMaterial | undefined {
  return RIBBON_MATERIALS[slug];
}

export function getRelatedRibbonMaterials(currentSlug: string, count: number = 3): RibbonMaterial[] {
  return Object.values(RIBBON_MATERIALS)
    .filter((m) => m.slug !== currentSlug)
    .slice(0, count);
}
