"use client"
import React from 'react'
import Image from 'next/image'
import { Spotlight } from '../ui/spotlight-new'
import { usePathname } from 'next/navigation';
import { servicesHeroData } from '@/db/ServiceData';
import { cn } from "@/lib/utils";
import Button from '@/common/Button';

interface ServiceData {
    slug: string;
    heading: string;
    text: string;
    image: string;
    category?: string;
    features?: string[];
}

function ServiceSubHero() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const serData = servicesHeroData.find((data) => data.slug === slug) as ServiceData | undefined;

    if (!serData) {
        return (
            <section className="relative w-full bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Service Not Found</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        The service you are looking for does not exist.
                    </p>
                </div>
            </section>
        );
    }

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
                            {/* Service badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5">
                                <span className="text-sm font-medium text-[#13a87c]">
                                    {serData?.category || "Our Services"}
                                </span>
                            </div>


                            {/* Service Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {serData.heading.split(' ').map((word, index) => {
                                    // Make the last word or specific keywords green
                                    const isLastWord = index === serData.heading.split(' ').length - 1;
                                    const isKeyword = ['Development', 'Design', 'Solutions', 'Services'].includes(word);

                                    if (isLastWord || isKeyword) {
                                        return (
                                            <span key={index} className="text-[#13a87c]">
                                                {word}{' '}
                                            </span>
                                        );
                                    }
                                    return word + ' ';
                                })}
                            </h1>

                            {/* Service Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {serData.text}
                            </p>

                            {/* Additional service features */}
                            {serData?.features && (
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {serData.features.slice(0, 3).map((feature: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* CTA button */}
                            <div className="flex justify-center lg:justify-start pt-4">
                                <Button mailto="daniyalsohaildev@gmail.com" withArrow variant="light">
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* Right side visual/content */}
                        <div className="relative">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                {/* Service visual container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#13a87c]/10 to-[#18CB96]/20">

                                    {/* If you have a service image/video */}
                                    {serData.image ? (
                                        <div style={{ aspectRatio: '16/10' }} className="relative w-full">
                                            <Image
                                                src={serData.image}
                                                alt={serData.heading}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 600px"
                                                priority={false}
                                            />
                                        </div>
                                    ) : (
                                        /* Placeholder visual */
                                        <div
                                            className="w-full flex items-center justify-center bg-gradient-to-br from-[#13a87c] to-[#18CB96] text-white"
                                            style={{ aspectRatio: '16/10' }}
                                        >
                                            <div className="text-center p-8">
                                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4z" clipRule="evenodd" />
                                                        <path fillRule="evenodd" d="M8 8a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                                        <path fillRule="evenodd" d="M8 12a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {serData?.category || "Service"}
                                                </h3>
                                                <p className="text-white/90 text-sm">
                                                    Professional Solutions
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#13a87c]/10 rounded-full blur-xl" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#18CB96]/10 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSubHero;