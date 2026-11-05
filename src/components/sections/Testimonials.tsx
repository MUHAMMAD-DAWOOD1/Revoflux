"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Eye, Cpu } from "lucide-react";

const commitments = [
  {
    icon: Lock,
    title: "Data Sovereignty & Privacy",
    description: "Client business data and operational schemas remain strictly confidential. We enforce strict data boundary protections and never expose proprietary assets to public model training loops.",
    badge: "Security First"
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Execution & Guardrails",
    description: "AI assistants and agents are constrained with strict schema validation, deterministic fallback logic, and prompt isolation to prevent hallucinations and unhandled exceptions.",
    badge: "Reliability"
  },
  {
    icon: Eye,
    title: "Human-in-the-Loop Governance",
    description: "High-impact actions—financial triggers, database mutations, or bulk customer communications—require human approval checkpoints before downstream execution.",
    badge: "Control"
  },
  {
    icon: Cpu,
    title: "Production-Grade Observability",
    description: "Comprehensive telemetry, structured error logging, latency monitoring, and health checks built into every integration to ensure maximum uptime.",
    badge: "Uptime"
  }
];

export default function Testimonials() {
  return (
    <section id="governance" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
            Engineering Governance
          </div>
          <h2 className="font-display font-[900] text-white leading-[1.1] mb-6 tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
            Built For Enterprise Trust <span className="text-gradient">&amp; Stability.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-body text-text-secondary leading-relaxed">
            Our systems are engineered according to strict software engineering standards, ensuring reliable, deterministic, and secure deployment across every business workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-white/5 text-text-secondary border border-white/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 font-display">{item.title}</h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
