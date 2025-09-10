"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface PortfolioCardProps {
    title: string;
    tagline: string;
    imageUrl: string | StaticImageData;
}

export function PortfolioCard({ title, tagline, imageUrl }: PortfolioCardProps) {
    return (
        <CardContainer data-aos="fade-up" className="inter-var">
            <CardBody
                className="relative group/card 
          bg-gradient-to-br from-green-200 via-green-100 to-green-300
          dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
          dark:bg-black dark:border-white/[0.2] border-black/[0.1]
          w-auto sm:w-[22rem] h-auto rounded-xl p-6 border overflow-hidden"
            >
                {/* Soft blur overlay for glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 via-transparent to-green-400/30 blur-2xl"></div>

                {/* Title */}
                <CardItem translateZ="50" className="text-xl font-bold text-gray-900 relative z-10">
                    {title}
                </CardItem>

                {/* Tagline */}
                <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-gray-700 relative z-10">
                    {tagline}
                </CardItem>

                {/* Preview Image */}
                <CardItem translateZ="100" className="w-full mt-4 relative z-10">
                    <Image
                        src={imageUrl}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                {/* CTA Button */}
                <div className="flex justify-between items-center mt-8 relative z-10">
                    <Link
                        href={"/portfolio/qserv"}
                        className="px-4 py-2 rounded-xl bg-[#13a87c] text-white text-xs font-bold hover:bg-[#0f8a6b] transition"
                    >
                        Try now →
                    </Link>
                </div>
            </CardBody>
        </CardContainer>
    );
}
