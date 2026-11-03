"use client";

import { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Loader2, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
          type: "newsletter",
          email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Unable to subscribe at this moment.");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <footer className="bg-black pt-20 pb-12 overflow-hidden border-t border-white/10" aria-label="Site Footer">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand & Newsletter (Span 2) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group gap-3.5 focus:outline-none w-fit" aria-label="Revoflux Home">
              <div className="relative w-8 h-8 md:w-[32px] md:h-[32px]">
                <div 
                  className="w-full h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{ 
                    maskImage: "url(/r-logo.png)", 
                    WebkitMaskImage: "url(/r-logo.png)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))"
                  }} 
                />
                <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-[18px] font-[900] font-display text-white tracking-[0.2em] uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                REVOFLUX
              </span>
            </Link>
            
            <p className="text-text-secondary text-[14px] font-body mb-6 leading-relaxed max-w-[340px]">
              Intelligent software systems, custom autonomous AI agents, and enterprise integrations engineered for modern businesses.
            </p>

            <div className="mb-4">
              <span className="text-white text-xs font-mono uppercase tracking-widest block mb-2 font-semibold">
                Subscribe for Engineering Insights
              </span>
              {status === "success" ? (
                <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/20 rounded-xl max-w-[360px] animate-in zoom-in-95 duration-300">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <Check size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Subscribed</p>
                    <p className="text-text-secondary text-[11px]">Thank you for joining our updates list.</p>
                  </div>
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-2 max-w-[360px]" onSubmit={handleNewsletterSubmit}>
                  <label htmlFor="newsletter-email" className="sr-only">Work email address</label>
                  <input 
                    id="newsletter-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-[13px] text-text-primary focus:outline-none focus:border-accent transition-colors font-body"
                  />
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="bg-accent text-black font-extrabold rounded-xl px-4 py-3 text-[12px] hover:bg-accent-hover transition-all font-mono uppercase tracking-wider flex items-center justify-center shrink-0 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      "Join"
                    )}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-status-error text-[11px] font-mono mt-2">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-6 tracking-[0.2em] uppercase opacity-50">Solutions</h4>
            <ul className="flex flex-col gap-3 font-mono text-[12px] tracking-wider uppercase text-text-secondary">
              <li><Link href="/solutions" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/solutions/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/solutions/software-development" className="hover:text-white transition-colors">Software Dev</Link></li>
              <li><Link href="/solutions/automation-integrations" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/work/demonstrations" className="hover:text-white transition-colors">Demonstrations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-6 tracking-[0.2em] uppercase opacity-50">Company</h4>
            <ul className="flex flex-col gap-3 font-mono text-[12px] tracking-wider uppercase text-text-secondary">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/approach" className="hover:text-white transition-colors">Our Approach</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book-a-consultation" className="hover:text-white transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Legal & Trust Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-6 tracking-[0.2em] uppercase opacity-50">Legal &amp; Connect</h4>
            <ul className="flex flex-col gap-3 font-mono text-[12px] tracking-wider uppercase text-text-secondary mb-6">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
            </ul>

            <div className="flex items-center gap-4">
              <a 
                href="mailto:revoflux.ai@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all"
                title="Email Revoflux"
                aria-label="Send email to Revoflux"
              >
                <MdEmail size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-dawood-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all"
                title="LinkedIn"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={16} />
              </a>
              <a 
                href="https://x.com/revoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all"
                title="X (Twitter)"
                aria-label="X profile"
              >
                <FaXTwitter size={16} />
              </a>
              <a 
                href="https://instagram.com/revoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent transition-all"
                title="Instagram"
                aria-label="Instagram profile"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted font-mono text-[10px] tracking-[0.2em] uppercase">
          <p>&copy; {new Date().getFullYear()} REVOFLUX AI. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 opacity-60">
            <span>Remote-First</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Global Operations</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>revoflux.app</span>
          </div>
        </div>

        {/* AI Entity Definition (GEO & Schema alignment) */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-white/30 text-[11px] leading-relaxed max-w-4xl font-body">
            Revoflux AI is an independent software and artificial intelligence technology company specializing in custom software development, autonomous AI agent architecture, workflow automation, and distributed systems integration.
          </p>
        </div>
      </div>
    </footer>
  );
}
