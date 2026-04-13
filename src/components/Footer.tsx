"use client";

import { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Loader2, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
          email: email,
          subject: "New Newsletter Subscription",
          from_name: "RevoFlux Newsletter",
          message: `New subscription request from: ${email}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setEmail("");
        // Reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-black pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 group gap-4 md:gap-5">
              <div className="relative w-8 h-8 md:w-[34px] md:h-[34px]">
                 <div 
                   className="w-full h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                   style={{ 
                     maskImage: "url(/r-logo.png)", 
                     WebkitMaskImage: "url(/r-logo.png)",
                     maskSize: "contain",
                     maskRepeat: "no-repeat",
                     maskPosition: "center",
                     filter: "drop-shadow(0 0 12px rgba(255,255,255,0.6))"
                   }} 
                 />
                 <div className="absolute -inset-4 bg-white/10 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
              </div>
              <span className="text-[18px] font-[950] font-display text-white tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                REVOFLUX
              </span>
            </div>
            <p className="text-text-secondary text-[14px] font-body mb-8 leading-relaxed max-w-[280px]">
              "Built for Western Markets. Powered by AI."
            </p>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center p-6 bg-accent/10 border border-accent/20 rounded-xl max-w-[280px] animate-in zoom-in-95 duration-300">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <Check size={20} className="text-accent" />
                </div>
                <p className="text-white text-sm font-bold uppercase tracking-wider">Welcome aboard!</p>
                <p className="text-text-secondary text-[12px] text-center mt-1">You've joined the waitlist.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-3 max-w-[280px]" onSubmit={handleNewsletterSubmit}>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors font-body"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-accent text-black font-[800] rounded-xl px-4 py-3.5 text-[14px] hover:brightness-110 hover:shadow-[0_0_25px_rgba(168,255,62,0.4)] transition-all font-body uppercase tracking-widest flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    "Join Now"
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-[10px] uppercase tracking-widest font-mono text-center">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Sections Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-8 tracking-[0.2em] uppercase opacity-40">Sections</h4>
            <ul className="flex flex-col gap-4 font-mono text-[11px] tracking-widest uppercase">
              <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-text-secondary hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#services" className="text-text-secondary hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#work" className="text-text-secondary hover:text-white transition-colors">Work</Link></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-8 tracking-[0.2em] uppercase opacity-40">Platform</h4>
            <ul className="flex flex-col gap-4 font-mono text-[11px] tracking-widest uppercase">
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Help</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Support</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Privacy</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Terms</div></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-8 tracking-[0.2em] uppercase opacity-40">Follow Us</h4>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:revoflux.ai@gmail.com"
                className="text-text-secondary hover:text-white transition-all duration-300"
                title="Email"
              >
                <MdEmail size={20} />
              </a>
              <a 
                href="https://instagram.com/revoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-all duration-300"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com/revoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-all duration-300"
                title="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-dawood-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://x.com/revoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-all duration-300"
                title="X (Twitter)"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted font-mono text-[9px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} REVOFLUX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 font-mono text-[9px] text-text-muted tracking-[0.3em] uppercase opacity-40">
            <span>Remote</span>
            <span className="w-1 h-1 rounded-full bg-accent/30"></span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
