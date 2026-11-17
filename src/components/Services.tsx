"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Services() {
  const [expandedId, setExpandedId] = useState<string>("business-websites");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E5E5E5] mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777] block mb-3">
            04 &bull; Core Capabilities
          </span>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Capabilities &amp; Studio Offerings.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          Six disciplined digital disciplines. Handcrafted with architectural rigor, high-performance TypeScript codebases, and custom motion design.
        </p>
      </div>

      {/* Refined Editorial Table Layout (Not Generic Cards) */}
      <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
        {SERVICES.map((service) => {
          const isExpanded = expandedId === service.id;
          return (
            <div
              key={service.id}
              className={`transition-colors duration-200 ${
                isExpanded ? "bg-neutral-50/60" : "bg-white hover:bg-neutral-50/40"
              }`}
            >
              {/* Row Header Button */}
              <button
                type="button"
                onClick={() => toggleExpand(service.id)}
                aria-expanded={isExpanded}
                className="w-full py-8 sm:py-10 text-left flex items-start sm:items-center justify-between gap-6 focus:outline-none focus:ring-2 focus:ring-[#111111] px-2 sm:px-4"
              >
                <div className="flex items-start sm:items-baseline gap-6 sm:gap-12 flex-1">
                  <span className="font-mono text-xs sm:text-sm text-[#777777] pt-1 sm:pt-0">
                    {service.number}
                  </span>
                  <div className="space-y-1 sm:space-y-0 sm:flex sm:items-baseline sm:gap-8 flex-1">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#111111]">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777777] font-sans truncate max-w-lg hidden md:block">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 pt-1 sm:pt-0">
                  <span className="hidden sm:inline font-mono text-xs text-[#777777] uppercase tracking-wider">
                    {service.timeline}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-[#111111] flex items-center justify-center text-[#111111] bg-white transition-transform">
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Editorial Details */}
              {isExpanded && (
                <div className="px-2 sm:px-4 pb-10 pt-2 animate-in fade-in duration-200">
                  <div className="pl-0 sm:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#E5E5E5]">
                    {/* Description and Profile */}
                    <div className="lg:col-span-6 space-y-6">
                      <p className="text-base text-[#444444] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="p-4 border border-[#E5E5E5] bg-white space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777] block">
                          Ideal Engagement Profile
                        </span>
                        <p className="text-xs text-[#444444] leading-relaxed">
                          {service.idealFor}
                        </p>
                      </div>

                      <div className="flex items-center gap-6 text-xs font-mono text-[#777777]">
                        <span>Timeline: {service.timeline}</span>
                        <span>&bull;</span>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-[#111111] underline hover:text-[#555555] uppercase tracking-wider font-bold"
                        >
                          Inquire about this service
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Deliverables & Technology Matrix */}
                    <div className="lg:col-span-6 space-y-6">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-3">
                          Standard Deliverables &amp; Inclusions
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-[#E5E5E5]">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-2.5">
                          Technology Foundation
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono text-[#444444] bg-white border border-[#E5E5E5]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
