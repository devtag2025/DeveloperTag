'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Heading from '@/common/Heading'
import { useTestimonial } from '@/context/contextStore'
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

interface Testimonial {
    id: string;
    text: string;
    name: string;
    title: string;
}

// API testimonial structure based on your actual response
interface ApiTestimonial {
    _id: string;
    content: string;
    name: string;
    title: string;
    testimonialImg?: string;
    createdAt: string;
    updatedAt: string;
}

// Function to transform API testimonial to component testimonial format
const transformApiTestimonial = (apiTestimonial: ApiTestimonial): Testimonial => {
    return {
        id: apiTestimonial._id,
        text: apiTestimonial.content,
        name: apiTestimonial.name,
        title: apiTestimonial.title
    };
};

// Enhanced Testimonial Card with Advanced Animations
const TestimonialCard: React.FC<{ 
    testimonial: Testimonial, 
    index: number, 
    isActive?: boolean,
    isHovered?: boolean,
    onHover?: (hovered: boolean) => void
}> = ({ testimonial, index, isActive = false, isHovered = false, onHover }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    // Fix hydration issues by only rendering animations after mount
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Check if text is longer than 150 characters
    const shouldTruncate = testimonial.text.length > 150;
    
    // Get truncated text
    const displayText = isExpanded ? testimonial.text : (shouldTruncate ? testimonial.text.substring(0, 150) + "..." : testimonial.text);
    
    // Handle click to expand/collapse
    const handleTextClick = () => {
        if (shouldTruncate) {
            setIsExpanded(!isExpanded);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: isActive ? 1.05 : 1,
                rotateY: isActive ? 0 : 5
            }}
            transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ 
                scale: 1.08,
                y: -10,
                rotateY: 0,
                transition: { duration: 0.3, type: "spring" }
            }}
            onHoverStart={() => onHover?.(true)}
            onHoverEnd={() => onHover?.(false)}
            className="group relative cursor-pointer"
        >
            {/* Main Card Container - Fixed Height */}
            <div className="relative bg-white rounded-3xl p-8 mx-4 min-w-[380px] max-w-[380px] h-[420px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-visible border-2 border-gray-100 hover:border-[#13a87c]/30 flex flex-col z-[53]">
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 via-transparent to-[#18CB96]/5 opacity-0"
                    animate={isHovered ? {
                        opacity: [0, 0.3, 0],
                    } : {}}
                    transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                />
                
                {/* Floating Sparkles Effect - Only render after mount to fix hydration */}
                {mounted && isHovered && (
                    <>
                        {[...Array(6)].map((_, i) => {
                            // Use index-based positioning instead of Math.random() to avoid hydration issues
                            const positions = [
                                { x: 50 + (i * 50), y: 50 + (i * 30) },
                                { x: 150 + (i * 40), y: 100 + (i * 25) },
                                { x: 250 + (i * 35), y: 150 + (i * 20) }
                            ];
                            const pos = positions[i % positions.length];
                            
    return (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-[#13a87c] rounded-full"
                                    initial={{ 
                                        x: pos.x, 
                                        y: pos.y,
                                        scale: 0,
                                        opacity: 0
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                        x: [pos.x, pos.x + 50, pos.x],
                                        y: [pos.y, pos.y + 30, pos.y]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            );
                        })}
                    </>
                )}
                
                {/* Quote Icon */}
                <motion.div
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center shadow-lg"
                    animate={isHovered ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ 
                        rotate: { duration: 0.6 },
                        scale: { duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }
                    }}
                >
                    <Quote className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                        >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                    ))}
            </div>
                
                {/* Testimonial Text - Flexible Height */}
                <motion.div 
                    className="flex-1 relative z-10 flex flex-col justify-start"
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                >
                    <motion.p 
                        className={`text-gray-700 text-base leading-relaxed font-medium flex-1 ${shouldTruncate ? 'cursor-pointer hover:text-[#13a87c] transition-colors' : ''}`}
                        onClick={handleTextClick}
                        whileHover={shouldTruncate ? { scale: 1.02 } : {}}
                        transition={{ duration: 0.2 }}
                    >
                        &ldquo;{displayText}&rdquo;
                        {shouldTruncate && !isExpanded && (
                            <span className="text-[#13a87c] font-semibold ml-1">Read more</span>
                        )}
                        {shouldTruncate && isExpanded && (
                            <span className="text-[#13a87c] font-semibold ml-1">Read less</span>
                        )}
                    </motion.p>
                </motion.div>
                
                {/* Author Section - Fixed at Bottom */}
                <motion.div 
                    className="border-t border-gray-100 pt-6 relative z-10 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    <div className="flex items-center space-x-4">
                        {/* Avatar Placeholder */}
                        <motion.div
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            animate={isHovered ? { 
                                scale: [1, 1.1, 1],
                                rotate: [0, 360]
                            } : {}}
                            transition={{ 
                                scale: { duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 1 },
                                rotate: { duration: 0.6 }
                            }}
                        >
                            {testimonial.name.charAt(0).toUpperCase()}
                        </motion.div>
                        
                        <div className="flex-1">
                            <motion.h4 
                                className="text-gray-900 font-bold text-base mb-1"
                                animate={isHovered ? { color: ["#374151", "#13a87c", "#374151"] } : {}}
                                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                            >
                    {testimonial.name}
                            </motion.h4>
                            <p className="text-[#13a87c] text-sm font-medium">{testimonial.title}</p>
                        </div>
                        
                     
            </div>
                </motion.div>
                
                {/* Corner Accent */}
                <motion.div
                    className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#13a87c]/20 to-transparent rounded-br-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3 }}
                />
                
                {/* Pulse Ring Effect - Ensure rounded corners are complete */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 border-2 border-[#13a87c] rounded-3xl overflow-visible"
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ 
                            margin: '-2px',
                            borderRadius: '24px'
                        }}
                    />
                )}
                
                {/* Bottom Gradient Line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13a87c] to-[#18CB96]"
                    initial={{ scaleX: 0 }}
                    animate={isHovered ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5 }}
                />
        </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const testimonialData = useTestimonial();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [isManualScrolling, setIsManualScrolling] = useState(false);

    // Show loading state while data is being fetched
    if (!testimonialData) {
        return (
            <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Heading headOne="Our service" headTwo="Clients Who Believe" headThree="In Results" />
                    </div>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-gray-500">Loading testimonials...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Extract testimonials from API response
    const apiTestimonials: ApiTestimonial[] = testimonialData?.data?.items || [];

    // Enhanced fallback testimonials with better content
    const fallbackTestimonials: ApiTestimonial[] = [
        {
            _id: "1",
            content: "Developer Tag built our entire e-commerce website from scratch using React and Next.js. The performance is incredible - pages load in under 2 seconds and our conversion rate increased by 35%. Their web development skills are top-notch!",
            name: "Sarah Johnson",
            title: "CEO, Digital Commerce Solutions",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "2",
            content: "The custom web application Developer Tag developed for our business transformed our operations. Their full-stack development expertise with Node.js backend and modern frontend frameworks exceeded all expectations.",
            name: "Michael Chen",
            title: "Founder, Tech Innovations Inc",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "3",
            content: "Developer Tag's graphic design team created our complete brand identity - logo, business cards, social media templates, and website graphics. The creative quality and attention to detail is absolutely outstanding.",
            name: "Emily Rodriguez",
            title: "Marketing Director, Creative Studios",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "4",
            content: "Their video editing work is professional Hollywood-level quality. They edited our product launch video, adding stunning effects and transitions that made our brand look premium. Social media engagement tripled!",
            name: "David Thompson",
            title: "Content Manager, Media Productions",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "5",
            content: "Developer Tag redesigned our entire website with modern UI/UX principles. The user experience improved dramatically, and our bounce rate dropped by 60%. Their web development and design skills are exceptional.",
            name: "Lisa Park",
            title: "Business Development, Innovation Hub",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "6",
            content: "Working with Developer Tag was a game-changer for our startup. They delivered a stunning mobile app that our users absolutely love. The attention to detail and innovative approach exceeded our expectations.",
            name: "Alex Rivera",
            title: "Co-Founder, StartupVibe",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        }
    ];

    // Use API data or fallback to static testimonials
    const testimonialsToUse = apiTestimonials.length > 0 ? apiTestimonials : fallbackTestimonials;

    // Transform testimonials to component format
    const transformedTestimonials = testimonialsToUse.map(transformApiTestimonial);

    // Use all testimonials in single row
    const allTestimonials = transformedTestimonials;
    
    // Navigation functions
    const scrollLeft = () => {
        setIsManualScrolling(true);
        setCurrentPosition(prev => Math.max(0, prev - 1));
        setTimeout(() => setIsManualScrolling(false), 1000);
    };
    
    const scrollRight = () => {
        setIsManualScrolling(true);
        setCurrentPosition(prev => Math.min(allTestimonials.length - 1, prev + 1));
        setTimeout(() => setIsManualScrolling(false), 1000);
    };

    return (
        <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24 overflow-hidden z-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-60 z-[51]" />
            
            {/* Floating Decorative Elements - Fixed positions to avoid hydration issues */}
            <div className="absolute inset-0 overflow-hidden z-[51]">
                {[...Array(8)].map((_, i) => {
                    // Use fixed positions based on index to avoid hydration issues
                    const positions = [
                        { left: '10%', top: '20%' },
                        { left: '80%', top: '30%' },
                        { left: '20%', top: '70%' },
                        { left: '90%', top: '60%' },
                        { left: '50%', top: '10%' },
                        { left: '30%', top: '50%' },
                        { left: '70%', top: '80%' },
                        { left: '60%', top: '40%' }
                    ];
                    const pos = positions[i % positions.length];

    return (
                        <motion.div
                            key={i}
                            className="absolute w-32 h-32 rounded-full bg-[#13a87c]/5 blur-3xl"
                            animate={{
                                x: [0, 50 - (i * 10), 0],
                                y: [0, 30 + (i * 5), 0],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 20 + (i * 2),
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={pos}
                        />
                    );
                })}
            </div>

            <div className="relative z-[52] w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 px-4"
            data-aos="fade-up"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <Sparkles className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">
                            Client Testimonials
                        </span>
                    </div>
                    <Heading headOne="Our service" headTwo="Clients Who Believe" headThree="In Results" />
                </motion.div>

                {/* Single Row Testimonials with Manual Navigation */}
                <div className="mb-20 relative">
                     {/* Navigation Buttons */}
                     <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[57]">
                         <motion.button
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             onClick={scrollLeft}
                             disabled={currentPosition === 0}
                             className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border-2 border-[#13a87c] text-[#13a87c] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                             <ChevronLeft className="w-6 h-6" />
                         </motion.button>
                     </div>
                     
                     <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[57]">
                         <motion.button
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             onClick={scrollRight}
                             disabled={currentPosition === allTestimonials.length - 1}
                             className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border-2 border-[#13a87c] text-[#13a87c] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                             <ChevronRight className="w-6 h-6" />
                         </motion.button>
                </div>

                     <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="relative overflow-hidden mx-16 py-16"
                         data-aos="fade-up"
                     >
                         {/* Left Fade Gradient */}
                         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#dcf3ec] via-[#dcf3ec]/60 to-transparent z-[56] pointer-events-none" />
                         
                         {/* Right Fade Gradient */}
                         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#dcf3ec] via-[#dcf3ec]/60 to-transparent z-[56] pointer-events-none" />
                         
                         <div className={`flex transition-transform duration-500 ease-in-out relative z-[54] ${!isManualScrolling ? 'animate-scroll-single' : ''}`}>
                             {/* Create 3 identical sets for seamless infinite loop */}
                             {[...Array(3)].map((_, setIndex) => (
                                 <div key={setIndex} className="flex shrink-0">
                                     {allTestimonials.map((testimonial, index) => (
                                         <div key={`single-${setIndex}-${testimonial.id}`} className="px-2">
                                             <TestimonialCard
                                                 testimonial={testimonial}
                                                 index={index}
                                                 isHovered={hoveredCard === index}
                                                 onHover={(hovered) => setHoveredCard(hovered ? index : null)}
                                             />
                                         </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                     </motion.div>
                    
                    {/* Position Indicator */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {allTestimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentPosition(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentPosition 
                                        ? 'bg-gradient-to-r from-[#13a87c] to-[#18CB96] scale-125' 
                                        : 'bg-gray-300 hover:bg-[#13a87c]/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Keyframe Animations for Single Row Infinite Scrolling */}
            <style jsx>{`
                @keyframes scroll-single {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                        transform: translateX(calc(-400px * ${allTestimonials.length}));
                    }
                }

                .animate-scroll-single {
                    animation: scroll-single 50s linear infinite;
                    width: calc(400px * ${allTestimonials.length * 3});
                }

                /* Pause animation on hover */
                .animate-scroll-single:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default Testimonials