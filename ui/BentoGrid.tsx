// // export const BentoGrid = ({
//                               className,
//                               children,
//                           }: {
//     className?: string;
//     children?: React.ReactNode;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:gap-4 md:auto-rows-[12rem] md:grid-cols-3 lg:grid-cols-12 xl:grid-cols-3",
//                 className,
//             )}
//         >
//             {children}
//         </div>
//     );
// };
//
// export const BentoGridItem = ({
//                                   className,
//                                   title,
//                                   description,
//                                     img,
//                                     imgClassName,
//                                         titleClassName,
//                                     spareImg,
//                                   header,
//                                   icon,
//                                   id,
//                               }: {
//     className?: string,
//     title?: string | React.ReactNode,
//     description?: string | React.ReactNode,
//     header?: React.ReactNode,
//     icon?: React.ReactNode,
//     id?: number,
//     img?: string,
//     imgClassName?: string,
//     titleClassName?: string,
//     spareImg?: string,
// }) => {
//     return (
//         <div
//             className={cn(
//                 "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-3 relative rounded-3xl bg-white  p-4 transition duration-200 hover:shadow-xl dark:border-neutral-200 dark:bg-white/10 backdrop-blur-xl dark:shadow-none  min-h-[7rem] md:min-h-[12rem] overflow-hidden",
//                 className,
//
//             )}
//             style={{
//               
//             }}
//         >
//             <div className={`${id === 6} && 'flex justify-center h-full'`}>
//                 <div className={`w-full h-full absolute`}>
//                     {img &&(
//                         <img
//                             src={img}
//                             alt={img}
//                             className={cn(imgClassName, "object-cover, object-center")}
//                         />
//                     )}
//                 </div>
//             </div>
//             {header}
//             <div className="transition duration-200 group-hover/bento:translate-x-2 group-hover/bento:scale-[1.02]">
//                 {icon}
//                 <div className="mt-1 mb-1 font-sans font-bold text-neutral-700 dark:text-neutral-200 text-sm md:text-base">
//                     {title}
//                 </div>
//                 <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed">
//                     {description}
//                 </div>
//             </div>
//         </div>
//     );
// };
"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundGradientAnimation } from "@/ui/GradientBg";
import {Globe} from "@/ui/Globe";
import {GlobeDemo} from "@/ui/GridGlobe";
import MagicButton from "@/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";
import {useState} from "react";
import confetti from "canvas-confetti";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Slightly smaller, tighter layout with compact row heights
        "mx-auto grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-6 lg:grid-cols-12 auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[200px] px-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  header,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('akinlorinjeremiah@gmail.com');
    setCopied(true);
    if (id === 6) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    }
  };
  return (
    <div
      className={cn(
        // base card container: relative so children absolute layers are positioned correctly
        "group/bento relative flex flex-col justify-between rounded-xl bg-black dark:bg-white/10 shadow-sm hover:shadow-md backdrop-blur-xl border border-gray-200 dark:border-gray-800  p-4 transition-all duration-300 hover:scale-[1.01] overflow-hidden",
        className
      )}
    >
      {/* Background image (z-0) */}
      {img && (
        <img
          src={img}
          alt={title?.toString() || "grid image"}
          className={cn(
            imgClassName,
            // make sure the image sits behind content, covers whole card and doesn't block interactions
            "absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
          )}
        />
      )}

      {/* subtle universal overlay to raise contrast for text */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t  to-transparent from-black/60 dark:to-transparent"></div>

      {/* special gradient layer for the 6th card */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-15 pointer-events-none">
            {/* a stronger color overlay to ensure readable white text */}
            
          </div>
        </BackgroundGradientAnimation>
      )}

      {/* Tech badges for the 3rd card: positioned relative to the card container (right edge) */}
          {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          {/* Horizontal wrapper keeps the two columns side-by-side */}
        
            {/* Column 1 */}
             <div className="flex flex-col gap-3 lg:gap-4"> 
               {['React.js', 'Next.js', 'TypeScript'].map((tech, index) => (
                <span
                  key={index}
                  className="py-2 lg:py-2 lg:px-2 px-3 text-white text-xs lg:text-base opacity-50 lg:opacity-100
                  rounded-lg text-center bg-[#10132E]"
                >
                  {tech}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[##10132e]"/>
              </div>

            {/* Column 2 (duplicate) */}
            <div className="flex flex-col gap-3 lg:gap-3"> 
               {['Tailwind CSS', 'Express Js', 'React Native'].map((tech, index) => (
                <span
                  key={index}
                  className="py-3 lg:py-2 lg:px-2 px-3 text-xs text-white lg:text-base opacity-50 lg:opacity-100 
                  rounded-lg text-center bg-[#10132E]"
                >
                  {tech}
                </span>
              ))}
              </div>
        </div> 
      //   
)}


      {/* spare image area (kept behind content) */}
      <div
        className={cn(
          "absolute right-0 -bottom-5 z-5",
          id === 5 && "w-full opacity-80"
        )}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className={cn("object-cover object-center w-full h-full pointer-events-none")}
          />
        )}
      </div>

      {/* Content wrapper - ensure it sits above background layers */}
      <div
        className={cn(
          "relative z-20 flex flex-col items-start md:items-start px-5 py-4 lg:px-8 lg:py-6",
          // keep titleClassName but avoid it overwriting z or layout
          titleClassName
        )}
      >
        {header}

        {/* main content */}
        <div className="relative z-20 transition-transform duration-300 group-hover:translate-x-0.5 text-left">
          {icon}
          <h3
            className={cn(
              // default title color; if this is the 6th card, force white for contrast
              id === 6 ? " font-semibold text-white text-lg md:text-xl " : " font-semibold text-gray-950 dark:text-gray-100 text-base md:text-lg",
              titleClassName
            )}
          >
            
            {title}
          </h3>
                
          {id === 2 && <GlobeDemo/>}

          {/* CTA for the 6th card (visual only for now) */}
          {/*{id === 6 && (*/}
          {/*  <div className="mt-4">*/}
          {/*    <button*/}
          {/*      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition"*/}
          {/*      aria-hidden*/}
          {/*    >*/}
          {/*      Get in Touch*/}
          {/*      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
          {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
          {/*      </svg>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*)}*/}

          {/* ...rest of the component */}
          {id === 6 && (
              <div className="mt-5 relative flex flex-col items-center">
                <MagicButton
                    title={copied ? 'Email Copied 🎉' : 'Copy My Email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="!bg-[#161a31] "
                    handleClick={handleCopy}
                />
                
              </div>
          )}
        </div>
      </div>
    </div>
  );
};
