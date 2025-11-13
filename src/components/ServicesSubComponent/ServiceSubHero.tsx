"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Spotlight } from '../ui/spotlight-new'
import { cn } from "@/lib/utils";
import Button from '@/common/Button';
import ContactPopup from '@/common/ContactPopup';

interface ServiceSubHeroProps {
    service?: {
        title?: string;
        description?: string;
        heroImage?: string;
    };
}

function ServiceSubHero({ service }: ServiceSubHeroProps) {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const title = service?.title || "Our Services";
    const description = service?.description || "Transform your business with our exceptional services.";
    const image = service?.heroImage || "/assets/Services/web_development.webp";

    return (
        <section className="relative w-full bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
            <div className="w-full py-16 sm:py-20 lg:py-8">
                {/* Grid pattern background */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full top-0",
                        "bg-[size:60px_60px]",
                        "bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)]",
                        "opacity-40 z-[1]"
                    )}
                />

                {/* Spotlight positioned absolutely */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <Spotlight />
                </div>

                <div className="w-full relative z-10  px-4 sm:px-6 lg:px-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center min-h-[80vh]">
                        {/* Left side - Content */}
                        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                            {/* Service Category Badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-[#13a87c] bg-[#13a87c]/10 backdrop-blur-sm">
                                <span className="text-sm font-semibold text-[#13a87c] tracking-wide">
                                    Our Services
                                </span>
                            </div>

                            {/* Service Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                                {title.split(' ').map((word, index) => {
                                    const isLastWord = index === title.split(' ').length - 1;
                                    const isKeyword = ['Development', 'Design', 'Solutions', 'Services'].includes(word);

                                    if (isLastWord || isKeyword) {
                                        return (
                                            <span key={index} className="text-[#13a87c]">
                                                {word}{' '}
                                            </span>
                                        );
                                    }
                                    return word + ' ';
                                })}
                            </h1>

                            {/* Description */}
                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                {description}
                            </p>

                            {/* CTA button */}
                            <div className="flex justify-center lg:justify-start pt-2">
                                <Button onClick={() => setContactPopupOpen(true)} withArrow variant="light">
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="relative order-1 lg:order-2 pr-0 lg:pr-4">
                            <div className="relative w-full">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#13a87c]/10 to-[#18CB96]/20 p-2">
                                    <div style={{ aspectRatio: '16/10' }} className="relative w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 800px"
                                            priority={true}
                                        />
                                    </div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Enhanced decorative elements */}
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#13a87c]/20 to-[#18CB96]/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#18CB96]/20 to-[#13a87c]/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 -right-4 w-24 h-24 bg-gradient-to-l from-[#13a87c]/15 to-transparent rounded-full blur-2xl" />
                            </div>
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
}

export default ServiceSubHero;