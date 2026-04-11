"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Carter",
    role: "CEO at TechFlow Solutions",
    quote: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
    image: "/t2.png"
  },
  {
    name: "Sophia Martinez",
    role: "Operations Manager at NexaCorp",
    quote: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
    image: "/t1.png"
  },
  {
    name: "David Reynolds",
    role: "Head of Sales at GrowthPeak",
    quote: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
    image: "/t4.jpg"
  },
  {
    name: "Emily Wong",
    role: "Customer Success Lead at SupportHive",
    quote: "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to REVOFLUX",
    image: "/t3.png"
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-[1200px] mb-20" ref={containerRef}>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono text-[11px] mb-6 tracking-widest uppercase"
          >
            Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tight"
          >
            <span className="text-[32px] md:text-[44px] lg:text-[52px] mr-3">Why businesses</span>
            <span className="text-[32px] md:text-[44px] lg:text-[52px] text-gradient line-clamp-2">Love Our Solutions.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="text-[17px] font-body text-text-secondary leading-relaxed"
          >
            Real businesses, real results with <span className="text-white font-bold tracking-widest uppercase">REVOFLUX</span> automation.
          </motion.p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 w-full">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div 
            className="flex gap-8 pr-8 min-w-full shrink-0"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div 
            className="flex gap-8 pr-8 min-w-full shrink-0"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, quote, image }: { name: string, role: string, quote: string, image?: string }) {
  return (
    <div className="w-[340px] md:w-[440px] bg-[#050505] border border-white/5 rounded-3xl p-10 shrink-0 flex flex-col justify-between hover:border-white/10 transition-all duration-700 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative">
        <div className="flex gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-accent fill-accent" />
          ))}
        </div>
        <p className="font-body text-[16px] text-white/90 mb-10 leading-[1.6] tracking-tight">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-5 relative">
        <div className="w-14 h-14 rounded-full bg-[#111113] border border-white/10 overflow-hidden flex items-center justify-center relative">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-accent/40 font-bold text-xl">{name.charAt(0)}</div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-display font-[800] text-[16px] text-white tracking-wide">{name}</span>
          <span className="font-body text-[13px] text-text-muted mt-1 uppercase tracking-widest font-medium">{role}</span>
        </div>
      </div>
    </div>
  );
}
