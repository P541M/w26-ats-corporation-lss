"use client";

import React, { useEffect, useState } from "react";

const Acknowledgements = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("acknowledgements");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  const managers = [
    {
      initials: "NA",
      name: "Natalia Arias",
      role: "Business Enablement Lead",
      projects: ["CPQ System Overhaul", "Pricing Tier Analysis", "VBA Tools"],
      body: "Natalia gave me real ownership over meaningful work from day one. She trusted me with projects that mattered and created an environment where I could take initiative, ask questions, and learn from mistakes. Her feedback was always clear and constructive, and her support throughout the term gave me the confidence to tackle increasingly complex challenges.",
    },
    {
      initials: "SR",
      name: "Samrood Abu",
      role: "Manager, Business Analytics",
      projects: ["VBA Tool Optimization", "Amazon Parts Pricing"],
      body: "Through Natalia, I was connected with Samrood to collaborate on specific projects, and the experience was invaluable. He directed me on the VBA optimization work and managed the Amazon parts pricing initiative. Working with him gave me a different perspective on how the business operated across different teams, and his structured approach to prioritization shaped how I managed my own workload.",
    },
  ];

  const colleagues = [
    {
      initials: "AA",
      name: "Ama Al-Abassi",
      role: "System Platform Business Analyst",
      projects: ["CPQ Excel Replacement", "Pricing Tier Integrity Analysis"],
      body: "Ama was a key collaborator who directly shaped two of my most impactful projects. She directed the design of the CPQ Excel replacement, ensuring the system aligned with real business requirements, and worked alongside me on the pricing tier analysis that uncovered the systemic flaw. Her guidance and domain knowledge made both deliverables significantly stronger.",
    },
    {
      initials: "OM",
      name: "Om Patel",
      role: "Business Data Analyst Co-op",
      projects: ["Amazon Parts Pricing"],
      body: "Om was my co-worker on the Amazon parts pricing project under Samrood. Going through ~400 parts together, validating each one manually against market comparables, required clear coordination and mutual accountability. Having a reliable partner made the project both more accurate and more manageable.",
    },
    {
      initials: "D",
      name: "Daniela Acosta Roman",
      role: "Campus Recruiter",
      projects: ["Talent Acquisition"],
      body: "Daniela was the recruiter who brought me into ATS. Her clear communication throughout the hiring process made the transition into the role seamless. Without her, none of the work in this report would have happened.",
    },
  ];

  return (
    <section id="acknowledgements" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="section-label">Gratitude &amp; Appreciation</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ats-black leading-tight">
              The People Who Made<br />
              <span className="text-ats-blue">It Possible</span>
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed lg:text-right">
              My success at ATS Life Sciences Systems was shaped by the support,
              guidance, and collaboration of the people I worked alongside every day.
            </p>
          </div>
        </div>

        {/* Team photo */}
        <div className={`relative w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-sm overflow-hidden mb-14 transition-all duration-700 delay-100 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <img
            src="/images/b3_v2.jpg"
            alt="ATS Life Sciences Systems team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-br from-ats-blue-dark/40 via-ats-blue/10 to-transparent pointer-events-none" />
        </div>

        {/* Managers */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">Managers &amp; Supervisors</p>
          <div className="space-y-4">
            {managers.map(({ initials, name, role, projects, body }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-sm p-6 sm:p-7 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="grid grid-cols-1 lg:grid-cols-[11rem_1fr] gap-6 lg:gap-10 items-start">
                  {/* Left */}
                  <div className="shrink-0">
                    <div className="w-13 h-13 bg-ats-blue-dark rounded-sm flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-base">{initials}</span>
                    </div>
                    <h4 className="text-base font-bold text-ats-black">{name}</h4>
                    <p className="text-ats-blue text-sm font-medium mt-0.5">{role}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {projects.map((p) => (
                        <span key={p} className="text-[10px] font-semibold bg-blue-50 text-ats-blue px-2 py-0.5 rounded-sm">{p}</span>
                      ))}
                    </div>
                  </div>
                  {/* Right */}
                  <p className="text-[15px] text-gray-600 leading-relaxed border-l border-gray-100 pl-8 hidden lg:block">{body}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed lg:hidden">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colleagues */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">Colleagues &amp; Peers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {colleagues.map(({ initials, name, role, projects, body }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-sm p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-sm flex items-center justify-center shrink-0">
                    <span className="text-ats-blue font-bold text-xs">{initials}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-ats-black">{name}</h4>
                    <p className="text-ats-blue text-xs font-medium">{role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {projects.map((p) => (
                    <span key={p} className="text-[10px] font-semibold bg-blue-50 text-ats-blue px-2 py-0.5 rounded-sm">{p}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">Institutional Gratitude</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "ATS Life Sciences Systems",
                body: "Thank you for giving co-op students genuine responsibility. The opportunity to build tools the team actually uses — and to surface findings that influenced real business decisions — was more meaningful than I could have expected.",
              },
              {
                title: "University of Guelph Co-op",
                body: "Grateful to the Co-operative Education program for making this placement possible, and to Faculty Advisor Gregory Klotz, Co-op Coordinator Anne-Marie Zawadzki, and Co-op Advisor Katie Grierson for their support throughout the term.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-5">
                <div className="w-0.75 bg-ats-blue rounded-full shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-ats-black mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className={`border-t border-gray-200 pt-12 transition-all duration-700 delay-500 ${visible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <p className="text-xl sm:text-2xl font-bold text-ats-black max-w-2xl leading-tight mb-4">
            &ldquo;ATS has made me a better engineer and a better communicator, and that growth continues.&rdquo;
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ats-blue">
            <div className="w-4 h-0.5 bg-ats-blue rounded" />
            Forever Grateful
          </span>
        </div>

      </div>
    </section>
  );
};

export default Acknowledgements;
