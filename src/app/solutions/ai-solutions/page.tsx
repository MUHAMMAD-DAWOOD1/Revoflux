import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Bot, Database, Cpu, Lock, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom AI Solutions & Autonomous Agents",
  description: "Production-grade AI systems: autonomous multi-step agents, domain knowledge assistants, RAG pipelines, and deterministic heuristic scoring models.",
  alternates: {
    canonical: "https://revoflux.app/solutions/ai-solutions",
  },
};

const aiCapabilities = [
  {
    title: "Autonomous Multi-Step AI Agents",
    description: "Agents capable of executing sequential business tasks: fetching external APIs, validating parameters, making deterministic choices, and triggering downstream webhooks with human-in-the-loop oversight.",
    icon: Bot,
  },
  {
    title: "Domain Knowledge Assistants (RAG)",
    description: "Retrieval-augmented generation architectures indexed against your internal SOPs, documentation, or databases. Features context isolation and strict boundary guardrails.",
    icon: Database,
  },
  {
    title: "Model Integration & Fine-Tuning",
    description: "Integration of state-of-the-art open and proprietary foundation models (OpenAI, Anthropic Claude, Gemini, Llama). We optimize prompts, embeddings, and evaluate token costs.",
    icon: Cpu,
  },
  {
    title: "Predictive & Heuristic Scoring Engines",
    description: "Custom scoring algorithms that process structured customer or transaction data to predict conversion probability, flag fraud signals, and prioritize operations queues.",
    icon: Workflow,
  },
];

const boundaryGuarantees = [
  "Zero Customer Data used for Public Model Training",
  "Strict Output Schema Enforcement (JSON Schema / Zod Validation)",
  "Deterministic Fallbacks for Low-Confidence Inferences",
  "Comprehensive Audit Logging of All Model Prompts & Responses",
  "Role-Based Access Control on All Retrieval Endpoints"
];

export default function AISolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Sparkles size={13} />
              <span>Production AI Engineering</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              Custom AI Solutions &amp; <span className="text-gradient">Autonomous Agents.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed mb-10">
              We bridge the gap between experimental AI models and mission-critical production software. Deploy intelligent agents and knowledge assistants that operate within strict boundaries and deliver measurable business utility.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book-a-consultation"
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
              >
                <span>Discuss Your AI Requirements</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/work/demonstrations"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all text-center"
              >
                View Technical Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="max-w-2xl mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
              Capabilities
            </span>
            <h2 className="font-display font-[800] text-white text-[30px] md:text-[40px] tracking-tight leading-tight">
              Deterministic, Enterprise-Grade AI Systems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 font-display">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Boundary & Security Guardrails */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[11px] mb-6 uppercase tracking-wider font-semibold">
                  <Shield size={13} />
                  <span>Safety &amp; Compliance</span>
                </div>
                <h2 className="font-display font-[800] text-white text-[28px] md:text-[38px] tracking-tight leading-tight mb-6">
                  Zero Hallucinations. Guaranteed Data Boundaries.
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 font-body">
                  Most enterprise AI initiatives fail because models behave unpredictably in edge cases. We engineer deterministic wrappers around LLMs: every prompt is validated against strict JSON schemas, outputs are sanitized, and sensitive operational decisions always feature explicit approval logic.
                </p>
              </div>

              <div className="lg:col-span-6 bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 md:p-8 space-y-4">
                <span className="text-white font-mono text-xs uppercase tracking-widest block mb-4 font-bold flex items-center gap-2">
                  <Lock size={14} className="text-accent" />
                  <span>Our Security Commitments</span>
                </span>
                {boundaryGuarantees.map((guarantee, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-xs md:text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] text-center">
          <h2 className="font-display font-[900] text-white text-[32px] md:text-[44px] mb-6 tracking-tight">
            Ready to Deploy Custom AI into Your Operations?
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-10">
            Schedule an introductory consultation to discuss your specific business use case, evaluate API feasibility, and review architecture blueprints.
          </p>
          <Link
            href="/book-a-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
