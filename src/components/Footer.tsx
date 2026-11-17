"use client";

import { ArrowUp } from "lucide-react";

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

  const SOCIALS = [
    { label: "GitHub", href: "https://github.com", note: "(Placeholder)" },
    { label: "LinkedIn", href: "https://linkedin.com", note: "(Placeholder)" },
    { label: "X / Twitter", href: "https://x.com", note: "(Placeholder)" },
    { label: "Are.na", href: "https://are.na", note: "(Placeholder)" },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Studio Footer"
      className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Massive Display Wordmark */}
        <div className="border-b border-[#222222] pb-16 mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#888888]">
              DS Studios &bull; Independent Digital Practice
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#666666]">
              All Inquiries: hello@ds-studios.design
            </span>
          </div>

          <p className="text-[14vw] font-bold tracking-tighter leading-none text-neutral-100 uppercase select-none">
            DS® Studios
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222] text-xs font-mono">
          <div className="lg:col-span-4 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Studio Positioning
            </p>
            <p className="text-sm font-sans text-[#AAAAAA] leading-relaxed max-w-sm">
              We design and build enduring digital experiences for businesses, startups, and creators worldwide. An authentic solo studio practice dedicated to radical simplicity and technical precision.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Index Directory
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Selected Work", id: "work" },
                { label: "Studio Services", id: "services" },
                { label: "Execution Process", id: "process" },
                { label: "Studio Philosophy", id: "about" },
                { label: "Start a Commission", id: "contact" },
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

          <div className="lg:col-span-3 space-y-4">
            <p className="uppercase tracking-widest text-[#888888]">
              Channels &amp; Social
            </p>
            <ul className="space-y-2.5">
              {SOCIALS.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CCCCCC] hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span>{soc.label}</span>
                    <span className="text-[10px] text-[#666666]">{soc.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
              Engineered with Next.js 16, TypeScript &amp; Tailwind.
            </p>
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <p>
            &copy; {currentYear} DS Studios. All rights reserved. Registered Independent Studio.
          </p>
          <div className="flex items-center gap-6">
            <span>Solo Studio Operation</span>
            <span>&bull;</span>
            <span>Authentic Craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
