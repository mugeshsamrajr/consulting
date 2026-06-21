// src/app/about/page.tsx
"use client";

import React from "react";
import Container from "../../components/layout/Container";
import InfoCard from "../../components/shared/InfoCard";
import Breadcrumb from "../../components/navigation/Breadcrumb";
import { 
  HERO_CONTENT, 
  LEFT_COLUMN_CARDS, 
  RIGHT_COLUMN_CARDS, 
  CORPORATE_MILESTONES, 
  CORE_FRAMEWORKS 
} from "../../constants/aboutData";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* ================= HERO BANNER: SLOW MOTION PARALLAX EFFECT ================= */}
      <section className="relative w-full h-[460px] lg:h-[520px] overflow-hidden flex items-center bg-slate-950">
        <div className="absolute inset-0 w-full h-full transform scale-105 animate-[pulse_8s_infinite_alternate] duration-1000">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <img
            src={HERO_CONTENT.bgImage}
            alt="Cyber Security Network"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-125 transition-transform duration-700"
          />
        </div>

        <div className="relative z-20 w-full transform transition-all duration-500 translate-y-0">
          <Container>
            <div className="max-w-3xl space-y-5 px-1">
              <div className="inline-block transform hover:translate-x-1 transition-transform duration-200">
                <Breadcrumb />
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-[fadeIn_0.6s_ease-out]">
                {HERO_CONTENT.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed drop-shadow-sm animate-[fadeIn_0.8s_ease-out]">
                {HERO_CONTENT.description}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= CAPABILITIES CONTENT INFRASTRUCTURE ================= */}
      <section className="bg-slate-950 py-16 lg:py-24 relative">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            
            {/* Left Content Dynamic Layout Stack */}
            <div className="space-y-8">
              {LEFT_COLUMN_CARDS.map((card, i) => (
                <div 
                  key={i} 
                  className="animate-glow-card transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 bg-slate-900/20 border border-slate-900/60 rounded-3xl p-1"
                >
                  <InfoCard title={card.title} subtitle={card.subtitle}>
                    <div className="space-y-6 text-slate-300">
                      {card.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed text-sm sm:text-base text-slate-400">{p}</p>
                      ))}
                      
                      {card.images && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 filter grayscale brightness-150 contrast-75 hover:grayscale-0 transition-all duration-500">
                          {card.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="bg-slate-900/50 p-3 rounded-xl border border-white/[0.02] flex items-center justify-center hover:bg-slate-900 transition-colors">
                              <img src={img.src} alt={img.alt} className="h-10 w-full object-contain transform hover:scale-105 transition-transform" />
                            </div>
                          ))}
                        </div>
                      )}

                      {card.quote && (
                        <blockquote className="rounded-2xl border-l-2 border-indigo-500 bg-indigo-950/20 p-5 shadow-inner text-slate-300 italic text-sm relative overflow-hidden group">
                          <div className="absolute -right-4 -bottom-4 text-6xl text-indigo-500/5 font-serif select-none pointer-events-none group-hover:scale-110 transition-transform">“</div>
                          {card.quote.text}
                          <span className="block mt-3 text-xs font-bold uppercase tracking-wider not-italic text-indigo-400">— {card.quote.author}</span>
                        </blockquote>
                      )}
                    </div>
                  </InfoCard>
                </div>
              ))}
            </div>

            {/* Right Content Dynamic Layout Stack */}
            <div className="space-y-8">
              {RIGHT_COLUMN_CARDS.map((card, i) => (
                <div 
                  key={i}
                  className="animate-glow-card transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 bg-slate-900/20 border border-slate-900/60 rounded-3xl p-1"
                >
                  <InfoCard title={card.title} subtitle={card.subtitle}>
                    <div className="space-y-6 text-slate-300">
                      {card.logo && (
                        <div className="p-1 inline-block bg-slate-900/40 rounded-xl border border-white/5 mb-2">
                          <img src={card.logo.src} alt={card.logo.alt} className="h-10 w-auto filter brightness-120" />
                        </div>
                      )}
                      
                      {card.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="leading-relaxed text-sm sm:text-base text-slate-400">{p}</p>
                      ))}

                      {card.note && (
                        <p className="text-xs text-slate-400 bg-slate-900/60 p-4 rounded-xl border border-white/[0.03] leading-relaxed">
                          {card.note}
                        </p>
                      )}
                    </div>
                  </InfoCard>
                </div>
              ))}

              {/* Corporate Timeline Milestones Wrapper */}
              <div className="bg-slate-900/20 border border-slate-900/60 rounded-3xl p-1 animate-glow-card">
                <InfoCard title="Our Corporate Milestones">
                  <div className="relative border-l border-slate-800/80 pl-5 space-y-6 py-2 ml-2">
                    {CORPORATE_MILESTONES.map((item, index) => (
                      <div key={index} className="relative group/item">
                        <div className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-slate-800 group-hover/item:bg-indigo-500 group-hover/item:scale-125 transition-all duration-300 ring-4 ring-slate-950" />
                        <h4 className="text-xs sm:text-sm font-bold text-white transition-colors group-hover/item:text-indigo-400">{item.year} — {item.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </InfoCard>
              </div>

              {/* Core Standards Badges */}
              <div className="bg-slate-900/20 border border-slate-900/60 rounded-3xl p-1 animate-glow-card">
                <InfoCard title="Core Standards & Frameworks">
                  <ul className="grid gap-2.5 text-xs sm:text-sm text-slate-300">
                    {CORE_FRAMEWORKS.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-white/[0.02] hover:border-slate-800 transition-colors group">
                        <span className="text-indigo-500 font-bold transform group-hover:scale-110 transition-transform">✓</span> 
                        <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </InfoCard>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}