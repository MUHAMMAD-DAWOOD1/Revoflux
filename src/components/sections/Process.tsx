"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Hand, RefreshCw, MessageSquare, Cog, Filter, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

function StepBadge({ step }: { step: string }) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[10px] tracking-widest uppercase mb-4 font-semibold">
      {step}
    </div>
  );
}

// ---------------------------------------------------------
// CARD 1: Discovery & Technical Analysis
// ---------------------------------------------------------
function SmartAnalyzingCard() {
  const checks = [
    { name: "System Architecture Audit", icon: <Shield size={12} /> },
    { name: "Process & API Feasibility", icon: <Cpu size={12} /> },
    { name: "Latency & Throughput Bounds", icon: <Zap size={12} /> },
    { name: "Manual Bottleneck Identification", icon: <Hand size={12} /> },
    { name: "Repetitive Task Mapping", icon: <RefreshCw size={12} /> },
  ];

  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[70px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
      <StepBadge step="Step 1" />
      <h3 className="text-white text-2xl font-bold mb-2">Technical Discovery</h3>
      <p className="text-text-muted text-[13px] mb-6">Rigorous evaluation of system APIs, business logic, and security constraints.</p>
      
      <div className="flex-1 w-full bg-[#0a0a0c] border border-white/5 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-xl mt-auto">
         {/* Left Side: Radar */}
         <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative bg-[#050505]/50">
            <div className="relative w-28 h-28 rounded-full border border-accent/20 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 rounded-full border border-accent/10 scale-[0.6]" />
               <div className="absolute inset-0 rounded-full border border-accent/10 scale-[0.3]" />
               {/* Radar Sweep */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0"
                 style={{ originX: "50%", originY: "50%" }}
               >
                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent/20 to-accent/80 origin-right rounded-tl-full rounded-bl-full opacity-50" />
               </motion.div>
               <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#8b5cf6]" />
            </div>
            <p className="text-accent text-[10px] font-mono mt-3 uppercase tracking-widest inline-block font-semibold">Analyzing workflow...</p>
         </div>
         {/* Right Side: List */}
         <div className="w-full md:w-1/2 p-5 flex flex-col justify-center gap-2">
            {checks.map((item, i) => (
               <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-accent shrink-0">
                     {item.icon}
                  </div>
                  <span className="text-text-secondary text-[11px] font-medium">{item.name}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 2: Architecture & Development
// ---------------------------------------------------------
const codeSnippet = `const workflow = async () => {
  const data = await fetchLeads();
  const scored = ai.score(data);
  const filtered = scored.filter(
    lead => lead.score > 0.85
  );
  await crm.push(filtered);
  await email.send({
    to: filtered,
    template: 'outreach_v2'
  });
  return { success: true };
};

triggerWorkflow(workflow);`;

function AIDevelopmentCard() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isTyping = true;
    let charIndex = 0;
    const typingSpeed = 40;
    const clearingSpeed = 20;
    const pauseEnd = 1200;
    const pauseStart = 600;

    const runTypewriter = () => {
      if (isTyping) {
        if (charIndex < codeSnippet.length) {
          setDisplayText(codeSnippet.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(runTypewriter, typingSpeed);
        } else {
          isTyping = false;
          timeoutId = setTimeout(runTypewriter, pauseEnd);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(codeSnippet.substring(0, charIndex - 1));
          charIndex--;
          timeoutId = setTimeout(runTypewriter, clearingSpeed);
        } else {
          isTyping = true;
          timeoutId = setTimeout(runTypewriter, pauseStart);
        }
      }
    };

    runTypewriter();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[70px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
      <StepBadge step="Step 2" />
      <h3 className="text-white text-2xl font-bold mb-2">Systems Engineering</h3>
      <p className="text-text-muted text-[13px] mb-6">Type-safe implementations with unit-tested business logic and model guardrails.</p>

      <div className="flex-1 w-full bg-[#0a0a0c] border border-white/5 rounded-2xl flex flex-col shadow-xl mt-auto overflow-hidden">
         {/* Window controls */}
         <div className="flex px-4 py-2.5 border-b border-white/5 bg-[#050505]/50 gap-2 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-white/30 text-[10px] font-mono">workflow.ts</span>
         </div>
         {/* Code Area */}
         <div className="p-4 h-[200px] w-full relative font-mono text-[11px] leading-[1.6] text-accent/90 flex flex-col overflow-hidden">
            <pre className="whitespace-pre-wrap break-words">
               {displayText}
               <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 translate-y-[2px]" />
            </pre>
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 3: Integration & Testing
// ---------------------------------------------------------
function SeamlessIntegrationCard() {
  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-[70px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
      <StepBadge step="Step 3" />
      <h3 className="text-white text-2xl font-bold mb-2">Resilient Integration</h3>
      <p className="text-text-muted text-[13px] mb-6">Connecting systems via secure webhooks, private APIs, and idempotent handlers.</p>

      <div className="flex-1 w-full flex items-center justify-between mt-auto px-2">
         {/* Revoflux Solution */}
         <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full relative z-10 bg-black flex items-center justify-center border border-accent/40">
               <Zap size={16} className="text-accent" />
            </div>
            <span className="text-white text-[11px] font-medium font-mono">Revoflux Engine</span>
         </div>

         {/* Data Lines */}
         <div className="flex-1 h-20 relative flex flex-col justify-center gap-4 px-2">
            {[1, 2, 3].map(i => (
               <div key={i} className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.4 }} 
                    className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-accent to-transparent" 
                  />
               </div>
            ))}
         </div>

         {/* Client Infrastructure */}
         <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-[12px] bg-white/5 flex items-center justify-center border border-white/10">
               <MessageSquare size={16} className="text-text-secondary" />
            </div>
            <span className="text-text-secondary text-[11px] font-medium font-mono">Client Stack</span>
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 4: Observability & Continuous Iteration
// ---------------------------------------------------------
function ContinuousOptimizationCard() {
  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 blur-[70px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
      <StepBadge step="Step 4" />
      <h3 className="text-white text-2xl font-bold mb-2">Observability &amp; Review</h3>
      <p className="text-text-muted text-[13px] mb-6">Continuous monitoring, telemetry, automated error recovery, and staged updates.</p>

      <div className="flex-1 w-full mt-auto space-y-2.5">
         <div className="bg-[#0a0a0c] border border-accent/20 rounded-2xl p-3.5 flex flex-col">
            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                     <MessageSquare size={13} />
                  </div>
                  <span className="text-white text-[13px] font-medium">Telemetry &amp; Logging</span>
               </div>
               <span className="text-emerald-400 font-mono text-[10px]">Active Health: 99.9%</span>
            </div>
            <div className="bg-accent/10 text-accent text-[10px] font-mono px-2.5 py-1 rounded-md w-fit font-semibold">
               Zero Unhandled Pipeline Exceptions
            </div>
         </div>

         <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-3 flex items-center justify-between text-text-muted text-[12px]">
             <div className="flex items-center gap-2.5">
                <Cog size={14} />
                <span>Automated Retries &amp; Fallbacks</span>
             </div>
             <span className="font-mono text-[10px]">Configured</span>
         </div>

         <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-3 flex items-center justify-between text-text-muted text-[12px]">
             <div className="flex items-center gap-2.5">
                <Filter size={14} />
                <span>Audit &amp; Compliance Logs</span>
             </div>
             <span className="font-mono text-[10px]">Immutable</span>
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN PROCESS EXPORT
// ---------------------------------------------------------
export default function Process() {
  return (
    <section id="process" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
            Engineering Lifecycle
          </div>
          <h2 className="font-display font-[900] text-white leading-[1.1] mb-6 tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
            From Architecture to <span className="text-gradient">Production Delivery.</span>
          </h2>
          <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
            Every engagement follows a structured delivery lifecycle designed to minimize technical risk and guarantee software quality.
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-12">
           <SmartAnalyzingCard />
           <AIDevelopmentCard />
           <SeamlessIntegrationCard />
           <ContinuousOptimizationCard />
        </div>

        {/* Link to Approach Page */}
        <div className="text-center">
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 text-accent hover:text-white font-mono text-xs uppercase tracking-widest transition-colors font-semibold"
          >
            Read our full engineering &amp; delivery approach <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
