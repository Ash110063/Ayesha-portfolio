import { getLenis } from "@/components/layout/SmoothScroll";
import { ScrollTrigger } from "@/lib/gsap";

export function scrollToId(id: string, offset = -80) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  const lenis = getLenis();

  const after = () => {
    ScrollTrigger.refresh();
  };

  if (lenis) {
    lenis.scrollTo(y, {
      duration: 1.2,
      force: true,
      lock: true,
      onComplete: after,
    });
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
    window.setTimeout(after, 400);
  }

  if (typeof history !== "undefined") {
    history.replaceState(null, "", `#${id}`);
  }
}

export function scrollToY(y: number, duration = 1) {
  const lenis = getLenis();
  const after = () => ScrollTrigger.refresh();

  if (lenis) {
    lenis.scrollTo(y, {
      duration,
      force: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      onComplete: after,
    });
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
    window.setTimeout(after, 400);
  }
}
