"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerButtonProps {
    btnText: string;
}

function ShimmerButton({ btnText }: ShimmerButtonProps) {
    return (
        <div
            data-aos="slide-up"
            className="relative rounded-full px-4 py-2 text-sm leading-6  shimmer-bg text-white font-medium transition-colors group"
        >
            <Link href="https://www.upwork.com/freelancers/~012952450d75efcbba" className="relative z-10 text-white">
                {btnText} <motion.span
                    aria-hidden="true"
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    &rarr;
                </motion.span>
            </Link>
        </div>
    );
}
export default ShimmerButton;
