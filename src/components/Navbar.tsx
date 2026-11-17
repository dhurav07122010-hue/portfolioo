"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = NAV_LINKS.map((link) => link.id);
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 120) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
            : "bg-white/75 backdrop-blur-sm border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Official DS Studios Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-3 hover:opacity-85 transition-opacity focus:outline-none"
            aria-label="DS Studios Home"
          >
            <div className="relative w-32 sm:w-40 h-8 sm:h-9">
              <Image
                src="/brand/ds-studios-logo-dark.png"
                alt="DS Studios"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#111111]" />
                  )}
                </a>
              );
            })}

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/919873111153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#555555] hover:text-[#111111] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Start a Project CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white bg-[#111111] hover:bg-[#333333] transition-colors"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#111111]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-30 bg-white flex flex-col justify-between p-8 pt-28 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            <div className="relative w-36 h-9 mb-4">
              <Image
                src="/brand/ds-studios-logo-dark.png"
                alt="DS Studios"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#777777]">
              Directory
            </p>
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="flex items-center justify-between text-2xl font-serif tracking-tight text-[#111111] py-2 border-b border-[#E5E5E5] hover:pl-2 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#777777]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E5E5E5] flex flex-col gap-3">
            <a
              href="https://wa.me/919873111153"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 border border-[#111111] text-[#111111] text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 9873111153)</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="w-full text-center py-3.5 bg-[#111111] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#333333] transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
