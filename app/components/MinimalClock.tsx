"use client";
import React, { useEffect, useState } from "react";

export const MinimalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    return (
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#555]">
            <span className="tabular-nums tracking-widest">{formatTime(time)}</span>
            <div className="relative w-4 h-4 rounded-full border border-current opacity-40 flex items-center justify-center">
                {/* Rotating "second hand" orb */}
                <div 
                    className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite]"
                >
                    <div className="w-[1px] h-2 bg-current origin-bottom -translate-y-[4px]" />
                </div>
                <div className="w-[2px] h-[2px] rounded-full bg-current opacity-60" />
            </div>
        </div>
    );
};
