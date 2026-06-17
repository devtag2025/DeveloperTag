"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
    Globe,
    Smartphone,
    BrainCircuit,
    Users,
    Database,
    Cloud,
    Network,
    PenTool,
    ArrowUpRight,
    type LucideIcon,
} from "lucide-react";

const PRIMARY = "#13a87c";
const PRIMARY_DARK = "#0b6b54";

interface ServiceCardData {
    _id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    url: string;
    variant: "light" | "mint";
}

const SERVICES: ServiceCardData[] = [
    {
        _id: "static-1",
        title: "Web Development",
        description:
            "Custom, responsive websites and web apps that are fast, secure, and SEO-friendly — built to scale as your business grows.",
        icon: Globe,
        url: "/service/web-development",
        variant: "light",
    },
    {
        _id: "static-2",
        title: "Mobile App Development",
        description:
            "Native and cross-platform iOS and Android apps engineered for smooth performance and real user engagement.",
        icon: Smartphone,
        url: "/service/app-development",
        variant: "mint",
    },
    {
        _id: "static-3",
        title: "User Experience and Design",
        description:
            "Human-centered UI/UX design that turns complex workflows into intuitive, polished products people enjoy using every day.",
        icon: PenTool,
        url: "/service/ux-design",
        variant: "light",
    },
    {
        _id: "static-4",
        title: "AI/ML Development",
        description:
            "Machine learning models and AI-powered features that turn your data into smarter, more automated products.",
        icon: BrainCircuit,
        url: "/service/ai-ml-development",
        variant: "mint",
    },
    {
        _id: "static-5",
        title: "CRM Solutions",
        description:
            "Custom CRM platforms that centralize leads, sales, and support, so your team can track every relationship in one place.",
        icon: Users,
        url: "/service/crm-solutions",
        variant: "light",
    },
    {
        _id: "static-6",
        title: "ERP Systems",
        description:
            "End-to-end ERP platforms that tie inventory, accounting, and HR together for better visibility and tighter operations.",
        icon: Database,
        url: "/service/erp-systems",
        variant: "mint",
    },
    {
        _id: "static-7",
        title: "SaaS Platforms",
        description:
            "Multi-tenant SaaS products built for the cloud, handling billing, security, and scale so you can serve users globally.",
        icon: Cloud,
        url: "/service/saas-platforms",
        variant: "light",
    },
    {
        _id: "static-8",
        title: "Blockchain Applications",
        description:
            "Decentralized apps, smart contracts, and chain integrations built for finance, supply chain, and beyond.",
        icon: Network,
        url: "/service/blockchain-applications",
        variant: "mint",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const ServiceCard = ({ service }: { service: ServiceCardData }) => {
    const Icon = service.icon;
    const isMint = service.variant === "mint";

    return (
        <motion.div variants={fadeUp} className="h-full">
            <Link
                href={service.url}
                className={`group relative flex h-full flex-col justify-between rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13a87c] focus-visible:ring-offset-2 sm:p-8 ${
                    isMint
                        ? "border-transparent bg-[#EAFFF6]"
                        : "border-slate-100 bg-white"
                }`}
            >
                <div className="flex items-start justify-between">
                    <Icon className="h-7 w-7" style={{ color: PRIMARY }} strokeWidth={1.6} />
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#13a87c]">
                        <ArrowUpRight className="h-5 w-5 text-slate-900 transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                    </span>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                        {service.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-500">
                        {service.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};

const CTACard = () => (
    <motion.div variants={fadeUp} className="h-full sm:col-span-2 lg:col-span-1">
        <a
            href="mailto:admin@developertag.com"
            className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1.75rem] p-7 text-white transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:p-8 lg:flex-col lg:items-start"
            style={{ backgroundImage: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)` }}
        >
            <span className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <h3 className="relative max-w-md text-xl font-bold leading-snug sm:text-2xl">
                Ready to build your next innovative product?
            </h3>

            <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" style={{ color: PRIMARY }} />
                </span>
                <span className="text-sm font-semibold text-white/90">Let&apos;s talk</span>
            </div>
        </a>
    </motion.div>
);

const OurServices = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative w-full mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto w-full max-w-7xl">
                <motion.div
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-[2rem] font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
                        What are you looking to get done?
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                        Pick the service that matches where you are today — each one
                        comes with a senior team and software built to last.
                    </p>
                </motion.div>

                <motion.div
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.15 }}
                    variants={gridContainer}
                    className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
                >
                    {SERVICES.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                    <CTACard />
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;