"use client"
import { portfolioData } from '@/db/PortfolioData';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

function PortfolioSubSection() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const project = portfolioData.find((data) => data.slug.endsWith(slug));

    // If no project is found, show a message
    if (!project) {
        return (
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 text-center text-black">
                <h1 className="text-4xl">Project Not Found</h1>
                <p className="mt-4">The project you are looking for does not exist.</p>
            </div>
        );
    }


    const { title, projectScope, techStack, previewImage, mobileDemo, adminPanelImage } = project.item;

    return (
        <div className="container  mx-auto  py-12">
            {/* Project Scope Section */}
            <div className='flex mb-32  px-4 md:px-8 lg:px-16'>
                <div >
                    <h1 data-aos="fade-right" className="my-8 text-4xl  text-black">
                        Project <span style={{ color: "#13a87c" }}>Scope</span>
                    </h1>
                    <p data-aos="fade-right" className="text-lg text-gray-800  max-w-3xl pr-16">
                        {projectScope.description}
                    </p>
                </div>

                {/* Tech Stack Section */}
                <div>
                    <h1 data-aos="fade-left" className="my-8 text-4xl text-center text-black">
                        Tech <span style={{ color: "#13a87c" }}>Stack</span>
                    </h1>
                    <div className="flex flex-col flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <span data-aos="slide-left" key={index} className="py-2 border-b-2 text-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Static Section */}
            <div>
                <h1 data-aos="fade-in" className="my-32 py-16 text-4xl text-center text-white bg-gray-900">
                    Tested By <span style={{ color: "#13a87c" }}>150k+ Concurrent Users</span> Before Deployment
                </h1>
            </div>

            {/* Preview Image */}
            {previewImage && (
                <div data-aos="fade-in" className="w-full">
                    <h1 data-aos="slide-right" className="my-16 mt-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black">
                        Customer <span style={{ color: "#13a87c" }}>App</span>
                    </h1>
                    <Image
                        src={previewImage}
                        alt={`${title} Preview`}
                        width={1920}
                        height={1080}
                        className="w-full h-auto mx-auto rounded-lg shadow-lg"
                    />
                </div>
            )}


            {/* Mobile & App View */}
            {mobileDemo && (
                <div data-aos="fade-in">
                    <h1 data-aos="slide-left" className="my-16  text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black">
                        Mobile & <span style={{ color: "#13a87c" }}>App</span> View
                    </h1>
                    <Image src={mobileDemo} alt={`${title} Mobile Demo`} width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
                </div>
            )}

            {/* Admin Panel View */}
            {adminPanelImage && (
                <div data-aos="fade-in">
                    <h1 data-aos="slide-right" className="my-16 mt-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black">
                        Admin <span style={{ color: "#13a87c" }}>Panel</span> View
                    </h1>
                    <Image src={adminPanelImage} alt={`${title} Admin Panel`} width={800} height={600}
                        className=" mx-auto rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    );
}

export default PortfolioSubSection;
