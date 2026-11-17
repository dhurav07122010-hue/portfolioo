"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Terminal, Smartphone } from "lucide-react";

export function About() {
  const VALUES = [
    {
      icon: Terminal,
      title: "Direct Collaboration",
      desc: "Work directly with the designer and developer building your website. Clear communication, quick turnarounds, and zero agency bureaucracy.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First for India",
      desc: "Over 80% of Indian internet traffic is mobile. We design for thumbs first, ensuring swift load speeds and clear touch targets across all Android and iOS devices.",
    },
    {
      icon: ShieldCheck,
      title: "Built for Longevity",
      desc: "Clean, maintainable code using Next.js and TypeScript. We build websites that are fast, secure, and ready to scale with your growing business.",
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
            06 &bull; About DS Studios
          </span>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111]"
          >
            Thoughtful Design. Modern Code.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed">
          DS Studios is an independent web design and development studio dedicated to helping Indian businesses establish a distinctive, credible online presence.
        </p>
      </div>

      {/* Main Philosophy Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-snug text-[#111111]">
            We bridge international creative direction with practical solutions for Indian businesses and entrepreneurs.
          </h3>
          <p className="text-base text-[#555555] leading-relaxed">
            Many businesses struggle with websites that look generic, load slowly on mobile connections, or fail to convert visitors into inquiries. We believe great web design is not about flashy templates — it is about clear communication, intuitive navigation, and reliable performance.
          </p>
          <p className="text-base text-[#555555] leading-relaxed">
            Whether you run a fine dining restaurant, a specialized e-commerce brand, an educational institution, or a growing startup, we create websites that inspire confidence and drive tangible inquiries via WhatsApp and email.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Studio Dossier Card */}
        <div className="lg:col-span-5 border border-[#E5E5E5] p-6 sm:p-8 bg-neutral-50 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] block mb-2">
              Studio Dossier
            </span>
            <h4 className="text-xl font-bold text-[#111111] mb-1">
              DS Studios
            </h4>
            <p className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              Web Design &amp; Development Studio
            </p>
          </div>

          <div className="space-y-3 border-t border-b border-[#E5E5E5] py-4 text-xs font-mono text-[#444444]">
            <div className="flex justify-between">
              <span className="text-[#777777]">Primary Market:</span>
              <span className="font-semibold text-[#111111]">India (Pan-India &amp; Global)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Time Zone:</span>
              <span className="font-semibold text-[#111111]">Asia/Kolkata (IST)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Technology Stack:</span>
              <span className="font-semibold text-[#111111]">Next.js, TypeScript, Tailwind</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Primary Enquiry Channels:</span>
              <span className="font-semibold text-[#111111]">WhatsApp &bull; Phone &bull; Email</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#777777]">Commission Status:</span>
              <span className="font-semibold text-emerald-700">Open for New Projects</span>
            </div>
          </div>

          <p className="text-[11px] text-[#777777] leading-relaxed">
            We focus on dedicated craftsmanship and direct client relationships with no middlemen.
          </p>
        </div>
      </div>

      {/* 3 Core Values */}
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
