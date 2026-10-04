"use client";

import React, { useState } from "react";
import { BUILD_SHEET_META } from "@/data/projects";

interface ContactProps {
  onBackToWork?: () => void;
}

export default function Contact({ onBackToWork }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUILD_SHEET_META.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col justify-between h-full text-xs font-mono">
      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#CFCAC0]">
          <span className="text-[#111110] font-medium tracking-widest uppercase">
            / CONTACT / INQUIRY
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#6E6B65] tracking-widest">
              [ {BUILD_SHEET_META.contact.status} ]
            </span>
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

        {/* Headline */}
        <div className="pt-6 sm:pt-8 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-5xl sm:text-6xl font-normal text-[#111110] tracking-tight leading-tight">
                READY TO BUILD?
              </h2>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#111110] tracking-tight leading-tight mt-1">
                LET&apos;S TALK<span className="text-[#B85D2A] font-sans">.</span>
              </div>
            </div>
            <div className="text-right pt-2 shrink-0">
              <div className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-[#111110] tracking-wider uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-[#B85D2A]" />
                AVAILABLE
              </div>
              <div className="font-mono text-xs text-[#6E6B65] tracking-widest mt-1">
                {BUILD_SHEET_META.contact.year}
              </div>
            </div>
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#6E6B65] leading-relaxed max-w-xl mt-6">
            Available for select full-stack product development, application architecture, and engineering contracts. Open to discussing technical requirements and implementation timelines.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="py-6 border-t border-[#CFCAC0] mt-4 space-y-4">
          {/* Email row with Copy & Direct Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 border border-[#CFCAC0] hover:border-[#B85D2A] transition-colors bg-[#E6E1D6]/30">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] text-[#8C8880]">01</span>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111110] font-medium">
                  EMAIL
                </div>
                <div className="font-mono text-xs text-[#6E6B65] mt-0.5">
                  {BUILD_SHEET_META.contact.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 border border-[#CFCAC0] text-[11px] font-mono uppercase tracking-wider text-[#111110] hover:bg-[#E2DDD3] transition-colors cursor-pointer"
              >
                {copied ? "COPIED" : "COPY EMAIL"}
              </button>
              <a
                href={`mailto:${BUILD_SHEET_META.contact.email}`}
                className="px-3 py-1.5 border border-[#111110] bg-[#111110] text-[#EBE8DF] text-[11px] font-mono uppercase tracking-wider hover:bg-[#B85D2A] hover:border-[#B85D2A] transition-colors"
              >
                WRITE ↗
              </a>
            </div>
          </div>

          {/* GitHub Channel */}
          <div className="flex items-center justify-between p-3.5 border border-[#CFCAC0] hover:border-[#B85D2A] transition-colors bg-[#E6E1D6]/30">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] text-[#8C8880]">02</span>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111110] font-medium">
                  GITHUB
                </div>
                <div className="font-mono text-xs text-[#6E6B65] mt-0.5">
                  github.com/Aswnxyz
                </div>
              </div>
            </div>
            <a
              href={BUILD_SHEET_META.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#CFCAC0] text-[11px] font-mono uppercase tracking-wider text-[#111110] hover:bg-[#E2DDD3] transition-colors"
            >
              VISIT ↗
            </a>
          </div>

          {/* LinkedIn Channel */}
          <div className="flex items-center justify-between p-3.5 border border-[#CFCAC0] hover:border-[#B85D2A] transition-colors bg-[#E6E1D6]/30">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] text-[#8C8880]">03</span>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111110] font-medium">
                  LINKEDIN
                </div>
                <div className="font-mono text-xs text-[#6E6B65] mt-0.5">
                  linkedin.com/in/aswin-a-dev
                </div>
              </div>
            </div>
            <a
              href={BUILD_SHEET_META.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#CFCAC0] text-[11px] font-mono uppercase tracking-wider text-[#111110] hover:bg-[#E2DDD3] transition-colors"
            >
              CONNECT ↗
            </a>
          </div>

          {/* Fiverr Channel */}
          <div className="flex items-center justify-between p-3.5 border border-[#CFCAC0] hover:border-[#B85D2A] transition-colors bg-[#E6E1D6]/30">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] text-[#8C8880]">04</span>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111110] font-medium">
                  FIVERR
                </div>
                <div className="font-mono text-xs text-[#6E6B65] mt-0.5">
                  Freelance Contracts &amp; Services
                </div>
              </div>
            </div>
            <a
              href={BUILD_SHEET_META.contact.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#CFCAC0] text-[11px] font-mono uppercase tracking-wider text-[#111110] hover:bg-[#E2DDD3] transition-colors"
            >
              FIVERR ↗
            </a>
          </div>

          {/* Resume Download / Open Channel */}
          <div className="flex items-center justify-between p-3.5 border border-[#CFCAC0] hover:border-[#B85D2A] transition-colors bg-[#E6E1D6]/30">
            <div className="flex items-baseline gap-3">
              <span className="text-[11px] text-[#8C8880]">05</span>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#111110] font-medium">
                  RESUME / CV
                </div>
                <div className="font-mono text-xs text-[#6E6B65] mt-0.5">
                  Curriculum Vitae (PDF Document)
                </div>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download="Aswin_A_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#111110] bg-[#111110] text-[#EBE8DF] text-[11px] font-mono uppercase tracking-wider hover:bg-[#B85D2A] hover:border-[#B85D2A] transition-colors"
            >
              DOWNLOAD RESUME ↗
            </a>
          </div>
        </div>
      </div>

      {/* Terminal Line */}
      <div className="pt-6 border-t border-[#CFCAC0] mt-4 flex items-center justify-between text-xs text-[#6E6B65]">
        <span>BUILD SHEET / ASWIN A.</span>
        <span>STATUS: READY TO SHIP</span>
      </div>
    </div>
  );
}
