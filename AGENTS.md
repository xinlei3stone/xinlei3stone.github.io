# AGENTS.md

Guidance for AI agents working in this directory.

## What This Is

**Personal website workspace** — a Next.js 15 + Tailwind site built on the PRISM template. Positioned around the user's incoming job: **Yield Enhancement Engineer at SMIC South (中芯南方), Shanghai, starting 2027**. The previous "AI enablement / lithography" positioning and the technical-trainee (技培生) framing are retired; AI and data work remain as a secondary personal direction, not the main story.

Site copy is **English** (user decision 2026-10-19, international audience). Workspace documents and agent communication stay Chinese, with English for technical terms.

**Read `memory.md` at session start** — it holds durable context and open threads. Update it when something worth remembering happens.

## Directory Layout

| Path | Contents |
|---|---|
| `content/` | All editable site copy: `config.toml`, `about.toml`, `bio.md`, `skills.md`, `news.toml`, `projects.toml`, `experience.*`, `cv.*`. |
| `src/` | PRISM template code (App Router, components, styles). Touch only for layout/visual changes. |
| `public/` | Published assets: `avatar.png`, `favicon.svg`, `.nojekyll`. |
| `legacy/` | Archived 2026-10 static site (`static-2026/`), old Vite files, old photo and resume PDF. Not deployed — leave untouched. |
| `.github/workflows/deploy-pages.yml` | Builds with Node 22, uploads `out/` to GitHub Pages on push to `main`. |

## Working Rules

- Edit copy in `content/` first. Keep the config-driven structure; do not reintroduce Publications/BibTeX unless the user asks.
- No tests. Verify with `npm run build`, then serve `out/` and check desktop/mobile and dark mode.
- Node 22+; `npm ci` from the committed `package-lock.json`.
- Live at https://xinlei3stone.github.io/ — pushing `main` auto-deploys (~1 min).
- Keep asset/link paths root-relative (`/avatar.png`); the site is exported with `trailingSlash: true`.
- The archived resume PDF is outdated (still says 技培生/AI direction). Do not publish it until the user regenerates it.
- Do not add infrastructure beyond the existing Pages workflow unless explicitly requested.

---

*Migration to PRISM: 2026-11-05.*
