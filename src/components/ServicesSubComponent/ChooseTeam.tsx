"use client";

import { useState } from "react";
import { Box, Lock, Sparkles, Clock } from "lucide-react";
import ContactPopup from "@/common/ContactPopup";

export function ChooseTeam() {
    const [contactPopupOpen, setContactPopupOpen] = useState(false);
    const [selectedEngagementType, setSelectedEngagementType] = useState<string | null>(null);

    const teamOptions = [
        {
            icon: Box,
            title: "Project-Based",
            description: "Get a complete solution tailored to your specific project needs.",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: Clock,
            title: "Hourly/Daily Basis",
            description: "Hire skilled developers on an hourly or daily basis as per your requirements.",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            icon: Lock,
            title: "Dedicated Team",
            description: "Build a reliable team to work exclusively on your project.",
            gradient: "from-green-500 to-green-600"
        },
        {
            icon: Sparkles,
            title: "Custom Solutions",
            description: "Get tailored features and functionalities designed for your specific needs.",
            gradient: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="relative w-full bg-white py-20">
            <div className="w-full px-4 sm:px-6 lg:px-28">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-semibold text-[#13a87c]">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Choose Your{" "}
                        <span className="text-[#13a87c]">Team</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select the perfect collaboration model that fits your needs
                    </p>
        </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {teamOptions.map((option, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative cursor-pointer"
                            onClick={() => {
                                setSelectedEngagementType(option.title);
                                setContactPopupOpen(true);
                            }}
                        >
                            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#13a87c]/20 overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-[#13a87c]/5 group-hover:to-[#18CB96]/5 transition-all duration-300" />
                                
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <option.icon className="w-7 h-7 text-white" />
                        </div>

                                                                        {/* Title */}
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#13a87c] transition-colors">
                                        {option.title}
                            </h3>

                                    {/* Description */}
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {option.description}
                                    </p>
                                 </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13a87c] to-[#18CB96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => {
                    setContactPopupOpen(false);
                    setSelectedEngagementType(null);
                }}
                preselectedEngagementType={selectedEngagementType}
            />
        </section>
    );
}
