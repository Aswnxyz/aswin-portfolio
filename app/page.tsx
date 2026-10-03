"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import WorkList from "@/components/WorkList";
import ProjectDetail from "@/components/ProjectDetail";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { PROJECTS, BUILD_SHEET_META } from "@/data/projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"work" | "about" | "contact">("work");
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  const selectedProject =
    PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab("work");
    // On mobile, scroll smoothly to the detail panel
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const detailEl = document.getElementById("mobile-detail-panel");
      if (detailEl) {
        detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleNavigateProject = (direction: "prev" | "next") => {
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProjectId);
    if (direction === "prev") {
      const prevIndex =
        currentIndex === 0 ? PROJECTS.length - 1 : currentIndex - 1;
      setSelectedProjectId(PROJECTS[prevIndex].id);
    } else {
      const nextIndex =
        currentIndex === PROJECTS.length - 1 ? 0 : currentIndex + 1;
      setSelectedProjectId(PROJECTS[nextIndex].id);
    }
  };

  const handleTabChange = (tab: "work" | "about" | "contact") => {
    setActiveTab(tab);
    // On mobile, scroll to the detail/content panel
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const targetEl = document.getElementById("mobile-detail-panel");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#EBE8DF] text-[#111110] flex flex-col font-mono selection:bg-[#B85D2A] selection:text-[#EBE8DF]">
      {/* Minimal Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        year={BUILD_SHEET_META.contact.year}
      />

      {/* Main Technical Document Sheet */}
      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
          {/* ========================================================= */}
          {/* LEFT PANEL: Technical Axis + Intro + WorkList + Contact Teaser */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-row pr-0 lg:pr-8 xl:pr-10 lg:border-r lg:border-[#CFCAC0]">
            {/* Technical Vertical Margin Axis (01, +, 02, +, 03, ·) */}
            <div className="hidden sm:flex flex-col items-center w-8 shrink-0 select-none mr-4 text-xs font-mono text-[#6E6B65]">
              {/* Section 01 Marker */}
              <span className="font-mono text-xs tracking-wider">01</span>
              <div className="w-[1px] h-16 bg-[#CFCAC0] my-2" />
              {/* Crosshair + */}
              <div className="text-[#8C8880] text-sm leading-none">+</div>
              <div className="w-[1px] flex-1 min-h-[140px] bg-[#CFCAC0] my-2" />

              {/* Section 02 Marker */}
              <span className="font-mono text-xs tracking-wider">02</span>
              <div className="w-[1px] h-20 bg-[#CFCAC0] my-2" />
              {/* Crosshair + */}
              <div className="text-[#8C8880] text-sm leading-none">+</div>
              <div className="w-[1px] flex-1 min-h-[140px] bg-[#CFCAC0] my-2" />

              {/* Section 03 Marker */}
              <span className="font-mono text-xs tracking-wider">03</span>
              <div className="w-[1px] h-12 bg-[#CFCAC0] my-2" />
              {/* Terminal Dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C8880]" />
            </div>

            {/* Left Content Column */}
            <div className="flex-1 flex flex-col justify-between w-full">
              <div>
                {/* 01: INTRO */}
                <section aria-label="Introduction">
                  <Intro />
                </section>

                {/* 02: WORK LIST */}
                <section aria-label="Projects List" className="mt-4 sm:mt-6">
                  <WorkList
                    projects={PROJECTS}
                    selectedProjectId={selectedProjectId}
                    onSelectProject={handleSelectProject}
                  />
                </section>
              </div>

              {/* 03: CONTACT TEASER */}
              <section
                aria-label="Contact Section"
                className="pt-8 sm:pt-12 pb-6 mt-8 border-t border-[#CFCAC0]"
              >
                <div className="flex items-center justify-between pb-3 text-xs font-mono">
                  <span className="text-[#111110] font-medium tracking-widest uppercase">
                    / CONTACT
                  </span>
                  <span className="text-[#6E6B65] tracking-widest text-[11px]">
                    [ {BUILD_SHEET_META.contact.status} ]
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111110] tracking-tight leading-snug">
                      Let&apos;s build
                      <br />
                      something great
                      <span className="text-[#B85D2A] font-sans">.</span>
                    </h2>
                  </div>

                  <button
                    onClick={() => handleTabChange("contact")}
                    className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111110] hover:text-[#B85D2A] transition-colors py-2 cursor-pointer self-start sm:self-auto group"
                  >
                    <span>→</span>
                    <span className="underline underline-offset-4 group-hover:text-[#B85D2A]">
                      GET IN TOUCH
                    </span>
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL: Project Detail / About / Contact Detail Sheet */}
          {/* ========================================================= */}
          <div
            id="mobile-detail-panel"
            className="lg:col-span-6 xl:col-span-7 pt-8 lg:pt-0 lg:pl-8 xl:pl-10 mt-6 lg:mt-0 border-t lg:border-t-0 border-[#CFCAC0]"
          >
            {activeTab === "work" && (
              <ProjectDetail
                key={selectedProject.id}
                project={selectedProject}
                totalProjects={PROJECTS.length}
                onNavigate={handleNavigateProject}
              />
            )}

            {activeTab === "about" && (
              <About onBackToWork={() => setActiveTab("work")} />
            )}

            {activeTab === "contact" && (
              <Contact onBackToWork={() => setActiveTab("work")} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
