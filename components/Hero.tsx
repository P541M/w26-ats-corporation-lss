"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 50); return () => clearTimeout(t); }, []);

  const stats = [
    { value: "17",   label: "Weeks" },
    { value: "4+",   label: "Projects" },
    { value: "400+", label: "Parts Priced" },
    { value: "1",    label: "Flaw Escalated" },
  ];

  return (
    <section className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        {/* Eyebrow */}
        <div className={`mb-6 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-ats-blue-light" />
            <span className="text-ats-blue-light text-xs font-bold uppercase tracking-[0.2em]">
              Winter 2026 · University of Guelph
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <h1 className="text-white font-bold leading-[1.1] tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Toolset Software
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Developer Co-op
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-3 font-medium text-ats-blue-light">
              ATS Life Sciences Systems
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed">
            Building and maintaining the internal tooling that powers pricing, quoting,
            and data integrity across ATS Life Sciences Systems, Cambridge, Ontario.
          </p>
        </div>

        {/* Separator */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="w-full max-w-xl h-px bg-white/10" />
        </div>

        {/* Stats strip */}
        <div className={`transition-all duration-700 delay-300 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stats.map(({ value, label }, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-extrabold text-white leading-none tabular-nums">
                  {value}
                </span>
                <span className="text-ats-blue-light text-xs font-semibold uppercase tracking-widest mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-14 transition-all duration-700 delay-400 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <button
            onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 bg-white text-ats-blue-dark text-sm font-bold px-7 py-3.5 rounded-sm hover:bg-ats-blue-light hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ats-blue-dark uppercase tracking-wider"
          >
            Read the Report
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 delay-500 ${visible ? "opacity-40" : "opacity-0"}`}>
        <span className="text-white text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
