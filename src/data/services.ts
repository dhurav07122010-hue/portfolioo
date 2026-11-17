export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  technologies: string[];
}

export const SERVICES: Service[] = [
  {
    id: "business-website-development",
    number: "01",
    title: "Business Website Development",
    tagline: "Authoritative digital flagships tailored for Indian companies, consultancies, and expanding enterprises",
    description:
      "We design and engineer custom corporate websites that establish immediate credibility and trust. Built with modern typography, crisp layouts, fast load speeds, and mobile optimization tailored for Indian clients and global markets.",
    deliverables: [
      "Custom Brand Art Direction & Wireframing",
      "Tailored Editorial Design System",
      "Full Next.js / TypeScript Engineering",
      "WhatsApp & Direct Enquiry Integration",
      "Local Search Engine Optimization (SEO)"
    ],
    idealFor: "Professional services, consultancies, MSMEs, healthcare practices, and expanding brands across India.",
    timeline: "2 – 4 weeks",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "WhatsApp API"]
  },
  {
    id: "ecommerce-website-development",
    number: "02",
    title: "E-Commerce Website Development",
    tagline: "High-conversion online storefronts engineered for Indian consumer habits and pan-India shipping",
    description:
      "Transforming product catalogs into captivating brand flagships. We craft bespoke e-commerce experiences with instant page transitions, fluid filtering, frictionless cart drawers, and pan-India payment gateway readiness (UPI, NetBanking, Cards, COD).",
    deliverables: [
      "Custom Brand Catalog & Lookbook Layouts",
      "Frictionless One-Page Checkout Experience",
      "UPI & Indian Payment Gateway Architecture",
      "Pincode Delivery & Shipping Integration",
      "WhatsApp Order Assistance & Notifications"
    ],
    idealFor: "Direct-to-consumer labels, apparel brands, electronics retailers, and specialized accessory stores.",
    timeline: "3 – 5 weeks",
    technologies: ["Next.js", "Stripe / Razorpay Readiness", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "shopify-store-development",
    number: "03",
    title: "Shopify Store Development",
    tagline: "Tailor-made Shopify builds that liberate your brand from generic theme limitations",
    description:
      "Custom Shopify themes and headless integrations engineered for speed, brand distinctiveness, and seamless store management. We craft custom sections, bespoke product drawers, and personalized checkout experiences that elevate average order value.",
    deliverables: [
      "Custom Theme Architecture & Liquid Code",
      "Drag-and-Drop Modular Section Customizer",
      "Mobile-Optimized Cart & Drawer Interactions",
      "App Stack Audit & Bloat Elimination",
      "High Core Web Vitals & Fast Mobile Checkout"
    ],
    idealFor: "Indian retail brands outgrowing standard templates and seeking a distinctive, scalable storefront.",
    timeline: "2 – 4 weeks",
    technologies: ["Shopify Liquid", "Hydrogen / Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    id: "landing-page-development",
    number: "04",
    title: "Landing Page Development",
    tagline: "High-impact, conversion-calibrated single-page digital launchpads",
    description:
      "Focused digital narratives designed to turn cold traffic into active customers or qualified leads. We combine razor-sharp value proposition hierarchy, interactive feature previews, and sub-second load times on 4G/5G mobile connections.",
    deliverables: [
      "Strategic Value Proposition Architecture",
      "High-Density Product & Offer Previews",
      "Instant WhatsApp & Phone Call CTAs",
      "Lead Capture Form with Instant Verification",
      "Sub-Second Mobile Load Times (< 1s FCP)"
    ],
    idealFor: "Startups, product launches, advertising campaigns, real estate launches, and course webinars.",
    timeline: "5 – 10 days",
    technologies: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: "portfolio-website-development",
    number: "05",
    title: "Portfolio Website Development",
    tagline: "Sublime, editorial digital monographs for creative leaders, architects, and visionaries",
    description:
      "Your body of work deserves an archival showcase that rivals high-end art monographs. We build quiet, spacious portfolios that emphasize your projects through monumental typography, thoughtful image compositions, and tactile transitions.",
    deliverables: [
      "Editorial Concept & Archival Grid Layout",
      "High-Resolution Visual Showcase & Lightbox",
      "Case Study Monograph Template",
      "Curated Press & CV Index",
      "Domain Setup & Responsive Tuning"
    ],
    idealFor: "Architects, creative directors, photographers, artists, industrial designers, and senior executives.",
    timeline: "2 – 3 weeks",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: "website-redesign-and-maintenance",
    number: "06",
    title: "Website Redesign & Maintenance",
    tagline: "Modernization of outdated websites with continuous technical guardianship and speed optimization",
    description:
      "Upgrade your existing website to modern performance standards. We overhaul clunky, slow legacy websites into sleek, responsive digital flagships, followed by monthly updates, security patching, and proactive maintenance.",
    deliverables: [
      "Complete Visual & Performance Overhaul",
      "Mobile Responsiveness Reconstruction",
      "Continuous Framework & Security Updates",
      "Core Web Vitals & Lighthouse Monitoring",
      "Direct Founder Access via Dedicated WhatsApp Channel"
    ],
    idealFor: "Established businesses seeking to modernize their online image or ensure ongoing technical stability.",
    timeline: "2 – 3 weeks (Ongoing Monthly)",
    technologies: ["Next.js", "Vercel Analytics", "Automated CI/CD", "Security Monitoring"]
  }
];
