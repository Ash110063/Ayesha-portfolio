// ───────────────────────────────────────────────────────────────
//  Glow motion settings — tune how "alive" the card glows feel.
//  Colours are never touched here; they live in data/projects.ts.
// ───────────────────────────────────────────────────────────────

export const glowSettings = {
  /** Horizontal drift, in Figma px (Figma original: 14). */
  driftX: 22,
  /** Vertical lift, in Figma px (Figma original: 8). */
  driftY: 12,
  /** Scale range while breathing (Figma original: 1.03 → 1.08). */
  scaleMin: 1.0,
  scaleMax: 1.1,
  /** Max rotation in degrees. */
  sway: 3,
  /** Opacity range while pulsing. */
  opacityMin: 0.78,
  opacityMax: 1,

  /** Loop lengths in seconds — deliberately out of sync so the motion never repeats. */
  durations: { drift: 9, breathe: 7, sway: 13, pulse: 5.5 },

  /** How far the glow leans toward the cursor, in Figma px. */
  hoverLeanX: 46,
  hoverLeanY: 20,
  /** Extra scale while hovering a card. */
  hoverScale: 1.06,

  /** Scroll entrance: glow starts at this scale/opacity and blooms in. */
  entranceScale: 0.72,
  entranceDuration: 1.4,
};
