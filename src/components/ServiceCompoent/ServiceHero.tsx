"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from '../ui/spotlight-new';
import Button from '@/common/Button';

const ServiceHero: React.FC = () => {
    return (
        <section className="relative w-full bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
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

                {/* Centered content */}
                <div className="flex flex-1 w-full flex-col items-center justify-center text-center relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-8">
                        <span className="text-sm font-medium text-[#13a87c]">
                            Our Services
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-900 sm:text-7xl">
                        Transform Your Business
                        <span className="relative whitespace-nowrap text-gray-900"> With</span>
                        <span className="relative whitespace-nowrap text-[#13a87c]">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 418 42"
                                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#13a87c]/60"
                                preserveAspectRatio="none"
                            >
                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                            </svg>
                            <span className="relative">Expert Development</span>
                        </span>
                    </h1>

                    {/* Description */}
                    <h2 className="mx-auto mt-12 max-w-xl text-lg text-gray-600 leading-7">
                        Experience the future of digital innovation with our comprehensive development services.
                        From web applications to mobile solutions, we deliver excellence at every step.
                    </h2>

                    {/* CTA Button */}
                    <div className="flex justify-center lg:justify-start pt-4">
                        <Button mailto="daniyalsohaildev@gmail.com" withArrow variant="light">
                            Let&apos;s Start
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;