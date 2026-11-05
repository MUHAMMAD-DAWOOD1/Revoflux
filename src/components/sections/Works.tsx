"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Database, Sparkles, Workflow } from "lucide-react";

const demonstrations = [
  {
    category: "Technical Demonstration",
    badge: "DEMO",
    title: "Autonomous Multi-Source Lead Scoring & Enrichment Pipeline",
    description: "An automated pipeline that ingests raw inbound company domains, queries enrichment endpoints asynchronously, scores fit using deterministic heuristic weights, and updates CRM records with zero manual intervention.",
    architecture: ["Next.js Server Actions", "Type-safe Webhook Receiver", "Asynchronous Queue Dispatcher", "CRM API Integration"],
    icon: Workflow,
    href: "/work/demonstrations#lead-pipeline"
  },
  {
    category: "Working Prototype",
    badge: "PROTOTYPE",
    title: "Context-Aware Knowledge Retrieval Assistant with Guardrails",
    description: "An enterprise question-answering prototype utilizing retrieval-augmented generation over indexed markdown documentation. Features rigorous boundary guardrails preventing hallucinations and context escape.",
    architecture: ["Vector Similarity Search", "Document Chunking Pipeline", "Hallucination Guardrails", "Streaming Response Interface"],
    icon: Sparkles,
    href: "/work/demonstrations#knowledge-assistant"
  },
  {
    category: "System Architecture",
    badge: "ARCHITECTURE",
    title: "Resilient Multi-Tenant SaaS Engine with Distributed Billing",
    description: "A production-ready SaaS baseline featuring tenant isolation, secure authentication, role-based access control (RBAC), and webhook-driven subscription life-cycle management.",
    architecture: ["PostgreSQL / Prisma", "JWT Session Management", "Stripe Webhook Handlers", "Modular Component System"],
    icon: Database,
    href: "/work/demonstrations#saas-engine"
  }
];

export default function Works() {
  return (
    <section id="work" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
              Evidence &amp; Capabilities
            </div>
            <h2 className="font-display font-[900] text-white leading-[1.1] tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
              Technical Demonstrations <span className="text-gradient">&amp; Proof.</span>
            </h2>
            <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed mt-4">
              Explore concrete engineering proofs, system prototypes, and architectural patterns built by Revoflux to validate real-world technical execution.
            </p>
          </div>
          <Link
            href="/work/demonstrations"
            className="inline-flex items-center gap-2 text-accent hover:text-white font-mono text-xs uppercase tracking-widest transition-colors font-semibold py-2"
          >
            View all demonstrations <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Demonstrations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demonstrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#050505] rounded-3xl border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[50px] pointer-events-none group-hover:bg-accent/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-full font-bold tracking-wider">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="text-text-muted text-[11px] font-mono uppercase tracking-wider block mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-white text-xl font-bold font-display leading-snug mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-[14px] leading-relaxed mb-6 font-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-[11px] font-mono text-text-muted block mb-3 uppercase tracking-wider">
                    Core Technical Components:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.architecture.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono bg-[#0a0a0c] border border-white/5 text-text-secondary px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-accent text-xs font-mono uppercase tracking-wider hover:underline font-semibold"
                  >
                    Inspect architecture details <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
