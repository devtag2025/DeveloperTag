"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, UserCheck, Globe, Cookie, Mail } from 'lucide-react'
import Heading from '@/common/Heading'

export default function PrivacyPolicy() {
    const sections = [
        {
            id: 1,
            icon: Eye,
            title: "1. Information We Collect",
            content: "We collect information that you provide directly to us, including your name, email address, phone number, company name, and project details when you request a quote or engage our services. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages."
        },
        {
            id: 2,
            icon: Database,
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and updates, respond to your inquiries and support requests, send marketing communications (with your consent), analyze usage patterns to improve our website, and protect against fraudulent or unauthorized activity."
        },
        {
            id: 3,
            icon: Lock,
            title: "3. Data Security",
            content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption of data in transit and at rest, regular security assessments, restricted access to personal data, and secure backup procedures. However, no method of transmission over the Internet is 100% secure."
        },
        {
            id: 4,
            icon: Globe,
            title: "4. Information Sharing",
            content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business (such as cloud hosting providers and email services), and only when required by law or to protect our rights. All third-party service providers are bound by confidentiality agreements."
        },
        {
            id: 5,
            icon: Cookie,
            title: "5. Cookies and Tracking",
            content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Essential cookies are necessary for website functionality, while analytics cookies help us improve our services."
        },
        {
            id: 6,
            icon: UserCheck,
            title: "6. Your Rights",
            content: "You have the right to access, correct, or delete your personal information at any time. You can opt-out of marketing communications, request a copy of your data, object to processing of your personal data, and request restriction of processing. To exercise these rights, please contact us at the email provided below."
        },
        {
            id: 7,
            icon: Shield,
            title: "7. Data Retention",
            content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Project-related data is typically retained for 7 years for accounting and legal purposes. When data is no longer needed, we securely delete or anonymize it."
        },
        {
            id: 8,
            icon: Mail,
            title: "8. Third-Party Links",
            content: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit. This privacy policy applies only to information collected by DeveloperTag."
        },
        {
            id: 9,
            icon: Globe,
            title: "9. International Data Transfers",
            content: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your jurisdiction. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy."
        },
        {
            id: 10,
            icon: Shield,
            title: "10. Children's Privacy",
            content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information."
        },
        {
            id: 11,
            icon: Database,
            title: "11. Changes to This Policy",
            content: "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of our services after changes constitutes acceptance of the updated policy."
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
                        <Shield className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">Your Privacy Matters</span>
                    </motion.div>
                    
                    <Heading headOne="Privacy" headTwo="Policy" headThree="" />
                    
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
                        At DeveloperTag, we are committed to protecting your privacy and ensuring the security of your personal information.
                    </motion.p>
                </div>
            </section>

            {/* Privacy Content */}
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
                            Privacy Questions or Concerns?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            If you have questions about this Privacy Policy or how we handle your data, please contact our privacy team.
                        </p>
                        <a
                            href="mailto:adil.rafique.pro@gmail.com"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            Contact Privacy Team
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

