"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, Code, Coffee, Zap, Award, TrendingUp, Send, ChevronRight } from 'lucide-react'
import Heading from '@/common/Heading'
import { getActiveCareers, CareerPosition } from '@/config/CareerApi'

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null)
    const [careers, setCareers] = useState<CareerPosition[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                setLoading(true)
                const response = await getActiveCareers()
                setCareers(response.data || [])
                setError(null)
            } catch (err) {
                console.error('Failed to fetch careers:', err)
                setError('Failed to load career positions. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchCareers()
    }, [])

    const benefits = [
        {
            id: 1,
            icon: DollarSign,
            title: "Competitive Salary",
            description: "Market-leading compensation packages with performance bonuses"
        },
        {
            id: 2,
            icon: Clock,
            title: "Flexible Hours",
            description: "Work-life balance with flexible working hours and remote options"
        },
        {
            id: 3,
            icon: Rocket,
            title: "Career Growth",
            description: "Clear career progression paths and skill development opportunities"
        },
        {
            id: 4,
            icon: Heart,
            title: "Health Benefits",
            description: "Comprehensive health insurance for you and your family"
        },
        {
            id: 5,
            icon: Coffee,
            title: "Great Culture",
            description: "Collaborative environment with regular team events and outings"
        },
        {
            id: 6,
            icon: Award,
            title: "Learning Budget",
            description: "Annual budget for courses, conferences, and professional development"
        }
    ]


    const values = [
        {
            id: 1,
            icon: Users,
            title: "Collaborative Team",
            description: "Work with talented professionals who support each other"
        },
        {
            id: 2,
            icon: Zap,
            title: "Innovation First",
            description: "We embrace new technologies and creative solutions"
        },
        {
            id: 3,
            icon: TrendingUp,
            title: "Continuous Growth",
            description: "Learn something new every day with diverse projects"
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
                        <Briefcase className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">Join Our Team</span>
                    </motion.div>
                    
                    <Heading headOne="Build Your" headTwo="Career" headThree="With Us" />
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Join a team of passionate developers, designers, and innovators creating amazing digital experiences for clients worldwide
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8"
                    >
                        <a
                            href="#positions"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            View Open Positions
                            <ChevronRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join DeveloperTag?</h2>
                        <p className="text-gray-600">Experience the difference of working with a great team</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                        <p className="text-gray-600">We take care of our team members</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
                        <p className="text-gray-600">Find your perfect role and apply today</p>
                    </motion.div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#13a87c]"></div>
                            <p className="mt-4 text-gray-600">Loading career positions...</p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {!loading && !error && careers.length === 0 && (
                        <div className="text-center py-12">
                            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No Open Positions</h3>
                            <p className="text-gray-600">We don&apos;t have any open positions at the moment. Check back later or send us your resume!</p>
                        </div>
                    )}

                    {!loading && !error && careers.length > 0 && (
                        <div className="space-y-6">
                            {careers.map((job, index) => (
                                <motion.div
                                    key={job._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setSelectedJob(selectedJob === job._id ? null : job._id)}
                                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-4 flex-wrap">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {job.type}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Code className="w-4 h-4" />
                                                        {job.experience}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-[#13a87c] font-semibold text-sm">
                                                {selectedJob === job._id ? 'Hide Details' : 'View Details'}
                                            </span>
                                        </div>
                                    </button>

                                    {selectedJob === job._id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-200 p-6 bg-gray-50"
                                        >
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">About the Role</h4>
                                                    <p className="text-gray-700">{job.description}</p>
                                                </div>

                                                {job.requirements && job.requirements.length > 0 && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements.map((req, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                                    <ChevronRight className="w-4 h-4 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                                                    <span>{req}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {job.responsibilities && job.responsibilities.length > 0 && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3">Responsibilities</h4>
                                                        <ul className="space-y-2">
                                                            {job.responsibilities.map((resp, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                                    <ChevronRight className="w-4 h-4 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                                                    <span>{resp}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                <div className="pt-4">
                                                    <a
                                                        href={`mailto:careergrowth@developertag.com?subject=Application for ${encodeURIComponent(job.title)}`}
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                                                    >
                                                        <Send className="w-4 h-4" />
                                                        Apply for this Position
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#dcf3ec] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl"
                    >
                        <Users className="w-12 h-12 text-[#13a87c] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Don&apos;t See the Right Position?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
                        </p>
                        <a
                            href="mailto:admin@developertag.com?subject=General Application"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <Send className="w-5 h-5" />
                            Send Your Resume
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

