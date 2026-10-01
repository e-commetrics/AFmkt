import type { MetadataRoute } from "next";
import { getDictionary } from "@/content/dictionaries";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const t = getDictionary("es");
  return {
    name: "AF Marketing",
    short_name: "AF Marketing",
    description: t.meta.description,
    lang: "es-MX",
    start_url: "/",
    display: "standalone",
    background_color: "#070807",
    theme_color: "#070807",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
