export interface Project {
  id: string;
  number: string;
  name: string;
  clientType: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  year: string;
  accentColor: string;
  isConcept: boolean;
  demoUrl?: string;
  conceptDetails: {
    overview: string;
    challenge: string;
    solution: string;
    techStack: string[];
    features: { title: string; desc: string }[];
    previewMetrics: { label: string; value: string }[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "aura-culinary",
    number: "01",
    name: "AURA",
    clientType: "Culinary & Fine Dining",
    category: "Restaurant Website",
    tagline: "Atmospheric digital reservations and seasonal tasting monograph",
    description:
      "A bespoke gastronomic digital experience designed for Michelin-caliber dining. Features an editorial seasonal menu, multi-sensory cellar archive, and an integrated reservation workflow with zero third-party friction.",
    deliverables: [
      "Art Direction & Editorial Design",
      "Interactive Seasonal Tasting Menu",
      "Direct Table Reservation Flow",
      "Private Dining Inquiry System"
    ],
    year: "2026",
    accentColor: "#1a1a1a",
    isConcept: true,
    conceptDetails: {
      overview:
        "AURA was conceptualized to solve the impersonal, fragmented booking experience common to high-end dining. By unifying tasting narratives with direct reservation mechanics, the platform invites guests into the culinary philosophy before they step through the door.",
      challenge:
        "Balancing moody, cinematic brand storytelling with lightning-fast reservation access and mobile-first menu legibility in low-light environments.",
      solution:
        "Engineered an austere monochrome interface with high-contrast typography, instant calendar availability, and interactive course breakdowns highlighting provenance and wine pairings.",
      techStack: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      features: [
        {
          title: "Seasonal Tasting Navigator",
          desc: "Dynamic course breakdown with pairing notes and dietary toggle controls."
        },
        {
          title: "Direct Table Allocation",
          desc: "Streamlined seating selector with calendar state and confirmation emails."
        },
        {
          title: "Private Cellar Monograph",
          desc: "Filterable sommelier archive showcasing rare vintages and terroir histories."
        }
      ],
      previewMetrics: [
        { label: "Concept Type", value: "Hospitality Flagship" },
        { label: "Target Load Time", value: "< 0.8s" },
        { label: "Device Coverage", value: "Mobile to 4K" }
      ]
    }
  },
  {
    id: "epure-atelier",
    number: "02",
    name: "ÉPURE ATELIER",
    clientType: "Luxury Ready-to-Wear",
    category: "Fashion E-Commerce",
    tagline: "Editorial lookbook commerce for independent Parisian silhouettes",
    description:
      "A high-fashion digital monograph merging editorial layout rigor with seamless checkout mechanics. Designed with generous white space, bespoke typography, and subtle image scale transitions that honor garment craftsmanship.",
    deliverables: [
      "Monograph E-Commerce Experience",
      "Interactive Lookbook with Quick-Add",
      "Fabric & Provenance Drawer",
      "Curated Collection Filtering"
    ],
    year: "2026",
    accentColor: "#111111",
    isConcept: true,
    conceptDetails: {
      overview:
        "Designed as a luxury atelier storefront where buying a garment feels like acquiring an art object. Standard grid catalog pages are replaced by an editorial runway rhythm that respects the collection's narrative.",
      challenge:
        "Avoiding the sterile, generic grid layout typical of off-the-shelf templates while preserving rapid product discovery and effortless bag additions.",
      solution:
        "Built an editorial masonry lookbook with asynchronous cart drawers, fabric tactile zoom inspectors, and minimal typography that lets garments command attention.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Headless Architecture", "TypeScript"],
      features: [
        {
          title: "Lookbook Hotspot Checkout",
          desc: "Instant piece discovery and size selection directly from editorial runway stills."
        },
        {
          title: "Provenance & Material Drawer",
          desc: "Micro-monographs highlighting organic wool weavers and artisanal dye houses."
        },
        {
          title: "Distraction-Free Bag",
          desc: "Slide-out cart with subtotal calculation, free domestic shipping indicator, and one-tap checkout."
        }
      ],
      previewMetrics: [
        { label: "Concept Type", value: "Luxury Commerce" },
        { label: "Grid Structure", value: "Editorial Asymmetric" },
        { label: "Interaction", value: "Tactile Hover Scale" }
      ]
    }
  },
  {
    id: "syntax-cloud",
    number: "03",
    name: "SYNTAX ENGINE",
    clientType: "Developer Infrastructure",
    category: "SaaS Landing Page",
    tagline: "High-density developer platform interface for distributed compute",
    description:
      "A dark-mode technical landing page engineered for high-velocity software teams. Combines interactive CLI terminal previews, benchmark telemetry visualizations, and crisp monospaced code documentation.",
    deliverables: [
      "Developer Positioning & Messaging",
      "Interactive Terminal Emulator",
      "Real-time Latency Benchmark Visuals",
      "Documentation Architecture"
    ],
    year: "2026",
    accentColor: "#0a0a0a",
    isConcept: true,
    conceptDetails: {
      overview:
        "SYNTAX Engine showcases how technical SaaS products can achieve aesthetic excellence without sacrificing technical density. Engineers demand immediate clarity, architecture diagrams, and real CLI commands, not fluffy marketing copy.",
      challenge:
        "Communicating complex distributed cloud architecture and millisecond-level cold start benchmarks in under 5 seconds of scanning.",
      solution:
        "Crafted a high-contrast dark aesthetic featuring interactive tabbed code blocks, terminal copy-to-clipboard interactions, and live-rendered edge node diagrams.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      features: [
        {
          title: "Interactive CLI Sandbox",
          desc: "Visitors can test terminal commands and view simulated zero-latency deployments."
        },
        {
          title: "Live Edge Telemetry",
          desc: "Interactive global map illustrating cold-start reductions across 32 world regions."
        },
        {
          title: "Tabbed Architecture Schemas",
          desc: "Direct side-by-side comparisons of legacy container pods vs. micro-VM instances."
        }
      ],
      previewMetrics: [
        { label: "Concept Type", value: "Developer Tooling" },
        { label: "Theme", value: "Deep Monochrome #0A0A0A" },
        { label: "Accessibility", value: "Full Keyboard Traversal" }
      ]
    }
  },
  {
    id: "elena-vance",
    number: "04",
    name: "ELENA VANCE",
    clientType: "Architectural Studio & Archive",
    category: "Personal Portfolio",
    tagline: "Minimalist spatial monograph for a principal architectural director",
    description:
      "An austere digital monograph balancing vast negative space with architectural rigor. Features full-bleed spatial photography, blueprint line overlays, and a chronological project index designed for international curators and clients.",
    deliverables: [
      "Personal Brand Monograph",
      "Bespoke Spatial Grid Layouts",
      "Blueprint & Technical Plan Overlays",
      "Chronological Work Index"
    ],
    year: "2026",
    accentColor: "#181818",
    isConcept: true,
    conceptDetails: {
      overview:
        "Created for an architectural visionary whose built projects require quiet contemplation. The site operates like an exhibition catalogue: silence, scale, and uncompromising focus on structural forms.",
      challenge:
        "Designing a digital home that honors physical materials (cast concrete, timber, unpolished bronze) without generic skeuomorphism.",
      solution:
        "Utilized extreme typographic restraint, razor-thin structural borders (1px #E5E5E5), and an interactive blueprint drawer allowing visitors to inspect building elevations.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "SVG Blueprint Overlays"],
      features: [
        {
          title: "Blueprint Elevation Viewer",
          desc: "Toggle between finished architectural photography and CAD cross-section schematics."
        },
        {
          title: "Chronological Index View",
          desc: "Dense typographic archive searchable by year, typology (Residential, Civic, Cultural), and location."
        },
        {
          title: "Press & Monograph Citations",
          desc: "Curated bibliography referencing Phaidon, Architectural Digest, and monograph prints."
        }
      ],
      previewMetrics: [
        { label: "Concept Type", value: "Director Portfolio" },
        { label: "Typography", value: "Editorial Serif + Mono" },
        { label: "Spacing", value: "Generous Negative Space" }
      ]
    }
  },
  {
    id: "kanso-living",
    number: "05",
    name: "KANSO LIVING",
    clientType: "Japanese Homeware & Ceramics",
    category: "Shopify Storefront",
    tagline: "Quiet e-commerce for handcrafted ceramics and intentional spaces",
    description:
      "A serene lifestyle commerce platform inspired by Japanese wabi-sabi principles. Focuses on artisanal provenance, tactile object photography, and calm cart transitions that foster mindful purchasing decisions.",
    deliverables: [
      "Custom Shopify Theme Architecture",
      "Artisan Provenance Stories",
      "Minimalist Cart & Checkout Flow",
      "Curated Material Filtering"
    ],
    year: "2026",
    accentColor: "#141414",
    isConcept: true,
    conceptDetails: {
      overview:
        "KANSO Living re-imagines retail as an antidote to hyper-consumerism. Every ceramic bowl, cast-iron kettle, and linen throw is accompanied by artisan kiln biographies and care rituals.",
      challenge:
        "Achieving commercial conversion benchmarks while maintaining an ethereal, meditative aesthetic devoid of aggressive discount popups or urgency badges.",
      solution:
        "Designed calm, tactile interaction micro-states, frictionless slide-out bag interactions, and stories detailing the Japanese prefecture and master craftsperson behind each piece.",
      techStack: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "Framer Motion"],
      features: [
        {
          title: "Kiln & Maker Biographies",
          desc: "Interactive map and biographical monographs of master potters across Kyoto and Mino."
        },
        {
          title: "Tactile Object Inspector",
          desc: "Macro-level glaze zoom showcasing authentic crackle and ash-fired textures."
        },
        {
          title: "Quiet Checkout",
          desc: "Single-view cart with gift wrapping selection, care manual download, and carbon-neutral transit."
        }
      ],
      previewMetrics: [
        { label: "Concept Type", value: "Shopify Storefront" },
        { label: "Aesthetic", value: "Serene Monochrome" },
        { label: "Speed", value: "Instant Page Prefetching" }
      ]
    }
  }
];
