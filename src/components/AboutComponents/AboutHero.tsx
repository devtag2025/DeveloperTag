"use client"
import React from 'react'
import { Spotlight } from '../ui/spotlight-new'



function AboutHero() {
    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-[#4E15BF]/[0.96] bg-grid-white/[0.08]">
            <Spotlight />

            <div className="p-4 relative z-10 w-full text-center mt-8">

                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    DeveloperTag: A Vision Turned Legacy

                </h1>

                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
                    Talk  || Connect || Initiate
                </p>

            </div>
        </div>
    );
}

export default AboutHero;
