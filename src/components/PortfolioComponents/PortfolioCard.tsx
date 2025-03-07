"use client";

import Image, { StaticImageData } from "next/image"; // ✅ Import StaticImageData
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

// ✅ Define interface for props
interface PortfolioCardProps {
    title: string;
    tagline: string;
    imageUrl: string | StaticImageData; // ✅ Proper type for Next.js Image
}

export function PortfolioCard({ title, tagline, imageUrl }: PortfolioCardProps) { // ✅ Use the interface

    return (
        <CardContainer data-aos="fade-up" className="inter-var">
            <CardBody className="bg-[#4E15BF] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border">

                {/* title here */}
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                    {title}
                </CardItem>

                {/* tagline here */}
                <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300">
                    {tagline}
                </CardItem>

                {/* Preview Image */}
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={imageUrl}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <div className="flex justify-between items-center mt-8">
                    <Link
                        href={"/portfolio/qserv"}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                    >
                        Try now →
                    </Link>
                </div>
            </CardBody>
        </CardContainer>
    );
}
