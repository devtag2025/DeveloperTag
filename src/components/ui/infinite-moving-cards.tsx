"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);



    const getDirection = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    }, [direction]); // ✅ Dependencies

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            const speedMap: Record<string, string> = {
                fast: "20s",
                normal: "40s",
                slow: "80s",
            };
            containerRef.current.style.setProperty(
                "--animation-duration",
                speedMap[speed] || "40s" // Default to normal speed
            );
        }
    }, [speed]); // ✅ Dependencies



    // ✅ Wrap addAnimation in useCallback to stabilize the function reference
    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            if (!start) setStart(true); // Ensure animation starts only once

            const scrollerContent = Array.from(scrollerRef.current.children);

            // Avoid infinite duplication by checking for existing duplicated items
            if (scrollerContent.length < items.length * 2) {
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });
            }

            getDirection();
            getSpeed();
        }
    }, [items.length, start, getDirection, getSpeed]); // ✅ Added getDirection and getSpeed


    useEffect(() => {
        addAnimation();
    }, [addAnimation]); // ✅ Fix: addAnimation added to the dependency array



    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        key={item.name}
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 
                      border-slate-700 px-8 py-6 md:w-[450px] 
                      bg-gradient-to-b from-[#4E15BF] to-[#3B0C91]"
                    >
                        <blockquote>
                            <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-gray-200 font-normal">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] text-gray-200 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
