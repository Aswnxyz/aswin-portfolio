"use client";

import React, { useState } from "react";
import { BUILD_SHEET_META } from "@/data/projects";

interface AboutProps {
  onBackToWork?: () => void;
}

export default function About({ onBackToWork }: AboutProps) {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      step: "01",
      phase: "IDEA",
      description:
        "Understand the core mechanics, product requirements, and technical constraints before writing a single line of code.",
    },
    {
      step: "02",
      phase: "SYSTEM",
      description:
        "Architect clean relational/document data models, low-latency event flows, and predictable state transitions.",
    },
    {
      step: "03",
      phase: "BUILD",
      description:
        "Write typed, accessible, and maintainable software with sharp typography and zero gratuitous dependencies.",
    },
    {
      step: "04",
      phase: "SHIP",
      description:
        "Deliver fast, resilient production artifacts optimized for performance, uptime, and real-world utility.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between h-full text-xs font-mono">
      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#CFCAC0]">
          <span className="text-[#111110] font-medium tracking-widest uppercase">
            / ABOUT / {BUILD_SHEET_META.name}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#6E6B65] tracking-widest">SPECIFICATION</span>
            {onBackToWork && (
              <button
                onClick={onBackToWork}
                className="text-[#111110] hover:text-[#B85D2A] transition-colors underline cursor-pointer"
              >
                [ VIEW WORK ]
              </button>
            )}
          </div>
        </div>

        {/* Identity & Statement */}
        <div className="pt-6 sm:pt-8 pb-4">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#111110] tracking-tight leading-none">
              {BUILD_SHEET_META.name}
            </h2>
            <div className="text-right pt-2 shrink-0">
              <div className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-[#111110] tracking-wider uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-[#B85D2A]" />
                ACTIVE
              </div>
              <div className="font-mono text-xs text-[#6E6B65] tracking-widest mt-1">
                {BUILD_SHEET_META.contact.year}
              </div>
            </div>
          </div>

          <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#111110] uppercase font-medium mt-3">
            {BUILD_SHEET_META.role}
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#111110] font-normal italic leading-relaxed max-w-xl mt-6">
            &ldquo;{BUILD_SHEET_META.tagline}&rdquo;
          </p>
        </div>

        {/* Two-Column Technical Capabilities & Supported Tech */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 py-6 border-t border-[#CFCAC0] mt-4">
          {/* Capabilities */}
          <div className="sm:col-span-7">
            <h4 className="font-mono text-xs tracking-widest text-[#111110] uppercase font-medium mb-3">
              PRIMARY DISCIPLINES
            </h4>
            <div className="space-y-2">
              {[
                "FULL-STACK WEB APPLICATIONS",
                "REAL-TIME SYSTEMS & WEBSOCKETS",
                "DATABASE SCHEMA & DATA MODELING",
                "CLIENT-SIDE STATE & ARCHITECTURE",
                "RESPONSIVE TECHNICAL INTERFACES",
                "CONTAINERIZED WORKFLOWS",
              ].map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-3 text-[#6E6B65]">
                  <span className="text-[11px] text-[#8C8880] shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#3A3834]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Stack */}
          <div className="sm:col-span-5 sm:border-l sm:border-[#CFCAC0] sm:pl-8">
            <h4 className="font-mono text-xs tracking-widest text-[#111110] uppercase font-medium mb-3">
              SUPPORTED STACK
            </h4>
            <div className="space-y-1.5">
              {BUILD_SHEET_META.techStack.map((tech) => (
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

        {/* Categories Bar */}
        <div className="flex items-center gap-4 py-4 border-t border-b border-[#CFCAC0] my-2 text-xs font-mono text-[#6E6B65]">
          <span className="text-[#111110] uppercase font-medium">FOCUS:</span>
          {BUILD_SHEET_META.categories.map((cat, idx) => (
            <React.Fragment key={cat}>
              {idx > 0 && <span className="text-[#CFCAC0]">/</span>}
              <span className="tracking-widest uppercase text-[#3A3834]">{cat}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Build Principles */}
      <div className="pt-6 mt-4">
        <div className="flex items-center justify-between pb-3 text-xs">
          <span className="text-[#111110] font-medium tracking-widest uppercase">
            / PRINCIPLES
          </span>
          <span className="text-[#6E6B65] tracking-widest">
            {principles[activePrinciple].step} / 04
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
          {principles.map((p, idx) => {
            const isActive = idx === activePrinciple;
            return (
              <button
                key={p.step}
                onClick={() => setActivePrinciple(idx)}
                className={`py-2 px-2.5 text-left border transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "border-[#B85D2A] bg-[#E5E0D5]/60 text-[#111110]"
                    : "border-[#CFCAC0] text-[#6E6B65] hover:border-[#111110] hover:text-[#111110] bg-transparent"
                }`}
              >
                <div className="font-mono text-[10px] text-[#8C8880]">{p.step}</div>
                <div className="font-mono text-xs uppercase tracking-wider font-medium">
                  {p.phase}
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-3 min-h-[44px]">
          <p className="font-mono text-xs text-[#6E6B65] leading-relaxed">
            {principles[activePrinciple].description}
          </p>
        </div>
      </div>
    </div>
  );
}
