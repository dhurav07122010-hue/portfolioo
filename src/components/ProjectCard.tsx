"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
}

export function ProjectCard({ project, onOpenPreview }: ProjectCardProps) {
  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="group relative border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#111111] flex flex-col overflow-hidden"
    >
      {/* Top Meta Line */}
      <div className="p-4 sm:p-6 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#111111]">{project.number}</span>
          <span className="text-[#CCCCCC]">/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        <span className="px-2 py-0.5 border border-[#E5E5E5] text-[10px] uppercase tracking-wider bg-neutral-50 text-[#555555]">
          Live Project
        </span>
      </div>

      {/* Visual Canvas (Aspect ratio 16:10 or 16:9) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E5E5] bg-neutral-100">
        <Image
          src={project.heroImage}
          alt={`${project.name} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Live Website Overlay Badge */}
        <div className="absolute top-4 right-4 z-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-[#E5E5E5] text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-white transition-colors shadow-sm"
            aria-label={`Open ${project.name} live website in new tab`}
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Project Content Information */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <h3
              id={`project-heading-${project.id}`}
              className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#111111] group-hover:underline transition-all"
            >
              {project.name}
            </h3>
            <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              {project.clientType}
            </span>
          </div>

          <p className="text-sm font-sans font-medium text-[#222222]">
            {project.tagline}
          </p>

          <p className="text-sm text-[#666666] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Deliverable Tags */}
        <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
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

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onOpenPreview(project)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-[#111111] text-xs font-mono uppercase tracking-widest text-[#111111] bg-white hover:bg-neutral-100 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Project Specs</span>
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#111111] text-xs font-mono uppercase tracking-widest text-white hover:bg-[#333333] transition-colors"
            >
              <span>Visit Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
