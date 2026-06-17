"use client";

import { useState, useEffect } from "react";
import Button from "@/common/Button";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight-new";
import { motion, AnimatePresence } from "framer-motion";

// Rotating accent phrases (green part — Expert Development wala)
const ACCENT_PHRASES = [
    "Expert Development",
    "AI Solutions",
    "Digital Innovation",
    "Scalable Software",
    "Future-Ready Tech",
];
const ROTATE_INTERVAL_MS = 2800;

const HeroSection = () => {
    const [accentIndex, setAccentIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setAccentIndex((prev: number) => (prev + 1) % ACCENT_PHRASES.length);
        }, ROTATE_INTERVAL_MS);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full top-0",
                        "bg-[size:80px_80px]",
                        "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]",
                        "opacity-70 z-[1]"
                    )}
                />

                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <Spotlight />
                </div>

                {/* Subtle gradient for comprehensive feel */}
                <div
                    className="absolute inset-0 z-0 bg-gradient-to-br from-[#13a87c]/05 via-transparent to-[#18CB96]/08"
                    aria-hidden
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-8 sm:mt-12">
                        {/* Left: Copy */}
                        <div className="space-y-6 text-center lg:text-left">
                            {/* Welcome badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#13a87c] opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#13a87c]" />
                                </span>
                                <span className="text-sm font-medium text-[#13a87c]">
                                    Welcome To DeveloperTag
                                </span>
                            </div>

                            {/* Headline — "Where innovative" static, green part rotates */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight min-h-[1.15em] sm:min-h-[1.1em]">
                                <span className="block text-gray-900">
                                    Where innovative ideas meet{" "}
                                </span>
                                <span className="block mt-0.5 min-h-[1.05em]">
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={accentIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35 }}
                                            className="block text-[#13a87c]"
                                        >
                                            {ACCENT_PHRASES[accentIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Transforming innovative ideas into cutting-edge digital solutions that drive business growth and success.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                                <Button mailto="admin@developertag.com" withArrow variant="light">
                                    Let&apos;s Start
                                </Button>
                            </div>

                            <p className="text-xs text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                                <span className="inline-block w-4 h-px bg-gray-300" />
                                Enterprise-grade · Trusted by teams worldwide
                            </p>
                        </div>

                        {/* Right: Video */}
                        <div className="relative order-first lg:order-none">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover"
                                        style={{ aspectRatio: "16/10" }}
                                    >
                                        <source src="/assets/bg.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#13a87c]/10 rounded-full blur-xl pointer-events-none" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#18CB96]/10 rounded-full blur-2xl pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
