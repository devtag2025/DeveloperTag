'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Heading from '@/common/Heading'
import { Star, Quote, Sparkles } from 'lucide-react'

// API testimonial structure
// interface ApiTestimonial {
//     _id: string;
//     content: string;
//     name: string;
//     title: string;
//     testimonialImg?: string;
//     createdAt: string;
//     updatedAt: string;
// }

// Enhanced testimonials organized by category
const testimonialCategories = [
    {
        category: "Software Engineering SaaS",
        icon: "💻",
        color: "from-blue-500 to-cyan-500",
        testimonials: [
        {
            _id: "1",
                content: "I was blown away by how effortlessly the team turned our complex ideas into a seamless SaaS product. They didn't just deliver software they delivered peace of mind.",
                name: "John Miller",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "2",
                content: "From day one, their passion for building something meaningful showed. Our SaaS platform is now the backbone of our business, and we couldn't be happier.",
                name: "Sophia Lee",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "3",
                content: "They took our vision seriously and brought it to life with precision and care. The launch went off without a hitch thanks to their incredible dedication.",
                name: "David Kim",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
        },
    {
        category: "Desktop Development",
        icon: "🖥️",
        color: "from-purple-500 to-pink-500",
        testimonials: [
        {
            _id: "4",
                content: "The desktop app they crafted feels like it was made just for us intuitive, fast, and reliable. It's rare to find a team that truly listens and delivers beyond expectations.",
                name: "Emma Johnson",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "5",
                content: "I'm impressed by their attention to detail and commitment to quality. Our new desktop software runs smoother than anything we've had before.",
                name: "Michael Brown",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "6",
                content: "They didn't just build software; they built trust. Every update improved efficiency within our teams noticeably.",
                name: "Olivia Davis",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
    },
    {
        category: "App Development",
        icon: "📱",
        color: "from-green-500 to-emerald-500",
        testimonials: [
            {
                _id: "7",
                content: "Watching users engage with the app we created together has been thrilling beautiful design paired with flawless function. Couldn't ask for more!",
                name: "Liam Smith",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "8",
                content: "The app's launch was nerve-wracking until this team took control fast delivery, smart solutions, and an app that customers love.",
                name: "Isabella Rodriguez",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "9",
                content: "Their creativity turned my rough ideas into a polished app that feels alive every feature works smoothly and intuitively.",
                name: "Noah Wilson",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
    },
    {
        category: "CRM Development",
        icon: "🤝",
        color: "from-orange-500 to-red-500",
        testimonials: [
            {
                _id: "10",
                content: "Our sales team actually enjoys using the CRM now! It's tailored perfectly to how we work simple yet powerful.",
                name: "Mia Anderson",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "11",
                content: "Integrating their CRM was the smartest move we made this year it connected all our tools seamlessly and boosted customer happiness too.",
                name: "James Thompson",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "12",
                content: "What I appreciate most is their ongoing support — they treat your product like their own baby and keep making it better every day.",
                name: "Ava Robinson",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
    },
    {
        category: "AI/ML Development",
        icon: "🤖",
        color: "from-indigo-500 to-purple-500",
        testimonials: [
            {
                _id: "13",
                content: "The AI models they built didn't just crunch numbers; they told stories that helped us make smarter business moves overnight.",
                name: "Ethan Harris",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "14",
                content: "Machine learning isn't easy to get right but these folks nailed it ROI showed up faster than expected!",
                name: "Charlotte Clark",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "15",
                content: "Automating tedious tasks freed up my team's time so we could focus on innovation instead exactly what we needed.",
                name: "Benjamin Lewis",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
    },
    {
        category: "ERP Development",
        icon: "🏢",
        color: "from-teal-500 to-blue-500",
        testimonials: [
            {
                _id: "16",
                content: "Our departments were all over the place until this custom ERP brought everything under one roof smooth operations have never felt so good.",
                name: "Amelia Walker",
                title: "",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z"
            },
            {
                _id: "17",
                content: "ERP rollout was surprisingly stress-free thanks to their clear communication and expert handling every step of the way.",
                name: "William Hall",
                title: "",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
            }
        ]
    }
];

const Testimonials = () => {
    return (
        <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24 overflow-hidden z-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-60 z-[51]" />
            
            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden z-[51]">
                {[...Array(8)].map((_, i) => {
                    const positions = [
                        { left: '10%', top: '20%' },
                        { left: '80%', top: '30%' },
                        { left: '15%', top: '70%' },
                        { left: '85%', top: '60%' },
                        { left: '25%', top: '10%' },
                        { left: '75%', top: '80%' },
                        { left: '5%', top: '50%' },
                        { left: '90%', top: '15%' }
                    ];

    return (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-[#13a87c]/20 rounded-full"
                            style={positions[i]}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    );
                })}
            </div>

            <div className="relative z-[52] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <Sparkles className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">
                            Client Testimonials
                        </span>
                    </div>
                    <Heading headOne="Our service" headTwo="Clients Who Believe" headThree="In Results" />
                </motion.div>

                {/* Categorized Testimonials */}
                <div className="space-y-16">
                    {testimonialCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <div className="text-4xl">{category.icon}</div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                        {category.category}
                                    </h3>
                     </div>
                                <div className={`w-24 h-1 bg-gradient-to-r ${category.color} rounded-full mx-auto`}></div>
                </div>

                            {/* Testimonials Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.testimonials.map((testimonial, index) => (
                     <motion.div
                                        key={testimonial._id}
                                        initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#13a87c]/30 hover:shadow-2xl hover:shadow-[#13a87c]/10 transition-all duration-500"
                                    >
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                                        
                                        {/* Quote Icon */}
                                        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                            <Quote className="w-8 h-8 text-gray-400" />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Stars */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                            
                                            {/* Testimonial Text */}
                                            <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                                                &quot;{testimonial.content}&quot;
                                            </blockquote>
                                            
                                            {/* Author */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#13a87c] to-[#18CB96] flex items-center justify-center text-white font-semibold text-lg">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                                    {testimonial.title && (
                                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Accent Line */}
                                            <div className={`w-8 h-0.5 bg-gradient-to-r ${category.color} rounded-full mt-4 group-hover:w-12 transition-all duration-300`} />
                                        </div>
                                    </motion.div>
                            ))}
                        </div>
                     </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="p-8 rounded-3xl bg-gradient-to-r from-[#13a87c]/10 to-[#18CB96]/10 border border-[#13a87c]/20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Join Our Success Stories?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Let&apos;s create something extraordinary together. Our clients trust us to bring their visions to life with cutting-edge technology and expert craftsmanship.
                        </p>
                        <a 
                            href="mailto:admin@developertag.com?subject=Get a Quote - Testimonial Page Inquiry"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <span>Start Your Project</span>
                            <motion.div
                                className="w-5 h-5"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                →
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;