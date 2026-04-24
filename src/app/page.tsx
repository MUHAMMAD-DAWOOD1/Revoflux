"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Works = dynamic(() => import("@/components/sections/Works"));
const Benefits = dynamic(() => import("@/components/sections/Benefits"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner"));

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Works />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
