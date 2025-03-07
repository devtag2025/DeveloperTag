"use client"
import React from 'react'
import { Spotlight } from '../ui/spotlight-new'
import { usePathname } from 'next/navigation';
import { servicesHeroData } from '@/db/ServiceData';
import ShimmerButton from '@/common/ShimmerButton';

function ServiceHero() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const serData = servicesHeroData.find((data) => data.slug === slug);

    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-[#4E15BF]/[0.96] bg-grid-white/[0.08]">
            <Spotlight />

            {serData ? (
                <div className="p-4 relative z-10 w-full text-center mt-8">
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        {serData.heading}
                    </h1>

                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
                        {serData.text}
                    </p>


                    <div className="sm:mb-6 mt-8 sm:flex sm:justify-center">
                        <ShimmerButton btnText={"Get a Quote"} />
                    </div>
                </div>
            ) : (
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold">Service Not Found</h2>
                    <p className="mt-2 text-lg text-gray-400">
                        The service you are looking for does not exist.
                    </p>
                </div>
            )}
        </div>
    )
}

export default ServiceHero;
