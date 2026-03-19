"use client"
import { Playfair_Display } from "next/font/google";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import { RiTwitterXLine } from "react-icons/ri";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfair",
});

import { PremiumBackground } from "./components/PremiumBackground";
import { MinimalClock } from "./components/MinimalClock";

export default function Home() {
  return (
    <main className="min-h-screen text-[#ededed]">
      {/* Hero */}
      <div className="max-w-[680px] mx-auto px-6 pt-[12vh] pb-24">
        <h1 className="text-[15px] text-[#ededed] mb-10 font-normal">
          Shay Jeremy
        </h1>

        <div className="text-[15px] leading-[1.8] mb-6 text-[#999]">
          <p>
            <em className={`text-[#ededed] not-italic ${playfair.className}`}>Software Engineer.</em> Building polished software and web experiences.
          </p>
        </div>

        <div className="text-[15px] leading-[1.8] text-[#888]">
          <p>
            Currently at pxxl space and Watchup. CEO of BotHive.
          </p>
        </div>
      </div>

      

      {/* Portfolio Grid */}
      <div className="max-w-[680px] mx-auto px-6 py-24">
        <LayoutGridDemo />
      </div>

  

      {/* Now */}
      <div className="max-w-[680px] mx-auto px-6 py-24">
        <h2 className="text-[15px] text-[#ededed] font-normal mb-5">Now</h2>
        <div className="text-[15px] leading-[1.8] text-[#888] space-y-4">
          <p>
            Building Clara, a personal AI assistant. Exploring conversational interfaces and intelligent automation.
          </p>
          <p>
            Learning system design and scalable architectures. The more I build, the more I realize there is to learn.
          </p>
        </div>
      </div>

     

      {/* Contact */}
      <div className="max-w-[680px] mx-auto px-6 py-24">
        <h2 className="text-[15px] text-[#ededed] font-normal mb-5">Connect</h2>
        <div className="text-[15px] leading-[1.8] text-[#888]">
          <p>
            Reach me at{" "}
            <a href="https://x.com/TheCiphrJay" target="_blank" rel="noopener noreferrer" className="text-[#ededed] hover:text-[#999] transition-colors">@TheCiphrJay</a>
            {" "}or{" "}
            <a href="mailto:shay@example.com" className="text-[#ededed] hover:text-[#999] transition-colors">shay@example.com</a>.
          </p>
        </div>
      </div>
      
      <div className="max-w-[680px] mx-auto px-6 py-32">
        <footer className="border-t border-white/[0.03] pt-12 text-[11px] text-[#555] font-mono tracking-tight">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4 max-w-[320px]">
              <div className="flex items-center gap-2 text-[#888]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/60"></span>
                </span>
                <span>Available for new projects</span>
              </div>
              <p className="leading-relaxed opacity-60">
                Build things that matter. Ship fast. Stay humble.
              </p>
              <p className="opacity-40">© 2026 Shay Jeremy. All systems autonomous.</p>
            </div>

            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="space-y-1 md:text-right">
                <span className="text-[#333] uppercase text-[9px] font-bold">Local Time</span>
                <MinimalClock />
              </div>
              
              <div className="flex items-center gap-6">
                <a
                  href="https://x.com/TheCiphrJay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444] hover:text-[#ededed] transition-all duration-300 transform hover:scale-110"
                  aria-label="X"
                >
                  <RiTwitterXLine size={16} />
                </a>
                <a
                  href="mailto:akinlorinjeremiah.com"
                  className="text-[#444] hover:text-[#ededed] transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
