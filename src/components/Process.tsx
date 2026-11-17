"use client";

import { motion } from "framer-motion";

const STAGES = [
  {
    step: "01",
    name: "Discover",
    subtitle: "Understanding & Strategy",
    description:
      "We begin by understanding your business model, target audience, brand goals, and specific project requirements. We outline information architecture, key conversion actions, and technical scope.",
    deliverables: [
      "Business & Audience Goals Alignment",
      "Sitemap & Information Architecture",
      "Design Direction & Wireframes",
      "Technical Scope Confirmation"
    ],
  },
  {
    step: "02",
    name: "Design",
    subtitle: "Art Direction & Responsive UI",
    description:
      "We craft a clean, premium, responsive website experience tailored for your brand. Featuring modern typography, balanced negative space, and intuitive interactions designed for Indian and global users.",
    deliverables: [
      "Bespoke Responsive Layouts",
      "Editorial Typography & Grid System",
      "Interactive Prototypes for Review",
      "Mobile-First Interaction States"
    ],
  },
  {
    step: "03",
    name: "Develop",
    subtitle: "Clean Code & Fast Performance",
    description:
      "We build your website using modern, industry-standard technologies: Next.js App Router, TypeScript, and Tailwind CSS. Every page is optimized for rapid loading on Indian 4G/5G mobile connections.",
    deliverables: [
      "Type-Safe Next.js & React Codebase",
      "Smooth Framer Motion Interactions",
      "WhatsApp & Contact Flow Integration",
      "Rigorous Cross-Device Responsiveness"
    ],
  },
  {
    step: "04",
    name: "Deliver",
    subtitle: "Testing, Review & Handoff",
    description:
      "We test across mobile devices, tablets, and desktop resolutions. After thorough review, SEO configuration, and domain setup, we hand over the completed website with full guidance.",
    deliverables: [
      "Cross-Device & Browser QA Testing",
      "Speed & Core Web Vitals Optimization",
      "Domain DNS & SSL Configuration",
      "Handoff & Ongoing Support Support"
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
            05 &bull; Our Process
          </span>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Four Disciplined Stages.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          From first conversation to live deployment, our 4-stage process guarantees transparency, clear milestones, and exceptional quality.
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
                  Stage 0{idx + 1}
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
                Stage Deliverables:
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
