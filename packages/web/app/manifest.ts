import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LazyCodex",
    short_name: "LazyCodex",
    description:
      "LazyCodex — Codex for lazy people. One command bootstraps your full omo agent stack. Coming June 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b2f",
    theme_color: "#0a0b2f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
