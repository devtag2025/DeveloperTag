"use client"
import React, { useState } from 'react';
import "./FAQ.css";
import Heading from '@/common/Heading';
import {
    ShoppingBag, Heart, Plane, Utensils, Phone, GraduationCap, Clock, Gamepad, Rocket, Banknote,
    Minus, Plus
} from 'lucide-react';

function Industries() {

    const industriesData = [
        {
            id: 0,
            name: "Ecommerce",
            icon: ShoppingBag,
            content: "We create powerful ecommerce solutions that drive sales and enhance customer experiences. Our services include responsive online stores, secure payment gateways, inventory management systems, and personalized shopping experiences. We focus on user-friendly interfaces, mobile optimization, and conversion-focused designs that turn visitors into loyal customers."
        },
        {
            id: 1,
            name: "Healthcare",
            icon: Heart,
            content: "We build innovative healthcare solutions that improve patient care and streamline medical operations. Our services include telemedicine platforms, electronic health records (EHR) systems, appointment scheduling solutions, and AI-driven diagnostics. We prioritize security, compliance, and seamless user experiences."
        },
        {
            id: 2,
            name: "Food",
            icon: Utensils,
            content: "We develop food industry solutions that enhance restaurant operations and food delivery services. From online ordering systems and delivery tracking to restaurant management software, we provide seamless digital experiences that help businesses grow and serve their customers efficiently."
        },
        {
            id: 3,
            name: "Travel and Tourism",
            icon: Plane,
            content: "Our travel and tourism solutions empower agencies and travelers with advanced booking platforms, itinerary planners, hotel management systems, and real-time travel updates. We create user-friendly and immersive experiences that make trip planning hassle-free."
        },
        {
            id: 4,
            name: "On-Demand Services",
            icon: Clock,
            content: "We design and develop on-demand service platforms that connect customers with businesses instantly. Whether it’s ride-hailing, home services, or freelance marketplaces, our solutions ensure smooth operations with real-time tracking, payment integration, and user-friendly interfaces."
        },
        {
            id: 5,
            name: "Startup",
            icon: Rocket,
            content: "We help startups bring their ideas to life with scalable digital solutions. From MVP development and branding to funding support and market research, we provide end-to-end services that turn visions into successful businesses."
        },
        {
            id: 6,
            name: "Gaming",
            icon: Gamepad,
            content: "We create engaging and high-performance gaming solutions, including mobile, web, and console games. Our services cover game development, UI/UX design, multiplayer integration, and monetization strategies to maximize user engagement and revenue."
        },
        {
            id: 7,
            name: "Education",
            icon: GraduationCap,
            content: "We build modern e-learning platforms that enhance education through technology. Our services include LMS development, virtual classrooms, interactive courses, and AI-powered learning experiences, making education accessible and engaging for all."
        },
        {
            id: 8,
            name: "Fintech",
            icon: Banknote,
            content: "We develop secure and innovative fintech solutions, including mobile banking apps, digital wallets, cryptocurrency platforms, and financial management tools. Our solutions ensure data security, seamless transactions, and compliance with financial regulations."
        }
    ];



    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-16 py-12'>
            <Heading btnText={"INDUSTRIES"} headOne='Industries' headTwo='we' headThree='serve' />
            <div className="accordionCont">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Accordion Item 1 - Ecommerce */}
                        {industriesData.map((industry, index) => (
                            <div data-aos="slide-up" key={industry.id} className="accordion-item">
                                <button
                                    className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-[#4E15BF] w-full transition duration-500 hover:text-[#4E15BF]"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="flex items-center">
                                        <industry.icon className="mr-3 text-[#4E15BF]" size={24} />
                                        <h5 className='text-[#4E15BF]'>{industry.name}</h5>
                                    </div>
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-[#4E15BF] transition duration-500 group-hover:text-[#4E15BF]" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-[#4E15BF] transition duration-500 group-hover:text-[#4E15BF]" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div
                                        className="accordion-content w-full overflow-hidden pr-4 mt-2"
                                        aria-labelledby={`accordion-heading-${index}`}
                                    >
                                        <p className="text-base text-black font-normal leading-6">
                                            {industry.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Industries;