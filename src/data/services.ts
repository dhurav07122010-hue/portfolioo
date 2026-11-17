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
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    tagline: "Authoritative digital flagships tailored for modern companies and independent practices",
    description:
      "We design and engineer bespoke web platforms that immediately establish credibility and communicate your unique market positioning. Every layout is built from scratch with custom typography, clean code, and zero generic template compromises.",
    deliverables: [
      "Custom Creative Direction & Wireframing",
      "Tailored Editorial Design System",
      "Full Next.js / TypeScript Engineering",
      "CMS Integration & Staff Training",
      "Search Engine Optimization & Core Web Vitals"
    ],
    idealFor: "Professional services, boutique consultancies, agencies, and expanding enterprises seeking an elevated presence.",
    timeline: "3 – 5 weeks",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel"]
  },
  {
    id: "ecommerce-websites",
    number: "02",
    title: "E-Commerce Websites",
    tagline: "Editorial storefronts engineered for high conversion and unforgettable brand resonance",
    description:
      "Transforming product catalogs into captivating brand narratives. We craft bespoke headless e-commerce experiences with instant page transitions, fluid filtering, frictionless cart drawers, and secure worldwide payment infrastructure.",
    deliverables: [
      "Bespoke Brand Lookbook & Catalog Design",
      "Seamless Cart & One-Page Checkout Experience",
      "Dynamic Product Filtering & Variant Switcher",
      "Payment Gateway & Inventory Synchronization",
      "Analytics & Conversion Tracking Setup"
    ],
    idealFor: "Direct-to-consumer labels, luxury apparel, lifestyle brands, and boutique retail creators.",
    timeline: "4 – 6 weeks",
    technologies: ["Next.js", "Stripe", "Shopify Storefront API", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "landing-pages",
    number: "03",
    title: "Landing Pages",
    tagline: "High-impact, conversion-calibrated single-page digital launchpads",
    description:
      "Focused digital narratives designed to turn cold visitors into active users or qualified leads. We combine razor-sharp copywriting hierarchy, interactive product walkthroughs, and sub-second load times to maximize conversion rates.",
    deliverables: [
      "Strategic Value Proposition Architecture",
      "High-Density Product Feature Previews",
      "Interactive Demos & Micro-interactions",
      "A/B Testing Readiness & Analytics Tagging",
      "Speed Optimization (< 1s First Contentful Paint)"
    ],
    idealFor: "SaaS startups, product launches, venture announcements, and event showcases.",
    timeline: "1 – 2 weeks",
    technologies: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: "shopify-stores",
    number: "04",
    title: "Shopify Stores",
    tagline: "Tailor-made Shopify builds that liberate your brand from cookie-cutter theme limitations",
    description:
      "Custom Shopify themes and headless integrations engineered for speed, brand distinctiveness, and seamless store management. We craft custom sections, bespoke product drawers, and personalized checkout experiences that elevate average order value.",
    deliverables: [
      "Custom Theme Architecture & Liquid Code",
      "Modular Drag-and-Drop Theme Customizer",
      "Mobile-Optimized Cart & Drawer Interactions",
      "App Stack Audit & Bloat Elimination",
      "Speed Optimization & Lighthouse 90+ Score"
    ],
    idealFor: "Brands outgrowing off-the-shelf themes or seeking a distinctive luxury retail storefront.",
    timeline: "3 – 5 weeks",
    technologies: ["Shopify Liquid", "Hydrogen / Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    id: "portfolio-websites",
    number: "05",
    title: "Portfolio Websites",
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
    id: "website-maintenance",
    number: "06",
    title: "Website Maintenance",
    tagline: "Continuous evolution, proactive optimization, and white-glove technical guardianship",
    description:
      "Keep your digital flagship performing at its peak. We provide continuous technical oversight, security patching, dependency upgrades, performance auditing, and monthly design iterations without bloated retainer overhead.",
    deliverables: [
      "Continuous Framework & Security Updates",
      "Core Web Vitals & Lighthouse Monitoring",
      "Priority Design & Feature Tweaks (Monthly Allotment)",
      "Daily Automated Backups & Uptime Tracking",
      "Direct Founder Access via Dedicated Channel"
    ],
    idealFor: "Businesses and creators wanting absolute peace of mind and continuous digital refinement.",
    timeline: "Monthly Ongoing",
    technologies: ["Next.js", "Vercel Analytics", "Automated CI/CD", "Security Monitoring"]
  }
];
