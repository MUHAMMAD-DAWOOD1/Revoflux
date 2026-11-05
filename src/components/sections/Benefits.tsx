"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, ShieldCheck, Zap, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: <TrendingUp className="text-accent" size={22} />,
    title: "High-Leverage Engineering",
    description: "Eliminate operational friction and manual bottlenecks through deterministic automation logic and intelligent software systems."
  },
  {
    icon: <Clock className="text-accent" size={22} />,
    title: "Strategic Time Recovery",
    description: "Offload repetitive data processing, scheduling, and system synchronization so key team members focus on core business strategy."
  },
  {
    icon: <ShieldCheck className="text-accent" size={22} />,
    title: "Deterministic Logic & Safety",
    description: "Rigorous boundary enforcement, human-in-the-loop checkpoints, and comprehensive data validation built into every integration."
  },
  {
    icon: <Zap className="text-accent" size={22} />,
    title: "Rapid Milestone Execution",
    description: "Agile, transparent delivery cycles. We deploy functional, tested software milestones progressively with zero unnecessary overhead."
  },
  {
    icon: <BarChart3 className="text-accent" size={22} />,
    title: "Architectural Scalability",
    description: "Modular codebases and distributed cloud services designed to maintain peak performance and low latency as transaction volume expands."
  },
  {
    icon: <CheckCircle2 className="text-accent" size={22} />,
    title: "Continuous Observability",
    description: "Built-in error logging, performance monitoring, and audit trails ensuring your mission-critical operations remain transparent and stable."
  }
];

export default function Benefits() {
  return (
    <section id="principles" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
            Engineering Values
          </div>
          <h2 className="font-display font-[900] text-white leading-[1.1] mb-6 tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
            Why Modern Businesses <span className="text-gradient">Choose Revoflux.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-body text-text-secondary leading-relaxed">
            We deliver reliable, production-ready software solutions built with architectural discipline, high security standards, and measurable business value.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#050505] border border-white/10 rounded-2xl p-7 group hover:border-white/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-white font-display font-bold text-lg mb-3">{principle.title}</h3>
              <p className="text-text-secondary text-[14px] leading-relaxed font-body">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Link to About */}
        <div className="text-center pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent hover:text-white font-mono text-xs uppercase tracking-widest transition-colors font-semibold"
          >
            Learn more about our company &amp; team <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
