"use client";

import React, { useEffect, useState } from "react";

type Tab = "responsibilities" | "skills" | "projects";

const JobDescription = () => {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<Tab>("responsibilities");

  useEffect(() => {
    const el = document.getElementById("job-description");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const responsibilities = [
    {
      title: "Quoting System Overhaul",
      body: "When the legacy CPQ tool was phased out with no migration path, I built the full replacement in Excel, replicating all pricing logic across dozens of part characteristics. Worked closely with Ama, who directed the design and ensured the new system aligned with business requirements. It went live as the production system.",
    },
    {
      title: "VBA Tool Optimization & Documentation",
      body: "Under Samrood's direction, I refactored a VBA macro to query a more reliable JDE data source, improving output accuracy. Deep-dived an undocumented internal platform and wrote the first reference guide for it, handing it off to the incoming co-op.",
    },
    {
      title: "Amazon Parts Pricing Research",
      body: "Managed by Samrood and working alongside fellow intern Om, we went through ~400 manufactured parts sold to Amazon, using external pricing tools to research market comparables and curate the most competitive price per item.",
    },
    {
      title: "Pricing Tier Integrity Analysis",
      body: "Collaborated with Ama to build an Excel tool that extracted pre-approved pricing by client rank. Together we discovered that clients across different pricing tiers were receiving identical prices, a systemic flaw, and escalated the finding to senior leadership.",
    },
    {
      title: "Stakeholder Requirements & Delivery",
      body: "Gathered requirements directly from Sales and Applications teams before each development task. Demoed work-in-progress at stand-ups. Delivered features accepted by stakeholders on the first try.",
    },
  ];

  type SkillCategory = "Excel & VBA" | "Data & Systems" | "Process & Tooling" | "Communication";
  const skills: Record<SkillCategory, string[]> = {
    "Excel & VBA":       ["Advanced Formulas", "VBA Macro Dev", "Data Validation", "Pivot Tables", "Workbook Architecture"],
    "Data & Systems":    ["JD Edwards (JDE)", "SQL Querying", "Data Cleaning", "CPQ Systems", "Pricing Analysis"],
    "Process & Tooling": ["Jira / Kanban", "Sprint Planning", "Technical Writing", "Knowledge Transfer"],
    "Communication":     ["Requirements Gathering", "Stakeholder Demos", "Stand-up Participation", "Cross-team Collaboration"],
  };

  const projects = [
    {
      n: "01",
      title: "CPQ Excel Replacement",
      duration: "~6 weeks",
      impact: "Zero quoting downtime during tool transition",
      body: "The existing quoting tool was slated for phase-out with no migration path ready. I designed and built a comprehensive Excel replacement from scratch, working closely with Ama who directed the design to ensure it matched business requirements. The system replicated all pricing logic across dozens of part characteristics and shipped as the production system while the permanent solution was evaluated.",
      tech: ["Excel (Advanced)", "VBA", "JDE Data", "CPQ Logic"],
    },
    {
      n: "02",
      title: "Amazon Manufactured Parts Pricing",
      duration: "~3 weeks",
      impact: "~400 parts repriced with market-validated data",
      body: "ATS needed competitive pricing on manufactured parts for Amazon, one of its largest clients. Directed by Samrood and working alongside fellow intern Om, we went through ~400 parts manually, using external pricing tools to research market comparables and curate the optimal price per item, producing a structured pricing dataset ready for system entry.",
      tech: ["Excel", "External Pricing Tools", "Data Curation"],
    },
    {
      n: "03",
      title: "Pricing Tier Integrity Discovery",
      duration: "~2 weeks",
      impact: "Systemic flaw escalated — corrective action initiated",
      body: "Working with Ama, I built an Excel tool to extract and compare pre-approved prices across client pricing ranks. Analysis revealed that clients across different pricing tiers were receiving identical prices, rendering the tier structure effectively meaningless. We documented the discrepancy together and presented it to senior leadership, which triggered a formal corrective action.",
      tech: ["Excel", "Data Analysis", "JDE Pricing Data"],
    },
    {
      n: "04",
      title: "VBA Optimization & Documentation",
      duration: "~2 weeks",
      impact: "Improved data reliability + first internal docs written",
      body: "Under Samrood's direction, I refactored an internal VBA tool that was querying an outdated JDE table to instead use a more accurate data source. I also deep-dived a platform with no existing documentation and wrote the first internal reference guide, handing off institutional knowledge to the next co-op.",
      tech: ["VBA", "JDE", "Excel", "Technical Writing"],
    },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "responsibilities", label: "Responsibilities" },
    { id: "skills",           label: "Skills & Tools" },
    { id: "projects",         label: "Projects" },
  ];

  return (
    <section id="job-description" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="section-label">My Role at ATS</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black leading-tight">
              Toolset Software Developer Co-op
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed lg:text-right">
              Designing, building, and improving the internal tools that power pricing
              and quoting operations across ATS Life Sciences Systems.
            </p>
          </div>
        </div>

        {/* Underline tab nav */}
        <div className={`mb-10 border-b border-gray-200 transition-all duration-700 delay-100 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="flex gap-0">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`relative px-5 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                  tab === id ? "text-ats-blue" : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {label}
                {tab === id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ats-blue" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content — key triggers remount + fade-in on every tab switch */}
        <div key={tab} className={`transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>

          {/* Responsibilities */}
          {tab === "responsibilities" && (
            <div className="divide-y divide-gray-100">
              {responsibilities.map(({ title, body }, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[2rem_1fr] gap-x-6 gap-y-1 py-6">
                  <span className="text-xs font-bold text-gray-400 tabular-nums pt-0.5 hidden sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ats-black mb-1.5">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {tab === "skills" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(Object.entries(skills) as [SkillCategory, string[]][]).map(([cat, items]) => (
                <div key={cat} className="border-l-2 border-ats-blue pl-5 py-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="text-xs font-medium bg-blue-50 text-ats-blue px-3 py-1 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {tab === "projects" && (
            <div className="space-y-0 divide-y divide-gray-100">
              {projects.map(({ n, title, duration, impact, body, tech }) => (
                <div key={n} className="grid grid-cols-1 lg:grid-cols-[5rem_1fr_14rem] gap-6 py-8">
                  {/* Number */}
                  <div>
                    <span className="text-4xl font-extrabold text-gray-400 tabular-nums leading-none">{n}</span>
                  </div>
                  {/* Body */}
                  <div>
                    <h3 className="text-base font-bold text-ats-black mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{body}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.map((t) => (
                        <span key={t} className="text-xs font-medium bg-blue-50 text-ats-blue px-3 py-1 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="space-y-3 lg:pl-6 lg:border-l lg:border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Duration</p>
                      <p className="text-sm font-semibold text-ats-black">{duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Impact</p>
                      <p className="text-sm font-semibold text-ats-blue">{impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
