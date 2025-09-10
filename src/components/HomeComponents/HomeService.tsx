import React from "react";
import { allServices } from "@/db/ServiceData";
import { ServiceCard } from "../ServiceCompoent/ServiceCard";
import Heading from "@/common/Heading";



export function HomeService() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 my-12 bg-[#dcf3ec] rounded-[3rem]">
            <div className="flex flex-col items-center text-center">

                {/* Large Heading */}
                <Heading headOne='Our' headTwo='Top Notch' headThree='Services' />


            </div>

            <div data-aos="fade-up" className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {allServices.map((project, index) => (
                    project.img && (
                        <ServiceCard
                            key={index}
                            title={project.title}
                            tagline={project.tagline}
                            imageUrl={project.img}
                            themeFlag={false}
                        />
                    )
                ))}


            </div>
        </div>
    );
}

