"use client"
import ShimmerButton from '@/common/ShimmerButton';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';
import ContactPopup from '@/common/ContactPopup';
import { useServicesForNavigation } from '@/hooks/useServicesForNavigation';

// Static fallback services (used if API fails or during loading)
const staticServices = [
    { name: "Web Development", href: "/service/web-development" },
    { name: "Mobile App Development", href: "/service/app-development" },
    { name: "Desktop Software Development", href: "/service/desktop-development" },
    { name: "CRM Solutions", href: "/service/crm-solutions" },
    { name: "ERP Systems", href: "/service/erp-systems" },
    { name: "SaaS Platforms", href: "/service/saas-platforms" },
    { name: "Blockchain Applications", href: "/service/blockchain-applications" },
];

function Footer() {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const { services: dynamicServices } = useServicesForNavigation();

    // Use dynamic services if available, otherwise fallback to static
    const serviceItems = useMemo(() => {
        if (dynamicServices.length > 0) {
            return dynamicServices
        }
        return staticServices
    }, [dynamicServices]);

    return (
        <footer className="w-full relative overflow-hidden bg-gradient-to-br from-[#0f8a6b] via-[#13a87c] to-[#18CB96]">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[size:64px_64px] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] opacity-60 pointer-events-none" />

            {/* Soft decorative glows for depth */}
            <div className="absolute -top-40 -left-32 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Main grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-8 py-14 max-sm:max-w-sm max-sm:mx-auto">

                    {/* Brand + contact */}
                    <div className="col-span-full mb-2 lg:col-span-2 lg:mb-0">
                        <Link href="/" className="flex justify-center lg:justify-start mb-5">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-black/10">
                                    <span className="text-[#13a87c] font-bold text-lg">DT</span>
                                </div>
                                <span className="text-2xl font-bold text-white">DeveloperTag</span>
                            </div>
                        </Link>
                        <p className="text-sm text-white/80 lg:max-w-xs text-center lg:text-left mb-6 leading-relaxed">
                            We design and build digital products that help ambitious companies grow.
                        </p>
                        <ul className="space-y-3 text-sm flex flex-col items-center lg:items-start">
                            <li className="flex items-center gap-3 text-white/90">
                                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                    <HiOutlineMail className="w-4 h-4 text-white" />
                                </span>
                                hello@developertag.com
                            </li>
                            <li className="flex items-center gap-3 text-white/90">
                                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                    <HiOutlinePhone className="w-4 h-4 text-white" />
                                </span>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-3 text-white/90">
                                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                                    <HiOutlineLocationMarker className="w-4 h-4 text-white" />
                                </span>
                                Available worldwide
                            </li>
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-sm uppercase tracking-wider text-white font-semibold mb-6">Company</h4>
                        <ul className="text-sm space-y-3.5">
                            <li>
                                <Link href="/about-us" className="text-white/75 hover:text-white transition-colors duration-200">About</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-white/75 hover:text-white transition-colors duration-200">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-white/75 hover:text-white transition-colors duration-200">Careers</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-white/75 hover:text-white transition-colors duration-200">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-sm uppercase tracking-wider text-white font-semibold mb-6">Services</h4>
                        <ul className="text-sm space-y-3.5">
                            {serviceItems.map((service) => (
                                <li key={service.href}>
                                    <Link href={service.href} className="text-white/75 hover:text-white transition-colors duration-200">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-sm uppercase tracking-wider text-white font-semibold mb-6">Legal</h4>
                        <ul className="text-sm space-y-3.5">
                            <li>
                                <Link href="/terms-of-service" className="text-white/75 hover:text-white transition-colors duration-200">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-white/75 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 border-t border-white/20">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row space-y-4 lg:space-y-0">
                        <span className="text-sm text-white/70">
                            © 2026 DeveloperTag. All rights reserved.
                        </span>
                        <div className="flex space-x-3">
                            <Link href="https://www.linkedin.com/company/developertag/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex justify-center items-center hover:bg-white hover:border-transparent transition-all duration-300 group">
                                <FaLinkedin size={16} className="text-white group-hover:text-[#13a87c] transition-colors duration-300" />
                            </Link>
                            <Link href="https://www.instagram.com/developer_tag/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex justify-center items-center hover:bg-white hover:border-transparent transition-all duration-300 group">
                                <FaInstagram size={16} className="text-white group-hover:text-[#13a87c] transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </footer>
    );
}

export default Footer;