"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getTestimonials } from '../config/TestimonialApi';
import { getPortfolios } from '../config/PortfolioApi';
import { getServices } from '../config/ServicesApi';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [testimonialData, setTestimonialData] = useState(null);
    const [portfolioData, setPortfolioData] = useState(null);
    const [serviceData, setServiceData] = useState(null);

    const fetchData = async () => {
        try {
            // Fetching testimonial data
            const testimonialResponse = await getTestimonials();
            setTestimonialData(testimonialResponse);
            console.log("Raw testimonial API response:", testimonialResponse);

            // Fetching portfolio data
            const portfolioResponse = await getPortfolios();
            setPortfolioData(portfolioResponse);
            console.log("Portfolio data is --> ", portfolioResponse);

            // Fetching service data
            const serviceResponse = await getServices();
            setServiceData(serviceResponse);
            console.log("Service data is --> ", serviceResponse);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ testimonialData, portfolioData, serviceData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the testimonial data context
export const useTestimonial = () => {
    const context = useContext(DataContext);
    console.log("Context testimonial:", context);
    if (!context) {
        throw new Error('useTestimonial must be used within a DataProvider');
    }
    return context.testimonialData;
};

// Custom hook to use the portfolio data context
export const usePortfolio = () => {
    const context = useContext(DataContext);
    console.log("Portfolio context:", context);
    if (!context) {
        throw new Error('usePortfolio must be used within a DataProvider');
    }
    return context.portfolioData;
};

// Custom hook to use the service data context
export const useService = () => {
    const context = useContext(DataContext);
    console.log("Service context:", context);
    if (!context) {
        throw new Error('useService must be used within a DataProvider');
    }
    return context.serviceData;
};