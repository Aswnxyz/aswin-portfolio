"use client";

import React from "react";
import { Project } from "@/data/projects";

interface WorkListProps {
  projects: Project[];
  selectedProjectId: string;
  onSelectProject: (projectId: string) => void;
}

export default function WorkList({
  projects,
  selectedProjectId,
  onSelectProject,
}: WorkListProps) {
  const totalCount = String(projects.length).padStart(2, "0");

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between py-2.5 border-b border-[#CFCAC0] text-xs font-mono">
        <span className="text-[#111110] font-medium tracking-widest uppercase">
          / WORK
        </span>
        <span className="text-[#6E6B65] tracking-widest">
          [ {totalCount} PROJECTS ]
        </span>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-[#CFCAC0]">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;

          return (
            <button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className={`w-full text-left p-3 sm:p-4 my-1 transition-all duration-200 cursor-pointer block rounded-none group ${
                isSelected
                  ? "border border-[#B85D2A] bg-[#E5E0D5]/50 shadow-[inset_0_0_0_1px_rgba(184,93,42,0.2)]"
                  : "border border-transparent hover:border-[#CFCAC0] hover:bg-[#E6E1D6]/40"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                {/* Number & Name & Subtitle */}
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-mono text-xs text-[#6E6B65] tracking-widest">
                    {project.id}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111110] tracking-tight group-hover:translate-x-0.5 transition-transform duration-200">
                      {project.name}
                    </h3>
                    <p className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#6E6B65] uppercase mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Meta: Category, Status, Arrow */}
                <div className="flex items-center gap-3 sm:gap-6 text-right">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="font-mono text-[11px] text-[#6E6B65] tracking-wider">
                      [ {project.category} ]
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#111110] tracking-wider uppercase mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B85D2A]" />
                      {project.status}
                    </span>
                  </div>

                  <span className="font-mono text-base text-[#111110] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
