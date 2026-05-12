"use client";

import React, { useState, useEffect, useMemo } from "react";
import ATSLogo from "./ATSLogo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  const navItems = useMemo(
    () => [
      { href: "#introduction",     label: "Introduction" },
      { href: "#company-profile",  label: "Company" },
      { href: "#job-description",  label: "Role" },
      { href: "#goals",            label: "Goals" },
      { href: "#conclusion",       label: "Conclusion" },
      { href: "#acknowledgements", label: "Thanks" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navItems.map((i) => i.href.slice(1));
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* 3px brand stripe at very top */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-ats-blue z-50" />

      <nav
        className={`fixed top-[3px] left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[61px]">

            {/* Brand */}
            <div className="flex items-center gap-3 shrink-0">
              <ATSLogo size="sm" mark />
              <div>
                <p className="text-xs font-bold text-ats-black leading-none tracking-wide uppercase">ATS LSS</p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">W26 Work Term</p>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none rounded ${
                      isActive ? "text-ats-blue" : "text-gray-500 hover:text-ats-black"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-ats-blue rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded text-gray-500 hover:text-ats-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`h-0.5 bg-current block transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`h-0.5 bg-current block transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-current block transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
          <div className="px-4 pb-4 pt-2 border-t border-gray-100 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`w-full text-left px-3 py-3 rounded text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive ? "text-ats-blue bg-blue-50" : "text-gray-600 hover:text-ats-black hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
