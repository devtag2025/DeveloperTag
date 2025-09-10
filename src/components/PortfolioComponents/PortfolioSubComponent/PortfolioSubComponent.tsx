"use client"
import { Spotlight } from '@/components/ui/spotlight-new';
import React from 'react';
import Image from 'next/image';
import { portfolioData } from "@/db/PortfolioData";
import { usePathname } from 'next/navigation';
import Button from '@/common/Button';
import { cn } from "@/lib/utils";

interface PortfolioData {
    slug: string;
    item: {
        title: string;
        tagLine: string;
        projectScope: {
            description: string;
        };
        techStack: string[];
        previewImage: string;
        websiteDemo: string;
        mobileDemo: string;
        adminPanelImage: string;
    };
}

function PortfolioSubHero() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const portfolioItem = portfolioData.find((data) => data.slug.endsWith(slug)) as PortfolioData | undefined;

    if (!portfolioItem) {
        return (
            <section className="relative w-full bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Project Not Found</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        The project you are looking for does not exist.
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
                            {/* Portfolio badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5">
                                <span className="text-sm font-medium text-[#13a87c]">
                                    Portfolio Project
                                </span>
                            </div>

                            {/* Project Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {portfolioItem.item.title.split(' ').map((word, index) => {
                                    // Make the last word or specific keywords green
                                    const isLastWord = index === portfolioItem.item.title.split(' ').length - 1;
                                    const isKeyword = ['App', 'Platform', 'System', 'Solution', 'Website'].includes(word);

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

                            {/* Project Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {portfolioItem.item.tagLine}
                            </p>

                            {/* Tech stack features */}
                            {portfolioItem.item.techStack && (
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {portfolioItem.item.techStack.slice(0, 4).map((tech: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* CTA button */}
                            <div className="flex justify-center lg:justify-start pt-4">
                                <Button mailto="daniyalsohaildev@gmail.com" withArrow variant="light">
                                    View Project
                                </Button>
                            </div>
                        </div>

                        {/* Right side visual/content */}
                        <div className="relative">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                {/* Project visual container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#13a87c]/10 to-[#18CB96]/20">

                                    {/* Project preview image */}
                                    {portfolioItem.item.previewImage ? (
                                        <div style={{ aspectRatio: '16/10' }} className="relative w-full">
                                            <Image
                                                src={portfolioItem.item.previewImage}
                                                alt={portfolioItem.item.title}
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
                                                    {portfolioItem.item.title}
                                                </h3>
                                                <p className="text-white/90 text-sm">
                                                    Portfolio Project
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

export default PortfolioSubHero;
