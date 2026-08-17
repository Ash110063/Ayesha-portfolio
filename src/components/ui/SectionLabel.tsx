import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[13px] uppercase tracking-[0.18em] text-[var(--fg-dim)] md:text-[15px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
