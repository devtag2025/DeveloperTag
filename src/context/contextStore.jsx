"use client";
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { getTestimonials } from '../config/TestimonialApi';
import { getPortfoliosGroupedByCategory } from '../config/PortfolioApi';
import { getServices } from '../config/ServicesApi';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [testimonialData, setTestimonialData] = useState(null);
    const [portfolioData, setPortfolioData] = useState(null);
    const [serviceData, setServiceData] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const [testimonialResponse, portfolioResponse, serviceResponse] = await Promise.all([
                getTestimonials(),
                getPortfoliosGroupedByCategory(),
                getServices(),
            ]);
            setTestimonialData(testimonialResponse);
            setPortfolioData(portfolioResponse);
            setServiceData(serviceResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <DataContext.Provider value={{ testimonialData, portfolioData, serviceData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useTestimonial = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useTestimonial must be used within a DataProvider');
    return context.testimonialData;
};

export const usePortfolio = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('usePortfolio must be used within a DataProvider');
    return context.portfolioData;
};

export const useService = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useService must be used within a DataProvider');
    return context.serviceData;
};