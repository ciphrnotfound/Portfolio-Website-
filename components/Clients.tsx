import React, {Fragment} from 'react'
import {InfiniteMovingCards} from "@/ui/infinite-moving-cards";
import {testimonials} from "@/data";
import {companies} from "@/data";
import {InfiniteMovingCardsDemo} from "@/ui/infinitemovingcarddemo";

const Clients  = () => {
    return (
        <div className={`py-20 mt-10`} id="Testimonials">
            <h1 className={`heading`}>
                Kind words from <br/>
                <span className={`text-transparent bg-gradient-to-bl from-black/80 to-white/80 bg-clip-text`}>Satisfied Clients</span>
            </h1>
            <div className={`flex flex-col items-center mt-10`} >

                <div className={`h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden`}>
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
                </div>

                <div className={`flex flex-wap items-center justify-center gap-10 `}>
                    {companies.map(({id,img,name,nameImg}) => (
                        <div key={id} className={`flex md:max-w-60 max-w-32 gap-2  `}>
                            <img
                                src={img}
                                alt={name}
                                className="md:w-10 w-5"
                            />
                            <img
                                src={nameImg}
                                alt={name}
                                className="md:w-24 w-20"
                            />
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
export default Clients;