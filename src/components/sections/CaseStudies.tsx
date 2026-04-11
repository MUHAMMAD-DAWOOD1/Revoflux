"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart2, Users, ShoppingCart, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "Inventory Intelligence",
    client: "Global Logistics Group",
    metric: "40% Less",
    subMetric: "Inventory Waste",
    description: "Implemented an autonomous predictive logic engine that synchronized global supply chains with real-time demand signals.",
    icon: <ShoppingCart size={24} className="text-accent" />
  },
  {
    title: "Rapid Product Design",
    client: "Future Mobility Corp",
    metric: "35% Faster",
    subMetric: "Production Speed",
    description: "Deployment of custom generative design agents accelerated product iteration cycles from months to just weeks.",
    icon: <Zap size={24} className="text-accent" />
  },
  {
    title: "Operational Retention",
    client: "TechScale Enterprise",
    metric: "15% Lower",
    subMetric: "Employee Turnover",
    description: "AI-driven schedule optimization and workload management significantly reduced burnout across distributed teams.",
    icon: <Users size={24} className="text-accent" />
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative w-full py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/20 bg-accent/8 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase">
              Latest Work
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="font-display font-[800] text-white leading-[1.1] tracking-tighter">
              <span className="text-[28px] md:text-[36px] lg:text-[42px] lowercase mr-3">Real impact</span>
              <span className="text-[32px] md:text-[44px] lg:text-[52px] text-glow block">For Modern Teams</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-accent font-mono text-[13px] tracking-widest uppercase mb-4"
          >
            All case studies <ArrowUpRight size={14} />
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="premium-card p-1 group overflow-hidden"
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                     <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        {study.icon}
                     </div>
                     <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-white text-3xl font-display font-extrabold mb-2 tracking-tighter">{study.metric}</h3>
                  <p className="text-accent text-[11px] font-mono uppercase tracking-widest mb-8">{study.subMetric}</p>
                  <p className="text-text-secondary text-[14px] leading-relaxed line-clamp-3 mb-8">{study.description}</p>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                   <p className="text-white font-bold text-[13px]">{study.title}</p>
                   <p className="text-text-muted text-[11px] mt-1 font-mono uppercase tracking-wider">{study.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
