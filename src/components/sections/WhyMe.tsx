"use client";

import Image from "next/image";
import { useRef } from "react";
import { WHY_ME, WHY_ME_META } from "@/data/whyMe";
import { SECTION_IDS } from "@/data/nav";
import FillText from "@/components/ui/FillText";
import SectionLabel from "@/components/ui/SectionLabel";
import { gsap, useGSAP } from "@/lib/gsap";

export default function WhyMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = sectionRef.current?.querySelectorAll("[data-why-panel]");
      if (!panels?.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(panels, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.whyMe}
      className="relative py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="container-page max-w-[1152px]">
        <div className="mb-12 max-w-3xl md:mb-16">
          <SectionLabel className="mb-4">{WHY_ME_META.eyebrow}</SectionLabel>
          <FillText
            as="h2"
            id="why-heading"
            className="max-w-full pb-[3px] text-[34px] leading-[1.05] md:text-[60px]"
          >
            {WHY_ME_META.heading}
          </FillText>
          <p className="mt-4 text-[var(--fg-dim)] md:text-lg">{WHY_ME_META.sub}</p>
        </div>

        <div className="flex flex-col gap-5">
          {WHY_ME.map((item) => (
            <article
              key={item.title}
              data-why-panel
              className="grid rounded-[28px] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-[20px] glass-mobile-solid md:grid-cols-2"
            >
              <div className="min-w-0 border-b border-[var(--border)] px-6 py-7 md:border-r md:border-b-0 md:px-12 md:py-12">
                <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Image src={item.icon} alt="" width={20} height={20} aria-hidden />
                </div>
                <h3 className="text-[22px] leading-snug break-words md:text-[32px]">
                  {item.title}
                </h3>
                <p className="mt-4 w-full text-base leading-relaxed break-words text-[var(--fg-dim)]">
                  {item.body}
                </p>
              </div>
              <div className="min-w-0 px-6 py-7 md:px-12 md:py-12">
                <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl border border-amber-400/30 bg-white/5">
                  <span className="text-lg text-amber-300" aria-hidden>
                    !
                  </span>
                </div>
                <h3 className="text-[22px] leading-snug break-words md:text-[32px]">
                  {WHY_ME_META.riskLabel}
                </h3>
                <p className="mt-4 w-full text-base leading-relaxed break-words text-[var(--fg-dim)]">
                  {item.risk}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
