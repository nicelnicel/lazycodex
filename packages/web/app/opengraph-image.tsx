import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const alt = "LazyCodex splash — Codex for no-brainers. Coming June 2026."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const palette = {
  surfaceBase: "#2a2dbf",
  brandCore: "#5a5fef",
  brandMid: "#3236c4",
  brandOuter: "#232897",
  textPrimary: "#ffffff",
  textSecondary: "#dcdcf8",
  textTertiary: "#b9bce6",
} as const

export default function OgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: palette.surfaceBase,
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 65%, ${palette.brandCore} 0%, ${palette.brandMid} 60%, ${palette.brandOuter} 100%)`,
          color: palette.textPrimary,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "44px",
            left: "48px",
            display: "flex",
            gap: "6px",
            color: palette.textTertiary,
            fontSize: "22px",
            letterSpacing: "-0.2px",
          }}
        >
          <span style={{ color: palette.textPrimary, fontWeight: 650 }}>OmO</span>
          <span>in Codex</span>
        </div>

        <div
          style={{
            position: "absolute",
            top: "150px",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: "12px",
              color: palette.textSecondary,
              fontSize: "17px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Coming June 2026 · Currently on OpenCode
          </div>
          <div
            style={{
              color: palette.textPrimary,
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            CODEX FOR NO-BRAINERS
          </div>
          <div
            style={{
              marginTop: "34px",
              color: palette.textPrimary,
              fontSize: "150px",
              fontWeight: 500,
              letterSpacing: "-6px",
              lineHeight: 0.95,
            }}
          >
            LazyCodex
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "26px",
              color: palette.textSecondary,
              fontSize: "34px",
              fontWeight: 400,
              lineHeight: 1.35,
            }}
          >
            <div>You don't need to think.</div>
            <div style={{ display: "flex" }}>
              <span>Just prompt with&nbsp;</span>
              <span style={{ color: palette.textPrimary, fontWeight: 700 }}>ultrawork</span>
              <span>.</span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "42px",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: palette.textPrimary,
            fontFamily: "monospace",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          lazycodex.ai
        </div>
      </div>
    ),
    { ...size },
  )
}
