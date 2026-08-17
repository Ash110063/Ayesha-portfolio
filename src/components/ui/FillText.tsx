"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

type Trigger = "load" | "inview" | "scrub";

interface FillTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  trigger?: Trigger;
  angle?: number;
  duration?: number;
  delay?: number;
}

export default function FillText({
  children,
  as: Tag = "span",
  className,
  id,
  trigger = "inview",
  angle = 120,
  duration = 1.6,
  delay = 0,
}: FillTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { backgroundPosition: "0% 0%" });
        return;
      }

      if (trigger === "load") {
        gsap.fromTo(
          el,
          { backgroundPosition: "130% -10%" },
          {
            backgroundPosition: "-30% 110%",
            duration: duration || 4.2,
            delay,
            ease: "none",
            repeat: -1,
          },
        );
        return;
      }

      const from = { backgroundPosition: "100% 0%" };
      const to = { backgroundPosition: "0% 0%" };

      if (trigger === "scrub") {
        const footer = el.closest("footer") ?? el;
        const mm = gsap.matchMedia();

        mm.add("(max-width: 767.98px)", () => {
          gsap.fromTo(el, from, {
            ...to,
            ease: "none",
            autoRound: false,
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              end: "bottom bottom",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          });
        });

        mm.add("(min-width: 768px)", () => {
          gsap.fromTo(el, from, {
            ...to,
            ease: "none",
            autoRound: false,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 45%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });

        return () => mm.revert();
      }

      gsap.fromTo(el, from, {
        ...to,
        duration,
        delay,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
    },
    { scope: ref, dependencies: [trigger, duration, delay, angle] },
  );

  const flowGradient = `linear-gradient(${angle}deg,
    var(--fill-idle) 0%,
    var(--fill-idle) 28%,
    #ffffff 44%,
    #ffffff 52%,
    var(--fill-idle) 68%,
    var(--fill-idle) 100%)`;

  const wipeGradient = `linear-gradient(${angle}deg,
    #ffffff 0%, #ffffff 45%,
    var(--fill-idle) 55%, var(--fill-idle) 100%)`;

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("fill-text", trigger === "load" && "fill-text--flow", className)}
      style={{
        backgroundImage: trigger === "load" ? flowGradient : wipeGradient,
      }}
    >
      {children}
    </Tag>
  );
}
