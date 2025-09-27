import React from "react";

const MagicButton2 = ({
                         title,
                         icon,
                         position,
                         handleClick,
                         otherClasses,
                     }: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses: string;
}) => {
    return (
        <button
            onClick={handleClick}
            className={`relative inline-flex h-12 overflow-hidden rounded-2xl md:w-60 md:mt-10 p-[1px] focus:outline-none  focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-50 ${otherClasses}`}
        >
            {/* Green conic gradient border */}
            <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bbf7d0_0%,#22c55e_50%,#bbf7d0_100%)] ${otherClasses} `}/>

            {/* Inner content */}
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-950 px-3 py-1 text-sm font-medium text-green-100 backdrop-blur-3xl  ${otherClasses}`}>
        {icon && <span className="mr-2">{icon}</span>}
                {title}
      </span>
        </button>
    );
};

export default MagicButton2;

