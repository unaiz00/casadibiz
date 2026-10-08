import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCorporateProduct,
  getAllCorporateProducts,
  getRelatedCorporateProducts,
} from "@/data/corporate-data";
import CorporateGiftPDP from "@/components/corporate/CorporateGiftPDP";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllCorporateProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getCorporateProduct(slug);

  if (!product) {
    return {
      title: "Corporate Gift Not Found | CASA DI BIZ",
      description: "The requested corporate gift suite could not be found.",
    };
  }

  return {
    title: `${product.title} — Corporate Gifting Collection | CASA DI BIZ`,
    description: product.description,
    openGraph: {
      title: `${product.title} | CASA DI BIZ Corporate Gifts`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function CorporateProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getCorporateProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedCorporateProducts(slug, 3);

  return <CorporateGiftPDP product={product} relatedProducts={related} />;
}
