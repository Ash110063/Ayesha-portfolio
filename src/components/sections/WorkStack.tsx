"use client";

import { useCallback, useRef, type CSSProperties } from "react";
import { PROJECTS } from "@/data/projects";
import { SECTION_IDS } from "@/data/nav";
import ProjectCard from "@/components/ui/ProjectCard";
import FillText from "@/components/ui/FillText";
import { getLenis } from "@/components/layout/SmoothScroll";
import { scrollToY } from "@/lib/scrollTo";

function currentScroll() {
  const lenis = getLenis();
  if (lenis && typeof lenis.scroll === "number") return lenis.scroll;
  return window.scrollY;
}

function slotStickyOffset(slot: HTMLElement) {
  const raw = getComputedStyle(slot).top;
  const parsed = parseFloat(raw);
  if (Number.isFinite(parsed)) return parsed;

  const nav =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
    ) || 56;
  return nav + 16;
}

export default function WorkStack() {
  const listRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = useCallback((i: number) => {
    const stack = listRef.current;
    const slot = slotRefs.current[i];
    if (!stack || !slot) return;

    // Never read getBoundingClientRect / offsetTop from a stuck sticky node —
    // those values equal the current visual position, so the scroll is a no-op.
    const stackY = stack.getBoundingClientRect().top + currentScroll();
    let flow = 0;
    for (let j = 0; j < i; j++) {
      flow += slotRefs.current[j]?.offsetHeight ?? 0;
    }

    scrollToY(Math.max(0, stackY + flow - slotStickyOffset(slot)), 1.05);
  }, []);

  return (
    <section
      id={SECTION_IDS.work}
      className="relative py-20 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="container-page mb-10 md:mb-16">
        <FillText
          as="h2"
          id="work-heading"
          className="text-[34px] leading-none md:text-[60px]"
        >
          Some of My Work
        </FillText>
      </div>

      <div ref={listRef} className="work-stack container-page">
        {PROJECTS.map((project, i) => (
          <div
            key={project.slug}
            ref={(el) => {
              slotRefs.current[i] = el;
            }}
            className="work-stack__slot"
            style={{ "--i": i } as CSSProperties}
            onClick={() => scrollToCard(i)}
          >
            <ProjectCard
              project={project}
              index={i}
              total={PROJECTS.length}
              onSelect={() => scrollToCard(i)}
            />
          </div>
        ))}
        <div aria-hidden className="work-stack__tail" />
      </div>
    </section>
  );
}
