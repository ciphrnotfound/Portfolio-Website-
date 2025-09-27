import React from 'react'
import {BentoGrid, BentoGridItem} from "@/ui/BentoGrid";
import {motion} from "framer-motion";
import {gridItems} from "@/data";
const Grid = () => {
    return( 
        <>
            <section>
                <BentoGrid>
                    {gridItems.map
                    (({ id,title, description, img, imgClassName, titleClassName, spareImg,  className} ) => (
                        <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                        />
                    ))
                    }
                </BentoGrid>
            </section>
        </>
    )
}
export default Grid