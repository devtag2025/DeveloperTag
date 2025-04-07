"use client"
import React from 'react'
import { Spotlight } from '../ui/spotlight-new'
import ShimmerButton from '@/common/ShimmerButton';
import { usePortfolio, useTestimonial } from '@/store/contextStore';


function HeroSection() {
    const test = useTestimonial()
    const port = usePortfolio()
    console.log("Testimonial data issssssss :", test)
    console.log("Portfolio data issssssss :", port)
    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-[#4E15BF]/[0.96] bg-grid-white/[0.08]">
            {/* Video background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="/assets/bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Spotlight */}
            <Spotlight />

            <div className="p-4 relative z-10 w-full text-center mt-8">
                {/* <HeroParallax products={products} /> */}

                <h1 data-aos="fade-in" className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    From concept to code—and beyond.
                </h1>

                <p data-aos="fade-up" className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
                    Welcome to DeveloperTag—where big ideas meet bold execution
                </p>

                <div className="sm:mb-6 mt-8 sm:flex sm:justify-center">
                    <ShimmerButton btnText={"Get a quote"} />
                </div>
            </div>
        </div>

    );
}

export default HeroSection;
