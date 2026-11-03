import Link from "next/link";
import { Home, Layers, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[75vh] bg-black items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <span className="font-mono text-accent text-sm uppercase tracking-[0.25em] font-extrabold block">
          Error 404 &bull; Page Not Found
        </span>
        <h1 className="font-display font-[900] text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
          Route Does Not Exist.
        </h1>
        <p className="text-text-secondary text-base leading-relaxed max-w-md mx-auto">
          The destination you requested has moved or is not yet available in our Phase 1 release. Explore our verified technical routes below.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3.5 bg-accent text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
          >
            <Home size={14} />
            <span>Homepage</span>
          </Link>
          <Link
            href="/solutions"
            className="px-6 py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Layers size={14} />
            <span>Solutions Overview</span>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare size={14} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
