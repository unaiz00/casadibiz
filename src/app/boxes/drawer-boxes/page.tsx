import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { BOX_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/flowpackaging.jpg",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/boxim.jpeg",
  "/assets/giftim.jpeg",
  "/assets/goodimm.jpeg",
];

const FEATURES = [
  { iconName: "Layers",   title: "Premium Materials",     desc: "Dense board, textured papers and lined interiors sourced from trusted mills." },
  { iconName: "Ruler",    title: "Custom Sizes",          desc: "Every box built to your product's exact dimensions." },
  { iconName: "Printer",  title: "Custom Printing",       desc: "Offset, digital and screen printing in your brand system." },
  { iconName: "Sparkles", title: "Gold / Silver Foiling", desc: "Hot-stamped metallic foils for logos, borders and typography." },
  { iconName: "Type",     title: "Embossing & Debossing", desc: "Raised or recessed detailing that feels as good as it looks." },
  { iconName: "Droplet",  title: "Spot UV",               desc: "Glossy highlights on matte surfaces for a tactile contrast." },
  { iconName: "Wand2",    title: "Matte & Gloss Finish",  desc: "Laminated finishes that protect print and elevate the surface." },
  { iconName: "Leaf",     title: "Eco-Friendly Materials",desc: "FSC-certified boards, recycled papers and soy-based inks on request." },
  { iconName: "Shield",   title: "Durable Construction",  desc: "Reinforced corners and precision-fit lids built to travel." },
];

const APPLICATIONS = [
  { iconName: "Crown",     label: "Luxury Retail" },
  { iconName: "Flower2",   label: "Cosmetics" },
  { iconName: "Droplet",   label: "Perfumes" },
  { iconName: "Gem",       label: "Jewellery" },
  { iconName: "Watch",     label: "Watches" },
  { iconName: "Briefcase", label: "Corporate Gifts" },
  { iconName: "Shirt",     label: "Fashion" },
  { iconName: "Cpu",       label: "Electronics" },
  { iconName: "Gift",      label: "Premium Gifting" },
];

const CUSTOMIZATIONS = [
  { iconName: "Layers",   title: "Material",         desc: "Kraft, rigid board, textured, coated or specialty stocks." },
  { iconName: "Ruler",    title: "Dimensions",       desc: "Any size, any depth — sampled before production." },
  { iconName: "Printer",  title: "Printing",         desc: "CMYK, Pantone-matched spot colours and metallic inks." },
  { iconName: "Palette",  title: "Colors",           desc: "Full brand-colour matching, inside and out." },
  { iconName: "Award",    title: "Logo Branding",    desc: "Foil, emboss, deboss or spot UV placements." },
  { iconName: "Package",  title: "Inserts",          desc: "EVA, foam, velvet or paper inserts, die-cut to fit." },
  { iconName: "Feather",  title: "Ribbon Options",   desc: "Satin, grosgrain or printed ribbons for a signature close." },
  { iconName: "Frame",    title: "Window Cut-outs",  desc: "Precision windows with optional PET film inserts." },
  { iconName: "Box",      title: "Magnetic Closure", desc: "Concealed magnets for a clean, satisfying snap." },
];

const FINISHES = [
  { iconName: "Wand2",       label: "Matte Lamination" },
  { iconName: "Droplet",     label: "Gloss Lamination" },
  { iconName: "Feather",     label: "Soft Touch Finish" },
  { iconName: "Sparkles",    label: "Gold Foiling" },
  { iconName: "Sparkles",    label: "Silver Foiling" },
  { iconName: "Type",        label: "Embossing" },
  { iconName: "Type",        label: "Debossing" },
  { iconName: "Zap",         label: "Spot UV" },
  { iconName: "PaintBucket", label: "Textured Finish" },
];

const sub = "drawer-boxes";
const c = BOX_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function DrawerBoxesPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={BOX_CATEGORIES}
      categoryPath="boxes"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      finishes={FINISHES}
      faqs={[
        { q: "What is the minimum order quantity?", a: "MOQ starts from 100 units for most box constructions. Smaller runs can be arranged for sampling or seasonal launches." },
        { q: "Can I fully customize the box?", a: "Yes. Material, size, printing, foiling, inserts, ribbons and closures are all made to order." },
        { q: "How long does production take?", a: "Standard lead time is 15–25 working days after artwork approval, depending on finishes." },
        { q: "Can I request samples before ordering?", a: "We provide unbranded material samples and paid pre-production prototypes so you can approve before mass production." },
        { q: "What materials do you offer?", a: "Rigid board, coated paper, uncoated textured stock, kraft, specialty and FSC-certified eco papers." },
        { q: "Do you ship worldwide?", a: "Yes — we ship globally via sea and air freight, with door-to-door options available." },
      ]}
      ctaText={{
        eyebrow: "NEED CUSTOM LUXURY BOXES?",
        title: "Create beautiful brand moments with rigid, bespoke packaging.",
        desc: "Protect your items with boxes tailored to your brand's dimensions and finishes.",
      }}
    />
  );
}
