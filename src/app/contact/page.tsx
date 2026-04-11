"use client";

import { useState } from "react";
import { Check, Calendar, Mail, Globe, Lock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate backend submission wrapper
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-16">
      
      {/* PAGE HERO (40vh) */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b border-border">
        {/* Animated Grid identical to homepage logic */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #27272A 1px, transparent 1px),
              linear-gradient(to bottom, #27272A 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
          }}
        ></div>

        {/* Ambient Radial Accent Glow */}
        <div 
          className="absolute z-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-accent opacity-[0.06] blur-[80px] pointer-events-none"
        ></div>

        {/* Subtle noise texturing overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-3xl px-4 animate-[fadeUp_0.8s_ease-out]">
          <h1 className="text-[44px] md:text-[64px] font-display font-[800] leading-[1.1] tracking-tight text-white mb-6">
            Let's Build Something.
          </h1>
          <p className="text-[18px] md:text-[20px] font-body text-text-secondary">
            Tell us about your business and what you want to automate.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT 60/40 Split Frame */}
      <section className="py-20 md:py-32 container mx-auto px-4 max-w-[1100px] relative z-10 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-16 lg:gap-20">
          
          {/* LEFT COLUMN - FORM ENGINE */}
          <div className="animate-[fadeUp_1s_ease-out]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-[13px] font-medium ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-4 text-text-primary text-[15px] focus:border-accent/80 focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all placeholder:text-[#52525B]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-[13px] font-medium ml-1">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      className="bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-4 text-text-primary text-[15px] focus:border-accent/80 focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all placeholder:text-[#52525B]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-text-secondary text-[13px] font-medium ml-1">Company / Business Type</label>
                  <input 
                    type="text" 
                    required 
                    className="bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-4 text-text-primary text-[15px] focus:border-accent/80 focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all placeholder:text-[#52525B]"
                    placeholder="E-commerce Store"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-secondary text-[13px] font-medium ml-1">What do you want to automate?</label>
                  <textarea 
                    rows={5} 
                    required 
                    className="bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-4 text-text-primary text-[15px] focus:border-accent/80 focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all resize-none placeholder:text-[#52525B] leading-relaxed"
                    placeholder="We spend 10 hours a week inputting leads into our CRM. Seeking a streamlined architecture..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-secondary text-[13px] font-medium ml-1">Monthly Budget</label>
                  <div className="relative">
                    <select 
                      required
                      defaultValue=""
                      className="w-full bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-4 text-text-primary text-[15px] focus:border-accent/80 focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-text-muted">Select an option</option>
                      <option value="under_1000">Under $1,000</option>
                      <option value="1000_3000">$1,000 – $3,000</option>
                      <option value="3000_10000">$3,000 – $10,000</option>
                      <option value="10000_plus">$10,000+</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDownIcon size={18} className="text-text-secondary" />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent text-black font-bold text-lg rounded-xl py-4 mt-4 hover:brightness-[1.15] shadow-[0_0_15px_rgba(168,255,62,0.15)] hover:shadow-[0_0_25px_rgba(168,255,62,0.35)] transition-all flex items-center justify-center gap-2 group"
                >
                  Book a Strategy Call <span className="font-mono pt-0.5 group-hover:translate-x-1.5 transition-transform">→</span>
                </button>
                <div className="text-center font-mono text-[12px] text-text-muted mt-2 flex items-center justify-center gap-2 opacity-80">
                   <Lock size={12} className="text-text-secondary" /> We never spam. Replies within 24 hours.
                </div>
              </form>
            ) : (
              /* SUCCESS DRAW STATE DOM */
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center bg-[#111113] border border-[#27272A] rounded-2xl p-10 animate-[fadeUp_0.5s_ease-out]">
                <div className="w-24 h-24 rounded-full bg-[#09090B] border-2 border-[#27272A] flex items-center justify-center mb-8 relative shadow-inner overflow-hidden group">
                   <div className="absolute inset-0 bg-accent/20 scale-0 animate-[scaleUp_0.4s_ease-out_0.2s_forwards]"></div>
                   <svg className="w-12 h-12 text-accent relative z-10 animate-[drawCheck_0.6s_ease-out_0.4s_forwards] stroke-dasharray-[40] stroke-dashoffset-[40]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-[28px] font-display font-bold text-white mb-3 tracking-tight">Message received.</h3>
                <p className="text-[16px] font-body text-text-secondary">Expect a reply within 24 hours.</p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - CONTACT & DIRECTORY */}
          <div className="flex flex-col max-w-[400px] animate-[fadeUp_1.2s_ease-out]">
            <span className="text-[15px] font-body text-text-secondary mb-4 block ml-1">Or book directly:</span>
            
            {/* Calendly Interactive Block Mock */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-8 md:p-10 mb-10 flex flex-col items-center justify-center text-center group shadow-xl">
               <div className="w-16 h-16 bg-[#27272A] border border-[#3f3f46] rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-inner">
                 <Calendar className="text-white opacity-80" size={24} />
               </div>
               <h4 className="text-[20px] font-display font-semibold text-white mb-8 tracking-wide">Book a 30-min Call</h4>
               <a href="#" rel="noopener noreferrer" className="px-6 py-3.5 border border-accent/40 text-accent hover:border-accent hover:bg-accent/10 font-bold rounded-xl transition-all w-full tracking-wide">
                 Open Calendar
               </a>
            </div>

            <hr className="border-[#27272A] mb-10" />

            {/* Direct Contact Sub-links */}
            <div className="flex flex-col gap-5 font-body text-[15px] text-text-secondary mb-10 pl-1">
               <div className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                 <Mail size={18} className="text-text-muted transition-colors group-hover:text-accent" /> <a href="mailto:hello@revoflux.app">hello@revoflux.app</a>
               </div>
               <div className="flex items-center gap-4">
                 <Globe size={18} className="text-text-muted" /> Remote · US · UK · AU · CA
               </div>
            </div>

            {/* Verification Items list */}
            <div className="flex flex-col gap-4 font-body text-[15px] text-text-primary pl-1">
               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(168,255,62,0.1)]"><Check size={10} className="text-accent stroke-[3]"/></div>
                 Response within 24 hours
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(168,255,62,0.1)]"><Check size={10} className="text-accent stroke-[3]"/></div>
                 No pitch decks or upsells
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(168,255,62,0.1)]"><Check size={10} className="text-accent stroke-[3]"/></div>
                 Free strategy session on first call
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global CSS injections for scoped SVG drawings */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes scaleUp {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
