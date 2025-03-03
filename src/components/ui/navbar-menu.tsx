"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Mobile menu icons

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && children && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state

    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className=" flex items-center justify-between bg-white dark:bg-black 
            border border-transparent dark:border-white/[0.2] shadow-input 
            px-6 py-4 md:px-8 md:py-4 w-full max-w-none fixed top-4 left-1/2 
            -translate-x-1/2 rounded-full"

        >
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/assets/logo.jfif"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer rounded-full mr-8"
                />

            </Link>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-black dark:text-white"
            >
                {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
            </button>

            {/* Menu Items */}
            <div
                className={`${isOpen ? "flex" : "hidden"} 
                md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 
                absolute md:relative top-14 md:top-auto  w-full md:w-auto 
                bg-white dark:bg-black md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none transition-all `}
            >
                {children}
            </div>
        </nav>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black"
        >
            {children}
        </Link>
    );
};
