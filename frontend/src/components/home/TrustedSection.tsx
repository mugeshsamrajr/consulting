// src/components/sections/TrustedSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import Container from "../layout/Container";

interface CertificationLogo {
  id: string;
  name: string;
  meta: string;
}

const ACCREDITATION_LOGOS: CertificationLogo[] = [
  { id: "crest", name: "CREST", meta: "Penetration Testing Assurance" },
  { id: "pentest", name: "Pen Test", meta: "Certified Security Assessment" },
  { id: "ovs-mobile", name: "OVS Mobile", meta: "ASVS Mobile App Security" },
  { id: "ovs-apps", name: "OVS Apps", meta: "OWASP Application Verification" },
  { id: "pci-dss", name: "PCI DSS", meta: "Merchant Payment Security Standard" },
  { id: "bsi", name: "BSI Certification", meta: "ISO Information Governance" },
];

export default function TrustedSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 border-t border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <Container>
        
        {/* ================= HEADER INTRO BLOCK ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Our Experts are the Ones to Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Independently verified methodologies protecting your enterprise perimeter and regulatory compliance posture.
          </p>
        </div>

        {/* ================= INTERACTIVE FLIPPY CARDS GRID ================= */}
        {/* Increased perspective to 1200px to soften the rotation and make it feel lighter */}
        <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 [perspective:1200px]">
          {ACCREDITATION_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="group relative h-32 w-full cursor-pointer 
                         [transform-style:preserve-3d] 
                         will-change-transform
                         transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)
                         hover:[transform:rotateY(180deg)_scale(1.02)]"
            >
              
              {/* === FRONT SIDE === */}
              {/* Added isolate to separate stacking context; backface-visibility handles the offscreen hiding */}
              <div className="absolute inset-0 flex items-center justify-center p-4 rounded-2xl 
                              border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 
                              shadow-sm [backface-visibility:hidden] isolate">
                <span className="text-base font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                  {logo.name}
                </span>
                <div className="absolute bottom-2 right-3 text-[9px] font-medium text-slate-400/60 tracking-wider uppercase">
                  Hover
                </div>
              </div>

              {/* === BACK SIDE === */}
              {/* Uses identical rounding and bounds so GPU blends layers flawlessly */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 rounded-2xl 
                              border border-indigo-500/20 bg-slate-50 dark:bg-slate-900 text-center shadow-md
                              [backface-visibility:hidden] [transform:rotateY(180deg)] isolate">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-1">
                  {logo.name}
                </span>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 max-w-[90%] line-clamp-2">
                  {logo.meta}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* ================= INTERACTIVE CTA ACTION BUTTON ================= */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 dark:shadow-lg dark:shadow-indigo-600/10 transition-all duration-200"
          >
            Read Latest Case Studies 
            <span className="ml-2">→</span>
          </Link>
        </div>

      </Container>
    </section>
  );
}