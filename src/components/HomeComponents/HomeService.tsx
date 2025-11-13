'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "../ServiceCompoent/ServiceCard";
import Heading from "@/common/Heading";
import { useService } from "@/context/contextStore";
import ContactPopup from "@/common/ContactPopup";
import { Globe, Smartphone, Monitor, Users, Database, Cloud, Network, Zap, Target, Award, TrendingUp } from "lucide-react";

interface ServiceType {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    icon: React.ComponentType<{ className?: string }>;
    url: string;
}

export function HomeService() {
    const serviceData = useService();
    const [contactPopupOpen, setContactPopupOpen] = useState(false);

    // Static fallback services
    const staticServices = [
        {
            _id: "static-1",
            title: "Web Development",
            description: "Custom, responsive websites and web applications that are fast, secure, and SEO-friendly. From elegant marketing sites to complex web portals, we ensure your online presence is modern, engaging, and scalable.",
            imageUrl: "/assets/Services/web_development.webp",
            url: "/service/web-development",
            icon: Globe
        },
        {
            _id: "static-2",
            title: "Mobile App Development",
            description: "Intuitive iOS and Android applications built for performance and great user experience. We develop both native and cross-platform mobile apps that engage your users and expand your reach on any device.",
            imageUrl: "/assets/Services/App_development.jpg",
            url: "/service/app-development",
            icon: Smartphone
        },
        {
            _id: "static-3",
            title: "Desktop Software Development",
            description: "High-performance desktop applications for Windows, Mac, or Linux, tailored to your specific requirements. From productivity tools to specialized enterprise software, we build desktop solutions that are robust, user-friendly, and easy to maintain.",
            imageUrl: "/assets/Services/desktop-app.webp",
            url: "/service/desktop-development",
            icon: Monitor
        },
        {
            _id: "static-4",
            title: "CRM Solutions",
            description: "Custom Customer Relationship Management systems to help you stay organized and nurture customer relationships. We design CRMs that integrate with your business processes, giving your team a central platform to track leads, sales, and support with ease.",
            imageUrl: "/assets/Services/crmSystem.jpg",
            url: "/service/crm-solutions",
            icon: Users
        },
        {
            _id: "static-5",
            title: "ERP Systems",
            description: "End-to-end Enterprise Resource Planning solutions that streamline your operations. We develop ERP systems that tie together key business functions – like inventory, accounting, and HR – into one cohesive platform for better data visibility and efficiency.",
            imageUrl: "/assets/Services/erpSystem.jpg",
            url: "/service/erp-systems",
            icon: Database
        },
        {
            _id: "static-6",
            title: "SaaS Platforms",
            description: "Scalable Software-as-a-Service applications ready for the cloud. We build multi-tenant SaaS platforms from the ground up, handling subscription management, security, and performance, so you can serve users globally with confidence.",
            imageUrl: "/assets/Services/SaasSystem.png",
            url: "/service/saas-platforms",
            icon: Cloud
        },
        {
            _id: "static-7",
            title: "Blockchain Applications",
            description: "Next-generation software leveraging blockchain technology for security and transparency. Our team develops decentralized apps (DApps), smart contracts, and blockchain integrations that bring innovation to industries like finance, supply chain, and more.",
            imageUrl: "/assets/Services/BlockChainSystem.jpg",
            url: "/service/blockchain-applications",
            icon: Network
        }
    ];

    const values = [
        {
            id: 1,
            icon: Zap,
            title: "Innovation",
            description: "We push boundaries with creative thinking and the latest tech."
        },
        {
            id: 2,
            icon: Award,
            title: "Quality",
            description: "Every project is tested, polished, and held to the highest standards."
        },
        {
            id: 3,
            icon: TrendingUp,
            title: "Scalability",
            description: "We build with tomorrow in mind, so you're ready for what's next."
        },
        {
            id: 4,
            icon: Target,
            title: "Client Success",
            description: "Your goals drive us. Your wins are our wins."
        }
    ];

    // Define the desired order for services
    const serviceOrder = [
        'Web Development',
        'Mobile App Development',
        'Desktop Software Development',
        'CRM Solutions',
        'ERP Systems',
        'SaaS Platforms',
        'Blockchain Applications'
    ];

    // Get services from API response or use static fallback
    const apiServices = serviceData?.data?.items || [];
    
    // Sort API services to match desired order, reverse to fix the order issue
    const sortedApiServices = [...apiServices].reverse().sort((a: any, b: any) => {
        const indexA = serviceOrder.indexOf(a.title);
        const indexB = serviceOrder.indexOf(b.title);
        // If service not found in order, push to end
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });

    const services = sortedApiServices.length > 0 ? sortedApiServices : staticServices;

    // Helper function to convert HTTP to HTTPS for Cloudinary URLs and handle heroImage/imageUrl
    const getSecureImageUrl = (service: any) => {
        // Handle both heroImage (from API) and imageUrl (from static)
        const url = service.heroImage || service.imageUrl || '';
        if (url && url.startsWith('http://')) {
            return url.replace('http://', 'https://');
        }
        return url;
    };

    return (
        <div className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-40" />
            
            <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-medium text-[#13a87c]">
                            Our Services
                        </span>
                    </div>
                <Heading headOne='Our' headTwo='Top Notch' headThree='Services' />
                </motion.div>

                {/* Tailored Tech Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Tailored Tech, Built Around <span className="text-[#13a87c]">You</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                        Whether you&apos;re a solo founder with a big idea or a growing enterprise looking to scale, 
                        we tailor every project to fit your needs, your pace, and your vision. Our approach is always 
                        collaborative, transparent, and user-first—because we don&apos;t just build for businesses, 
                        we build for people.
                    </p>

                    {/* What We Value */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Value:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center flex-shrink-0">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
            </div>
                </motion.div>

                {/* What We Do Best Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        💡 What We Do <span className="text-[#13a87c]">Best</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to transform your vision into reality
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div data-aos="fade-up" className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-12">
                    {services.map((service: ServiceType | any, index: number) => {
                        // Construct the URL if it doesn't exist (for API services)
                        const serviceUrl = service.url || `/service/${service.slug}`;
                        
                        return (
                            <motion.div
                                key={service._id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                    <ServiceCard
                        title={service.title}
                        tagline={service.description || 'No description'}
                        imageUrl={getSecureImageUrl(service)}
                        url={serviceUrl}
                        themeFlag={false}
                        onGetQuote={() => setContactPopupOpen(true)}
                    />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-br from-[#dcf3ec] to-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and turn your ideas into powerful digital solutions
                        </p>
                        <button
                            onClick={() => setContactPopupOpen(true)}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            Get Started Today
                            <Zap className="w-5 h-5" />
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
}
