import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Revoflux AI",
  description: "Revoflux AI's privacy policy outlining data collection, transmission security, and data protection practices.",
  alternates: {
    canonical: "https://revoflux.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent font-mono text-[11px] mb-8 uppercase tracking-widest font-semibold">
          <Shield size={13} />
          <span>Legal &amp; Compliance</span>
        </div>
        <h1 className="font-display font-[900] text-white text-3xl md:text-5xl tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-12">
          Effective Date: November 4, 2026 &bull; Revoflux AI
        </p>

        <div className="space-y-10 text-text-secondary text-sm md:text-base leading-relaxed font-body">
          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">1. Overview</h2>
            <p>
              Revoflux AI (&quot;Revoflux&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides intelligent software engineering, autonomous AI agent architecture, and business workflow integration services. This Privacy Policy describes how we collect, use, and protect information submitted through our website at <Link href="/" className="text-accent underline">revoflux.app</Link>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">2. Information We Collect</h2>
            <p>
              We only collect personal information that you voluntarily provide to us when contacting us, requesting an architecture consultation, or subscribing to engineering insights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-sm">
              <li><strong>Contact Information:</strong> Full name, professional email address, company name, and project scope details provided through our contact and consultation forms.</li>
              <li><strong>Scheduling Details:</strong> Information supplied when booking a strategy call via our integrated Calendly scheduling portal.</li>
              <li><strong>Technical Metadata:</strong> Anonymized server logs, browser types, and approximate geographic locations collected for system diagnostics and DDoS prevention.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">3. AI Data Boundaries &amp; Non-Retention</h2>
            <p className="text-white font-medium">
              Strict Non-Training Guarantee:
            </p>
            <p>
              We strictly enforce client data sovereignty. Client proprietary workflows, schemas, business data, and project communications are never used to train or fine-tune public foundation AI models. Any custom model integration uses enterprise-tier private APIs with zero-data-retention agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">4. Use of Information</h2>
            <p>We use submitted information exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-sm">
              <li>Evaluate project requirements and respond to your direct inquiries.</li>
              <li>Schedule, host, and follow up regarding architecture consultation sessions.</li>
              <li>Send requested engineering newsletters (with instantaneous one-click unsubscribe links).</li>
              <li>Ensure website security and comply with applicable regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">5. Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We disclose information only to vetted infrastructure service providers (e.g., hosting providers, transactional email processors) who operate under strict non-disclosure and data protection terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">6. Security &amp; Retention</h2>
            <p>
              We utilize TLS 1.3 encryption for all data in transit, role-based access control, and environment isolation. Inquiries are retained only as long as necessary to fulfill project evaluation or commercial engagement purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white font-display font-bold text-xl">7. Your Rights &amp; Inquiries</h2>
            <p>
              You have the right to request access to, correction of, or permanent deletion of your personal data held by Revoflux. For any privacy requests, contact us directly at <a href="mailto:revoflux.ai@gmail.com" className="text-accent underline">revoflux.ai@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
