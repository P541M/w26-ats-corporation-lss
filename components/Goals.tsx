"use client";

import React, { useEffect, useState } from "react";

interface Goal {
  n: string;
  category: string;
  title: string;
  plan: string[];
  measure: string;
  skills: string[];
  reflection: string;
}

const GOALS: Goal[] = [
  {
    n: "01",
    category: "Literacy — Technological",
    title: "Gain working proficiency in the CPQ system and its integration with JD Edwards",
    plan: [
      "Spend the first two weeks analyzing the current quoting system codebase and database structure.",
      "Shadow a senior developer to observe how they troubleshoot data sync issues between CPQ and JDE.",
      "Complete at least 3 introductory development tickets, including bug fixes and small features, related to the quoting logic.",
    ],
    measure: "Deploying code fixes to the quoting system that pass QA and push to production without errors.",
    skills: ["CPQ Systems", "JD Edwards (JDE)", "Database Analysis", "QA Testing", "System Integration"],
    reflection:
      "I gained working knowledge of the CPQ system and its JDE integration through codebase analysis and shadowing senior developers. Pushing my first development tickets to production without QA errors was a major milestone. That foundation gave me the confidence to eventually build the full Excel replacement when the legacy tool was phased out.",
  },
  {
    n: "02",
    category: "Critical & Creative Thinking — Problem Solving",
    title: "Use Advanced Excel and VBA to automate manual data entry and calculation tasks in the quoting process",
    plan: [
      "Identify areas in the quoting workflow where users are manually copying and pasting data.",
      "Write VBA macros or advanced Excel formulas to automate these calculations or data transfers.",
      "Test automation against manual results to confirm 100% accuracy before team deployment.",
    ],
    measure: "A working Excel tool that reduces a specific quoting task from 15 minutes to under 2 minutes.",
    skills: ["VBA / Macro Development", "Advanced Excel Formulas", "Workflow Analysis", "Process Optimization"],
    reflection:
      "I identified bottlenecks in the quoting workflow that relied on manual data entry and automated them using VBA macros and advanced Excel formulas. Watching a 15-minute task drop to under 2 minutes was a clear demonstration that well-applied problem-solving has direct, measurable operational impact.",
  },
  {
    n: "03",
    category: "Literacy — Information",
    title: "Improve data accuracy by identifying, filtering, and cleaning inconsistent entries in the quoting system",
    plan: [
      "Regularly audit data logs between JDE and the quoting tool for discrepancies: duplicates, missing part numbers.",
      "Coordinate with the supervisor to correct specific data errors in the system.",
      "Update documentation to help users avoid entering dirty data in future.",
    ],
    measure: "Resolving data-related tickets and reducing reported data errors in my module.",
    skills: ["Data Auditing", "Error Detection", "JDE Data", "Documentation", "Data Cleaning"],
    reflection:
      "Maintaining data integrity between JDE and the CPQ tool became a core part of my workflow. My most significant finding was discovering that the client pricing tier system was fundamentally broken: clients across different pricing tiers were receiving identical prices, rendering the tier structure effectively meaningless. I documented the discrepancy and brought it to senior leadership, which triggered formal corrective action.",
  },
  {
    n: "04",
    category: "Communicating — Oral",
    title: "Gather and clarify software requirements directly from users to ensure my code solves their actual problems",
    plan: [
      "Before starting any complex task, discuss with the stakeholder exactly what they need the quoting tool to do.",
      "Ask clarifying questions during stand-ups when a requirement is vague.",
      "Demo work-in-progress to the team to gather early feedback before finalizing.",
    ],
    measure: "Delivering features accepted by the user on the first try because requirements were understood from the start.",
    skills: ["Requirements Elicitation", "Stakeholder Communication", "Demo Delivery", "Active Listening"],
    reflection:
      "Speaking with Sales and Applications teams before writing any code consistently clarified ambiguous requirements upfront. Demoing work-in-progress at stand-ups created early feedback loops. Because of this, the features I delivered were accepted on the first try across the term, avoiding costly rework and building trust with the teams I was serving.",
  },
  {
    n: "05",
    category: "Professional & Ethical — Time Management",
    title: "Manage my development workload using Jira and Kanban to meet sprint deadlines consistently",
    plan: [
      "Update ticket status in Jira every day.",
      "Break large features into daily tasks to maintain visible progress.",
      "Immediately communicate any technical blocker that might delay quoting system updates.",
    ],
    measure: "Completing assigned sprint tasks on time for the majority of the co-op term.",
    skills: ["Jira / Kanban", "Sprint Planning", "Task Decomposition", "Blocker Communication"],
    reflection:
      "Daily Jira discipline (breaking features into small tasks and keeping status current) was the foundation of consistent on-time delivery throughout the term. Whenever I hit a blocker (an undocumented JDE behavior, an unexpected data edge case), I escalated immediately rather than absorbing the delay silently. That combination of organization and transparency let me hit sprint targets consistently across 17 weeks.",
  },
];

const Goals = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const el = document.getElementById("goals");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <section id="goals" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="section-label">Learning &amp; Development</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black leading-tight">
              Five Goals,<br />
              <span className="text-ats-blue">Five Outcomes</span>
            </h2>
            <div className="lg:text-right">
              <p className="text-[15px] text-gray-500 leading-relaxed mb-3">
                The learning goals I set at the start of the term, the actions I took,
                and the reflections I carry forward from each.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-ats-blue uppercase tracking-widest">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                Click any row to expand
              </span>
            </div>
          </div>
        </div>

        {/* Goal rows */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          {GOALS.map((g, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`goal-row border-t border-gray-200 ${isOpen ? "is-open" : ""}`}
              >
                {/* Clickable header */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left group"
                >
                  <div className="grid grid-cols-[4rem_1fr_1.5rem] sm:grid-cols-[6rem_1fr_1.5rem] items-center gap-4 sm:gap-6 py-6">
                    {/* Number */}
                    <span className="goal-number">{g.n}</span>
                    {/* Title */}
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-ats-blue-light mb-1">
                        {g.category}
                      </p>
                      <h3 className="text-sm sm:text-base font-semibold text-ats-black leading-snug group-hover:text-ats-blue transition-colors duration-200">
                        {g.title}
                      </h3>
                    </div>
                    {/* Expand / close indicator */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      <svg
                        className={`w-5 h-5 transition-all duration-300 ${isOpen ? "rotate-180 text-ats-blue" : "text-ats-blue-light"}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`text-[9px] font-bold uppercase tracking-wider leading-none transition-colors duration-300 ${isOpen ? "text-ats-blue" : "text-gray-300"}`}>
                        {isOpen ? "Close" : "Open"}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-300" : "max-h-0"}`}>
                  <div className={`pb-8 pl-16 sm:pl-24 pr-6 grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isOpen ? "opacity-100 delay-200" : "opacity-0"}`}>

                    {/* Left: plan + measure */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Action Plan</p>
                        <ol className="space-y-2">
                          {g.plan.map((step, j) => (
                            <li key={j} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                              <span className="text-ats-blue font-bold shrink-0">{j + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Measure of Success</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{g.measure}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Skills Developed</p>
                        <div className="flex flex-wrap gap-2">
                          {g.skills.map((s) => (
                            <span key={s} className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-sm">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: reflection */}
                    <div className="border-l-2 border-ats-blue pl-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-ats-blue mb-3">Reflection</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g.reflection}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Final border */}
          <div className="border-t border-gray-200" />
        </div>

        {/* Takeaways */}
        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-700 delay-400 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          {[
            "The CPQ replacement showed that understanding a system's constraints and history is often harder, and more important, than the code itself.",
            "Communicating requirements before coding, not after, was the single greatest driver of first-try acceptance from stakeholders.",
            "Data auditing revealed a systemic pricing flaw: clean data is the foundation of every downstream business decision.",
            "Daily Jira discipline and immediate blocker escalation made consistent sprint delivery achievable across the full 17 weeks.",
          ].map((point, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-sm p-5">
              <span className="text-xs font-bold text-gray-200 tabular-nums leading-none mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Goals;
