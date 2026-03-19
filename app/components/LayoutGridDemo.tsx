"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";
import Link from "next/link";

export function LayoutGridDemo() {
  return (
    <div className="w-full mb-16">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const BuildingSection = () => {
  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-8">Building</h2>
      <div>
        <h3 className="text-[15px] text-white font-normal mb-1">Clara</h3>
        <p className="text-[14px] text-[#ccc] leading-[1.6] mb-6">
          Personal AI assistant for managing digital life. Built with Next.js 16 and Bothive.
        </p>
      </div>
      <div>
        <h3 className="text-[15px] text-white font-normal mb-1">BotHive</h3>
        <p className="text-[14px] text-[#ccc] leading-[1.6] mb-6">
          Platform for conversational AI and advanced intelligent tools.
        </p>
      </div>
      <div>
        <h3 className="text-[15px] text-white font-normal mb-1">Astra</h3>
        <p className="text-[14px] text-[#ccc] leading-[1.6]">
          Conversational CLI for codebase analysis and autonomous refactoring.
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-8">Experience</h2>
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <a href="https://bothive.cloud" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white font-normal">BotHive</a>
            <span className="text-[#999] text-[11px]">↗</span>
          </div>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            CEO & Software Engineer.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <a href="https://watchup.site" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white font-normal">Watchup</a>
            <span className="text-[#999] text-[11px]">↗</span>
          </div>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            Lead Frontend.
          </p>
        </div>
        
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <a href="https://pxxl.app" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white font-normal">pxxl space</a>
            <span className="text-[#999] text-[11px]">↗</span>
          </div>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            Frontend Dev.
          </p>
        </div>
      </div>
    </div>
  );
};

const WritingSection = () => {
  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-wider text-[#999] font-medium mb-8">Writing</h2>
      <div className="space-y-6">
        <div>
          <Link href="/writing/graduating-high-school">
            <h3 className="text-[15px] text-white font-normal mb-1">Graduating High School at 13</h3>
          </Link>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            How I did it and why.
          </p>
        </div>
        
        <div>
          <Link href="/writing/why-i-started-coding">
            <h3 className="text-[15px] text-white font-normal mb-1">Why I Started Coding</h3>
          </Link>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            The journey to software engineering.
          </p>
        </div>
        
        <div>
          <Link href="/writing/building-astra">
            <h3 className="text-[15px] text-white font-normal mb-1">Building Astra</h3>
          </Link>
          <p className="text-[14px] text-[#ccc] leading-[1.6]">
            Working on my latest CLI project.
          </p>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <BuildingSection />,
    className: "col-span-1",
  },
  {
    id: 2,
    content: <ExperienceSection />,
    className: "col-span-1",
  },
  {
    id: 3,
    content: <WritingSection />,
    className: "col-span-1",
  },
];
