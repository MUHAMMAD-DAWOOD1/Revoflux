"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div 
          ref={containerRef}
          className="relative bg-accent rounded-[32px] p-12 md:p-24 overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="font-display font-[900] text-black leading-[1.1] mb-8 relative z-10 max-w-4xl"
          >
            <span className="text-[32px] md:text-[36px] lg:text-[40px] opacity-60 lowercase mr-3">Ready to scale</span>
            <span className="text-[20px] md:text-[40px] lg:text-[50px] uppercase tracking-tighter">Your business with </span>
            <span className="text-[36px] md:text-[60px] lg:text-[72px] uppercase tracking-tighter">REVOFLUX</span>
            <span className="text-[20px] md:text-[40px] lg:text-[50px] uppercase tracking-tighter">?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="font-body text-[17px] md:text-[21px] text-black/60 mb-12 max-w-[560px] leading-relaxed relative z-10"
          >
            Join forward-thinking businesses automating their operations and lead engines with our custom AI frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto"
          >
            <Link 
              href="/contact#book-call"
              className="px-10 py-5 bg-black text-white font-bold text-[17px] rounded-2xl flex items-center justify-center gap-2 group hover:scale-105 transition-all shadow-xl"
            >
              Book a free call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#work"
              className="px-10 py-5 border border-black/20 text-black font-bold text-[17px] rounded-2xl flex items-center justify-center gap-2 hover:bg-black/5 transition-all"
            >
              View work
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/5 relative z-10"
          >
            <span className="text-black text-xs">✦</span>
            <span className="font-mono text-[11px] text-black/40 uppercase tracking-widest">
              Limited onboarding spots available this month
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
