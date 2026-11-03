import type { Metadata } from "next";
import Link from "next/link";
import { Check, Home, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquiry Received | Thank You",
  description: "Thank you for contacting Revoflux AI. A senior systems engineer will review your project specifications and follow up within 24 business hours.",
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center py-24 px-6 text-center">
      <div className="bg-[#050505] border border-white/10 rounded-3xl p-10 md:p-16 max-w-xl mx-auto shadow-2xl">
        <div className="w-16 h-16 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
          <Check size={32} />
        </div>
        <h1 className="font-display font-[900] text-white text-3xl md:text-4xl tracking-tight mb-4">
          Inquiry Successfully Received
        </h1>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          Thank you for reaching out to Revoflux AI. Your project specifications have been dispatched to our engineering team. We review all inbound requirements and respond within 24 business hours.
        </p>

        <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-5 mb-8 text-left space-y-2 text-xs font-mono text-text-muted">
          <div className="flex justify-between">
            <span className="text-white/60">Expected Review Time:</span>
            <span className="text-accent">&lt; 24 Business Hours</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Reviewing Team:</span>
            <span className="text-white">Systems Architecture Lead</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3.5 bg-accent text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
          >
            <Home size={14} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/solutions"
            className="px-6 py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Layers size={14} />
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
