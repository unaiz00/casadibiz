import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllPouchSlugs,
  getPouchProduct,
  getRelatedPouchProducts,
} from "@/data/pouches-data";
import PouchPDP from "@/components/pouches/PouchPDP";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPouchSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getPouchProduct(slug);

  if (!product) {
    return {
      title: "Luxury Pouch Not Found | CASA DI BIZ",
      description: "The requested bespoke luxury pouch material could not be found.",
    };
  }

  const title = product.seo.title;
  const description = product.seo.description;
  const primaryImage = product.images[0]?.src || "/assets/cats/pouch.jpeg";
  const canonicalUrl = `https://casadibiz.com/pouches/${product.slug}`;

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
          alt: `CASA DI BIZ ${product.name} luxury packaging pouch`,
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

export default async function PouchProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getPouchProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedPouchProducts(product.slug, 3);

  // JSON-LD Structured Data for B2B Product and BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://casadibiz.com/pouches/${product.slug}#product`,
        name: product.name,
        description: product.shortDescription,
        image: product.images.map((img) => `https://casadibiz.com${img.src}`),
        brand: {
          "@type": "Brand",
          name: "CASA DI BIZ",
        },
        category: "Luxury Packaging > Pouches",
        material: product.material,
        manufacturer: {
          "@type": "Organization",
          name: "CASA DI BIZ Luxury Packaging",
          url: "https://casadibiz.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://casadibiz.com/pouches/${product.slug}#breadcrumbs`,
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
            name: "Pouches",
            item: "https://casadibiz.com/pouches",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `https://casadibiz.com/pouches/${product.slug}`,
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
      <PouchPDP product={product} relatedProducts={relatedProducts} />
    </>
  );
}
