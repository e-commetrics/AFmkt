import type { NextConfig } from "next";

/**
 * Static export: `bun run build` writes a self-contained site to `/out`,
 * ready to upload to the web server (see README.md).
 */
const nextConfig: NextConfig = {
  output: "export",
  // `/servicios/` -> `/servicios/index.html`, so any static server serves every route
  // (including hard refreshes) without rewrite rules.
  trailingSlash: true,
  // Images are pre-optimized by `scripts/images.ts` (AVIF + WebP, responsive).
  images: { unoptimized: true },
  // Two root layouts (es at `/`, en at `/en/`) need a single global 404 page.
  experimental: { globalNotFound: true },
};

export default nextConfig;
