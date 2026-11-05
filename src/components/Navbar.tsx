"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles, Code, Cpu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutionItems = [
  {
    title: "AI Solutions",
    href: "/solutions/ai-solutions",
    description: "Custom autonomous agents, LLM pipelines, and predictive models.",
    icon: Sparkles,
  },
  {
    title: "Software Development",
    href: "/solutions/software-development",
    description: "Full-stack web applications, SaaS platforms, MVPs, and APIs.",
    icon: Code,
  },
  {
    title: "Automation & Integrations",
    href: "/solutions/automation-integrations",
    description: "Enterprise workflow orchestration, CRM sync, and custom webhooks.",
    icon: Cpu,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside to close dropdown & Escape key accessibility
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) {
          setIsOpen(false);
          toggleButtonRef.current?.focus();
        }
        if (solutionsOpen) {
          setSolutionsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, solutionsOpen]);

  const closeAllMenus = () => {
    setIsOpen(false);
    setSolutionsOpen(false);
  };

  const isSolutionsActive = pathname.startsWith("/solutions");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3.5 bg-black/85 backdrop-blur-xl border-b border-white/10" : "py-5 md:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          onClick={closeAllMenus}
          className="flex items-center group relative gap-3.5 focus-visible:ring-2 focus-visible:ring-accent rounded-lg" 
          aria-label="Revoflux Home"
        >
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
          <span className="text-[17px] md:text-[19px] font-[900] font-display text-white tracking-[0.2em] uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            REVOFLUX
          </span>
        </Link>

        {/* Desktop Navigation (Shifted from md: to lg: breakpoint to prevent 768px tablet wrap) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px] font-medium" aria-label="Main Navigation">
          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => setSolutionsOpen(true)}
              className={`flex items-center gap-1.5 py-2 transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
                isSolutionsActive || solutionsOpen ? "text-white" : "text-text-secondary hover:text-white"
              }`}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              <span>Solutions</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180 text-accent" : ""}`}
              />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-[#0a0a0c] border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="space-y-1">
                    {solutionItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeAllMenus}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-accent/10 border border-accent/20 text-white"
                              : "hover:bg-white/5 text-text-secondary hover:text-white"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-accent">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-white mb-0.5">{item.title}</div>
                            <p className="text-[12px] text-text-muted leading-snug line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/5 px-2 pb-1 flex justify-between items-center text-[12px]">
                    <Link
                      href="/solutions"
                      onClick={closeAllMenus}
                      className="text-accent hover:underline font-mono uppercase tracking-wider text-[11px] flex items-center gap-1"
                    >
                      All Solutions Overview <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/approach"
            onClick={closeAllMenus}
            className={`transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
              pathname === "/approach" ? "text-white font-semibold" : "text-text-secondary hover:text-white"
            }`}
          >
            Approach
          </Link>

          <Link
            href="/work/demonstrations"
            onClick={closeAllMenus}
            className={`transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
              pathname.startsWith("/work") ? "text-white font-semibold" : "text-text-secondary hover:text-white"
            }`}
          >
            Work &amp; Demos
          </Link>

          <Link
            href="/about"
            onClick={closeAllMenus}
            className={`transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
              pathname === "/about" ? "text-white font-semibold" : "text-text-secondary hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeAllMenus}
            className={`transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
              pathname === "/contact" ? "text-white font-semibold" : "text-text-secondary hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/book-a-consultation"
            onClick={closeAllMenus}
            className="px-5 py-2.5 bg-accent text-black font-bold text-[13px] rounded-xl hover:bg-accent-hover transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95 focus-visible:ring-2 focus-visible:ring-accent"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile / Tablet Toggle Button (Displays below 1024px) */}
        <button
          ref={toggleButtonRef}
          type="button"
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/98 border-b border-white/10 px-6 py-8 overflow-y-auto max-h-[85vh] backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-5 text-lg font-display">
              <Link
                href="/"
                className="text-white hover:text-accent font-bold"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              <div className="pt-2 pb-2 border-y border-white/5">
                <span className="text-xs uppercase font-mono tracking-widest text-text-muted block mb-3 font-semibold">Solutions</span>
                <div className="space-y-3 pl-2">
                  <Link
                    href="/solutions"
                    className="block text-sm text-text-secondary hover:text-white font-semibold"
                    onClick={closeAllMenus}
                  >
                    All Solutions Overview
                  </Link>
                  <Link
                    href="/solutions/ai-solutions"
                    className="block text-sm text-text-secondary hover:text-white"
                    onClick={closeAllMenus}
                  >
                    AI Solutions &amp; Agents
                  </Link>
                  <Link
                    href="/solutions/software-development"
                    className="block text-sm text-text-secondary hover:text-white"
                    onClick={closeAllMenus}
                  >
                    Software Development &amp; SaaS
                  </Link>
                  <Link
                    href="/solutions/automation-integrations"
                    className="block text-sm text-text-secondary hover:text-white"
                    onClick={closeAllMenus}
                  >
                    Automation &amp; Integrations
                  </Link>
                </div>
              </div>

              <Link
                href="/approach"
                className="text-white hover:text-accent font-bold"
                onClick={closeAllMenus}
              >
                Approach
              </Link>

              <Link
                href="/work/demonstrations"
                className="text-white hover:text-accent font-bold"
                onClick={closeAllMenus}
              >
                Work &amp; Demonstrations
              </Link>

              <Link
                href="/about"
                className="text-white hover:text-accent font-bold"
                onClick={closeAllMenus}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-white hover:text-accent font-bold"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/book-a-consultation"
                  className="w-full py-4 bg-accent text-black font-extrabold text-sm rounded-xl text-center uppercase tracking-wider shadow-lg"
                  onClick={closeAllMenus}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
