"use client";
import { useState, useEffect } from 'react';
import { getServices, Service } from '@/config/ServicesApi';

interface ServiceNavigationItem {
    name: string;
    href: string;
}

export const useServicesForNavigation = () => {
    const [services, setServices] = useState<ServiceNavigationItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setIsLoading(true);
                setError(null);
                // Fetch all services with a high limit
                const response = await getServices({ limit: 100 });
                
                if (response.success && response.data?.items) {
                    // Map services to navigation items
                    const navigationItems: ServiceNavigationItem[] = response.data.items.map((service: Service) => ({
                        name: service.title,
                        href: `/service/${service.slug}`
                    }));
                    setServices(navigationItems);
                } else {
                    setError('Failed to fetch services');
                }
            } catch (err) {
                console.error('Error fetching services for navigation:', err);
                setError(err instanceof Error ? err.message : 'Failed to load services');
                // Set empty array on error - components can handle fallback
                setServices([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchServices();
    }, []);

    return { services, isLoading, error };
};

