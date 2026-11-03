"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Zap, Users } from "lucide-react";
import Link from "next/link";

const proofConcepts = [
  {
    title: "Autonomous Supply Chain Mapping",
    category: "Workflow Architecture",
    description: "Multi-tiered inventory forecasting algorithm synchronizing distributed warehouse signals with real-time sales APIs.",
    icon: ShoppingCart
  },
  {
    title: "High-Throughput SaaS Pipeline",
    category: "Software Development",
    description: "Resilient serverless microservices architecture supporting multi-tenant user authentication and asynchronous webhook processing.",
    icon: Zap
  },
  {
    title: "Operational Automation Engine",
    category: "Systems Integration",
    description: "Automated task distribution and intelligent CRM routing designed to eliminate manual intervention in client onboarding.",
    icon: Users
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full py-28 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
              Capabilities In Practice
            </div>
            <h2 className="font-display font-[900] text-white leading-[1.1] text-[32px] md:text-[46px] lg:text-[54px] tracking-tight">
              Applied Engineering <span className="text-gradient">Concepts.</span>
            </h2>
          </div>
          <Link 
            href="/work/demonstrations"
            className="flex items-center gap-2 text-accent font-mono text-[13px] tracking-wider uppercase hover:underline font-semibold"
          >
            All Technical Demonstrations <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofConcepts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#050505] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                      <Icon size={20} />
                    </div>
                    <ArrowUpRight size={18} className="text-white/30 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-text-muted text-[11px] font-mono uppercase tracking-wider block mb-2">{item.category}</span>
                  <h3 className="text-white text-xl font-bold font-display mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed mb-6">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
