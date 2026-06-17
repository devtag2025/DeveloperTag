'use client'
import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "../ServiceCompoent/ServiceCard";
import { useService } from "@/context/contextStore";
import ContactPopup from "@/common/ContactPopup";
import {
    Globe, Smartphone, Monitor, Users, Database, Cloud,
    Network, Zap, Eye, Settings, Briefcase, Star
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ServiceType {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    heroImage?: string;
    icon?: React.ComponentType<{ className?: string }>;
    url?: string;
    slug?: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const STATIC_SERVICES = [
    {
        _id: "static-1",
        title: "Web Development",
        description: "Custom, responsive websites and web applications that are fast, secure, and SEO-friendly. From elegant marketing sites to complex web portals, we ensure your online presence is modern, engaging, and scalable.",
        imageUrl: "/assets/Services/web_development.webp",
        url: "/service/web-development",
        icon: Globe,
    },
    {
        _id: "static-2",
        title: "Mobile App Development",
        description: "Intuitive iOS and Android applications built for performance and great user experience. We develop both native and cross-platform mobile apps that engage your users and expand your reach on any device.",
        imageUrl: "/assets/Services/App_development.jpg",
        url: "/service/app-development",
        icon: Smartphone,
    },
    {
        _id: "static-3",
        title: "Desktop Software Development",
        description: "High-performance desktop applications for Windows, Mac, or Linux, tailored to your specific requirements. From productivity tools to specialized enterprise software, we build desktop solutions that are robust, user-friendly, and easy to maintain.",
        imageUrl: "/assets/Services/desktop-app.webp",
        url: "/service/desktop-development",
        icon: Monitor,
    },
    {
        _id: "static-4",
        title: "CRM Solutions",
        description: "Custom Customer Relationship Management systems to help you stay organized and nurture customer relationships. We design CRMs that integrate with your business processes, giving your team a central platform to track leads, sales, and support with ease.",
        imageUrl: "/assets/Services/crmSystem.jpg",
        url: "/service/crm-solutions",
        icon: Users,
    },
    {
        _id: "static-5",
        title: "ERP Systems",
        description: "End-to-end Enterprise Resource Planning solutions that streamline your operations. We develop ERP systems that tie together key business functions – like inventory, accounting, and HR – into one cohesive platform for better data visibility and efficiency.",
        imageUrl: "/assets/Services/erpSystem.jpg",
        url: "/service/erp-systems",
        icon: Database,
    },
    {
        _id: "static-6",
        title: "SaaS Platforms",
        description: "Scalable Software-as-a-Service applications ready for the cloud. We build multi-tenant SaaS platforms from the ground up, handling subscription management, security, and performance, so you can serve users globally with confidence.",
        imageUrl: "/assets/Services/SaasSystem.png",
        url: "/service/saas-platforms",
        icon: Cloud,
    },
    {
        _id: "static-7",
        title: "Blockchain Applications",
        description: "Next-generation software leveraging blockchain technology for security and transparency. Our team develops decentralized apps (DApps), smart contracts, and blockchain integrations that bring innovation to industries like finance, supply chain, and more.",
        imageUrl: "/assets/Services/BlockChainSystem.jpg",
        url: "/service/blockchain-applications",
        icon: Network,
    },
];

const values = [
    {
        id: 1,
        icon: Zap,
        title: "Lightning Fast Delivery",
        description: "We ship production-ready solutions faster than industry benchmarks — without cutting corners.",
        tag: "Speed",
    },
    {
        id: 2,
        icon: Users,
        title: "People-First Approach",
        description: "Your team, your goals, your culture — we align deeply before writing a single line of code.",
        tag: "Culture",
    },
    {
        id: 3,
        icon: Eye,
        title: "Radical Transparency",
        description: "Real-time updates, open communication, and zero black boxes across every project phase.",
        tag: "Trust",
    },
    {
        id: 4,
        icon: Settings,
        title: "Tailored Solutions",
        description: "No templates, no one-size-fits-all. Every build is custom-crafted to your unique vision.",
        tag: "Custom",
    },
];

const stats = [
    { icon: Briefcase, value: 100, suffix: "+", label: "Projects delivered" },
    { icon: Star,      value: 98,  suffix: "%", label: "Client satisfaction" },
    { icon: Globe,     value: 5,  suffix: "+", label: "Countries served" },
];

const SERVICE_ORDER = [
    "Web Development",
    "Mobile App Development",
    "Desktop Software Development",
    "CRM Solutions",
    "ERP Systems",
    "SaaS Platforms",
    "Blockchain Applications",
];

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(Math.floor(start));
            if (start >= target) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration]);
    return count;
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
    icon: Icon, value, suffix, label, active,
}: (typeof stats)[0] & { active: boolean }) {
    const count = useCountUp(value, 1300, active);
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(19,168,124,0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50
                       p-5 transition-colors hover:border-[#13a87c]/30"
        >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8faf3]">
                <Icon className="h-5 w-5 text-[#13a87c]" />
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-900 leading-none">
                    {count}{suffix}
                </p>
                <p className="mt-1 text-xs text-gray-500">{label}</p>
            </div>
        </motion.div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function HomeService() {
    const serviceData = useService();
    const [contactPopupOpen, setContactPopupOpen] = useState(false);

    // Stats InView trigger
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

    const services = useMemo(() => {
        const apiServices: ServiceType[] = serviceData?.data?.items || [];
        if (apiServices.length === 0) return STATIC_SERVICES;
        return [...apiServices].sort((a, b) => {
            const indexA = SERVICE_ORDER.indexOf(a.title);
            const indexB = SERVICE_ORDER.indexOf(b.title);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    }, [serviceData]);

    const getSecureImageUrl = (service: ServiceType) => {
        const url = service.heroImage || service.imageUrl || "";
        return url.startsWith("http://") ? url.replace("http://", "https://") : url;
    };

    return (
        <div className="relative w-full bg-white md:py-14 overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-40" />

            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">

                {/* ── "Why Choose Us" badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-medium text-[#13a87c]">
                            Why Should You Choose Us
                        </span>
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    TRUSTED BY INNOVATORS SECTION
                ════════════════════════════════════════════════════════════ */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto max-w-6xl mb-20"
                >

                    {/* Heading */}
                    <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
                        Trusted by{" "}
                        <span className="text-[#13a87c]">Innovators</span> &{" "}
                        <span className="text-[#13a87c]">Industry</span> Leaders
                    </h2>
                    <p className="mx-auto mt-4 mb-12 max-w-2xl text-center text-base leading-relaxed text-gray-500">
                        From solo founders to scaling enterprises, we build tailored,
                        people-first solutions that are collaborative, transparent, and
                        aligned with your vision.
                    </p>

                    {/* ── Value cards grid ── */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 items-start mb-4">
                        {values.map((value, index) => {
                            const isGreen   = index % 2 !== 0;
                            const isShifted = index % 2 !== 0;

                            return (
                                <motion.div
                                    key={value.id}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -10, scale: 1.025 }}
                                    style={{ marginTop: isShifted ? "36px" : "0px" }}
                                    className={[
                                        "relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6",
                                        "transition-shadow duration-300",
                                        isGreen
                                            ? "bg-[#13a87c] hover:shadow-[0_18px_44px_rgba(19,168,124,0.42)]"
                                            : "border border-gray-100 bg-white shadow-sm hover:border-[#13a87c]/30 hover:shadow-[0_14px_36px_rgba(19,168,124,0.14)]",
                                    ].join(" ")}
                                >
                                    {/* Decorative circles on green cards */}
                                    {isGreen && (
                                        <>
                                            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 pointer-events-none" />
                                            <div className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full bg-white/[0.07] pointer-events-none" />
                                        </>
                                    )}

                                    {/* Icon */}
                                    <div className={[
                                        "relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[14px]",
                                        isGreen
                                            ? "border border-white/30 bg-white/20"
                                            : "bg-gradient-to-br from-[#13a87c] to-[#18CB96]",
                                    ].join(" ")}>
                                        <value.icon className="h-5 w-5 text-white" />
                                    </div>

                                    {/* Text */}
                                    <div className="relative z-10 flex flex-col gap-1.5">
                                        <h4 className={`text-[13px] font-bold leading-snug ${isGreen ? "text-white" : "text-gray-900"}`}>
                                            {value.title}
                                        </h4>
                                        <p className={`text-xs leading-relaxed ${isGreen ? "text-white/80" : "text-gray-500"}`}>
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Tag pill */}
                                    <span className={[
                                        "relative z-10 w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold",
                                        isGreen
                                            ? "bg-white/20 text-white"
                                            : "bg-[#e8faf3] text-[#0a6b4a]",
                                    ].join(" ")}>
                                        {value.tag}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── Stats row ── */}
                    <div
                        ref={statsRef}
                        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
                    >
                        {stats.map((stat) => (
                            <StatCard key={stat.label} {...stat} active={statsInView} />
                        ))}
                    </div>
                </motion.section>
                {/* ════════════════════════════════════════════════════════════ */}

            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </div>
    );
}