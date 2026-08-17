"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { ABOUT, EXPERIENCE, TECH_STACK } from "@/data/experience";
import { SECTION_IDS } from "@/data/nav";
import { SITE } from "@/data/site";
import FillText from "@/components/ui/FillText";
import SectionLabel from "@/components/ui/SectionLabel";
import { gsap, useGSAP } from "@/lib/gsap";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = marqueeRef.current;
      if (!track) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const pause = () => tween.pause();
      const play = () => tween.play();
      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", play);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", play);
      };
    },
    { scope: marqueeRef },
  );

  const logos = [...TECH_STACK, ...TECH_STACK];

  return (
    <section
      id={SECTION_IDS.about}
      className="relative py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="container-page max-w-[1152px]">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <SectionLabel className="mb-4">{ABOUT.eyebrow}</SectionLabel>
          <FillText
            as="h2"
            id="about-heading"
            className="text-[34px] leading-none md:text-[60px]"
          >
            {ABOUT.heading}
          </FillText>
          <p className="mt-4 text-[var(--fg-dim)] md:text-lg">{ABOUT.sub}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[466px_1fr] lg:gap-10">
          <div>
            <div className="relative mx-auto aspect-[373/419] max-w-[466px] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/portrait.png"
                alt={SITE.name}
                fill
                className="object-cover"
                sizes="466px"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-sm backdrop-blur-md glass-mobile-solid">
                <span className="size-2 rounded-full bg-[var(--color-accent)]" />
                {ABOUT.available}
              </span>
            </div>

            <h3 className="mt-6 text-[28px] md:text-[32px]">
              {ABOUT.greeting}
            </h3>
            <p className="mt-1 text-[var(--fg-dim)]">{SITE.location}</p>

            <div className="mt-5 flex gap-3">
              <SocialCircle href={SITE.linkedin} label="LinkedIn">
                <FaLinkedinIn size={18} />
              </SocialCircle>
              <SocialCircle href={`mailto:${SITE.email}`} label="Email">
                <FaEnvelope size={18} />
              </SocialCircle>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10">
              <p className="text-base leading-[1.6] text-white/90">
                {ABOUT.bio}
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm text-[var(--fg-dim)]">
                {ABOUT.stackLabel}
              </p>
              <div
                className="overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
                }}
              >
                <div ref={marqueeRef} className="flex w-max gap-4">
                  {logos.map((logo, i) => (
                    <div
                      key={`${logo.name}-${i}`}
                      className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 md:size-14"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(154,248,66,.35),transparent_70%)] blur-[14px]" />
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={28}
                        height={28}
                        className="relative z-10 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ul className="divide-y divide-white/10 border-t border-white/10">
              {EXPERIENCE.map((item) => (
                <li
                  key={item.company}
                  className="flex min-h-[78px] flex-col justify-center gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div>
                    <p className="text-base text-white">{item.company}</p>
                    <p className="text-sm text-[var(--fg-dim)]">{item.role}</p>
                  </div>
                  <p className="shrink-0 text-sm text-[var(--fg-dim)]">
                    {item.years}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialCircle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="relative inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(154,248,66,.35),transparent_70%)] blur-[14px]" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
