"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let animationFrameId: number;
    const DPR = window.devicePixelRatio || 1;
    let centerX = 0;
    let centerY = 0;

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      angle: number;
      speed: number;
      hasGlow: boolean;

      constructor(width: number, height: number, initialRandom = false) {
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.05 + Math.random() * 0.1;
        this.size = 0.3 + Math.random() * 1.9;
        this.opacity = 0.5 + Math.random() * 0.5;
        this.color = Math.random() > 0.25 ? "#ffffff" : "#c084fc";
        this.hasGlow = this.size > 1.5;

        if (initialRandom) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        } else {
          this.x = width / 2;
          this.y = height / 2;
        }
      }

      update(width: number, height: number) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Reset to center if out of bounds
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = width / 2;
          this.y = height / 2;
          this.angle = Math.random() * Math.PI * 2;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        if (this.hasGlow) {
          ctx.shadowBlur = 3;
          ctx.shadowColor = "#ffffff";
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);

      stars = [];
      for (let i = 0; i < 180; i++) {
        stars.push(new Star(width, height, true));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      stars.forEach((star) => {
        star.update(canvas.width / DPR, canvas.height / DPR);
        star.draw(ctx);
      });

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
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center pt-20"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono text-[11px] mb-8 tracking-[0.2em] uppercase"
          >
            REVOFLUX brings AI automation
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-[800] text-white leading-[1.05] mb-10 tracking-[-0.03em]"
          >
            <span className="text-[40px] md:text-[62px] lg:text-[72px] block">
              Intelligent <span style={{ fontStyle: 'italic', color: '#ffffff', display: 'inline-block' }}>Automation</span>
            </span>
            <span className="text-[40px] md:text-[62px] lg:text-[72px] text-glow block">For Modern Businesses.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20px] md:text-[25px] font-body text-text-secondary max-w-[500px] mb-14 leading-relaxed tracking-tight"
          >
            We automate the work. You scale the business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-gradient-to-r from-accent to-purple-600 text-white font-[600] text-[15px] rounded-full flex items-center gap-2 group hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.3)] relative z-30"
            >
              Get in touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#services"
              className="px-8 py-3.5 border border-white/20 text-white font-[500] text-[15px] rounded-full hover:bg-white/5 transition-colors relative z-30"
            >
              View services
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
