import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCorporateProduct, getRelatedCorporateProducts } from "@/data/corporate-data";
import CorporateGiftPDP from "@/components/corporate/CorporateGiftPDP";

const SLUG = "bespoke-falcon-desk-ornament";

export const metadata: Metadata = {
  title: "Bespoke Falcon Desk Ornament — Corporate Gifting | CASA DI BIZ",
  description:
    "A premium desk ornament designed as a distinctive corporate keepsake. The falcon form creates a strong connection to UAE identity with bespoke branding and presentation.",
  openGraph: {
    title: "Bespoke Falcon Desk Ornament | CASA DI BIZ Corporate Gifts",
    description:
      "Prestigious UAE falcon desk keepsakes with engraved plaques, custom finishes, and luxury velvet display presentation boxes.",
    images: [{ url: "/assets/giftim.jpeg" }],
  },
};

export default function BespokeFalconDeskOrnamentPage() {
  const product = getCorporateProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedCorporateProducts(SLUG, 3);
  return <CorporateGiftPDP product={product} relatedProducts={related} />;
}
