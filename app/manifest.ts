import type { MetadataRoute } from "next";

// Served at /manifest.webmanifest
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nature Life Science",
    short_name: "Nature Life Science",
    description:
      "Herbal and nutritional supplements for poultry health - a company by AVC Nutrition.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E1A12",
    theme_color: "#0E1A12",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
