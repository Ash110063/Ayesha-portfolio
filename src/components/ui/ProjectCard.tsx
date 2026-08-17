"use client";

import Image from "next/image";
import { forwardRef } from "react";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  onSelect: () => void;
  className?: string;
}

const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  function ProjectCard({ project, onSelect, className }, ref) {
    return (
      <article
        ref={ref}
        className={cn(
          "project-card relative mx-auto aspect-[1152/600] w-full max-w-[1152px] overflow-hidden rounded-3xl bg-black",
          className,
        )}
      >
        <span aria-hidden className="absolute inset-0 bg-black" />
        {project.background ? (
          <Image
            src={project.background}
            alt=""
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        ) : null}
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />

        <button
          type="button"
          className="project-card__grab"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect();
          }}
          aria-label={`Show ${project.name}`}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] flex items-start justify-between gap-4 p-5 md:p-6">
          <span className="text-sm text-white md:text-base">{project.index}.</span>
          <p className="max-w-[666px] flex-1 text-sm leading-relaxed text-white md:text-base">
            <span className="font-semibold">{project.name}</span>
            {" — "}
            <span className="line-clamp-4 md:line-clamp-none">{project.blurb}</span>
          </p>
          <span
            aria-hidden
            className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/25"
          >
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
              <path
                d="M12 8l8 8-8 8"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </article>
    );
  },
);

export default ProjectCard;
