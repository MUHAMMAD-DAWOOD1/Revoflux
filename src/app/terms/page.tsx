import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Revoflux AI",
  description: "Terms and conditions governing the use of Revoflux AI's website and software engineering consulting services.",
  alternates: {
    canonical: "https://revoflux.app/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
          <FileText size={13} />
          <span>Legal &amp; Terms</span>
        </div>
        <h1 className="font-display font-[900] text-white text-3xl md:text-5xl tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-12">
          Effective Date: November 4, 2026 &bull; Revoflux AI
        </p>

        <div className="space-y-10 text-text-secondary text-sm md:text-base leading-relaxed font-body">
          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">1. Acceptance of Terms</h2>
            <p>
              By accessing or using <Link href="/" className="text-accent underline">revoflux.app</Link>, you agree to be bound by these Terms of Service. If you do not agree to these terms, you should immediately cease use of this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">2. Professional Consulting &amp; Engineering Services</h2>
            <p>
              All software development, AI architecture, and workflow automation services rendered by Revoflux are governed by explicit Statements of Work (SOW) and Master Services Agreements (MSA) executed separately between Revoflux and the client. Nothing on this website constitutes a binding unilateral contract or warranty of deliverables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">3. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-sm">
              <li><strong>Website Materials:</strong> All logos, marks, brand identity, text, illustrations, and original source code on this website are the proprietary property of Revoflux AI and protected by intellectual property laws.</li>
              <li><strong>Custom Client Deliverables:</strong> As governed by formal client contracts, clients retain full ownership of custom code, business logic, workflows, and intellectual property produced specifically under an executed agreement.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">4. Disclaimers &amp; Limitations of Liability</h2>
            <p>
              This website and its demonstrative materials are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. While we strive for extreme accuracy, Revoflux makes no representation regarding uninterrupted uptime or error-free web operations.
            </p>
            <p>
              In no event shall Revoflux AI or its founders be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">5. Governing Law &amp; Contact</h2>
            <p>
              These terms are governed by applicable commercial laws. For inquiries regarding these terms or formal engagement agreements, please contact us at <a href="mailto:revoflux.ai@gmail.com" className="text-accent underline">revoflux.ai@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
