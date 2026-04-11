"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
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

      particles = [];
      const particleCount = Math.min(1500, (width * height) / 1000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      vx: number;
      vy: number;
      type: "dot" | "dash";
      opacity: number;
      angle: number;
      friction: number;
      spring: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.type = "dot";
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = 0;
        this.vy = 0;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.friction = 0.92;
        this.spring = 0.015;
      }

      update() {
        const dx = mousePos.current.x - this.x;
        const dy = mousePos.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (distance < maxDist) {
          const force = (maxDist - distance) / maxDist;
          const angle = Math.atan2(dy, dx);
          
          this.vx -= Math.cos(angle) * force * 5.5;
          this.vy -= Math.sin(angle) * force * 5.5;
          
          if (this.type === "dash") {
            this.angle = angle + Math.PI / 2;
          }
        }

        const dxOrigin = this.originX - this.x;
        const dyOrigin = this.originY - this.y;
        
        this.vx += dxOrigin * this.spring;
        this.vy += dyOrigin * this.spring;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        
        if (this.type === "dot") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillRect(-1.5, -0.5, 3.5, 1);
          ctx.restore();
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
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
            <span className="text-[40px] md:text-[62px] lg:text-[72px] block">Intelligent Automation</span>
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
              className="px-8 py-3.5 bg-gradient-to-r from-accent to-purple-600 text-white font-[600] text-[15px] rounded-full flex items-center gap-2 group hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              Get in touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/#services"
              className="px-8 py-3.5 border border-white/10 text-white font-[500] text-[15px] rounded-full hover:bg-white/5 transition-colors"
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
