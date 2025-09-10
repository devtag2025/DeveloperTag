"use client";

import Image, { StaticImageData } from "next/image"; // ✅ Import StaticImageData
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// ✅ Define interface for props
interface ServiceCardProps {
    title: string;
    tagline: string;
    themeFlag: boolean;
    imageUrl: string | StaticImageData; // ✅ Proper type for Next.js Image
    onGetQuote?: () => void; // Optional callback for quote button
}

export function ServiceCard({ title, tagline, imageUrl, themeFlag, onGetQuote }: ServiceCardProps) { // ✅ Use the interface

    return (
        <CardContainer data-aos="fade-up" className="inter-var h-full" containerClassName="py-4">
            <CardBody
                className={`${themeFlag ? "bg-[#dcf3ec]" : "relative bg-gradient-to-br from-green-200/40 via-white to-green-300/40"} 
  group/card dark:hover:shadow-2xl cursor-pointer dark:hover:shadow-emerald-500/[0.1] 
  dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
  w-auto sm:w-[22rem] h-full rounded-xl p-6 border flex flex-col overflow-hidden`}
            >
                {/* Soft blur overlay */}
                {!themeFlag && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 via-transparent to-green-400/30 blur-2xl"></div>
                )}

                {/* Content */}
                <CardItem translateZ="100" className="w-full mt-4 relative z-10">
                    <Image
                        src={imageUrl}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover shadow-md rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <CardItem translateZ="50" className="text-xl mt-2 font-bold relative z-10 text-black">
                    {title}
                </CardItem>

                <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 relative z-10 text-gray-800">
                    {tagline}
                </CardItem>

                <CardItem translateZ="80" className="mt-auto pt-4 relative z-10">
                    <button
                        onClick={onGetQuote}
                        className={`
        group inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        ${themeFlag
                                ? "bg-white text-[#13a87c] hover:bg-gray-50 shadow-lg hover:shadow-xl"
                                : "bg-[#13a87c] text-white hover:bg-[#0f8a6b] shadow-lg hover:shadow-xl shadow-emerald-500/25"
                            }
        hover:shadow-2xl
      `}
                    >
                        <span>Get Quote</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </CardItem>
            </CardBody>



        </CardContainer>
    );
}