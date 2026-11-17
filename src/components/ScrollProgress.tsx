"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
    >
      <motion.div
        className="h-full bg-[#111111] dark:bg-[#FFFFFF] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
