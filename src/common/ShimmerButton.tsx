"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerButtonProps {
    btnText: string;
    onClick?: () => void;
    href?: string;
}

function ShimmerButton({ btnText, onClick, href }: ShimmerButtonProps) {
    const buttonContent = (
        <>
            {btnText} <motion.span
                aria-hidden="true"
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                &rarr;
            </motion.span>
        </>
    );

    if (onClick) {
        return (
            <button
                onClick={onClick}
                data-aos="slide-up"
                className="relative rounded-full px-4 py-2 text-sm leading-6 shimmer-bg text-white font-medium transition-colors group cursor-pointer"
            >
                <span className="relative z-10 text-white">
                    {buttonContent}
                </span>
            </button>
        );
    }

    return (
        <div
            data-aos="slide-up"
            className="relative rounded-full px-4 py-2 text-sm leading-6  shimmer-bg text-white font-medium transition-colors group"
        >
            {href ? (
                <Link href={href} className="relative z-10 text-white">
                    {buttonContent}
                </Link>
            ) : (
                <Link href="https://www.upwork.com/freelancers/~012952450d75efcbba" className="relative z-10 text-white">
                    {buttonContent}
                </Link>
            )}
        </div>
    );
}
export default ShimmerButton;
