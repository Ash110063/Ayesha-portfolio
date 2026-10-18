"use client";

import { useRef, type PointerEvent } from "react";
import Link from "next/link";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { Project, Rect } from "@/data/projects";
import { glowSettings as g } from "@/lib/glow-settings";
import { LivingGlow } from "./LivingGlow";
import { ScreenVideo } from "./ScreenVideo";
import styles from "./ProjectCard.module.css";

/** Figma px on a 1000 × 567 card → container-relative units. */
const u = (px: number) => `${px / 10}cqw`;

function rectStyle(r: Rect) {
  return {
    left: r.left === undefined ? "50%" : u(r.left),
    transform: r.left === undefined ? "translateX(-50%)" : undefined,
    top: u(r.top),
    width: u(r.width),
    height: u(r.height),
    borderRadius: r.radius ? u(r.radius) : undefined,
  };
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const active = useInView(ref, { margin: "200px 0px" });
  const reduce = useReducedMotion();

  // Cursor lean + hover bloom, smoothed with springs
  const spring = { stiffness: 55, damping: 16, mass: 0.9 };
  const leanX = useSpring(useMotionValue(0), spring);
  const leanY = useSpring(useMotionValue(0), spring);
  const hoverScale = useSpring(useMotionValue(1), spring);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    const k = r.width / 1000;
    leanX.set(nx * 2 * g.hoverLeanX * k);
    leanY.set(ny * 2 * g.hoverLeanY * k);
    hoverScale.set(g.hoverScale);
  };
  const onLeave = () => {
    leanX.set(0);
    leanY.set(0);
    hoverScale.set(1);
  };

  const live = Boolean(project.href);
  const handlers = { onPointerMove: onMove, onPointerLeave: onLeave };
  const body = (
    <>
      <div className={styles.info}>
        <p className={styles.category}>
          <span className={styles.bullet} aria-hidden>
            <i style={{ left: 3, top: 0 }} />
            <i style={{ left: 3, top: 6 }} />
            <i style={{ left: 6, top: 3 }} />
            <i style={{ left: 0, top: 3 }} />
          </span>
          {project.category}
        </p>
        <h2 className={styles.name}>{project.name}</h2>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.chips} aria-label="Focus">
          {project.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div className={styles.art} style={{ background: project.background }}>
      <LivingGlow
        gradient={project.glow}
        drift={project.drift}
        energy={project.energy}
        index={index}
        active={active}
        leanX={leanX}
        leanY={leanY}
        hoverScale={hoverScale}
      />

      {project.device === "laptop" ? (
        <>
          <div className={styles.laptop} aria-hidden>
            <img src="/assets/laptop.png" alt="" loading={index === 0 ? "eager" : "lazy"} />
          </div>
          <div className={styles.screen} style={rectStyle(project.screen)}>
            <ScreenVideo src={project.video} poster={project.poster} active={active} label={project.title} />
          </div>
        </>
      ) : (
        <div className={styles.floor} aria-hidden />
      )}

      <div className={styles.tag} style={{ width: u(project.tagWidth ?? 155) }}>
        <span className={styles.tagDate}>{project.date}</span>
        <span className={styles.tagTitle}>{project.title}</span>
      </div>

      {project.device === "phone" &&
        project.phones.map((p, i) => (
          <div key={i} className={styles.phone} style={rectStyle(p)} aria-hidden>
            <img src={p.src} alt="" loading="lazy" />
          </div>
        ))}

        <span className={`${styles.cta} ${live ? "" : styles.soon}`} data-roll={live || undefined}>
          {live ? "Explore" : "Coming soon"}
          <svg className={styles.ctaArrow} viewBox="0 0 16 8" aria-hidden>
            <path d="M0 4h14.5M11.5 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </div>

    </>
  );

  if (live) {
    return (
      <Link
        ref={ref as never}
        href={project.href!}
        className={`${styles.card} ${styles.live}`}
        aria-label={`${project.name}: ${project.summary} Explore the case study.`}
        {...handlers}
      >
        {body}
      </Link>
    );
  }
  return (
    <article ref={ref as never} className={styles.card} aria-label={`${project.name}, case study coming soon`} {...handlers}>
      {body}
    </article>
  );
}
