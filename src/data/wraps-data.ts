export interface WrapSpecificationItem {
  label: string;
  value: string;
}

export interface WrapApplicationItem {
  title: string;
  description: string;
}

export interface WrapCustomisationItem {
  title: string;
  description: string;
}

export interface WrapFAQItem {
  q: string;
  a: string;
}

export interface WrapProduct {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  positioning: string;
  shortDescription: string;
  longDescription: string;
  materialType: string;
  gsm?: string;
  finish: string;
  texture: string;
  appearance: string;
  bestFor: string[];
  productCharacter: string[];
  image: {
    src: string;
    alt: string;
  };
  materialStory: {
    heading: string;
    paragraphs: string[];
  };
  applications: WrapApplicationItem[];
  specifications: WrapSpecificationItem[];
  customisation: WrapCustomisationItem[];
  faqs: WrapFAQItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const WRAP_PRODUCTS: Record<string, WrapProduct> = {
  "130-gsm-gloss-coated-art-paper": {
    slug: "130-gsm-gloss-coated-art-paper",
    name: "130 GSM Gloss Coated Art Paper",
    categorySlug: "wrapping-paper",
    categoryName: "Wrapping Paper",
    positioning: "Polished, vibrant, and refined.",
    shortDescription:
      "A premium coated art paper with a smooth gloss surface that delivers rich colour reproduction and crisp branding. Ideal for luxury retail packaging, gift presentation, and custom-printed wrapping where a clean, high-impact finish is required.",
    longDescription:
      "Engineered for high-definition visual presentation, our 130 GSM Gloss Coated Art Paper offers an ultra-smooth calendered surface that brings out exceptional depth, saturation, and crispness in full-surface prints and fine brand monograms. The balanced 130 GSM basis weight provides substantial opacity and crisp fold integrity without cracking at the edges, making it the preferred choice for premier boutiques and luxury gift wrapping.",
    materialType: "Coated Art Paper",
    gsm: "130 GSM",
    finish: "Gloss Coated",
    texture: "Ultra-Smooth",
    appearance: "High Gloss & High Colour Clarity",
    bestFor: ["Luxury retail", "Branded wrapping", "Gift presentation"],
    productCharacter: [
      "Smooth coated surface",
      "Gloss appearance",
      "High colour clarity",
      "Rich colour reproduction",
      "Crisp branding",
      "Premium presentation",
    ],
    image: {
      src: "/assets/130_gsm_gloss_coated_paperwrap.jpeg",
      alt: "130 GSM gloss coated art paper for luxury packaging by CASA DI BIZ",
    },
    materialStory: {
      heading: "Engineered for High-Fidelity Colour & Crisp Presentation",
      paragraphs: [
        "The 130 GSM Gloss Coated Art Paper is manufactured with a multi-stage mineral coating process, followed by precision supercalendering. This creates an exceptionally level surface designed for superior ink holdout, allowing vibrant Pantone pigments and intricate graphic artwork to sit brilliantly on the surface without dulling.",
        "At 130 GSM, the stock provides substantial body that wraps cleanly around sharp presentation boxes and gift items, holding defined folds and sharp creases for an immaculate retail presentation.",
      ],
    },
    applications: [
      {
        title: "Luxury Retail",
        description:
          "Crisp branded wrapping for flagship retail stores, high-end department counters, and seasonal merchandising.",
      },
      {
        title: "Branded Wrapping",
        description:
          "Full-bleed repeat patterns, brand monograms, and signature campaign colourways reproduced with pinpoint accuracy.",
      },
      {
        title: "Gift Presentation",
        description:
          "Substantial presentation sheets and rolls for holiday gifting, VIP client presentations, and commemorative packaging.",
      },
    ],
    specifications: [
      { label: "Material Type", value: "Coated Art Paper" },
      { label: "Weight / Caliper", value: "130 GSM" },
      { label: "Surface Finish", value: "Gloss Coated" },
      { label: "Surface Texture", value: "Smooth" },
      { label: "Visual Character", value: "High Colour Clarity & Crisp Definition" },
      { label: "Primary Format", value: "Custom Cut Sheets & Master Rolls" },
      { label: "Suitability", value: "Luxury Retail, Branded Packaging & Gifting" },
    ],
    customisation: [
      {
        title: "Custom Printing & Colour Reproduction",
        description:
          "Full-surface offset and precision digital printing tailored to your exact brand palette and campaign artwork.",
      },
      {
        title: "Brand Logo & Monogram Patterns",
        description:
          "Continuous logo repeats, micro-patterns, and custom geometric layouts with sharp vector reproduction.",
      },
      {
        title: "Pantone Colour Matching",
        description:
          "Exact Pantone Solid Coated lab matching to ensure consistent brand identity across all packaging touchpoints.",
      },
      {
        title: "Custom Dimensions & Formats",
        description:
          "Supplied in custom cut flat sheet dimensions or continuous counter rolls tailored to your operational wrapping stations.",
      },
    ],
    faqs: [
      {
        q: "What is 130 GSM Gloss Coated Art Paper best suited for?",
        a: "It is specifically engineered for luxury retail packaging, branded gift wrapping, and high-impact presentation where vivid colour reproduction and crisp creases are essential.",
      },
      {
        q: "What surface finish does this paper have?",
        a: "It features a smooth mineral-coated gloss surface that delivers exceptional colour clarity, rich saturation, and clean, non-cracking folds.",
      },
      {
        q: "Is custom printing and branding available for this paper?",
        a: "Yes. Custom printing, Pantone colour matching, and bespoke brand logo patterns are fully supported for this product.",
      },
      {
        q: "Can this paper be produced in custom sheet or roll sizes?",
        a: "Yes. We supply this material in custom-cut flat sheets to your exact measurements or continuous counter rolls for in-store packaging stations.",
      },
      {
        q: "How can I request a quotation for this wrapping paper?",
        a: "Click 'Request a Quote' or 'Enquire on WhatsApp' to submit your desired dimensions, estimated quantity, and branding requirements to our packaging team.",
      },
    ],
    seo: {
      title: "130 GSM Gloss Coated Art Paper | Luxury Wrapping Paper | CASA DI BIZ",
      description:
        "Explore CASA DI BIZ 130 GSM Gloss Coated Art Paper, a smooth premium wrapping paper designed for luxury retail, branded packaging and refined gift presentation.",
      keywords: [
        "130 gsm gloss wrapping paper",
        "luxury art paper wrap",
        "custom printed wrapping paper",
        "gloss coated packaging paper",
        "bespoke brand wrapping paper",
        "CASA DI BIZ wraps",
      ],
    },
  },

  "flat-matte-velvet-finish-paper": {
    slug: "flat-matte-velvet-finish-paper",
    name: "Flat Matte Velvet Finish Paper",
    categorySlug: "wrapping-paper",
    categoryName: "Wrapping Paper",
    positioning: "Soft-touch elegance with a sophisticated matte surface.",
    shortDescription:
      "Featuring a smooth, non-reflective velvet-like finish, this paper creates a contemporary and understated luxury feel. Its tactile surface makes it particularly suited to premium brands seeking refined, minimal packaging with a distinctive touch.",
    longDescription:
      "Our Flat Matte Velvet Finish Paper is designed for luxury houses that prioritize tactile intimacy and quiet sophistication. The non-reflective surface absorbs light evenly, creating a velvety, low-sheen aesthetic that complements fine jewellery, horology, and boutique presentations. The soft hand-feel adds a sensory layer to the unboxing ritual, elevating the physical perception of your brand.",
    materialType: "Velvet-Finish Paper",
    finish: "Flat Matte / Velvet Touch",
    texture: "Smooth Tactile / Velvet-Like Hand Feel",
    appearance: "Non-Reflective Matte",
    bestFor: ["Luxury boutiques", "Jewellery", "Premium gifting"],
    productCharacter: [
      "Smooth tactile surface",
      "Matte appearance",
      "Non-reflective",
      "Velvet-like hand feel",
      "Contemporary luxury aesthetic",
    ],
    image: {
      src: "/assets/flat_matte_finish_paperwrap.jpeg",
      alt: "Flat matte velvet finish paper for luxury jewellery packaging by CASA DI BIZ",
    },
    materialStory: {
      heading: "Tactile Understatement for Contemporary Luxury",
      paragraphs: [
        "The Flat Matte Velvet Finish Paper is treated with a specialized matte coating formulation that yields a rich, velvety tactile surface without glare or specular reflection. Under boutique lighting, the paper presents a deep, uniform tone that frames luxury items with understated elegance.",
        "Its tactile surface provides a soft, warm touch during handling, making the physical wrapping process as refined as the final unboxing moment.",
      ],
    },
    applications: [
      {
        title: "Luxury Boutiques",
        description:
          "Subtle, editorial packaging for high-fashion boutiques, bespoke leather goods, and refined lifestyle items.",
      },
      {
        title: "Jewellery & Watch Packaging",
        description:
          "A non-reflective tactile wrap that complements rigid jewellery cases and dark velvet interiors.",
      },
      {
        title: "Premium Gifting",
        description:
          "Elegant presentation wrapping for executive gifts, VIP clientele, and private member gifting.",
      },
    ],
    specifications: [
      { label: "Material Type", value: "Velvet-Finish Paper" },
      { label: "Surface Finish", value: "Flat Matte / Velvet Touch" },
      { label: "Surface Texture", value: "Smooth Tactile" },
      { label: "Visual Character", value: "Non-Reflective, Low-Sheen Luxury" },
      { label: "Hand Feel", value: "Velvet-Like Soft Touch" },
      { label: "Primary Format", value: "Custom Cut Sheets & Continuous Rolls" },
      { label: "Suitability", value: "Luxury Boutiques, Jewellery & Premium Gifting" },
    ],
    customisation: [
      {
        title: "Bespoke Colour Matching",
        description:
          "Available in signature neutral palettes, deep jewel tones, and custom Pantone formulations.",
      },
      {
        title: "Custom Sheet Sizing",
        description:
          "Precision guillotined to custom dimensions to minimize waste and ensure swift store wrapping.",
      },
      {
        title: "Roll & Sheet Conversions",
        description:
          "Available in flat presentation packs or rolled formats for packaging dispatch counters.",
      },
    ],
    faqs: [
      {
        q: "What makes Flat Matte Velvet Finish Paper unique?",
        a: "It features a specialized non-reflective, soft-touch matte finish that provides a velvety tactile sensation and contemporary luxury aesthetic.",
      },
      {
        q: "Which packaging applications is this paper ideal for?",
        a: "It is particularly suited to luxury boutiques, fine jewellery presentations, and premium gifting where an understated, tactile finish is preferred.",
      },
      {
        q: "Does the paper reflect glare under retail lighting?",
        a: "No. The flat matte surface is completely non-reflective, ensuring consistent colour depth and a glare-free presentation under showroom spotlights.",
      },
      {
        q: "Can this paper be supplied in bespoke sizes?",
        a: "Yes. We offer custom sheet and roll conversions according to your operational packaging specifications.",
      },
      {
        q: "How can I request a sample or quotation?",
        a: "Submit your requirement through our 'Request a Quote' form or speak directly with our team on WhatsApp for material samples and bespoke pricing.",
      },
    ],
    seo: {
      title: "Flat Matte Velvet Finish Paper | Luxury Packaging | CASA DI BIZ",
      description:
        "Discover Flat Matte Velvet Finish Paper by CASA DI BIZ. A soft-touch, non-reflective matte wrapping paper engineered for luxury boutiques, jewellery and premium gifting.",
      keywords: [
        "matte velvet wrapping paper",
        "soft touch packaging paper",
        "non-reflective luxury paper",
        "jewellery wrapping paper",
        "velvet finish paper wrap",
        "CASA DI BIZ",
      ],
    },
  },

  "recycled-brown-kraft-paper": {
    slug: "recycled-brown-kraft-paper",
    name: "Recycled Brown Kraft Paper",
    categorySlug: "wrapping-paper",
    categoryName: "Wrapping Paper",
    positioning: "Natural character with an artisanal feel.",
    shortDescription:
      "Made with a recycled brown kraft appearance, this wrapping paper brings an authentic, organic character to packaging. Its visible fibre texture and earthy tone create a warm, handcrafted aesthetic while supporting an eco-conscious brand presentation.",
    longDescription:
      "Crafted for conscious luxury and artisanal brands, our Recycled Brown Kraft Paper pairs unbleached natural aesthetics with reliable wrapping strength. The visible organic fibres and warm kraft hue impart a distinctive textural authenticity that speaks to craftsmanship, heritage, and environmental responsibility. Ideal for organic cosmetics, artisanal culinary goods, and sustainable fashion packaging.",
    materialType: "Recycled Brown Kraft Paper",
    finish: "Natural Kraft / Textured / Rustic",
    texture: "Visible Fibre Texture / Natural Grain",
    appearance: "Natural Earthy Brown",
    bestFor: ["Sustainable brands", "Artisan products", "Natural packaging"],
    productCharacter: [
      "Brown kraft appearance",
      "Visible fibre texture",
      "Natural earthy tone",
      "Rustic tactile character",
      "Eco-conscious positioning",
    ],
    image: {
      src: "/assets/recycled_brown_kraftpaperwrap.jpeg",
      alt: "Recycled brown kraft paper for sustainable luxury packaging by CASA DI BIZ",
    },
    materialStory: {
      heading: "Authentic Fibre Texture & Conscious Craftsmanship",
      paragraphs: [
        "Our Recycled Brown Kraft Paper celebrates the raw, natural qualities of unbleached pulp. The natural variation in tone and visible fiber inclusions create an artisanal texture that feels grounded, authentic, and deliberately handcrafted.",
        "Its tactile integrity makes it exceptionally resilient against tearing, allowing for clean folds around heavier packages while maintaining a warm, eco-conscious aesthetic.",
      ],
    },
    applications: [
      {
        title: "Sustainable Brands",
        description:
          "Eco-conscious presentation for ethical fashion, organic skincare, and circular luxury initiatives.",
      },
      {
        title: "Artisan Products",
        description:
          "Handcrafted feel for studio ceramics, small-batch apothecary goods, and heritage manufactures.",
      },
      {
        title: "Natural Packaging",
        description:
          "Textured outer wrap that pairs seamlessly with cotton twill ribbons, jute cords, and wax seal closures.",
      },
    ],
    specifications: [
      { label: "Material Type", value: "Recycled Brown Kraft Paper" },
      { label: "Surface Finish", value: "Natural Kraft / Textured" },
      { label: "Surface Texture", value: "Visible Fibre Grain" },
      { label: "Colour Character", value: "Warm Earthy Brown" },
      { label: "Tactile Character", value: "Rustic, Organic & Natural" },
      { label: "Primary Format", value: "Custom Cut Sheets & Continuous Rolls" },
      { label: "Suitability", value: "Sustainable Brands, Artisan Products & Natural Packaging" },
    ],
    customisation: [
      {
        title: "Custom Sizing & Sheeting",
        description:
          "Cut-to-size sheets tailored for specific box dimensions, garment wraps, and retail counter rolls.",
      },
      {
        title: "Bespoke Packaging Systems",
        description:
          "Coordinated to pair harmoniously with our kraft bags, cotton ribbons, and recyclable boxes.",
      },
    ],
    faqs: [
      {
        q: "What character does Recycled Brown Kraft Paper bring to packaging?",
        a: "It delivers an authentic, organic aesthetic with visible fiber texture and a warm earthy tone, conveying craftsmanship and eco-conscious luxury.",
      },
      {
        q: "What products are best wrapped in this paper?",
        a: "It is ideal for sustainable fashion brands, artisanal goods, natural cosmetics, and heritage lifestyle collections.",
      },
      {
        q: "Does this paper have a textured finish?",
        a: "Yes. It possesses a natural unbleached kraft surface with visible tactile fiber grain.",
      },
      {
        q: "Can I order this in custom sheet dimensions?",
        a: "Yes, we produce custom-cut sheets and continuous rolls tailored to your packaging workflow.",
      },
      {
        q: "How do I request pricing for bulk orders?",
        a: "Reach out via our 'Request a Quote' form or contact our packaging specialists on WhatsApp with your dimensions and volume requirements.",
      },
    ],
    seo: {
      title: "Recycled Brown Kraft Paper | Luxury & Sustainable Packaging | CASA DI BIZ",
      description:
        "Explore Recycled Brown Kraft Paper by CASA DI BIZ. An authentic, textured natural wrapping paper designed for sustainable luxury brands and artisanal packaging.",
      keywords: [
        "recycled kraft wrapping paper",
        "brown kraft packaging paper",
        "sustainable luxury wrap",
        "artisanal wrapping paper",
        "eco-conscious packaging",
        "CASA DI BIZ",
      ],
    },
  },

  "17-gsm-luxury-tissue-paper": {
    slug: "17-gsm-luxury-tissue-paper",
    name: "17 GSM Luxury Tissue Paper",
    categorySlug: "wrapping-paper",
    categoryName: "Wrapping Paper",
    positioning: "Lightweight, delicate, and effortlessly luxurious.",
    shortDescription:
      "A fine tissue paper designed for elegant inner wrapping and product presentation. Its lightweight, semi-translucent character adds a soft layer of sophistication inside boxes, bags, and gift packaging without overpowering the product.",
    longDescription:
      "Our 17 GSM Luxury Tissue Paper provides the crucial whisper-soft first layer inside fine presentation boxes, apparel bags, and jewellery packages. The gossamer-light 17 GSM basis weight delivers an effortless, crisp rustle upon unboxing, while its semi-translucent veil provides an elegant reveal of the contents beneath.",
    materialType: "Luxury Tissue Paper",
    gsm: "17 GSM",
    finish: "Lightweight / Soft / Semi-Translucent",
    texture: "Delicate & Crisp",
    appearance: "Semi-Translucent Soft Veil",
    bestFor: ["Jewellery", "Luxury boxes", "Inner wrapping", "Gift presentation"],
    productCharacter: [
      "Lightweight",
      "Soft",
      "Semi-translucent",
      "Delicate",
      "Suitable for inner wrapping",
      "Suitable for jewellery and luxury packaging",
    ],
    image: {
      src: "/assets/17_gsm_luxury_tissue_paperwrap.jpeg",
      alt: "17 GSM luxury tissue paper for jewellery and gift packaging by CASA DI BIZ",
    },
    materialStory: {
      heading: "The Whisper-Soft Layer of Luxury Unboxing",
      paragraphs: [
        "At 17 GSM, this tissue paper represents the pinnacle of delicate inner packaging. The carefully balanced fiber network creates a lightweight, semi-translucent sheet that crinkles softly, creating an intimate unboxing ritual that heightens customer anticipation.",
        "Its ultra-fine finish provides a gentle, non-abrasive protective layer over delicate fabrics, polished jewellery metals, leather goods, and fragrance bottles.",
      ],
    },
    applications: [
      {
        title: "Jewellery & Watch Presentation",
        description:
          "Soft inner veil inside rigid presentation boxes to cushion precious metals and gemstones.",
      },
      {
        title: "Luxury Box Lining",
        description:
          "Layered inside magnetic closure boxes and drawer cases for an editorial unboxing reveal.",
      },
      {
        title: "Inner Garment & Accessory Wrapping",
        description:
          "Gentle wrapping layer inside shopping bags for silk scarves, leather accessories, and couture apparel.",
      },
      {
        title: "Gift Presentation",
        description:
          "Volumetric puffing and interleaving inside luxury gift hampers and corporate presentation kits.",
      },
    ],
    specifications: [
      { label: "Material Type", value: "Fine Tissue Paper" },
      { label: "Weight / Caliper", value: "17 GSM" },
      { label: "Surface Finish", value: "Lightweight, Soft & Semi-Translucent" },
      { label: "Tactile Character", value: "Delicate with Crisp Unboxing Rustle" },
      { label: "Opacity", value: "Semi-Translucent Soft Reveal" },
      { label: "Primary Format", value: "Precision Cut Interleaved Sheets" },
      { label: "Suitability", value: "Jewellery, Luxury Boxes, Inner Wrapping & Gifting" },
    ],
    customisation: [
      {
        title: "Custom Sheet Dimensions",
        description:
          "Supplied in pre-cut sheet dimensions sized exactly to fit your box and bag interiors without folding excess.",
      },
      {
        title: "Coordinated Packaging Ensembles",
        description:
          "Tailored to match our rigid jewellery boxes, paper bags, and satin ribbon closures.",
      },
    ],
    faqs: [
      {
        q: "What is the purpose of 17 GSM Luxury Tissue Paper?",
        a: "It serves as an elegant inner wrapping layer inside luxury boxes, bags, and gift packaging, offering a soft unboxing reveal while gently protecting delicate items.",
      },
      {
        q: "Is 17 GSM tissue paper semi-translucent?",
        a: "Yes. The 17 GSM weight provides a soft, semi-translucent veil that subtly reveals the product beneath.",
      },
      {
        q: "Is this tissue paper suitable for fine jewellery packaging?",
        a: "Yes. Its soft, non-abrasive texture makes it ideal for lining jewellery boxes, watches, and precious accessories.",
      },
      {
        q: "What sheet sizes are available?",
        a: "We provide precision cut sheets tailored to your specific box dimensions, bag sizes, or wrapping requirements.",
      },
      {
        q: "How can I enquire about ordering this tissue paper?",
        a: "Use the 'Request a Quote' button or contact us via WhatsApp to share your desired sheet sizes and volume.",
      },
    ],
    seo: {
      title: "17 GSM Luxury Tissue Paper | Jewellery & Gift Packaging | CASA DI BIZ",
      description:
        "Explore CASA DI BIZ 17 GSM Luxury Tissue Paper. Delicate, lightweight, semi-translucent tissue paper designed for jewellery, luxury boxes and inner gift wrapping.",
      keywords: [
        "17 gsm tissue paper",
        "luxury inner wrapping paper",
        "jewellery tissue paper",
        "delicate wrapping tissue",
        "semi translucent tissue paper",
        "CASA DI BIZ",
      ],
    },
  },
};

export function getAllWrapProducts(): WrapProduct[] {
  return Object.values(WRAP_PRODUCTS);
}

export function getAllWrapSlugs(): { category: string; product: string }[] {
  return Object.values(WRAP_PRODUCTS).map((p) => ({
    category: p.categorySlug,
    product: p.slug,
  }));
}

export function getWrapProduct(category: string, productSlug: string): WrapProduct | undefined {
  const product = WRAP_PRODUCTS[productSlug];
  if (!product || product.categorySlug !== category) {
    return undefined;
  }
  return product;
}

export function getRelatedWrapProducts(currentSlug: string): WrapProduct[] {
  return Object.values(WRAP_PRODUCTS).filter((p) => p.slug !== currentSlug);
}
