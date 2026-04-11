"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "AI-driven forecasting cut inventory waste by 40% for TrailForge",
    description: "TrailForge struggled with unpredictable demand. We integrated automated predictive models into their supply chain, drastically reducing overstock and optimizing logistics.",
    impact: ["• 80% Error reduction", "• 30% Faster Delivery", "• 60+ Hours Saved"],
    client: "REVOFLUX",
    image: "/suitcase.jpg",
  },
  {
    title: "Automated threat detection halted 99% of fraud attempts",
    description: "Premium Bank needed real-time security. Our custom AI monitoring system identifies and blocks fraudulent transactions instantly with zero latency.",
    impact: ["• 99% Fraud prevented", "• Zero downtime", "• Real-time alerts"],
    client: "REVOFLUX",
    image: "/credit-card.jpg",
  },
  {
    title: "Smart logistics routing improved warehouse efficiency by 50%",
    description: "Heavy Lift Inc. faced severe bottlenecks. We deployed AI pathfinding algorithms to optimize forklift routes and daily schedules intelligently.",
    impact: ["• 50% Efficiency boost", "• 2x Output Volume", "• 45+ Hours Saved"],
    client: "REVOFLUX",
    image: "/forklift.jpg",
  }
];

export default function Works() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="work" className="relative w-full pt-32 pb-16 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px] mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#8b5cf6] font-mono text-[11px] mb-6 tracking-widest uppercase">
              Case Studies
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-[800] text-white leading-[1.1] tracking-tight mb-6">
              <span className="text-[32px] md:text-[44px] lg:text-[52px]">See How Smart AI Automation Transforms Businesses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-[16px] md:text-[18px] max-w-2xl leading-relaxed"
            >
              See how AI automation streamlines operations, boosts productivity and drives growth.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full px-6 mx-auto">
         <motion.div ref={carousel} className="cursor-grab overflow-hidden active:cursor-grabbing pb-8">
            <motion.div 
               drag="x" 
               dragConstraints={{ right: 0, left: -width - 200 }} 
               whileTap={{ cursor: "grabbing" }}
               className="flex gap-6 md:gap-10 w-max"
            >
               {[...works, ...works, ...works, ...works, ...works, ...works].map((work, index) => (
                  <motion.div 
                     key={index}
                     className="w-[85vw] md:w-[800px] lg:w-[960px] bg-[#050505] rounded-[32px] border border-white/5 flex flex-col md:flex-row overflow-hidden relative group shrink-0"
                  >
                     <div className="w-full md:w-5/12 p-2">
                        <div className="w-full h-[300px] md:h-full min-h-[400px] rounded-[24px] overflow-hidden relative bg-[#0a0a0c]">
                           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${work.image})`, opacity: 0.8 }} />
                           <div className="absolute inset-0 bg-black/20" />
                        </div>
                     </div>
                     <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="mb-6 md:mb-10 flex justify-start md:justify-end w-full">
                           <span className="text-white/90 font-display font-extrabold text-[20px] md:text-[24px] tracking-wide">{work.client}</span>
                        </div>
                        <h3 className="text-white text-[24px] md:text-[28px] lg:text-[34px] font-bold leading-[1.2] mb-6">{work.title}</h3>
                        <p className="text-white/50 text-[15px] leading-relaxed mb-8 md:mb-12 max-w-lg">{work.description}</p>
                        
                        <div>
                           <span className="text-white text-[16px] font-bold mb-5 block">Impact :</span>
                           <ul className="space-y-3">
                              {work.impact.map((point, i) => (
                                 <li key={i} className="text-white/60 text-[14px]">
                                    {point}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>

      <div className="w-full flex justify-center mt-6">
         <div className="flex items-center gap-4 text-white/30 text-[11px] font-mono tracking-[0.2em] uppercase">
            <span>&larr;</span>
            <span className="opacity-70">Drag to explore</span>
            <span>&rarr;</span>
         </div>
      </div>
    </section>
  );
}
