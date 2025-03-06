"use client"
import ShimmerButton from '@/common/ShimmerButton';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                            Logo here
                        </Link>
                        <p className="py-8 text-sm text-black lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                        <div className=" sm:mb-6 mt-8 sm:flex  inline-block ">
                            <ShimmerButton btnText={"Get A Quote"} />
                        </div>
                    </div>
                    {/* Company Info */}
                    <div className="lg:mx-auto text-left">
                        <h4 data-aos="fade-up" className="text-lg text-black font-medium mb-7">Company Info</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Features</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">About</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Careers</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div className="lg:mx-auto text-left">
                        <h4 data-aos="fade-up" className="text-lg text-black font-medium mb-7">Resources</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Document</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">API</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Resources</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Legal */}
                    <div className="lg:mx-auto text-left">
                        <h4 data-aos="fade-up" className="text-lg text-black font-medium mb-7">Legal</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Terms of Service</Link>
                            </li>
                            <li data-aos="fade-up" className="mb-6">
                                <Link href="javascript:;" className="text-black hover:text-gray-700">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-black">
                            © <Link href="https://pagedone.io/" className="hover:underline"></Link> 2025 DeveloperTag, All rights reserved.
                        </span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-[#4E15BF] flex justify-center items-center ">
                                <FaFacebook size={22} color="white" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-[#4E15BF] flex justify-center items-center ">
                                <FaYoutube size={22} color="white" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-[#4E15BF] flex justify-center items-center ">
                                <FaLinkedin size={22} color="white" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-[#4E15BF] flex justify-center items-center ">
                                <FaInstagram size={22} color="white" />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
