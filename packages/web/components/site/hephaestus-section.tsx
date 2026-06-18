import type { JSX } from "react"
import { SITE_CONFIG } from "../../lib/site-config"

export function HephaestusSection(): JSX.Element {
  const { omoIntro, hephaestus } = SITE_CONFIG

  return (
    <section className="mx-auto mt-24 w-full max-w-[1200px] px-4 md:mt-32 md:px-8">
      {/* OmO intro — where LazyCodex comes from */}
      <div className="grid gap-8 border-y border-white/10 py-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-16">
        <div>
          <p className="font-mono text-xs uppercase text-[color:var(--accent-primary)]">
            {omoIntro.kicker}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(28px,4vw,44px)] font-medium leading-tight text-[color:var(--text-primary)]">
            {omoIntro.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
            {omoIntro.body}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-mono text-xs uppercase text-[color:var(--text-tertiary)]">
              {omoIntro.omoLabel}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {omoIntro.omoPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[color:var(--text-muted)]">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[color:var(--accent-primary)]/20 bg-[color:var(--accent-primary)]/5 p-5">
            <h3 className="font-mono text-xs uppercase text-[color:var(--accent-primary)]">
              {omoIntro.lazyLabel}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {omoIntro.lazyPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[color:var(--text-muted)]">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-primary)]" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hephaestus — the ported agent */}
      <div className="relative mt-16 flex w-full flex-col items-center overflow-hidden rounded-3xl bg-black px-4 py-16 text-center shadow-2xl ring-1 ring-white/5 md:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08)_0%,transparent_70%)] blur-3xl" />

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[color:var(--accent-primary)]/30 bg-[color:var(--accent-primary)]/10 px-3 py-1 font-mono text-xs text-[color:var(--accent-primary)]">
            {hephaestus.badge}
          </span>
        </div>

        <h3
          className="mt-6 text-[clamp(32px,5vw,56px)] font-semibold tracking-tight"
          style={{
            background: "linear-gradient(180deg, #86efac 0%, #4ade80 50%, #16a34a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {hephaestus.title}
        </h3>
        <p className="mt-3 text-balance text-xl font-medium text-[color:var(--text-primary)] md:text-2xl">
          {hephaestus.headline}
        </p>
        <p className="mt-5 max-w-[68ch] text-balance text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
          {hephaestus.description}
        </p>

        <ol className="mt-12 grid w-full max-w-[960px] grid-cols-2 gap-3 md:grid-cols-5">
          {hephaestus.loop.map((phase, i) => (
            <li
              key={phase.step}
              className="rounded-lg border border-[color:var(--accent-primary)]/20 bg-[color:var(--accent-primary)]/5 p-4 text-center"
            >
              <div className="mb-2 font-mono text-xs text-[color:var(--accent-primary)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-medium text-[color:var(--text-primary)]">{phase.step}</p>
              <p className="mt-1 text-xs leading-snug text-[color:var(--text-muted)]">{phase.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-lg italic text-[color:var(--text-tertiary)]">
          {hephaestus.tagline}
        </p>
      </div>
    </section>
  )
}
