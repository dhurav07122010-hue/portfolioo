"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E5E5E5]"
    >
      {/* Top Meta Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#E5E5E5] pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#111111] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#111111]"></span>
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
            Available for select Q1/Q2 engagements
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#777777]">
          <span>Independent Studio</span>
          <span>&bull;</span>
          <span>Worldwide</span>
        </div>
      </motion.div>

      {/* Monumental Headline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto py-12 sm:py-20 lg:py-24"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#777777] mb-6"
        >
          DS Studios &bull; Digital Design &amp; Web Development
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-[12vw] sm:text-[9.5vw] lg:text-[7.8vw] font-bold tracking-tighter leading-[0.92] text-[#111111] uppercase max-w-6xl"
        >
          We Build
          <span className="block italic font-serif font-normal lowercase tracking-tight my-1 text-[#222222]">
            digital
          </span>
          Experiences.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-7 lg:col-span-6 text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed">
            An independent web design and development studio crafting minimal, high-impact digital flagships, bespoke e-commerce, and tailored web applications for founders, brands, and creators worldwide.
          </p>

          <div className="md:col-span-5 lg:col-span-6 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#work"
              onClick={(e) => scrollTo(e, "work")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-all duration-200"
            >
              <span>Explore our work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#111111] text-[#111111] text-xs font-mono uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all duration-200"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="flex items-center justify-between pt-6 border-t border-[#E5E5E5] text-xs font-mono uppercase tracking-widest text-[#777777]"
      >
        <div className="flex items-center gap-2">
          <span>01 / 05</span>
          <span className="hidden sm:inline">&bull; Architecture &bull; Code &bull; Motion</span>
        </div>

        <a
          href="#intro"
          onClick={(e) => scrollTo(e, "intro")}
          className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#777777] transition-colors"
          aria-label="Scroll down to Introduction"
        >
          <span className="text-[11px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
