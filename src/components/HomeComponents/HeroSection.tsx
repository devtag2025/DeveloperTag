"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/common/Button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const PRIMARY = "#13a87c";

const ACCENT_PHRASES = [
    "EXPERT DEVELOPMENT",
    "AI-POWERED SOLUTIONS",
    "DIGITAL INNOVATION",
    "SCALABLE SOFTWARE",
    "FUTURE-READY TECH",
];

const ROTATE_INTERVAL_MS = 3000;

const FLOATING_TAGS = [
    {
        id: "ai-solutions",
        label: "AI Solutions",
        dotColor: PRIMARY,
        positionClass: "top-[20%] left-0 sm:-left-[12%]",
        align: "left" as const,
        duration: 5,
        delay: 0,
    },
    {
        id: "scalable-systems",
        label: "Scalable Systems",
        dotColor: "#3b82f6",
        positionClass: "top-[8%] right-0 sm:-right-[6%]",
        align: "right" as const,
        duration: 5.5,
        delay: 0.6,
    },
    {
        id: "web-app-dev",
        label: "Web & App Development",
        dotColor: "#8b5cf6",
        positionClass: "bottom-[22%] left-0 sm:-left-[14%]",
        align: "left" as const,
        duration: 6,
        delay: 1.2,
    },
    {
        id: "modern-ui-ux",
        label: "Modern UI/UX",
        dotColor: "#f59e0b",
        positionClass: "bottom-[6%] right-0 sm:-right-[5%] sm:bottom-[10%]",
        align: "right" as const,
        duration: 5.8,
        delay: 0.3,
    },
];

const FloatingTag = ({
    label,
    dotColor,
    align,
    duration,
    delay,
    positionClass,
    shouldReduceMotion,
}: (typeof FLOATING_TAGS)[number] & { shouldReduceMotion: boolean | null }) => (
    <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute z-20 flex items-center gap-0 ${positionClass} ${align === "right" ? "flex-row-reverse" : ""}`}
    >
        <div className="flex items-center gap-2.5 rounded-full bg-white px-2 py-1 sm:px-4 sm:py-2.5 shadow-[0_4px_24px_rgba(15,23,42,0.08)]">
            <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: dotColor }}
            />
            <span className="whitespace-nowrap text-[10px] font-medium text-slate-700 sm:text-xs">
                {label}
            </span>
        </div>
        <div className="hidden h-px w-6 bg-slate-300 sm:block" />
        <div className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 sm:block" />
    </motion.div>
);

const HeroSection = () => {
    const [accentIndex, setAccentIndex] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const id = setInterval(() => {
            setAccentIndex((prev) => (prev + 1) % ACCENT_PHRASES.length);
        }, ROTATE_INTERVAL_MS);

        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative w-full px-4 py-6 sm:px-6 sm:py-8">
            <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-[#EAFFF6] px-6 py-12 sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="space-y-8 text-left md:pl-20 lg:pr-4 ">
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[2.25rem] font-extrabold leading-[1.12] text-slate-900 sm:text-5xl md:text-[3.5rem]"
                        >
                            WHERE INNOVATIVE <br />
                            IDEAS MEET{" "}
                            <span className="block min-h-[1.2em]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={accentIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.35 }}
                                        className="block font-extrabold"
                                        style={{ color: PRIMARY }}
                                    >
                                        {ACCENT_PHRASES[accentIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
                        >
                            Transforming ambitious concepts into world-class digital solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button
                                mailto="admin@developertag.com"
                                animated={false}
                                className="!inline-flex !items-center !justify-center !border-0 !bg-[#51A97C] !text-white hover:!text-white rounded-full px-8 py-3.5 text-base font-semibold shadow-none transition-colors duration-200 hover:!bg-[#45966d]"
                            >
                                Let&apos;s Start
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex justify-center"
                    >
                        <div className="relative aspect-square w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[360px]">
                            <div className="relative h-full w-full">
                                <Image
                                    src="/assets/sphere-world-bg.png"
                                    alt="DeveloperTag technology ecosystem"
                                    fill
                                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 540px"
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>

                            {FLOATING_TAGS.map((tag) => (
                                <FloatingTag
                                    key={tag.id}
                                    {...tag}
                                    shouldReduceMotion={shouldReduceMotion}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
