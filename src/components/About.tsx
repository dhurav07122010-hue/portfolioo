"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Terminal, Layers } from "lucide-react";

export function About() {
  const VALUES = [
    {
      icon: Terminal,
      title: "Direct Founder Collaboration",
      desc: "You work directly with the principal designer and engineer. No junior handoffs, no middle-management telephone games, and no diluted creative vision.",
    },
    {
      icon: Layers,
      title: "Radical Simplicity",
      desc: "We eliminate superfluous decoration, slow page-builder plugins, and bloated dependencies in favor of enduring typography, crisp grids, and pure performance.",
    },
    {
      icon: ShieldCheck,
      title: "Built for Longevity",
      desc: "Our websites are engineered on resilient, modern foundations (Next.js & TypeScript) designed to scale effortlessly and remain fast for years, not months.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E5E5E5] mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777] block mb-3">
            06 &bull; Philosophy &amp; Operator
          </span>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            An Independent Practice.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          DS Studios operates as an independent, single-operator creative studio. We believe the most cohesive digital flagships are born from unified creative direction and engineering.
        </p>
      </div>

      {/* Main Philosophy Editorial Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-snug text-[#111111]">
            We reject the traditional agency model of bloated retainers, fragmented teams, and cookie-cutter templates.
          </h3>
          <p className="text-base text-[#555555] leading-relaxed">
            Most digital agencies separate design and development across disjointed departments. By the time a concept passes from a strategist to a visual designer to an outsourced developer, the original nuance and craft are compromised.
          </p>
          <p className="text-base text-[#555555] leading-relaxed">
            At DS Studios, design and code are developed simultaneously. Interaction possibilities inform visual layouts, and layout requirements dictate performant data architecture. Every typographic curve, scroll threshold, and responsive breakpoint is dialed in with obsessive care.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors"
            >
              <span>Discuss a commission</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Studio Specs Card */}
        <div className="lg:col-span-5 border border-[#E5E5E5] p-6 sm:p-8 bg-neutral-50 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] block mb-2">
              Studio Dossier
            </span>
            <h4 className="text-xl font-bold text-[#111111] mb-1">
              DS Studios
            </h4>
            <p className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              Independent Web Design &amp; Development
            </p>
          </div>

          <div className="space-y-3 border-t border-b border-[#E5E5E5] py-4 text-xs font-mono text-[#444444]">
            <div className="flex justify-between">
              <span className="text-[#777777]">Structure:</span>
              <span className="font-semibold text-[#111111]">Solo Studio Operation</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Location:</span>
              <span className="font-semibold text-[#111111]">Remote &bull; Worldwide Clients</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Core Specialization:</span>
              <span className="font-semibold text-[#111111]">Next.js, TypeScript, Tailwind</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Typical Capacity:</span>
              <span className="font-semibold text-[#111111]">2 Active Projects at a Time</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Status:</span>
              <span className="font-semibold text-emerald-700">Open for Q1/Q2 Commissions</span>
            </div>
          </div>

          <p className="text-[11px] text-[#777777] leading-relaxed">
            By intentionally limiting our client intake, each project receives complete focus and architectural precision from start to finish.
          </p>
        </div>
      </div>

      {/* 3 Core Studio Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#E5E5E5]">
        {VALUES.map((val, idx) => {
          const Icon = val.icon;
          return (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 border border-[#E5E5E5] bg-white space-y-4 hover:border-[#111111] transition-colors"
            >
              <div className="w-9 h-9 border border-[#111111] flex items-center justify-center text-[#111111]">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold tracking-tight text-[#111111]">
                {val.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
