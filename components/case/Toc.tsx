"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "./CaseFrame";

/** Section index in the brief panel; highlights the section in view. */
export function Toc({ items, activeClass }: { items: TocItem[]; activeClass: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [items]);

  return (
    <>
      {items.map((it, i) => (
        <a key={it.id} href={`#${it.id}`} className={active === it.id ? activeClass : undefined}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {it.label}
        </a>
      ))}
    </>
  );
}
