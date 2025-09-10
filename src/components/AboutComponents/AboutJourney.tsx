"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Heading from "@/common/Heading";

const content = [
    {
        title: "2014",
        description:
            "Planned and researched about the market and set our ideas in practicality when we launched officially in Doha, Qatar",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/ten.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "2016",
        description:
            "Created and maintained our brand’s presence locally and internationally by managing a sufficient clientele",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/siz.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "2017",
        description:
            "Launched our second regional office in Lahore, Pakistan with an aim to take over the Asian industry trends and tech advancements",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <Image
                    src="/elev.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "2019",
        description:
            "Defined our goals for the next five years and made our name among the most prominent software houses in town",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/three.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "2020",
        description:
            "Completed 70+ projects and announced our expansion’s continuation by launching our head office in the US",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/o.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "2022",
        description:
            "Continue to work tirelessly to achieve our goals and become an eminent technology house with global standards",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/one.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function AboutJourney() {
    return (
        <div className="py-10 scrollbar-hide">
            <Heading headOne="How we" headTwo="Did" headThree="This" />
            <StickyScroll content={content} />
        </div>
    );
}
