import  React from "react";
import {Spotlight} from "@/ui/Spotlight";
import {cn} from "@/lib/utils";
import {TextGenerateEffect} from "@/ui/TextGenerateEffect";
import MagicButton from "@/ui/MagicButton";
import {HoverBorderGradient} from "@/ui/hover-button-gradient";
import MagicButton2 from "@/ui/Magic-Button2";
import {FaLocationArrow} from "react-icons/fa";
import {AnimatedPinDemo} from "@/ui/PinContainer";

const Hero = () => {
   return(
       <>
           <div className={`pb-20 pt-20`}>
               <div>
                   <Spotlight className={`-top-0 left-10 md:left-32 md:top-20 h-screen` } fill={"white"}/>
                   <Spotlight className={`-top-0 left-full md:right-32 md:top-20 h-screen` } fill={"purple"}/>
                   <Spotlight className={`-top-18 left-70  h-[80vh] w-[50vw]` } fill={"blue"}/>
               </div>

               <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 bg-white dark:bg-black absolute top-0 left-0">
                   <div
                       className={cn(
                           "absolute inset-0",
                           "[background-size:40px_40px]",
                           "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                           "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                       )}
                   />
                   {/* Radial gradient for the container to give a faded look */}
                   <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"/>


               </div>
               
               <div className={`flex justify-center relative my-20 z-10 mt-0 `}>
                   <div className={`max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center top-0`}>
                       <MagicButton2
                           title="Available For Hire"
                           otherClasses= {`mb-10`}
                       />
                       <h1 className={`uppercase tracking-widest max-w-80 text-xs text-center text-transparent bg-gradient-to-br from-black/40 to-black/80 bg-clip-text dark:text-transparent  `}>
                           Dynamic Web Magic with Next.js
                       </h1>
                     
                       <TextGenerateEffect
                           className={`text-center text-[40px]   md:text-2xl max-w-lg:text-2xl xl:text-5xl mt-5 leading-tight md:leading-snug lg:leading-snug font-extrabold`}
                           words={`Transforming Concepts into Seamless Experiences`} 
                       />
                       {/*<p className={`text-center md:tracking-wider mb-4 text-md `}>*/}
                       {/*    Hi, I&apos;m Jeremy, A Software Developer*/}
                       {/*    based in Nigeria*/}
                       {/*</p>*/}
                       <TextGenerateEffect
                           className={`text-center md:tracking-wider mb-4 text-md`}
                           words={`Hi, I'm Jeremy, A Software Developer based in Nigeria`}
                       />
                       
                           <a href={`about`} >
                               <MagicButton
                                   title="Check Out My Projects"
                                   icon={<FaLocationArrow/>} position={""} otherClasses={""}                               />

                           </a>

                       
                   </div>

               </div>


               
           </div>
       </>
   )
}
export default Hero;