"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [testimonialData, setTestimonialData] = useState(null);
    const [portfolioData, setPortfolioData] = useState(null);

    const fetchData = async () => {
        try {
            // Fetching testimonial data
            const testimonialResponse = await axios.get('http://localhost:8000/api/v1/testimonials/all-testimonial');
            setTestimonialData(testimonialResponse.data);
            console.log("testimonial data is --> ", testimonialResponse.data);

            // Fetching portfolio data (Placeholder URL, change to actual portfolio endpoint later)
            const portfolioResponse = await axios.get('http://localhost:8000/api/v1/portfolio/all-portfolio');
            setPortfolioData(portfolioResponse.data);
            console.log("portfolio data is --> ", portfolioResponse.data);

        } catch (error) {
            console.error('Error fetching data with axios:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ testimonialData, portfolioData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to use the testimonial data context
export const useTestimonial = () => {
    const context = useContext(DataContext);
    console.log("Context testimonial :", context)
    if (!context) {
        throw new Error('useTestimonial must be used within a DataProvider');
    }
    return context.testimonialData;
};

// Custom hook to use the portfolio data context
export const usePortfolio = () => {
    const context = useContext(DataContext);
    console.log("POrtfolio testimonial :", context)
    if (!context) {
        throw new Error('usePortfolio must be used within a DataProvider');
    }
    return context.portfolioData;
};
