"use client";

import { motion } from "framer-motion";

const STAGES = [
  {
    step: "01",
    name: "Discover",
    subtitle: "Strategy, Positioning & Architecture",
    description:
      "We begin with an exhaustive analysis of your brand narrative, target audience, competitive landscape, and digital objectives. We map out information architecture, page hierarchies, and technical requirements before touching a single pixel.",
    deliverables: [
      "Brand Positioning & Visual Audit",
      "Sitemap & Information Architecture",
      "Technical Architecture Plan",
      "Creative Direction Brief"
    ],
  },
  {
    step: "02",
    name: "Design",
    subtitle: "Art Direction, Typography & Prototyping",
    description:
      "Translating strategy into monumental visual identities. We craft bespoke typography scales, grid structures, responsive layout systems, and tactile interaction states. You review realistic, interactive prototypes — not static mockups.",
    deliverables: [
      "Custom Editorial Typography System",
      "High-Fidelity Responsive Prototypes",
      "Micro-interaction & Motion Choreography",
      "Design System Tokens & Components"
    ],
  },
  {
    step: "03",
    name: "Develop",
    subtitle: "Next.js Engineering, Clean Code & Motion",
    description:
      "Transforming approved designs into a production-grade codebase. Built with Next.js App Router, TypeScript, and Tailwind CSS. We calibrate smooth transitions with Framer Motion and ensure every line of code is semantic and lightweight.",
    deliverables: [
      "Type-Safe Next.js & React 19 Codebase",
      "Fluid Animation & Scroll Interactions",
      "CMS / E-Commerce Backend Integration",
      "Full Device & Viewport Optimization"
    ],
  },
  {
    step: "04",
    name: "Deliver",
    subtitle: "QA Auditing, Launch & Guardianship",
    description:
      "Rigorous pre-launch QA across seven key device viewports, screen readers, and network speeds. We optimize Core Web Vitals, implement structured SEO schema, verify domain DNS, and provide comprehensive walkthroughs.",
    deliverables: [
      "Lighthouse 95+ Performance Audit",
      "WCAG 2.2 AA Accessibility Verification",
      "Production Vercel Deployment & SSL",
      "Post-Launch Support & Warranty"
    ],
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E5E5E5] mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777] block mb-3">
            05 &bull; Execution Methodology
          </span>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            A Disciplined 4-Stage Process.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          Predictable milestones, rigorous engineering standards, and direct collaboration from initial concept to live production.
        </p>
      </div>

      {/* Visual Timeline Progression */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {STAGES.map((stage, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative flex flex-col justify-between p-6 sm:p-8 border border-[#E5E5E5] bg-white hover:border-[#111111] transition-all group"
          >
            {/* Top Stage Indicator */}
            <div className="border-b border-[#E5E5E5] pb-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-[#111111] group-hover:text-black transition-colors">
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] border border-[#E5E5E5] px-2 py-0.5">
                  Phase 0{idx + 1}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
                {stage.name}
              </h3>
              <p className="text-xs font-mono text-[#777777] uppercase tracking-wider mt-1">
                {stage.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
              {stage.description}
            </p>

            {/* Deliverables List */}
            <div className="pt-4 border-t border-[#E5E5E5] mt-auto">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] block mb-2">
                Phase Deliverables:
              </span>
              <ul className="space-y-1.5 text-xs text-[#333333]">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="text-[#999999]">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
