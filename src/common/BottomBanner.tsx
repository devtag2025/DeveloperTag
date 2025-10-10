"use client"
import Image from 'next/image'
import { useState } from 'react'
import ContactPopup from './ContactPopup'

const BottomBanner = () => {
    const [contactPopupOpen, setContactPopupOpen] = useState(false)
    return (
        <section className="relative w-full bg-[var(--background)] !py-16 md:!py-20 flex flex-col items-center">
            {/* Centered container */}
            <div className="w-full max-w-7xl mx-auto !px-4 md:!px-6 lg:!px-8">
                {/* Main content container with background */}
                <div className="w-full features-gradient !rounded-[20px] md:rounded-3xl !px-6 !py-4 md:!px-10 lg:!px-12 md:!py-14 md:!h-[436px]">
                    <div className="flex h-full flex-col md:flex-row items-center justify-center md:justify-between !gap-8">
                        {/* Left Side - AI Logo/Icon */}
                        <div className="flex-shrink-0 flex items-center justify-center max-w-full">
                            <Image
                                src="/assets/logo.png"
                                alt="Company Logo"
                                width={300}
                                height={300}
                                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain max-w-full"
                            />
                        </div>
                        {/* Right Side - Content */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:!ml-8">
                            {/* Small subtitle */}
                            <p className="text-[var(--foreground)]/70 !font-normal !text-2xl !leading-8 md:!text-4xl md:!leading-12 tracking-normal !mb-3 md:!mb-4">
                                Developer Tag
                            </p>
                            {/* Main heading */}
                            <h2 className="text-3xl md:text-4xl  leading-tight font-medium text-[var(--foreground)] !mb-4 md:!mb-6">
                                <span className="text-[var(--appTheme)] font-bold">
                                    Design, Web & App Development.
                                </span>
                            </h2>
                            {/* Description */}
                            <p className="text-[var(--foreground)]/80 text-sm md:text-base leading-relaxed font-medium !mb-6 md:!mb-8 max-w-prose">
                                We build modern websites, mobile apps, and scalable digital products
                                that help brands launch faster and grow with confidence.
                            </p>
                            {/* CTA Button */}
                            <button 
                                onClick={() => setContactPopupOpen(true)}
                                className="bg-[var(--appTheme)] text-white !w-52 !rounded-full font-bold text-sm md:text-base !leading-6 flex items-center justify-center !gap-2.5 shadow-lg hover:shadow-xl transition-shadow !py-3.5 !px-6 cursor-pointer hover:scale-105 transform transition-all duration-200"
                            >
                                Get a Quote
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </section>
    );
};
export default BottomBanner;