import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCorporateProduct, getRelatedCorporateProducts } from "@/data/corporate-data";
import CorporateGiftPDP from "@/components/corporate/CorporateGiftPDP";

const SLUG = "luxury-date-chocolate-box";

export const metadata: Metadata = {
  title: "Luxury Date & Chocolate Box — Corporate Gifting | CASA DI BIZ",
  description:
    "A sophisticated presentation box created for premium dates, chocolates and curated confectionery. Designed for corporate gifting, festive occasions and VIP clients.",
  openGraph: {
    title: "Luxury Date & Chocolate Box | CASA DI BIZ Corporate Gifts",
    description:
      "Opulent rigid date & chocolate boxes with custom food-grade dividers, metallic foiling, and magnetic closures for UAE luxury gifting.",
    images: [{ url: "/assets/giftim.jpeg" }],
  },
};

export default function LuxuryDateChocolateBoxPage() {
  const product = getCorporateProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedCorporateProducts(SLUG, 3);
  return <CorporateGiftPDP product={product} relatedProducts={related} />;
}
