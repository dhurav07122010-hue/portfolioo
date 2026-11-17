"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppBubble() {
  return (
    <aside aria-label="WhatsApp Contact">
      <motion.a
        href="https://wa.me/919873111153?text=Hi%20DS%20Studios,%20I%20am%20interested%20in%20building%20a%20website"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-300 group"
        aria-label="Chat with DS Studios on WhatsApp (+91 9873111153)"
      >
        {/* Subtle pulsing background ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />

        {/* Floating Tooltip visible on hover / focus */}
        <span
          role="tooltip"
          className="absolute right-16 px-3.5 py-1.5 rounded-md bg-[#111111] text-white text-xs font-mono whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block"
        >
          Chat on WhatsApp &bull; +91 9873111153
        </span>
      </motion.a>
    </aside>
  );
}
