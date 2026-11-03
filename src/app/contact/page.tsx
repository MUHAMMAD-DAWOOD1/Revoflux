"use client";

import { useState } from "react";
import { Check, Mail, Globe, Lock, Loader2, ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "AI Solutions",
    message: "",
    honeypot: "",
  });

  const services = [
    "AI Solutions & Autonomous Agents",
    "Custom Software & SaaS Development",
    "Workflow & Business Automation",
    "API & Systems Integration",
    "Other / General Inquiry"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          service: "AI Solutions",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-6 uppercase tracking-widest font-semibold">
            <MessageSquare size={13} />
            <span>Start a Project</span>
          </div>
          <h1 className="font-display font-[900] text-white text-[38px] sm:text-[52px] md:text-[64px] tracking-tight leading-[1.05] mb-6">
            Let&apos;s Build the <span className="text-gradient">Future.</span>
          </h1>
          <p className="font-body text-text-secondary text-[17px] md:text-[19px] leading-relaxed">
            Choose the collaboration method that suits your schedule. Book an architecture strategy call directly or submit your project specifications below.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 container mx-auto px-6 max-w-[1240px] flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Strategy Call & Details (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#050505] border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                  <Calendar size={20} />
                </div>
                <div>
                  <h2 className="text-white font-display font-bold text-xl">Schedule a Strategy Call</h2>
                  <span className="text-text-muted text-xs font-mono">30 Minutes &bull; Direct Architect Access</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Prefer a real-time conversation? Schedule a 30-minute discovery call to evaluate project feasibility, review architecture requirements, and discuss timelines.
              </p>
              <Link
                href="/book-a-consultation"
                className="w-full py-4 bg-accent text-black font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover transition-all"
              >
                <span>Open Interactive Calendar</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-white font-display font-bold text-lg">Direct Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:revoflux.ai@gmail.com" 
                  className="flex items-center gap-3.5 text-text-secondary hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-text-muted text-[11px] font-mono uppercase block">Direct Inquiries</span>
                    <span className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                      revoflux.ai@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-text-secondary">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <Globe size={16} />
                  </div>
                  <div>
                    <span className="text-text-muted text-[11px] font-mono uppercase block">Delivery Model</span>
                    <span className="text-sm font-medium text-white">
                      Global Operations &bull; Remote-First Engineering
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-text-muted text-xs block mb-2 font-mono uppercase">Typical Response Time</span>
                <p className="text-white text-sm font-medium">Within 24 business hours</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-white font-display font-bold text-2xl mb-2">Send Us a Message</h2>
              <p className="text-text-secondary text-sm mb-8">
                Provide details about your project specifications or operational workflow needs.
              </p>

              {status === "success" ? (
                <div className="p-8 text-center bg-accent/5 border border-accent/20 rounded-2xl animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    <Check size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">Inquiry Received</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out. A senior engineer will review your project details and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-accent text-xs font-mono uppercase tracking-wider hover:underline font-bold"
                  >
                    Submit another inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  {/* Honeypot field for bot detection */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-white text-xs font-mono uppercase tracking-wider block font-semibold">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent transition-colors font-body"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white text-xs font-mono uppercase tracking-wider block font-semibold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent transition-colors font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-white text-xs font-mono uppercase tracking-wider block font-semibold">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent transition-colors font-body"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-white text-xs font-mono uppercase tracking-wider block font-semibold">
                        Solution Area
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-accent transition-colors font-body"
                      >
                        {services.map((item) => (
                          <option key={item} value={item} className="bg-black text-white">
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white text-xs font-mono uppercase tracking-wider block font-semibold">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the business workflow, tools involved, or software requirements..."
                      className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none leading-relaxed font-body"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-accent text-black font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <span>Submit Project Specifications</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-text-muted text-[11px] font-mono pt-2">
                    <Lock size={12} className="text-accent" />
                    <span>Confidential Transmission &bull; Data Protected Under Privacy Policy</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
