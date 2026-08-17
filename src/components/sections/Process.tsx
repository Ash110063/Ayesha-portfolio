"use client";

import { useRef, useState } from "react";
import { PROCESS_META, PROCESS_STEPS } from "@/data/process";
import { SECTION_IDS } from "@/data/nav";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

function travelDistance(track: HTMLElement, viewport: HTMLElement) {
  return Math.max(0, track.scrollWidth - viewport.clientWidth);
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!section || !track || !viewport) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        viewport.style.overflowX = "auto";
        track.style.scrollSnapType = "x mandatory";
      });

      const pinTrack = (
        endMultiplier: number,
        extraRatio: number,
        snap?: boolean,
      ) => {
        const tween = gsap.to(track, {
          x: () => -travelDistance(track, viewport),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => {
              const travel = travelDistance(track, viewport);
              return `+=${travel * endMultiplier + window.innerHeight * extraRatio}`;
            },
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            ...(snap && {
              snap: {
                snapTo: 1 / Math.max(1, PROCESS_STEPS.length - 1),
                duration: { min: 0.15, max: 0.35 },
                ease: "power2.inOut",
              },
            }),
            onUpdate: (self) =>
              setActiveStep(
                Math.round(self.progress * (PROCESS_STEPS.length - 1)),
              ),
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      };

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => pinTrack(1, 0.75),
      );

      mm.add(
        "(min-width: 768px) and (max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
        () => pinTrack(1, 0.6),
      );

      mm.add(
        "(max-width: 767.98px) and (prefers-reduced-motion: no-preference)",
        () => pinTrack(1.15, 0.35, true),
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id={SECTION_IDS.process}
      ref={sectionRef}
      className="process"
      aria-labelledby="process-heading"
    >
      <div className="process__inner">
        <aside className="process__panel">
          <h2
            id="process-heading"
            className="text-[38px] leading-none md:text-[60px] lg:text-[72px]"
          >
            {PROCESS_META.heading}
          </h2>
          <div className="process__label mt-8 flex items-center gap-4 text-[13px] tracking-[0.18em] text-[var(--fg-dim)] uppercase md:text-[15px]">
            <span className="h-px w-12 bg-white/20" />
            <span>{PROCESS_META.label}</span>
            <span className="h-px w-12 bg-white/20" />
          </div>
        </aside>

        <div ref={viewportRef} className="process__viewport">
          <div ref={trackRef} className="process__track">
            {PROCESS_STEPS.map((s) => (
              <article key={s.step} className="process-card">
                <span className="process-card__step">STEP {s.step}</span>
                <h3 className="process-card__title">{s.title}</h3>
                <p className="process-card__body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 pb-6 md:hidden">
        {PROCESS_STEPS.map((s, i) => (
          <span
            key={s.step}
            className={cn(
              "h-1 w-6 rounded-full transition-colors",
              i === activeStep ? "bg-[var(--color-accent)]" : "bg-white/20",
            )}
          />
        ))}
      </div>
    </section>
  );
}
