"use client";

import { useEffect, useRef } from "react";
import styles from "./ProjectCard.module.css";

/**
 * Video that plays on the laptop screen. Autoplays muted and looping,
 * and pauses while its card is off screen. Shows a quiet placeholder
 * until a video is added in data/projects.ts.
 */
export function ScreenVideo({ src, poster, active, label }: { src?: string; poster?: string; active: boolean; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  if (!src) {
    return (
      <div className={styles.screenPlaceholder}>
        <span>{label}</span>
        <span>Screen recording</span>
      </div>
    );
  }

  return (
    <video
      ref={ref}
      className={styles.screenVideo}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={`${label} — screen recording`}
    >
      <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
      <source src={src} type="video/mp4" />
    </video>
  );
}
