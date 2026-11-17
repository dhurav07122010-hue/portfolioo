"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Info } from "lucide-react";

export function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "e-commerce", label: "Commerce" },
    { id: "hospitality", label: "Hospitality" },
    { id: "developer", label: "Dev & SaaS" },
    { id: "editorial", label: "Editorial" },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "e-commerce") return proj.category.includes("E-Commerce") || proj.category.includes("Shopify");
    if (filter === "hospitality") return proj.category.includes("Restaurant");
    if (filter === "developer") return proj.category.includes("SaaS");
    if (filter === "editorial") return proj.category.includes("Portfolio");
    return true;
  });

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
            03 &bull; Selected Demonstration Work
          </span>
          <h2
            id="selected-work-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Digital Flagships &amp; Concept Studies.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          A curated portfolio of five comprehensive digital concept studies demonstrating our capabilities in art direction, bespoke typography, e-commerce, and high-performance engineering.
        </p>
      </div>

      {/* Honest Solo Operation Notice */}
      <div className="mb-12 p-4 border border-[#E5E5E5] bg-neutral-50 flex items-start sm:items-center gap-3 text-xs text-[#555555]">
        <Info className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 sm:mt-0" />
        <p>
          <strong className="text-[#111111] font-semibold">Studio Transparency Note:</strong> These demonstration projects represent DS Studios concept architectural case studies created to showcase design standards and technical execution. We never fabricate client testimonials, artificial team sizes, or inflated business statistics.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Project filter">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={filter === cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all ${
              filter === cat.id
                ? "bg-[#111111] text-white"
                : "border border-[#E5E5E5] text-[#777777] hover:border-[#111111] hover:text-[#111111] bg-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={idx === 0 ? "lg:col-span-2" : ""}
          >
            <ProjectCard
              project={project}
              onOpenPreview={(p) => setActiveModalProject(p)}
            />
          </div>
        ))}
      </div>

      {/* Modal Inspector for Concept Demonstrations */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
