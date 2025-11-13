"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Briefcase, Award } from 'lucide-react';
import ContactPopup from '@/common/ContactPopup';

function AboutIntro() {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const stats = [
        {
            icon: Briefcase,
            number: "10+",
            label: "Years in Business",
            description: "Decade of excellence"
        },
        {
            icon: Users,
            number: "500+",
            label: "Team Members",
            description: "Global talent network"
        },
        {
            icon: Globe,
            number: "600+",
            label: "International Clients",
            description: "Worldwide presence"
        },
        {
            icon: Award,
            number: "700+",
            label: "Projects Completed",
            description: "Successful deliveries"
        }
    ];

    return (
        <section className="py-24 relative bg-gradient-to-br from-[#f8fffe] via-white to-[#dcf3ec] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[size:60px_60px] bg-[linear-gradient(to_right,rgba(19,168,124,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.03)_1px,transparent_1px)] opacity-60" />
            
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#13a87c]/20 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto" id="about">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5"
                        >
                            <div className="w-2 h-2 bg-[#13a87c] rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium text-[#13a87c]">About DeveloperTag</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                What is{' '}
                                <span className="text-transparent bg-gradient-to-r from-[#13a87c] to-[#0f8a6b] bg-clip-text">
                                    DeveloperTag?
                                </span>
                            </h1>
                            
                            {/* Accent Line */}
                            <div className="w-20 h-1 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full mb-8"></div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-700 text-lg leading-relaxed">
                                What started as a spark of ambition in 2016 became a full-blown movement by 2024.
                                Our founder believed in two things: empowering developers and transforming the local tech landscape.
                                That belief fueled the birth of{' '}
                                <span className="font-semibold text-[#13a87c]">DeveloperTag</span> in July 2024—not just as a company, but as a community-driven mission.
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                That November, the journey became a shared one. A like-minded friend joined with the same passion and vision,
                                and together, they shaped DeveloperTag into a space where talent thrives, clients come first, and innovation never stops.
                                We&apos;re not here for the &quot;usual&quot;—we&apos;re here to{' '}
                                <span className="font-semibold text-gray-900">make things that matter.</span>
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                             <button 
                                 onClick={() => setContactPopupOpen(true)}
                                 className="group relative overflow-hidden bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 inline-block text-sm w-fit cursor-pointer"
                             >
                                 <span>Get a Quote</span>
                                 <motion.div
                                     className="w-4 h-4"
                                     whileHover={{ x: 3 }}
                                     transition={{ duration: 0.3 }}
                                 >
                                     →
                                 </motion.div>
                             </button>
                        </motion.div>
                    </div>

                    {/* Right Side - Stats */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#13a87c]/30 hover:shadow-2xl hover:shadow-[#13a87c]/10 transition-all duration-500"
                                >
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        
                                        {/* Number */}
                                        <h3 className="text-3xl lg:text-4xl font-bold text-[#13a87c] mb-2 group-hover:scale-105 transition-transform duration-300">
                                            {stat.number}
                                        </h3>
                                        
                                        {/* Label */}
                                        <p className="text-gray-800 font-semibold text-lg mb-1">
                                            {stat.label}
                                        </p>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 text-sm">
                                            {stat.description}
                                        </p>
                                        
                                        {/* Accent Line */}
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full mt-3 group-hover:w-12 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Bottom Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="p-6 rounded-2xl bg-gradient-to-r from-[#13a87c]/10 to-[#18CB96]/10 border border-[#13a87c]/20"
                        >
                            <blockquote className="text-gray-700 italic text-center">
                                &quot;We don&apos;t just build software, we build the future. Every line of code is a step toward something extraordinary.&quot;
                            </blockquote>
                            <div className="text-center mt-4">
                                <div className="w-12 h-0.5 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full mx-auto" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </section>
    );
}

export default AboutIntro;