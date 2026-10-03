import React from "react";
import { BUILD_SHEET_META } from "@/data/projects";

export default function Intro() {
  return (
    <div className="pt-2 pb-8 sm:pb-12">
      {/* Editorial Name with Burnt Copper Dot */}
      <div className="flex items-baseline">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#111110] leading-none">
          ASWIN A<span className="text-[#B85D2A] inline-block font-sans ml-0.5">.</span>
        </h1>
      </div>

      {/* Role */}
      <div className="mt-3 sm:mt-4">
        <div className="text-sm sm:text-base font-mono tracking-[0.25em] text-[#111110] uppercase font-medium">
          FULL-STACK
        </div>
        <div className="text-sm sm:text-base font-mono tracking-[0.25em] text-[#111110] uppercase font-medium">
          DEVELOPER
        </div>
      </div>

      {/* Core Idea & Categories Matrix */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#111110] uppercase font-medium">
            {BUILD_SHEET_META.coreIdea}
          </span>
          <span className="w-[1.5px] h-4 bg-[#B85D2A]" />
        </div>

        {/* Technical Bracketed Disciplines */}
        <div className="text-[11px] font-mono text-[#6E6B65] leading-relaxed tracking-wider">
          <div className="flex items-start gap-1.5">
            <span className="text-[#CFCAC0]">[</span>
            <div className="flex flex-col">
              {BUILD_SHEET_META.categories.map((category) => (
                <span key={category} className="tracking-widest">
                  {category}
                </span>
              ))}
            </div>
            <span className="text-[#CFCAC0] self-end">]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
