/**
 * CASA DI BIZ — Central Site URL & Deployment Configuration
 *
 * PRODUCTION DOMAIN SETUP:
 * Once the client's custom domain is connected (e.g., in Vercel Project Settings),
 * configure the following environment variable:
 *
 *   NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
 *
 * NOTES:
 * - This central configuration provides the canonical base URL for sitemap.xml,
 *   robots.txt, metadataBase, and Open Graph tags.
 * - When NEXT_PUBLIC_SITE_URL is not set:
 *   - Localhost and preview URLs are strictly rejected as canonical/sitemap URLs.
 *   - A clean fallback domain ("https://casadibiz.com") is used as the base.
 * - Vercel Preview Protection:
 *   - When VERCEL_ENV is "preview", robots directives emit `noindex, nofollow`
 *     to prevent search engines from indexing client preview URLs.
 */

export const DEFAULT_SITE_URL = "https://casadibiz.com";

/**
 * Returns the normalized canonical base URL without trailing slash.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (envUrl) {
    // Strip trailing slashes to guarantee consistent normalization
    return envUrl.replace(/\/+$/, "");
  }

  return DEFAULT_SITE_URL;
}

/**
 * Determines whether the current build or runtime is a Vercel preview deployment.
 * Vercel automatically exposes VERCEL_ENV as "production", "preview", or "development".
 */
export function isPreviewDeployment(): boolean {
  return process.env.VERCEL_ENV === "preview";
}

