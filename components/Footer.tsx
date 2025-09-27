import React from "react";
import MagicButton from "@/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import {socialMedia} from "@/data";
import {PlaceholdersAndVanishInputDemo} from "@/ui/Inputform";
 const FootArea = () => {
    return(
        <footer className={`w-full pt-20 pb-10 `} id="contact">
            <div className={`w-full absolute left-0 -bottom-72 min-h-96`}>
                <img src="/footer-grid.svg"
                     alt="grid"
                     className="w-full h-full opacity-100"
                />

            </div>
            <div className={`flex flex-col items-center`}>
                <h1 className={`heading lg:max-w-p-[45vw]`}>
                    Ready To take <span className={`text-transparent bg-gradient-to-br from-black/40 to-black/80 dark:from-white/30 dark:to-white/80 bg-clip-text `}>your</span> digital
                    presence to the <span className={`text-transparent bg-gradient-to-br from-black/40 to-black/80 dark:from-white/30 dark:to-white/80 bg-clip-text `}>next level?</span>
                </h1>

                <p className={`text-white-200 md:mt-10 my-5 text-center`}>React out to me today and let&apos;s discuss how i can help you achieve your goals.
                </p>
                <a href="mailto:akinlorinjeremiah@gmail.com">
                    <MagicButton title="Lets get in touch"

                                 position="right"
                    />
                </a>
            </div>
          
            <div className={`flex mt-16 md:flex-row flex-col justify-between items-center`}>
                <p className={`md:text-base text-sm md:font-normal font-light `}>Copywright  ©Shay Jeremy </p>
                <div className={`flex items-center md:gap-3 gap-6`}>
                    {socialMedia.map((profile) => (
                        <div key={profile.id}>
                       <img src={profile.img} alt={profile.id} width={20}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default FootArea;
