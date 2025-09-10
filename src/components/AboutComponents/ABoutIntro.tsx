"use client";
import React from 'react';
import abt from "../../../public/pic.jpg";
import Image from 'next/image';

function AboutIntro() {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gradient-to-br from-gray-50 to-white">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" id="about">
                <div className="w-full justify-start items-center xl:gap-16 gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-12 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-10 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-6 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    {/* Enhanced heading with better typography */}
                                    <div className="relative">
                                        <h1 data-aos="fade-right" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                            What is <span className="text-transparent bg-gradient-to-r from-[#13a87c] to-[#0f8a6b] bg-clip-text">DeveloperTag?</span>
                                        </h1>

                                        {/* Subtle accent line */}
                                        <div className="hidden lg:block absolute -left-1 top-0 w-1 h-16 bg-gradient-to-b from-[#13a87c] to-transparent rounded-full"></div>
                                    </div>

                                    {/* Enhanced paragraphs with better spacing and styling */}
                                    <div className="space-y-6 mt-6">
                                        <p data-aos="fade-in" className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center">
                                            What started as a spark of ambition in 2016 became a full-blown movement by 2024.
                                            Our founder believed in two things: empowering developers and transforming the local tech landscape.
                                            That belief fueled the birth of <span className="font-semibold text-[#13a87c]">DeveloperTag</span> in July 2024—not just as a company, but as a community-driven mission.
                                        </p>
                                        <p data-aos="fade-in" className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center">
                                            That November, the journey became a shared one. A like-minded friend joined with the same passion and vision,
                                            and together, they shaped DeveloperTag into a space where talent thrives, clients come first, and innovation never stops.
                                            We&apos;re not here for the &quot;usual&quot;—we&apos;re here to <span className="font-semibold text-gray-900">make things that matter.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced stats section */}
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
                                    <div className="group w-full h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#13a87c]/30 hover:shadow-lg hover:shadow-[#13a87c]/10 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-3 inline-flex" data-aos="fade-up">
                                        <h4 className="text-[#13a87c] text-3xl font-bold leading-none group-hover:scale-105 transition-transform duration-300">10+</h4>
                                        <p className="text-gray-600 text-base font-medium">
                                            Years in Business
                                        </p>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#13a87c] to-transparent"></div>
                                    </div>
                                    <div className="group w-full h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#13a87c]/30 hover:shadow-lg hover:shadow-[#13a87c]/10 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-3 inline-flex" data-aos="fade-up" data-aos-delay="100">
                                        <h4 className="text-[#13a87c] text-3xl font-bold leading-none group-hover:scale-105 transition-transform duration-300">500+</h4>
                                        <p className="text-gray-600 text-base font-medium">
                                            Team Members
                                        </p>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#13a87c] to-transparent"></div>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
                                    <div className="group w-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#13a87c]/30 hover:shadow-lg hover:shadow-[#13a87c]/10 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-3 inline-flex" data-aos="fade-up" data-aos-delay="200">
                                        <h4 className="text-[#13a87c] text-3xl font-bold leading-none group-hover:scale-105 transition-transform duration-300">600+</h4>
                                        <p className="text-gray-600 text-base font-medium">
                                            International Clients
                                        </p>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#13a87c] to-transparent"></div>
                                    </div>
                                    <div className="group w-full h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#13a87c]/30 hover:shadow-lg hover:shadow-[#13a87c]/10 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-3 inline-flex" data-aos="fade-up" data-aos-delay="300">
                                        <h4 className="text-[#13a87c] text-3xl font-bold leading-none group-hover:scale-105 transition-transform duration-300">700+</h4>
                                        <p className="text-gray-600 text-base font-medium">
                                            Projects Completed
                                        </p>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#13a87c] to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced image section */}
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <Image
                                    className="w-full h-[28rem] sm:h-[32rem] rounded-xl object-cover"
                                    src={abt}
                                    alt="about Us image"
                                    data-aos="fade-up"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                            <Image
                                className="w-full h-[28rem] sm:h-[32rem] sm:ml-0 ml-auto rounded-xl object-cover"
                                src={abt}
                                alt="about Us image"
                                data-aos="fade-up"
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutIntro;