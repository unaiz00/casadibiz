import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { POUCH_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/cats/pouch.jpeg",
  "/assets/cats/pouch.jpeg",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/boxim.jpeg",
  "/assets/flowpackaging.jpg",
];

const FEATURES = [
  { iconName: "Layers",   title: "Premium Fabric Materials", desc: "Velvet, satin, cotton and micro-suede in signature weights and finishes." },
  { iconName: "Ruler",    title: "Custom Sizes",             desc: "Any dimension — from ring pouches to watch and cosmetic sizes." },
  { iconName: "Printer",  title: "Logo Printing",            desc: "Screen and heat-transfer printing in your exact brand colours." },
  { iconName: "Type",     title: "Embroidery",               desc: "Thread-embroidered logos and monograms with a tactile, heirloom feel." },
  { iconName: "Sparkles", title: "Foil Printing",            desc: "Hot-stamped gold, silver and specialty foils for a luxury finish." },
  { iconName: "Feather",  title: "Drawstring Closure",       desc: "Satin, cotton or leather drawstrings with matched aglets and tips." },
  { iconName: "Ribbon",   title: "Ribbon Closure",           desc: "Wide satin or grosgrain ribbon ties for a hand-gifted presentation." },
  { iconName: "Leaf",     title: "Eco-Friendly Materials",   desc: "Organic cotton, recycled fabrics and low-impact dyes on request." },
  { iconName: "Shield",   title: "Soft Interior Protection", desc: "Lined pouches protect polished surfaces, stones and screens." },
  { iconName: "Scissors", title: "Durable Stitching",        desc: "Reinforced double-stitched seams built for repeat use." },
];

const APPLICATIONS = [
  { iconName: "Gem",        label: "Jewellery" },
  { iconName: "Watch",      label: "Watches" },
  { iconName: "Flower2",    label: "Cosmetics" },
  { iconName: "Droplet",    label: "Perfumes" },
  { iconName: "Crown",      label: "Luxury Retail" },
  { iconName: "Shirt",      label: "Fashion" },
  { iconName: "Briefcase",  label: "Corporate Gifts" },
  { iconName: "Gift",       label: "Premium Gifting" },
  { iconName: "Cpu",        label: "Electronics" },
  { iconName: "PartyPopper",label: "Wedding & Events" },
];

const CUSTOMIZATIONS = [
  { iconName: "Layers",   title: "Fabric Material",     desc: "Velvet, satin, cotton, suede or specialty premium fabrics." },
  { iconName: "Ruler",    title: "Size",                desc: "Any dimension, tailored to your product silhouette." },
  { iconName: "Palette",  title: "Color",               desc: "Full brand-colour dyeing with lab-dip approvals." },
  { iconName: "Award",    title: "Logo Printing",       desc: "Screen, heat-transfer or pad-printed brand marks." },
  { iconName: "Type",     title: "Embroidery",          desc: "Thread-embroidered logos, monograms and typography." },
  { iconName: "Sparkles", title: "Foil Branding",       desc: "Gold, silver and specialty foil stamping." },
  { iconName: "Feather",  title: "Drawstring Type",     desc: "Satin, cotton or leather cords with custom aglets." },
  { iconName: "Ribbon",   title: "Ribbon Type",         desc: "Satin, grosgrain or velvet ribbon closures." },
  { iconName: "Tag",      title: "Custom Labels",       desc: "Woven, printed or leather brand labels." },
  { iconName: "Package",  title: "Packaging Inserts",   desc: "Foam, board and card inserts for structure and protection." },
];

const FINISHES = [
  { iconName: "Sparkles", label: "Gold Foil Printing" },
  { iconName: "Sparkles", label: "Silver Foil Printing" },
  { iconName: "Type",     label: "Embroidery" },
  { iconName: "Printer",  label: "Screen Printing" },
  { iconName: "Wand2",    label: "Heat Transfer Printing" },
  { iconName: "Tag",      label: "Woven Labels" },
  { iconName: "Ribbon",   label: "Satin Ribbon Finish" },
  { iconName: "Scissors", label: "Decorative Stitching" },
  { iconName: "Frame",    label: "Premium Edge Finish" },
];

const sub = "cotton-pouches";
const c = POUCH_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function CottonPouchesPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={POUCH_CATEGORIES}
      categoryPath="pouches"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      finishes={FINISHES}
      faqs={[
        { q: "What is the minimum order quantity?", a: "MOQ starts from 250 units for most pouch styles. Smaller runs can be arranged for sampling or seasonal launches." },
        { q: "What fabrics do you offer?", a: "Velvet, satin, cotton, micro-suede, linen and specialty blends — in a range of weights and finishes." },
        { q: "Can I request a custom size?", a: "Yes — every pouch is built to your dimensions and sampled before production begins." },
        { q: "Can you print or embroider my logo?", a: "Absolutely. Screen printing, heat transfer, foil stamping and thread embroidery are all available." },
        { q: "What printing and embroidery options are available?", a: "Single or multi-colour prints, gold and silver foil, plus flat and 3D thread embroidery in your brand palette." },
        { q: "How long does production take?", a: "Standard lead time is 15–25 working days after artwork approval, depending on branding and finishes." },
        { q: "Are samples available before I order?", a: "We provide unbranded fabric samples and paid pre-production prototypes for approval." },
        { q: "Do you ship internationally?", a: "Yes — we ship globally via sea and air freight, with door-to-door options available." },
      ]}
      ctaText={{
        eyebrow: "NEED CUSTOM LUXURY POUCHES?",
        title: "Create elegant custom pouches that enhance your presentation.",
        desc: "Protect your valuables with style — pouches finished in your fabrics, colours and branding.",
      }}
    />
  );
}
