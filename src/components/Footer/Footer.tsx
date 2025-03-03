"use client"
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                            Logo here
                        </Link>
                        <p className="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                        <div className=" sm:mb-6 mt-8 sm:flex  inline-block ">
                            <div className="relative rounded-full px-4 py-2 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                                <Link href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac" className="relative z-10 text-white">
                                    Get A Quote <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Company Info */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Company Info</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Features</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">About</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Careers</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Resources</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Document</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">API</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Resources</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Legal */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Legal</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Terms of Service</Link>
                            </li>
                            <li className="mb-6">
                                <Link href="javascript:;" className="text-white hover:text-gray-300">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-white">
                            © <Link href="https://pagedone.io/" className="hover:underline"></Link> 2025 DeveloperTag, All rights reserved.
                        </span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-white flex justify-center items-center ">
                                <FaFacebook size={22} color="black" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-white flex justify-center items-center ">
                                <FaYoutube size={22} color="black" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-white flex justify-center items-center ">
                                <FaLinkedin size={22} color="black" />
                            </Link>
                            <Link href="javascript:;" className="w-9 h-9 rounded-full bg-white flex justify-center items-center ">
                                <FaInstagram size={22} color="black" />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
