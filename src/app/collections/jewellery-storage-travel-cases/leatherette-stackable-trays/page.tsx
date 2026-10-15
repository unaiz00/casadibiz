import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStorageCaseProduct, getRelatedStorageCaseProducts } from "@/data/storage-cases-data";
import StorageCasePDP from "@/components/storage-cases/StorageCasePDP";

const SLUG = "leatherette-stackable-trays";

export const metadata: Metadata = {
  title: "Leatherette Stackable Trays — Counter & Vault Storage | CASA DI BIZ",
  description:
    "Modular stackable jewellery display and storage trays in fine-grain leatherette with interlocking bases and anti-tarnish partitions.",
  openGraph: {
    title: "Leatherette Stackable Trays | CASA DI BIZ",
    description:
      "Modular stackable jewellery organisers designed for retail showcase counters, safe storage, and private dressing rooms.",
    images: [{ url: "/assets/allsetbox/allset_premiumleather.jpeg" }],
  },
};

export default function LeatheretteStackableTraysPage() {
  const product = getStorageCaseProduct(SLUG);
  if (!product) notFound();
  const related = getRelatedStorageCaseProducts(SLUG, 3);
  return <StorageCasePDP product={product} relatedProducts={related} />;
}
