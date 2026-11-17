"use client";

import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
}

export function ProjectCard({ project, onOpenPreview }: ProjectCardProps) {
  const renderFrontPagePreview = () => {
    if (project.id === "saffron-smoke") {
      return (
        <div className="w-full h-full bg-[#111114] text-white flex flex-col justify-between p-4 sm:p-5 select-none font-sans overflow-hidden">
          {/* Restaurant Mini Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#E07A2A]/20 flex items-center justify-center p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projects/saffron-smoke-favicon.svg" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif font-bold text-xs tracking-wider text-amber-100">SAFFRON &amp; SMOKE</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[10px] text-neutral-400 font-mono">
              <span>Menu</span>
              <span>Story</span>
              <span>Reserve</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E07A2A] text-white">
              Table Bookings
            </span>
          </div>

          {/* Restaurant Front Page Hero Headline */}
          <div className="my-auto py-3 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-mono uppercase tracking-widest text-amber-400">
              Tradition, Served With A Twist
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight text-neutral-100">
              Where Ancient Indian Spice Meets Modern Fine Dining.
            </h4>
            <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
              Slow-cooked gravies, charred clay-oven kebabs, and seasonal tasting menus inspired by the heart of India.
            </p>
          </div>

          {/* Front Page Action CTAs */}
          <div className="flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-white text-black font-semibold rounded">Explore Tasting Menu</span>
              <span className="text-neutral-400 hidden sm:inline">&bull; New Delhi</span>
            </div>
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              Live Preview &rarr;
            </span>
          </div>
        </div>
      );
    }

    if (project.id === "virgo-visor") {
      return (
        <div className="w-full h-full bg-[#0a0a0f] text-white flex flex-col justify-between p-4 sm:p-5 select-none font-sans overflow-hidden">
          {/* E-Commerce Top Delivery Bar */}
          <div className="flex items-center justify-between bg-rose-900/40 border border-rose-800/40 px-2.5 py-1 text-[9px] font-mono text-rose-300">
            <span>FREE PAN-INDIA DELIVERY ON HELMET VISORS</span>
            <span className="font-bold">FAST DISPATCH</span>
          </div>

          {/* E-Commerce Storefront Header */}
          <div className="flex items-center justify-between border-b border-white/10 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center p-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/projects/virgovisor-favicon.png" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-xs tracking-wider text-white">VIRGO VISOR</span>
              <span className="text-[9px] font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1 py-0.2 rounded">D2C</span>
            </div>
            <div className="text-[10px] text-neutral-400 font-mono">Cart (0)</div>
          </div>

          {/* Storefront Hero Headline & Products */}
          <div className="my-auto py-2 space-y-2">
            <h4 className="font-black text-base sm:text-lg uppercase tracking-tight text-white leading-tight">
              Engineered For Clarity. Built For Road Safety.
            </h4>
            <p className="text-[11px] text-neutral-400 line-clamp-2">
              Optical-grade polycarbonate replacement visors with zero optical distortion. Suitable for Vega, Steelbird &amp; Studds.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[9px]">
              <div className="p-1.5 bg-neutral-900/90 border border-neutral-800 rounded text-center">
                <p className="text-neutral-300 truncate font-semibold">Clear Visor</p>
                <p className="text-rose-400 font-bold mt-0.5">₹899</p>
              </div>
              <div className="p-1.5 bg-neutral-900/90 border border-neutral-800 rounded text-center">
                <p className="text-neutral-300 truncate font-semibold">Iridium Gold</p>
                <p className="text-rose-400 font-bold mt-0.5">₹999</p>
              </div>
              <div className="p-1.5 bg-neutral-900/90 border border-neutral-800 rounded text-center">
                <p className="text-neutral-300 truncate font-semibold">Dark Smoke</p>
                <p className="text-rose-400 font-bold mt-0.5">₹849</p>
              </div>
            </div>
          </div>

          {/* Storefront Bottom Bar */}
          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono text-neutral-400">
            <span>Vishnu Enterprises &bull; Delhi</span>
            <span className="text-rose-400 font-bold">Shop Store &rarr;</span>
          </div>
        </div>
      );
    }

    // Paradise Public School
    return (
      <div className="w-full h-full bg-white text-zinc-900 flex flex-col justify-between p-4 sm:p-5 select-none font-sans overflow-hidden">
        {/* School Top Ticker */}
        <div className="bg-[#1e3a8a] text-white text-[9px] py-1 px-2.5 font-mono flex items-center justify-between rounded-t-sm">
          <span>CBSE AFFILIATION #2130842 &bull; ESTD. 1994</span>
          <span className="font-bold">ADMISSIONS 2026-27</span>
        </div>

        {/* School Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 py-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-50 border border-blue-200 flex items-center justify-center p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/paradise-favicon.svg" alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-black text-xs text-blue-950 tracking-tight leading-none">PARADISE PUBLIC SCHOOL</div>
              <div className="text-[8px] text-zinc-500 font-mono mt-0.5">Excellence, Integrity &amp; Leadership</div>
            </div>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 bg-blue-600 text-white rounded font-bold">
            Admissions Open
          </span>
        </div>

        {/* School Hero Headline */}
        <div className="my-auto py-2 space-y-1.5">
          <div className="inline-block px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[9px] font-mono text-blue-800 font-semibold uppercase">
            Holistic Child Development
          </div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-900 leading-tight">
            Empowering Young Minds With Academic &amp; Sports Excellence.
          </h4>
          <p className="text-[11px] text-zinc-600 line-clamp-2 leading-relaxed">
            Experiential CBSE academics, Atal Tinkering STEM laboratory, smart classrooms, and dedicated sports infrastructure in Delhi.
          </p>
        </div>

        {/* School Bottom Bar */}
        <div className="flex items-center justify-between border-t border-zinc-200 pt-2 text-[10px] font-mono text-zinc-600">
          <span className="font-semibold text-blue-900">Nursery to 8th Standard</span>
          <span className="text-blue-600 font-bold">Visit Campus Portal &rarr;</span>
        </div>
      </div>
    );
  };

  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="group relative border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#111111] flex flex-col overflow-hidden w-full shadow-xs"
    >
      {/* Top Meta Line */}
      <div className="p-4 sm:p-5 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#111111]">{project.number}</span>
          <span className="text-[#CCCCCC]">/</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>
        <span className="px-2 py-0.5 border border-[#E5E5E5] text-[10px] uppercase tracking-wider bg-neutral-50 text-[#555555]">
          Front Page Preview
        </span>
      </div>

      {/* Browser Chrome Header displaying URL */}
      <div className="px-4 py-2 bg-neutral-100 border-b border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-neutral-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 border border-neutral-400" />
        </div>
        <div className="truncate max-w-[200px] sm:max-w-xs text-neutral-700">
          {project.liveUrl.replace("https://", "")}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase font-bold text-neutral-800 hover:text-black flex items-center gap-1"
        >
          <span>Live Site</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Front Page Visual Hero Preview */}
      <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-[#E5E5E5]">
        {renderFrontPagePreview()}
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
              <span>Visit Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
