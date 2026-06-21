// src/components/sections/ServicesSection.tsx
"use client";

import React from "react";
import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";
import { services } from "../../constants/services";

export default function ServicesSection() {
  return (
    <section className="bg-[var(--surface)] py-24 transition-colors duration-700">
      <Container>
        
        {/* ================= HEADER TITLE BLOCK ================= */}
        <SectionTitle
          subtitle="Our Services"
          title="Consultancy & Security Services"
        />

        {/* ================= INTERACTIVE SERVICES GRID ================= */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service: any) => (
            <div
              key={service.id}
              className="group relative h-48 w-full cursor-pointer rounded-2xl overflow-hidden
                         border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 
                         p-6 flex flex-col items-center justify-center text-center shadow-sm 
                         transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1)
                         hover:border-indigo-500/40 dark:hover:border-violet-500/40 hover:shadow-xl"
            >
              
              {/* === MULTI-COLOR RADIAL GRADIENT MESH LAYER === */}
              {/* Layer 1: Indigo glow coming from the bottom-right */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none
                              bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_60%)]
                              dark:bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.2),transparent_60%)]" />

              {/* Layer 2: Violet glow coming from the top-left */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none delay-75
                              bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_50%)]
                              dark:bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_50%)]" />

              {/* Layer 3: Subtle Emerald accent flash from the center-bottom */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none delay-100
                              bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.04),transparent_40%)]
                              dark:bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_40%)]" />


              {/* === FRONT SIDE (Title Only) === */}
              {/* Fast snap out execution so user doesn't wait for text to clear */}
              <div className="transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) 
                              group-hover:scale-90 group-hover:opacity-0 group-hover:blur-[2px]">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                  {service.title}
                </h3>
                <div className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
                  View Details
                </div>
              </div>


              {/* === BACK SIDE (Full Details) === */}
              {/* Smooth delay added here to let the front side clear out first before scaling text in */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center z-10
                              opacity-0 scale-95 transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) delay-75
                              group-hover:scale-100 group-hover:opacity-100">
                <h4 className="text-sm font-bold text-violet-600 dark:text-violet-400 tracking-wider uppercase mb-2">
                  {service.title}
                </h4>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 max-w-[95%] line-clamp-4 leading-relaxed">
                  {service.description}
                </p>
              </div>


              {/* === GRADIENT BOTTOM HIGHLIGHT LINE === */}
              {/* Transitions nicely through the colors using a linear gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] 
                              bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500 
                              transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)" />

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}