"use client";

import dynamic from "next/dynamic";
import { Calendar, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-text-muted font-mono text-xs">
        <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin mb-3" />
        <span>Initializing scheduling portal...</span>
      </div>
    ),
  }
);

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-6 uppercase tracking-widest font-semibold">
            <Calendar size={13} />
            <span>Direct Technical Consultation</span>
          </div>
          <h1 className="font-display font-[900] text-white text-[36px] sm:text-[48px] md:text-[60px] tracking-tight leading-[1.05] mb-6">
            Book an Architecture <span className="text-gradient">Strategy Call.</span>
          </h1>
          <p className="font-body text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
            30 minutes. Direct conversation with a senior systems engineer. We assess feasibility, evaluate tech stack constraints, and outline realistic milestone timelines.
          </p>
        </div>
      </section>

      {/* Main Calendly Widget Container */}
      <section className="py-16 container mx-auto px-6 max-w-[1100px] flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Context Box (Span 4) */}
          <div className="lg:col-span-4 bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
            <h2 className="text-white font-display font-bold text-xl">What to Expect</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-white text-xs font-bold block">30-Minute Focused Session</span>
                  <p className="text-text-muted text-xs leading-relaxed">Structured review of your workflows or software vision without sales pressure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield size={16} className="text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-white text-xs font-bold block">Architectural Feasibility</span>
                  <p className="text-text-muted text-xs leading-relaxed">Immediate technical feedback on API integrations, data modeling, and AI feasibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-white text-xs font-bold block">Milestone Scope &amp; Next Steps</span>
                  <p className="text-text-muted text-xs leading-relaxed">A clear outline of development stages and estimated turnaround times.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-text-muted text-[11px] font-mono uppercase block mb-2">Can&apos;t find a suitable time?</span>
              <Link 
                href="/contact"
                className="text-accent text-xs font-mono uppercase tracking-wider hover:underline flex items-center gap-1 font-bold"
              >
                Send project details via form <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right Calendly Embed (Span 8) */}
          <div className="lg:col-span-8 bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[750px]">
            <InlineWidget
              url="https://calendly.com/revoflux-ai/30min?hide_branding=1"
              styles={{
                height: "800px",
                width: "100%",
              }}
              pageSettings={{
                backgroundColor: "0a0a0c",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "8b5cf6",
                textColor: "ffffff",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
