"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/services";
import { SECTION_IDS } from "@/data/nav";
import FillText from "@/components/ui/FillText";
import ArrowButton from "@/components/ui/ArrowButton";
import { SERVICE_EVENT } from "@/lib/serviceBus";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";

export default function Services() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const cardRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = (next: number, direction: 1 | -1) => {
    const clamped = (next + SERVICES.length) % SERVICES.length;
    setDir(direction);
    setActive(clamped);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const i = (e as CustomEvent<number>).detail;
      if (typeof i === "number") go(i, i > active ? 1 : -1);
    };
    window.addEventListener(SERVICE_EVENT, handler);
    return () => window.removeEventListener(SERVICE_EVENT, handler);
  }, [active]);

  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    tab?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  useGSAP(
    () => {
      const el = cardRef.current;
      if (!el) return;
      gsap.fromTo(
        el.querySelectorAll("[data-anim]"),
        { y: 18 * dir, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power3.out" },
      );
    },
    { dependencies: [active], scope: cardRef },
  );

  const service = SERVICES[active];

  return (
    <section
      id={SECTION_IDS.services}
      className="relative py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="container-page max-w-[1152px]">
        <FillText
          as="h2"
          id="services-heading"
          className="mb-8 text-[34px] leading-none md:mb-12 md:text-[60px]"
        >
          How I Can Help
        </FillText>

        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Services"
          className="mb-6 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(active + 1, 1);
            if (e.key === "ArrowLeft") go(active - 1, -1);
            if (e.key === "Home") go(0, -1);
            if (e.key === "End") go(SERVICES.length - 1, 1);
          }}
        >
          {SERVICES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              data-tab={i}
              aria-selected={active === i}
              id={`service-tab-${item.id}`}
              className={cn(
                "shrink-0 snap-center rounded-full border px-4 py-2.5 text-sm whitespace-nowrap transition-colors md:px-5 md:text-base",
                active === i
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-black"
                  : "border-[var(--border)] bg-[var(--surface)] text-white",
              )}
              onClick={() => go(i, i > active ? 1 : -1)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div
          ref={cardRef}
          role="tabpanel"
          aria-labelledby={service ? `service-tab-${service.id}` : undefined}
          className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl glass-mobile-solid md:p-12"
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX;
            if (start == null || end == null) return;
            const delta = end - start;
            if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1), delta < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="mb-6 flex items-center gap-4 text-sm text-[var(--fg-dim)]">
            <span data-anim className="text-base text-white">
              {service?.index}
            </span>
            <span className="h-px w-12 bg-white/20" />
            <span data-anim>
              {active + 1}/{SERVICES.length}
            </span>
          </div>
          <h3
            data-anim
            className="max-w-3xl text-[24px] leading-tight md:text-[34px] lg:text-[60px]"
          >
            {service?.title}
          </h3>
          <p
            data-anim
            className="mt-5 max-w-3xl text-[15px] leading-[1.6] text-[var(--fg-dim)] md:text-base"
          >
            {service?.body}
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <ArrowButton
            direction="prev"
            aria-label="Previous service"
            onClick={() => go(active - 1, -1)}
          />
          <ArrowButton
            direction="next"
            aria-label="Next service"
            onClick={() => go(active + 1, 1)}
          />
        </div>
      </div>
    </section>
  );
}
