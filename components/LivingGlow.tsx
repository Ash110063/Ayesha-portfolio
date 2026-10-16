"use client";

import { motion, useReducedMotion, type MotionValue } from "motion/react";
import type { CSSProperties } from "react";
import { glowSettings as g } from "@/lib/glow-settings";
import styles from "./LivingGlow.module.css";

/** Figma px on a 1000-wide card → container-relative units. */
const u = (px: number) => `${px / 10}cqw`;

type Props = {
  gradient: string;
  drift: 1 | -1;
  energy?: number;
  index: number;
  active: boolean;
  leanX: MotionValue<number>;
  leanY: MotionValue<number>;
  hoverScale: MotionValue<number>;
};

/**
 * The blurred light behind each device.
 * Two blobs of the SAME gradient move on deliberately mismatched loops
 * (drift / breathe / sway / pulse), so the motion never visibly repeats.
 * The colours are never altered — only position, scale, rotation and opacity.
 */
export function LivingGlow({ gradient, drift, energy = 1, index, active, leanX, leanY, hoverScale }: Props) {
  const reduce = useReducedMotion();
  const d = g.durations;
  const phase = index * 2.3;

  const vars = {
    "--g": gradient,
    "--blur": u(96.95),
    "--dx": u(g.driftX * energy * drift),
    "--dy": u(g.driftY * energy),
    "--s-min": 1 + (g.scaleMin - 1) * energy,
    "--s-max": 1 + (g.scaleMax - 1) * energy,
    "--sway": `${g.sway * energy * drift}deg`,
    "--o-min": g.opacityMin,
    "--o-max": g.opacityMax,
    "--t-drift": `${d.drift}s`,
    "--t-breathe": `${d.breathe}s`,
    "--t-sway": `${d.sway}s`,
    "--t-pulse": `${d.pulse}s`,
    "--phase": `-${phase}s`,
  } as CSSProperties;

  return (
    <motion.div
      className={styles.root}
      data-active={active}
      style={{ left: u(107), top: u(342), width: u(786), height: u(211), ...vars }}
      initial={reduce ? false : { opacity: 0, scale: g.entranceScale, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: g.entranceDuration, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.div className={styles.lean} style={{ x: leanX, y: leanY, scale: hoverScale }}>
        <span className={`${styles.blob} ${styles.primary}`} />
        <span className={`${styles.blob} ${styles.secondary}`} />
      </motion.div>
    </motion.div>
  );
}
