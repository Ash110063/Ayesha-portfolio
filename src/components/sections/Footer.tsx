"use client";

import Image from "next/image";
import { SECTION_IDS } from "@/data/nav";
import { SITE } from "@/data/site";
import FillText from "@/components/ui/FillText";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id={SECTION_IDS.contact}
      className="relative overflow-hidden py-20 min-h-[100svh] md:min-h-[556px] md:py-24"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0">
        <BackgroundVideo className="opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/40" />
      </div>

      <div className="relative z-10 container-page flex flex-col items-center text-center">
        <FillText
          as="h2"
          id="footer-heading"
          trigger="scrub"
          angle={120}
          className="footer__name text-[clamp(3rem,16vw,15rem)] leading-[0.9] font-bold tracking-[-0.03em]"
        >
          {SITE.name}
        </FillText>

        <p className="mt-6 max-w-[831px] text-base text-[var(--fg-dim)] md:text-lg">
          {SITE.tagline}
        </p>

        <div className="mt-10 flex w-full max-w-3xl flex-col items-start gap-4 sm:items-center md:flex-row md:justify-center md:gap-8">
          {/* <ContactPill
            href={`mailto:${SITE.email}`}
            icon="/svg/social-mail.svg"
            label={SITE.email}
          />
          <ContactPill
            href={SITE.phoneHref}
            icon="/svg/social-phone.svg"
            label={SITE.phone}
          />
          <ContactPill
            href={SITE.linkedin}
            icon="/svg/social-linkedin.svg"
            label="LinkedIn"
            external
          /> */}

          <ContactPill href={`mailto:${SITE.email}`} label={SITE.email}>
            <FaEnvelope size={18} />
          </ContactPill>

          <ContactPill href={SITE.phoneHref} label={SITE.phone}>
            <FaPhone size={18} />
          </ContactPill>

          <ContactPill href={SITE.linkedin} label="LinkedIn" external>
            <FaLinkedinIn size={18} />
          </ContactPill>
        </div>

        <div className="mt-16 flex w-full flex-col items-center gap-3 border-t border-white/10 pt-6 text-sm text-[var(--fg-dim)] md:flex-row md:justify-between">
          <p>{SITE.copyright}</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactPill({
  href,
  children,
  label,
  external,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-left text-sm md:text-base"
    >
      <span className="relative inline-flex size-10 items-center justify-center rounded-full border border-white/15">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(154,248,66,.35),transparent_70%)] blur-[14px]" />
        <span className="relative z-10 text-white flex items-center justify-center">
          {children}
        </span>
      </span>
      <span>{label}</span>
    </a>
  );
}
