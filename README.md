# Ayesha Riaz — Portfolio

Next.js 16 (App Router) + TypeScript + CSS Modules + Motion. Built from the Figma frame *AR-DS → 432:30*.

## Run it

```bash
npm install
npm run assets   # optional: only for new Figma layers (see scripts/fetch-figma-assets.mjs)
npm run dev      # http://localhost:3000
```

All images live in `public/assets/` and are committed, so builds never depend on Figma links. To add a new asset, export it from Figma and drop it in that folder.

## Where things live

| What | File |
|---|---|
| Project cards (name, category, one-liner, chips, case study link, dates, glow colours, screen positions, videos) | `data/projects.ts` |
| Case study pages | `app/work/cplusoft/page.tsx`, `app/work/nurexa/page.tsx` |
| Shared case study layout (rail, brief panel, sections) | `components/case/` |
| Headline, intro, stats, nav, Résumé link, core expertise, rail badge, sidebar wallpaper video | `data/site.ts` |
| Glow motion strength / speed / hover / entrance | `lib/glow-settings.ts` |

## Adding the laptop videos

1. Put the files in `public/videos/` (MP4, H.264; ~1600×960 fits the screen exactly).
2. Set the path on the matching project in `data/projects.ts`, e.g. `video: "/videos/tech-company.mp4"`.

Videos autoplay muted on loop, are clipped to the laptop screen's rounded corners, keep the top of the frame visible, and pause while off screen.

For the sky wallpaper at the bottom of the left panel, set `sidebarVideo` in `data/site.ts`.

## Layout

- Left panel is `position: sticky` at full viewport height and never scrolls; the project column scrolls past it.
- Cards are drawn on a 1000×567 grid using container units, so everything scales together.
- Below 960px wide, the panel becomes a header and the cards stack underneath.

## Case studies

A card with an `href` in `data/projects.ts` shows **Explore** and links to its page; a card without one shows **Coming soon**.
To add a new case study, copy `app/work/nurexa/` to `app/work/<slug>/`, put its images in `public/work/<slug>/`, and set `href: "/work/<slug>"` on the card.
