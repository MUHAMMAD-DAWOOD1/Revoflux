"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can AI automation help my business?",
    a: "It eliminates repetitive tasks, reduces errors, speeds up workflows, and lets your team focus on high-value work — resulting in lower costs and faster growth."
  },
  {
    q: "Is AI automation difficult to integrate?",
    a: "Not with RevoFlux. We handle everything — audit, build, integrate, and train. Most systems go live within 2–4 weeks with zero disruption to your operations."
  },
  {
    q: "What industries can benefit from AI automation?",
    a: "Any industry with repetitive processes — e-commerce, SaaS, consulting, real estate, healthcare, finance, law firms, and more."
  },
  {
    q: "Do I need technical knowledge to use AI automation?",
    a: "Zero technical knowledge required. We build the systems, train your team, and provide ongoing support."
  },
  {
    q: "What kind of support do you offer?",
    a: "All plans include onboarding support. Professional and Enterprise plans include priority and VIP support with dedicated account management."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative w-full py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-[800px]" ref={containerRef}>
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase"
          >
            FAQs
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tighter"
          >
            <span className="text-[28px] md:text-[36px] lg:text-[42px] lowercase mr-3">We've got the</span>
            <span className="text-[32px] md:text-[44px] lg:text-[52px] text-glow">Answers You Need</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-[17px] font-body text-text-secondary leading-relaxed"
          >
            Quick answers to your <span className="text-white font-bold tracking-widest uppercase">REVOFLUX</span> automation questions.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="divide-y divide-[#27272A] border-t border-[#27272A]"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="font-display font-medium text-[17px] md:text-[19px] text-white pr-8 group-hover:text-accent transition-colors duration-300">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === index ? 'bg-accent/10 border-accent/30' : 'bg-[#18181B] border-[#27272A]'}`}>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <ChevronDown className="text-accent" size={18} />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <div className="pb-8 pr-12 text-[15px] md:text-[16px] font-body text-text-secondary leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
