"use client";
import React, { useEffect, useState } from "react";

export const MinimalClock = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setHours(now.getHours() % 12);
            setMinutes(now.getMinutes());
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const hourDegrees = (hours * 30) + (minutes * 0.5);
    const minuteDegrees = minutes * 6;

    return (
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#666]">
            <svg width="14" height="14" viewBox="0 0 14 14" className="text-[#555]">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
                {/* Hour hand */}
                <line
                    x1="7"
                    y1="7"
                    x2="7"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    transform={`rotate(${hourDegrees}, 7, 7)`}
                    style={{ transition: 'transform 0.5s ease-out' }}
                />
                {/* Minute hand */}
                <line
                    x1="7"
                    y1="7"
                    x2="7"
                    y2="2"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    transform={`rotate(${minuteDegrees}, 7, 7)`}
                    style={{ transition: 'transform 0.5s ease-out' }}
                />
                {/* Center dot */}
                <circle cx="7" cy="7" r="0.5" fill="currentColor"/>
            </svg>
            <span className="tabular-nums tracking-tight text-[#555]">
                {new Date().toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </span>
        </div>
    );
};
