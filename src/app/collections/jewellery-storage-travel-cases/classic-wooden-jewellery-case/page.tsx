import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStorageCaseProduct, getRelatedStorageCaseProducts } from "@/data/storage-cases-data";
import StorageCasePDP from "@/components/storage-cases/StorageCasePDP";

const SLUG = "classic-wooden-jewellery-case";

export const metadata: Metadata = {
  title: "Classic Wooden Jewellery Case — Storage & Presentation | CASA DI BIZ",
  description:
    "Solid hardwood jewellery case with hand-finished lacquer, quadrant brass hinges, and plush velvet compartments for fine jewellery.",
  openGraph: {
    title: "Classic Wooden Jewellery Case | CASA DI BIZ",
    description:
      "Handcrafted wooden jewellery storage cases for luxury boutique display and heirloom presentation.",
    images: [{ url: "/assets/storage/Classic_Wooden_Jewellery_Case.jpeg" }],
  },
};

export default function ClassicWoodenJewelleryCasePage() {
  const product = getStorageCaseProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedStorageCaseProducts(SLUG, 3);
  return <StorageCasePDP product={product} relatedProducts={related} />;
}
