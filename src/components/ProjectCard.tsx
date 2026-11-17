"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
}

export function ProjectCard({ project, onOpenPreview }: ProjectCardProps) {
  const isDarkCard = project.id === "saffron-smoke";

  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="group relative border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#111111] flex flex-col overflow-hidden w-full"
    >
      {/* Top Meta Line */}
      <div className="p-4 sm:p-5 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#111111]">{project.number}</span>
          <span className="text-[#CCCCCC]">/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        <span className="px-2 py-0.5 border border-[#E5E5E5] text-[10px] uppercase tracking-wider bg-neutral-50 text-[#555555]">
          Live Portfolio
        </span>
      </div>

      {/* Browser Chrome Preview displaying the Website's Official Favicon */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E5E5] ${project.bgColor} flex flex-col justify-between p-5 sm:p-6 transition-colors`}
      >
        {/* Browser Top Bar */}
        <div className={`flex items-center justify-between pb-3 border-b ${isDarkCard ? "border-white/10" : "border-black/10"}`}>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
          </div>
          <div className={`text-[11px] font-mono truncate max-w-[160px] sm:max-w-xs ${isDarkCard ? "text-neutral-400" : "text-neutral-600"}`}>
            {project.liveUrl.replace("https://", "")}
          </div>
          <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${isDarkCard ? "bg-white/10 text-neutral-300" : "bg-black/5 text-neutral-600"}`}>
            Live Site
          </span>
        </div>

        {/* Center Canvas: Website Official Favicon Showcase */}
        <div className="my-auto py-5 flex flex-col items-center justify-center text-center space-y-3">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 p-3.5 bg-white rounded-2xl shadow-lg border border-[#E5E5E5] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
            <Image
              src={project.favicon}
              alt={`${project.name} official favicon`}
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <p className={`font-serif text-lg sm:text-xl font-bold tracking-tight ${isDarkCard ? "text-white" : "text-[#111111]"}`}>
              {project.name}
            </p>
            <p className={`text-xs font-mono uppercase tracking-wider mt-0.5 ${isDarkCard ? "text-neutral-400" : "text-[#777777]"}`}>
              {project.clientType}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Direct Visit Link */}
        <div className={`flex items-center justify-between text-xs font-mono pt-3 border-t ${isDarkCard ? "border-white/10" : "border-black/10"}`}>
          <span className={isDarkCard ? "text-neutral-400" : "text-neutral-500"}>
            Production Domain
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 font-bold hover:underline ${isDarkCard ? "text-white" : "text-[#111111]"}`}
            aria-label={`Open ${project.name} live website in new tab`}
          >
            <span>Visit Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Project Content Information */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-4">
            <h3
              id={`project-heading-${project.id}`}
              className="text-2xl font-serif font-bold tracking-tight text-[#111111] group-hover:underline transition-all"
            >
              {project.name}
            </h3>
            <span className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <p className="text-xs font-mono font-semibold text-[#333333]">
            {project.tagline}
          </p>

          <p className="text-xs text-[#666666] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Deliverable Tags */}
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

          {/* Action Buttons */}
          <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onOpenPreview(project)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 border border-[#111111] text-xs font-mono uppercase tracking-widest text-[#111111] bg-white hover:bg-neutral-100 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Project Specs</span>
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#111111] text-xs font-mono uppercase tracking-widest text-white hover:bg-[#333333] transition-colors"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
