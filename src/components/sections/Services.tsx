"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Check, Database, GitBranch, Layers, Terminal } from "lucide-react";
import React from "react";

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

interface FeatureRowProps {
  subtitle: string;
  titleFirst: string;
  titleMain: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  imageSide: "left" | "right";
  children: React.ReactNode;
}

export default function Services() {
  return (
    <section id="services" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
            Solution Families
          </div>
          <h2 className="font-display font-[900] text-white leading-[1.1] mb-6 tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
            Engineered For Scale. <span className="text-gradient">Driven by AI.</span>
          </h2>
          <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
            From autonomous multi-step agents to high-throughput software and operational workflows, explore our specialized engineering capabilities.
          </p>
        </div>

        {/* Row 1: Workflow Automation */}
        <FeatureRow 
          subtitle="Enterprise Automation"
          titleFirst="Automate"
          titleMain="Operational Workflows"
          description="Streamline business operations with intelligent automated workflows that eliminate manual friction, synchronize distributed systems, and run with continuous observability."
          linkHref="/solutions/automation-integrations"
          linkLabel="Explore Automation & Integrations"
          imageSide="left"
        >
          <WorkflowWidget />
        </FeatureRow>

        {/* Row 2: AI Systems & Assistants */}
        <FeatureRow 
          subtitle="Autonomous Intelligence"
          titleFirst="Deploy"
          titleMain="Custom AI Agents"
          description="Domain-specific AI assistants and autonomous agents that embed directly into your infrastructure to handle knowledge synthesis, decision support, and real-time customer engagement."
          linkHref="/solutions/ai-solutions"
          linkLabel="Explore Custom AI Solutions"
          imageSide="right"
        >
          <AssistantWidget />
        </FeatureRow>

        {/* Row 3: Full-Stack Software Development */}
        <FeatureRow 
          subtitle="Digital Product Engineering"
          titleFirst="Architect"
          titleMain="Scalable Software"
          description="Custom web applications, SaaS platforms, internal operations hubs, and robust backend APIs engineered with clean architectures and long-term maintainability."
          linkHref="/solutions/software-development"
          linkLabel="Explore Software Development"
          imageSide="left"
        >
          <ProjectWidget />
        </FeatureRow>
      </div>
    </section>
  );
}

function FeatureRow({
  subtitle,
  titleFirst,
  titleMain,
  description,
  linkHref,
  linkLabel,
  imageSide,
  children
}: FeatureRowProps) {
  return (
    <div className={`flex flex-col ${imageSide === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20 mb-28 last:mb-0`}>
      {/* Content Side */}
      <motion.div 
        variants={imageSide === "left" ? slideInRight : slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex-1 w-full"
      >
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
          {subtitle}
        </div>
        <h3 className="font-display font-[800] text-white leading-[1.1] mb-6 tracking-tight text-[30px] md:text-[40px] lg:text-[48px]">
          <span className="mr-3">{titleFirst}</span>
          <span className="text-gradient">{titleMain}</span>
        </h3>
        <p className="text-[16px] md:text-[18px] font-body text-text-secondary leading-relaxed mb-8 max-w-[520px]">
          {description}
        </p>
        <Link 
          href={linkHref}
          className="inline-flex items-center gap-2 text-accent hover:text-white font-mono text-[13px] tracking-wider uppercase group transition-colors font-semibold"
        >
          {linkLabel}
          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        variants={imageSide === "left" ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex-1 w-full"
      >
        <div className="w-full bg-[#050505] rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// Widget 1: Interactive Workflow Map
function WorkflowWidget() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
            <GitBranch size={16} />
          </div>
          <div>
            <span className="text-white text-sm font-bold block">Autonomous Order Processing</span>
            <span className="text-text-muted text-[11px] font-mono">ERP &lt;-&gt; Warehouse &lt;-&gt; Notification Pipeline</span>
          </div>
        </div>
        <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          Active
        </span>
      </div>

      <div className="space-y-2.5 pt-2">
        {[
          { step: "Event Trigger", detail: "New client contract executed via API", status: "Processed" },
          { step: "Data Extraction", detail: "Schema mapped and validated with zero data loss", status: "Verified" },
          { step: "System Orchestration", detail: "CRM updated, provisioning queue triggered", status: "Executed" },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-accent text-xs font-mono">
                {idx + 1}
              </div>
              <div>
                <span className="text-white text-xs font-semibold block">{item.step}</span>
                <span className="text-text-muted text-[11px]">{item.detail}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-mono">
              <Check size={12} />
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Widget 2: AI Agent Terminal / Knowledge Assistant
function AssistantWidget() {
  return (
    <div className="space-y-4 font-mono">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-white text-xs font-bold uppercase tracking-wider">Autonomous Agent Runtime</span>
        </div>
        <span className="text-text-muted text-[10px]">Context: 128k Tokens</span>
      </div>

      <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-4 text-[12px] space-y-3">
        <div className="text-text-muted">
          <span className="text-accent">&gt;</span> query: &quot;Analyze customer transaction latency anomaly in EU region&quot;
        </div>
        <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1 text-white/90">
          <div className="text-accent text-[11px] flex items-center gap-1.5">
            <Bot size={13} />
            <span>Agent Action: Log Retrieval &amp; Correlation</span>
          </div>
          <p className="text-[11px] font-sans text-text-secondary">
            Detected 340ms gateway spike at 14:02 UTC caused by database connection pool saturation. Automated failover route deployed.
          </p>
        </div>
        <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
          <span>Action: Executed with Human-in-the-Loop Logging</span>
          <span className="text-emerald-400">Latency: 42ms</span>
        </div>
      </div>
    </div>
  );
}

// Widget 3: Software & API Infrastructure
function ProjectWidget() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
            <Layers size={16} />
          </div>
          <div>
            <span className="text-white text-sm font-bold block">Production Architecture</span>
            <span className="text-text-muted text-[11px] font-mono">Modern Modular Full-Stack Stack</span>
          </div>
        </div>
        <span className="text-accent text-[11px] font-mono">TypeScript / Next.js</span>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3.5">
          <div className="flex items-center gap-2 mb-2 text-white text-xs font-bold">
            <Terminal size={14} className="text-accent" />
            <span>Application Layer</span>
          </div>
          <p className="text-text-muted text-[11px] leading-relaxed">
            High-performance Next.js and React server architecture with static-edge optimization.
          </p>
        </div>

        <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3.5">
          <div className="flex items-center gap-2 mb-2 text-white text-xs font-bold">
            <Database size={14} className="text-accent" />
            <span>Data &amp; API Layer</span>
          </div>
          <p className="text-text-muted text-[11px] leading-relaxed">
            Type-safe APIs, resilient webhook dispatchers, and managed cloud databases.
          </p>
        </div>
      </div>
    </div>
  );
}
