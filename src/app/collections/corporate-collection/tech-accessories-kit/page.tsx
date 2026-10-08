import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCorporateProduct, getRelatedCorporateProducts } from "@/data/corporate-data";
import CorporateGiftPDP from "@/components/corporate/CorporateGiftPDP";

const SLUG = "tech-accessories-kit";

export const metadata: Metadata = {
  title: "Tech & Accessories Kit — Corporate Gifting | CASA DI BIZ",
  description:
    "A curated technology and accessories set designed for modern corporate gifting. Practical everyday essentials unified in a refined bespoke presentation kit.",
  openGraph: {
    title: "Tech & Accessories Kit | CASA DI BIZ Corporate Gifts",
    description:
      "Curated corporate tech sets with custom EVA molded organizers, laser branded accessories, and luxury gift boxes.",
    images: [{ url: "/assets/giftim.jpeg" }],
  },
};

export default function TechAccessoriesKitPage() {
  const product = getCorporateProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedCorporateProducts(SLUG, 3);
  return <CorporateGiftPDP product={product} relatedProducts={related} />;
}
