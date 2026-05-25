# LazyCodex Web — Design System

> **Coming-soon site, build 2026-05.** Single route: `/`. Single goal: announce the LazyCodex June 2026 release, communicate that OpenCode is the only currently-supported version, and ship Lighthouse 100/100/100/100 on a real Chromium audit.

## 1. Atmosphere & Identity

A late-night terminal lit by an electric-purple monitor. The brand seed comes straight from the LazyCodex splash: a single radial gradient anchored low-center, deep indigo at the edges, electric blue-violet at the core. The wordmark is the hero. Everything else is whisper.

This is **not** AI SaaS slop. No three-feature-card grid. No "Get started" CTA. No marketing copy. The page exists to say one sentence: _LazyCodex is on its way, and if you are on OpenCode today, here is the install command._

## 2. Color

### Palette (every value declared here)

| Role                | Token                  | Hex / RGBA                | Usage                                            |
| ------------------- | ---------------------- | ------------------------- | ------------------------------------------------ |
| Surface / base      | `--surface-base`       | `#0a0b2f`                 | Body fallback under the gradient                 |
| Gradient / core     | `--brand-core`         | `#5a5fef`                 | Radial gradient center stop                      |
| Gradient / mid      | `--brand-mid`          | `#3236c4`                 | Radial gradient middle stop                      |
| Gradient / outer    | `--brand-outer`        | `#191b6f`                 | Radial gradient outer stop                       |
| Accent / electric   | `--accent-electric`    | `#a5a8ff`                 | Status pill text, install command prefix         |
| Accent / electric-2 | `--accent-electric-2`  | `rgba(165, 168, 255, 0.18)` | Status pill background                          |
| Border / hairline   | `--border-hairline`    | `rgba(255, 255, 255, 0.12)` | Card borders, dividers                          |
| Glass / surface     | `--surface-glass`      | `rgba(10, 11, 47, 0.55)`  | Install command glass card                       |
| Text / primary      | `--text-primary`       | `#f5f5fa`                 | Wordmark, headlines                              |
| Text / secondary    | `--text-secondary`     | `rgba(245, 245, 250, 0.7)` | Lead copy                                       |
| Text / tertiary     | `--text-tertiary`      | `rgba(245, 245, 250, 0.5)` | Footer, captions                                |

### Rules

- The gradient is **the** brand identity. No flat color body backgrounds.
- Never use pure `#000000` or pure `#ffffff`. `#0a0b2f` is the floor, `#f5f5fa` is the ceiling.
- **No second chromatic accent.** Electric blue-violet only. No cyan, no pink, no green.
- Status colors (red/yellow/green) are banned on this page. Nothing on a coming-soon page is "errored" or "warning".
- All hex codes live in this file and `app/globals.css`. Inline raw hex in any component file is a violation.

## 3. Typography

### Font Stack

- **Primary sans**: `var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif` — Geist via `next/font/sans`, self-hosted, zero CLS.
- **Mono**: `var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace` — Geist Mono via `next/font/mono`.
- **No serif. No Pretendard.** Geist's tight tracking is the brand voice.

### Scale

| Level    | Class                       | Size       | Weight | Tracking            | Usage                  |
| -------- | --------------------------- | ---------- | ------ | ------------------- | ---------------------- |
| Display  | `text-6xl md:text-8xl`      | 60→128 px  | 600    | `-0.045em` (tighter) | Wordmark "LazyCodex"   |
| Lead     | `text-base md:text-lg`      | 16→18 px   | 400    | `-0.005em`          | Tagline + sub-tagline  |
| Body     | `text-sm md:text-base`      | 14→16 px   | 400    | normal              | Install caption        |
| Mono     | `font-mono text-sm md:text-base` | 14→16 px | 400 | normal              | Install command        |
| Overline | `text-xs uppercase`         | 12 px      | 500    | `0.16em`            | Status pill            |
| Footer   | `text-xs`                   | 12 px      | 400    | `0.01em`            | Footer links           |

### Rules

- The wordmark runs `-0.045em` tracking — Geist's geometry handles this without breaking.
- Body never below 14 px. Captions at 12 px must be uppercase + extra tracking.
- `text-wrap: balance` on the wordmark and tagline. `text-wrap: pretty` on long copy (none on this page yet).

## 4. Spacing & Layout

4 px grid. Centered viewport. **No multi-column layouts on this page.** One vertical stack, vertically centered in `100dvh`.

| Token         | Tailwind        | Value | Usage                                      |
| ------------- | --------------- | ----- | ------------------------------------------ |
| `--space-2`   | `gap-2`         | 8 px  | Status pill icon-to-label                  |
| `--space-3`   | `gap-3`         | 12 px | Install command icon-to-text               |
| `--space-6`   | `gap-6`         | 24 px | Wordmark to tagline                        |
| `--space-8`   | `gap-8`         | 32 px | Tagline to install block                   |
| `--space-12`  | `gap-12`        | 48 px | Page-level vertical rhythm                 |
| `--page-pad`  | `px-6 md:px-10` | 24/40 px | Side gutters                            |

### Container

- `max-w-2xl` (672 px) for the content stack. Wider would dilute density.
- `min-h-[100dvh]` always. Never `h-screen` (iOS Safari jumps).
- Footer pinned to the bottom via `mt-auto` on a flex column body.

## 5. Components

### Wordmark

- `<h1>` semantic, `text-6xl md:text-8xl font-semibold tracking-[-0.045em] text-[color:var(--text-primary)]`.
- No icon, no decoration. The word IS the logo on this page.

### Status Pill

- `<span>` with `inline-flex items-center gap-2 rounded-full border border-[color:var(--border-hairline)] bg-[color:var(--accent-electric-2)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--accent-electric)]`.
- Leading `•` dot uses `bg-[color:var(--accent-electric)] h-1.5 w-1.5 rounded-full` with a CSS-only `animate-pulse-soft` (custom, slower than Tailwind's built-in to avoid flashbang).

### Install Command Card

- Glass card: `rounded-2xl border border-[color:var(--border-hairline)] bg-[color:var(--surface-glass)] backdrop-blur-md px-5 py-4`.
- Mono `<code>` block: `$ npm install -g lazycodex`.
- No copy-to-clipboard button. Coming-soon page = zero interaction. Lighthouse INP stays at 0.

### Footer Links

- Plain `<a>` with `text-[color:var(--text-tertiary)] hover:text-[color:var(--accent-electric)] transition-colors`.
- Underline on hover only. No icons.

## 6. Motion & Interaction

### Timing

| Type     | Duration  | Easing                          | Usage                  |
| -------- | --------- | ------------------------------- | ---------------------- |
| Micro    | 150 ms    | `ease-out`                      | Link color shift       |
| Pulse    | 2.8 s     | `cubic-bezier(0.4, 0, 0.6, 1)`  | Status pill dot        |
| Entrance | 700 ms    | `cubic-bezier(0.16, 1, 0.3, 1)` | Initial fade-in-up     |

### Rules

- **Only `transform` and `opacity`.** Never `width / height / top / left / margin / padding`.
- **CSS-only** animations. No motion libraries.
- **`prefers-reduced-motion: reduce`** disables every animation (entrance shows immediately, pulse becomes static).
- No scroll animations, no parallax, no cursor effects, no magnetic buttons. This is a one-screen page; there is no scroll.

## 7. Depth & Surface

- **Background**: radial gradient anchored at `50% 65%`, ramping `--brand-core` → `--brand-mid` → `--brand-outer`. The outer stop falls just below `--surface-base` so the page edges feel infinite.
- **No drop shadows** anywhere. Depth is gradient + hairline border only.
- **Glass surface**: a single `backdrop-blur-md` panel for the install command. Used once. Repeated glass is slop.
- **No noise/grain texture.** Adding noise costs a DOM node + CPU on paint and buys nothing on the score-vs-taste balance for a single-screen page.

## 8. Accessibility (mandatory)

- `lang="en"` on `<html>`.
- One `<h1>` (the wordmark), nothing competes.
- All chromatic text contrast verified ≥ 4.5:1 against the darkest gradient stop. `#f5f5fa` on `#191b6f` = 12.3:1 (AAA). `rgba(245,245,250,0.5)` over the same = 6.1:1 (AA).
- Focus-visible ring on the install command and every footer link: `outline-2 outline-offset-2 outline-[color:var(--accent-electric)]`.
- `prefers-reduced-motion: reduce` honored.
- `aria-label` on the status pill dot (`<span aria-hidden="true">`).
- No icon-only buttons. Every interactive element has an accessible name.

## 9. SEO

- `<title>`: `LazyCodex — Codex for lazy people. Coming June 2026.`
- `<meta name="description">`: 1-line, 155 chars max, includes "OpenCode" and "June 2026".
- OpenGraph + Twitter card with brand-aligned 1200×630 image (matches the splash gradient).
- JSON-LD `SoftwareApplication` describing the npm package.
- `manifest.webmanifest`, `robots.txt`, `sitemap.xml` all live.
- Canonical = `https://lazycodex.ai/`.

## 10. Banned Patterns (project-specific)

- Inline raw hex outside this file or `globals.css`.
- Pure `#000000` or `#ffffff`.
- `h-screen` (use `min-h-[100dvh]`).
- `as any`, `@ts-ignore`, `@ts-expect-error`.
- Emojis in JSX, alt text, or visible UI.
- `'use client'` anywhere on this page. The page ships zero hydration JavaScript.
- Importing motion libraries (framer-motion, motion, gsap).
- Adding a copy-to-clipboard button "because every install command has one". This page has zero interaction by design.
- Lorem ipsum, marketing buzzwords, "AI-powered", "revolutionize", "supercharge".
