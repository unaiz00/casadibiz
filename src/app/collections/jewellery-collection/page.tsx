import type { Metadata } from "next";
import SubCategoryDetailClient from "@/components/SubCategoryDetailClient";
import { COLLECTION_CATEGORIES } from "../page";

const GALLERY = [
  "/assets/cats/collection.png",
  "/assets/cats/collection.png",
  "/assets/allim.jpeg",
  "/assets/allimages.jpeg",
  "/assets/allllllimm.jpeg",
  "/assets/imsecc5.jpeg",
  "/assets/boxim.jpeg",
  "/assets/flowpackaging.jpg",
];

const INCLUDED = [
  { iconName: "Package",     title: "Luxury Boxes",   desc: "Rigid, magnetic and drawer boxes built to your dimensions." },
  { iconName: "ShoppingBag", title: "Premium Bags",   desc: "Rope-handle and ribbon-handle bags in matching stock." },
  { iconName: "Boxes",       title: "Fabric Pouches", desc: "Velvet, satin, cotton and suede pouches with custom ties." },
  { iconName: "FileText",    title: "Wrapping Paper", desc: "Printed wraps in your palette, patterns and monogram." },
  { iconName: "Layers",      title: "Tissue Paper",   desc: "Acid-free tissue, plain or logo-repeat printed." },
  { iconName: "Ribbon",      title: "Ribbons",        desc: "Satin, grosgrain and printed ribbon cut to length." },
  { iconName: "Gift",        title: "Gift Cards",     desc: "Foiled cards, notes and message inserts on thick stock." },
  { iconName: "Sticker",     title: "Stickers & Seals", desc: "Die-cut labels and embossed seals to close the box." },
  { iconName: "Frame",       title: "Accessories",    desc: "Inserts, fillers, tags and twine that hold it together." },
];

const FEATURES = [
  { iconName: "Boxes",     title: "Complete Packaging Solution", desc: "Every element of the unboxing designed and produced together." },
  { iconName: "Wand2",     title: "Fully Customizable",          desc: "Sizes, materials, colours and finishes built to your brief." },
  { iconName: "BadgeCheck",title: "Brand Consistency",           desc: "One palette and one finishing language across every piece." },
  { iconName: "Award",     title: "Premium Materials",           desc: "Mill-grade boards, fabrics and papers with a real hand-feel." },
  { iconName: "Leaf",      title: "Eco-Friendly Options",        desc: "FSC-certified, recycled and biodegradable alternatives." },
  { iconName: "Sparkles",  title: "Luxury Finishes",             desc: "Foiling, embossing, soft-touch and spot UV detailing." },
  { iconName: "Factory",   title: "Bulk Manufacturing",          desc: "In-house capacity for large, repeatable production runs." },
  { iconName: "Timer",     title: "Fast Production",             desc: "Planned schedules that hold for launches and seasons." },
  { iconName: "Printer",   title: "High Quality Printing",       desc: "Colour-accurate offset and digital printing with proofs." },
];

const APPLICATIONS = [
  { iconName: "Crown",      label: "Luxury Retail" },
  { iconName: "Gem",        label: "Jewellery Brands" },
  { iconName: "Briefcase",  label: "Corporate Events" },
  { iconName: "Flower2",    label: "Weddings" },
  { iconName: "Store",      label: "Boutiques" },
  { iconName: "Droplet",    label: "Cosmetics" },
  { iconName: "Shirt",      label: "Fashion" },
  { iconName: "Gift",       label: "Premium Gifts" },
  { iconName: "PartyPopper",label: "Seasonal Campaigns" },
];

const CUSTOMIZATIONS = [
  { iconName: "Package",    title: "Box Styles",            desc: "Rigid, magnetic, drawer, shoulder-neck and collapsible." },
  { iconName: "ShoppingBag",title: "Bag Styles",            desc: "Boutique, shopper, gusseted and flat-handle formats." },
  { iconName: "Layers",     title: "Materials",             desc: "Greyboard, art paper, kraft, velvet, satin and suede." },
  { iconName: "Palette",    title: "Colors",                desc: "Full Pantone matching with lab-dip and print proofs." },
  { iconName: "Award",      title: "Logo Printing",         desc: "Screen, offset and digital logo application." },
  { iconName: "Sparkles",   title: "Foiling",               desc: "Gold, silver, rose and speciality foil stamping." },
  { iconName: "Frame",      title: "Embossing",             desc: "Raised and debossed marks for a tactile signature." },
  { iconName: "Ribbon",     title: "Ribbon Selection",      desc: "Satin, grosgrain and printed ribbon in any width." },
  { iconName: "FileText",   title: "Tissue Paper Printing", desc: "Logo repeats, patterns and single-colour prints." },
  { iconName: "Ruler",      title: "Custom Inserts",        desc: "Foam, card and fabric inserts cut to your product." },
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

const sub = "jewellery-collection";
const c = COLLECTION_CATEGORIES[sub];

export const metadata: Metadata = {
  title: `${c.title} — CASA DI BIZ`,
  description: c.short,
  openGraph: {
    title: `${c.title} — CASA DI BIZ`,
    description: c.short,
    images: [{ url: c.image }],
  },
};

export default function JewelleryCollectionPage() {
  return (
    <SubCategoryDetailClient
      category={c}
      sub={sub}
      allCategories={COLLECTION_CATEGORIES}
      categoryPath="collections"
      gallery={GALLERY}
      features={FEATURES}
      applications={APPLICATIONS}
      customizations={CUSTOMIZATIONS}
      finishes={FINISHES}
      faqs={[
        { q: "What is the minimum order quantity?", a: "Collection MOQs typically start from 300 sets, though individual items within a collection can carry different minimums." },
        { q: "Can everything be branded consistently?", a: "Yes — we colour-match every element to one master palette and apply a single finishing language across boxes, bags, pouches and paper goods." },
        { q: "Can I mix and match packaging combinations?", a: "Absolutely. Collections are a starting point; add, remove or swap items to build the exact set your product needs." },
        { q: "How long does production take?", a: "Full collections take 18–28 working days after artwork and sample approval, depending on the number of items and finishes." },
        { q: "Are samples available before I order?", a: "We provide material swatches and paid pre-production samples of the full collection for sign-off." },
        { q: "Do you ship internationally?", a: "Yes — we ship globally by sea and air freight, with door-to-door delivery available." },
      ]}
      ctaText={{
        eyebrow: "NEED A CUSTOM COLLECTION?",
        title: "Create a consistent unboxing experience for your brand.",
        desc: "Design and build your boxes, bags, wraps and card inserts as one coherent package.",
      }}
      included={INCLUDED}
    />
  );
}
