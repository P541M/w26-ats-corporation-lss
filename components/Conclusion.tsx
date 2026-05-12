"use client";

import React, { useEffect, useState } from "react";

const ILLUMINATE_LINKEDIN_URL = "https://www.linkedin.com/posts/pevidena_surprise-my-4-month-term-at-ats-corporation-share-7454546445468184576-oiXf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj3VtwBhGW7VMlQLd8czaQqW_7Idb6PuZ8";

const Conclusion = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("conclusion");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const metrics = [
    { value: "17",   label: "Weeks" },
    { value: "4+",   label: "Projects Shipped" },
    { value: "400+", label: "Parts Priced" },
    { value: "1",    label: "Systemic Flaw Found" },
  ];

  const forward = [
    {
      title: "End-to-End System Ownership",
      body: "Continue building full-stack systems that span database design, business logic, and user-facing tooling, bridging raw data and operational decisions.",
    },
    {
      title: "Data-Driven Engineering",
      body: "Deepen the ability to extract signal from noisy datasets, design clean data pipelines, and build tooling that makes hidden insights visible.",
    },
    {
      title: "Process Automation at Scale",
      body: "Apply the automation mindset developed at ATS to larger, more complex workflows, using code to drive measurable efficiency gains across teams.",
    },
  ];

  return (
    <section id="conclusion" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="section-label">Reflections &amp; Future</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black leading-tight">
              A Term of Real<br />
              <span className="text-ats-blue">Impact &amp; Growth</span>
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed lg:text-right">
              17 weeks of building tools, analyzing data, and learning what it means
              to engineer software that a business actually depends on.
            </p>
          </div>
        </div>

        {/* Dark metrics band */}
        <div className={`mb-14 transition-all duration-700 delay-100 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="hero-bg rounded-sm py-10 px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {metrics.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums leading-none">{value}</div>
                  <div className="text-ats-blue-light text-xs font-bold uppercase tracking-widest mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── IMAGE PLACEHOLDER ─────────────────────────────────────────────
            Drop your photo at: public/images/work-term.jpg
            Recommended: a photo from your time at ATS — desk, lab, team, etc.
            Aspect ratio: 16:7 works well here
        ─────────────────────────────────────────────────────────────────── */}
        <div className={`relative w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-sm overflow-hidden mb-14 transition-all duration-700 delay-150 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <img
            src="/images/b3_v1.jpg"
            alt="ATS Life Sciences Systems"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-br from-ats-blue-dark/40 via-ats-blue/10 to-transparent pointer-events-none" />
        </div>

        {/* Two columns — reflections + looking forward */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-14 transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>

          {/* Reflections */}
          <div>
            <p className="section-label">Key Learnings</p>
            <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed">
              <p>
                This work term showed me what it means to build software that real people depend
                on every day. Every tool I touched, from VBA macros to a full quoting system
                replacement, was actively used by Sales and Applications teams to price parts
                and make business decisions. That accountability sharpened my attention to{" "}
                <span className="font-semibold text-ats-black">correctness, reliability, and clarity</span>.
              </p>
              <p>
                Discovering that the client pricing tier system was fundamentally broken, and
                taking that finding from raw data to a{" "}
                <span className="font-semibold text-ats-black">clear report for senior leadership</span>,{" "}
                was one of the most valuable experiences of the term. It reinforced that the
                best engineers aren&apos;t just good at writing code; they&apos;re good at knowing
                what to do with what they find.
              </p>
              <p>
                Working on the CPQ replacement also confirmed an engineering truth: the hardest part
                is usually not the code; it&apos;s understanding the{" "}
                <span className="font-semibold text-ats-black">constraints, history, and business logic</span>{" "}
                the old system carried. Taking time to understand those deeply made the
                replacement far more successful than moving fast would have.
              </p>
            </div>
          </div>

          {/* Looking forward */}
          <div>
            <p className="section-label">Looking Forward</p>
            <div className="divide-y divide-gray-100">
              {forward.map(({ title, body }) => (
                <div key={title} className="flex gap-5 py-5 first:pt-0">
                  <div className="w-0.75 bg-ats-blue rounded-full shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-ats-black mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className={`border-t border-gray-100 pt-12 transition-all duration-700 delay-300 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Quote */}
            <div>
              <p className="text-xl sm:text-2xl font-bold text-ats-black leading-tight mb-4">
                &ldquo;This term gave me technical skills I&apos;ll carry forward, but more importantly,
                it showed me what it looks like to be part of a team that takes quality seriously.&rdquo;
              </p>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                Psalm Eleazar Videna · ATS Life Sciences Systems · Winter 2026
              </p>
            </div>

            {/* What's next — Illuminate */}
            <div className="bg-blue-50 border border-ats-blue/20 border-l-4 border-l-ats-blue rounded-sm px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ats-blue mb-2">What&apos;s Next</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Following this term, I&apos;m continuing at ATS for a second 4-month rotation, this time
                as a Software Developer on the{" "}
                <span className="font-semibold text-ats-black">Illuminate</span> team. A new scope and a new challenge.{" "}
                {ILLUMINATE_LINKEDIN_URL ? (
                  <a
                    href={ILLUMINATE_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ats-blue font-semibold hover:underline"
                  >
                    Read about the transition on LinkedIn →
                  </a>
                ) : (
                  <span className="text-gray-400 italic">LinkedIn post coming soon.</span>
                )}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Conclusion;
