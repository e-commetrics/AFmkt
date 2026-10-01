import type { NextConfig } from "next";

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
