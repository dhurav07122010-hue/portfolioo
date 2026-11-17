"use client";

import Image from "next/image";
import { ArrowUp, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

interface FooterProps {
  currentYear?: number;
}

export function Footer({ currentYear = 2026 }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const REAL_PROJECT_LINKS = [
    { label: "Saffron & Smoke (Restaurant)", url: "https://saffron-smoke-mocha.vercel.app" },
    { label: "Virgo Visor (E-Commerce)", url: "https://www.virgovisor.com" },
    { label: "Paradise Public School (Education)", url: "https://paradisepublicschool.com" },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Studio Footer"
      className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Brand Banner with Official White Logo */}
        <div className="border-b border-[#222222] pb-16 mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#888888]">
              DS Studios &bull; India-Focused Web Design &amp; Development
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
              WhatsApp: +91 9873111153
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="relative w-64 sm:w-80 h-16 sm:h-20">
              <Image
                src="/brand/ds-studios-logo-white.png"
                alt="DS Studios"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-serif italic text-2xl sm:text-3xl text-neutral-300">
              We Build Digital Experiences.
            </p>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222] text-xs font-mono">
          {/* Col 1: Studio positioning & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Direct Communication
            </p>
            <p className="text-sm font-sans text-[#AAAAAA] leading-relaxed max-w-sm">
              We create modern websites and digital platforms that help Indian businesses establish a stronger, credible presence online.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <a
                href="https://wa.me/919873111153"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 9873111153</span>
              </a>
              <a
                href="tel:+919873111153"
                className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91 9873111153</span>
              </a>
              <a
                href="mailto:ds.studio.buissness@gmail.com"
                className="flex items-center gap-2 text-[#CCCCCC] hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ds.studio.buissness@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Site Directory
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Selected Work", id: "work" },
                { label: "Services & Capabilities", id: "services" },
                { label: "Our Process", id: "process" },
                { label: "About DS Studios", id: "about" },
                { label: "Start a Project", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Live Real Project Links */}
          <div className="lg:col-span-3 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Current Projects
            </p>
            <ul className="space-y-2.5">
              {REAL_PROJECT_LINKS.map((proj) => (
                <li key={proj.label}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CCCCCC] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{proj.label}</span>
                    <ExternalLink className="w-3 h-3 text-[#666666]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Back to top & Tech specs */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-widest text-[#888888]">
                Navigation
              </p>
              <button
                type="button"
                onClick={scrollToTop}
                className="mt-3 group inline-flex items-center gap-2 px-4 py-2.5 border border-[#333333] hover:border-white text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                aria-label="Return to the top of the page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <p className="text-[11px] text-[#666666]">
              Engineered with Next.js &bull; TypeScript &bull; Tailwind CSS
            </p>
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <p>
            &copy; {currentYear} DS Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Market: India</span>
            <span>&bull;</span>
            <span>IST (UTC+05:30)</span>
            <span>&bull;</span>
            <span>We Build Digital Experiences.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
