"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
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
                   className="w-full h-full bg-white"
                   style={{ 
                     maskImage: "url(/r-logo.png)", 
                     WebkitMaskImage: "url(/r-logo.png)",
                     maskSize: "contain",
                     maskRepeat: "no-repeat",
                     maskPosition: "center"
                   }} 
                 />
              </div>
              <span className="text-[18px] font-[800] font-display text-white tracking-widest uppercase">
                REVOFLUX
              </span>
            </div>
            <p className="text-text-secondary text-[14px] font-body mb-8 leading-relaxed max-w-[280px]">
              "Built for Western Markets. Powered by AI."
            </p>
            <form className="flex flex-col gap-3 max-w-[280px]" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-text-primary focus:outline-none focus:border-accent/60 transition-colors font-body"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent text-black font-[800] rounded-xl px-4 py-3.5 text-[14px] hover:brightness-110 hover:shadow-[0_0_25px_rgba(168,255,62,0.4)] transition-all font-body uppercase tracking-widest"
              >
                Join Now
              </button>
            </form>
          </div>

          {/* Sections Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-display font-bold text-[11px] mb-8 tracking-[0.2em] uppercase opacity-40">Sections</h4>
            <ul className="flex flex-col gap-4 font-mono text-[11px] tracking-widest uppercase">
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Home</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">About</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Services</div></li>
              <li><div className="text-text-secondary hover:text-white transition-colors cursor-pointer">Work</div></li>
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
