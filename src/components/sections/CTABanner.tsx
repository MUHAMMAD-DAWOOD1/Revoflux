"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
        <div className="relative bg-gradient-to-br from-accent via-purple-700 to-indigo-900 rounded-[32px] p-10 md:p-20 overflow-hidden flex flex-col items-center text-center shadow-2xl">
          {/* Subtle concentric rings */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 text-white font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Start Your Project</span>
            </div>

            <h2 className="font-display font-[900] text-white leading-[1.05] mb-6 text-[34px] sm:text-[48px] md:text-[60px] tracking-tight">
              Ready to Engineer Your Next AI or Software System?
            </h2>

            <p className="font-body text-[16px] md:text-[20px] text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute discovery call with our technical team to analyze feasibility, discuss system architecture, and map out your milestone delivery plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link 
                href="/book-a-consultation"
                className="w-full sm:w-auto px-8 py-4 bg-black text-white font-extrabold text-[15px] rounded-2xl flex items-center justify-center gap-2.5 hover:bg-neutral-900 transition-all shadow-xl active:scale-95"
              >
                <Calendar size={18} />
                <span>Book a Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] rounded-2xl flex items-center justify-center gap-2.5 transition-all backdrop-blur-md border border-white/20"
              >
                <MessageSquare size={18} />
                <span>Send Project Details</span>
              </Link>
            </div>

            <div className="mt-10 text-white/60 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2">
              <span>Direct Engineer Access</span>
              <span>&bull;</span>
              <span>No Pressure Discovery</span>
              <span>&bull;</span>
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
