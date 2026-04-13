"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Hand, RefreshCw, MessageSquare, Cog, Filter } from "lucide-react";
import { useEffect, useState } from "react";

function StepBadge({ step }: { step: string }) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 font-mono text-[10px] tracking-widest uppercase mb-4">
      {step}
    </div>
  );
}

// ---------------------------------------------------------
// CARD 1: Smart Analyzing
// ---------------------------------------------------------
function SmartAnalyzingCard() {
  const checks = [
    { name: "System check", icon: <Shield size={12} /> },
    { name: "Process check", icon: <Cpu size={12} /> },
    { name: "Speed check", icon: <Zap size={12} /> },
    { name: "Manual work", icon: <Hand size={12} /> },
    { name: "Repetative task", icon: <RefreshCw size={12} /> },
  ];

  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 blur-[70px] pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-colors" />
      <StepBadge step="Step 1" />
      <h3 className="text-white text-2xl font-bold mb-8">Smart Analyzing</h3>
      
      <div className="flex-1 w-full bg-[#0a0a0c] border border-white/5 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-xl mt-auto">
         {/* Left Side: Radar */}
         <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative bg-[#050505]/50">
            <div className="relative w-32 h-32 rounded-full border border-[#8b5cf6]/20 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/10 scale-[0.6]" />
               <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/10 scale-[0.3]" />
               {/* Radar Sweep */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0"
                 style={{ originX: "50%", originY: "50%" }}
               >
                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-[#8b5cf6]/80 origin-right rounded-tl-full rounded-bl-full opacity-50" />
               </motion.div>
               <div className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]" />
            </div>
            <p className="text-[#8b5cf6] text-[10px] font-mono mt-4 uppercase tracking-widest text-glow inline-block">Analyzing workflow..</p>
         </div>
         {/* Right Side: List */}
         <div className="w-full md:w-1/2 p-5 flex flex-col justify-center gap-2">
            {checks.map((item, i) => (
               <div key={i} className="flex items-center gap-3 group/item">
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-white/30 group-hover/item:text-[#8b5cf6] group-hover/item:bg-[#8b5cf6]/10 transition-colors">
                     {item.icon}
                  </div>
                  <span className="text-white/60 text-[12px] font-medium group-hover/item:text-white transition-colors">{item.name}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 2: AI Development
// ---------------------------------------------------------
function AIDevelopmentCard() {
  const fullSnippet = `const workflow = async () => {
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

  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 45;
  const clearingSpeed = 20;
  const pauseEnd = 1000;
  const pauseStart = 500;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isTyping = true;
    let charIndex = 0;

    const runTypewriter = () => {
      if (isTyping) {
        if (charIndex < fullSnippet.length) {
          setDisplayText(fullSnippet.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(runTypewriter, typingSpeed);
        } else {
          // Pause at end
          isTyping = false;
          timeoutId = setTimeout(runTypewriter, pauseEnd);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(fullSnippet.substring(0, charIndex - 1));
          charIndex--;
          timeoutId = setTimeout(runTypewriter, clearingSpeed);
        } else {
          // Pause at start
          isTyping = true;
          timeoutId = setTimeout(runTypewriter, pauseStart);
        }
      }
    };

    runTypewriter();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 blur-[70px] pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-colors" />
      <StepBadge step="Step 2" />
      <h3 className="text-white text-2xl font-bold mb-3">AI Development</h3>
      <p className="text-white/40 text-[14px] mb-8 leading-relaxed">Custom python and node logic tailored for your business needs.</p>

      <div className="flex-1 w-full bg-[#0a0a0c] border border-white/5 rounded-2xl flex flex-col shadow-xl mt-auto overflow-hidden">
         {/* Window controls */}
         <div className="flex px-4 py-3 border-b border-white/5 bg-[#050505]/50 gap-2 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-white/20 text-[10px] font-mono">workflow.ts</span>
         </div>
         {/* Code Area */}
         <div className="p-5 h-[240px] w-full relative font-mono text-[11px] md:text-[12px] leading-[1.6] text-accent/80 flex flex-col overflow-hidden">
            <pre className="whitespace-pre-wrap break-words">
               {displayText}
               <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 translate-y-[2px] animate-cursor-blink" />
            </pre>
         </div>
      </div>

      <style jsx>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-cursor-blink {
          animation: cursor-blink 0.5s step-end infinite;
        }
      `}</style>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 3: Seamless Integration
// ---------------------------------------------------------
function SeamlessIntegrationCard() {
  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8b5cf6]/5 blur-[70px] pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-colors" />
      <StepBadge step="Step 3" />
      <h3 className="text-white text-2xl font-bold mb-3">Seamless Integration</h3>
      <p className="text-white/40 text-[14px] mb-8 leading-relaxed">Connecting our smart solutions directly into your existing stack.</p>

      <div className="flex-1 w-full flex items-center justify-between mt-auto px-2">
         {/* Our Solution */}
         <div className="bg-[#0a0a0c] border border-[white/10] shadow-[0_0_20px_rgba(139,92,246,0.15)] rounded-2xl p-5 flex flex-col items-center gap-4 relative z-10">
            <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-indigo-500 blur-sm absolute" />
            <div className="w-12 h-12 rounded-full relative z-10 bg-black flex items-center justify-center border border-white/20">
               <Zap size={18} className="text-[#8b5cf6]" />
            </div>
            <span className="text-white text-[12px] font-medium">Our solution</span>
         </div>

         {/* Data Lines */}
         <div className="flex-1 h-32 relative flex flex-col justify-center gap-6 px-2">
            {[1, 2, 3].map(i => (
               <div key={i} className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.4 }} 
                    className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent shadow-[0_0_10px_#8b5cf6]" 
                  />
               </div>
            ))}
         </div>

         {/* Your Stack */}
         <div className="bg-[#0a0a0c] border border-[white/5] rounded-2xl p-5 flex flex-col items-center gap-4 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700">
            <div className="w-12 h-12 rounded-[14px] bg-[#5865F2]/20 flex items-center justify-center border border-[#5865F2]/30">
               <MessageSquare size={20} className="text-[#5865F2]" />
            </div>
            <span className="text-white text-[12px] font-medium">Your stack</span>
         </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CARD 4: Continuous Optimization
// ---------------------------------------------------------
function ContinuousOptimizationCard() {
  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col h-full hover:border-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8b5cf6]/5 blur-[70px] pointer-events-none group-hover:bg-[#8b5cf6]/10 transition-colors" />
      <StepBadge step="Step 4" />
      <h3 className="text-white text-2xl font-bold mb-8">Continuous Optimization</h3>

      <div className="flex-1 w-full mt-auto space-y-3">
         <div className="bg-[#0a0a0c] border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.1)] rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
                     <MessageSquare size={14} />
                  </div>
                  <span className="text-white/90 text-[14px] font-medium">Chatbot system</span>
               </div>
               {/* Spinning Ring */}
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-5 h-5 rounded-full border-[2px] border-white/10 border-t-[#8b5cf6]" />
            </div>
            <div className="bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-mono px-3 py-1.5 rounded-lg w-fit">
               Efficiency will increase by 20%
            </div>
         </div>

         <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-4 flex items-center justify-between grayscale opacity-60">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50">
                   <Cog size={14} />
                </div>
                <span className="text-white/60 text-[14px] font-medium">Workflow system</span>
             </div>
             <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                <Shield size={10} className="text-white/40" />
             </div>
         </div>

         <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-4 flex items-center justify-between grayscale opacity-60">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50">
                   <Filter size={14} />
                </div>
                <span className="text-white/60 text-[14px] font-medium">Sales system</span>
             </div>
             <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                <Shield size={10} className="text-white/40" />
             </div>
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
    <section id="process" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1240px]">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono text-[11px] mb-6 tracking-widest uppercase">
            Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tight">
            <span className="text-[32px] md:text-[44px] lg:text-[52px] mr-3">Our Simple, Smart,</span>
            <span className="text-[32px] md:text-[44px] lg:text-[52px] text-gradient block">And Scalable Process.</span>
          </motion.h2>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
           <SmartAnalyzingCard />
           <AIDevelopmentCard />
           <SeamlessIntegrationCard />
           <ContinuousOptimizationCard />
        </div>

      </div>
    </section>
  );
}
