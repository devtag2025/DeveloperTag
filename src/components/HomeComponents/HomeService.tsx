'use client'
import React, { useState } from "react";
import { ServiceCard } from "../ServiceCompoent/ServiceCard";
import Heading from "@/common/Heading";
import { useService } from "@/context/contextStore";
import { Service } from "@/config/ServicesApi";
import ServicePopup from "@/common/ServicePopup";

export function HomeService() {
    const serviceData = useService();
    const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);
    // Handle loading state
    if (!serviceData) {
        return (
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 my-12 bg-[#dcf3ec] rounded-[3rem]">
                <div className="flex flex-col items-center text-center">
                    <Heading headOne='Our' headTwo='Top Notch' headThree='Services' />
                    <div className="text-center py-8">Loading services...</div>
                </div>
            </div>
        );
    }

    // Get services from API response
    const services = serviceData?.data?.items || [];

    // DEBUG: Log the data to see what you're getting
    console.log("ServiceData:", serviceData);
    console.log("Services array:", services);
    console.log("Services length:", services.length);

    // Log each service to see the structure
    services.forEach((service: Service, index: number) => {
        console.log(`Service ${index}:`, service);
        console.log(`- Title: "${service.title}"`);
        console.log(`- Description: "${service.description}"`);
        console.log(`- ImageUrl: "${service.imageUrl}"`);
        console.log(`- Has description: ${!!service.description}`);
    });

    // Helper function to convert HTTP to HTTPS for Cloudinary URLs
    const getSecureImageUrl = (url: string) => {
        if (url && url.startsWith('http://')) {
            return url.replace('http://', 'https://');
        }
        return url;
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 my-12 bg-[#dcf3ec] rounded-[3rem]">
            <div className="flex flex-col items-center text-center">
                <Heading headOne='Our' headTwo='Top Notch' headThree='Services' />
            </div>



            <div data-aos="fade-up" className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {services.map((service: Service, index: number) => (
                    // REMOVED the condition - render all services
                    <ServiceCard
                        key={service._id || index}
                        title={service.title}
                        tagline={service.description || 'No description'}
                        imageUrl={getSecureImageUrl(service?.imageUrl || '')}
                        themeFlag={false}
                        onGetQuote={() => setSelectedServiceTitle(service.title)}
                    />
                ))}
            </div>

            {selectedServiceTitle && (
                <ServicePopup
                    onClose={() => setSelectedServiceTitle(null)}
                    serviceTitle={selectedServiceTitle}
                />
            )}
        </div>
    );
}