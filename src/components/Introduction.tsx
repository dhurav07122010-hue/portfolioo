"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Introduction() {
  const PILLARS = [
    {
      num: "01",
      title: "Clarity & Strategic Design",
      desc: "Every layout is calibrated for immediate comprehension. We eliminate visual clutter and emphasize your value proposition with strong editorial hierarchy.",
    },
    {
      num: "02",
      title: "Fast, Clean Engineering",
      desc: "Built with modern technologies like Next.js and Tailwind CSS. Rapid load speeds on 4G and 5G mobile networks ensure visitors never bounce due to lag.",
    },
    {
      num: "03",
      title: "Conversion & Indian Localization",
      desc: "Thoughtful integration of Indian user habits: prominent WhatsApp communication, seamless mobile interactions, clear pricing structure, and local credibility.",
    },
  ];

  const AUDIENCES = [
    "Indian Businesses & MSMEs",
    "High-Growth Startups",
    "Independent Entrepreneurs",
    "Local Consumer Brands",
    "Schools & Educational Institutions",
    "Specialized E-Commerce Retailers",
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
            02 &bull; Purpose &amp; Positioning
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
            Web Design &amp; Development
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
            We help ambitious Indian businesses and entrepreneurs build digital experiences that stand out, load fast, and convert.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base sm:text-lg text-[#999999] font-normal leading-relaxed mb-16"
          >
            <p>
              In today&apos;s digital economy, an outdated or slow website actively costs your business customers. DS Studios operates as a dedicated design and engineering partner for companies ready to elevate their online presence to international standards.
            </p>
            <p>
              We combine minimalist aesthetic discipline with modern full-stack performance. From bespoke corporate websites and high-converting landing pages to educational portals and e-commerce storefronts, we build platforms tailored for long-term business success.
            </p>
          </motion.div>
        </div>

        {/* Target Audience Chips */}
        <div className="pt-8 pb-16 border-t border-[#222222]">
          <p className="text-xs font-mono uppercase tracking-widest text-[#777777] mb-4">
            Tailored Solutions For:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {AUDIENCES.map((aud) => (
              <span
                key={aud}
                className="px-3.5 py-1.5 border border-[#333333] bg-[#141414] text-xs font-mono text-neutral-300"
              >
                {aud}
              </span>
            ))}
          </div>
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
