"use client"
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] max-md:max-w-sm max-w-sm:w-[50%] text-[#ededed]">
      <div className="max-w-[900px] md:max-w-[900px] max-md:max-w-sm mx-auto px-6 md:px-6 max-md:px-5 pt-[25vh] max-md:pt-[20vh] pb-24 max-md:pb-16 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Name */}
        <h1 className={`text-[15px] max-md:text-[16px] text-[#ededed] mb-14 max-md:mb-10 tracking-normal`}>
          Shay Jeremy
        </h1>
        
        
        
        
        {/* Bio */}
        <div className="text-[15px] max-w-sm-[60%] max-md:text-[16px] leading-[1.7] max-md:leading-[1.8] mb-10 max-md:mb-8 text-[#999]">
          <p>
            <em className={`text-[#ededed] ${playfair.className}`}>Software Engineer.</em> 15 years old. I graduated high school at 13—not to rush through life, but to start building it. I believe in creating software that serves a purpose, solves real problems, and respects the people who use it. Every project is an opportunity to make something that matters.
          </p>
        </div>
        
        <div className="text-[15px] max-md:text-[16px] leading-[1.7] max-md:leading-[1.8] mb-32 max-md:mb-20 text-[#999]">
          <p>
            Currently working at{" "}
            <a href="https://pxxl.app" target="_blank" rel="noopener noreferrer" className="text-[#ededed] pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors">pxxl space</a>{" "}
            and{" "}
            <a href="https://watchup.site" target="_blank" rel="noopener noreferrer" className="text-[#ededed] pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors">Watchup</a>.{" "}
            Currently working as the CEO of BotHive, focusing on conversational AI and intelligent tools.
          </p>
        </div>
        
        {/* Three column layout */}
        <div className="md:grid md:grid-cols-3 mx-auto justify-center max-md:grid-cols-1 gap-x-16 gap-y-16 max-md:gap-y-12 mt-[12vh] max-md:mt-[8vh] mb-24 max-md:mb-16">
          {/* Building Column */}
          <div>
            <h2 className="text-[11px] max-md:text-[12px] uppercase tracking-wider text-[#666] font-medium mb-8 max-md:mb-6">Building</h2>
            <div>
              <h3 className="text-[15px] max-md:text-[16px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Clara</h3>
              <p className="text-[14px] max-md:text-[15px] text-[#666] leading-[1.6] max-w-[200px] max-md:max-w-full">
                Personal AI assistant for managing digital life. Built with Next.js 15 and Bothive.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-[15px] max-md:text-[16px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">BotHive</h3>
              <p className="text-[14px] max-md:text-[15px] text-[#666] leading-[1.6] max-w-[200px] max-md:max-w-full">
                Platform for conversational AI and advanced intelligent tools.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-[15px] max-md:text-[16px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Astra</h3>
              <p className="text-[14px] max-md:text-[15px] text-[#666] leading-[1.6] max-w-[200px] max-md:max-w-full">
                Conversational CLI for codebase analysis and autonomous refactoring.
              </p>
            </div>
          </div>
          
          {/* Experience Column */}
          <div>
            <h2 className="text-[11px] max-md:text-[12px] uppercase tracking-wider text-[#666] font-medium mb-8 max-md:mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <a href="https://bothive.cloud" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#ededed] font-normal pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">BotHive</a>
                  <span className="text-[#666] text-[11px]">↗</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  CEO & Software Engineer.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <a href="https://watchup.site" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#ededed] font-normal pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Watchup</a>
                  <span className="text-[#666] text-[11px]">↗</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  Lead Frontend.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <a href="https://pxxl/app" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#ededed] font-normal pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">pxxl space</a>
                  <span className="text-[#666] text-[11px]">↗</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  Frontend Dev.
                </p>
              </div>
            </div>
          </div>
          
          {/* Writing Column */}
          <div>
            <h2 className="text-[11px] max-md:text-[12px] uppercase tracking-wider text-[#666] font-medium mb-8 max-md:mb-6">Writing</h2>
            <div className="space-y-8">
              <div>
                <Link href="/writing/graduating-high-school">
                  <h3 className="text-[15px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Graduating High School at 13</h3>
                </Link>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  How I did it and why.
                </p>
              </div>
              
              <div>
                <Link href="/writing/why-i-started-coding">
                  <h3 className="text-[15px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Why I Started Coding</h3>
                </Link>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  The journey to software engineering.
                </p>
              </div>
              
              <div>
                <Link href="/writing/building-astra">
                  <h3 className="text-[15px] text-[#ededed] font-normal mb-1 pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors w-fit">Building Astra</h3>
                </Link>
                <p className="text-[14px] text-[#666] leading-[1.6] max-w-[200px]">
                  Working on my latest CLI project.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center mt-16 max-md:mt-12">
          <a 
            href="https://x.com/TheCiphrJay" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] text-[13px] max-md:text-[14px] pb-0.5 border-b border-transparent hover:border-[#555] cursor-pointer transition-colors inline-block"
          >
            X
          </a>
        </footer>
      </div>
    </main>
  );
}