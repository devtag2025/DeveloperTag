"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Heading from '@/common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import type { Swiper as SwiperType } from 'swiper'

interface Project {
    name: string
    description: string
    cost: string
    image?: string
    Url: string
}

interface Category {
    title: string
    description: string
    projects: Project[]
}

interface ProjectCardProps {
    project: Project
    categoryIndex: number
    projectIndex: number
    hoveredProject: string | null
    setHoveredProject: (id: string | null) => void
}

// Project Card Component with Enhanced Animations
const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    categoryIndex,
    projectIndex,
    hoveredProject,
    setHoveredProject
}) => {
    const projectId = `${categoryIndex}-${projectIndex}`
    const isHovered = hoveredProject === projectId

    return (
        <Link 
            href={project.Url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block h-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    delay: projectIndex * 0.1,
                    type: "spring",
                    stiffness: 100
                }}
                whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2, type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredProject(projectId)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#13a87c] transition-all duration-300 h-full cursor-pointer"
            >
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={isHovered ? {
                    background: [
                        "linear-gradient(135deg, rgba(19,168,124,0.05) 0%, transparent 50%, rgba(24,203,150,0.05) 100%)",
                        "linear-gradient(135deg, rgba(24,203,150,0.05) 0%, transparent 50%, rgba(19,168,124,0.05) 100%)",
                        "linear-gradient(135deg, rgba(19,168,124,0.05) 0%, transparent 50%, rgba(24,203,150,0.05) 100%)",
                    ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden">
                {/* Animated Sparkles Effect */}
                {isHovered && (
                    <>
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[#13a87c] rounded-full z-10"
                                initial={{ 
                                    x: Math.random() * 100 + '%', 
                                    y: Math.random() * 100 + '%',
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    y: [Math.random() * 100 + '%', Math.random() * 100 + '%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </>
                )}

                {/* Project Image */}
                <motion.div 
                    className="w-full h-full relative"
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#13a87c]/20 to-[#18CB96]/20 flex items-center justify-center">
                            <div className="text-center">
                                <motion.div 
                                    className="w-16 h-16 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-xl mx-auto mb-3 flex items-center justify-center"
                                    animate={isHovered ? { 
                                        rotate: 360,
                                        scale: [1, 1.1, 1]
                                    } : { rotate: 0 }}
                                    transition={{ 
                                        rotate: { duration: 0.6 },
                                        scale: { duration: 0.3, repeat: Infinity, repeatDelay: 1 }
                                    }}
                                >
                                    <ArrowUpRight className="w-8 h-8 text-white" />
                                </motion.div>
                                <p className="text-sm font-medium text-gray-600">
                                    {project.name}
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
                
                {/* Overlay on hover */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Project Info */}
            <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <motion.h3 
                        className="text-xl font-bold text-gray-900 group-hover:text-[#13a87c] transition-colors"
                        animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                        transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                    >
                        {project.name}
                    </motion.h3>
                    <motion.div
                        animate={isHovered ? { rotate: 45, scale: 1.2 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                    >
                        <ArrowUpRight className="w-5 h-5 text-[#13a87c]" />
                    </motion.div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Cost Badge with Animation */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <motion.div 
                        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#13a87c]/10 to-[#18CB96]/10 rounded-full"
                        animate={isHovered ? { 
                            scale: [1, 1.05, 1],
                            background: [
                                "linear-gradient(to right, rgba(19,168,124,0.1), rgba(24,203,150,0.1))",
                                "linear-gradient(to right, rgba(24,203,150,0.2), rgba(19,168,124,0.2))",
                                "linear-gradient(to right, rgba(19,168,124,0.1), rgba(24,203,150,0.1))",
                            ]
                        } : {}}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    >
                        <motion.div
                            animate={isHovered ? { rotate: [0, 15, -15, 0] } : {}}
                            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                        >
                           
                        </motion.div>
                        <span className="text-sm font-semibold text-[#13a87c]">
                            {project.cost}
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Animated Corner Accent */}
            <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#13a87c]/10 to-transparent rounded-bl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Pulse Effect on Hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 border-2 border-[#13a87c] rounded-2xl"
                    initial={{ opacity: 0.5, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
            </motion.div>
        </Link>
    )
}

const PortfolioShowcase = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const [swiperRefs, setSwiperRefs] = useState<{ [key: number]: SwiperType | null }>({})

    const setSwiperRef = (index: number, swiper: SwiperType) => {
        setSwiperRefs(prev => ({ ...prev, [index]: swiper }))
    }

    const portfolioData: Category[] = [
        {
            title: "Custom Software Solutions",
            description: "Tailored solutions designed to address specific business needs",
            projects: [
                {
                    name: "Zirtue",
                    description: "A relationship-based lending platform that enables users to lend and borrow money securely with friends and family, promoting transparency and accountability.",
                    cost: "$15,000",
                    image: "/assets/portfolio/zirtue.png",
                    Url: "https://www.zirtue.com",
                },
                {
                    name: "Future Farm",
                    description: "A business transformation platform focused on corporate sustainability and innovation, helping organizations adapt to future challenges.",
                    cost: "$11,000",
                    image: "/assets/portfolio/futurefarm.png",
                    Url: "https://www.futurefarm.io",
                },
                {
                    name: "RevBits",
                    description: "A cybersecurity company offering advanced security solutions to protect enterprises from evolving cyber threats.",
                    cost: "$20,000",
                    image: "/assets/portfolio/revbits.png",
                    Url: "https://www.revbits.com/",
                },
                {
                    name: "IgniteTech - FogBugz",
                    description: "A software project management system designed for agile teams, providing tools for bug tracking, issue tracking, and project planning.",
                    cost: "$17,000",
                    image: "/assets/portfolio/fogBugs.png",
                    Url: "https://ignitetech.ai/software-library/fogbugz/",
                },
                {
                    name: "Ekentech",
                    description: "A provider of investigative background check technology, offering solutions tailored to various industries to enhance hiring processes.",
                    cost: "$19,900",
                    image: "/assets/portfolio/ekentech.png",
                    Url: "https://www.ekentech.com/",
                }
            ]
        },
        {
            title: "Web Development",
            description: "General websites, company sites, or informative platforms",
            projects: [
                {
                    name: "Africa Health",
                    description: "A healthcare-focused platform delivering news and insights on medical advancements and health issues across Africa.",
                    cost: "$12,000",
                    image: "/assets/portfolio/africanHealth.png",
                    Url: "https://africa-health.com/",
                },
                {
                    name: "MATW Project",
                    description: "A charity organization dedicated to supporting humanitarian projects worldwide, focusing on sustainable development and aid.",
                    cost: "$8,000",
                    image: "/assets/portfolio/matw.png",
                    Url: "https://matwproject.org/",
                },
                {
                    name: "Shreedhar Portfolio",
                    description: "A personal portfolio website showcasing various projects, highlighting skills and accomplishments in web development and design.",
                    cost: "$3,000",
                    image: "/portfolio-placeholder-8.jpg",
                    Url: "https://www.shreedhar-portfolio.netlify.app/"
                }
            ]
        },
        {
            title: "E-commerce",
            description: "Websites primarily focused on selling products or services online",
            projects: [
                {
                    name: "Idillionaire",
                    description: "An online store offering inspirational products, books, and merchandise aimed at personal development and enlightenment.",
                    cost: "$5,000",
                    image: "/assets/portfolio/idillionare.png",
                    Url: "https://idillionaire.com//"
                },
                {
                    name: "Positively Vibe",
                    description: "A lifestyle and wellness e-commerce brand providing a range of products to promote positive living and well-being.",
                    cost: "$7,000",
                    image: "/assets/portfolio/postivelyVibes.png",
                    Url: "https://www.positivelyvibe.com/"
                }
            ]
        },
        {
            title: "App Development",
            description: "Mobile or desktop applications designed for various platforms",
            projects: [
                {
                    name: "Modomines",
                    description: "A mining and quarry management app that streamlines operations, enhances productivity, and ensures compliance within the industry.",
                    cost: "$35,000",
                    image: "/portfolio-placeholder-11.jpg",
                    Url: "https://play.google.com/store/apps/details?id=com.shreedhar_t.modomines&hl=en_US"
                },
                {
                    name: "OneERP Suite",
                    description: "An ERP software designed for businesses to manage and automate various organizational processes, improving efficiency and decision-making.",
                    cost: "$40,000",
                    image: "/portfolio-placeholder-12.jpg",
                    Url: "https://apps.apple.com/in/app/oneerpsuite/id6471813104a"
                },
                {
                    name: "Smart Trainer",
                    description: "An AI-powered platform that acts as a virtual manager and data analyst, providing real-time quality checks, sales forecasts, and operational insights for businesses.",
                    cost: "$16,000",
                    image: "/portfolio-placeholder-13.jpg",
                    Url: "https://smarttrainerapp.com/"
                },
                {
                    name: "Xplora",
                    description: "A smartwatch and mobile app designed for children's safety, offering features like GPS tracking, safe zones, and communication tools to keep kids connected securely.",
                    cost: "$21,000",
                    image: "/assets/portfolio/mobimgs.png",
                    Url: "https://xplora.co.uk/"
                }
            ]
        },
        {
            title: "Content Management System",
            description: "Platforms enabling easy management and publishing of content",
            projects: [
                {
                    name: "Join Reflect",
                    description: "A platform that simplifies the process of finding the right therapist, offering personalized matches, dedicated concierge support, and quality assurance for mental health services.",
                    cost: "$10,000",
                    image: "/assets/portfolio/joinreflect.png",
                    Url: "https://joinreflect.com/"
                },
                {
                    name: "HealthDesk AI",
                    description: "An AI-powered CRM and chatbot solution for fitness and wellness businesses, providing lead generation, client engagement, and automated administrative support.",
                    cost: "$18,700",
                    image: "/assets/portfolio/healthdesk.png",
                    Url: "https://healthdesk.ai/"
                }
            ]
        },
        {
            title: "Desktop Applications",
            description: "Standalone applications intended for desktop environments",
            projects: [
                {
                    name: "FogBugz",
                    description: "A comprehensive software project management tool offering features like time tracking, task management, and bug tracking to streamline development workflows.",
                    cost: "$8,000",
                    image: "/assets/portfolio/fogBugs.png",
                    Url: "https://ignitetech.ai/softwarelibrary/fogbugz/"
                }
            ]
        },
        {
            title: "Software as a Service (SaaS)",
            description: "Platforms providing software solutions through the cloud",
            projects: [
                {
                    name: "Fed",
                    description: "A comprehensive SaaS platform designed to streamline business operations and enhance productivity.",
                    cost: "$23,000",
                    image: "/assets/portfolio/fed.png",
                    Url: "https://www.fed.com/"
                },
                {
                    name: "Tudo",
                    description: "A SaaS platform offering business management and automation tools, helping organizations optimize operations and improve efficiency.",
                    cost: "$25,000",
                    image: "/assets/portfolio/tudo.png",
                    Url: "https://tudo.app/"
                },
                {
                    name: "WowInvest",
                    description: "A financial investment and portfolio management platform providing tools for tracking investments, analyzing performance, and making informed financial decisions.",
                    cost: "$19,000",
                    image: "/assets/portfolio/wowinvest.png",
                    Url: "https://wowinvest.swehold.com"
                },
                {
                    name: "WowBridge",
                    description: "A platform focused on bridge investment and management, offering resources and tools for investors in bridge projects.",
                    cost: "$6,800",
                    image: "/assets/portfolio/wowbridge.png",
                    Url: "https://wowbridge.swehold.com/"
                }
            ]
        }
    ]

    return (
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-medium text-[#13a87c]">
                            Proven Results
                        </span>
                    </div>
                    <Heading 
                        headOne="Transforming" 
                        headTwo="Ideas Into" 
                        headThree="Success Stories" 
                    />
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
                        From startups to enterprises, we&apos;ve helped businesses across the globe build powerful digital solutions. 
                        Explore real projects that drove growth, enhanced user experiences, and delivered measurable results.
                    </p>
                  
                </div>

                {/* Portfolio Categories */}
                {portfolioData.map((category, categoryIndex) => (
                    <div 
                        key={categoryIndex} 
                        className="mb-20"
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 100}
                    >
                        {/* Category Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-8 bg-gradient-to-b from-[#13a87c] to-[#18CB96] rounded-full" />
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    {category.title}
                                </h2>
                            </div>
                            <p className="text-gray-600 ml-5 pl-3">
                                {category.description}
                            </p>
                        </div>

                        {/* Projects - Use Slider if more than 3, Grid otherwise */}
                        {category.projects.length > 3 ? (
                            <div className="relative">
                                {/* Slider for categories with >3 projects */}
                                <Swiper
                                    modules={[Navigation, Autoplay, EffectCoverflow]}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    speed={800}
                                    effect="coverflow"
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1.5,
                                        slideShadows: false,
                                    }}
                                    breakpoints={{
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    onSwiper={(swiper) => setSwiperRef(categoryIndex, swiper)}
                                    className="!pb-12"
                                >
                                    {category.projects.map((project, projectIndex) => (
                                        <SwiperSlide key={projectIndex}>
                                            <ProjectCard
                                                project={project}
                                                categoryIndex={categoryIndex}
                                                projectIndex={projectIndex}
                                                hoveredProject={hoveredProject}
                                                setHoveredProject={setHoveredProject}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Custom Navigation Buttons */}
                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => swiperRefs[categoryIndex]?.slidePrev()}
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </motion.button>
                                    <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                                        {category.projects.length} Projects
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => swiperRefs[categoryIndex]?.slideNext()}
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.projects.map((project, projectIndex) => (
                                    <ProjectCard
                                        key={projectIndex}
                                        project={project}
                                        categoryIndex={categoryIndex}
                                        projectIndex={projectIndex}
                                        hoveredProject={hoveredProject}
                                        setHoveredProject={setHoveredProject}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                    data-aos="fade-up"
                >
                    <div className="bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#13a87c]/10 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#18CB96]/10 to-transparent rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Let&apos;s Build Your Success Story
                            </h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                Join the businesses that trusted us to transform their vision into reality. Whether you&apos;re starting fresh or scaling up, we&apos;re here to bring your ideas to life with cutting-edge technology and expert craftsmanship.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="mailto:adil.rafique.pro@gmail.com"
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                                >
                                    <span>Email: adil.rafique.pro@gmail.com</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default PortfolioShowcase

