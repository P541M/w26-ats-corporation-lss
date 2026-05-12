"use client";

import React, { useEffect, useState } from "react";

const Introduction = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("introduction");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const meta = [
    { label: "Role",         value: "Toolset Software Developer Co-op" },
    { label: "Division",     value: "Life Sciences Systems (LSS)" },
    { label: "Organization", value: "ATS Corporation" },
    { label: "Location",     value: "Cambridge, Ontario" },
    { label: "Duration",     value: "Jan 5 – Apr 30, 2026  ·  17 weeks" },
    { label: "Supervisor",   value: "Natalia Arias, Business Enablement Lead" },
  ];

  return (
    <section id="introduction" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column: text + portrait video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text + meta */}
          <div className={`transition-all duration-700 ${visible ? "animate-fade-in-left opacity-100" : "opacity-0"}`}>
            <p className="section-label">Introduction</p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black mb-8 leading-tight">
              Building the Tools That<br />
              <span className="text-ats-blue">Power the Business</span>
            </h2>

            <div className="space-y-5 text-[15px] sm:text-base text-gray-600 leading-relaxed mb-10">
              <p>
                From January to April 2026, I worked as a{" "}
                <span className="font-semibold text-ats-black">Toolset Software Developer Co-op</span>{" "}
                at ATS Corporation&apos;s Life Sciences Systems division in Cambridge, Ontario.
                My team sits at the intersection of operations and technology, developing the
                internal tooling that Sales, Applications, and Operations rely on every day
                to quote and price manufactured parts.
              </p>
              <p>
                When a legacy quoting tool was scheduled for phase-out with no migration path
                ready, I helped build the full replacement in Excel, replicating all pricing
                logic across dozens of part characteristics and shipping it as the production
                system. I also conducted the data analysis that uncovered a systemic flaw in
                the client pricing tier structure, surfacing findings that triggered corrective
                action at the senior leadership level.
              </p>
              <p>
                This report covers the four major projects I shipped, the five learning goals
                I pursued, and the reflections I carry forward from 17 weeks of building
                software that the business actually depended on.
              </p>
            </div>

            {/* Meta table */}
            <div className="border-t border-gray-100">
              {meta.map(({ label, value }) => (
                <div key={label} className="flex gap-4 py-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 w-24 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-sm text-ats-black font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait video */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "animate-fade-in-right opacity-100" : "opacity-0"} flex flex-col items-center`}>
            <div className="w-full max-w-80 lg:max-w-96 mx-auto">

              {/* Device frame */}
              <div className="rounded-sm overflow-hidden border-2 border-ats-blue shadow-2xl shadow-ats-blue/20">

                {/* Frame header bar */}
                <div className="hero-bg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-ats-blue-light animate-pulse" />
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                      ATS LSS · W26 Co-op
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-red-400 tracking-widest">● REC</span>
                </div>

                {/* Video */}
                <div className="aspect-9/16 bg-ats-blue-dark">
                  <video
                    autoPlay
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/ATS_corp_video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className={`mt-20 pt-12 border-t border-gray-100 transition-all duration-700 delay-400 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Toolset Engineering", body: "Built and replaced the quoting system used daily by the Sales and Applications teams." },
              { n: "02", title: "Data Analysis", body: "Discovered a systemic pricing flaw and brought it to senior leadership, triggering corrective action." },
              { n: "03", title: "Process Automation", body: "Reduced manual quoting tasks from 15+ minutes to under 2 minutes through VBA and Excel automation." },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-5">
                <span className="text-3xl font-extrabold text-gray-100 leading-none shrink-0 tabular-nums">{n}</span>
                <div>
                  <h4 className="text-sm font-bold text-ats-black mb-1">{title}</h4>
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

export default Introduction;
