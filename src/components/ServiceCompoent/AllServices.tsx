'use client'
import Heading from '@/common/Heading'
import React, { useState } from 'react'
import { ServiceCard } from './ServiceCard'
import { useService } from '@/context/contextStore'
import { Service } from '@/config/ServicesApi'
import ContactPopup from '@/common/ContactPopup'

function AllServices() {
    const serviceData = useService();
    const [contactPopupOpen, setContactPopupOpen] = useState(false)

    // Handle loading state
    if (!serviceData) {
        return (
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                <Heading headOne="What " headTwo="We Do " headThree="Best" />
                <div className="text-center py-8">Loading services...</div>
            </div>
        );
    }

    // Get services from API response
    const services = serviceData?.data?.items || [];

    // DEBUG: Log the data to see what you're getting
    console.log("AllServices - ServiceData:", serviceData);
    console.log("AllServices - Services array:", services);
    console.log("AllServices - Services length:", services.length);

    // Log each service to see the structure
    services.forEach((service: Service, index: number) => {
        console.log(`AllServices - Service ${index}:`, service);
        console.log(`- Title: "${service.title}"`);
        console.log(`- Description: "${service.description}"`);
        console.log(`- ImageUrl: "${service.imageUrl}"`);
        console.log(`- Has description: ${!!service.description}`);
    });

    // If no services, show message
    if (services.length === 0) {
        return (
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                <Heading headOne="What " headTwo="We Do " headThree="Best" />
                <div className="text-center py-8">No services available.</div>
            </div>
        );
    }

    // Helper function to convert HTTP to HTTPS for Cloudinary URLs
    const getSecureImageUrl = (url: string) => {
        if (url && url.startsWith('http://')) {
            return url.replace('http://', 'https://');
        }
        return url;
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading headOne="What " headTwo="We Do " headThree="Best" />


            <div data-aos="fade-up" className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((service: Service, index: number) => (
                    // REMOVED the condition - render all services
                    <ServiceCard
                        key={service._id || index}
                        title={service.title}
                        tagline={service.description || 'No description'}
                        imageUrl={getSecureImageUrl(service?.imageUrl || '')}
                        themeFlag={true}
                        onGetQuote={() => setContactPopupOpen(true)}
                    />
                ))}
            </div>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </div>
    )
}

export default AllServices