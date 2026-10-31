import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { getAllBoxCategories, getAllBoxModels } from "@/data/boxes-data";
import { getAllPouchSlugs } from "@/data/pouches-data";
import { getAllRibbonSlugs } from "@/data/ribbons-data";
import { getAllWrapSlugs } from "@/data/wraps-data";
import { getAllCorporateProducts } from "@/data/corporate-data";
import { getAllStorageCaseProducts } from "@/data/storage-cases-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  // 1. Static Core Landing Pages
  const staticPages: string[] = [
    "/",
    "/about/",
    "/contact/",
  ];

  // 2. Primary Category Hubs & Collection Hubs
  const hubPages: string[] = [
    "/boxes/",
    "/boxes/jewellery-boxes/",
    "/bags/",
    "/pouches/",
    "/wraps/",
    "/ribbons/",
    "/collections/",
    "/collections/corporate-collection/",
    "/collections/jewellery-collection/",
    "/collections/jewellery-storage-travel-cases/",
    "/collections/seasonal-collection/",
    "/gifting/",
    "/gifting/fillers-accessories/",
    "/gifting/gift-cards/",
    "/gifting/stickers-seals/",
    "/gifting/tissue-paper/",
  ];

  // 3. Bags — Active Paper Bag PDPs
  const bagPages: string[] = [
    "/bags/paper-bags/kraft-bag/",
    "/bags/paper-bags/special-paper/",
    "/bags/paper-bags/white-card/",
    "/bags/paper-bags/white-card-texture/",
  ];

  // 4. Boxes — Category Listings & Model PDPs
  const boxCategoryPages = getAllBoxCategories().map(
    (cat) => `/boxes/${cat.slug}/`
  );

  const boxModelPages = getAllBoxModels().map(
    (model) => `/boxes/${model.categorySlug}/${model.slug}/`
  );

  // 5. Pouches — Active Product Pages
  const pouchPages = getAllPouchSlugs().map(
    (slug) => `/pouches/${slug}/`
  );

  // 6. Ribbons — Active Material Pages
  const ribbonPages = getAllRibbonSlugs().map(
    (slug) => `/ribbons/${slug}/`
  );

  // 7. Wraps — Active Wrapping Paper Pages
  const wrapPages = getAllWrapSlugs().map(
    (item) => `/wraps/${item.category}/${item.product}/`
  );

  // 8. Collections — Corporate Gifting Suite Products
  const corporatePages = getAllCorporateProducts().map(
    (product) => `/collections/corporate-collection/${product.slug}/`
  );

  // 9. Collections — Jewellery Storage & Travel Cases Products
  const storageCasePages = getAllStorageCaseProducts().map(
    (product) => `/collections/jewellery-storage-travel-cases/${product.slug}/`
  );

  // Combine and deduplicate all paths
  const allPaths = Array.from(
    new Set([
      ...staticPages,
      ...hubPages,
      ...bagPages,
      ...boxCategoryPages,
      ...boxModelPages,
      ...pouchPages,
      ...ribbonPages,
      ...wrapPages,
      ...corporatePages,
      ...storageCasePages,
    ])
  );

  return allPaths.map((path) => ({
    url: path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`,
  }));
}

