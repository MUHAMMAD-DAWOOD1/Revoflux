import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, Sparkles, Workflow, CheckCircle2, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Demonstrations & System Prototypes",
  description: "Explore Revoflux AI's technical demonstrations, architectural proofs, and working prototypes for autonomous agents, software systems, and automated pipelines.",
  alternates: {
    canonical: "https://revoflux.app/work/demonstrations",
  },
};

const demonstrations = [
  {
    id: "lead-pipeline",
    title: "Autonomous Multi-Source Lead Scoring & Enrichment Pipeline",
    classification: "Technical Demonstration",
    badge: "DEMO",
    summary: "An automated pipeline that ingests inbound business inquiries, queries multiple external enrichment APIs asynchronously, scores company fit with deterministic heuristic weights, and syncs enriched records to CRM with zero human intervention.",
    problem: "Sales operations teams manually spending 15+ minutes per inbound lead verifying company size, revenue tier, and industry fit before routing.",
    architecture: [
      "Next.js Route Handlers with rate limiting & secret validation",
      "Asynchronous webhook receivers with exponential retry queues",
      "Deterministic heuristic scoring engine (Zod schema validated)",
      "CRM API sync with bi-directional conflict resolution"
    ],
    technicalStack: ["TypeScript", "Node.js", "Redis Queue", "REST APIs"],
    status: "Reproducible Demonstration Lab Pattern",
    icon: Workflow,
  },
  {
    id: "knowledge-assistant",
    title: "Context-Aware Knowledge Assistant with Strict Guardrails",
    classification: "Working Prototype",
    badge: "PROTOTYPE",
    summary: "An enterprise domain knowledge assistant utilizing retrieval-augmented generation (RAG) over indexed markdown documentation. Features rigorous boundary guardrails that prevent hallucinations and context escape.",
    problem: "Generic LLM assistants answering customer policy questions with hallucinated terms or unauthorized data disclosures.",
    architecture: [
      "Vector embeddings generated over chunked technical documentation",
      "Cosine similarity retrieval with similarity threshold filters",
      "Input / Output boundary guardrails preventing prompt injection",
      "Streaming server-sent events (SSE) interface with latency tracking"
    ],
    technicalStack: ["OpenAI API", "Pinecone Vector DB", "LangChain / Custom RAG", "React Streaming"],
    status: "Working Interactive Prototype",
    icon: Sparkles,
  },
  {
    id: "saas-engine",
    title: "Resilient Multi-Tenant SaaS Engine with Distributed Billing",
    classification: "Internal Architecture",
    badge: "ARCHITECTURE",
    summary: "A production-tested baseline for multi-tenant software platforms featuring tenant schema isolation, JWT session management, role-based access control (RBAC), and webhook-driven Stripe billing lifecycles.",
    problem: "Startups and software teams spending 3+ months rebuilding boilerplate auth, tenancy, and billing logic before creating proprietary product value.",
    architecture: [
      "Multi-tenant PostgreSQL schema isolation via Prisma ORM",
      "Secure cookie session management with CSRF protection",
      "Idempotent Stripe webhook receiver handling upgrades and cancellations",
      "Audit logging for administrative mutations"
    ],
    technicalStack: ["Next.js App Router", "PostgreSQL", "Prisma", "Stripe API", "Tailwind CSS"],
    status: "Internal Architectural Standard",
    icon: Database,
  },
];

export default function DemonstrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
              <Terminal size={13} />
              <span>Evidence &amp; Proof</span>
            </div>
            <h1 className="font-display font-[900] text-white leading-[1.05] text-[36px] sm:text-[50px] md:text-[64px] tracking-tight mb-8">
              Technical Demonstrations &amp; <span className="text-gradient">Architectural Proof.</span>
            </h1>
            <p className="font-body text-text-secondary text-[18px] md:text-[20px] leading-relaxed mb-6">
              We believe technical capability is best demonstrated through verifiable architectures, working prototypes, and reproducible system patterns.
            </p>
            <div className="bg-[#050505] border border-white/10 rounded-2xl p-5 text-xs text-text-muted font-mono leading-relaxed max-w-2xl">
              <span className="text-white font-bold block mb-1">Our Evidence Standard:</span>
              Every item below is clearly classified by evidence type. We do not publish fictional case studies, anonymous vanity metrics, or unverified client logos.
            </div>
          </div>
        </div>
      </section>

      {/* Demonstrations List */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px] space-y-16">
          {demonstrations.map((demo) => {
            const Icon = demo.icon;
            return (
              <div
                key={demo.id}
                id={demo.id}
                className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-accent font-mono text-xs uppercase tracking-widest font-bold block">
                        {demo.classification}
                      </span>
                      <span className="text-text-muted text-xs font-mono">
                        Status: {demo.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase bg-white/5 text-text-secondary border border-white/10 px-3 py-1 rounded-full w-fit">
                    {demo.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column (Span 7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-white font-display font-bold text-2xl md:text-3xl tracking-tight">
                      {demo.title}
                    </h2>

                    <div className="space-y-2">
                      <span className="text-accent font-mono text-xs uppercase tracking-wider font-semibold block">
                        The Operational Challenge:
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {demo.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-accent font-mono text-xs uppercase tracking-wider font-semibold block">
                        The Architectural Solution:
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {demo.summary}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                      {demo.technicalStack.map((tech, i) => (
                        <span key={i} className="text-[11px] font-mono bg-[#0a0a0c] border border-white/10 text-white/80 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architecture Specifications (Span 5) */}
                  <div className="lg:col-span-5 bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 md:p-8">
                    <span className="text-white font-mono text-xs uppercase tracking-widest block mb-6 font-bold flex items-center gap-2">
                      <Terminal size={14} className="text-accent" />
                      <span>Architecture Breakdown</span>
                    </span>

                    <ul className="space-y-4">
                      {demo.architecture.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-xs md:text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Building in Public Notice */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1240px] 2xl:max-w-[1400px]">
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-white font-display font-bold text-2xl md:text-3xl mb-4 tracking-tight">
              Want a Tailored Demonstration for Your Use Case?
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              We frequently build rapid proof-of-concept prototypes to validate API feasibility and logic flows before committing to full production scope.
            </p>
            <Link
              href="/book-a-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-extrabold text-sm rounded-xl hover:bg-accent-hover transition-all"
            >
              <span>Discuss a Custom Prototype</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
