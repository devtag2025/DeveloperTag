"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, Code, Coffee, Zap, Award, TrendingUp, Send, ChevronRight } from 'lucide-react'
import Heading from '@/common/Heading'

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState<number | null>(null)

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

    const openPositions = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Remote / Lahore, Pakistan",
            type: "Full-time",
            experience: "5+ years",
            description: "We're looking for an experienced Full Stack Developer to join our engineering team. You'll work on cutting-edge web applications using React, Next.js, Node.js, and MongoDB.",
            requirements: [
                "5+ years of experience in full-stack development",
                "Expert knowledge of React, Next.js, and Node.js",
                "Strong understanding of RESTful APIs and database design",
                "Experience with MongoDB or similar NoSQL databases",
                "Excellent problem-solving and communication skills"
            ],
            responsibilities: [
                "Design and develop scalable web applications",
                "Collaborate with designers and product managers",
                "Write clean, maintainable, and well-documented code",
                "Mentor junior developers and conduct code reviews",
                "Participate in architectural decisions"
            ]
        },
        {
            id: 2,
            title: "Mobile App Developer (React Native)",
            department: "Engineering",
            location: "Remote / Lahore, Pakistan",
            type: "Full-time",
            experience: "3+ years",
            description: "Join our mobile team to build beautiful, high-performance iOS and Android applications using React Native and modern mobile development practices.",
            requirements: [
                "3+ years of experience with React Native",
                "Published apps on App Store and Google Play",
                "Knowledge of native iOS/Android development is a plus",
                "Experience with Redux, MobX, or similar state management",
                "Understanding of mobile UI/UX best practices"
            ],
            responsibilities: [
                "Develop and maintain React Native applications",
                "Implement pixel-perfect UI designs",
                "Optimize app performance and user experience",
                "Integrate with RESTful APIs and third-party services",
                "Write automated tests and ensure code quality"
            ]
        },
        {
            id: 3,
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote / Lahore, Pakistan",
            type: "Full-time",
            experience: "3+ years",
            description: "We're seeking a talented UI/UX Designer to create exceptional user experiences for web and mobile applications. You'll work closely with our development team to bring designs to life.",
            requirements: [
                "3+ years of experience in UI/UX design",
                "Proficiency in Figma, Adobe XD, or similar tools",
                "Strong portfolio demonstrating web and mobile design work",
                "Understanding of user research and usability testing",
                "Knowledge of design systems and component libraries"
            ],
            responsibilities: [
                "Create user flows, wireframes, and high-fidelity mockups",
                "Design intuitive and visually appealing interfaces",
                "Conduct user research and usability testing",
                "Collaborate with developers to ensure design implementation",
                "Maintain and evolve design systems"
            ]
        },
        {
            id: 4,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote / Lahore, Pakistan",
            type: "Full-time",
            experience: "4+ years",
            description: "Help us build and maintain robust infrastructure and deployment pipelines. You'll work with modern cloud technologies and automation tools.",
            requirements: [
                "4+ years of DevOps/Infrastructure experience",
                "Strong knowledge of AWS, Azure, or Google Cloud",
                "Experience with Docker, Kubernetes, and CI/CD pipelines",
                "Proficiency in scripting (Bash, Python, etc.)",
                "Understanding of security best practices"
            ],
            responsibilities: [
                "Design and maintain cloud infrastructure",
                "Implement and optimize CI/CD pipelines",
                "Monitor system performance and ensure high availability",
                "Automate deployment and scaling processes",
                "Implement security measures and backup strategies"
            ]
        },
        {
            id: 5,
            title: "Junior Frontend Developer",
            department: "Engineering",
            location: "Lahore, Pakistan",
            type: "Full-time",
            experience: "1-2 years",
            description: "Start your career with us! We're looking for passionate junior developers who want to learn and grow in a supportive environment.",
            requirements: [
                "1-2 years of experience with HTML, CSS, and JavaScript",
                "Basic knowledge of React or similar frameworks",
                "Understanding of responsive design principles",
                "Good communication and teamwork skills",
                "Eagerness to learn and grow"
            ],
            responsibilities: [
                "Develop responsive web interfaces under guidance",
                "Collaborate with senior developers on projects",
                "Write clean and maintainable code",
                "Participate in code reviews and learning sessions",
                "Contribute to team discussions and improvements"
            ]
        },
        {
            id: 6,
            title: "Project Manager",
            department: "Management",
            location: "Remote / Lahore, Pakistan",
            type: "Full-time",
            experience: "4+ years",
            description: "Lead client projects from inception to delivery. You'll coordinate with clients, manage timelines, and ensure successful project outcomes.",
            requirements: [
                "4+ years of project management experience in tech",
                "Strong understanding of software development lifecycle",
                "Excellent communication and stakeholder management",
                "Experience with Agile/Scrum methodologies",
                "PMP or similar certification is a plus"
            ],
            responsibilities: [
                "Manage multiple client projects simultaneously",
                "Define project scope, timelines, and deliverables",
                "Coordinate with development teams and clients",
                "Track progress and ensure on-time delivery",
                "Identify and mitigate project risks"
            ]
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

                    <div className="space-y-6">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <button
                                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <Briefcase className="w-4 h-4" />
                                                    {job.department}
                                                </span>
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
                                            {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                                        </span>
                                    </div>
                                </button>

                                {selectedJob === job.id && (
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

                                            <div className="pt-4">
                                                <a
                                                    href={`mailto:careergrowth@developertag.com?subject=Application for ${job.title}`}
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

