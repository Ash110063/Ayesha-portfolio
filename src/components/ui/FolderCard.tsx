"use client";

import { cn } from "@/lib/cn";
import { scrollToId } from "@/lib/scrollTo";

interface FolderCardProps {
  shape: string;
  title: string;
  body: string;
  href?: string;
  className?: string;
}

export default function FolderCard({
  shape,
  title,
  body,
  href = "#work",
  className,
}: FolderCardProps) {
  const lines = title.split("\n");
  const target = href.replace(/^#/, "");

  return (
    <a
      href={href}
      className={cn(
        "folder-card group relative block aspect-[217/153] w-full min-w-0 overflow-hidden rounded-lg transition-transform duration-[260ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 md:min-h-[150px]",
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(target);
      }}
    >
      {/* Decorative SVG shapes — use img so baked gradients render 1:1 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shape}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-fill"
      />
      <div className="relative z-10 h-full p-[15px]">
        <h3 className="max-w-[180px] text-[15px] leading-[1.2] tracking-[-0.5px] text-white md:text-[16.76px] md:tracking-[-0.503px]">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-3 max-w-[189px] text-xs leading-[1.2] text-white/80 md:mt-6">
          {body}
        </p>
        <span className="absolute right-3 bottom-3 flex size-[28.7px] items-center justify-center transition-transform duration-[260ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-45">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/svg/folder-cta-circle.svg"
            alt=""
            width={29}
            height={29}
            aria-hidden
            className="absolute inset-0"
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden
            className="relative z-10 text-black"
          >
            <path
              d="M12 8l8 8-8 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
