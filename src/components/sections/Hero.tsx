"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

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
  const speed = 0.04 + Math.random() * 0.08;
  const size = 0.4 + Math.random() * 1.8;
  const opacity = 0.4 + Math.random() * 0.6;
  const color = Math.random() > 0.25 ? "#ffffff" : "#c084fc";
  const hasGlow = size > 1.4;

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
    // Respect reduced motion
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
      const starCount = width < 768 ? 50 : 140;
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
      className="relative w-full min-h-[90vh] bg-black overflow-hidden flex items-center justify-center pt-16 pb-20 border-b border-white/5"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 tracking-[0.2em] uppercase font-semibold"
          >
            <Sparkles size={13} className="text-accent" />
            <span>AI Systems & Custom Software Engineering</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-[900] text-white leading-[1.05] mb-8 tracking-[-0.035em]"
          >
            <span className="text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] block">
              Intelligent Software &amp; AI Solutions
            </span>
            <span className="text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] text-glow block text-gradient">
              For Modern Businesses.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18px] sm:text-[21px] font-body text-text-secondary max-w-[680px] mb-12 leading-relaxed"
          >
            We architect and deploy autonomous AI systems, scalable software platforms, and enterprise automated workflows that eliminate bottlenecks and drive measurable business leverage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/book-a-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-extrabold text-[15px] rounded-2xl flex items-center justify-center gap-2.5 group hover:bg-accent-hover transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] active:scale-95"
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-[15px] rounded-2xl hover:bg-white/5 transition-all text-center"
            >
              Explore Solutions
            </Link>
          </motion.div>

          {/* Micro trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-3xl"
          >
            <div>
              <span className="block text-accent font-mono text-xs uppercase tracking-wider font-bold mb-1">Architecture</span>
              <span className="text-white text-xs font-medium">Production-Grade AI &amp; Software</span>
            </div>
            <div>
              <span className="block text-accent font-mono text-xs uppercase tracking-wider font-bold mb-1">Security</span>
              <span className="text-white text-xs font-medium">Data Privacy &amp; Guardrails</span>
            </div>
            <div>
              <span className="block text-accent font-mono text-xs uppercase tracking-wider font-bold mb-1">Speed</span>
              <span className="text-white text-xs font-medium">Agile Milestone Delivery</span>
            </div>
            <div>
              <span className="block text-accent font-mono text-xs uppercase tracking-wider font-bold mb-1">Integration</span>
              <span className="text-white text-xs font-medium">Seamless API &amp; Cloud Sync</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
