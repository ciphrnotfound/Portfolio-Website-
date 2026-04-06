"use client";
import { RiTwitterXLine } from "react-icons/ri";
import { MinimalClock } from "./MinimalClock";

interface EnhancedFooterProps {
  availabilityStatus?: string;
  quote?: string;
  copyright?: string;
  email?: string;
  twitterHandle?: string;
}

export function EnhancedFooter({
  availabilityStatus = "Available for new projects",
  quote = "Build things that matter. Ship fast. Stay humble.",
  copyright = "© 2026 Shay Jeremy",
  email = "akinlorinjeremiah@gmail.com",
  twitterHandle = "TheCiphrJay"
}: EnhancedFooterProps) {
  return (
    <footer className="border-t border-white/[0.008] pt-16 pb-8" data-section="footer">
      <div className="flex flex-col gap-12">
        {/* Top section - Status and Clock */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2.5 text-[#888]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500/60"></span>
            </span>
            <span className="text-[11px] font-mono tracking-tight">{availabilityStatus}</span>
          </div>
          
          <MinimalClock />
        </div>

        {/* Middle section - Quote */}
        <div className="text-[11px] font-mono text-[#555] leading-relaxed max-w-[400px]">
          {quote}
        </div>

        {/* Bottom section - Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/[0.005]">
          <p className="text-[10px] font-mono text-[#444]">{copyright}</p>
          
          <div className="flex items-center gap-6">
            <a
              href={`https://x.com/${twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444] hover:text-[#888] transition-colors duration-300"
              aria-label="X"
            >
              <RiTwitterXLine size={14} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[10px] font-mono text-[#444] hover:text-[#888] transition-colors duration-300 tracking-tight"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
