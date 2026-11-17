"use client";

import { useState } from "react";
import { REAL_PROJECTS, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E5E5E5] mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777] block mb-3">
            03 &bull; Selected Work
          </span>
          <h2
            id="selected-work-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Digital Flagships &amp; Live Projects.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          Explore three recent live web platforms engineered by DS Studios across Indian hospitality, pan-India e-commerce, and educational institutions.
        </p>
      </div>

      {/* Real Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {REAL_PROJECTS.map((project) => (
          <div key={project.id} className="flex">
            <ProjectCard
              project={project}
              onOpenPreview={(p) => setActiveModalProject(p)}
            />
          </div>
        ))}
      </div>

      {/* Bottom Live Links Bar */}
      <div className="mt-16 p-6 sm:p-8 border border-[#E5E5E5] bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-bold text-[#111111]">
            Ready to build a digital presence of this caliber?
          </p>
          <p className="text-xs text-[#666666]">
            Every project is engineered with bespoke typography, responsive layouts, and modern Next.js performance.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors shrink-0"
        >
          <span>Discuss Your Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Modal Inspector for Project Deep Dive */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
