import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, GitBranch, Terminal, Layers, Activity, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Engineering Approach & Delivery Process",
  description: "Learn how Revoflux AI delivers software and AI systems: from technical discovery and architectural specifications to automated testing and production deployment.",
  alternates: {
    canonical: "https://revoflux.app/approach",
  },
};

const stages = [
  {
    number: "01",
    title: "Discovery & Feasibility Analysis",
    subtitle: "Evaluating constraints before writing a single line of code.",
    description: "We analyze your business workflow, API accessibility, data schemas, security boundaries, and projected transaction volumes. We produce a technical feasibility report establishing whether the project is viable and cost-effective.",
    deliverables: ["API & Schema Audit", "Technical Feasibility Assessment", "Architecture Blueprint & Scope"],
    icon: Terminal,
  },
  {
    number: "02",
    title: "System Architecture & Specification",
    subtitle: "Designing clean data models and component topologies.",
    description: "Before implementation, we map out database schemas, state machines, API contracts, boundary guardrails for AI models, and user journey wireframes. You review and approve the exact technical blueprint.",
    deliverables: ["Entity-Relationship (ER) Diagrams", "API Endpoint Contracts", "Security & Data Boundary Plan"],
    icon: Layers,
  },
  {
    number: "03",
    title: "Milestone Engineering & Live Previews",
    subtitle: "Iterative two-week sprints with verifiable progress.",
    description: "We engineer solutions in focused two-week milestones. You receive dedicated URL staging previews for each increment, providing full visibility and feedback opportunities as your system takes shape.",
    deliverables: ["Staged Branch Previews", "Bi-Weekly Progress Demos", "Type-Safe Production Code"],
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Quality Assurance & Security Hardening",
    subtitle: "Automated unit tests, boundary fuzzing, and model evaluation.",
    description: "Every integration undergoes rigorous end-to-end testing: payload fuzzing, rate-limiting checks, model hallucination evaluation, edge-case validation, and performance benchmark tests.",
    deliverables: ["Automated Test Suites", "Security & Latency Benchmarks", "Failover & Retry Verification"],
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Deployment, Telemetry & Handover",
    subtitle: "Zero-disruption migration, live observability, and full IP ownership.",
    description: "We deploy systems to production cloud environments with zero downtime. We configure live telemetry logging dashboards, hand over 100% of the intellectual property and code repositories, and provide staff training.",
    deliverables: ["Production Cloud Deployment", "Live Telemetry Dashboard", "Complete IP & Code Handover"],
    icon: Activity,
  },
];

export default function ApproachPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <FileCheck size={13} />
              <span>Engineering Rigor</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              A Structured, Transparent <span className="text-gradient">Delivery Lifecycle.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed mb-10">
              We de-risk technology investments through disciplined systems engineering. Every project follows a clear 5-stage lifecycle designed to eliminate surprises and guarantee software quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book-a-consultation"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/solutions"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all text-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Stages Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="max-w-2xl mb-20">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Delivery Process
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Five Stages from Concept to Live Production.
            </h2>
          </div>

          <div className="space-y-12">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={stage.number}
                  className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 transition-all hover:border-white/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Number & Header (Span 4) */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-3xl font-extrabold text-accent">
                          {stage.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                          <Icon size={20} />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-text-muted text-xs font-mono uppercase tracking-wider">
                        {stage.subtitle}
                      </p>
                    </div>

                    {/* Middle: Details (Span 5) */}
                    <div className="lg:col-span-5">
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed font-body">
                        {stage.description}
                      </p>
                    </div>

                    {/* Right: Deliverables (Span 3) */}
                    <div className="lg:col-span-3 bg-[#0a0a0c] border border-white/5 rounded-2xl p-5">
                      <span className="text-white font-mono text-[11px] uppercase tracking-wider block mb-3 font-bold">
                        Stage Deliverables
                      </span>
                      <ul className="space-y-2">
                        {stage.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                            <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Communication Standards */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14">
            <h2 className="font-display font-[800] text-white text-[28px] md:text-[36px] tracking-tight mb-8">
              Communication &amp; Risk Governance Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <span className="text-accent font-mono text-xs uppercase tracking-wider font-bold block">
                  Weekly Sync &amp; Slack Access
                </span>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Direct communication channels with your lead architect. No ticketing queues or junior account managers.
                </p>
              </div>
              <div className="space-y-3">
                <span className="text-accent font-mono text-xs uppercase tracking-wider font-bold block">
                  Continuous Milestone Reviews
                </span>
                <p className="text-text-secondary text-sm leading-relaxed">
                  You test and approve functional software releases at every stage, ensuring the final product matches expectations.
                </p>
              </div>
              <div className="space-y-3">
                <span className="text-accent font-mono text-xs uppercase tracking-wider font-bold block">
                  Fixed-Scope Guarantees
                </span>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Clear specifications and deliverables agreed upon upfront, preventing unexpected budget overruns or scope creep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] text-center">
          <h2 className="font-display font-[900] text-white text-[32px] md:text-[44px] mb-6 tracking-tight">
            Ready to Begin Stage 01?
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-10">
            Book an introductory 30-minute discovery call to evaluate technical feasibility and explore how Revoflux can engineer your systems.
          </p>
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
          >
            <span>Book a Discovery Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
