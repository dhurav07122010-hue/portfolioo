import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "DS Studios — Independent Web Design & Development Studio",
  description:
    "We build digital experiences. DS Studios is an independent creative studio crafting minimal, high-impact websites and bespoke digital products for ambitious brands, startups, and creators worldwide.",
  keywords: [
    "DS Studios",
    "Web Design Studio",
    "Web Development",
    "Next.js Developer",
    "Minimalist Web Design",
    "Portfolio Design",
    "E-commerce Websites",
    "Shopify Development",
    "Digital Experiences"
  ],
  authors: [{ name: "DS Studios" }],
  creator: "DS Studios",
  publisher: "DS Studios",
  metadataBase: new URL("https://ds-studios.design"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ds-studios.design",
    siteName: "DS Studios",
    title: "DS Studios — Independent Web Design & Development Studio",
    description:
      "We build digital experiences. Minimal, confident, precise, and premium web design and engineering.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DS Studios — We build digital experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Studios — We build digital experiences",
    description:
      "Independent web design and development studio. Minimal, confident, precise, premium.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DS Studios",
  description:
    "Independent web design and development studio crafting minimal, high-impact digital experiences.",
  url: "https://ds-studios.design",
  areaServed: "Worldwide",
  serviceType: [
    "Web Design",
    "Web Development",
    "E-Commerce Websites",
    "Shopify Storefronts",
    "Landing Pages",
    "Website Maintenance"
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth antialiased selection:bg-[#111111] selection:text-white`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans antialiased overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
