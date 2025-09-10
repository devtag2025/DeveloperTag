'use client'
import React from 'react'
import Heading from '@/common/Heading';

interface Testimonial {
    id: number;
    text: string;
    name: string;
    title: string;
}

const testimonialsRow1: Testimonial[] = [
    {
        id: 1,
        text: "Developer Tag built our entire e-commerce website from scratch using React and Next.js. The performance is incredible - pages load in under 2 seconds and our conversion rate increased by 35%. Their web development skills are top-notch!",
        name: "Sarah Johnson",
        title: "CEO, Digital Commerce Solutions"
    },
    {
        id: 2,
        text: "The custom web application Developer Tag developed for our business transformed our operations. Their full-stack development expertise with Node.js backend and modern frontend frameworks exceeded all expectations.",
        name: "Michael Chen",
        title: "Founder, Tech Innovations Inc"
    },
    {
        id: 3,
        text: "Developer Tag's graphic design team created our complete brand identity - logo, business cards, social media templates, and website graphics. The creative quality and attention to detail is absolutely outstanding.",
        name: "Emily Rodriguez",
        title: "Marketing Director, Creative Studios"
    },
    {
        id: 4,
        text: "Their video editing work is professional Hollywood-level quality. They edited our product launch video, adding stunning effects and transitions that made our brand look premium. Social media engagement tripled!",
        name: "David Thompson",
        title: "Content Manager, Media Productions"
    },
    {
        id: 5,
        text: "Developer Tag redesigned our entire website with modern UI/UX principles. The user experience improved dramatically, and our bounce rate dropped by 60%. Their web development and design skills are exceptional.",
        name: "Lisa Park",
        title: "Business Development, Innovation Hub"
    }
];

const testimonialsRow2: Testimonial[] = [
    {
        id: 6,
        text: "Developer Tag developed our corporate website using modern web technologies. The responsive design works perfectly on all devices, and their attention to detail in both frontend and backend development is remarkable.",
        name: "Robert Williams",
        title: "Technical Lead, Software Solutions"
    },
    {
        id: 7,
        text: "Their graphic design portfolio is incredible! They created stunning posters, banners, and social media graphics for our marketing campaigns. The visual impact helped us stand out in a crowded market.",
        name: "Amanda Foster",
        title: "Operations Manager, Tech Ventures"
    },
    {
        id: 8,
        text: "Developer Tag's video editing transformed our raw footage into cinematic content. They added professional color grading, motion graphics, and sound design that elevated our brand to premium status.",
        name: "James Anderson",
        title: "Product Owner, Digital Creations"
    },
    {
        id: 9,
        text: "They built our web application with perfect architecture and clean code. The database design, API development, and frontend integration were all executed flawlessly. Highly skilled developers!",
        name: "Maria Garcia",
        title: "CTO, Innovation Labs"
    },
    {
        id: 10,
        text: "Developer Tag handled our complete digital presence - website development, graphic design for branding, and video content creation. Their multidisciplinary team delivered cohesive, high-quality results across all services.",
        name: "Thomas Brown",
        title: "Managing Director, Enterprise Solutions"
    }
];

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

    return (
        <div
            className="section-spacing  my-4"
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
            transform: translateX(calc(-382px * 5)); /* -(350px + 32px margin) per card × 5 cards */
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(calc(-382px * 5)); /* Start from left */
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
          width: calc(382px * 15); /* 382px per card × 5 cards × 3 sets */
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
          width: calc(382px * 15); /* 382px per card × 5 cards × 3 sets */
        }
      `}</style>
        </div>
    )
}

export default Testimonials