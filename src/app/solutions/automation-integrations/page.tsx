import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, GitBranch, RefreshCw, Zap, Shield, CheckCircle2, ArrowUpDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Process Automation & Systems Integrations",
  description: "Enterprise workflow automation: seamless CRM/ERP synchronization, asynchronous webhook pipelines, deterministic business logic, and continuous observability.",
  alternates: {
    canonical: "https://revoflux.app/solutions/automation-integrations",
  },
};

const automationOfferings = [
  {
    title: "End-to-End Workflow Orchestration",
    description: "Connect multi-step business operations into automated sequences. Trigger actions automatically upon user signups, invoice creations, or internal database mutations.",
    icon: GitBranch,
  },
  {
    title: "CRM & ERP Deep Synchronization",
    description: "Eliminate double-entry between disparate business systems (HubSpot, Salesforce, Stripe, NetSuite). We engineer idempotent bi-directional sync pipelines with conflict resolution.",
    icon: RefreshCw,
  },
  {
    title: "Asynchronous Webhook Handlers",
    description: "High-throughput webhook receivers built with message queues, automated exponential retries, and dead-letter queue management to guarantee zero data loss.",
    icon: Zap,
  },
  {
    title: "System Observability & Failure Alerts",
    description: "Live operational telemetry dashboards with instant Slack/email notifications for pipeline anomalies, ensuring your automated workflows run with maximum reliability.",
    icon: ArrowUpDown,
  },
];

const integrationGuarantees = [
  "Zero Silent Failures (Automated alerts on unhandled API responses)",
  "Idempotent Operations (Guaranteed protection against duplicate execution)",
  "Full Schema Validation on Every Inbound & Outbound Payload",
  "Encrypted Secret Management & Least-Privilege API Token Scope",
  "Automated Retry Logic with Exponential Backoff"
];

export default function AutomationIntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Cpu size={13} />
              <span>Operational Leverage</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              Business Process Automation &amp; <span className="text-gradient">Integrations.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed mb-10">
              Eliminate manual operational bottlenecks. We engineer deterministic, self-healing automated pipelines that connect your business tools, databases, and third-party APIs with zero data loss.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book-a-consultation"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
              >
                <span>Automate Your Workflows</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/work/demonstrations"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all text-center"
              >
                View Pipeline Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Solutions
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Reliable, Zero-Disruption Automation Architecture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationOfferings.map((item, index) => {
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

      {/* Engineering Standards */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-mono text-[11px] mb-6 uppercase tracking-wider font-semibold">
                  <Shield size={13} />
                  <span>Reliability Guarantees</span>
                </div>
                <h2 className="font-display font-[800] text-white text-[28px] md:text-[38px] tracking-tight leading-tight mb-6">
                  Why Brittle Automations Break—And How We Build Differently.
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 font-body">
                  Most no-code agency automations fail when external APIs change schemas or rate-limit requests. We build resilient pipelines with strict payload typing, dead-letter queues, idempotent retry loops, and automated alerting.
                </p>
              </div>

              <div className="lg:col-span-6 bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 md:p-8 space-y-4">
                <span className="text-white font-mono text-xs uppercase tracking-widest block mb-4 font-bold">
                  Our Engineering Architecture Guarantees
                </span>
                {integrationGuarantees.map((guarantee, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-xs md:text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <h2 className="font-display font-[900] text-white text-[32px] md:text-[44px] mb-6 tracking-tight">
            Stop Wasting Hours on Manual Data Work.
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-10">
            Let us audit your operational workflows and map out an automated integration strategy on a 30-minute discovery call.
          </p>
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
          >
            <span>Book a Workflow Discovery Call</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
