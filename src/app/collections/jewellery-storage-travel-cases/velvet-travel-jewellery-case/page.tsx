import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStorageCaseProduct, getRelatedStorageCaseProducts } from "@/data/storage-cases-data";
import StorageCasePDP from "@/components/storage-cases/StorageCasePDP";

const SLUG = "velvet-travel-jewellery-case";

export const metadata: Metadata = {
  title: "Velvet Travel Jewellery Case — Portable Luxury | CASA DI BIZ",
  description:
    "Compact plush velvet travel jewellery case with crush-resistant shell, secure zip-around closure, and anti-tarnish interior compartments.",
  openGraph: {
    title: "Velvet Travel Jewellery Case | CASA DI BIZ",
    description:
      "Bespoke portable velvet jewellery travel organisers engineered to safeguard delicate pieces on the go.",
    images: [{ url: "/assets/allsetbox/allset_hairyvelvet.jpeg" }],
  },
};

export default function VelvetTravelJewelleryCasePage() {
  const product = getStorageCaseProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedStorageCaseProducts(SLUG, 3);
  return <StorageCasePDP product={product} relatedProducts={related} />;
}
