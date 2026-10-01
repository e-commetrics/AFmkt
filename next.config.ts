import type { NextConfig } from "next";

// Canonical URLs, hreflang, Open Graph and the sitemap need the real domain.
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL && !process.env.VERCEL_PROJECT_PRODUCTION_URL) {
  console.warn(
    "\n⚠  NEXT_PUBLIC_SITE_URL is not set: canonical URLs and sitemap.xml will point to http://localhost:3000.\n" +
      "   Copy .env.example to .env and set your production domain before deploying.\n",
  );
}

/**
 * Static export: `bun run build` writes a self-contained site to `/out`,
 * ready to zip and upload to cPanel (see DEPLOY notes in README.md).
 */
const nextConfig: NextConfig = {
  output: "export",
  // `/servicios/` -> `/servicios/index.html`, so Apache serves every route
  // (including hard refreshes) without rewrite rules.
  trailingSlash: true,
  // Images are pre-optimized by `scripts/images.ts` (AVIF + WebP, responsive).
  images: { unoptimized: true },
  // Two root layouts (es at `/`, en at `/en/`) need a single global 404 page.
  experimental: { globalNotFound: true },
};

export default nextConfig;
