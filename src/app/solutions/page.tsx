import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Cpu, Check, Layers, ShieldCheck, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions Portfolio | AI, Custom Software & Automation",
  description: "Explore Revoflux AI's specialized solutions: autonomous AI systems, custom software platforms, and enterprise workflow automations built for scale.",
  alternates: {
    canonical: "https://revoflux.app/solutions",
  },
};

const solutionFamilies = [
  {
    id: "ai-solutions",
    title: "AI Solutions & Autonomous Agents",
    href: "/solutions/ai-solutions",
    badge: "Core Engineering",
    icon: Sparkles,
    headline: "Intelligent Systems Engineered for Production.",
    description: "We design and deploy domain-specific AI assistants, autonomous multi-step agents, and retrieval-augmented generation (RAG) pipelines that safely interact with your business data.",
    capabilities: [
      "Custom Autonomous Multi-Step AI Agents",
      "Retrieval-Augmented Generation (RAG) with Boundary Guardrails",
      "LLM Integration, Model Fine-Tuning & Evaluation",
      "Predictive Heuristic & Data Scoring Models",
      "Zero-Data-Leakage Sovereign Privacy Architecture"
    ],
    audience: "For businesses looking to automate complex customer interactions, analyze unstructured data, and deploy reliable AI without hallucinations."
  },
  {
    id: "software-development",
    title: "Custom Software Development & SaaS",
    href: "/solutions/software-development",
    badge: "Product Engineering",
    icon: Code,
    headline: "Robust Web Applications, MVPs, and Cloud APIs.",
    description: "From greenfield MVP development to enterprise SaaS platforms and internal operations dashboards, we build scalable, type-safe digital products using modern architectural standards.",
    capabilities: [
      "Full-Stack Web Application Architecture (Next.js, React, Node)",
      "Multi-Tenant SaaS Platform Engineering with RBAC",
      "Rapid Prototype & MVP Delivery for Startups",
      "Resilient REST & GraphQL Backend API Development",
      "Database Modeling, Migration & Optimization"
    ],
    audience: "For founders bringing new digital products to market and established enterprises replacing fragile spreadsheets with custom software."
  },
  {
    id: "automation-integrations",
    title: "Workflow Automation & Integrations",
    href: "/solutions/automation-integrations",
    badge: "Operational Leverage",
    icon: Cpu,
    headline: "Connecting Systems. Eliminating Manual Bottlenecks.",
    description: "Synchronize your CRM, ERP, payment gateways, and databases into cohesive, self-healing automated pipelines with human-in-the-loop oversight and comprehensive audit logging.",
    capabilities: [
      "End-to-End Business Process Orchestration",
      "CRM / ERP Synchronization (HubSpot, Salesforce, Custom)",
      "Automated Inbound Lead Qualification & Routing",
      "Asynchronous Webhook Receivers with Retry Guarantees",
      "Continuous Telemetry, Error Logging & Health Monitoring"
    ],
    audience: "For operations, sales, and executive teams seeking to eliminate repetitive data entry, accelerate cycle times, and prevent manual error."
  }
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Layers size={13} />
              <span>Technology Portfolio</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              AI, Software &amp; Automation <span className="text-gradient">Solutions.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed">
              We engineer specialized technology across three core disciplines. Each solution family is backed by rigorous architecture, transparent deliverables, and production-tested code.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards List */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] space-y-16">
          {solutionFamilies.map((family) => {
            const Icon = family.icon;
            return (
              <div 
                key={family.id}
                id={family.id}
                className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 transition-all hover:border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column (Span 7) */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                        <Icon size={20} />
                      </div>
                      <span className="text-accent font-mono text-xs uppercase tracking-widest font-bold">
                        {family.badge}
                      </span>
                    </div>

                    <h2 className="text-white font-display font-[800] text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
                      {family.title}
                    </h2>

                    <p className="text-white font-medium text-base mb-6 leading-relaxed">
                      {family.headline}
                    </p>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                      {family.description}
                    </p>

                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 mb-8">
                      <span className="text-white text-xs font-mono uppercase tracking-wider block mb-2 font-bold">
                        Audience Fit
                      </span>
                      <p className="text-text-muted text-xs leading-relaxed">
                        {family.audience}
                      </p>
                    </div>

                    <Link
                      href={family.href}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-all"
                    >
                      <span>Explore {family.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right Column: Key Capabilities (Span 5) */}
                  <div className="lg:col-span-5 bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 md:p-8">
                    <span className="text-white font-mono text-xs uppercase tracking-widest block mb-6 font-bold flex items-center gap-2">
                      <Terminal size={14} className="text-accent" />
                      <span>Key Technical Capabilities</span>
                    </span>

                    <ul className="space-y-4">
                      {family.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={16} className="text-accent shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-xs md:text-sm leading-relaxed">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cross-Discipline Technical Governance */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14 text-center max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mx-auto mb-6">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-white font-display font-bold text-2xl md:text-3xl mb-4 tracking-tight">
              Unsure Which Solution Fits Your Architecture?
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Most high-value initiatives combine elements across all three areas: automated pipelines feeding custom software with embedded AI agents. We can assess your architecture on a 30-minute discovery call.
            </p>
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
