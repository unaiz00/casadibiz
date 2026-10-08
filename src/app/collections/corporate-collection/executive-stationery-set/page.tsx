import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCorporateProduct, getRelatedCorporateProducts } from "@/data/corporate-data";
import CorporateGiftPDP from "@/components/corporate/CorporateGiftPDP";

const SLUG = "executive-stationery-set";

export const metadata: Metadata = {
  title: "Executive Stationery Set — Corporate Gifting | CASA DI BIZ",
  description:
    "A premium stationery ensemble combining practical everyday essentials with understated luxury. Designed for executive gifting, client appreciation and corporate occasions.",
  openGraph: {
    title: "Executive Stationery Set | CASA DI BIZ Corporate Gifts",
    description:
      "Refined executive stationery sets with custom branding, foil stamping, and bespoke luxury packaging for UAE corporate gifting.",
    images: [{ url: "/assets/giftim.jpeg" }],
  },
};

export default function ExecutiveStationerySetPage() {
  const product = getCorporateProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedCorporateProducts(SLUG, 3);
  return <CorporateGiftPDP product={product} relatedProducts={related} />;
}
