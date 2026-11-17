"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Introduction() {
  const PILLARS = [
    {
      num: "01",
      title: "Typographic Rigor",
      desc: "Hierarchy engineered with mathematical precision. Every letterform, line height, and whitespace rhythm is tuned for instant scannability and lasting editorial dignity.",
    },
    {
      num: "02",
      title: "Bespoke Code",
      desc: "Zero bloated theme builders, disposable page-builders, or fragile plugin nests. Handcrafted Next.js & TypeScript codebases that achieve near-instantaneous load times.",
    },
    {
      num: "03",
      title: "Intentional Motion",
      desc: "Choreographed interactions designed to reinforce spatial awareness and delight visitors, never gratuitous scroll-hijacking that hinders comprehension.",
    },
  ];

  return (
    <section
      id="intro"
      aria-label="Studio Introduction and Philosophy"
      className="bg-[#0A0A0A] text-white py-24 sm:py-32 lg:py-40 border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Pre-title */}
        <div className="flex items-center justify-between pb-8 border-b border-[#222222] mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#888888]">
            02 &bull; Ethos &amp; Approach
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
            Architectural Digital Craft
          </span>
        </div>

        {/* Main Editorial Statement */}
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.15] text-[#FAFAFA] tracking-tight mb-12"
          >
            Good design is more than what you see. It is how smoothly it breathes, how instantly it answers, and how quietly it endures.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base sm:text-lg text-[#999999] font-normal leading-relaxed mb-20"
          >
            <p>
              In an era overwhelmed by disposable digital noise, formulaic templates, and generic agency bloat, DS Studios operates with architectural discipline. We treat each web project as an enduring piece of digital architecture — designed with deliberate negative space, razor-sharp typography, and uncompromising performance.
            </p>
            <p>
              By uniting creative direction and frontend engineering under one focused studio practice, there is zero friction between aesthetic vision and technical reality. The result is a digital presence that commands immediate authority and converts discerning audiences.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#222222]">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-6 sm:p-8 border border-[#222222] bg-[#111111]/40 hover:border-[#444444] transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-[#666666] tracking-widest">
                  {pillar.num}
                </span>
                <Check className="w-4 h-4 text-[#888888] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#888888] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
