"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeartPulse, Bot, GraduationCap, ShoppingBag, Landmark, Plane
} from 'lucide-react';

// Desktop panel widths (the side-by-side accordion strip)
const PANEL_COLLAPSED_W = 65;
const PANEL_ACTIVE_W = 300;

interface Service {
    id: number;
    name: string;
    heading: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    bullets: string[];
    image: string;
    video: string;
}

const servicesData: Service[] = [
    {
        id: 0,
        name: "Healthcare",
        heading: "Healthcare Digital Solutions",
        icon: HeartPulse,
        description:
            "Assemble a team that understands HIPAA compliance, clinical workflows, and patient-first design. We build telemedicine platforms, EHR integrations, and care coordination tools that help providers deliver better outcomes at scale.",
        bullets: [
            "Telemedicine & virtual care platforms",
            "Patient portals & appointment systems",
            "HIPAA-compliant data architecture",
            "Clinical workflow automation",
        ],
        video: "/assets/videos/healthcare.mp4",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    },
    {
        id: 1,
        name: "AI Chatbots",
        heading: "Intelligent Conversational AI",
        icon: Bot,
        description:
            "Deploy AI assistants that understand context, resolve queries instantly, and escalate gracefully when human expertise is needed. From customer support to internal knowledge bases, we turn conversations into measurable business value.",
        bullets: [
            "Context-aware customer support bots",
            "Multi-channel deployment (web, app, WhatsApp)",
            "Secure, policy-compliant responses",
            "Continuous learning & quality tuning",
        ],
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
        video: "/assets/videos/ai-chatbot.mp4",
    },
    {
        id: 2,
        name: "Education",
        heading: "EdTech & Learning Platforms",
        icon: GraduationCap,
        description:
            "Create engaging learning experiences with LMS platforms, interactive course builders, and student analytics dashboards. Whether you're an institution or an ed-tech startup, we match the right engineers to your curriculum goals.",
        bullets: [
            "Custom LMS & course management",
            "Live classrooms & video integration",
            "Student progress & analytics",
            "Gamification & engagement tools",
        ],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
        video: "/assets/videos/education.mp4",
    },
    {
        id: 3,
        name: "E-commerce",
        heading: "E-commerce & Retail Tech",
        icon: ShoppingBag,
        description:
            "Launch high-converting online stores with seamless checkout, inventory management, and personalized shopping experiences. Our specialists build platforms that scale from first sale to enterprise-level order volumes.",
        bullets: [
            "Custom storefronts & marketplaces",
            "Payment gateway & cart integrations",
            "Inventory & order management",
            "Personalization & recommendation engines",
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
        video: "/assets/videos/e-commerce.mp4",
    },
    {
        id: 4,
        name: "FinTech",
        heading: "FinTech & Banking Solutions",
        icon: Landmark,
        description:
            "Build secure financial products — from digital wallets and payment processors to lending platforms and trading dashboards. We connect you with engineers who understand compliance, encryption, and real-time transaction systems.",
        bullets: [
            "Digital wallets & payment processing",
            "KYC/AML compliance workflows",
            "Real-time transaction monitoring",
            "Open banking & API integrations",
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
        video: "/assets/videos/fintech.mp4",
    },
    {
        id: 5,
        name: "Travel & Tourism",
        heading: "Travel & Hospitality Tech",
        icon: Plane,
        description:
            "We build innovative digital solutions that simplify travel management and enhance customer experiences. From booking platforms and itinerary planners to mobile applications and web based platforms and customer engagement tool",
        bullets: [
            "Booking platforms & reservation systems",
            "Itinerary planning & trip management",
            "Mobile applications & web-based platforms",
            "Customer engagement tools & loyalty programs",
            "Travel & hospitality management systems",
        ],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
        video: "/assets/videos/travel.mp4",
    },
];

// Detects whether a URL points to a video file
const isVideoUrl = (url: string) => /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url);

/**
 * Renders a <video> when `service.video` points to a video file AND `active` is true,
 * otherwise renders a regular <img>. Collapsed cards stay on the static image so
 * autoplay only kicks in for the card that's actually open.
 */
const ServiceVisual: React.FC<{
    service: Service;
    className?: string;
    alt?: string;
    active?: boolean;
}> = ({ service, className, alt, active = true }) => {
    if (active && isVideoUrl(service.video)) {
        return (
            <video
                key={service.video}
                src={service.video ? service.video : service.image}
                className={className}
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
        );
    }
    return <img src={service.image} alt={alt ?? service.name} className={className} />
};

function ServicesAccordion() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const activeService = servicesData[activeIndex];

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Auto-advance to the next service every 2 seconds, looping back to the start
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % servicesData.length);
        }, 2000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    // When the user manually picks a tab/panel, jump straight there and
    // restart the 5s timer so it doesn't fire right away afterwards
    const handleSelect = (index: number) => {
        setActiveIndex(index);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % servicesData.length);
        }, 5000);
    };

    return (
        <section className="relative w-full bg-white overflow-hidden py-12">
            <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-40" />

            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-medium text-[#13a87c]">Industries We Serve</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                        What Kind of{" "}
                        <span className="text-[#13a87c]">Solution</span> Do You Need?
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Assemble your ideal team with top-tier professionals who are passionate about
                        turning your vision into production reality. Whether you&apos;re seeking industry
                        specialists, AI strategists, or enterprise system architects, we have the
                        specialized talent to match your project&apos;s technical requirements.
                    </p>
                </motion.div>

                {/* ===== MOBILE / TABLET (< lg): horizontal scroll tabs + stacked detail card ===== */}
                <div className="lg:hidden">
                    {/* Horizontally scrollable tab strip */}
                    <div
                        className="flex gap-2.5 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-8 sm:px-8 snap-x snap-mandatory scrollbar-none"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => handleSelect(index)}
                                    className={`
                                        relative flex items-center gap-2 shrink-0 snap-start
                                        rounded-full pl-2 pr-4 py-2
                                        border transition-all duration-300
                                        ${isActive
                                            ? "bg-gradient-to-r from-[#13a87c] to-[#18CB96] border-transparent shadow-md shadow-[#13a87c]/30"
                                            : "bg-white border-gray-200 hover:border-[#13a87c]/40"
                                        }
                                    `}
                                >
                                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isActive ? "bg-white" : "bg-[#13a87c]/10"}`}>
                                        <service.icon className={`w-3.5 h-3.5 ${isActive ? "text-[#13a87c]" : "text-[#13a87c]"}`} />
                                    </span>
                                    <span className={`text-sm font-semibold whitespace-nowrap ${isActive ? "text-white" : "text-gray-700"}`}>
                                        {service.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail card below the tabs */}
                    <motion.div
                        layout
                        className="relative mt-2 rounded-3xl overflow-hidden border border-white/40 shadow-xl shadow-[#13a87c]/10"
                    >

                        {/* Background visual + scrim, ambient to match the service */}
                        <div className="absolute inset-0">
                            <ServiceVisual
                                service={activeService}
                                alt=""
                                className="w-full h-full object-cover opacity-15"
                                active={true}
                            />
                            <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl" />
                        </div>

                        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#13a87c]/20 blur-3xl -z-0" />
                        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#18CB96]/15 blur-3xl -z-0" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative z-10 p-6 sm:p-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center flex-shrink-0">
                                        <activeService.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#13a87c]">
                                        {activeService.name}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    {activeService.heading}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-7 mb-5">
                                    {activeService.description}
                                </p>
                                <ul className="space-y-2.5 mb-6">
                                    {activeService.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-800 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-[#13a87c]" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#13a87c] to-[#18CB96] hover:from-[#0f8a6b] hover:to-[#13a87c] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto justify-center">
                                    View Details
                                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* ===== DESKTOP (lg+): original side-by-side panel accordion ===== */}
                <div className="hidden lg:flex w-full gap-4 lg:gap-5 items-stretch min-h-[440px]">
                    <div className="flex gap-2 shrink-0">
                        {servicesData.map((service, index) => (
                            <PanelCard
                                key={service.id}
                                service={service}
                                isActive={activeIndex === index}
                                onClick={() => handleSelect(index)}
                            />
                        ))}
                    </div>

                    <motion.div
                        layout
                        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        className="relative flex-1 min-w-0 basis-0 flex flex-col justify-center rounded-3xl p-6 md:p-8 lg:p-10 border border-white/40 shadow-xl shadow-[#13a87c]/10 bg-white/40 backdrop-blur-xl backdrop-saturate-150"
                    >
                        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#13a87c]/30 blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#18CB96]/25 blur-3xl -z-10" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center">
                                        <activeService.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#13a87c]">
                                        {activeService.name}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                    {activeService.heading}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-7 mb-5">
                                    {activeService.description}
                                </p>
                                <ul className="space-y-2.5 mb-6">
                                    {activeService.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-800 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#13a87c]" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#13a87c] to-[#18CB96] hover:from-[#0f8a6b] hover:to-[#13a87c] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
                                    View Details
                                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

interface PanelCardProps {
    service: Service;
    isActive: boolean;
    onClick: () => void;
}

const PanelCard: React.FC<PanelCardProps> = ({ service, isActive, onClick }) => {
    return (
        <motion.div
            layout
            animate={{ width: isActive ? PANEL_ACTIVE_W : PANEL_COLLAPSED_W }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className={`
                relative rounded-[22px] overflow-hidden cursor-pointer flex-shrink-0 min-h-[440px]
                bg-white/10 backdrop-blur-2xl
                border border-white/20
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                hover:scale-[1.02]
                transition-all duration-300 ease-out
                ${isActive
                    ? "border-[#13a87c] shadow-[#13a87c]/20"
                    : "border-white/10 hover:border-[#13a87c]/20"
                }
            `}
            onClick={onClick}
        >
            <div className="absolute inset-0">
                <ServiceVisual
                    service={service}
                    className="w-full h-full object-cover"
                    active={isActive}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#13a87c]/85 via-[#0f8a6b]/45 to-[#0f8a6b]/20"
                    animate={{ opacity: isActive ? 0.75 : 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div className="absolute top-4 left-4 z-10">
                <motion.div
                    layout
                    className="w-9 h-9 rounded-full border border-white/40 bg-white flex items-center justify-center shadow-sm"
                >
                    <service.icon className="w-4 h-4 text-[#13a87c]" />
                </motion.div>
            </div>

            <AnimatePresence>
                {!isActive && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center pt-16 pb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span
                            className="mt-auto text-white text-[12px] font-semibold whitespace-nowrap drop-shadow-md"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            {service.name}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="absolute bottom-5 left-3 right-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.15 }}
                    >
                        <p className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-md">
                            {service.name}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ServicesAccordion;