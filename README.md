# DS Studios — Portfolio & Digital Flagship

> **We build digital experiences.**  
> An independent web design and development studio crafting minimal, high-impact digital flagships, bespoke e-commerce, and tailored web applications.

---

## 1. Brand Identity & Design System

- **Visual Aesthetic:** Strict high-contrast monochrome identity.
  - Background (Light): `#FFFFFF`
  - Deep Contrast Sections: `#0A0A0A`
  - Primary Text: `#111111`
  - Muted Text: `#777777`
  - Hairline Separators: `#E5E5E5` / `#222222`
- **Typography:**
  - `Playfair Display` — High-contrast editorial display serif
  - `Inter` — Precision modernist sans-serif
  - `JetBrains Mono` — Technical index and metadata
- **Philosophy:** Authentic solo studio operation. Radical simplicity, architectural rigor, and zero fabricated metrics or testimonials.

---

## 2. Technology Stack

- **Framework:** Next.js 16+ (App Router, Turbopack)
- **Library:** React 19 (Server Components by default, Client Components where interactivity requires)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS v4 with custom hairline borders and fluid typography
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React (minimal, purposeful)

---

## 3. Project Architecture

```
ds-studios/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Google fonts, OpenGraph, JSON-LD schema
│   │   ├── page.tsx           # Assembled single-page studio portfolio
│   │   ├── globals.css        # Editorial typography, hairline utilities, custom scrollbars
│   │   ├── robots.ts          # Search engine crawler instructions
│   │   └── sitemap.ts         # Automated XML sitemap
│   ├── components/
│   │   ├── Navbar.tsx         # Floating translucent navbar with responsive mobile drawer
│   │   ├── ScrollProgress.tsx # Minimal scroll depth progress indicator
│   │   ├── Hero.tsx           # Monumental typography and staggered entrance reveal
│   │   ├── Introduction.tsx   # Contrast narrative section with scroll-driven text reveal
│   │   ├── SelectedWork.tsx   # Curated concept project showcase
│   │   ├── ProjectCard.tsx    # Individual project card with hover depth and metadata
│   │   ├── ProjectModal.tsx   # Interactive full-screen preview inspector for concept projects
│   │   ├── Services.tsx       # Editorial index of studio services with expandable deliverables
│   │   ├── Process.tsx        # 4-stage visual timeline (Discover, Design, Develop, Deliver)
│   │   ├── About.tsx          # Solo studio philosophy, technical ethos, and capabilities
│   │   ├── Contact.tsx        # Fully validated contact experience with instant feedback
│   │   └── Footer.tsx         # Monumental DS® STUDIOS wordmark, nav, and dynamic year
│   ├── data/
│   │   ├── projects.ts        # 5 concept projects with detailed metadata and assets
│   │   └── services.ts        # Service definitions, tech stacks, and timelines
│   └── lib/
│       └── utils.ts           # Class merge helper
├── public/                    # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 4. Concept Projects Showcase

All projects are clearly identified as concept architectural studies:

1. **01 / AURA** — Fine Dining & Modern Culinary Experience (*Restaurant Website*)
2. **02 / ÉPURE ATELIER** — Minimalist Luxury Fashion & Editorial Storefront (*Fashion E-Commerce*)
3. **03 / SYNTAX ENGINE** — Developer Infrastructure & AI Cloud Platform (*SaaS Landing Page*)
4. **04 / ELENA VANCE** — Contemporary Architect Monograph & Archive (*Personal Portfolio*)
5. **05 / KANSO LIVING** — Curated Japanese Objects & Homeware (*Shopify Storefront Concept*)

Each project features an interactive modal inspector supporting **Desktop, Tablet, and Mobile viewport simulations** and live interactive components.

---

## 5. Local Development Instructions

### Prerequisites
- Node.js 18.18+ or 20+ (LTS recommended)
- npm, pnpm, or yarn

### Quick Start
```bash
# 1. Navigate to the project directory
cd ds-studios

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the local development server
npm run dev

# 4. Open in your browser
# http://localhost:3000
```

### Build & Lint
```bash
# Run ESLint check
npm run lint

# Generate production build
npm run build

# Start production server
npm run start
```

---

## 6. Vercel Deployment Instructions

1. Push this repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git remote add origin https://github.com/<your-username>/ds-studios.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New Project** and select the `ds-studios` repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Root Directory: `./` (or `ds-studios` if part of a monorepo).
6. Click **Deploy**. Vercel will build and assign an SSL-enabled production URL.

---

## 7. Quality Assurance Report

| Check | Target | Status |
|---|---|---|
| **TypeScript Compilation** | Strict type checking | Passed (0 errors) |
| **ESLint Audit** | Zero errors & zero warnings | Passed (0 problems) |
| **Production Build** | Static route prerendering | Passed (Exit code 0) |
| **Mobile Responsiveness** | 320px, 375px, 768px, 1024px, 1440px, 1920px | Verified (No horizontal overflow) |
| **SEO Foundation** | Meta, OpenGraph, JSON-LD, sitemap.xml, robots.txt | Configured & validated |
| **Accessibility** | WCAG 2.2 AA (semantic tags, focus rings, ARIA labels, skip link) | Verified |
| **Contact Form** | Required fields, email regex, honeypot, duplicate protection | Tested & verified |
| **Concept Work Integrity** | Transparent concept labeling, no fabricated claims | 100% compliant |
