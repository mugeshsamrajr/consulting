// src/app/page.tsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import CaseStudySection from "../components/home/CaseStudySection";
import TrustedSection from "../components/home/TrustedSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 selection:bg-indigo-500/30">
      {/* Ambient background vector glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.02] blur-[160px] pointer-events-none" />

      <main className="will-change-transform">
        {/* Hero Section loads immediately */}
        <div className="animate-fade-in-up">
          <HeroSection />
        </div>
        
        {/* Sequential staggered layout entrances */}
        <div className="animate-fade-in-up delay-100">
          <AboutSection />
        </div>
        
        <div className="animate-fade-in-up delay-200">
          <ServicesSection />
        </div>
        
        <div className="animate-fade-in-up delay-300">
          <CaseStudySection />
        </div>
        
        <div className="animate-fade-in-up delay-400">
          <TrustedSection />
        </div>
      </main>
    </div>
  );
}