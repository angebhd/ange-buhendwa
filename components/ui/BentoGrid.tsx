'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradient-bg";
import { GlobeDemo } from "./GridGlobe";
import { div } from "motion/react-client";
import Lottie from "react-lottie";
import { useState } from "react";

import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

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
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",

                // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
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
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
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
        navigator.clipboard.writeText("mickaelbhd@gmail.com")
        setCopied(true);

    }
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border border- bg-white/[0.1] p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
                ,
                className,
            )}
            /// cssggradient.io
            style={{
                background: '#040729',
                backgroundColor: 'linear-gradient(90deg, rgba(4, 7, 29, 1) 0 %, rgba(12, 14, 35, 1) 50 %, rgba(237, 221, 83, 1) 100 %)'
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`} >
                <div className=" w-full h-full absolute" >
                    {img && (<img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, 'object-cover object-center')}
                    />)
                    }

                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`} >
                    {spareImg && (<img
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover object-center w-full h-full'}
                    />)}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>

                    </BackgroundGradientAnimation>

                )}

                <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40  flex flex-col px-5 p-5 lg:p-10  ')} >

                    <div className="font-sans text-sm font-extralight text-neutral-600 dark:text-neutral-300 md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className=" font-sans text-lg lg:text-3xl max-w-96 z-10 font-bold text-neutral-600 dark:text-neutral-200">
                        {title}
                    </div>
                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2"  >
                            {/* left */}
                            <div className="flex flex-col gap-3 lg:gap-8" >

                                {["Tailwindcss", 'Next.js', 'Typescript'].map((item) => <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#0c0cdd33] "> {item}</span>)}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#0c0cdd33]" ></span>
                            </div>
                            {/* right */}
                            <div className="flex flex-col gap-3 lg:gap-8" >
                                <span className="py-4 px-3 rounded-lg text-center bg-[#0c0cdd33]" ></span>

                                {["MongoDB", 'SpringBoot', 'Nestjs'].map((item) => <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#0c0cdd33] "> {item}</span>)}
                            </div>
                        </div>
                    )
                    }

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0 `} >
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData: animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }

                                    }}
                                />
                            </div>
                            <MagicButton
                                title={copied ? "Email copied" : "Copy my email"}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />

                        </div>
                    )}

                </div>
            </div>

        </div>
    );
};
