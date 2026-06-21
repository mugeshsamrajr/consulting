"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Container from "../layout/Container";
import { heroSlides } from "../../constants/heroSlides";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // Function to clear existing timer safely
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle automatic sliding logic
  useEffect(() => {
    if (isHovered) {
      resetTimeout();
      return;
    }

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, SLIDE_DURATION);

    return () => {
      resetTimeout();
    };
  }, [activeIndex, isHovered]);

  return (
    <section 
      className="relative w-full h-[650px] lg:h-[750px] overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND IMAGE LAYER (Crossfades smoothly) */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-40 scale-100" : "opacity-0 scale-105"
            } transition-transform duration-[5000ms]`}
          >
            {/* Visual Tint Overlays for Security Theme */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 w-full h-full flex items-center">
        <Container>
          <div className="max-w-3xl">
            {/* Animated Meta Label */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-md backdrop-blur-sm animate-fade-in">
              {heroSlides[activeIndex].label}
            </span>

            {/* Main Heading Text */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl drop-shadow-md">
              {heroSlides[activeIndex].title}
            </h1>

            {/* Description Paragraph */}
            <p className="mt-6 text-base text-slate-300 sm:text-lg max-w-xl drop-shadow-sm">
              {heroSlides[activeIndex].description}
            </p>

            {/* Call to Actions & Controls Grid */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={heroSlides[activeIndex].href}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[var(--primary)]/30 transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5"
              >
                {heroSlides[activeIndex].buttonText}
              </Link>

              {/* Glassmorphic Navigation controls bar */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-xl backdrop-blur-md shadow-2xl">
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                
                {/* Active Progress Dots */}
                <div className="flex items-center gap-2 px-1">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 transition-all duration-500 rounded-full ${
                        index === activeIndex
                          ? "w-8 bg-[var(--primary)]"
                          : "w-2 bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}