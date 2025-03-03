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
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 text-center text-white">
                <h1 className="text-4xl">Project Not Found</h1>
                <p className="mt-4">The project you are looking for does not exist.</p>
            </div>
        );
    }

    const { title, tagLine, projectScope, techStack, previewImage, websiteDemo, mobileDemo, adminPanelImage } = project.item;

    return (
        <div className="container  mx-auto  py-12">
            {/* Project Scope Section */}
            <div className='flex mb-32  px-4 md:px-8 lg:px-16'>
                <div >
                    <h1 className="my-8 text-4xl  text-white">
                        Project <span style={{ color: "aqua" }}>Scope</span>
                    </h1>
                    <p className="text-lg text-gray-300  max-w-3xl pr-16">
                        {projectScope.description}
                    </p>
                </div>

                {/* Tech Stack Section */}
                <div>
                    <h1 className="my-8 text-4xl text-center text-white">
                        Tech <span style={{ color: "aqua" }}>Stack</span>
                    </h1>
                    <div className="flex flex-col flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <span key={index} className="py-2 border-b-2 text-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Static Section */}
            <div>
                <h1 className="my-32 py-16 text-4xl text-center text-white bg-gray-900">
                    Tested By <span style={{ color: "aqua" }}>150k+ Concurrent Users</span> Before Deployment
                </h1>
            </div>

            {/* Preview Image */}
            {previewImage && (
                <div className="w-full">
                    <h1 className="my-16 mt-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white">
                        Customer <span style={{ color: "aqua" }}>App</span>
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
                <div >
                    <h1 className="my-16  text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white">
                        Mobile & <span style={{ color: "aqua" }}>App</span> View
                    </h1>
                    <Image src={mobileDemo} alt={`${title} Mobile Demo`} width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
                </div>
            )}

            {/* Admin Panel View */}
            {adminPanelImage && (
                <div>
                    <h1 className="my-16 mt-32 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white">
                        Admin <span style={{ color: "aqua" }}>Panel</span> View
                    </h1>
                    <Image src={adminPanelImage} alt={`${title} Admin Panel`} width={800} height={600}
                        className=" mx-auto rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    );
}

export default PortfolioSubSection;
