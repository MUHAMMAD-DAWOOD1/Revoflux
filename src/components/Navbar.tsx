"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Function to handle hash scrolling
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          // Increase timeout slightly to allow for page transitions
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 400); 
        }
      }
    };

    // Run on mount and whenever pathname changes
    scrollToHash();

    // Also listen for hash changes on the same page
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1240px] flex items-center justify-between">
        {/* Logo Fix: Using mask-image to extract only the 'R' and color it accent green */}
        <Link href="/" className="flex items-center group relative gap-4 md:gap-5">
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
          <span className="text-[18px] md:text-[21px] font-[950] font-display text-white tracking-[0.2em] uppercase selection:bg-accent selection:text-black drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            REVOFLUX
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[14px] font-medium text-white/60 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/contact"
            className="px-5 py-2.5 bg-white text-black font-semibold text-[13px] rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center justify-center gap-10 px-6 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-2xl font-display font-extrabold text-white uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="w-full py-5 bg-accent text-black font-extrabold text-lg rounded-2xl text-center uppercase"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
