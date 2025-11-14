'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTestimonial } from '@/context/contextStore'
import type { Testimonial as TestimonialType } from '@/config/TestimonialApi'
import ContactPopup from '@/common/ContactPopup'

const Testimonials = () => {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [direction, setDirection] = useState(0);
    const sliderRef = useRef(null);
    
    // Get testimonials from API via context
    const testimonialData = useTestimonial();
    const testimonials = testimonialData?.data?.items || [];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = useCallback(() => {
        if (testimonials.length === 0) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
    }, [testimonials.length, cardsToShow]);

    const handlePrevious = () => {
        if (testimonials.length === 0) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - cardsToShow : prev - 1));
    };

    useEffect(() => {
        if (testimonials.length === 0) return;
        
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [handleNext, testimonials.length]);

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);
    if (visibleTestimonials.length < cardsToShow && testimonials.length > 0) {
        visibleTestimonials.push(...testimonials.slice(0, cardsToShow - visibleTestimonials.length));
    }

    // Loading state
    if (testimonials.length === 0) {
        return (
            <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24 overflow-hidden">
                <div className="text-center text-gray-600">Loading testimonials...</div>
            </div>
        );
    }

    return (
        <div className="relative w-full bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-16 md:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-60" />
            
            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-[#13a87c]">Our service</span> Clients Who Believe <span className="text-[#13a87c]">In Results</span>
                    </h2>
                </motion.div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons - Fixed positioning to show completely */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl hover:shadow-2xl border-2 border-[#13a87c]/20 hover:border-[#13a87c] flex items-center justify-center text-[#13a87c] hover:bg-[#13a87c] hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl hover:shadow-2xl border-2 border-[#13a87c]/20 hover:border-[#13a87c] flex items-center justify-center text-[#13a87c] hover:bg-[#13a87c] hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>

                    {/* Cards Grid */}
                    <div ref={sliderRef} className="overflow-hidden px-2">
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            key={currentIndex}
                            initial={{ x: direction > 0 ? 300 : -300, opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ 
                                duration: 0.8, 
                                ease: [0.34, 1.56, 0.64, 1], // smooth spring-like easing
                                opacity: { duration: 0.4 }
                            }}
                            style={{ willChange: "transform" }}
                        >
                            {visibleTestimonials.map((testimonial: TestimonialType, index: number) => (
                                <div
                                    key={`${testimonial._id}-${index}`}
                                    className="group relative p-8 rounded-3xl bg-white border border-gray-200/50 hover:border-[#13a87c]/50 hover:shadow-2xl hover:shadow-[#13a87c]/5 transition-all duration-300"
                                >
                                    {/* Quote Icon - Reduced opacity and fixed position */}
                                    <div className="absolute top-4 right-4 opacity-10">
                                        <Quote className="w-12 h-12 text-gray-300" />
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
                                        <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic min-h-[140px]">
                                            &quot;{testimonial.content}&quot;
                                        </blockquote>
                                        
                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#13a87c] to-[#18CB96] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                                {testimonial.category && (
                                                    <p className="text-xs font-medium text-[#13a87c] mt-1">{testimonial.category}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {Array.from({ length: Math.ceil(testimonials.length / cardsToShow) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * cardsToShow)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    Math.floor(currentIndex / cardsToShow) === index
                                        ? 'w-8 bg-[#13a87c]' 
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
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
                        <button 
                            onClick={() => setContactPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <span>Start Your Project</span>
                            <motion.div
                                className="w-5 h-5"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                →
                            </motion.div>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </div>
    );
};

export default Testimonials;