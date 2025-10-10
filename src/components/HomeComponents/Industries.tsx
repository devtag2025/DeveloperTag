"use client"
import React, { useState } from 'react';
import "./FAQ.css";
import Heading from '@/common/Heading';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingBag, Heart, Plane, Utensils, GraduationCap, Clock, Gamepad, Rocket, Banknote,
    Minus, Plus
} from 'lucide-react';

function Industries() {

    const industriesData = [
        {
            id: 0,
            name: "Ecommerce",
            icon: ShoppingBag,
            content: "We create powerful ecommerce solutions that drive sales and enhance customer experiences. Our services include responsive online stores, secure payment gateways, inventory management systems, and personalized shopping experiences. We focus on user-friendly interfaces, mobile optimization, and conversion-focused designs that turn visitors into loyal customers."
        },
        {
            id: 1,
            name: "Healthcare",
            icon: Heart,
            content: "We build innovative healthcare solutions that improve patient care and streamline medical operations. Our services include telemedicine platforms, electronic health records (EHR) systems, appointment scheduling solutions, and AI-driven diagnostics. We prioritize security, compliance, and seamless user experiences."
        },
        {
            id: 2,
            name: "Food",
            icon: Utensils,
            content: "We develop food industry solutions that enhance restaurant operations and food delivery services. From online ordering systems and delivery tracking to restaurant management software, we provide seamless digital experiences that help businesses grow and serve their customers efficiently."
        },
        {
            id: 3,
            name: "Travel and Tourism",
            icon: Plane,
            content: "Our travel and tourism solutions empower agencies and travelers with advanced booking platforms, itinerary planners, hotel management systems, and real-time travel updates. We create user-friendly and immersive experiences that make trip planning hassle-free."
        },
        {
            id: 4,
            name: "On-Demand Services",
            icon: Clock,
            content: "We design and develop on-demand service platforms that connect customers with businesses instantly. Whether it’s ride-hailing, home services, or freelance marketplaces, our solutions ensure smooth operations with real-time tracking, payment integration, and user-friendly interfaces."
        },
        {
            id: 5,
            name: "Startup",
            icon: Rocket,
            content: "We help startups bring their ideas to life with scalable digital solutions. From MVP development and branding to funding support and market research, we provide end-to-end services that turn visions into successful businesses."
        },
        {
            id: 6,
            name: "Gaming",
            icon: Gamepad,
            content: "We create engaging and high-performance gaming solutions, including mobile, web, and console games. Our services cover game development, UI/UX design, multiplayer integration, and monetization strategies to maximize user engagement and revenue."
        },
        {
            id: 7,
            name: "Education",
            icon: GraduationCap,
            content: "We build modern e-learning platforms that enhance education through technology. Our services include LMS development, virtual classrooms, interactive courses, and AI-powered learning experiences, making education accessible and engaging for all."
        },
        {
            id: 8,
            name: "Fintech",
            icon: Banknote,
            content: "We develop secure and innovative fintech solutions, including mobile banking apps, digital wallets, cryptocurrency platforms, and financial management tools. Our solutions ensure data security, seamless transactions, and compliance with financial regulations."
        }
    ];



    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-16 py-12'>
            <Heading headOne='Industries' headTwo='we' headThree='serve' />
            
            {/* Elegant 2-column layout with staggered animations */}
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {industriesData.slice(0, Math.ceil(industriesData.length / 2)).map((industry, index) => (
                            <IndustryCard 
                                key={industry.id}
                                industry={industry}
                                index={index}
                                isOpen={openIndex === industry.id}
                                onClick={() => toggleAccordion(industry.id)}
                            />
                        ))}
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-6">
                        {industriesData.slice(Math.ceil(industriesData.length / 2)).map((industry, index) => (
                            <IndustryCard 
                                key={industry.id}
                                industry={industry}
                                index={index + Math.ceil(industriesData.length / 2)}
                                isOpen={openIndex === industry.id}
                                onClick={() => toggleAccordion(industry.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Separate Industry Card Component with Advanced Animations
interface IndustryCardProps {
    industry: {
        id: number;
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        content: string;
    };
    index: number;
    isOpen: boolean;
    onClick: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index, isOpen, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="group relative"
        >
            {/* Card Container with Gradient Border */}
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 opacity-0"
                    animate={isOpen ? {
                        opacity: [0, 0.3, 0],
                    } : {}}
                    transition={{ duration: 2, repeat: isOpen ? Infinity : 0 }}
                />
                
                {/* Hover Effect Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#13a87c]/10 to-[#18CB96]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.button
                    onClick={onClick}
                    className="relative w-full p-6 text-left transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Header Content */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Animated Icon Container */}
                            <motion.div
                                className="relative p-3 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] shadow-lg"
                                animate={isOpen ? {
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                } : {}}
                                transition={{ 
                                    rotate: { duration: 0.6 },
                                    scale: { duration: 0.3, repeat: isOpen ? Infinity : 0, repeatDelay: 1 }
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5
                                }}
                            >
                                <industry.icon className="w-6 h-6 text-white" />
                                
                                {/* Sparkle Effect */}
                                {isOpen && (
                                    <>
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white rounded-full"
                                                initial={{ 
                                                    x: Math.random() * 20 - 10, 
                                                    y: Math.random() * 20 - 10,
                                                    scale: 0,
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    scale: [0, 1, 0],
                                                    opacity: [0, 1, 0],
                                                    x: [Math.random() * 40 - 20, Math.random() * 40 - 20],
                                                    y: [Math.random() * 40 - 20, Math.random() * 40 - 20]
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
                            </motion.div>
                            
                            {/* Title */}
                            <motion.h3 
                                className="text-xl font-bold text-gray-900 group-hover:text-[#13a87c] transition-colors"
                                animate={isOpen ? { x: [0, 5, 0] } : {}}
                                transition={{ duration: 0.5, repeat: isOpen ? Infinity : 0, repeatDelay: 1 }}
                            >
                                {industry.name}
                            </motion.h3>
                        </div>
                        
                        {/* Animated Toggle Icon */}
                        <motion.div
                            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                            transition={{ duration: 0.3, type: "spring" }}
                        >
                            {isOpen ? (
                                <Minus className="w-6 h-6 text-[#13a87c]" />
                            ) : (
                                <Plus className="w-6 h-6 text-[#13a87c] group-hover:text-[#18CB96] transition-colors" />
                            )}
                        </motion.div>
                    </div>
                    
                    {/* Animated Content */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <motion.div
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    exit={{ y: -20 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="mt-4 pt-4 border-t border-gray-100"
                                >
                                    <p className="text-gray-700 leading-7 mb-4">
                                        {industry.content}
                                    </p>
                                    
                                
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Corner Accent */}
                    <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#13a87c]/20 to-transparent rounded-bl-3xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isOpen ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3 }}
                    />
                    
                    {/* Pulse Ring on Hover */}
                    <motion.div
                        className="absolute inset-0 border-2 border-[#13a87c] rounded-2xl opacity-0"
                        animate={isOpen ? {
                            opacity: [0.5, 0],
                            scale: [1, 1.02]
                        } : {}}
                        transition={{ duration: 1, repeat: isOpen ? Infinity : 0 }}
                    />
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Industries;