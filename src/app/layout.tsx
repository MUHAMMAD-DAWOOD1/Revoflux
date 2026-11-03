import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revoflux.app"),
  title: {
    default: "Revoflux AI | Intelligent Software and AI Solutions",
    template: "%s | Revoflux AI",
  },
  description: "Revoflux AI engineers intelligent software systems, custom autonomous agents, enterprise integrations, and digital products for modern businesses.",
  keywords: [
    "AI Software Engineering",
    "Custom AI Solutions",
    "Autonomous AI Agents",
    "Workflow Automation",
    "Full-Stack Development",
    "SaaS Engineering",
    "Enterprise Systems Integration"
  ],
  authors: [{ name: "Revoflux AI" }],
  creator: "Revoflux AI",
  publisher: "Revoflux AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revoflux.app",
    siteName: "Revoflux AI",
    title: "Revoflux AI | Intelligent Software and AI Solutions",
    description: "Intelligent software systems, custom AI agents, and enterprise integrations built for modern businesses.",
    images: [
      {
        url: "/r-logo.png",
        width: 1200,
        height: 630,
        alt: "Revoflux AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revoflux AI | Intelligent Software and AI Solutions",
    description: "Intelligent software systems, custom AI agents, and enterprise integrations.",
    creator: "@revoflux",
    images: ["/r-logo.png"],
  },
  alternates: {
    canonical: "https://revoflux.app",
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
      <body className={`${plusJakarta.variable} ${jetbrains.variable} font-sans bg-black antialiased selection:bg-accent selection:text-black min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://revoflux.app/#organization",
                  "name": "Revoflux AI",
                  "url": "https://revoflux.app",
                  "logo": "https://revoflux.app/favicon.png",
                  "description": "Revoflux AI designs, engineers, and deploys intelligent software systems, custom AI solutions, and enterprise automated workflows.",
                  "email": "revoflux.ai@gmail.com",
                  "sameAs": [
                    "https://www.linkedin.com/in/muhammad-dawood-dev",
                    "https://instagram.com/revoflux",
                    "https://facebook.com/revoflux",
                    "https://x.com/revoflux"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://revoflux.app/#website",
                  "url": "https://revoflux.app",
                  "name": "Revoflux AI",
                  "publisher": {
                    "@id": "https://revoflux.app/#organization"
                  }
                }
              ]
            })
          }}
        />
        <Navbar />
        <main id="main-content" className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
