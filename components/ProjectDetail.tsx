"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
  totalProjects: number;
  onNavigate: (direction: "prev" | "next") => void;
}

export default function ProjectDetail({
  project,
  totalProjects,
  onNavigate,
}: ProjectDetailProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const totalCount = String(totalProjects).padStart(2, "0");
  const currentStep = project.buildProcess[activeStepIndex] || project.buildProcess[0];

  return (
    <div className="w-full flex flex-col justify-between h-full text-xs font-mono">
      <div>
        {/* Detail Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#CFCAC0]">
          <span className="text-[#111110] font-medium tracking-widest uppercase">
            / WORK / {project.name}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#6E6B65] tracking-widest">
              {project.id} / {totalCount}
            </span>
            <div className="flex items-center gap-1 text-[#111110]">
              <button
                onClick={() => onNavigate("prev")}
                aria-label="Previous project"
                className="w-6 h-6 flex items-center justify-center hover:bg-[#E2DDD3] transition-colors rounded-none cursor-pointer"
              >
                &lt;
              </button>
              <button
                onClick={() => onNavigate("next")}
                aria-label="Next project"
                className="w-6 h-6 flex items-center justify-center hover:bg-[#E2DDD3] transition-colors rounded-none cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Project Title & Status */}
        <div className="pt-6 sm:pt-8 pb-4">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#111110] tracking-tight leading-none">
              {project.name}
            </h2>
            <div className="text-right pt-2 shrink-0">
              <div className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-[#111110] tracking-wider uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-[#B85D2A]" />
                {project.status}
              </div>
              <div className="font-mono text-xs text-[#6E6B65] tracking-widest mt-1">
                {project.year}
              </div>
            </div>
          </div>

          <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#111110] uppercase font-medium mt-3">
            {project.subtitle}
          </p>

          <p className="font-mono text-xs sm:text-sm text-[#6E6B65] leading-relaxed max-w-xl mt-6">
            {project.description}
          </p>
        </div>

        {/* Key Features & Tech Stack Two-Column Spec */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 py-6 border-t border-[#CFCAC0] mt-4">
          {/* Key Features */}
          <div className="sm:col-span-7">
            <h4 className="font-mono text-xs tracking-widest text-[#111110] uppercase font-medium mb-3">
              KEY FEATURES
            </h4>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-baseline gap-3 text-[#6E6B65]">
                  <span className="text-[11px] text-[#8C8880] shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#3A3834]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="sm:col-span-5 sm:border-l sm:border-[#CFCAC0] sm:pl-8">
            <h4 className="font-mono text-xs tracking-widest text-[#111110] uppercase font-medium mb-3">
              TECH STACK
            </h4>
            <div className="space-y-1.5">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="text-xs font-mono uppercase tracking-wider text-[#3A3834]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Project & GitHub Links */}
        <div className="flex items-center gap-6 sm:gap-8 py-4 border-t border-b border-[#CFCAC0] my-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111110] hover:text-[#B85D2A] transition-colors group"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>LIVE PROJECT</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          )}

          {project.liveUrl && project.githubUrl && (
            <span className="text-[#CFCAC0]">|</span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#111110] hover:text-[#B85D2A] transition-colors group"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GITHUB</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Build Process Section */}
      <div className="pt-6 mt-4">
        <div className="flex items-center justify-between pb-3 text-xs">
          <span className="text-[#111110] font-medium tracking-widest uppercase">
            / BUILD PROCESS
          </span>
          <span className="text-[#6E6B65] tracking-widest">
            {String(activeStepIndex + 1).padStart(2, "0")} / 04
          </span>
        </div>

        {/* 4 Interactive Process Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
          {project.buildProcess.map((stepItem, index) => {
            const isStepActive = index === activeStepIndex;
            return (
              <button
                key={stepItem.step}
                onClick={() => setActiveStepIndex(index)}
                className={`py-2 px-2.5 text-left border transition-all duration-150 cursor-pointer ${
                  isStepActive
                    ? "border-[#B85D2A] bg-[#E5E0D5]/60 text-[#111110]"
                    : "border-[#CFCAC0] text-[#6E6B65] hover:border-[#111110] hover:text-[#111110] bg-transparent"
                }`}
              >
                <div className="font-mono text-[10px] text-[#8C8880]">
                  {stepItem.step}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider font-medium">
                  {stepItem.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Description */}
        <div className="pt-3 min-h-[44px]">
          <p className="font-mono text-xs text-[#6E6B65] leading-relaxed">
            {currentStep.description}
          </p>
        </div>
      </div>
    </div>
  );
}
