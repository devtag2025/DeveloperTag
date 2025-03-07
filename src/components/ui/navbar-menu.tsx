"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link, { LinkProps } from "next/link";
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
                className="cursor-pointer text-gray-800 dark:text-white font-medium text-lg hover:text-blue-500"
            >
                {item}
            </motion.p>
            {active !== null && (
                <AnimatePresence>
                    {active === item && children && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={transition}
                            className="absolute top-full  transform -translate-x-1/2 pt-4"
                        >
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg"
                            >
                                <motion.div className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
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
            className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between 
            bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg 
            px-6 py-2 md:px-8 md:py-3 w-full max-w-5xl rounded-full transition-all z-50"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/assets/logo.jfif"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer rounded-full"
                />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-800 dark:text-white"
            >
                {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">{children}</div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white dark:bg-gray-900 
                        shadow-xl z-50 flex flex-col items-center pt-16 px-6 space-y-6 md:hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-gray-800 dark:text-white"
                        >
                            <CloseIcon size={28} />
                        </button>

                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};


export const HoveredLink = ({
    children,
    ...rest
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => { // ✅ Proper type definition
    return (
        <Link
            {...rest}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
        >
            {children}
        </Link>
    );
};

