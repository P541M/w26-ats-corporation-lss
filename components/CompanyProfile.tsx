"use client";

import React, { useEffect, useState } from "react";
import StockTicker from "./StockTicker";

const CompanyProfile = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("company-profile");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const stats = [
    { value: "1978", label: "Founded" },
    { value: "23+",  label: "Global Sites" },
    { value: "7K+",  label: "Employees" },
    { value: "~$3B", label: "Revenue" },
  ];

  const points = [
    {
      label: "Life Sciences Systems",
      body: "Custom automation for medical device and pharmaceutical manufacturers: environments where precision and regulatory compliance are non-negotiable.",
    },
    {
      label: "End-to-End Delivery",
      body: "ATS designs, builds, and services its automation systems, meaning the teams I worked alongside were responsible for the full product lifecycle.",
    },
    {
      label: "Global Scale, Local Execution",
      body: "Operations span North America, Europe, and Asia-Pacific, yet each system is custom-engineered for the client's exact manufacturing requirements.",
    },
    {
      label: "Business Enablement",
      body: "The team I joined, Business Enablement, develops the internal tooling that keeps Sales, Applications, and Operations running accurately and efficiently.",
    },
  ];

  return (
    <section id="company-profile" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          {/* ATS logo in the section header */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ATS_logo.png" alt="ATS Corporation" className="h-8 object-contain mb-5" />
          <p className="section-label">About ATS Corporation</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black leading-tight">
              Automating the World&apos;s Most<br />
              <span className="text-ats-blue">Critical Industries</span>
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed lg:text-right">
              ATS Corporation is a global industrial automation leader, engineering
              custom solutions for life sciences, food & beverage, transportation, and more.
            </p>
          </div>
        </div>

        {/* ── IMAGE PLACEHOLDER ──────────────────────────────────────────
            Drop your photo at: public/images/ats-office.jpg
            Recommended: ATS Cambridge building, lab floor, or office interior
            Aspect ratio: 16:6 wide banner works great here
        ─────────────────────────────────────────────────────────────── */}
        <div className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-sm overflow-hidden mb-14 transition-all duration-700 delay-100 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <img
            src="/images/material_handling.jpg"
            alt="ATS Life Sciences Systems facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-br from-ats-blue-dark/40 via-ats-blue/10 to-transparent pointer-events-none" />
        </div>

        {/* Stock ticker */}
        <div className={`transition-all duration-700 delay-150 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <StockTicker />
        </div>

        {/* Stats strip */}
        <div className={`mb-14 transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200 border border-gray-200 rounded-sm bg-white">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-ats-blue-dark tabular-nums">{value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-column — about + points */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-700 delay-300 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>

          {/* Left — text */}
          <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed">
            <p>
              <span className="font-semibold text-ats-black">ATS Corporation</span> is one
              of the world&apos;s leading automation solutions providers. Founded in Cambridge,
              Ontario in 1978, ATS has grown into a multi-billion dollar enterprise serving
              clients across more than two dozen countries, from food &amp; beverage to electric
              vehicle manufacturing to medical devices.
            </p>
            <p>
              Within ATS,{" "}
              <span className="font-semibold text-ats-black">Life Sciences Systems (LSS)</span>{" "}
              focuses specifically on automation for medical device and pharmaceutical
              manufacturers. These environments require the highest precision, traceability,
              and regulatory compliance. The systems LSS builds reflect that.
            </p>
            <p>
              The{" "}
              <span className="font-semibold text-ats-black">Business Enablement team</span>{" "}
              I was part of sits inside LSS and builds the internal operational tooling that
              keeps Sales, Applications, and Operations running accurately: the quoting
              systems, pricing tools, and data pipelines that the business depends on daily.
            </p>
          </div>

          {/* Right — points list */}
          <div className="space-y-6">
            {points.map(({ label, body }) => (
              <div key={label} className="flex gap-5">
                <div className="w-0.75 bg-ats-blue rounded-full shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-ats-black mb-1">{label}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyProfile;
