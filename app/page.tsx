"use client"
import { Playfair_Display } from "next/font/google";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import { MinimalClock } from "./components/MinimalClock";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <main className="min-h-screen text-[#ededed] relative overflow-x-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        {/* Hero */}
        <div className="max-w-[720px] w-sm mx-auto px-6 sm:px-8 pt-[10vh] pb-16 animate-fade-in" data-section="hero" style={{ animationDelay: '0ms' }}>
          <h1 className="text-[16px] text-[#ededed] mb-8 font-normal tracking-tight">
            Shay Jeremy
          </h1>

          <div className="text-[15px] leading-[1.8] mb-6 text-[#a0a0a0]">
            <p>
              <em className={`text-[#ededed] not-italic ${playfair.className}`}>Crafting interfaces.</em> Building polished software and web experiences with attention to detail and user experience.
            </p>
          </div>

          <div className="text-[15px] max-w-[600px] max-w-md:text-center leading-[1.8] text-[#808080]">
            <p>
              Currently at pxxl space and Watchup, building modern web applications. CEO of BotHive, where we're exploring conversational AI and intelligent automation.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 animate-fade-in" data-section="portfolio" style={{ animationDelay: '100ms' }}>
          <LayoutGridDemo />
        </div>

        {/* Now */}
        <div className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 animate-fade-in" data-section="now" style={{ animationDelay: '200ms' }}>
          <h2 className="text-[11px] text-[#888] font-mono uppercase tracking-wider mb-6">Now</h2>
          <div className="text-[15px] leading-[1.8] text-[#a0a0a0] space-y-5">
            <p>
              Building Clara, a personal AI assistant that helps manage digital life. Exploring conversational interfaces and how AI can augment daily workflows without being intrusive.
            </p>
            <p>
              Deep diving into system design and scalable architectures. Learning how to build software that handles growth gracefully and maintains performance under load.
            </p>
            <p>
              Experimenting with new frontend patterns and animation techniques. The web platform keeps evolving, and there's always something new to explore.
            </p>
          </div>
        </div>

        {/* Connect */}
        <div className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 animate-fade-in" data-section="connect" style={{ animationDelay: '300ms' }}>
          <h2 className="text-[11px] text-[#888] font-mono uppercase tracking-wider mb-6">Connect</h2>
          <div className="text-[15px] leading-[1.8] text-[#a0a0a0]">
            <p>
              Reach me at{" "}
              <a href="https://x.com/TheCiphrJay" target="_blank" rel="noopener noreferrer" className="text-[#ededed] hover:text-[#999] transition-colors underline-offset-4">@TheCiphrJay</a>
              {" "}or{" "}
              <a href="mailto:akinlorinjeremiah@gmail.com" className="text-[#ededed] hover:text-[#999] transition-colors underline-offset-4">akinlorinjeremiah@gmail.com</a>.
            </p>
          </div>
        </div>
        
        {/* Footer - centered with spacing */}
        <div className="max-w-[720px] mx-auto px-6 sm:px-8 pt-20 pb-16 animate-fade-in border-t border-white/[0.04]" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col items-center gap-8">
            <p className="text-[12px] text-[#555] italic text-center">
              Build things that matter. Ship fast. Stay humble.
            </p>
            <div className="flex items-center gap-6 text-[11px] text-[#666] font-mono">
              <span>MMXXVI</span>
              <MinimalClock />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
