"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What types of solutions does Revoflux AI build?",
    a: "Revoflux engineers three primary solution families: custom AI systems (including autonomous agents, LLM pipelines, and predictive models), custom software development (SaaS platforms, web applications, and APIs), and enterprise workflow automation (connecting disconnected tools, CRMs, and operational pipelines)."
  },
  {
    q: "How does Revoflux ensure data privacy and security with AI models?",
    a: "We implement strict data isolation boundaries. Proprietary business data is never exposed to public LLM training sets. All systems leverage enterprise-grade private model APIs, localized vector embeddings, encryption in transit and at rest, and role-based access control."
  },
  {
    q: "How does the engagement and delivery process work?",
    a: "Every engagement begins with a discovery and feasibility analysis to define requirements, architecture, and success criteria. We then proceed through modular bi-weekly engineering sprints, providing staging previews, rigorous testing, and seamless deployment with full documentation."
  },
  {
    q: "Can Revoflux integrate with our existing technology stack?",
    a: "Yes. Our solutions are designed to connect cleanly with your existing software stack, including custom REST/GraphQL APIs, databases (PostgreSQL, MySQL, MongoDB), CRMs (HubSpot, Salesforce), ERPs, and cloud infrastructure (AWS, GCP, Vercel, Netlify)."
  },
  {
    q: "What is the typical timeline for an AI or software project?",
    a: "Timelines depend on project scope. Focused workflow automations and initial AI assistant prototypes typically deploy within 2 to 4 weeks. Full-scale custom web applications, SaaS platforms, or multi-agent systems are delivered in staged milestone releases over 6 to 12 weeks."
  },
  {
    q: "What happens after deployment? Do you provide ongoing maintenance?",
    a: "Yes. We provide continuous observability, performance monitoring, model evaluation, and maintenance retainers to ensure your systems remain fast, secure, and adapted to evolving business requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[840px]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent font-mono text-[11px] mb-6 tracking-widest uppercase font-semibold">
            Common Inquiries
          </div>
          <h2 className="font-display font-[900] text-white leading-[1.1] mb-6 tracking-tight text-[32px] md:text-[46px] lg:text-[54px]">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-body text-text-secondary leading-relaxed">
            Direct answers regarding our technical capabilities, security standards, and delivery process.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button 
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-colors focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-bold text-[16px] md:text-[18px] text-white pr-6 group-hover:text-accent transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  openIndex === index ? "bg-accent/15 border-accent/40" : "bg-white/5 border-white/10"
                }`}>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="text-accent" size={16} />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-6 pr-8 text-[14px] md:text-[15px] font-body text-text-secondary leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-text-muted text-sm mb-3">Have a specific technical question or custom architecture need?</p>
          <Link
            href="/contact"
            className="text-accent hover:underline font-mono text-xs uppercase tracking-wider font-semibold inline-block"
          >
            Speak directly with our engineering team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
