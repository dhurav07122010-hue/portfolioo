"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ExternalLink, Laptop, Tablet, Smartphone, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-white border border-[#E5E5E5] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5] bg-[#FAFAFA]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs px-2 py-0.5 bg-[#111111] text-white">
              {project.number}
            </span>
            <div>
              <h2
                id="modal-project-title"
                className="text-base sm:text-lg font-bold tracking-tight text-[#111111]"
              >
                {project.name}
              </h2>
              <p className="text-xs font-mono text-[#777777] uppercase tracking-wider">
                {project.category} &bull; {project.clientType}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport switchers for interactive mockup */}
            <div className="hidden sm:flex items-center border border-[#E5E5E5] bg-white p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setDeviceView("desktop")}
                className={`p-1.5 transition-colors ${
                  deviceView === "desktop"
                    ? "bg-[#111111] text-white"
                    : "text-[#777777] hover:text-[#111111]"
                }`}
                aria-label="Desktop viewport"
                title="Desktop View"
              >
                <Laptop className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView("tablet")}
                className={`p-1.5 transition-colors ${
                  deviceView === "tablet"
                    ? "bg-[#111111] text-white"
                    : "text-[#777777] hover:text-[#111111]"
                }`}
                aria-label="Tablet viewport"
                title="Tablet View"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView("mobile")}
                className={`p-1.5 transition-colors ${
                  deviceView === "mobile"
                    ? "bg-[#111111] text-white"
                    : "text-[#777777] hover:text-[#111111]"
                }`}
                aria-label="Mobile viewport"
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visit Live Website Link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#333333]"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 border border-[#E5E5E5] hover:bg-[#111111] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#111111]"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#E5E5E5] px-6 text-xs font-mono uppercase tracking-widest bg-white">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === "preview"
                ? "border-[#111111] font-bold text-[#111111]"
                : "border-transparent text-[#777777] hover:text-[#111111]"
            }`}
          >
            Visual Presentation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeTab === "architecture"
                ? "border-[#111111] font-bold text-[#111111]"
                : "border-transparent text-[#777777] hover:text-[#111111]"
            }`}
          >
            Engineering &amp; Deliverables
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#FDFDFD]">
          {activeTab === "preview" ? (
            <div className="flex flex-col items-center">
              {/* Device Frame */}
              <div
                className={`transition-all duration-300 w-full border border-[#D4D4D4] bg-white shadow-sm ${
                  deviceView === "desktop"
                    ? "max-w-5xl"
                    : deviceView === "tablet"
                    ? "max-w-2xl"
                    : "max-w-sm"
                }`}
              >
                {/* Browser Chrome Header */}
                <div className="px-4 py-2.5 bg-[#F5F5F5] border-b border-[#E5E5E5] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-mono text-[#777777] tracking-wider truncate max-w-xs">
                    {project.liveUrl}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono uppercase bg-[#111111] text-white px-2 py-0.5 hover:bg-[#333333]"
                  >
                    Open Tab &rarr;
                  </a>
                </div>

                {/* Real Homepage Screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={project.screenshot}
                    alt={`Real homepage screenshot of ${project.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Project Overview Details below frame */}
                <div className="p-6 sm:p-8 border-t border-[#E5E5E5] space-y-4 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-[#111111]">
                        {project.name} &bull; {project.clientType}
                      </h4>
                      <p className="text-xs font-mono text-[#777777]">
                        Verified Production Website
                      </p>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#333333]"
                    >
                      <span>Explore Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {project.details.overview}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ENGINEERING & SPECS TAB */
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111111]">
                  Project Overview &amp; Scope
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {project.details.overview}
                </p>
              </div>

              <div className="p-5 border border-[#E5E5E5] bg-white space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  Strategic Focus
                </h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  {project.details.focus}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 p-3 border border-[#E5E5E5] bg-neutral-50 text-xs text-[#333333]">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E5E5]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-[#CCCCCC] text-xs font-mono text-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3.5 border-t border-[#E5E5E5] bg-[#FAFAFA] flex flex-wrap items-center justify-between text-xs font-mono text-[#777777]">
          <span>DS Studios &bull; Live Client Project</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
