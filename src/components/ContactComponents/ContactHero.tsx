"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Spotlight } from '../ui/spotlight-new'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

function ContactHero() {
    const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)

    const contactMethods = [
        {
            icon: EnvelopeIcon,
            title: "Email Us",
            value: "admin@developertag.com",
            description: "Get in touch via email",
            href: "mailto:admin@developertag.com"
        },
        {
            icon: PhoneIcon,
            title: "Call Us",
            value: "+44 7401 423413",
            description: "Speak directly with our team",
            href: "tel:+447401423413"
        },
        {
            icon: MapPinIcon,
            title: "Follow Us",
            value: "LinkedIn & Instagram",
            description: "Connect with us online",
            href: "https://www.linkedin.com/company/developertag/"
        },
        {
            icon: ClockIcon,
            title: "Business Hours",
            value: "Mon-Fri: 9AM-6PM PST",
            description: "We're here when you need us",
            href: "#"
        }
    ]

    return (
        <div className="relative w-full bg-white min-h-screen flex flex-col justify-center">
            {/* Grid Background Pattern */}
            <div
                className={cn(
                    "absolute inset-0 w-full h-full",
                    "bg-[size:80px_80px]",
                    "bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]",
                    "opacity-60 z-[1]"
                )}
            />

            {/* Spotlight Effect */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                <Spotlight />
            </div>

            {/* Animated Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden z-[1]">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-full bg-[#13a87c]/10 blur-3xl"
                        animate={{
                            x: [0, Math.random() * 150 - 75],
                            y: [0, Math.random() * 150 - 75],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                        data-aos="fade-up"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                            <span className="text-sm font-medium text-[#13a87c]">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13a87c] to-[#18CB96]">Connect</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ready to bring your ideas to life? We&apos;re here to help transform your vision into reality.
                        </p>
                    </motion.div>

                    {/* Interactive Contact Methods Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => setHoveredMethod(index)}
                                onHoverEnd={() => setHoveredMethod(null)}
                                className="relative group cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={cn(
                                    "relative p-6 rounded-2xl bg-white border-2 border-gray-200",
                                    "shadow-md hover:shadow-2xl transition-all duration-300",
                                    "backdrop-blur-sm",
                                    hoveredMethod === index && "border-[#13a87c] shadow-[#13a87c]/20"
                                )}>
                                    {/* Icon */}
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-4 shadow-lg"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <method.icon className="w-7 h-7 text-white" />
                                    </motion.div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {method.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-3">
                                        {method.description}
                                    </p>

                                    <p className="text-sm font-semibold text-[#13a87c] break-words">
                                        {method.value}
                                    </p>

                                    {/* Hover Effect Overlay */}
                                    {hoveredMethod === index && (
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#13a87c]/5 to-[#18CB96]/5 pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#13a87c]/10 to-transparent rounded-tr-2xl rounded-bl-full" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl relative overflow-hidden">
                            {/* Decorative Background Pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#13a87c]/10 to-transparent rounded-full blur-3xl -z-0" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#18CB96]/10 to-transparent rounded-full blur-3xl -z-0" />
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Tell us about your vision and we&apos;ll help you bring it to life with cutting-edge technology and creative solutions.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start Your Journey
                                        <motion.span
                                            className="inline-block"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#18CB96] to-[#13a87c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Decorative Elements */}
                    <motion.div
                        className="absolute top-32 left-10 w-4 h-4 bg-[#13a87c] rounded-full opacity-60"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-48 right-16 w-3 h-3 bg-[#18CB96] rounded-full opacity-60"
                        animate={{
                            y: [0, 15, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-32 right-20 w-5 h-5 bg-[#13a87c] rounded-full opacity-50"
                        animate={{
                            y: [0, 20, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-48 left-16 w-3 h-3 bg-[#18CB96] rounded-full opacity-60"
                        animate={{
                            x: [0, -15, 0],
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
