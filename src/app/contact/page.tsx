"use client";

import { useState, useRef, useEffect } from "react";
import { Check, Mail, Globe, Lock, ChevronDown, Loader2, ArrowRight } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Workflow Automation",
    message: "",
  });

  const services = [
    "Workflow Automation",
    "AI Assistant",
    "Sales Automation",
    "Custom AI Project"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setIsDropdownOpen(false);
  };

  const handleContactFormSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4e1a676b-313f-4ae0-ae4b-9394fedd4404",
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.fullName}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          service: "Workflow Automation",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black pt-16 selection:bg-accent selection:text-black">
      
      {/* PAGE HERO */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #27272A 1px, transparent 1px),
              linear-gradient(to bottom, #27272A 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
          }}
        ></div>

        <div className="absolute z-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-accent opacity-[0.08] blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-[48px] md:text-[68px] lg:text-[76px] font-display font-[900] leading-[1.05] tracking-tight text-white mb-6 uppercase">
            Let's build the <span className="text-accent underline decoration-accent/30 underline-offset-8">future</span>.
          </h1>
          <p className="text-[18px] md:text-[21px] font-body text-white/50 max-w-2xl mx-auto leading-relaxed">
            Choose the method that works best for you. Book a call directly or send us a detailed message.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="py-20 md:py-32 container mx-auto px-6 max-w-[1240px] relative z-10 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: CALENDLY */}
          <div id="book-call" className="animate-in fade-in duration-500">
            <div className="text-left mb-12">
               <h2 className="text-[32px] md:text-[40px] font-display font-[800] text-white tracking-tight mb-4">Book a Free Strategy Call</h2>
               <p className="text-white/50 text-[16px] md:text-[18px] max-w-md leading-relaxed">30 minutes. No pressure. Just a conversation about your goals.</p>
            </div>
            
            <div className="bg-[#0a0a0c] border border-white/5 rounded-[32px] overflow-hidden shadow-2xl relative min-h-[800px] flex items-center justify-center">
              {/* Subtle loading spinner behind the iframe */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
                  <p className="text-white/20 font-mono text-xs uppercase tracking-[0.2em]">Initializing Calendar...</p>
                </div>
              </div>

              <div className="w-full relative z-10 transition-opacity duration-1000">
                <InlineWidget 
                  url="https://calendly.com/revoflux-ai/30min?hide_branding=1"
                  styles={{
                    height: '1000px',
                    width: '100%'
                  }}
                  pageSettings={{
                    backgroundColor: '000000',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '8b5cf6',
                    textColor: 'ffffff'
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <div className="text-left mb-12 lg:mt-0 mt-16">
               <h2 className="text-[32px] md:text-[40px] font-display font-[800] text-white tracking-tight mb-4">Or Send Us a Message</h2>
               <p className="text-white/50 text-[16px] md:text-[18px] max-w-md leading-relaxed">We'll get back to you within 24 hours.</p>
            </div>

            {status === "success" ? (
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 shadow-2xl">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message sent!</h3>
                <p className="text-white/60 text-lg">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-8 bg-[#0a0a0c]/50 p-8 md:p-12 border border-white/5 rounded-[32px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm font-medium ml-1 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Carter"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-all font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm font-medium ml-1 uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-all font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-sm font-medium ml-1 uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Stark Industries"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-all font-body"
                  />
                </div>

                {/* CUSTOM DROPDOWN */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm font-medium ml-1 uppercase tracking-wider">Service Interested In</label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white flex items-center justify-between focus:outline-none focus:border-accent/50 transition-all cursor-pointer font-body font-medium"
                    >
                      <span>{formData.service}</span>
                      <motion.div
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown size={20} className="text-white/40" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute z-[100] top-full mt-2 w-full bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                          <div className="py-2">
                            {services.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => handleServiceSelect(service)}
                                className={`w-full text-left px-5 py-3.5 text-sm transition-all flex items-center justify-between ${
                                  formData.service === service 
                                  ? "bg-accent/10 text-accent font-bold" 
                                  : "text-white/60 hover:bg-white/5 hover:text-white font-medium"
                                }`}
                              >
                                {service}
                                {formData.service === service && <Check size={16} />}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-sm font-medium ml-1 uppercase tracking-wider">Your Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project infrastructure needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-all resize-none leading-relaxed font-body"
                  />
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-mono">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button 
                  onClick={handleContactFormSubmit}
                  disabled={status === "loading"}
                  className="w-full bg-accent text-black font-extrabold h-16 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none group shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                >
                  {status === "loading" ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-white/20 text-xs font-mono uppercase tracking-[0.2em] pt-4 border-t border-white/5">
                  <Lock size={12} /> Secure transmission · Response within 24hrs
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ADDITIONAL FOOTER INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 mt-32 border-t border-white/5 animate-in fade-in duration-1000 delay-500">
           <div className="space-y-6">
             <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">Direct Contact</h3>
             <div className="space-y-4">
               <a href="mailto:revoflux.ai@gmail.com" className="flex items-center gap-4 text-white/40 hover:text-accent transition-colors group">
                 <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 transition-colors">
                   <Mail size={18} />
                 </div>
                 <span className="text-[17px] font-medium font-body underline decoration-white/10 underline-offset-4">revoflux.ai@gmail.com</span>
               </a>
               <div className="flex items-center gap-4 text-white/40">
                 <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                   <Globe size={18} />
                 </div>
                 <span className="text-[17px] font-medium font-body underline decoration-white/10 underline-offset-4">Global Operations · Remote-First</span>
               </div>
             </div>
           </div>
           <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">Why RevoFlux?</h3>
              <div className="space-y-5">
                 {[
                   "Specialized AI Architecture",
                   "Western Market Standards",
                   "Scalable Automation Frameworks"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <Check size={16} className="text-accent" />
                     <span className="text-white/60 font-body">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Global CSS injections */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
