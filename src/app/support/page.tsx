"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Clock, HelpCircle, Book, FileQuestion, Headphones, Send, ChevronDown, ChevronUp } from 'lucide-react'
import Heading from '@/common/Heading'

export default function Support() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const supportChannels = [
        {
            id: 1,
            icon: Mail,
            title: "Email Support",
            description: "Get detailed responses to your questions",
            contact: "admin@developertag.com",
            responseTime: "Within 24 hours",
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: Phone,
            title: "Phone Support",
            description: "Speak directly with our team",
            contact: "+92 300 1234567",
            responseTime: "Mon-Fri, 9AM-6PM PST",
            color: "from-green-500 to-green-600"
        },
        {
            id: 3,
            icon: MessageCircle,
            title: "Live Chat",
            description: "Instant support for urgent matters",
            contact: "Available on website",
            responseTime: "Real-time during business hours",
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 4,
            icon: Headphones,
            title: "Technical Support",
            description: "Dedicated support for ongoing projects",
            contact: "For active clients",
            responseTime: "Priority response",
            color: "from-orange-500 to-orange-600"
        }
    ]

    const faqs = [
        {
            id: 1,
            question: "What services does DeveloperTag offer?",
            answer: "DeveloperTag specializes in web development, mobile app development (iOS & Android), UI/UX design, AI solutions, custom software development, and digital transformation services. We work with businesses of all sizes to create scalable, modern digital solutions."
        },
        {
            id: 2,
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity and scope. A basic website typically takes 4-6 weeks, while complex web applications or mobile apps can take 3-6 months. We provide detailed timeline estimates during the initial consultation and maintain transparent communication throughout the project."
        },
        {
            id: 3,
            question: "What is your pricing structure?",
            answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We typically require a 50% deposit to begin work, with the remaining balance due upon completion. We provide detailed quotes after understanding your requirements and offer flexible payment plans for larger projects."
        },
        {
            id: 4,
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes! We offer various support and maintenance packages to ensure your project continues to run smoothly. This includes bug fixes, updates, security patches, and technical support. We can also provide training for your team to manage the system independently."
        },
        {
            id: 5,
            question: "Can you work with our existing team or systems?",
            answer: "Absolutely! We have extensive experience integrating with existing teams and systems. Whether you need to extend your current development team, integrate with legacy systems, or modernize existing applications, we can adapt our approach to fit your needs."
        },
        {
            id: 6,
            question: "What technologies do you work with?",
            answer: "We work with modern, industry-standard technologies including React, Next.js, Node.js, Python, Swift, Kotlin, MongoDB, PostgreSQL, AWS, and more. We choose the best technology stack based on your specific project requirements, scalability needs, and budget."
        },
        {
            id: 7,
            question: "How do you ensure project quality?",
            answer: "We follow industry best practices including code reviews, automated testing, quality assurance processes, and agile development methodologies. Every project undergoes rigorous testing before deployment, and we maintain high coding standards throughout development."
        },
        {
            id: 8,
            question: "Do you sign NDAs and protect confidential information?",
            answer: "Yes, we take confidentiality very seriously. We&apos;re happy to sign NDAs and have strict internal policies to protect client information. All our team members are bound by confidentiality agreements, and we use secure systems for project communication and file sharing."
        }
    ]

    const resources = [
        {
            id: 1,
            icon: Book,
            title: "Documentation",
            description: "Comprehensive guides and tutorials",
            link: "/documentation"
        },
        {
            id: 2,
            icon: FileQuestion,
            title: "API Reference",
            description: "Detailed API documentation",
            link: "/api"
        },
        {
            id: 3,
            icon: HelpCircle,
            title: "FAQ",
            description: "Frequently asked questions",
            link: "#faq"
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
                        <Headphones className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">We&apos;re Here to Help</span>
                    </motion.div>
                    
                    <Heading headOne="Support" headTwo="Center" headThree="" />
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Get help when you need it. Our dedicated support team is ready to assist you with any questions or issues.
                    </motion.p>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Our Support Team</h2>
                        <p className="text-gray-600">Choose your preferred way to reach us</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, index) => (
                            <motion.div
                                key={channel.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${channel.color} flex items-center justify-center mb-4`}>
                                    <channel.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{channel.description}</p>
                                <p className="text-sm font-semibold text-[#13a87c] mb-2">{channel.contact}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    <span>{channel.responseTime}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Resources */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Resources</h2>
                        <p className="text-gray-600">Find answers and helpful information</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resources.map((resource, index) => (
                            <motion.a
                                key={resource.id}
                                href={resource.link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mx-auto mb-4">
                                    <resource.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                                <p className="text-gray-600">{resource.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our services and process</p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                    {openFaq === faq.id ? (
                                        <ChevronUp className="w-5 h-5 text-[#13a87c] flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-[#13a87c] flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-br from-[#dcf3ec] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl"
                    >
                        <Send className="w-12 h-12 text-[#13a87c] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Our team is ready to help. Send us a message and we&apos;ll get back to you as soon as possible.
                        </p>
                        <a
                            href="mailto:admin@developertag.com"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Support
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

