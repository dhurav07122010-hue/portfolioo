"use client";

import { Project } from "@/data/projects";
import { ArrowUpRight, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenPreview: (project: Project) => void;
}

export function ProjectCard({ project, onOpenPreview }: Omit<ProjectCardProps, "index">) {
  // SVG visual backgrounds tailored to each concept
  const renderVisualPreview = () => {
    switch (project.id) {
      case "aura-culinary":
        return (
          <div className="w-full h-full bg-[#111111] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            {/* Subtle aesthetic geometry */}
            <div className="absolute -right-16 -top-16 w-64 h-64 border border-white/10 rounded-full pointer-events-none" />
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>Degustation Menu</span>
              <span>10 Courses</span>
            </div>
            <div className="my-auto text-center space-y-2">
              <span className="font-serif italic text-4xl sm:text-5xl text-neutral-100 block">
                Aura
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
                Culinary Monograph
              </p>
            </div>
            <div className="flex justify-between text-xs font-mono text-neutral-400 border-t border-white/10 pt-4">
              <span>Gastronomic Reserve</span>
              <span>Michelin Inspired</span>
            </div>
          </div>
        );
      case "epure-atelier":
        return (
          <div className="w-full h-full bg-[#F5F5F3] text-[#111111] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-[#777777]">
              <span>Lookbook N° 04</span>
              <span>Paris &bull; 2026</span>
            </div>
            <div className="my-auto text-center space-y-3">
              <span className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.2em] block font-light">
                Épure Atelier
              </span>
              <div className="inline-block px-3 py-1 border border-[#111111] text-[10px] font-mono uppercase tracking-widest">
                Autumn Ready-to-Wear
              </div>
            </div>
            <div className="flex justify-between text-xs font-mono text-[#777777] border-t border-[#E5E5E5] pt-4">
              <span>Editorial Commerce</span>
              <span>Pure Silhouettes</span>
            </div>
          </div>
        );
      case "syntax-cloud":
        return (
          <div className="w-full h-full bg-[#080808] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Cluster Healthy
              </span>
              <span>Edge V8 Runtime</span>
            </div>
            <div className="my-auto space-y-3 font-mono">
              <div className="bg-black/80 border border-neutral-800 p-4 text-xs text-neutral-300">
                <p className="text-neutral-500">$ npx syntax-runtime deploy</p>
                <p className="text-emerald-400">&gt; Compiled to 32 PoPs in 14ms</p>
              </div>
              <p className="text-center font-bold text-xl sm:text-2xl tracking-tight uppercase">
                SYNTAX ENGINE
              </p>
            </div>
            <div className="flex justify-between text-xs font-mono text-neutral-500 border-t border-neutral-800 pt-4">
              <span>P99 &lt; 5ms</span>
              <span>Developer Cloud</span>
            </div>
          </div>
        );
      case "elena-vance":
        return (
          <div className="w-full h-full bg-[#EFEFED] text-[#111111] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            {/* Grid architectural blueprint lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-[#777777] relative z-10">
              <span>Architectural Monograph</span>
              <span>Zurich &bull; 2026</span>
            </div>
            <div className="my-auto text-center space-y-2 relative z-10">
              <span className="font-serif text-3xl sm:text-4xl text-[#111111] block">
                Elena Vance
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
                Principal Works &amp; Spatial Form
              </p>
            </div>
            <div className="flex justify-between text-xs font-mono text-[#777777] border-t border-[#D5D5D5] pt-4 relative z-10">
              <span>Monograph Archive</span>
              <span>Elevation Studies</span>
            </div>
          </div>
        );
      case "kanso-living":
      default:
        return (
          <div className="w-full h-full bg-[#F4F1EA] text-[#222222] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
            <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-[#888888]">
              <span>Kyoto Ceramics</span>
              <span>Wabi-Sabi Objects</span>
            </div>
            <div className="my-auto text-center space-y-3">
              <span className="font-serif italic text-3xl sm:text-4xl text-[#111111] block">
                Kanso Living
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#777777]">
                Shopify Artisan Storefront
              </p>
            </div>
            <div className="flex justify-between text-xs font-mono text-[#888888] border-t border-[#E0DCD3] pt-4">
              <span>Mindful Retail</span>
              <span>Ash-Glaze Stoneware</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="group relative border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#111111] flex flex-col"
    >
      {/* Top Meta Line */}
      <div className="p-4 sm:p-6 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#111111]">{project.number}</span>
          <span className="text-[#CCCCCC]">/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        <span className="px-2 py-0.5 border border-[#E5E5E5] text-[10px] uppercase tracking-wider bg-neutral-50 text-[#555555]">
          Concept Study
        </span>
      </div>

      {/* Visual Canvas (Aspect ratio 16:10) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E5E5]">
        {renderVisualPreview()}
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

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenPreview(project)}
              className="w-full flex items-center justify-between px-5 py-3 border border-[#111111] text-xs font-mono uppercase tracking-widest text-[#111111] bg-white group-hover:bg-[#111111] group-hover:text-white transition-all duration-200"
              aria-label={`Inspect concept demo for ${project.name}`}
            >
              <span className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5" />
                Inspect Concept Demo
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
