"use client"
import ShimmerButton from '@/common/ShimmerButton';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import ContactPopup from '@/common/ContactPopup';

function Footer() {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-12 max-sm:max-w-sm max-sm:mx-auto">
                    <div className="col-span-full mb-6 lg:col-span-2 lg:mb-0">
                        <Link href="/" className="flex justify-center lg:justify-start mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">DT</span>
                                </div>
                                <span className="text-2xl font-bold text-gray-900">DeveloperTag</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-600 lg:max-w-xs text-center lg:text-left mb-6 leading-relaxed">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <ShimmerButton btnText={"Get A Quote"} onClick={() => setContactPopupOpen(true)} />
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-lg text-gray-900 font-semibold mb-6">Company</h4>
                        <ul className="text-sm space-y-4">
                            <li>
                                <Link href="/about-us" className="text-gray-600 hover:text-[#13a87c] transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-gray-600 hover:text-[#13a87c] transition-colors">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-600 hover:text-[#13a87c] transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-gray-600 hover:text-[#13a87c] transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-lg text-gray-900 font-semibold mb-6">Services</h4>
                        <ul className="text-sm space-y-4">
                            <li>
                                <Link href="/service/web-development" className="text-gray-600 hover:text-[#13a87c] transition-colors">Web Development</Link>
                            </li>
                            <li>
                                <Link href="/service/app-development" className="text-gray-600 hover:text-[#13a87c] transition-colors">Mobile App Development</Link>
                            </li>
                            <li>
                                <Link href="/service/desktop-development" className="text-gray-600 hover:text-[#13a87c] transition-colors">Desktop Software Development</Link>
                            </li>
                            <li>
                                <Link href="/service/crm-solutions" className="text-gray-600 hover:text-[#13a87c] transition-colors">CRM Solutions</Link>
                            </li>
                            <li>
                                <Link href="/service/erp-systems" className="text-gray-600 hover:text-[#13a87c] transition-colors">ERP Systems</Link>
                            </li>
                            <li>
                                <Link href="/service/saas-platforms" className="text-gray-600 hover:text-[#13a87c] transition-colors">SaaS Platforms</Link>
                            </li>
                            <li>
                                <Link href="/service/blockchain-applications" className="text-gray-600 hover:text-[#13a87c] transition-colors">Blockchain Applications</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    {/* <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-lg text-gray-900 font-semibold mb-6">Resources</h4>
                        <ul className="text-sm space-y-4">
                            <li>
                                <Link href="/documentation" className="text-gray-600 hover:text-[#13a87c] transition-colors">Documentation</Link>
                            </li>
                            <li>
                                <Link href="/api" className="text-gray-600 hover:text-[#13a87c] transition-colors">API</Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-gray-600 hover:text-[#13a87c] transition-colors">Support</Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Legal */}
                    <div className="lg:mx-auto text-center lg:text-left">
                        <h4 className="text-lg text-gray-900 font-semibold mb-6">Legal</h4>
                        <ul className="text-sm space-y-4">
                            <li>
                                <Link href="/terms-of-service" className="text-gray-600 hover:text-[#13a87c] transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-[#13a87c] transition-colors">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row space-y-4 lg:space-y-0">
                        <span className="text-sm text-gray-600">
                            © 2025 DeveloperTag, All rights reserved.
                        </span>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/company/developertag/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#13a87c] flex justify-center items-center hover:bg-[#0f8a6b] transition-colors">
                                <FaLinkedin size={18} color="white" />
                            </Link>
                            <Link href="https://www.instagram.com/developer_tag/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#13a87c] flex justify-center items-center hover:bg-[#0f8a6b] transition-colors">
                                <FaInstagram size={18} color="white" />
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