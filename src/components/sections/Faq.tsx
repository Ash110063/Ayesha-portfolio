"use client";

import Image from "next/image";
import { useState } from "react";
import { FAQS, FAQ_META, TESTIMONIAL } from "@/data/faq";
import { SECTION_IDS } from "@/data/nav";
import FillText from "@/components/ui/FillText";
import AccordionItem from "@/components/ui/AccordionItem";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={SECTION_IDS.faq}
      className="relative py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-page max-w-[1152px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-1">
            <FillText
              as="h2"
              id="faq-heading"
              className="text-[34px] leading-none md:text-[60px]"
            >
              {FAQ_META.heading}
            </FillText>
            <p className="mt-4 text-lg text-[var(--fg-dim)]">{FAQ_META.sub}</p>

            <div className="mt-8 hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-[29px] backdrop-blur-[20px] glass-mobile-solid lg:block">
              <TestimonialCard />
            </div>
          </div>

          <div className="order-2 flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                id={`faq-${i}`}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="order-3 rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-[20px] glass-mobile-solid lg:hidden">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-[43px] w-16 overflow-hidden rounded-[10px]">
          <Image
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div>
          <p className="text-lg">{TESTIMONIAL.name}</p>
          <p className="text-xs tracking-[0.1em] text-[var(--fg-dim)]">
            {TESTIMONIAL.company}
          </p>
        </div>
      </div>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm">{TESTIMONIAL.rating}</span>
        <span className="flex gap-0.5" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image key={i} src="/svg/star.svg" alt="" width={14} height={14} />
          ))}
        </span>
      </div>
      <p className="text-[15px] leading-[1.55] text-[var(--fg-dim)]">
        {TESTIMONIAL.quote}
      </p>
    </div>
  );
}
