// src/app/resources/[category]/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Container from "../../../../components/layout/Container";
import Breadcrumb from "../../../../components/navigation/Breadcrumb";
import { RESOURCES_DATA } from "../../../../constants/resourcesData";

export default function DeepDiveResourceReaderPage() {
  const params = useParams();
  
  const article = RESOURCES_DATA.find(
    (item) => item.id === params.id && item.category === params.category
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      
      {/* ================= COMPONENT HEADER SECTION ================= */}
      <header className="relative py-20 border-b border-slate-900 bg-slate-900/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent" />
        <Container>
          <div className="max-w-4xl space-y-4">
            <Breadcrumb />
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-indigo-400 uppercase tracking-widest pt-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">{article.categoryLabel}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{article.date}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{article.readTime}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed max-w-3xl pt-2">
                {article.subtitle}
              </p>
            )}
          </div>
        </Container>
      </header>

      {/* ================= EDITORIAL GRID LAYOUT ================= */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column: Core Document Content Mapping */}
            <article className="lg:col-span-8 space-y-12">
              {article.content.map((section, idx) => (
                <div key={idx} className="space-y-4 group">
                  <h2 className="text-xl font-bold tracking-tight text-white border-l-2 border-indigo-500 pl-4 group-hover:text-indigo-400 transition-colors">
                    {section.sectionTitle}
                  </h2>
                  
                  <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="space-y-2.5 pt-2 pl-4">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                          <span className="text-indigo-500 mt-1 flex-shrink-0 text-xs">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.quote && (
                    <blockquote className="my-6 rounded-2xl border border-slate-900 bg-slate-900/30 p-6 italic text-slate-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-7xl font-serif text-indigo-500/5 select-none translate-x-2 -translate-y-4">“</div>
                      <p className="relative z-10 text-sm sm:text-base leading-relaxed">
                        "{section.quote.text}"
                      </p>
                      <span className="block mt-3 text-xs font-bold uppercase tracking-wider not-italic text-indigo-400">
                        — {section.quote.author}
                      </span>
                    </blockquote>
                  )}
                </div>
              ))}
            </article>

            {/* Right Column: Sticky Document Metadata Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
                  Document Metadata
                </h3>
                
                {article.clientName && (
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Target Entity</p>
                    <p className="text-sm font-semibold text-white">{article.clientName}</p>
                  </div>
                )}

                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Publication Date</p>
                  <p className="text-sm font-semibold text-white">{article.date}</p>
                </div>

                {article.frameworks && (
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Evaluated Criteria</p>
                    <div className="flex flex-wrap gap-1.5">
                      {article.frameworks.map((fw, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {article.clientUrl && (
                  <div className="pt-2 border-t border-slate-800/60">
                    <a 
                      href={article.clientUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center text-center items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-sm"
                    >
                      Visit Corporate Portal ↗
                    </a>
                  </div>
                )}
              </div>

              {/* Back to Hub Nav Link */}
              <div className="px-2">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                >
                  ← Return to Knowledge Hub
                </Link>
              </div>
            </aside>

          </div>
        </Container>
      </section>
    </main>
  );
}