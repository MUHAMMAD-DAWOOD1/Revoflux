"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="text-accent" size={24} />,
    title: "Increased Efficiency",
    description: "Eliminate manual bottlenecks and accelerate your business processes by up to 300% using our custom AI logic."
  },
  {
    icon: <Clock className="text-accent" size={24} />,
    title: "Time Recovery",
    description: "Our systems handle the heavy lifting, giving your team an average of 15+ hours back per week to focus on high-impact decisions."
  },
  {
    icon: <ShieldCheck className="text-accent" size={24} />,
    title: "Logic Precision",
    description: "Built for Western markets with 100% accurate data processing, ensuring your business logic is never compromised."
  },
  {
    icon: <Zap className="text-accent" size={24} />,
    title: "Rapid Deployment",
    description: "Zero-downtime integration into your existing stack. We build and deploy within weeks, not months."
  },
  {
    icon: <BarChart3 className="text-accent" size={24} />,
    title: "Scalable Growth",
    description: "As your volume increases, our AI scales with you automatically, maintaining peak performance without overhead."
  },
  {
    icon: <CheckCircle2 className="text-accent" size={24} />,
    title: "Continuous Optimization",
    description: "Built-in audit loops and auto-refining modules that get smarter over time, keeping you ahead of the competition."
  }
];

export default function Benefits() {
  return (
    <section id="about" className="relative w-full py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono text-[11px] mb-6 tracking-widest uppercase">
            Platform Benefits
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tight">
            <span className="text-[32px] md:text-[44px] lg:text-[52px] mr-3">Why companies</span>
            <span className="text-[32px] md:text-[44px] lg:text-[52px] text-gradient block">Choose RevoFlux.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-[17px] font-body text-text-secondary leading-relaxed">
            Our autonomous AI frameworks are engineered for reliability and high-speed execution in competitive markets.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="premium-card p-8 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-white/80">
                {benefit.icon}
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-4">{benefit.title}</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
