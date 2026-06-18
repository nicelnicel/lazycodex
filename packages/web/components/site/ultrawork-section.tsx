import type { JSX } from "react"
import { SITE_CONFIG } from "../../lib/site-config"
import { BrandImage } from "./brand-image"

export function UltraworkSection(): JSX.Element {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-[1200px] flex-col items-center px-4 text-center md:mt-40 md:px-8">
      <h2 className="text-balance text-[clamp(32px,5vw,48px)] font-medium tracking-tight text-[color:var(--text-primary)]">
        {SITE_CONFIG.ultraworkTagline}
      </h2>

      <div className="mt-8 rounded-lg border border-[color:var(--accent-primary)]/20 bg-[color:var(--accent-primary)]/5 px-6 py-3 shadow-[0_0_30px_rgba(74,222,128,0.1)]">
        <code className="font-mono text-lg font-medium text-[color:var(--accent-mint)]">
          {SITE_CONFIG.ultraworkExample}
        </code>
      </div>

      <div className="relative mt-24 flex w-full max-w-[960px] flex-col items-center rounded-3xl bg-black px-4 py-16 shadow-2xl ring-1 ring-white/5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08)_0%,transparent_70%)] blur-3xl" />
        
        <h3
          className="mb-12 text-center text-[clamp(28px,4vw,48px)] font-semibold tracking-tight"
          style={{
            background: "linear-gradient(180deg, #86efac 0%, #4ade80 50%, #16a34a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.9
          }}
        >
          Ultrawork
        </h3>

        <BrandImage
          src="/img/badge-ultrawork.png"
          alt="Ultrawork"
          width={897}
          height={512}
          className="h-auto w-full max-w-[560px]"
        />
      </div>
    </section>
  )
}
