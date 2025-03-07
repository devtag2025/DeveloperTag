"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ContentItem {
    title: string;
    description: string;
    content?: React.ReactNode; // ✅ Properly typed
}

interface StickyScrollProps {
    content: ContentItem[];
    contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null); // ✅ Use React.RefObject<HTMLDivElement>

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"];

    // ✅ Memoized linearGradients using useMemo to prevent recreation on every render
    const linearGradients = useMemo(
        () => [
            "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
            "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
            "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
        ],
        []
    );

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard, linearGradients]); // ✅ Now linearGradients is stable and won't trigger extra renders.

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scrollbar-hide"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
