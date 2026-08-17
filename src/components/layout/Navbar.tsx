"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { NAV_LINKS, SECTION_IDS } from "@/data/nav";
import { scrollToId } from "@/lib/scrollTo";
import { getLenis } from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS.hero);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ids = Object.values(SECTION_IDS);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      if (open) {
        gsap.set(panel, { height: "auto", display: "block" });
        gsap.from(panel, {
          height: 0,
          opacity: 0,
          y: 6,
          duration: 0.35,
          ease: "power3.out",
        });
        gsap.from(panel.querySelectorAll("[data-nav-item]"), {
          opacity: 0,
          y: 8,
          stagger: 0.03,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          y: 6,
          duration: 0.28,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(panel, { display: "none", clearProps: "height,opacity,y" });
          },
        });
      }
    },
    { dependencies: [open], scope: rootRef },
  );

  useEffect(() => {
    if (!open) return;

    const lenis = getLenis();
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onWheel = (e: WheelEvent) => {
      const panel = panelRef.current;
      if (panel && panel.contains(e.target as Node)) return;
      e.preventDefault();
    };
    const onTouch = (e: TouchEvent) => {
      const panel = panelRef.current;
      if (panel && panel.contains(e.target as Node)) return;
      e.preventDefault();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", onTouch, { passive: false });

    return () => {
      lenis?.start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [open]);

  const go = (id: string) => {
    getLenis()?.start();
    document.body.style.overflow = "";
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header ref={rootRef} className="pointer-events-none fixed inset-x-0 top-5 z-50">
      <div className="container-page pointer-events-auto max-w-[1288px]">
        <div className="flex h-14 items-center justify-between rounded-full bg-[var(--surface-2)] px-4 shadow-2xl backdrop-blur-[12px] glass-mobile-solid md:px-6">
          <a href="#home" className="inline-flex" onClick={(e) => { e.preventDefault(); go("home"); }}>
            <Image src="/logo.png" alt="Aisha Riaz" width={140} height={15} priority />
          </a>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-[37px] w-[60px] items-center justify-center rounded-[41px] bg-white/5 shadow-[0_8px_16px_rgba(0,0,0,.37)] backdrop-blur-md"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Image src="/svg/icon-menu.svg" alt="" width={22} height={18} aria-hidden />
          </button>
        </div>

        <div
          ref={panelRef}
          id="nav-menu"
          role="menu"
          className="mt-2 hidden max-h-[70vh] overflow-y-auto rounded-3xl border border-white/10 bg-[var(--surface-2)] p-4 shadow-2xl backdrop-blur-[12px] glass-mobile-solid"
          style={{ height: 0, opacity: 0 }}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                type="button"
                role="menuitem"
                data-nav-item
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-base transition-colors hover:bg-white/5",
                  active === link.target ? "text-[var(--color-accent)]" : "text-white",
                )}
                onClick={() => go(link.target)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
