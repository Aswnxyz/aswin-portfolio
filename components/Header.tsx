"use client";

import React from "react";

interface HeaderProps {
  activeTab: "work" | "about" | "contact";
  onTabChange: (tab: "work" | "about" | "contact") => void;
  year?: string;
}

export default function Header({
  activeTab,
  onTabChange,
  year = "2026",
}: HeaderProps) {
  return (
    <header className="w-full border-b border-[#CFCAC0] px-4 sm:px-6 md:px-8 py-3.5 text-xs font-mono">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        {/* Identity */}
        <button
          onClick={() => onTabChange("work")}
          className="text-[#111110] font-semibold tracking-[0.2em] uppercase hover:text-[#B85D2A] transition-colors cursor-pointer"
        >
          ASWIN A.
        </button>

        {/* Navigation & Technical Tag */}
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="flex items-center gap-2 sm:gap-3 text-[#111110]">
            <button
              onClick={() => onTabChange("work")}
              className={`flex items-center gap-1.5 tracking-widest uppercase transition-colors cursor-pointer ${
                activeTab === "work"
                  ? "text-[#111110] font-medium"
                  : "text-[#6E6B65] hover:text-[#111110]"
              }`}
            >
              {activeTab === "work" && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85D2A]" />
              )}
              WORK
            </button>

            <span className="text-[#CFCAC0]">/</span>

            <button
              onClick={() => onTabChange("about")}
              className={`flex items-center gap-1.5 tracking-widest uppercase transition-colors cursor-pointer ${
                activeTab === "about"
                  ? "text-[#111110] font-medium"
                  : "text-[#6E6B65] hover:text-[#111110]"
              }`}
            >
              {activeTab === "about" && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85D2A]" />
              )}
              ABOUT
            </button>

            <span className="text-[#CFCAC0]">/</span>

            <button
              onClick={() => onTabChange("contact")}
              className={`flex items-center gap-1.5 tracking-widest uppercase transition-colors cursor-pointer ${
                activeTab === "contact"
                  ? "text-[#111110] font-medium"
                  : "text-[#6E6B65] hover:text-[#111110]"
              }`}
            >
              {activeTab === "contact" && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85D2A]" />
              )}
              CONTACT
            </button>
          </nav>

          <div className="hidden sm:block text-[#6E6B65] tracking-widest">
            BUILD / {year}
          </div>
        </div>
      </div>
    </header>
  );
}
