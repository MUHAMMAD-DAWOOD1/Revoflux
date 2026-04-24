import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "RevoFlux | Intelligent Automation for Modern Businesses",
  description: "We automate the work. You scale the business. RevoFlux is an AI automation agency offering custom AI solutions for businesses.",
  keywords: ["AI Automation Agency", "Custom AI Solutions for Businesses", "Software Development", "Workflow Automation", "Predictive Models"],
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body className={`${plusJakarta.variable} ${jetbrains.variable} font-sans bg-black antialiased selection:bg-accent selection:text-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "RevoFlux",
                  "url": "https://revoflux.com",
                  "logo": "https://revoflux.com/favicon.ico",
                  "description": "RevoFlux is a premier AI automation and custom software development agency providing custom AI solutions for businesses.",
                  "sameAs": [
                    "https://www.linkedin.com/in/muhammad-dawood-dev",
                    "https://instagram.com/revoflux",
                    "https://facebook.com/revoflux",
                    "https://x.com/revoflux"
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "name": "RevoFlux AI Automation Services",
                  "image": "https://revoflux.com/favicon.ico",
                  "description": "Expert AI automation, workflow optimization, and custom AI solutions for businesses.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "Global"
                  }
                }
              ]
            })
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
