# Aisha Riaz — Portfolio

Next.js 16 (App Router) + TypeScript + CSS Modules + Motion. Built from the Figma frame *AR-DS → 432:30*.

## Run it

```bash
npm install
npm run assets   # pulls logo, icons and device mockups from Figma into /public/assets
npm run dev      # http://localhost:3000
```

`npm run assets` uses temporary Figma links that expire around **23 Oct 2026**. After that, export the layers from Figma with the file names listed in `scripts/fetch-figma-assets.mjs` and drop them in `public/assets/`.

## Where things live

| What | File |
|---|---|
| Project cards (titles, dates, glow colours, screen positions, videos) | `data/projects.ts` |
| Headline, intro, nav, CTA link, slots count, sidebar wallpaper video | `data/site.ts` |
| Service chips | `data/services.ts` |
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
