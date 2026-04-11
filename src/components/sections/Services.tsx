"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, ArrowRight, Sparkles, Terminal, Search, Zap, Code, Shield, BarChart3, Clock, Video, GitBranch } from "lucide-react";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Row 1: Workflow Automation (Img Left, Text Right) */}
        <FeatureRow 
          subtitle="Workflow Automation"
          titleFirst="Automate"
          titleMain="Repetitive Tasks"
          description="Streamline your business operations with intelligent automated workflows that handle the heavy lifting and eliminate manual bottleneck."
          imageSide="left"
        >
          <WorkflowWidget />
        </FeatureRow>

        {/* Row 2: AI Assistant (Text Left, Img Right) */}
        <FeatureRow 
          subtitle="AI Assistant"
          titleFirst="Delegate"
          titleMain="Daily Routine"
          description="Our AI assistants integrate directly into your stack to manage schedules, responses, and routine checks with precision."
          imageSide="right"
        >
          <AssistantWidget />
        </FeatureRow>

        {/* Row 3: Sales & Marketing (Img Left, Text Right) */}
        <FeatureRow 
          subtitle="Sales & Marketing"
          titleFirst="Accelerate"
          titleMain="Sales Growth"
          description="AI-driven lead scoring and automated outreach systems that find and close deals while you sleep, maximizing your team's output."
          imageSide="left"
        >
          <SalesWidget />
        </FeatureRow>

        {/* Row 4: Custom Projects (Text Left, Img Right) */}
        <FeatureRow 
          subtitle="Custom Projects"
          titleFirst="Build"
          titleMain="Smarter Systems"
          description="Tailored AI solutions designed specifically for your unique business challenges, ensuring 100% logic alignment and scalability."
          imageSide="right"
        >
          <ProjectWidget />
        </FeatureRow>
      </div>
    </section>
  );
}

function FeatureRow({ subtitle, titleFirst, titleMain, description, imageSide, children }: any) {
  return (
    <div className={`flex flex-col ${imageSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 mb-32 last:mb-0`}>
      {/* Content Side */}
      <motion.div 
        variants={imageSide === 'left' ? slideInRight : slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex-1 w-full"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase">
          {subtitle}
        </div>
        <h2 className="font-display font-[800] text-white leading-[1.1] mb-8 tracking-tight">
          <span className="text-[32px] md:text-[44px] lg:text-[52px] mr-3">{titleFirst}</span>
          <span className="text-[32px] md:text-[44px] lg:text-[52px] text-gradient">{titleMain}</span>
        </h2>
        <p className="text-[17px] md:text-[18px] font-body text-text-secondary leading-relaxed mb-10 max-w-[500px]">
          {description}
        </p>
        <motion.button 
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-accent font-mono text-[13px] tracking-widest uppercase group/btn"
        >
          Learn more <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Visual Side */}
      <motion.div 
        variants={imageSide === 'left' ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex-1 w-full relative"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="aspect-[4/3] rounded-3xl bg-[#0F0F11] border border-[#27272A] p-1 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 opacity-40" />
          <div className="w-full h-full rounded-[20px] bg-[#09090B] p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
             {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Live Widgets ---

function WorkflowWidget() {
  const cards = [
    { title: "Payroll management", sub: "Due on 2nd july", status: "loading" },
    { title: "Employee Tracking", sub: "2 days ago", status: "done" },
    { title: "Social media post", sub: "Cancelled by user", status: "done" },
    { title: "Lead list", sub: "70% prepared", status: "loading" },
    { title: "Payment reminder", sub: "sent to selected clients", status: "done" }
  ];
  return (
    <div className="w-full h-[280px] bg-[#050505] flex flex-col relative overflow-hidden rounded-xl border border-white/5 shadow-2xl">
       <div className="flex gap-4 border-b border-white/5 pb-3 mb-4 mx-4 mt-4">
          <div className="text-[12px] text-white font-medium relative">
             All Tasks
             <div className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
          </div>
          <div className="text-[12px] text-white/40">Waiting for approval</div>
       </div>
       <div className="relative flex-1 overflow-hidden w-full">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#050505] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent z-10" />
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full px-4 space-y-3"
          >
             {[...cards, ...cards].map((card, i) => (
                <div key={i} className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3 flex justify-between items-center group">
                   <div className="flex flex-col">
                      <span className="text-white text-[13px] font-medium">{card.title}</span>
                      <span className="text-white/40 text-[10px] mt-0.5">{card.sub}</span>
                   </div>
                   {card.status === "loading" ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-4 h-4 rounded-full border-[2px] border-[#8b5cf6]/20 border-t-[#8b5cf6]" />
                   ) : (
                      <div className="w-4 h-4 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center">
                         <Check size={10} className="text-[#8b5cf6]" />
                      </div>
                   )}
                </div>
             ))}
          </motion.div>
       </div>
    </div>
  );
}

function AssistantWidget() {
  const [text, setText] = useState("");
  const phrase = "Schedule a meeting...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(phrase.substring(0, i));
      i++;
      if (i > phrase.length + 10) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-6 bg-[#050505] rounded-xl border border-white/5 overflow-hidden">
       <motion.div 
         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8b5cf6]/40 rounded-full blur-[60px] pointer-events-none" 
       />
       <div className="relative z-10 w-full flex flex-col items-center text-center mt-6">
          <h3 className="text-white text-[22px] font-display font-bold mb-1">What can I help with?</h3>
          <p className="text-white/40 text-[12px] mb-8">Weather you want help...</p>
          
          <div className="w-full bg-[#0a0a0c] border border-white/10 rounded-2xl p-4 flex items-center gap-2 mb-6 shadow-xl">
             <span className="text-white/80 text-[14px] font-mono">
               {text}
               <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-[2px] h-4 bg-[#8b5cf6] ml-1 align-middle text-glow" />
             </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
             {["+ Add document", "Analyze", "Generate Image", "Research"].map(btn => (
                <div key={btn} className="px-3 py-1.5 rounded-full border border-white/10 bg-[#0a0a0c] text-white/70 text-[11px] uppercase font-mono tracking-wide hover:bg-[#8b5cf6]/10 hover:text-white transition-colors cursor-pointer">
                   {btn}
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}

function SalesWidget() {
  return (
    <div className="w-full h-[280px] flex flex-col p-5 bg-[#050505] rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
       {/* Top Dynamic Bar */}
       <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3 flex items-center justify-between shadow-lg relative z-20 mb-4">
          <div className="flex items-center gap-3">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-4 h-4 rounded-full border-[2px] border-[#8b5cf6]/30 border-t-[#8b5cf6]" />
             <div className="flex flex-col">
                <span className="text-white text-[12px] font-medium">E-mail: justin@main.com</span>
                <span className="text-white/40 text-[9px]">Company: Xavier LLC</span>
             </div>
          </div>
          <span className="text-[#8b5cf6] text-[10px] font-mono whitespace-nowrap bg-[#8b5cf6]/10 px-2 py-1 rounded">E-mail Sending..</span>
       </div>

       {/* Tabs */}
       <div className="flex gap-2 w-full mb-4 z-20">
          <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 text-white shadow-[0_0_10px_rgba(139,92,246,0.15)] text-[11px] font-medium">Leads</div>
          <div className="px-4 py-1 rounded-md text-white/40 text-[11px] font-medium">Content</div>
          <div className="px-4 py-1 rounded-md text-white/40 text-[11px] font-medium">Social post</div>
       </div>

       {/* Scrolling Contact List */}
       <div className="relative flex-1 overflow-hidden z-20 mx-[-20px] px-5 mb-5">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#050505] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#050505] to-transparent z-10" />
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="space-y-2"
          >
             {[
               { name: "Gorge Chapel", title: "Founder", verified: true },
               { name: "Mike Tylor", title: "CEO", verified: false },
               { name: "Sarah Connor", title: "Marketing Head", verified: true }
             ].map((lead, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0a0a0c] border border-white/5 rounded-xl p-3 shadow-sm">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 text-[12px] font-bold">
                     {lead.name.split(' ').map(n=>n[0]).join('')}
                   </div>
                   <div className="flex flex-col flex-1">
                      <span className="text-white text-[12px] font-medium">{lead.name}</span>
                      <span className="text-white/40 text-[10px]">{lead.title}</span>
                   </div>
                   {lead.verified && (
                      <div className="w-4 h-4 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center">
                         <Check size={8} className="text-[#8b5cf6]" />
                      </div>
                   )}
                </div>
             ))}
             {/* Duplicate for infinite scroll */}
             {[
               { name: "Gorge Chapel", title: "Founder", verified: true },
               { name: "Mike Tylor", title: "CEO", verified: false },
               { name: "Sarah Connor", title: "Marketing Head", verified: true }
             ].map((lead, i) => (
                <div key={i + 3} className="flex items-center gap-3 bg-[#0a0a0c] border border-white/5 rounded-xl p-3 shadow-sm">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 text-[12px] font-bold">
                     {lead.name.split(' ').map(n=>n[0]).join('')}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white text-[13px] font-medium flex items-center">
                        {lead.name} 
                        {lead.verified && (
                          <span className="ml-1.5 w-3 h-3 rounded-full bg-[#8b5cf6] flex items-center justify-center"><Check size={8} className="text-white" strokeWidth={3}/></span>
                        )}
                      </span>
                      <span className="text-white/40 text-[10px]">{lead.title}</span>
                   </div>
                </div>
             ))}
          </motion.div>
       </div>

       {/* Bottom Status Tracker */}
       <div className="absolute bottom-5 left-5 right-5 z-20">
          <div className="relative w-full h-[2px] bg-white/10 rounded-full mx-auto">
             <motion.div 
               animate={{ left: ["0%", "50%", "100%", "50%", "0%"] }} 
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
               className="absolute top-1/2 -translate-y-1/2 -ml-2 w-4 h-4 rounded-full bg-[#8b5cf6] shadow-[0_0_12px_#8b5cf6]" 
             />
          </div>
          <div className="flex justify-between w-full mt-2 text-[10px] text-white/40 uppercase tracking-widest font-mono">
             <span>Draft</span>
             <span>Schedule</span>
             <span>Sent</span>
          </div>
       </div>
    </div>
  );
}

function ProjectWidget() {
  return (
    <div className="w-full h-[280px] flex flex-col p-5 bg-[#050505] rounded-xl border border-white/5 overflow-hidden relative shadow-2xl">
       {/* Dashboard Header */}
       <div className="mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-purple-400 p-[2px]">
             <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center border border-white/10">
                <span className="text-white font-bold text-[14px]">D</span>
             </div>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-bold leading-tight">Hey David!</h3>
            <p className="text-white/40 text-[10px]">Here is your Custom project & schedule</p>
          </div>
       </div>

       {/* Project Card */}
       <div className="bg-[#0a0a0c] border border-white/5 rounded-xl p-3 flex items-center gap-4 mb-4 shadow-lg relative z-20">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#8b5cf6]">
             <Terminal size={14} />
          </div>
          <div className="flex-1 flex flex-col">
             <span className="text-white text-[13px] font-medium">Customer Support Chatbot</span>
             <span className="text-[#8b5cf6] text-[10px] font-bold font-mono tracking-wider">90% Finsihed</span>
          </div>
          <div className="relative w-8 h-8 shrink-0">
             <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="w-full h-full -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <motion.circle 
                   cx="20" cy="20" r="16" fill="none" stroke="#8b5cf6" strokeWidth="3"
                   strokeDasharray="100" strokeLinecap="round"
                   initial={{ strokeDashoffset: 100 }}
                   animate={{ strokeDashoffset: 25 }}
                   transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                />
             </motion.svg>
          </div>
       </div>

       {/* Schedule Tracker */}
       <div className="mb-3">
          <div className="flex justify-between items-center gap-1 w-full">
             {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, idx) => (
                <div key={day} className={`flex-1 aspect-square rounded-md flex items-center justify-center text-[10px] font-medium border relative overflow-hidden ${idx === 3 ? 'bg-transparent text-white border-white/20' : 'bg-transparent text-white/40 border-white/5'}`}>
                   {idx === 3 ? (
                      <>
                         <motion.div 
                            animate={{ opacity: [0.1, 0.4, 0.1] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#8b5cf6]"
                         />
                         <motion.div 
                            animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px rgba(139,92,246,0)", "0 0 10px rgba(139,92,246,0.8)", "0 0 0px rgba(139,92,246,0)"] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 border border-[#8b5cf6] rounded-md"
                         />
                         <span className="relative z-10">{day}</span>
                      </>
                   ) : (
                      <span>{day}</span>
                   )}
                </div>
             ))}
          </div>
       </div>

       {/* Active Tasks list */}
       <div className="space-y-2 flex-1">
          <div className="flex items-center gap-3 bg-[#0a0a0c] border border-white/5 rounded-lg p-2.5">
             <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-white/50">
               <Video size={10} />
             </div>
             <div className="flex flex-col flex-1">
                <span className="text-white text-[11px] font-medium">Discovery call</span>
                <span className="text-white/30 text-[9px] font-mono">10:00 am - 10:30 am</span>
             </div>
          </div>
          <div className="flex items-center gap-3 bg-[#0a0a0c] border border-white/5 rounded-lg p-2.5">
             <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[#8b5cf6] shadow-[0_0_8px_rgba(139,92,246,0.3)]">
               <GitBranch size={10} />
             </div>
             <div className="flex flex-col flex-1">
                <span className="text-white text-[11px] font-medium">Custom automation</span>
                <span className="text-white/30 text-[9px] font-mono">06:00 pm - 06:30 pm</span>
             </div>
             <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
          </div>
       </div>
    </div>
  );
}
