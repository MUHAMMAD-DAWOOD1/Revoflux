import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-32 bg-[#09090B] border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1240px] text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-mono text-[12px] mb-6 tracking-wide"
        >
          Pricing
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tighter"
        >
          <span className="text-[28px] md:text-[36px] lg:text-[42px] lowercase mr-3">Simple &</span>
          <span className="text-[32px] md:text-[44px] lg:text-[52px] text-glow">Transparent Pricing</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="mt-4 text-text-secondary font-body"
        >
          Coming soon in Phase 2.
        </motion.p>
      </div>
    </section>
  );
}
