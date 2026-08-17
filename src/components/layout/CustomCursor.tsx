"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const INTERACTIVE =
  "a, button, [role='button'], [role='menuitem'], input, textarea, select, label, summary, .cursor-pointer";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!fine.matches) return;

      document.documentElement.classList.add("has-custom-cursor");
      gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

      let visible = false;

      const show = () => {
        if (visible) return;
        visible = true;
        gsap.set(cursor, { opacity: 1 });
      };

      const hide = () => {
        if (!visible) return;
        visible = false;
        gsap.set(cursor, { opacity: 0 });
        cursor.classList.remove("is-hover");
      };

      const move = (e: MouseEvent) => {
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
        show();
      };

      const over = (e: MouseEvent) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (target.closest("input, textarea, [contenteditable='true']")) {
          hide();
          return;
        }
        show();
        cursor.classList.toggle("is-hover", Boolean(target.closest(INTERACTIVE)));
      };

      window.addEventListener("mousemove", move);
      window.addEventListener("mouseover", over);
      document.addEventListener("mouseleave", hide);

      return () => {
        document.documentElement.classList.remove("has-custom-cursor");
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseover", over);
        document.removeEventListener("mouseleave", hide);
      };
    },
    { scope: cursorRef },
  );

  return (
    <div ref={cursorRef} className="site-cursor" aria-hidden>
      <span className="site-cursor__ring" />
      <span className="site-cursor__dot" />
    </div>
  );
}
