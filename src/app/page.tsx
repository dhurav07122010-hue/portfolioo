import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:outline-none focus:ring-2 focus:ring-white text-xs font-mono uppercase"
      >
        Skip to main content
      </a>

      {/* Top scroll depth progress indicator */}
      <ScrollProgress />

      {/* Floating navigation header with prominent official logo */}
      <Navbar />

      {/* Main portfolio content flow */}
      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <Introduction />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Floating green WhatsApp bubble */}
      <WhatsAppBubble />

      {/* Studio footer */}
      <Footer />
    </>
  );
}
