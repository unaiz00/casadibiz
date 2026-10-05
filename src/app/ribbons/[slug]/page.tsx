import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllRibbonSlugs,
  getRibbonMaterial,
  getRelatedRibbonMaterials,
} from "@/data/ribbons-data";
import RibbonPDPView from "@/components/ribbons/RibbonPDPView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllRibbonSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getRibbonMaterial(slug);

  if (!material) {
    return {
      title: "Luxury Ribbon Not Found | CASA DI BIZ",
      description: "The requested bespoke ribbon material could not be found.",
    };
  }

  const title = material.seo.title;
  const description = material.seo.description;
  const primaryImage = material.images[0]?.src || "/assets/cats/ribbon.png";
  const canonicalUrl = `https://casadibiz.com/ribbons/${material.slug}`;

  return {
    title,
    description,
    keywords: material.seo.keywords,
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
          alt: `CASA DI BIZ ${material.name} luxury packaging ribbon`,
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

export default async function RibbonMaterialPDPPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getRibbonMaterial(slug);

  if (!material) {
    notFound();
  }

  const relatedMaterials = getRelatedRibbonMaterials(material.slug, 3);

  // JSON-LD Structured Data for B2B Product and BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://casadibiz.com/ribbons/${material.slug}#product`,
        name: material.name,
        description: material.shortDescription,
        image: material.images.map((img) => `https://casadibiz.com${img.src}`),
        brand: {
          "@type": "Brand",
          name: "CASA DI BIZ",
        },
        category: "Luxury Packaging > Ribbons",
        material: material.composition,
        manufacturer: {
          "@type": "Organization",
          name: "CASA DI BIZ Luxury Packaging",
          url: "https://casadibiz.com",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AED",
          priceSpecification: {
            "@type": "PriceSpecification",
            description: "B2B Custom Quote Based Manufacturing (MOQ 500m)",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://casadibiz.com/ribbons/${material.slug}#breadcrumb`,
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
            name: "Ribbons",
            item: "https://casadibiz.com/ribbons",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: material.name,
            item: `https://casadibiz.com/ribbons/${material.slug}`,
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
      <RibbonPDPView material={material} relatedMaterials={relatedMaterials} />
    </>
  );
}
