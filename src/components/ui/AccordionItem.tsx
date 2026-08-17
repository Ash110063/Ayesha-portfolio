"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

interface AccordionItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}

export default function AccordionItem({
  q,
  a,
  open,
  onToggle,
  id,
}: AccordionItemProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      gsap.to(panel, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: 0.42,
        ease: "power3.inOut",
        onComplete: () => ScrollTrigger.refresh(),
      });

      gsap.to(iconRef.current, {
        rotate: open ? 45 : 0,
        duration: 0.32,
        ease: "power3.out",
      });
    },
    { dependencies: [open] },
  );

  return (
    <div
      className={cn(
        "acc rounded-2xl border bg-[var(--surface)] backdrop-blur-2xl transition-colors glass-mobile-solid",
        open ? "border-[rgba(154,248,66,0.35)]" : "border-[var(--border-strong)]",
      )}
      data-open={open}
    >
      <button
        type="button"
        className="acc__trigger flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
      >
        <span
          className={cn(
            "text-base transition-colors",
            open ? "text-[var(--color-accent)]" : "text-white",
          )}
        >
          {q}
        </span>
        <svg
          ref={iconRef}
          className="acc__icon size-4 shrink-0"
          viewBox="0 0 16 16"
          aria-hidden
        >
          <path
            d="M8 1v14M1 8h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        ref={panelRef}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="acc__panel overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="acc__body px-5 pb-5 text-[15px] leading-[1.55] text-[var(--fg-dim)]">
          {a}
        </p>
      </div>
    </div>
  );
}
