import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Code, Cpu, Target, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Engineering Philosophy & Company",
  description: "Learn about Revoflux AI's mission to engineer high-leverage software systems, custom autonomous agents, and deterministic business automation.",
  alternates: {
    canonical: "https://revoflux.app/about",
  },
};

const principles = [
  {
    title: "Engineering Over Marketing Hype",
    description: "We focus on deterministic system architectures, type-safe implementations, and proven technologies rather than speculative buzzwords.",
    icon: Code,
  },
  {
    title: "Data Sovereignty & Security",
    description: "Every solution is built with strict boundary controls. Your proprietary business logic and client data remain private and secure.",
    icon: Shield,
  },
  {
    title: "Measurable Operational Leverage",
    description: "We measure success by reduced process cycle times, eliminated manual bottlenecks, and scalable infrastructure throughput.",
    icon: Target,
  },
  {
    title: "Full-Lifecycle Accountability",
    description: "From discovery and architectural diagrams to deployment, telemetry, and ongoing optimization, we stand behind the code we ship.",
    icon: Cpu,
  },
];

const capabilities = [
  { name: "Workflow & Business Process Automation", status: "Active & Available" },
  { name: "Autonomous AI Assistants & Knowledge Agents", status: "Active & Available" },
  { name: "Custom API & Webhook Systems Integration", status: "Active & Available" },
  { name: "Full-Stack Web & Internal Tool Development", status: "Active & Available" },
  { name: "Custom Autonomous Multi-Agent Architectures", status: "Custom Scope" },
  { name: "SaaS Platform & MVP Product Engineering", status: "Custom Scope" },
  { name: "Enterprise Cloud Data Pipelines", status: "Phase 2 Roadmap" },
  { name: "Model Context Protocol (MCP) Server Infrastructure", status: "Phase 2 Roadmap" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Globe size={13} />
              <span>Independent Technology Company</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              Engineering High-Leverage <span className="text-gradient">Software &amp; AI Systems.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed">
              Revoflux AI was founded on a simple premise: modern businesses do not need more disconnected tools or speculative AI demonstrations. They need robust, deterministic software systems and intelligent workflows that quietly solve operational bottlenecks and scale without overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Model & Mission */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
                Our Operating Model
              </span>
              <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight mb-6">
                Remote-First. Globally Distributed. Directly Accessible.
              </h2>
              <div className="space-y-4 text-text-secondary font-body leading-relaxed text-[15px] md:text-[16px]">
                <p>
                  We operate as a focused, high-caliber engineering team. When you engage with Revoflux, you collaborate directly with senior software architects and builders—not layers of non-technical intermediaries.
                </p>
                <p>
                  This streamlined approach enables us to move from architectural whiteboard to working staging environments in days, iterating rapidly while maintaining rigorous quality control.
                </p>
              </div>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-white font-display font-bold text-xl mb-4">Core Operating Commitments</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-bold text-sm block">Direct Technical Communication</span>
                    <span className="text-text-muted text-xs">Direct Slack/email access to the lead engineers building your software.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-bold text-sm block">Transparent Staging Environments</span>
                    <span className="text-text-muted text-xs">Live URL previews for every release milestone before production deployment.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-bold text-sm block">Complete Intellectual Property Ownership</span>
                    <span className="text-text-muted text-xs">Clients retain 100% ownership of custom software, models, and workflows developed.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Our Principles
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Architectural Discipline in Every Line of Code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#050505] border border-white/10 rounded-2xl p-8">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 font-display">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability Readiness Registry */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Capability Registry
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Transparent Capability Readiness.
            </h2>
            <p className="text-text-secondary text-sm mt-3">
              We maintain strict transparency about what is production-ready today versus capabilities delivered through tailored custom discovery.
            </p>
          </div>

          <div className="bg-[#050505] border border-white/10 rounded-2xl divide-y divide-white/5">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-white font-medium text-sm">{cap.name}</span>
                <span className={`text-[11px] font-mono uppercase px-3 py-1 rounded-full w-fit ${
                  cap.status.includes("Active") 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : cap.status.includes("Custom")
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-white/5 text-text-muted border border-white/10"
                }`}>
                  {cap.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] text-center">
          <h2 className="font-display font-[900] text-white text-[32px] md:text-[44px] mb-6 tracking-tight">
            Let&apos;s Discuss Your Engineering Requirements.
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-10">
            Book an introductory strategy call to review your current systems, explore automation opportunities, or scope a custom software build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-a-consultation"
              className="px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all flex items-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
