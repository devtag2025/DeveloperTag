"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    tagline: string;
    themeFlag: boolean;
    imageUrl: string | StaticImageData;
    url?: string;
    onGetQuote?: () => void;
}

export function ServiceCard({ title, tagline, imageUrl, themeFlag, url, onGetQuote }: ServiceCardProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardContent = (
        <div className={`relative h-full rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${
            themeFlag 
                ? "bg-white border-gray-200 hover:border-[#13a87c]" 
                : "bg-gradient-to-br from-white via-[#f8fffe] to-[#dcf3ec] border-[#13a87c]/20 hover:border-[#13a87c]"
        } ${url ? "cursor-pointer" : ""}`}>
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 opacity-0"
                animate={isHovered ? {
                    opacity: [0, 0.3, 0],
                } : {}}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            />

            {/* Floating Sparkles Effect */}
            {isHovered && (
                <>
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#13a87c] rounded-full"
                            initial={{ 
                                x: Math.random() * 100 + '%', 
                                y: Math.random() * 100 + '%',
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                y: [
                                    `${Math.random() * 100}%`, 
                                    `${Math.random() * 100}%`
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Badge on Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 z-20"
                >
                    <div className="bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full p-2 shadow-lg">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-6 flex-1 flex flex-col">
                {/* Title */}
                <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#13a87c] transition-colors duration-300"
                    animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                >
                    {title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-4">
                    {tagline}
                </p>

                {/* Get Quote Button */}
                <motion.button
                        onClick={onGetQuote}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                        className={`
                        w-full group/btn inline-flex items-center justify-center gap-2 px-6 py-3 
                        rounded-full font-semibold text-sm transition-all duration-300 
        ${themeFlag
                            ? "bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white shadow-lg hover:shadow-xl"
                            : "bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white shadow-lg hover:shadow-2xl"
                            }
      `}
                    >
                        <span>Get Quote</span>
                    <motion.div
                        animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </motion.button>
            </div>

            {/* Corner Accent */}
            <motion.div 
                className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#13a87c]/10 to-transparent rounded-br-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Pulse Ring Effect */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 border-2 border-[#13a87c] rounded-2xl"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {url ? (
                <Link href={url} className="block h-full">
                    {cardContent}
                </Link>
            ) : (
                <div className="h-full">
                    {cardContent}
                </div>
            )}
        </motion.div>
    );
}