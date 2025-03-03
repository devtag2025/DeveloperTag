"use client"
import { Spotlight } from '@/components/ui/spotlight-new';
import Link from 'next/link';
import React from 'react';
import { portfolioData } from "@/db/PortfolioData";
import { usePathname } from 'next/navigation';

function PortfolioSubHero() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const serData = portfolioData.find((data) => data.slug.endsWith(slug));

    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-black/[0.96] bg-grid-white/[0.05]">
            <Spotlight />

            <div className="p-4 relative z-10 w-full text-center mt-8">
                {serData ? (
                    <div className="mb-10">
                        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            {serData.item.title}
                        </h1>
                        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
                            {serData.item.tagLine}
                        </p>
                    </div>
                ) : (
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Project Not Found
                    </h1>
                )}

                <div className="sm:mb-6 mt-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-4 py-2 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                        <Link href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac" className="relative z-10 text-white">
                            Visit <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioSubHero;
