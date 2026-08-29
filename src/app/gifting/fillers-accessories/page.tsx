import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { GIFTING_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/cats/giftings.png",
  "/assets/cats/giftings.png",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/giftim.jpeg",
  "/assets/flowpackaging.jpg",
];

const FEATURES = [
  { iconName: "Award",     title: "Premium Materials",   desc: "Mill-grade stocks, fabrics and adhesives chosen for feel, not cost." },
  { iconName: "Type",      title: "Custom Branding",     desc: "Your logo, typography and message applied across every piece." },
  { iconName: "Sparkles",  title: "Luxury Finishes",     desc: "Foil stamping, spot UV, soft-touch and embossed detailing." },
  { iconName: "Leaf",      title: "Eco-Friendly Options",desc: "FSC-certified, recycled and biodegradable alternatives." },
  { iconName: "Printer",   title: "High Quality Printing",desc: "Colour-accurate printing with pre-press proofing on every run." },
  { iconName: "Shield",    title: "Durable Construction",desc: "Stocks and adhesives that survive handling, transit and storage." },
  { iconName: "Ruler",     title: "Multiple Sizes",      desc: "Standard formats or fully bespoke dimensions to fit your box." },
  { iconName: "Palette",   title: "Custom Colors",       desc: "Pantone matching across card, tissue, seals and accessories." },
  { iconName: "Gem",       title: "Premium Appearance",  desc: "Small details finished to the same standard as the box itself." },
];

const APPLICATIONS = [
  { iconName: "Crown",      label: "Luxury Retail" },
  { iconName: "Gem",        label: "Jewellery" },
  { iconName: "Shirt",      label: "Fashion" },
  { iconName: "Flower2",    label: "Cosmetics" },
  { iconName: "Droplet",    label: "Perfumes" },
  { iconName: "Briefcase",  label: "Corporate Gifting" },
  { iconName: "Sparkles",   label: "Weddings" },
  { iconName: "Store",      label: "Boutique Stores" },
  { iconName: "PartyPopper",label: "Seasonal Gifts" },
  { iconName: "Package",    label: "Premium Packaging" },
];

const CUSTOMIZATIONS = [
  { iconName: "Layers",    title: "Material",       desc: "Card stock, tissue, vinyl, kraft and speciality papers." },
  { iconName: "Ruler",     title: "Size",           desc: "Standard formats or bespoke dimensions cut to order." },
  { iconName: "Palette",   title: "Color",          desc: "Full Pantone matching with printed proofs before production." },
  { iconName: "Award",     title: "Logo Printing",  desc: "Single-colour, full-colour and screen-printed marks." },
  { iconName: "Sparkles",  title: "Foil Printing",  desc: "Gold, silver, rose and holographic foil stamping." },
  { iconName: "Frame",     title: "Embossing",      desc: "Raised and debossed detailing for a tactile finish." },
  { iconName: "ImageIcon", title: "Custom Artwork", desc: "Studio-developed patterns, illustration and seasonal art." },
  { iconName: "Shapes",    title: "Shapes",         desc: "Die-cut circles, ovals, scallops and bespoke silhouettes." },
  { iconName: "Wand2",     title: "Finishing",      desc: "Matte, gloss, soft-touch and spot UV surface options." },
  { iconName: "Box",       title: "Packaging",      desc: "Bundled, boxed or roll-packed for easy in-store use." },
];

const sub = "fillers-accessories";
const c = GIFTING_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function FillersAccessoriesPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={GIFTING_CATEGORIES}
      categoryPath="gifting"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      faqs={[
        { q: "What is the minimum order quantity?", a: "MOQs start from 500 units for most gifting essentials, with lower quantities available on samples and launch runs." },
        { q: "Can everything be custom printed?", a: "Yes — cards, tissue, seals and accessories can all carry your logo, artwork and brand colours." },
        { q: "What sizes are available?", a: "Standard sizes are stocked, and bespoke dimensions are cut to order to fit your existing boxes and bags." },
        { q: "What materials do you use?", a: "Uncoated and coated card stocks, acid-free tissue, kraft, vinyl and speciality textured papers." },
        { q: "How long does production take?", a: "Typically 10–18 working days after artwork approval, depending on finishes and quantities." },
        { q: "Are samples available before I order?", a: "We supply material swatches free of charge and paid pre-production printed samples for approval." },
        { q: "What are your delivery timelines?", a: "Domestic delivery follows within 3–5 days of dispatch; international freight is quoted by destination." },
      ]}
      ctaText={{
        eyebrow: "NEED CUSTOM GIFTING ESSENTIALS?",
        title: "Create beautiful brand moments with custom cards, tissue, seals, and accessories.",
        desc: "Complete your luxury packaging with elements customized to match your master brand guidelines.",
      }}
    />
  );
}
