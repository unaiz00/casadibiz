import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStorageCaseProduct, getRelatedStorageCaseProducts } from "@/data/storage-cases-data";
import StorageCasePDP from "@/components/storage-cases/StorageCasePDP";

const SLUG = "clear-acrylic-organiser-box";

export const metadata: Metadata = {
  title: "Clear Acrylic Organiser Box — Optical Clarity | CASA DI BIZ",
  description:
    "Museum-grade optical acrylic jewellery box with 360-degree clarity, sliding velvet cushioned trays, and magnetic dust-sealed lid.",
  openGraph: {
    title: "Clear Acrylic Organiser Box | CASA DI BIZ",
    description:
      "Crystal clear optical acrylic jewellery organisers with removable velvet drawer trays for contemporary displays and vanities.",
    images: [{ url: "/assets/storage/clearacrylic.jpeg" }],
  },
};

export default function ClearAcrylicOrganiserBoxPage() {
  const product = getStorageCaseProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedStorageCaseProducts(SLUG, 3);
  return <StorageCasePDP product={product} relatedProducts={related} />;
}
