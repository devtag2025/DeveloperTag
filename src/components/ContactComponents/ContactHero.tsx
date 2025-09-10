"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Spotlight } from '../ui/spotlight-new'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

function ContactHero() {
    const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)

    const contactMethods = [
        {
            icon: EnvelopeIcon,
            title: "Email Us",
            value: "hello@developertag.com",
            description: "Get in touch via email",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: PhoneIcon,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            description: "Speak directly with our team",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: MapPinIcon,
            title: "Visit Us",
            value: "123 Tech Street, Digital City",
            description: "Drop by our office",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: ClockIcon,
            title: "Business Hours",
            value: "Mon-Fri: 9AM-6PM",
            description: "We're here when you need us",
            color: "from-orange-500 to-red-500"
        }
    ]

    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                    />
                ))}
            </div>

            <Spotlight />

            <div className="p-4 relative z-10 w-full max-w-6xl mx-auto">
                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white mb-6">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? We&apos;re here to help.
                    </p>
                </motion.div>

                {/* Interactive Contact Methods Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            onHoverStart={() => setHoveredMethod(index)}
                            onHoverEnd={() => setHoveredMethod(null)}
                            className="relative group cursor-pointer"
                        >
                            <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${method.color} bg-opacity-10 border border-white/20 backdrop-blur-sm transition-all duration-300 ${hoveredMethod === index ? 'bg-opacity-20 border-white/40 shadow-2xl' : ''
                                }`}>
                                {/* Icon */}
                                <motion.div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <method.icon className="w-6 h-6 text-white" />
                                </motion.div>

                                <h3 className="text-lg font-bold text-white mb-2">
                                    {method.title}
                                </h3>

                                <p className="text-sm text-gray-300 mb-3">
                                    {method.description}
                                </p>

                                <p className="text-sm font-medium text-blue-300">
                                    {method.value}
                                </p>

                                {/* Hover effect overlay */}
                                {hoveredMethod === index && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-md mx-auto">
                            Tell us about your vision and we&apos;ll help you bring it to life with cutting-edge technology and creative solutions.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                        >
                            Start Your Journey
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-6 h-6 bg-purple-400 rounded-full"
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
            </div>
        </div>
    );
}

export default ContactHero;
