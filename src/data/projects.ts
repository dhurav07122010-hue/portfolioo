export interface Project {
  id: string;
  number: string;
  name: string;
  clientType: string;
  category: string;
  tagline: string;
  description: string;
  liveUrl: string;
  deliverables: string[];
  year: string;
  favicon: string;
  bgColor: string;
  accentColor: string;
  details: {
    overview: string;
    focus: string;
    results: string[];
    techStack: string[];
  };
}

export const REAL_PROJECTS: Project[] = [
  {
    id: "saffron-smoke",
    number: "01",
    name: "Saffron & Smoke",
    clientType: "Hospitality & Dining",
    category: "Restaurant Website",
    tagline: "Tradition, Served With A Twist — Premium Modern Indian Dining Experience",
    description:
      "A rich, atmospheric digital experience designed for a contemporary Indian dining flagship. Combines bold spices, soulful recipes, and an interactive digital tasting menu with direct table reservations.",
    liveUrl: "https://saffron-smoke-mocha.vercel.app",
    deliverables: [
      "Bespoke Brand Art Direction",
      "Interactive Digital Menu",
      "Direct Table Reservation Flow",
      "Storytelling & Culinary Heritage",
      "Mobile-First Responsive Experience"
    ],
    year: "2026",
    favicon: "/projects/saffron-smoke-favicon.svg",
    bgColor: "bg-[#141312]",
    accentColor: "#E07A2A",
    details: {
      overview:
        "Saffron & Smoke blends classical Indian culinary traditions with modern European plating and ambiance. The website was engineered to evoke the aromas of char, saffron, and slow-cooked rich gravies before guests ever walk in.",
      focus:
        "Creating an appetising, high-conversion digital journey with sub-second page transitions, dynamic dietary filters, and direct reservation inquiries without heavy third-party aggregator commissions.",
      results: [
        "Interactive digital menu with full spice notes and pairings",
        "Streamlined reservation drawer optimized for Indian smartphones",
        "Fast visual galleries loading rich food photography at minimal data bandwidth"
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Lucide Icons", "Vercel"]
    }
  },
  {
    id: "virgo-visor",
    number: "02",
    name: "Virgo Visor",
    clientType: "Vishnu Enterprises (Delhi)",
    category: "E-Commerce / Helmet Accessories",
    tagline: "Engineered for Clarity & Road Safety — Pan-India Helmet Visor Storefront",
    description:
      "A dedicated automotive e-commerce storefront for Vishnu Enterprises in Delhi, India. Tailored for daily commuters and motorcycle enthusiasts seeking optical-grade polycarbonate replacement visors across major helmet brands.",
    liveUrl: "https://www.virgovisor.com",
    deliverables: [
      "Pan-India E-Commerce Architecture",
      "Helmet Brand & Model Compatibility Selector",
      "Optical Tint & Anti-Scratch Spec Highlights",
      "Mobile-First Checkout & WhatsApp Support",
      "SEO for Helmet Accessories in India"
    ],
    year: "2026",
    favicon: "/projects/virgovisor-favicon.png",
    bgColor: "bg-[#FAFAFA]",
    accentColor: "#111111",
    details: {
      overview:
        "Virgo Visor addresses the fragmented two-wheeler accessories market in India. Riders frequently struggle to find exact-fitting, distortion-free replacement visors for popular helmet models (Vega, Steelbird, Studds, and international brands).",
      focus:
        "Designing a trustworthy, high-clarity shopping experience with precise fitment guides, UV-protection certifications, and direct WhatsApp enquiry support for riders verifying compatibility.",
      results: [
        "Intuitive category browsing across clear, smoke, rainbow, and mercury tints",
        "Direct Indian payment and order tracking readiness",
        "Integrated WhatsApp ordering channel for immediate customer assistance"
      ],
      techStack: ["E-Commerce Platform", "Tailwind CSS", "Responsive UI", "WhatsApp Business Integration"]
    }
  },
  {
    id: "paradise-school",
    number: "03",
    name: "Paradise Public School",
    clientType: "Educational Institution (Delhi)",
    category: "Education / School Website",
    tagline: "Excellence, Integrity & Leadership — Comprehensive Institutional Portal",
    description:
      "A modern digital campus portal created for Paradise Public School in Delhi. Built to provide parents, students, and faculty with an authoritative, accessible platform for admissions, curriculum, academic notices, and student achievements.",
    liveUrl: "https://paradisepublicschool.com",
    deliverables: [
      "Institutional Web Portal & Campus Narrative",
      "Online Admission Inquiry Workflow",
      "Academic Notices & Event Calendar",
      "Curriculum & Sports Infrastructure Showcase",
      "Accessible Mobile Design for Indian Families"
    ],
    year: "2026",
    favicon: "/projects/paradise-favicon.svg",
    bgColor: "bg-[#F7F5FC]",
    accentColor: "#863bff",
    details: {
      overview:
        "Paradise Public School required an authoritative digital presence that reflects its commitment to holistic child development, academic excellence, and modern extracurricular facilities in Delhi.",
      focus:
        "Providing transparent fee structures, downloadable syllabus guidelines, direct principal messaging, and a stress-free admission inquiry form accessible to parents browsing on budget 4G smartphones.",
      results: [
        "Clean, trustworthy institutional design with zero clutter",
        "Online admission enquiry workflow routed directly to school administrators",
        "Fully accessible navigation meeting Indian parental browsing habits"
      ],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel Hosting"]
    }
  }
];
