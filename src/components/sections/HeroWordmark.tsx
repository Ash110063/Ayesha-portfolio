"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const CREATIVE = "CREATIVE";
const PORTFOLIO = "PORTFOLIO";

function WordmarkLine({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {Array.from(text).map((letter, i) => (
        <span key={`${letter}-${i}`} className="hero-letter">
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function HeroWordmark() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const creative = root.querySelectorAll<HTMLElement>(
        ".hero-wordmark__line--creative .hero-letter",
      );
      const portfolio = root.querySelectorAll<HTMLElement>(
        ".hero-wordmark__line--portfolio .hero-letter",
      );
      const letters = root.querySelectorAll<HTMLElement>(".hero-letter");

      gsap.set(letters, { "--fill-x": 100 });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(letters, { "--fill-x": 0 });
        return;
      }

      const fill = {
        "--fill-x": 0,
        duration: 0.28,
        ease: "none",
        stagger: 0.12,
      };

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
      tl.to(creative, fill);
      tl.to(portfolio, fill, "+=0.08");
      tl.to({}, { duration: 0.7 });
      tl.set(letters, { "--fill-x": 100 });
    },
    { scope: ref },
  );

  return (
    <h1 ref={ref} id="hero-heading" className="hero-wordmark">
      <span className="sr-only">Creative Portfolio</span>
      <span aria-hidden="true">
        <WordmarkLine
          text={CREATIVE}
          className="hero-wordmark__line hero-wordmark__line--creative"
        />
        <WordmarkLine
          text={PORTFOLIO}
          className="hero-wordmark__line hero-wordmark__line--portfolio hero-wordmark__indent"
        />
      </span>
    </h1>
  );
}
