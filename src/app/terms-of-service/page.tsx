"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, AlertCircle, Scale, Clock } from 'lucide-react'
import Heading from '@/common/Heading'

export default function TermsOfService() {
    const sections = [
        {
            id: 1,
            icon: FileText,
            title: "1. Acceptance of Terms",
            content: "By accessing and using DeveloperTag&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes."
        },
        {
            id: 2,
            icon: Users,
            title: "2. Services Provided",
            content: "DeveloperTag offers professional web development, mobile app development, UI/UX design, AI solutions, and related digital services. We commit to delivering high-quality work according to agreed-upon specifications and timelines. All projects are subject to individual agreements that detail specific deliverables, timelines, and pricing."
        },
        {
            id: 3,
            icon: Shield,
            title: "3. Intellectual Property Rights",
            content: "Upon full payment, clients receive ownership rights to the final delivered work product. However, DeveloperTag retains the right to use completed projects in our portfolio and marketing materials unless otherwise specified in writing. Any third-party resources, libraries, or frameworks used remain the property of their respective owners."
        },
        {
            id: 4,
            icon: Clock,
            title: "4. Payment Terms",
            content: "Payment schedules are defined in individual project agreements. Typically, we require a 50% upfront deposit before project commencement, with the remaining balance due upon completion. Late payments may result in project delays or suspension of services. All prices are quoted in USD unless otherwise specified."
        },
        {
            id: 5,
            icon: AlertCircle,
            title: "5. Project Scope & Revisions",
            content: "Each project includes a defined scope of work and a specified number of revision rounds as outlined in the project agreement. Additional revisions or scope changes beyond the original agreement will be subject to additional fees. Clients must provide clear, timely feedback to ensure project timelines are met."
        },
        {
            id: 6,
            icon: Scale,
            title: "6. Warranties & Limitations",
            content: "We warrant that our work will be performed professionally and in accordance with industry standards. However, we cannot guarantee specific results or outcomes. Our liability is limited to the amount paid for services. We are not responsible for losses, damages, or delays caused by factors beyond our reasonable control."
        },
        {
            id: 7,
            icon: Shield,
            title: "7. Confidentiality",
            content: "DeveloperTag agrees to maintain the confidentiality of all proprietary information shared during the course of our engagement. We will not disclose client information to third parties without explicit consent, except as required by law. Both parties agree to protect sensitive information and use it solely for the intended project purposes."
        },
        {
            id: 8,
            icon: AlertCircle,
            title: "8. Termination",
            content: "Either party may terminate a project agreement with written notice. In the event of termination, clients are responsible for payment for all work completed up to the termination date. Upon termination, DeveloperTag will deliver all completed work and transfer any applicable rights as outlined in the original agreement."
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
                        <Scale className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">Legal Information</span>
                    </motion.div>
                    
                    <Heading headOne="Terms of" headTwo="Service" headThree="" />
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Last Updated: January 2025
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base text-gray-600 max-w-3xl mx-auto mt-4"
                    >
                        Please read these terms carefully before using DeveloperTag&apos;s services. These terms govern your use of our website and services.
                    </motion.p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center">
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 text-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Questions About Our Terms?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            If you have any questions about these Terms of Service, please don&apos;t hesitate to contact us.
                        </p>
                        <a
                            href="mailto:adil.rafique.pro@gmail.com"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

