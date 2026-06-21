// src/app/resources/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../../components/layout/Container";
import Breadcrumb from "../../components/navigation/Breadcrumb";
import { RESOURCES_DATA } from "../../constants/resourcesData";

const NAVIGATION_CATEGORIES = [
  { id: "all", label: "All Resources" },
  { id: "case-studies", label: "Case Studies" },
  { id: "blogs", label: "Expert Insights" },
  { id: "whitepapers", label: "White Papers" },
  { id: "checklists", label: "Checklists" },
];

export default function ResourcesDashboardPage() {
  const [activeTab, setActiveTab] = useState("all");

  const renderedItems = activeTab === "all"
    ? RESOURCES_DATA
    : RESOURCES_DATA.filter(item => item.category === activeTab);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      
      {/* ================= RESOURCE HERO ZONE ================= */}
      <section className="relative pt-24 pb-16 border-b border-slate-900/50 bg-gradient-to-b from-indigo-950/10 via-slate-950 to-slate-950">
        <Container>
          <div className="space-y-4 max-w-3xl">
            <Breadcrumb />
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Resource Hub & Framework Insights
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore real-world case studies, technical white papers, and compliance matrices designed to build operational resilience.
            </p>
          </div>

          {/* Frictionless Horizontal Pill Control Navigation for Mobile Dragging */}
          <div className="flex flex-wrap items-center gap-2 mt-12 border-b border-slate-900 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
            {NAVIGATION_CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-[11px] font-bold tracking-wider rounded-xl uppercase transition-all duration-300 active:scale-95 ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 scale-[1.02]"
                    : "bg-slate-900/50 text-slate-400 border border-slate-900 hover:text-white hover:border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= DYNAMIC VISUAL CARDS CONTAINER ================= */}
      <section className="py-12 bg-slate-950">
        <Container>
          {renderedItems.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-slate-900 rounded-3xl animate-[fadeIn_0.4s_ease-out]">
              <p className="text-slate-500 text-sm font-medium">No publications available in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {renderedItems.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative flex flex-col h-full bg-slate-900/20 border border-slate-900/80 rounded-3xl overflow-hidden hover:border-indigo-500/30 hover:bg-slate-900/40 transition-all duration-300 transform md:hover:-translate-y-1 active:scale-[0.99] md:active:scale-100 shadow-sm animate-[fadeIn_0.3s_ease-out]"
                >
                  {/* Card Header Thumbnail Media Mask */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-900/60">
                    <img 
                      src={item.bgImage} 
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-500 filter brightness-90 contrast-[1.01]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[9px] font-extrabold tracking-widest uppercase bg-slate-900/90 border border-white/5 backdrop-blur-md px-2 py-0.5 rounded text-indigo-400">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Text Description Payload Container */}
                  <div className="flex flex-col flex-1 p-5 space-y-3.5">
                    <div className="flex items-center gap-2.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h2 className="text-base font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed flex-1">
                      {item.excerpt}
                    </p>

                    {item.frameworks && (
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {item.frameworks.map((fw, idx) => (
                          <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-medium border border-slate-800/40">
                            {fw}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-3 border-t border-slate-900/60 flex items-center justify-between">
                      <Link 
                        href={`/resources/${item.category}/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors"
                      >
                        Read Deep Dive 
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}