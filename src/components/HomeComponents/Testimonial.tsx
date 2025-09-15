'use client'
import React from 'react'
import Heading from '@/common/Heading';
import { useTestimonial } from '@/context/contextStore';

interface Testimonial {
    id: string;
    text: string;
    name: string;
    title: string;
}

// API testimonial structure based on your actual response
interface ApiTestimonial {
    _id: string;
    content: string;
    name: string;
    title: string;
    testimonialImg?: string;
    createdAt: string;
    updatedAt: string;
}

// Function to transform API testimonial to component testimonial format
const transformApiTestimonial = (apiTestimonial: ApiTestimonial): Testimonial => {
    return {
        id: apiTestimonial._id,
        text: apiTestimonial.content,
        name: apiTestimonial.name,
        title: apiTestimonial.title
    };
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-gradient-to-br from-green-100 via-white to-green-200 rounded-2xl p-6 mx-4 min-w-[350px] max-w-[350px] shadow-md">
            <div className="mb-4">
                <p className="text-gray-800 text-sm leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                </p>
            </div>
            <div className="border-t border-gray-300 pt-4">
                <h4 className="text-gray-700 font-semibold text-sm mb-1">
                    {testimonial.name}
                </h4>
                <p className="text-gray-600 text-xs">{testimonial.title}</p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonialData = useTestimonial();

    // Show loading state while data is being fetched
    if (!testimonialData) {
        return (
            <div className="section-spacing my-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="container-wrapper">
                    <div className="text-center mb-16">
                        <Heading headOne="Our service" headTwo="Clients Who Believe" headThree="In Results" />
                    </div>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-gray-500">Loading testimonials...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Extract testimonials from API response
    const apiTestimonials: ApiTestimonial[] = testimonialData?.data?.items || [];

    // Fallback testimonials in case API returns no data
    const fallbackTestimonials: ApiTestimonial[] = [
        {
            _id: "1",
            content: "Developer Tag built our entire e-commerce website from scratch using React and Next.js. The performance is incredible - pages load in under 2 seconds and our conversion rate increased by 35%. Their web development skills are top-notch!",
            name: "Sarah Johnson",
            title: "CEO, Digital Commerce Solutions",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "2",
            content: "The custom web application Developer Tag developed for our business transformed our operations. Their full-stack development expertise with Node.js backend and modern frontend frameworks exceeded all expectations.",
            name: "Michael Chen",
            title: "Founder, Tech Innovations Inc",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "3",
            content: "Developer Tag's graphic design team created our complete brand identity - logo, business cards, social media templates, and website graphics. The creative quality and attention to detail is absolutely outstanding.",
            name: "Emily Rodriguez",
            title: "Marketing Director, Creative Studios",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "4",
            content: "Their video editing work is professional Hollywood-level quality. They edited our product launch video, adding stunning effects and transitions that made our brand look premium. Social media engagement tripled!",
            name: "David Thompson",
            title: "Content Manager, Media Productions",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        },
        {
            _id: "5",
            content: "Developer Tag redesigned our entire website with modern UI/UX principles. The user experience improved dramatically, and our bounce rate dropped by 60%. Their web development and design skills are exceptional.",
            name: "Lisa Park",
            title: "Business Development, Innovation Hub",
            createdAt: "2024-01-01T00:00:00.000Z",
            updatedAt: "2024-01-01T00:00:00.000Z"
        }
    ];

    // Use API data or fallback to static testimonials
    const testimonialsToUse = apiTestimonials.length > 0 ? apiTestimonials : fallbackTestimonials;

    // Transform testimonials to component format
    const transformedTestimonials = apiTestimonials.map(transformApiTestimonial);

    // Split testimonials into two rows for the animation
    const midPoint = Math.ceil(transformedTestimonials.length / 2);
    const testimonialsRow1 = transformedTestimonials.slice(0, midPoint);
    const testimonialsRow2 = transformedTestimonials.slice(midPoint);

    return (
        <div
            className="section-spacing my-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
        >
            <div className="container-wrapper">
                {/* Header */}
                <div className="text-center mb-16">
                    <Heading headOne="Our service" headTwo="Clients Who Believe" headThree="In Results" />
                </div>

                {/* Testimonials Rows */}
                <div className="space-y-8 mb-20 overflow-x-hidden">
                    {/* First Row - Moving Left to Right */}
                    <div
                        className="relative overflow-x-hidden"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                    >
                        <div className="flex animate-slide-right will-change-transform">
                            {/* Create 3 identical sets for seamless looping */}
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex shrink-0">
                                    {testimonialsRow1.map((testimonial) => (
                                        <TestimonialCard key={`${i}-${testimonial.id}`} testimonial={testimonial} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Moving Right to Left */}
                    <div
                        className="relative overflow-hidden"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                    >
                        <div className="flex animate-slide-left will-change-transform">
                            {/* Create 3 identical sets for seamless looping */}
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex shrink-0">
                                    {testimonialsRow2.map((testimonial) => (
                                        <TestimonialCard key={`${i}-${testimonial.id}`} testimonial={testimonial} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-382px * ${testimonialsRow2.length}));
                  }
                }

                @keyframes slide-right {
                  0% {
                    transform: translateX(calc(-382px * ${testimonialsRow1.length}));
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-slide-left {
                  animation: slide-left 30s linear infinite;
                  width: calc(382px * ${testimonialsRow2.length * 3});
                }

                .animate-slide-right {
                  animation: slide-right 30s linear infinite;
                  width: calc(382px * ${testimonialsRow1.length * 3});
                }
            `}</style>
        </div>
    )
}

export default Testimonials