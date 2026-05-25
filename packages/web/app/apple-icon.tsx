import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

/**
 * Apple touch icon. Next.js supports `apple-icon.{jpg,jpeg,png}` as a static
 * file OR `apple-icon.{js,ts,tsx}` as a dynamic generator — but NOT SVG.
 * We use ImageResponse so the icon stays in sync with the brand gradient,
 * no separate PNG asset to maintain.
 */
export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2a2dbf",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 65%, #5a5fef 0%, #3236c4 60%, #232897 100%)",
          color: "#ffffff",
          fontSize: "120px",
          fontWeight: 650,
          letterSpacing: "-6px",
          borderRadius: "36px",
        }}
      >
        L
      </div>
    ),
    { ...size },
  )
}
