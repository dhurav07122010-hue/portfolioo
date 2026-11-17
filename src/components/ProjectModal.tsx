"use client";

import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { X, Laptop, Tablet, Smartphone, Terminal, ShoppingBag, Compass } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");

  // Interactive mockup state per concept
  const [syntaxCopied, setSyntaxCopied] = useState(false);
  const [kansoZoomed, setKansoZoomed] = useState(false);
  const syntaxCommand = "curl -fsSL https://get.syntax.io | sh";

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

  const copyCommand = () => {
    navigator.clipboard?.writeText(syntaxCommand);
    setSyntaxCopied(true);
    setTimeout(() => setSyntaxCopied(false), 2000);
  };

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
                {project.category} &bull; Concept Demonstration
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
            Interactive Concept Preview
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
            Architecture &amp; Specs
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
                    https://demo.ds-studios.design/{project.id}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-neutral-200 text-neutral-700 px-1.5 py-0.5">
                    Concept Preview
                  </span>
                </div>

                {/* Live Mockup Interactive Canvas */}
                <div className="p-6 sm:p-10 min-h-[420px] flex flex-col justify-between">
                  {/* PROJECT 1: AURA */}
                  {project.id === "aura-culinary" && (
                    <div className="space-y-8">
                      <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4">
                        <span className="font-serif italic text-2xl">Aura Restaurant</span>
                        <span className="text-xs font-mono uppercase">Tasting &bull; Cellar &bull; Reserve</span>
                      </div>
                      <div className="max-w-md space-y-4">
                        <p className="text-xs font-mono uppercase text-[#777777] tracking-widest">
                          Autumn / Winter Degustation
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-serif">
                          Ten courses guided by harvest, smoke, and coastal salinity.
                        </h3>
                        <p className="text-xs text-[#555555] leading-relaxed">
                          Each pairing is sourced from certified biodynamic vineyards across the Jura and Wachau regions.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E5]">
                        <div className="p-4 border border-[#E5E5E5] hover:border-[#111111] transition-colors cursor-pointer">
                          <p className="font-mono text-[10px] text-[#777777] uppercase">Course 01</p>
                          <p className="font-serif font-bold text-sm mt-1">Charred Matsutake</p>
                          <p className="text-[11px] text-[#777777]">Pine oil broth &bull; Kelp crisp</p>
                        </div>
                        <div className="p-4 border border-[#E5E5E5] hover:border-[#111111] transition-colors cursor-pointer">
                          <p className="font-mono text-[10px] text-[#777777] uppercase">Course 04</p>
                          <p className="font-serif font-bold text-sm mt-1">Dry-Aged Turbot</p>
                          <p className="text-[11px] text-[#777777]">Smoked butter &bull; Sea herbs</p>
                        </div>
                        <div className="p-4 border border-[#E5E5E5] hover:border-[#111111] transition-colors cursor-pointer">
                          <p className="font-mono text-[10px] text-[#777777] uppercase">Course 08</p>
                          <p className="font-serif font-bold text-sm mt-1">Fermented Pear</p>
                          <p className="text-[11px] text-[#777777]">Juniper snow &bull; Meadowsweet</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-xs font-mono text-[#777777]">$185 per guest &bull; Pairings available</span>
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#111111] text-white font-mono text-xs uppercase tracking-wider"
                        >
                          Request Table
                        </button>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 2: ÉPURE ATELIER */}
                  {project.id === "epure-atelier" && (
                    <div className="space-y-8">
                      <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4">
                        <span className="font-serif text-xl tracking-widest uppercase">Épure Atelier</span>
                        <span className="text-xs font-mono uppercase">Collection 04 &bull; Paris</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                          <span className="font-mono text-xs uppercase tracking-widest text-[#777777]">
                            Silhouette N° 14
                          </span>
                          <h3 className="text-2xl font-serif">Oversized Double-Face Wool Overcoat</h3>
                          <p className="text-xs text-[#555555] leading-relaxed">
                            Spun from undyed Scandinavian sheep wool, crafted with dropped shoulders and hand-stitched horn buttons.
                          </p>
                          <div className="flex gap-2">
                            {["36", "38", "40", "42"].map((sz) => (
                              <button
                                key={sz}
                                type="button"
                                className="w-8 h-8 border border-[#E5E5E5] text-xs font-mono hover:border-[#111111]"
                              >
                                {sz}
                              </button>
                            ))}
                          </div>
                          <button
                            type="button"
                            className="w-full py-2.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest"
                          >
                            Acquire Piece &bull; €890
                          </button>
                        </div>
                        <div className="h-48 bg-neutral-100 border border-[#E5E5E5] flex flex-col justify-center items-center text-center p-6">
                          <ShoppingBag className="w-8 h-8 text-[#777777] mb-2" />
                          <span className="font-mono text-xs uppercase text-[#777777]">
                            Editorial Runway Still
                          </span>
                          <span className="text-[11px] text-[#999999] mt-1">
                            High-Resolution Lookbook Mesh
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 3: SYNTAX ENGINE */}
                  {project.id === "syntax-cloud" && (
                    <div className="space-y-6 bg-[#0A0A0A] text-white p-6 border border-[#222222]">
                      <div className="flex justify-between items-center border-b border-[#222222] pb-3">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-emerald-400" />
                          <span className="font-mono text-xs tracking-wider text-neutral-300">
                            syntax-cli --region=global
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          Zero-Cold-Start V8 Isolates
                        </span>
                      </div>
                      <div className="space-y-3 font-mono text-xs text-neutral-300 bg-black/60 p-4 border border-[#222222]">
                        <p className="text-neutral-500">{"// 1. Install Syntax developer toolchain"}</p>
                        <div className="flex items-center justify-between bg-neutral-900 px-3 py-2 border border-neutral-800">
                          <span className="text-emerald-400">{syntaxCommand}</span>
                          <button
                            type="button"
                            onClick={copyCommand}
                            className="text-[10px] uppercase font-mono px-2 py-0.5 border border-neutral-700 hover:bg-white hover:text-black transition-colors"
                          >
                            {syntaxCopied ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <p className="text-neutral-500 pt-2">{"// 2. Telemetry Verification"}</p>
                        <p className="text-neutral-400">
                          &gt; Deploying to 32 edge clusters... <span className="text-emerald-400">Done (12ms)</span>
                        </p>
                        <p className="text-neutral-400">
                          &gt; Global P99 Latency: <span className="text-emerald-400">4.2ms</span>
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center border-t border-[#222222] pt-4 font-mono">
                        <div>
                          <p className="text-lg font-bold text-white">4ms</p>
                          <p className="text-[10px] text-neutral-500 uppercase">Cold Start</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-white">32</p>
                          <p className="text-[10px] text-neutral-500 uppercase">Worldwide PoPs</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-white">99.99%</p>
                          <p className="text-[10px] text-neutral-500 uppercase">SLA Target</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 4: ELENA VANCE */}
                  {project.id === "elena-vance" && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4">
                        <span className="font-serif text-xl tracking-tight">Elena Vance</span>
                        <span className="text-xs font-mono uppercase text-[#777777]">Principal Monograph</span>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                          Civic &bull; Zurich &bull; 2025
                        </p>
                        <h3 className="text-2xl font-serif">Pavilion of Reflected Light</h3>
                        <p className="text-xs text-[#555555] leading-relaxed max-w-lg">
                          An exploration of monolithic board-formed concrete and floating bronze roofs, capturing lake breezes and shifting alpine sunlight.
                        </p>
                      </div>
                      <div className="p-6 border border-[#E5E5E5] bg-neutral-50 flex items-center justify-between">
                        <div>
                          <p className="font-mono text-xs uppercase font-bold">Blueprint Elevation N° 03</p>
                          <p className="text-[11px] text-[#777777] mt-0.5">Scale 1:200 &bull; Structural Cross-Section</p>
                        </div>
                        <span className="text-xs font-mono underline uppercase cursor-pointer">
                          Inspect Plan
                        </span>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 5: KANSO LIVING */}
                  {project.id === "kanso-living" && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4">
                        <span className="font-serif text-xl tracking-widest uppercase">Kanso Living</span>
                        <span className="text-xs font-mono uppercase text-[#777777]">Kyoto &bull; Objects</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        <div className="space-y-3">
                          <span className="font-mono text-xs uppercase text-[#777777]">Artisan Pot N° 08</span>
                          <h3 className="text-xl font-serif">Black Ash-Glazed Tea Bowl</h3>
                          <p className="text-xs text-[#555555] leading-relaxed">
                            Wood-fired in an anagama kiln for four consecutive days. Each piece carries unique natural ash gradients.
                          </p>
                          <div className="flex items-center gap-4 pt-2">
                            <span className="font-mono text-sm font-bold">$120 USD</span>
                            <button
                              type="button"
                              className="px-4 py-2 bg-[#111111] text-white font-mono text-xs uppercase"
                            >
                              Add to Bag
                            </button>
                          </div>
                        </div>
                        <div
                          onClick={() => setKansoZoomed(!kansoZoomed)}
                          className="h-44 border border-[#E5E5E5] bg-neutral-100 flex flex-col items-center justify-center cursor-pointer p-4 hover:border-[#111111] transition-all"
                        >
                          <Compass className="w-6 h-6 text-[#777777] mb-2" />
                          <p className="font-mono text-xs uppercase text-[#777777]">
                            {kansoZoomed ? "Macro Crackle Glaze (200% Zoom)" : "Click to Inspect Glaze Texture"}
                          </p>
                          <p className="text-[10px] text-[#999999] mt-1">Mino Prefecture &bull; Master Ishida</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* ARCHITECTURE & SPECS TAB */
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.conceptDetails.previewMetrics.map((metric) => (
                  <div key={metric.label} className="p-5 border border-[#E5E5E5] bg-white">
                    <p className="text-xs font-mono uppercase text-[#777777]">{metric.label}</p>
                    <p className="text-lg font-bold text-[#111111] mt-1">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111111]">
                  Concept Overview
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {project.conceptDetails.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E5E5E5]">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                    Design Challenge
                  </h4>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {project.conceptDetails.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                    Engineering Solution
                  </h4>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {project.conceptDetails.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E5E5E5]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  Key Architectural Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.conceptDetails.features.map((feature) => (
                    <div key={feature.title} className="p-4 border border-[#E5E5E5] bg-neutral-50">
                      <p className="font-bold text-xs text-[#111111] mb-1">{feature.title}</p>
                      <p className="text-xs text-[#666666] leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E5E5]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.conceptDetails.techStack.map((tech) => (
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
          <span>DS Studios Concept Study &bull; No fabricated results</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
