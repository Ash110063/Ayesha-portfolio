"use client";

import { cn } from "@/lib/cn";

interface ArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  "aria-label": string;
  className?: string;
  disabled?: boolean;
}

export default function ArrowButton({
  direction,
  onClick,
  className,
  disabled,
  ...rest
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-white transition-colors hover:bg-[var(--color-accent)] hover:text-black disabled:opacity-35",
        className,
      )}
      {...rest}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className={cn(direction === "prev" && "rotate-180")}
      >
        <path
          d="M12 8l8 8-8 8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
