"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Bot, ShieldCheck, Terminal, Cpu } from "lucide-react";

interface StarPoint {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  angle: number;
  speed: number;
  hasGlow: boolean;
}

function createStar(width: number, height: number, initialRandom = false): StarPoint {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.04 + Math.random() * 0.07;
  const size = 0.4 + Math.random() * 1.6;
  const opacity = 0.35 + Math.random() * 0.55;
  const color = Math.random() > 0.3 ? "#ffffff" : "#c084fc";
  const hasGlow = size > 1.3;

  let x = width / 2;
  let y = height / 2;

  if (initialRandom) {
    x = Math.random() * width;
    y = Math.random() * height;
  }

  return { x, y, size, opacity, color, angle, speed, hasGlow };
}

function updateStar(star: StarPoint, width: number, height: number) {
  star.x += Math.cos(star.angle) * star.speed;
  star.y += Math.sin(star.angle) * star.speed;

  if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
    star.x = width / 2;
    star.y = height / 2;
    star.angle = Math.random() * Math.PI * 2;
  }
}

function drawStar(ctx: CanvasRenderingContext2D, star: StarPoint) {
  ctx.save();
  ctx.globalAlpha = star.opacity;
  ctx.fillStyle = star.color;

  if (star.hasGlow) {
    ctx.shadowBlur = 3;
    ctx.shadowColor = "#ffffff";
  }

  ctx.beginPath();
  ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user's OS reduced motion preference - exit immediately if reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: StarPoint[] = [];
    let animationFrameId: number;
    const DPR = window.devicePixelRatio || 1;

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);

      stars = [];
      // Lower particle density on mobile to preserve render performance
      const starCount = width < 768 ? 35 : width < 1200 ? 75 : 120;
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar(width, height, true));
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          isVisible = entries[0].isIntersecting;
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);

        for (let i = 0; i < stars.length; i++) {
          updateStar(stars[i], canvas.width / DPR, canvas.height / DPR);
          drawStar(ctx, stars[i]);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[75vh] lg:min-h-[85vh] bg-black overflow-hidden flex items-center justify-center py-10 sm:py-14 md:py-20 lg:py-24 border-b border-white/5"
    >
      {/* Background Starfield Canvas: pure CSS motion-reduce:hidden prevents render */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-85 motion-reduce:hidden"
        aria-hidden="true"
      />
      {/* Static gradient fallback for reduced-motion users */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15),transparent_70%)] hidden motion-reduce:block"
        aria-hidden="true"
      />

      {/* Subtle ambient gradient orb */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/8 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headline, Copy & Conversion Actions (Span 7) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Category Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[10px] sm:text-[11px] mb-4 sm:mb-6 tracking-[0.18em] uppercase font-semibold"
            >
              <Sparkles size={12} className="text-accent shrink-0" />
              <span>AI Systems &amp; Software Engineering</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-[900] text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight text-[32px] sm:text-[44px] md:text-[54px] lg:text-[58px] xl:text-[66px]"
            >
              Intelligent Software &amp; AI Solutions{" "}
              <span className="text-gradient block sm:inline">For Modern Businesses.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] sm:text-[18px] lg:text-[19px] font-body text-text-secondary max-w-[620px] mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
            >
              We engineer autonomous AI systems, scalable software platforms, and resilient automated workflows that eliminate operational bottlenecks and drive durable business leverage.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
            >
              <Link 
                href="/book-a-consultation"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-accent text-black font-extrabold text-[14px] sm:text-[15px] rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover transition-all shadow-[0_0_25px_rgba(139,92,246,0.25)] active:scale-95 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={17} />
              </Link>
              <Link 
                href="/solutions"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 border border-white/20 text-white font-semibold text-[14px] sm:text-[15px] rounded-xl hover:bg-white/5 transition-all text-center focus-visible:ring-2 focus-visible:ring-accent"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Micro Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
            >
              <div>
                <span className="block text-accent font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold mb-0.5">Architecture</span>
                <span className="text-white text-xs font-medium">Production-Grade</span>
              </div>
              <div>
                <span className="block text-accent font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold mb-0.5">Privacy</span>
                <span className="text-white text-xs font-medium">Zero Data Leakage</span>
              </div>
              <div>
                <span className="block text-accent font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold mb-0.5">Delivery</span>
                <span className="text-white text-xs font-medium">Agile Milestones</span>
              </div>
              <div>
                <span className="block text-accent font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold mb-0.5">Integration</span>
                <span className="text-white text-xs font-medium">Full Stack APIs</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive System Architecture Visual Anchor (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Localized purple radial glow anchor */}
            <div 
              className="absolute -inset-4 bg-accent/15 blur-2xl rounded-3xl opacity-60 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative bg-[#050505] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-text-muted text-[11px] font-mono ml-2">revoflux-agent-runtime</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE &bull; 99.9%</span>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3.5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-text-muted flex items-center gap-1.5">
                      <Terminal size={12} className="text-accent" />
                      <span>01. Inbound Event</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                  </div>
                  <p className="text-white text-[11px] font-sans">
                    Webhook payload ingested &amp; Zod schema validated with zero data loss.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#0a0a0c] border border-accent/25 rounded-xl p-3.5 space-y-1 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-accent flex items-center gap-1.5 font-bold">
                      <Bot size={12} />
                      <span>02. Autonomous Agent Execution</span>
                    </span>
                    <span className="text-accent text-[10px] animate-pulse">PROCESSING</span>
                  </div>
                  <p className="text-text-secondary text-[11px] font-sans">
                    Vector context retrieved. Prompt boundary guardrails enforced &bull; 0% hallucination risk.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3.5 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-text-muted flex items-center gap-1.5">
                      <Cpu size={12} className="text-accent" />
                      <span>03. System Mutation</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">COMPLETED</span>
                  </div>
                  <p className="text-white text-[11px] font-sans">
                    CRM records synchronized, notification sent, and immutable audit log stored.
                  </p>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-accent" />
                  <span>Human-in-the-Loop Safe</span>
                </span>
                <span className="text-accent">Latency: 38ms</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
