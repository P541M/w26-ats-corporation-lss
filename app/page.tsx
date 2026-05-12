import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CompanyProfile from "@/components/CompanyProfile";
import JobDescription from "@/components/JobDescription";
import Goals from "@/components/Goals";
import Conclusion from "@/components/Conclusion";
import Acknowledgements from "@/components/Acknowledgements";
import ATSLogo from "@/components/ATSLogo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <CompanyProfile />
      <JobDescription />
      <Goals />
      <Conclusion />
      <Acknowledgements />

      {/* Footer */}
      <footer className="hero-bg py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ATSLogo size="md" mark white />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ats-blue-light mb-1">
                  Winter 2026 Work Term Report
                </p>
                <p className="text-white/50 text-xs">
                  Psalm Eleazar Videna · Toolset Software Developer Co-op · ATS Life Sciences Systems
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[11px] text-white/30 font-medium">
              <span>ATS Corporation</span>
              <span>·</span>
              <span>University of Guelph</span>
              <span>·</span>
              <span>© 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
