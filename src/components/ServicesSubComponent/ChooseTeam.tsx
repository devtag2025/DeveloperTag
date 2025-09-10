"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Heading from "@/common/Heading";

export function ChooseTeam() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading headOne="Choose Your Own " headTwo="Team From Our"
                headThree="Available Options" />
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Project-Based"
                    description="Get a complete solution tailored to your specific project needs."
                />

                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Developer’s Plan - Availability by Hours/Days"
                    description="Hire skilled developers on an hourly or daily basis as per your requirements."
                />

                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Hire a Dedicated Team of Developers"
                    description="Build a reliable team to work exclusively on your project."
                />

                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="More Customizations?"
                    description="Get tailored features and functionalities designed for your specific needs."
                />

                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Coming Soon on Aceternity UI"
                    description="Stay tuned for our latest UI updates and design improvements."
                />

            </ul>

        </div>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div data-aos="slide-up" className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-[#13a87c] text-[#13a87c] p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-[#13a87c] dark:text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
