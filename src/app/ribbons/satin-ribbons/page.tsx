import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { RIBBON_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/cats/ribbon.png",
  "/assets/cats/ribbon.png",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/giftim.jpeg",
  "/assets/flowpackaging.jpg",
];

const FEATURES = [
  { iconName: "Layers",    title: "Premium Fabric Quality", desc: "Densely woven satin, grosgrain and speciality weaves with a rich hand-feel." },
  { iconName: "Ruler",     title: "Custom Widths",          desc: "Ribbons cut and woven to any width, from delicate 6mm to broad 100mm+." },
  { iconName: "Palette",   title: "Custom Colors",          desc: "Full Pantone colour matching, dyed to your exact brand palette." },
  { iconName: "Award",     title: "Logo Printing",          desc: "Screen and heat-transfer logo prints in sharp, colour-accurate detail." },
  { iconName: "Sparkles",  title: "Foil Printing",          desc: "Hot-stamped gold, silver and metallic foils for a reflective luxe finish." },
  { iconName: "Type",      title: "Woven Finish",           desc: "Jacquard-woven logos, monograms and edge details woven into the ribbon." },
  { iconName: "Heart",     title: "Soft & Durable",         desc: "A soft drape with the strength to hold a crisp bow, closure or tie." },
  { iconName: "Shield",    title: "Fade Resistant",         desc: "Colourfast dyes and prints that hold their tone over time and handling." },
  { iconName: "Leaf",      title: "Eco-Friendly Options",   desc: "Recycled polyester, cotton and biodegradable ribbon options on request." },
  { iconName: "Crown",     title: "Luxury Appearance",      desc: "The considered finishing touch that elevates every gift and package." },
];

const APPLICATIONS = [
  { iconName: "Crown",       label: "Luxury Retail" },
  { iconName: "Gift",        label: "Gift Packaging" },
  { iconName: "Gem",         label: "Jewellery" },
  { iconName: "Flower2",     label: "Cosmetics" },
  { iconName: "Shirt",       label: "Fashion & Apparel" },
  { iconName: "Briefcase",   label: "Corporate Gifting" },
  { iconName: "Heart",       label: "Wedding & Event" },
  { iconName: "Store",       label: "Boutique Stores" },
  { iconName: "Utensils",    label: "Gourmet Food" },
  { iconName: "PartyPopper", label: "Seasonal & Festive" },
];

const CUSTOMIZATIONS = [
  { iconName: "Layers",   title: "Ribbon Material",    desc: "Satin, grosgrain, cotton, velvet and speciality weaves." },
  { iconName: "Ruler",    title: "Width",              desc: "Any width from delicate slims to broad signature bands." },
  { iconName: "Ruler",    title: "Length",             desc: "Cut-to-length pieces or continuous rolls to fit any run." },
  { iconName: "Palette",  title: "Custom Colors",      desc: "Pantone-matched dyeing across the full colour spectrum." },
  { iconName: "Award",    title: "Logo Printing",      desc: "Repeat logo prints, monograms and typography across the ribbon." },
  { iconName: "Sparkles", title: "Foil Printing",      desc: "Gold, silver and metallic foil-stamped detailing." },
  { iconName: "Type",     title: "Woven Branding",     desc: "Jacquard-woven logos and text integrated into the weave." },
  { iconName: "ImageIcon",title: "Pattern Design",     desc: "Bespoke stripes, motifs and seasonal artwork." },
  { iconName: "Scissors", title: "Edge Finish",        desc: "Cut, sealed, pinked or metallic-edge finishes." },
  { iconName: "Frame",    title: "Custom Spools",      desc: "Branded spools, sleeves and gift-ready ribbon sets." },
];

const FINISHES = [
  { iconName: "Wand2",     label: "Satin Finish" },
  { iconName: "Layers",    label: "Grosgrain Texture" },
  { iconName: "Sparkles",  label: "Gold Foil Printing" },
  { iconName: "Sparkles",  label: "Silver Foil Printing" },
  { iconName: "Printer",   label: "Screen Printing" },
  { iconName: "Printer",   label: "Heat Transfer Printing" },
  { iconName: "Type",      label: "Woven Logo" },
  { iconName: "Sparkles",  label: "Metallic Edge Finish" },
  { iconName: "Frame",     label: "Decorative Ribbon Finish" },
];

const sub = "satin-ribbons";
const c = RIBBON_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function SatinRibbonsPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={RIBBON_CATEGORIES}
      categoryPath="ribbons"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      finishes={FINISHES}
      faqs={[
        { q: "What is the minimum order quantity?", a: "MOQ typically starts from 500 metres per design for printed and woven ribbons. Smaller runs can be arranged for samples and launches." },
        { q: "What ribbon materials are available?", a: "Satin, grosgrain, cotton, velvet, organza and speciality metallic weaves in a range of weights." },
        { q: "What widths and lengths do you offer?", a: "Any width from 6mm delicate slims to 100mm+ signature bands, in cut lengths or continuous rolls." },
        { q: "What logo printing options are available?", a: "Screen printing, heat-transfer printing, foil stamping and jacquard-woven logos." },
        { q: "Can you match my exact brand colours?", a: "Yes — we Pantone-match ribbon dyeing and print colours with pre-production lab dips and proofs." },
        { q: "How long does production take?", a: "Standard lead time is 15–25 working days after artwork and colour approval, depending on finish and quantity." },
        { q: "Are samples available before I order?", a: "We provide fabric swatches and paid pre-production printed or woven samples for approval." },
        { q: "Do you ship internationally?", a: "Yes — we ship globally by sea and air freight, with door-to-door options available." },
      ]}
      ctaText={{
        eyebrow: "NEED CUSTOM LUXURY RIBBONS?",
        title: "Create beautiful brand moments with custom ribbons.",
        desc: "Add the perfect signature tie to your packaging — ribbons styled and printed for your brand.",
      }}
    />
  );
}
