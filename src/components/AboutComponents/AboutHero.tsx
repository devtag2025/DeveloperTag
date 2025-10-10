"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from '../ui/spotlight-new';
import Button from '@/common/Button';

const AboutHero: React.FC = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Grid pattern background */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full top-0",
                        "bg-[size:80px_80px]",
                        "bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]",
                        "opacity-60 z-[1]"
                    )}
                />

                {/* Spotlight positioned absolutely */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <Spotlight />
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Main content container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-12">

                        {/* Left side content */}
                        <div className="space-y-6 text-center lg:text-left relative z-10">
                            {/* Company badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5">
                                <span className="text-sm font-medium text-[#13a87c]">
                                    Welcome To DeveloperTag
                                </span>
                            </div>

                            {/* Main headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Where innovative ideas meet{" "}
                                <span className="text-[#13a87c]">Expert Development</span>{" "}
                                & <span className="text-[#13a87c]">Bold Execution</span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                We transform cutting-edge concepts into powerful digital solutions that drive business growth,
                                innovation, and lasting success in today&apos;s competitive landscape.
                            </p>



                            {/* CTA button */}
                            <div className="flex justify-center lg:justify-start pt-4">
                                <Button mailto="admin@developertag.com" withArrow variant="light">
                                    Let&apos;s Start Your Project
                                </Button>
                            </div>


                        </div>

                        {/* Right side - Abstract Code Display */}
                        <div className="relative">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                {/* Code-like container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 p-6">
                                    {/* Terminal header */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <div className="ml-4 text-gray-400 text-sm font-mono">DeveloperTag.tsx</div>
                                    </div>

                                    {/* Code content */}
                                    <div className="space-y-3 text-sm font-mono">
                                        <div className="text-purple-400">
                                            <span className="text-blue-400">const</span> <span className="text-yellow-300">innovation</span> = {"{"}
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            <span className="text-green-400">ideas</span>: <span className="text-orange-400">&apos;cutting-edge&apos;</span>,
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            <span className="text-green-400">execution</span>: <span className="text-orange-400">&apos;flawless&apos;</span>,
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            <span className="text-green-400">results</span>: <span className="text-orange-400">&apos;extraordinary&apos;</span>
                                        </div>
                                        <div className="text-purple-400">{"}"}</div>

                                        <div className="pt-2">
                                            <span className="text-blue-400">function</span> <span className="text-yellow-300">buildSolutions</span>() {"{"}
                                        </div>
                                        <div className="pl-4 text-gray-300">
                                            <span className="text-pink-400">return</span> <span className="text-cyan-400">transform</span>(<span className="text-green-400">innovation</span>)
                                        </div>
                                        <div className="text-purple-400">{"}"}</div>

                                        {/* Cursor animation */}
                                        <div className="flex items-center">
                                            <span className="text-gray-400">$</span>
                                            <span className="text-green-400 ml-2">npm run success</span>
                                            <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Success message */}
                                    <div className="mt-4 p-3 bg-green-900/30 border border-green-500/30 rounded">
                                        <div className="text-green-400 text-xs font-mono">
                                            ✓ Project compiled successfully
                                        </div>
                                        <div className="text-green-300 text-xs font-mono mt-1">
                                            Ready for deployment
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#13a87c]/10 rounded-full blur-xl" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#18CB96]/10 rounded-full blur-2xl" />

                                {/* Code symbols floating */}
                                <div className="absolute top-8 right-8 text-[#13a87c] text-xl opacity-60 font-mono">{"</>"}</div>
                                <div className="absolute bottom-12 left-8 text-[#18CB96] text-lg opacity-40 font-mono">{"{}"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;