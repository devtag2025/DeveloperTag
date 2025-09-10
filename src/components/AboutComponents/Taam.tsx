'use client'
import React from 'react'
import Image from 'next/image'
import Heading from '@/common/Heading';

interface TeamMember {
    id: number;
    name: string;
    title: string;
    img: string;
}

const teamRow1: TeamMember[] = [
    {
        id: 1,
        name: "Alex Johnson",
        title: "Lead Full-Stack Developer",
        img: "/team.png" // Replace with actual image paths
    },
    {
        id: 2,
        name: "Sarah Chen",
        title: "Senior Frontend Developer",
        img: "/team.png"
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        title: "Creative Director",
        img: "/team.png"
    },
    {
        id: 4,
        name: "Emily Park",
        title: "Video Production Specialist",
        img: "/team.png"
    },
    {
        id: 5,
        name: "David Thompson",
        title: "Backend Developer",
        img: "/team.png"
    }
];

const teamRow2: TeamMember[] = [
    {
        id: 6,
        name: "Lisa Wang",
        title: "UI/UX Designer",
        img: "/team.png"
    },
    {
        id: 7,
        name: "James Anderson",
        title: "DevOps Engineer",
        img: "/team.png"
    },
    {
        id: 8,
        name: "Maria Garcia",
        title: "Graphic Designer",
        img: "/team.png"
    },
    {
        id: 9,
        name: "Robert Kim",
        title: "Mobile Developer",
        img: "/team.png"
    },
    {
        id: 10,
        name: "Sophie Miller",
        title: "Project Manager",
        img: "/team.png"
    }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 max-w-sm h-96 mx-4 min-w-[350px]">
            <Image
                src={member.img}
                alt={member.name}
                fill
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-800/20"></div>



            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                {member.name}
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {member.title}
            </div>
        </article>
    );
};

const Team = () => {
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
                    <Heading
                        headOne="Our Dynamic"
                        headTwo="Team Members Who"
                        headThree="Drive Innovation"
                    />
                </div>

                {/* Team Member Rows */}
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
                                    {teamRow1.map((member) => (
                                        <TeamMemberCard key={`${i}-${member.id}`} member={member} />
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
                                    {teamRow2.map((member) => (
                                        <TeamMemberCard key={`${i}-${member.id}`} member={member} />
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

export default Team