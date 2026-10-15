import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStorageCaseProduct,
  getAllStorageCaseProducts,
  getRelatedStorageCaseProducts,
} from "@/data/storage-cases-data";
import StorageCasePDP from "@/components/storage-cases/StorageCasePDP";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllStorageCaseProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getStorageCaseProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | CASA DI BIZ",
      description: "The requested jewellery storage product could not be found.",
    };
  }

  return {
    title: `${product.title} — Jewellery Storage & Travel Cases | CASA DI BIZ`,
    description: product.description,
    openGraph: {
      title: `${product.title} | CASA DI BIZ Jewellery Storage`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function StorageCaseProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getStorageCaseProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedStorageCaseProducts(slug, 3);

  return <StorageCasePDP product={product} relatedProducts={related} />;
}
