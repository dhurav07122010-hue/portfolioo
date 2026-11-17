"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="group relative border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#111111] flex flex-col overflow-hidden w-full"
    >
      {/* Top Meta Line */}
      <div className="p-4 sm:p-5 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#111111] text-sm">{project.number}</span>
          <span className="text-[#CCCCCC]">/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        <span className="px-2 py-0.5 border border-[#E5E5E5] text-[10px] uppercase tracking-wider bg-neutral-50 text-[#555555]">
          Live Website
        </span>
      </div>

      {/* Subtle Outer Browser-Style Frame Bar */}
      <div className="px-4 py-2 bg-[#F9F9F9] border-b border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#777777]">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
        </div>
        <div className="text-[11px] text-[#666666] truncate max-w-[200px] sm:max-w-xs">
          {project.liveUrl.replace("https://", "")}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase font-bold text-[#111111] hover:underline flex items-center gap-1"
          aria-label={`Open ${project.name} live site`}
        >
          <span>Live Site</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Large Real Homepage Screenshot (Dominant Visual Element) */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E5E5] bg-neutral-100 block cursor-pointer"
        aria-label={`View live website for ${project.name}`}
      >
        <Image
          src={project.screenshot}
          alt={`Real homepage screenshot of ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.number === "01"}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Subtle hover overlay prompt */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 bg-white/95 text-[#111111] text-xs font-mono uppercase tracking-wider shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#E5E5E5] flex items-center gap-1.5">
            <span>Launch Live Website</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </a>

      {/* Project Content Information */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-4">
            <h3
              id={`project-heading-${project.id}`}
              className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#111111] group-hover:underline transition-all"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              {project.clientType}
            </span>
          </div>

          <p className="text-sm font-sans font-medium text-[#222222]">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Deliverables Tags & Action Button */}
        <div className="space-y-4 pt-3 border-t border-[#E5E5E5]">
          <div className="flex flex-wrap gap-1.5">
            {project.deliverables.slice(0, 3).map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-[11px] font-mono text-[#444444] bg-neutral-100 border border-[#E5E5E5]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Primary Live Website CTA */}
          <div className="pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-xs font-mono uppercase tracking-widest text-white hover:bg-[#333333] transition-colors group-hover:shadow-md"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
