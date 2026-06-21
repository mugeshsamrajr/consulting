// src/app/contact/page.tsx
"use client";

import React from "react";
import Container from "../../components/layout/Container";
import ContactForm from "../../components/forms/ContactForm";
import Breadcrumb from "../../components/navigation/Breadcrumb";
import { CONTACT_HERO, CONTACT_SECTIONS } from "../../constants/contactData";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative w-full h-[380px] flex items-center bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <img
            src={CONTACT_HERO.bgImage}
            alt="Get in Touch"
            className="w-full h-full object-cover filter brightness-40 contrast-115"
          />
        </div>

        <div className="relative z-20 w-full">
          <Container>
            <div className="max-w-3xl space-y-3">
              
              {/* REUSABLE DYNAMIC BREADCRUMB INSTANCE */}
              <Breadcrumb />
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                {CONTACT_HERO.title}
              </h1>
              <p className="text-base text-slate-200 sm:text-lg max-w-xl leading-relaxed">
                {CONTACT_HERO.description}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ================= INTERACTIVE WORKSPACE SECTION ================= */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24 transition-colors duration-200">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left Layout Grid: Office Locations */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Corporate Office Card Block */}
              <div className="space-y-4 p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                  {CONTACT_SECTIONS.office.title}
                </h2>
                <div className="space-y-1 text-slate-600 dark:text-slate-300 not-italic">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {CONTACT_SECTIONS.office.name}
                  </h3>
                  {CONTACT_SECTIONS.office.addressLines.map((line, idx) => (
                    <p key={idx} className="text-slate-600 dark:text-slate-300">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
                  {CONTACT_SECTIONS.comms.title}
                </h2>
                <div className="space-y-4">
                  <a 
                    href={`tel:${CONTACT_SECTIONS.comms.phoneRaw}`} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 transition-all duration-200 group"
                  >
                    <span className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                      📞
                    </span>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">{CONTACT_SECTIONS.comms.phoneLabel}</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{CONTACT_SECTIONS.comms.phone}</p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${CONTACT_SECTIONS.comms.email}`} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 transition-all duration-200 group"
                  >
                    <span className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                      ✉️
                    </span>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">{CONTACT_SECTIONS.comms.emailLabel}</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{CONTACT_SECTIONS.comms.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Feedback Alert Block */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/60 shadow-sm dark:shadow-none">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {CONTACT_SECTIONS.feedback.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {CONTACT_SECTIONS.feedback.description}
                </p>
              </div>
            </div>

            {/* Right Layout Grid: Contact Form Card Wrapper */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 p-8 rounded-3xl shadow-md dark:shadow-none backdrop-blur-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {CONTACT_SECTIONS.form.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {CONTACT_SECTIONS.form.description}
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}