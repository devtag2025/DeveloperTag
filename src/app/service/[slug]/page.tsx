import React from 'react';
import ServiceSubHero from '@/components/ServicesSubComponent/ServiceSubHero';
import WhyChoose from '@/components/ServicesSubComponent/WhyChoose';
import { ChooseTeam } from '@/components/ServicesSubComponent/ChooseTeam';
import { getServiceBySlugServer } from '@/config/ServicesApi';

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    
    let service = null;
    let error = null;

    try {
        const response = await getServiceBySlugServer(slug);
        service = response.data;
    } catch (err: any) {
        console.error('Error fetching service:', err);
        error = err.message || 'Failed to load service';
    }

    if (error || !service) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600">{error || 'The service you are looking for does not exist.'}</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen antialiased bg-grid-white/[0.02]">
            <ServiceSubHero service={service} />
            <WhyChoose service={service} />
            <ChooseTeam />
        </main>
    );
}

export default ServiceDetailPage;