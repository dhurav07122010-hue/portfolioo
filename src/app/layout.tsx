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
  title: "DS Studios — Premium Web Design & Development Studio | India",
  description:
    "We Build Digital Experiences. DS Studios creates modern, high-performance websites for Indian businesses, startups, schools, and e-commerce brands.",
  keywords: [
    "DS Studios",
    "Web design studio India",
    "Website development services in India",
    "Business website development",
    "E-commerce website development",
    "Shopify website development",
    "Website designer for businesses",
    "Next.js web developer India"
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
    locale: "en_IN",
    url: "https://ds-studios.design",
    siteName: "DS Studios",
    title: "DS Studios — Premium Web Design & Development Studio | India",
    description:
      "We Build Digital Experiences. Modern web design, e-commerce, and high-performance development for Indian businesses.",
    images: [
      {
        url: "/brand/ds-studios-logo.png",
        width: 1024,
        height: 576,
        alt: "DS Studios — Official Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Studios — We Build Digital Experiences",
    description:
      "Premium web design and development studio for Indian businesses and global clients.",
    images: ["/brand/ds-studios-logo.png"],
  },
  icons: {
    icon: "/brand/ds-studios-favicon.png",
    apple: "/brand/ds-studios-favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DS Studios",
  description:
    "Web design and development studio in India creating modern websites and digital flagships.",
  url: "https://ds-studios.design",
  telephone: "+91-9873111153",
  email: "ds.studio.buissness@gmail.com",
  areaServed: ["India", "Worldwide"],
  priceRange: "₹₹",
  serviceType: [
    "Business Website Development",
    "E-Commerce Website Development",
    "Shopify Store Development",
    "Landing Page Development",
    "Portfolio Website Development",
    "Website Redesign and Maintenance"
  ],
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
        <link rel="icon" href="/brand/ds-studios-favicon.png" type="image/png" />
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
