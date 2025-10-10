"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Code, Rocket, Settings, Database, Layout, Smartphone, Palette, ChevronRight, Search, FileText, Video, Download } from 'lucide-react'
import Heading from '@/common/Heading'
import Link from 'next/link'

export default function Documentation() {
    const [searchQuery, setSearchQuery] = useState('')

    const categories = [
        {
            id: 1,
            icon: Rocket,
            title: "Getting Started",
            description: "Begin your journey with DeveloperTag",
            color: "from-blue-500 to-blue-600",
            guides: [
                { title: "Introduction to Our Services", time: "5 min read" },
                { title: "How to Request a Quote", time: "3 min read" },
                { title: "Understanding Our Process", time: "8 min read" },
                { title: "Project Onboarding Guide", time: "6 min read" }
            ]
        },
        {
            id: 2,
            icon: Layout,
            title: "Web Development",
            description: "Comprehensive web development documentation",
            color: "from-green-500 to-green-600",
            guides: [
                { title: "Modern Web Architecture", time: "12 min read" },
                { title: "Frontend Best Practices", time: "10 min read" },
                { title: "Backend Development Guide", time: "15 min read" },
                { title: "API Integration Patterns", time: "8 min read" }
            ]
        },
        {
            id: 3,
            icon: Smartphone,
            title: "Mobile Development",
            description: "iOS and Android app development guides",
            color: "from-purple-500 to-purple-600",
            guides: [
                { title: "React Native Development", time: "14 min read" },
                { title: "iOS App Development", time: "16 min read" },
                { title: "Android Best Practices", time: "12 min read" },
                { title: "Cross-Platform Strategies", time: "10 min read" }
            ]
        },
        {
            id: 4,
            icon: Palette,
            title: "UI/UX Design",
            description: "Design principles and guidelines",
            color: "from-pink-500 to-pink-600",
            guides: [
                { title: "Design System Basics", time: "9 min read" },
                { title: "User Research Methods", time: "11 min read" },
                { title: "Wireframing Guide", time: "7 min read" },
                { title: "Prototyping Best Practices", time: "8 min read" }
            ]
        },
        {
            id: 5,
            icon: Database,
            title: "Database & Backend",
            description: "Database design and backend architecture",
            color: "from-orange-500 to-orange-600",
            guides: [
                { title: "Database Schema Design", time: "13 min read" },
                { title: "MongoDB Best Practices", time: "10 min read" },
                { title: "RESTful API Design", time: "12 min read" },
                { title: "Authentication & Security", time: "15 min read" }
            ]
        },
        {
            id: 6,
            icon: Settings,
            title: "Deployment & DevOps",
            description: "Deployment strategies and DevOps practices",
            color: "from-red-500 to-red-600",
            guides: [
                { title: "CI/CD Pipeline Setup", time: "14 min read" },
                { title: "Cloud Deployment Guide", time: "11 min read" },
                { title: "Docker Containerization", time: "13 min read" },
                { title: "Monitoring & Logging", time: "9 min read" }
            ]
        }
    ]

    const resources = [
        {
            id: 1,
            icon: FileText,
            title: "Technical Guides",
            description: "In-depth technical documentation",
            count: "50+ guides"
        },
        {
            id: 2,
            icon: Video,
            title: "Video Tutorials",
            description: "Step-by-step video walkthroughs",
            count: "30+ videos"
        },
        {
            id: 3,
            icon: Code,
            title: "Code Examples",
            description: "Ready-to-use code snippets",
            count: "100+ examples"
        },
        {
            id: 4,
            icon: Download,
            title: "Templates",
            description: "Starter templates and boilerplates",
            count: "20+ templates"
        }
    ]

    const quickLinks = [
        {
            title: "API Documentation",
            description: "Complete API reference and examples",
            link: "/api-docs",
            icon: Code
        },
        {
            title: "Support Center",
            description: "Get help from our support team",
            link: "/support",
            icon: Book
        },
        {
            title: "GitHub Repository",
            description: "Access our open-source projects",
            link: "#",
            icon: Code
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-40" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6"
                    >
                        <Book className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">Knowledge Base</span>
                    </motion.div>
                    
                    <Heading headOne="Documentation" headTwo="Center" headThree="" />
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Comprehensive guides, tutorials, and resources to help you make the most of our services
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl mx-auto mt-8"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#13a87c] focus:outline-none text-gray-900 placeholder-gray-400 transition-colors"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quickLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.link}
                                    className="block bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center flex-shrink-0">
                                            <link.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{link.title}</h3>
                                            <p className="text-sm text-gray-600">{link.description}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-[#13a87c]" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                        <p className="text-gray-600">Explore our comprehensive documentation library</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-6 bg-gray-50 border-b border-gray-200">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                                    <p className="text-sm text-gray-600">{category.description}</p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {category.guides.map((guide, idx) => (
                                            <li key={idx}>
                                                <a href="#" className="group flex items-center justify-between hover:text-[#13a87c] transition-colors">
                                                    <span className="text-sm text-gray-700 group-hover:text-[#13a87c]">{guide.title}</span>
                                                    <span className="text-xs text-gray-500">{guide.time}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h2>
                        <p className="text-gray-600">Everything you need to succeed with DeveloperTag</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center hover:border-[#13a87c] hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mx-auto mb-4">
                                    <resource.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                                <span className="inline-block px-3 py-1 rounded-full bg-[#13a87c]/10 text-xs font-semibold text-[#13a87c]">
                                    {resource.count}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl text-center"
                    >
                        <Book className="w-12 h-12 text-[#13a87c] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Can&apos;t Find What You&apos;re Looking For?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Our support team is here to help. Contact us with your questions and we&apos;ll provide personalized assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/support"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                Contact Support
                            </Link>
                            <Link
                                href="/api-docs"
                                className="inline-flex items-center gap-2 border-2 border-[#13a87c] text-[#13a87c] px-8 py-3 rounded-full font-semibold hover:bg-[#13a87c] hover:text-white transition-all duration-300"
                            >
                                View API Docs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

