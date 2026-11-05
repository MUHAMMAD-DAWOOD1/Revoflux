import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Layers, Server, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development & SaaS Engineering",
  description: "Enterprise custom software development: modern full-stack web applications, scalable SaaS architectures, startup MVPs, and type-safe cloud APIs.",
  alternates: {
    canonical: "https://revoflux.app/solutions/software-development",
  },
};

const softwareOfferings = [
  {
    title: "Full-Stack Web Applications",
    description: "High-performance web apps built with Next.js, React, and TypeScript. Optimized for static edge rendering, fast Core Web Vitals, and responsive multi-device accessibility.",
    icon: Monitor,
  },
  {
    title: "Multi-Tenant SaaS Platforms",
    description: "Complete SaaS backbones with strict tenant data isolation, user authentication, role-based access control (RBAC), and webhook-driven subscription billing integration.",
    icon: Layers,
  },
  {
    title: "Rapid MVP Engineering",
    description: "Fast-track product delivery for founders. We build clean, scalable MVPs designed to validate market demand without accumulating unmaintainable technical debt.",
    icon: Code,
  },
  {
    title: "Backend APIs & Microservices",
    description: "High-throughput REST and GraphQL backend services. Built with automated schema validation, rate-limiting, comprehensive error logging, and resilient caching layers.",
    icon: Server,
  },
];

const technicalStack = [
  { category: "Frontend Frameworks", tech: "Next.js 16 (App Router), React 19, Tailwind CSS" },
  { category: "Language & Runtime", tech: "TypeScript (Strict Mode), Node.js, Python" },
  { category: "Database & ORM", tech: "PostgreSQL, Prisma, Supabase, Redis, MongoDB" },
  { category: "Authentication & Security", tech: "OAuth 2.0, JWT Sessions, RBAC, Data Encryption" },
  { category: "Hosting & Infrastructure", tech: "AWS, Cloudflare Edge, Vercel, Netlify" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Code size={13} />
              <span>Full-Stack Engineering</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              Custom Software &amp; <span className="text-gradient">Digital Products.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed mb-10">
              We design and build production-grade web applications, SaaS platforms, and backend cloud architectures. Every system is engineered with clean code, type safety, and scalability from day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book-a-consultation"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
              >
                <span>Scope Your Software Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/approach"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all text-center"
              >
                Our Development Lifecycle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Solutions
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Software Engineered for Performance and Maintainability.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareOfferings.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 font-display">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack & Architecture Standards */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14">
            <div className="max-w-2xl mb-12">
              <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
                Architecture
              </span>
              <h2 className="font-display font-[800] text-white text-[28px] md:text-[38px] tracking-tight leading-tight mb-4">
                Proven, Production-Tested Tech Stack.
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed font-body">
                We avoid speculative frameworks. Our engineering choices prioritize high community support, robust type systems, and long-term enterprise maintainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalStack.map((item, i) => (
                <div key={i} className="bg-[#0a0a0c] border border-white/5 rounded-xl p-5">
                  <span className="text-text-muted font-mono text-[11px] uppercase tracking-wider block mb-2 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-white text-sm font-semibold block leading-snug">
                    {item.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] text-center">
          <h2 className="font-display font-[900] text-white text-[32px] md:text-[44px] mb-6 tracking-tight">
            Have a Software Idea or System to Modernize?
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-10">
            Let&apos;s review your specifications, database schema needs, and release timeline on a 30-minute discovery call.
          </p>
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
          >
            <span>Book a Technical Discovery Call</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
