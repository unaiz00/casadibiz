import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { WRAP_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/cats/wraps.png",
  "/assets/cats/wraps.png",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/boxim.jpeg",
  "/assets/flowpackaging.jpg",
];

const FEATURES = [
  { iconName: "Layers",   title: "Premium Paper Quality",  desc: "Heavyweight coated and uncoated stocks with a luxurious hand-feel." },
  { iconName: "Ruler",    title: "Custom Sizes",           desc: "Sheets and rolls cut to any dimension for products of every scale." },
  { iconName: "Printer",  title: "Custom Printing",        desc: "Offset, digital and screen printing in your exact brand palette." },
  { iconName: "Award",    title: "Brand Logo Printing",    desc: "Repeat patterns, monograms and signature marks across every sheet." },
  { iconName: "Sparkles", title: "Gold & Silver Foiling",  desc: "Hot-stamped metallic foils for a rich, reflective finish." },
  { iconName: "Wand2",    title: "Matte & Gloss Finish",   desc: "Choose a soft matte or high-gloss surface to match your brand." },
  { iconName: "Leaf",     title: "Eco-Friendly Materials", desc: "FSC-certified, recycled and biodegradable papers on request." },
  { iconName: "ImageIcon",title: "High Print Quality",     desc: "Sharp, colour-accurate printing with pre-press proofing." },
  { iconName: "Shield",   title: "Tear Resistant",         desc: "Durable stocks that fold, crease and wrap without splitting." },
  { iconName: "Recycle",  title: "Recyclable Options",     desc: "Fully recyclable papers with water-based inks and coatings." },
];

const APPLICATIONS = [
  { iconName: "Crown",      label: "Luxury Retail" },
  { iconName: "Shirt",      label: "Fashion & Apparel" },
  { iconName: "Flower2",    label: "Cosmetics" },
  { iconName: "Droplet",    label: "Perfumes" },
  { iconName: "Gem",        label: "Jewellery" },
  { iconName: "Gift",       label: "Gift Packaging" },
  { iconName: "Briefcase",  label: "Corporate Gifting" },
  { iconName: "Store",      label: "Boutique Stores" },
  { iconName: "Utensils",   label: "Food & Confectionery" },
  { iconName: "PartyPopper",label: "Event & Seasonal" },
];

const CUSTOMIZATIONS = [
  { iconName: "Layers",    title: "Paper Material",       desc: "Coated, uncoated, textured and speciality papers." },
  { iconName: "Ruler",     title: "Sheet Size",           desc: "Custom sheet and roll sizes to fit any product." },
  { iconName: "Palette",   title: "Custom Colors",        desc: "Full-brand Pantone colour matching and lab proofs." },
  { iconName: "ImageIcon", title: "Pattern Design",       desc: "Bespoke repeat patterns, motifs and seasonal artwork." },
  { iconName: "Award",     title: "Logo Printing",        desc: "Signature marks, monograms and typography prints." },
  { iconName: "FileText",  title: "Full Surface Printing",desc: "Edge-to-edge printing across the entire wrap." },
  { iconName: "Sparkles",  title: "Foil Accents",         desc: "Gold, silver and speciality foil highlights." },
  { iconName: "Frame",     title: "Embossed Texture",     desc: "Raised patterns and textured finishes for depth." },
  { iconName: "PartyPopper",title: "Seasonal Designs",    desc: "Limited-run designs for launches and seasons." },
];

const FINISHES = [
  { iconName: "Wand2",    label: "Matte Finish" },
  { iconName: "Sparkles", label: "Gloss Finish" },
  { iconName: "Wand2",    label: "Soft Touch Finish" },
  { iconName: "Sparkles", label: "Gold Foiling" },
  { iconName: "Sparkles", label: "Silver Foiling" },
  { iconName: "ImageIcon",label: "Spot UV" },
  { iconName: "Frame",    label: "Embossing" },
  { iconName: "Frame",    label: "Debossing" },
  { iconName: "Layers",   label: "Textured Paper Finish" },
];

const sub = "wrapping-paper";
const c = WRAP_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function WrappingPaperPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={WRAP_CATEGORIES}
      categoryPath="wraps"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      finishes={FINISHES}
      faqs={[
        { q: "What is the minimum order quantity?", a: "MOQ typically starts from 500 sheets for printed wraps. Smaller runs can be arranged for samples and launches." },
        { q: "What paper types are available?", a: "Coated, uncoated, kraft, textured and speciality papers in a range of weights and finishes." },
        { q: "Can I fully customise the print design?", a: "Yes — send artwork, brand guidelines or a brief and our studio will develop print-ready designs." },
        { q: "What sheet and roll sizes do you offer?", a: "Any size — standard sheets, oversized formats and continuous rolls are all produced to order." },
        { q: "How long does production take?", a: "Standard lead time is 12–20 working days after artwork approval, depending on finishes and quantities." },
        { q: "Are samples available before I order?", a: "We provide unprinted paper swatches and paid pre-production printed samples for approval." },
        { q: "Do you offer eco-friendly materials?", a: "Yes — FSC-certified, recycled and biodegradable papers with water-based inks are available." },
        { q: "Do you ship internationally?", a: "Yes — we ship globally by sea and air freight, with door-to-door options available." },
      ]}
      ctaText={{
        eyebrow: "NEED CUSTOM LUXURY WRAPS?",
        title: "Create beautiful brand moments with custom wraps and tissue papers.",
        desc: "Add a layer of mystery and security to your products with custom styled wraps.",
      }}
    />
  );
}
