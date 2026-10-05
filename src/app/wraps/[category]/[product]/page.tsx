import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllWrapSlugs,
  getWrapProduct,
  getRelatedWrapProducts,
} from "@/data/wraps-data";
import WrapPDPView from "@/components/wraps/WrapPDPView";

interface PageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllWrapSlugs();
  return slugs.map(({ category, product }) => ({
    category,
    product,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, product: productSlug } = await params;
  const product = getWrapProduct(category, productSlug);

  if (!product) {
    return {
      title: "Luxury Wrapping Paper Not Found | CASA DI BIZ",
      description: "The requested luxury wrapping paper product could not be found.",
    };
  }

  const title = product.seo.title;
  const description = product.seo.description;
  const primaryImage = product.image.src;
  const canonicalUrl = `https://casadibiz.com/wraps/${category}/${product.slug}`;

  return {
    title,
    description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "CASA DI BIZ",
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 800,
          alt: product.image.alt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [primaryImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WrapProductPDPPage({ params }: PageProps) {
  const { category, product: productSlug } = await params;
  const product = getWrapProduct(category, productSlug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedWrapProducts(product.slug);

  // JSON-LD Structured Data for B2B Product and Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://casadibiz.com/wraps/${category}/${product.slug}#product`,
        name: product.name,
        description: product.shortDescription,
        image: [`https://casadibiz.com${product.image.src}`],
        brand: {
          "@type": "Brand",
          name: "CASA DI BIZ",
        },
        category: `Luxury Packaging > ${product.categoryName}`,
        material: product.materialType,
        manufacturer: {
          "@type": "Organization",
          name: "CASA DI BIZ",
          url: "https://casadibiz.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://casadibiz.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wraps",
            item: "https://casadibiz.com/wraps",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `https://casadibiz.com/wraps/${category}/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WrapPDPView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
