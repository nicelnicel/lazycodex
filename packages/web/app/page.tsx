import type { JSX } from "react"

/**
 * LazyCodex splash page.
 * Server Component only: no client state, no hydration JavaScript, CSS-only motion.
 */
export default function ComingSoonPage(): JSX.Element {
  return (
    <main className="brand-canvas relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 py-16 text-center">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[color:var(--brand-outer)] focus:px-3 focus:py-2 focus:text-sm focus:text-[color:var(--text-primary)]"
      >
        Skip to main content
      </a>

      <p className="splash-reveal absolute left-[clamp(16px,3vw,32px)] top-[clamp(16px,3vw,32px)] z-10 text-[clamp(12px,1.2vw,14px)] tracking-[-0.01em] text-[color:var(--text-tertiary)]">
        <span className="font-semibold text-[color:var(--text-primary)]">OmO</span>{" "}
        <span>in Codex</span>
      </p>

      <section
        id="content"
        className="splash-reveal mx-auto flex w-full flex-col items-center"
      >
        <p className="mb-[clamp(10px,1.5vw,14px)] text-[clamp(10px,0.95vw,12px)] font-medium uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
          Coming June 2026 · Currently on OpenCode
        </p>
        <p className="text-[clamp(11px,1.1vw,14px)] font-medium uppercase tracking-[0.22em] text-[color:var(--text-primary)]">
          CODEX FOR NO-BRAINERS
        </p>
        <h1 className="mt-[clamp(34px,4vw,52px)] text-balance text-[clamp(64px,12vw,180px)] font-medium leading-[0.95] tracking-[-0.04em] text-[color:var(--text-primary)]">
          LazyCodex
        </h1>
        <div className="mt-[clamp(24px,3vw,40px)] text-balance text-[clamp(18px,2.2vw,36px)] font-normal leading-[1.4] tracking-[-0.015em] text-[color:var(--text-secondary)]">
          <p>You don't need to think.</p>
          <p>
            Just prompt with{" "}
            <strong className="font-bold text-[color:var(--text-primary)]">ultrawork</strong>.
          </p>
        </div>
      </section>

      <footer className="splash-reveal absolute bottom-[clamp(20px,4vw,60px)] left-1/2 z-10 -translate-x-1/2 font-mono text-[clamp(14px,1.4vw,18px)] font-semibold tracking-[0.08em] text-[color:var(--text-primary)]">
        lazycodex.ai
      </footer>
    </main>
  )
}
