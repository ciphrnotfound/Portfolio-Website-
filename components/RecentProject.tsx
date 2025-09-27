 "use client";
// import { projects } from '../data';
// import {PinContainer} from "@/ui/3d-pin";
// export const ProjectsSection = () => { 
//     return(
//         <div className={`py-20`}>
//             <h1 className={`heading`}>
//                 A small selection of my recent works
//                 <span>recent projects</span>
//             </h1>
//             <div className={`flex flex-wrap items-center flex-col lg:flex-row   p-4 gap-16 mt-10 justify-center`}>
//             {projects.map(({id,title,des,img,iconLists,link}) => (
//                 <div className={`flex flex-wrap items-center   p-4 gap-16 mt-10 justify-center`} key={id}>
//                     <div className={`lg:min-h-[32.5rem] h-[25rem] flex items-center
//                       justify-center sm:w-96 w-[80vw]
//                       `} key={id}>
//                         <PinContainer>
//                             {title}
//                         </PinContainer>

//                          </div>
//                 </div>
//                     // <div className={`lg:min-h-[32.5rem] h-[25rem] flex items-center
//                     //  justify-center sm:w-96 w-[80vw]
//                     //  `} key={id}>
//                     //  
//                     //         {title}
//                     //    
//                     // </div>
//                 ))}
//             </div>
//         </div>
//     )
// }


// export default ProjectsSection

// import React from 'react';
// import { projects } from '../data';
// import { PinContainer } from "@/ui/3d-pin";

// export const ProjectsSection: React.FC = () => {
//   return (
//     <section className="py-16 px-4 lg:px-8">
//       <h2 className="heading max-w-4xl mx-auto text-center">
//         A small selection of my recent works
//         <span className="block text-sm mt-2 text-zinc-400">recent projects</span>
//       </h2>

//       <div className="mt-10 flex flex-col gap-8 items-center lg:flex-row lg:flex-wrap lg:justify-center">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <article
//             key={id}
//             className="w-full max-w-xl sm:w-[540px] lg:w-80 transform transition-transform hover:-translate-y-1 hover:scale-[1.01]"
//           >
//             {/* border & card wrapper */}
//             <div className="rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/10">
//               <div className="bg-zinc-900/70 dark:bg-zinc-800/70 rounded-2xl p-6 h-full flex flex-col">
//                 {/* image / 3D pin area */}
//                 <div className="mb-4 rounded-xl overflow-hidden bg-zinc-800/60 h-40 flex items-center justify-center">
//                   <PinContainer>
//                     {img ? (
//                       // keep image fit inside the pin container if provided
//                       // If your PinContainer already handles children sizing, this will adapt
//                       <img src={img} alt={title} className="object-cover w-full h-full" />
//                     ) : (
//                       <span className="text-sm text-zinc-400">{title}</span>
//                     )}
//                   </PinContainer>
//                 </div>

//                 {/* title & description */}
//                 <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//                 <p className="text-sm text-zinc-400 flex-1">{des}</p>

//                 {/* tech chips */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {(iconLists ?? []).map((tech: string, idx: number) => (
//                     <span
//                       key={idx}
//                       className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-800/50 text-xs text-zinc-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* actions */}
//                 <div className="mt-6 flex items-center justify-between gap-4">
//                   <a
//                     href={link ?? '#'}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white"
//                     aria-label={`Open ${title}`}
//                   >
//                     View
//                   </a>
//                   <a
//                     className="text-xs text-zinc-400"
//                     href={link ?? '#'}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live / Details
//                   </a>
//                   mated
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// import React from 'react';
// import { projects } from '../data';
// import { PinContainer } from "@/ui/3d-pin";

// export const ProjectsSection: React.FC = () => {
//   if (!projects || projects.length === 0) {
//     return (
//       <section className="py-16 px-4 lg:px-8">
//         <h2 className="heading text-center">Recent projects</h2>
//         <p className="text-zinc-400 mt-6 text-center">No projects to show yet.</p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 px-4 lg:px-8">
//       <h2 className="heading max-w-4xl mx-auto text-center">
//         A small selection of my recent works
//         <span className="block text-sm mt-2 text-zinc-400">recent projects</span>
//       </h2>

//       <div className="mt-10 flex flex-col gap-8 items-center lg:flex-row lg:flex-wrap lg:justify-center">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <article
//             key={id}
//             className="w-full max-w-xl sm:w-[540px] lg:w-80 transform transition-transform hover:-translate-y-1 hover:scale-[1.01]"
//           >
//             <PinContainer>
//             <div className="rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/10">
//               <div className="bg-zinc-900/70 dark:bg-zinc-800/70 rounded-2xl p-6 h-full flex flex-col space-x-5 lg:h-[30vh] w-[80vw] sm:w-96 mb-10">
//                 {/* Image / 3D pin area */}
//                 <div className="mb-4 rounded-xl overflow-hidden bg-zinc-800/60 h-[20vh]  flex items-center justify-center relative">
                  
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={title || 'project image'}
//                         className="object-cover w-full h-full z-10 absolute bottom-0"
//                         // small smoothing on load
//                         decoding="async"
//                       />
//                     ) : (
//                       <div className="flex items-center justify-center w-full h-full">
//                         <span className="text-sm text-zinc-400">{title}</span>
//                       </div>
//                     )}
                  

//                   {/* animated pin overlay */}
//                   {/* {/* <div className="pin-overlay" aria-hidden>
//                     <div className="pin-head" />
//                     <div className="pin-shaft" />
//                   </div> */}
//                 </div> 

//                 {/* title & description */}
//                 <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//                 <p className="text-sm text-zinc-400 flex-1">{des}</p>

//                 {/* tech chips */}
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {(iconLists ?? []).map((tech: string, idx: number) => (
//                     <span
//                       key={`${id}-tech-${idx}`}
//                       className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-800/50 text-xs text-zinc-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* actions */}
//                 <div className="mt-6 flex items-center justify-between gap-4">
//                   <a
//                     href={link ?? '#'}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white"
//                     aria-label={`Open ${title}`}
//                   >
//                     View
//                   </a>
//                   <a
//                     className="text-xs text-zinc-400"
//                     href={link ?? '#'}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live / Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//                       </PinContainer>
//             {/* local styling for the pin animation */}
//             <style jsx>{`
//               .pin-overlay {
//                 position: absolute;
//                 right: 12px;
//                 top: 12px;
//                 width: 44px;
//                 height: 44px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 pointer-events: none;
//                 transform-origin: center;
//                 animation: floatPin 3.6s ease-in-out infinite;
//               }

//               .pin-head {
//                 width: 34px;
//                 height: 34px;
//                 border-radius: 9999px;
//                 background: linear-gradient(135deg, rgba(99,102,241,0.95), rgba(236,72,153,0.95));
//                 box-shadow: 0 6px 18px rgba(15,23,42,0.45);
//                 position: relative;
//                 z-index: 3;
//                 border: 2px solid rgba(255,255,255,0.08);
//                 animation: pinPulse 2.4s ease-in-out infinite;
//               }

//               .pin-shaft {
//                 position: absolute;
//                 width: 3px;
//                 height: 12px;
//                 background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7));
//                 bottom: -6px;
//                 left: 50%;
//                 transform: translateX(-50%);
//                 border-radius: 2px;
//                 z-index: 2;
//                 filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
//               }

//               @keyframes floatPin {
//                 0% { transform: translateY(0) rotate(-2deg); }
//                 50% { transform: translateY(-6px) rotate(2deg); }
//                 100% { transform: translateY(0) rotate(-2deg); }
//               }

//               @keyframes pinPulse {
//                 0% { transform: scale(1); opacity: 1; }
//                 50% { transform: scale(1.06); opacity: 0.95; }
//                 100% { transform: scale(1); opacity: 1; }
//               }

//               /* small responsive tweak so the pin doesn't overlap content on tiny screens */
//               @media (max-width: 420px) {
//                 .pin-overlay {
//                   right: 8px;
//                   top: 8px;
//                   width: 36px;
//                   height: 36px;
//                 }
//                 .pin-head { width: 28px; height: 28px; }
//               }
//             `}</style>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
// "use client";
//
// import React, { useRef, useCallback, useEffect } from "react";
// import Image from "next/image";
// import { projects } from "../data";
// import { PinContainer } from "@/ui/3d-pin";
//
// type Tech = string | { name: string; icon?: string };
//
// const techIcon = (tech: string) => {
//   // Extract the tech name from the file path (e.g., "/re.svg" -> "re", "/tail.svg" -> "tail")
//   const techName = tech.toLowerCase().replace(/[/\\]/g, '').replace('.svg', '').replace('.png', '');
//
//   if (techName.includes("re") || techName.includes("react")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
//         <g stroke="#61dafb" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(0 12 12)" />
//           <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(60 12 12)" />
//           <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(120 12 12)" />
//         </g>
//       </svg>
//     );
//   }
//
//   if (techName.includes("next")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <path d="M3 12h6v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M21 12h-6v-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("tail")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <path d="M2 16s4-6 10-2 10-2 10-2" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("ts") || techName.includes("typescript")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <rect x="3" y="3" width="18" height="18" rx="3" stroke="#3178c6" strokeWidth="1.6" />
//         <path d="M8 12h8M8 16h6" stroke="#3178c6" strokeWidth="1.6" strokeLinecap="round" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("c")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="10" stroke="#00599C" strokeWidth="2" fill="#00599C" />
//         <path d="M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("three")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="#000" strokeWidth="1.5" fill="none" />
//         <path d="M12 8l4 3-4 3-4-3 4-3z" stroke="#000" strokeWidth="1.5" fill="none" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("fm") || techName.includes("frame")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0052CC" strokeWidth="1.5" />
//         <rect x="6" y="7" width="12" height="2" fill="#0052CC" />
//         <rect x="6" y="11" width="8" height="2" fill="#0052CC" />
//       </svg>
//     );
//   }
//
//   if (techName.includes("gsap")) {
//     return (
//       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//         <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="#88CE02" strokeWidth="1.5" fill="#88CE02" />
//       </svg>
//     );
//   }
//
//   // Default fallback for unknown tech
//   return <span className="w-2 h-2 rounded-full bg-zinc-400 inline-block" />;
// };
//
// export const ProjectsSection: React.FC = () => {
//   if (!projects?.length) {
//     return (
//       <section className="py-16 px-4 lg:px-8 text-center">
//         <h2 className="heading">Recent Projects</h2>
//         <p className="text-zinc-400 mt-6">No projects to show yet.</p>
//       </section>
//     );
//   }
//
//   return (
//     <section className="py-16 px-4 lg:px-8">
//       <h2 className="heading max-w-4xl mx-auto text-center text-transparent font-light bg-gradient-to-br from-black/40 to-black/80 bg-clip-text dark:text-transparent dark:bg-gradient-to-br dark:from-white/30 dark:to-white/80">
//         Here's What I've been working on
//         <span className="block text-sm mt-2 text-zinc-400">recent projects</span>
//       </h2>
//
//       <div className="mt-10 flex flex-col gap-8 items-center lg:flex-row lg:flex-wrap lg:justify-center">
//         {projects.map((p) => (
//           <AnimatedCard key={p.id} project={p} />
//         ))}
//       </div>
//     </section>
//   );
// };
//
// function AnimatedCard({ project }: { project: any }) {
//   const { id, title, des, img, iconLists, link } = project;
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const rafRef = useRef<number | null>(null);
//
//   const onMove = useCallback((e: React.MouseEvent) => {
//     const el = cardRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;
//     const py = (e.clientY - rect.top) / rect.height;
//
//     const max = 12;
//     const ry = (px - 0.5) * (max * 2);
//     const rx = -(py - 0.5) * max;
//
//     const sx = px * 100;
//     const sy = py * 100;
//
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       el.style.setProperty("--rx", `${rx}deg`);
//       el.style.setProperty("--ry", `${ry}deg`);
//       el.style.setProperty("--sx", `${sx}%`);
//       el.style.setProperty("--sy", `${sy}%`);
//       el.style.setProperty("--s", "1.03");
//     });
//   }, []);
//
//   const onLeave = useCallback(() => {
//     const el = cardRef.current;
//     if (!el) return;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     rafRef.current = requestAnimationFrame(() => {
//       el.style.setProperty("--rx", `0deg`);
//       el.style.setProperty("--ry", `0deg`);
//       el.style.setProperty("--sx", `50%`);
//       el.style.setProperty("--sy", `50%`);
//       el.style.setProperty("--s", `1`);
//     });
//   }, []);
//
//   useEffect(() => {
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);
//
//   return (
//     <article
//       ref={cardRef}
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//       className="w-full max-w-2xl sm:w-[540px] lg:w-96"
//       style={
//         {
//           "--rx": "0deg",
//           "--ry": "0deg",
//           "--sx": "50%",
//           "--sy": "50%",
//           "--s": "1",
//         } as React.CSSProperties
//       }
//     >
//       <div className="rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-transparent to-pink-500/10">
//         <div className="card-inner bg-zinc-900/70 dark:bg-zinc-800/70 rounded-2xl p-5 flex flex-col h-full transform-gpu">
//           <div className="relative rounded-xl overflow-hidden bg-zinc-800/50 h-44 flex items-center justify-center">
//             <img src={img} alt={title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 pointer-events-none layer-shine" />
//           </div>
//
//           <div className="mt-4 flex flex-col gap-3 layer-content">
//             <div className="flex items-start justify-between gap-4">
//               <h3 className="text-lg font-semibold text-white">{title}</h3>
//               <a
//                 href={link ?? "#"}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-xs text-zinc-400 hover:text-white transition-colors"
//               >
//                 View →
//               </a>
//             </div>
//
//             <p className="text-sm text-zinc-400">{des}</p>
//
//             <div className="mt-2 flex flex-wrap gap-2">
//               {(iconLists ?? []).map((tech: Tech, i: number) => {
//                 const name = typeof tech === "string" ? tech : tech.name;
//                 return (
//                   <span
//                     key={`${id}-tech-${i}`}
//                     className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-800/60 text-xs text-zinc-200 border border-zinc-700 hover:bg-zinc-700/60 transition"
//                   >
//                     {techIcon(name)}
//                     <span className="whitespace-nowrap">{name}</span>
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//
//       <style jsx>{`
//         .card-inner {
//           transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--s));
//           transition: transform 420ms cubic-bezier(.2,.9,.2,1);
//           transform-style: preserve-3d;
//           will-change: transform;
//         }
//         .layer-img {
//           transform: translateZ(36px);
//           transition: transform 420ms cubic-bezier(.2,.9,.2,1);
//         }
//         .layer-content {
//           transform: translateZ(12px);
//           transition: transform 420ms cubic-bezier(.2,.9,.2,1);
//         }
//         .layer-shine {
//           background: radial-gradient(600px 200px at var(--sx) var(--sy), rgba(255,255,255,0.08), transparent 20%);
//           opacity: 0;
//           transition: opacity 320ms ease, background-position 320ms ease;
//         }
//         article:hover .layer-shine {
//           opacity: 1;
//         }
//       `}</style>
//     </article>
//   );
// }
//
// export default ProjectsSection;


 "use client";

 import React, { useRef, useCallback } from "react";
 import { projects } from "../data";
 import {iconLists} from "../data";

 type Tech = string | { name: string; icon?: string };

 const techIcon = (tech: string) => {
   const techName = tech.toLowerCase().replace(/[/\\]/g, '').replace('.svg', '').replace('.png', '');

   const iconMap: Record<string, JSX.Element> = {
     re: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
           <g stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
             <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(0 12 12)" />
             <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(60 12 12)" />
             <ellipse cx="12" cy="12" rx="6.6" ry="2.8" transform="rotate(120 12 12)" />
           </g>
         </svg>
     ),
     next: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <path d="M3 12h6v6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
           <path d="M21 12h-6v-6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
     ),
     tail: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <path d="M2 16s4-6 10-2 10-2 10-2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
     ),
     ts: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <rect x="3" y="3" width="18" height="18" rx="3" stroke="#ffffff" strokeWidth="1.6" />
           <path d="M8 12h8M8 16h6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
         </svg>
     ),
     c: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" fill="#000000" />
           <path d="M8 12h8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
         </svg>
     ),
     three: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
           <path d="M12 8l4 3-4 3-4-3 4-3z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
         </svg>
     ),
     fm: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <rect x="2" y="3" width="20" height="14" rx="2" stroke="#ffffff" strokeWidth="1.5" />
           <rect x="6" y="7" width="12" height="2" fill="#ffffff" />
           <rect x="6" y="11" width="8" height="2" fill="#ffffff" />
         </svg>
     ),
     gsap: (
         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
           <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="#ffffff" strokeWidth="1.5" fill="#000000" />
         </svg>
     ),
   };

   return iconMap[techName] || <div className="w-2 h-2 rounded-full bg-white" />;
 };

 export const ProjectsSection: React.FC = () => {
   if (!projects?.length) {
     return (
         <section className="py-20 px-4 lg:px-8 text-center">
           <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
           <p className="text-gray-400">No projects to show yet.</p>
         </section>
     );
   }

   return (
       <section className="py-16 px-4 lg:px-8" id="projects">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
               Recent Projects
             </h2>
             <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
               A showcase of my latest work and creative endeavors
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
             {projects.map((project) => (
                 <ProjectCard key={project.id} project={project} />
             ))}
           </div>
         </div>
       </section>
   );
 };

 function ProjectCard({ project }: { project: any }) {
   const { id, title, des, img, iconLists, link } = project;
   const cardRef = useRef<HTMLDivElement | null>(null);

   const onMouseMove = useCallback((e: React.MouseEvent) => {
     const el = cardRef.current;
     if (!el) return;
     const rect = el.getBoundingClientRect();
     const x = (e.clientX - rect.left) / rect.width;
     const y = (e.clientY - rect.top) / rect.height;

     const tiltX = (y - 0.5) * -6;
     const tiltY = (x - 0.5) * 6;
     el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(15px) scale(1.02)`;
   }, []);

   const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
  }, []);

   return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative w-full cursor-pointer transition-all duration-300 ease-out"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-sm"></div>

      {/* Main card */}
      <div className="relative bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-2xl p-6 transition-all duration-300 overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300 flex-1">
              {title}
            </h3>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
            >
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{des}</p>

          {/* Tech Stack - Clean Icons */}
            <div className={`flex items-center justify-between mt-7 mb-3`}>
                <div className="flex items-center gap-2">
                    {iconLists.map((icon, index) => (
                        <div className={`border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center p-2 hover:bg-white/10 transition`} 
                             key={icon}
                             style={{transform: `translateX(-${5 * index * 2}px)`}}
                        >
                            <img src={icon} alt={icon} className="w-5 h-5" />
                        </div>
                        )
                    )}
                </div>

            </div>
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default ProjectsSection;