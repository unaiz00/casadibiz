import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllBoxModels,
  getBoxModel,
  getRelatedBoxModels,
} from "@/data/boxes-data";
import BoxPDPView from "@/components/boxes/BoxPDPView";

interface PageProps {
  params: Promise<{
    category: string;
    model: string;
  }>;
}

export async function generateStaticParams() {
  const models = getAllBoxModels();
  return models.map((m) => ({
    category: m.categorySlug,
    model: m.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, model: modelSlug } = await params;
  const model = getBoxModel(category, modelSlug);

  if (!model) {
    return {
      title: "Jewellery Box Model Not Found | CASA DI BIZ",
      description: "The requested bespoke jewellery box model could not be found.",
    };
  }

  const title = `${model.name} (${model.modelCode}) ${model.categoryName} | CASA DI BIZ Luxury Packaging`;
  const description = `Explore the CASA DI BIZ ${model.name} (${model.modelCode}) ${model.categoryName.toLowerCase()}, engineered with bespoke dimensions, luxury velvet or microfiber linings, and hot-stamped gold foil finishes.`;
  const primaryImage = model.images[0]?.src || "/assets/boxim.jpeg";

  return {
    title,
    description,
    alternates: {
      canonical: `https://casadibiz.com/boxes/${category}/${modelSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://casadibiz.com/boxes/${category}/${modelSlug}`,
      siteName: "CASA DI BIZ",
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 800,
          alt: `CASA DI BIZ ${model.name} luxury jewellery box`,
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

export default async function BoxModelPage({ params }: PageProps) {
  const { category, model: modelSlug } = await params;
  const model = getBoxModel(category, modelSlug);

  if (!model) {
    notFound();
  }

  const relatedModels = getRelatedBoxModels(model.slug, model.categorySlug, 4);

  // JSON-LD Structured Data for B2B Product and BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://casadibiz.com/boxes/${category}/${modelSlug}#product`,
        name: `CASA DI BIZ ${model.name} (${model.modelCode}) ${model.categoryName}`,
        description: model.shortDescription,
        image: model.images.map((img) => `https://casadibiz.com${img.src}`),
        brand: {
          "@type": "Brand",
          name: "CASA DI BIZ",
        },
        category: `Luxury Packaging > Boxes > ${model.categoryName}`,
        material: model.specifications.outerMaterial,
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
            description: "B2B Custom Quote Based Manufacturing",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://casadibiz.com/boxes/${category}/${modelSlug}#breadcrumb`,
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
            name: "Boxes",
            item: "https://casadibiz.com/boxes",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: model.categoryName,
            item: `https://casadibiz.com/boxes/${category}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${model.modelCode} ${model.name}`,
            item: `https://casadibiz.com/boxes/${category}/${modelSlug}`,
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
      <BoxPDPView model={model} relatedModels={relatedModels} />
    </>
  );
}
