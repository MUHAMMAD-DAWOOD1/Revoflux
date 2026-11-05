"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, GitBranch, TrendingUp, Terminal, CheckCircle2, Zap, ArrowUpRight, Cpu } from "lucide-react";

export default function HeroShowcase() {
  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[580px] xl:max-w-[640px] select-none pointer-events-auto">
      {/* Ambient background glow behind the component ecosystem */}
      <div 
        className="absolute -top-12 -right-8 w-[420px] h-[420px] bg-accent/20 blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-10 left-10 w-[320px] h-[320px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Multi-Card Composition */}
      <div className="relative flex flex-col gap-3.5 sm:gap-4">

        {/* Card 1: Visual Workflow Automation Engine (Top Banner Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <GitBranch size={15} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-tight">Autonomous Workflow Engine</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>
                <span className="text-text-muted text-[11px] font-mono">Trigger &rarr; Qualify &rarr; CRM Sync &rarr; Action</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-accent hidden sm:inline-block">24ms latency</span>
          </div>

          {/* Node Flow Pipeline */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="bg-black/50 border border-white/5 rounded-xl p-2.5">
              <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">01 Inbound</span>
              <span className="text-white text-xs font-semibold block truncate">Webhook Trigger</span>
              <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1 mt-1">
                <CheckCircle2 size={11} /> 100% Verified
              </span>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-2.5 relative">
              <span className="text-[10px] font-mono text-accent uppercase block mb-1">02 AI Agent</span>
              <span className="text-white text-xs font-semibold block truncate">Intent &amp; Routing</span>
              <span className="text-accent text-[10px] font-mono flex items-center gap-1 mt-1">
                <Zap size={11} className="fill-accent" /> Active
              </span>
            </div>

            <div className="bg-black/50 border border-white/5 rounded-xl p-2.5">
              <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">03 Target</span>
              <span className="text-white text-xs font-semibold block truncate">CRM &amp; Database</span>
              <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1 mt-1">
                <CheckCircle2 size={11} /> Synced
              </span>
            </div>
          </div>
        </motion.div>

        {/* Middle Row: Two Columns (AI Chatbot on Left, Marketing/Analytics on Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4">

          {/* Card 2: Interactive AI Chatbot / Assistant (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="sm:col-span-7 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Bot size={13} />
                </div>
                <span className="text-white text-xs font-bold">AI Support &amp; Lead Agent</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">Domain Model</span>
            </div>

            <div className="space-y-2 text-[11px] sm:text-xs">
              {/* User message */}
              <div className="bg-white/5 border border-white/5 rounded-xl rounded-br-none p-2.5 text-white/90 max-w-[90%] ml-auto">
                Can you qualify new enterprise leads and schedule consultation meetings automatically?
              </div>

              {/* Bot response */}
              <div className="bg-accent/15 border border-accent/25 rounded-xl rounded-bl-none p-2.5 text-white max-w-[95%]">
                <p className="leading-relaxed">
                  <span className="text-accent font-semibold font-mono text-[10px] block mb-0.5">AGENT RESPONSE</span>
                  Lead qualified with <strong>94/100 score</strong>. Calendar invite dispatched and synced to HubSpot CRM with zero manual input.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Marketing & Sales Growth Metric (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sm:col-span-5 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-text-muted text-[11px] font-mono uppercase mb-2">
                <span className="flex items-center gap-1.5">
                  <TrendingUp size={13} className="text-emerald-400" />
                  Growth Metric
                </span>
                <span className="text-emerald-400 flex items-center font-bold">
                  +42.8% <ArrowUpRight size={12} />
                </span>
              </div>
              <span className="text-white text-2xl font-extrabold tracking-tight block font-display">
                $148.2K
              </span>
              <span className="text-text-muted text-[11px] font-body block">
                Automated Pipeline Value
              </span>
            </div>

            {/* SVG Sparkline Graph */}
            <div className="pt-3">
              <svg viewBox="0 0 120 32" className="w-full h-8 overflow-visible">
                <defs>
                  <linearGradient id="gradientGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,28 L15,22 L30,24 L45,16 L60,19 L75,10 L90,12 L105,4 L120,2 L120,32 L0,32 Z"
                  fill="url(#gradientGrowth)"
                />
                <path
                  d="M0,28 L15,22 L30,24 L45,16 L60,19 L75,10 L90,12 L105,4 L120,2"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="2" r="3" fill="#a855f7" className="animate-ping" />
                <circle cx="120" cy="2" r="3" fill="#ffffff" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Two Columns (Clean Code Snippet + Agent Telemetry) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4">

          {/* Card 4: Clean Architecture / Code Snippet (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="sm:col-span-7 bg-[#07070b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-300 font-mono text-[11px]"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-text-muted text-[10px] ml-1.5 flex items-center gap-1">
                  <Terminal size={11} /> orchestrator.ts
                </span>
              </div>
              <span className="text-[10px] text-accent font-semibold">TypeScript</span>
            </div>

            <pre className="text-text-secondary leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span> agent = <span className="text-purple-400">await</span> revoflux.<span className="text-blue-400">dispatch</span>&#40;&#123;&#10;
                &nbsp;&nbsp;task: <span className="text-emerald-300">&quot;qualify_and_route&quot;</span>,&#10;
                &nbsp;&nbsp;integrations: &#91;<span className="text-emerald-300">&quot;hubspot&quot;</span>, <span className="text-emerald-300">&quot;slack&quot;</span>&#93;&#10;
                &#125;&#41;;&#10;
                <span className="text-text-muted">&#47;&#47; Execution latency: 38ms</span>
              </code>
            </pre>
          </motion.div>

          {/* Card 5: Autonomous Agent Telemetry (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="sm:col-span-5 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-1.5 text-xs text-white font-bold">
                <Cpu size={14} className="text-accent" />
                Agent Runtime
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                99.98%
              </span>
            </div>

            <div className="space-y-2 py-2 text-[11px] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Inference:</span>
                <span className="text-white font-semibold">Neural v3.8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Security:</span>
                <span className="text-emerald-400 font-semibold">Zero-Leak VPC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Throughput:</span>
                <span className="text-accent font-semibold">1,420 ops/sec</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span>Status: Optimal</span>
              <span className="text-accent font-semibold">Synced</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
