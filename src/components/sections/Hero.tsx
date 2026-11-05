"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroShowcase from "./HeroShowcase";

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
  const speed = 0.03 + Math.random() * 0.06;
  const size = 0.4 + Math.random() * 1.5;
  const opacity = 0.3 + Math.random() * 0.5;
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
      const starCount = width < 768 ? 25 : width < 1200 ? 55 : 90;
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
      className="relative w-full min-h-[80vh] lg:min-h-[88vh] bg-black overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-28 border-b border-white/5"
    >
      {/* Background Starfield Canvas: pure CSS motion-reduce:hidden prevents render */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-50 motion-reduce:hidden"
        aria-hidden="true"
      />

      {/* Ambient purple glow behind right side visual */}
      <div 
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-accent/15 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Hero Foreground Content & Vector-Sharp UI Showcase */}
      <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Headline, Description, CTAs, Trust Metrics */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            
            {/* Category Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[10px] sm:text-[11px] mb-5 sm:mb-6 tracking-[0.18em] uppercase font-semibold"
            >
              <Sparkles size={12} className="text-accent shrink-0" />
              <span>AI Systems &amp; Software Engineering</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-[900] text-white leading-[1.08] mb-5 sm:mb-6 tracking-tight text-[34px] sm:text-[46px] md:text-[54px] lg:text-[56px] xl:text-[64px]"
            >
              Intelligent Software &amp; AI Solutions{" "}
              <span className="text-gradient block sm:inline">For Modern Businesses.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] sm:text-[18px] lg:text-[19px] font-body text-text-secondary mb-8 sm:mb-10 leading-relaxed max-w-xl"
            >
              We architect and deploy autonomous AI systems, scalable software platforms, and resilient automated workflows that eliminate operational bottlenecks and drive durable business leverage.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
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

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-xl"
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

          {/* Right Column: Code-Driven High-Fidelity Showcase (Zero Blur, No Image Cut-Off) */}
          <div className="lg:col-span-5 xl:col-span-6 w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroShowcase />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
