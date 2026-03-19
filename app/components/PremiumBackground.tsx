"use client";
import React, { useEffect, useRef } from "react";

export const PremiumBackground = ({ noiseIntensity = 20 }: { noiseIntensity?: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            draw();
        };

        const draw = () => {
            // Deeper black base
            ctx.fillStyle = "#0a0a0a";
            ctx.fillRect(0, 0, width, height);

            // Radial Gradients (Indigo/Blue/Violet)
            const g1 = ctx.createRadialGradient(
                width * 0.1, height * 0.1, 0,
                width * 0.1, height * 0.1, width * 0.8
            );
            g1.addColorStop(0, "rgba(79, 70, 229, 0.15)"); // Indigo
            g1.addColorStop(1, "transparent");
            ctx.fillStyle = g1;
            ctx.fillRect(0, 0, width, height);

            const g2 = ctx.createRadialGradient(
                width * 0.9, height * 0.9, 0,
                width * 0.9, height * 0.9, width * 0.8
            );
            g2.addColorStop(0, "rgba(67, 56, 202, 0.12)"); // Deeper indigo
            g2.addColorStop(1, "transparent");
            ctx.fillStyle = g2;
            ctx.fillRect(0, 0, width, height);

            const g3 = ctx.createRadialGradient(
                width * 0.5, height * 0.5, 0,
                width * 0.5, height * 0.5, width * 0.6
            );
            g3.addColorStop(0, "rgba(59, 130, 246, 0.08)"); // Blue
            g3.addColorStop(1, "transparent");
            ctx.fillStyle = g3;
            ctx.fillRect(0, 0, width, height);

            // Noise texture overlay
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                const noise = (Math.random() - 0.5) * noiseIntensity;
                data[i] = Math.min(255, Math.max(0, data[i] + noise));
                data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
                data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
            }
            ctx.putImageData(imageData, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [noiseIntensity]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            aria-hidden="true"
        />
    );
};
