"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Search, 
    Settings, 
    Sparkles, 
    Users, 
    Target,
    Zap,
    Shield
} from "lucide-react";
import Heading from "@/common/Heading";

// Enhanced values data with theme-consistent colors
const valuesData = [
    {
        id: 1,
        icon: Zap,
        title: "Innovation",
        description: "We push boundaries with creative thinking and the latest technology to deliver cutting-edge solutions."
    },
    {
        id: 2,
        icon: Shield,
        title: "Quality",
        description: "Every project is tested, polished, and held to the highest standards to ensure exceptional results."
    },
    {
        id: 3,
        icon: Users,
        title: "Collaboration",
        description: "We work with you, not just for you—because great things happen when we collaborate together."
    },
    {
        id: 4,
        icon: Target,
        title: "Client Success",
        description: "Your goals drive us. Your wins are our wins. We're committed to your success above all else."
    },
    {
        id: 5,
        icon: Search,
        title: "Scalability",
        description: "We build with tomorrow in mind, so you're ready for what's next and can grow without limits."
    },
    {
        id: 6,
        icon: Settings,
        title: "Excellence",
        description: "We strive for perfection in every detail, delivering solutions that exceed expectations consistently."
    }
];

export function WhatWeValue() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-60" />
            
            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#13a87c]/10 to-[#18CB96]/10 blur-3xl"
                        animate={{
                            x: [0, 100 - (i * 20), 0],
                            y: [0, 50 + (i * 10), 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20 + (i * 3),
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${10 + (i * 15)}%`,
                            top: `${20 + (i * 10)}%`
                        }}
                    />
                ))}
            </div>

            <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <Sparkles className="w-5 h-5 text-[#13a87c] mr-3" />
                        <span className="text-sm font-medium text-[#13a87c]">
                            Our Core Values
                        </span>
                    </div>
                    <Heading headOne="What " headTwo="We" headThree="Value" />
                    <motion.p 
                        className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        These fundamental principles guide everything we do and shape our commitment to excellence.
                    </motion.p>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {valuesData.map((value, index) => (
                        <ValueCard
                            key={value.id}
                            value={value}
                            index={index}
                            isHovered={hoveredCard === value.id}
                            onHover={(hovered) => setHoveredCard(hovered ? value.id : null)}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

// Enhanced Value Card Component
interface ValueCardProps {
    value: {
        id: number;
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        description: string;
    };
    index: number;
    isHovered: boolean;
    onHover: (hovered: boolean) => void;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index, isHovered, onHover }) => {
    const IconComponent = value.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring" }
            }}
            onHoverStart={() => onHover(true)}
            onHoverEnd={() => onHover(false)}
            className="group relative cursor-pointer"
        >
            {/* Main Card Container */}
            <div className="relative bg-white rounded-3xl p-8 h-[320px] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#13a87c]/30">
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 opacity-0"
                    animate={isHovered ? { opacity: [0, 0.3, 0] } : {}}
                    transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                />

                {/* Floating Sparkles Effect */}
                {isHovered && (
                    <>
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full"
                                initial={{ 
                                    x: 50 + (i * 60), 
                                    y: 80 + (i * 40),
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    x: [50 + (i * 60), 100 + (i * 60), 50 + (i * 60)],
                                    y: [80 + (i * 40), 60 + (i * 40), 80 + (i * 40)]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                            />
                        ))}
                    </>
                )}

                {/* Icon Container */}
                <motion.div
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center shadow-lg mb-6"
                    animate={isHovered ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ 
                        rotate: { duration: 0.6 },
                        scale: { duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }
                    }}
                >
                    <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-4"
                        animate={isHovered ? { color: ["#374151", "#13a87c", "#374151"] } : {}}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    >
                        {value.title}
                    </motion.h3>
                    
                    <motion.p 
                        className="text-gray-600 leading-relaxed"
                        animate={isHovered ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                    >
                        {value.description}
                    </motion.p>
                </div>

                {/* Corner Accent */}
                <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#13a87c]/20 to-transparent rounded-bl-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHovered ? { opacity: 0.3, scale: 1 } : {}}
                    transition={{ duration: 0.3 }}
                />

                {/* Pulse Ring Effect */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 border-2 border-[#13a87c] rounded-3xl"
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                )}

                {/* Bottom Gradient Line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13a87c] to-[#18CB96]"
                    initial={{ scaleX: 0 }}
                    animate={isHovered ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
};
