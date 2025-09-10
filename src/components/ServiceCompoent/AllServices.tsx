import Heading from '@/common/Heading'
import React from 'react'
import { ServiceCard } from './ServiceCard'
import { allServices } from '@/db/ServiceData'



function AllServices() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading btnText="OUR ERVICES" headOne="What " headTwo="We Do "
                headThree="Best" />

            <div data-aos="fade-up" className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allServices.map((project, index) => (
                    project.img && (
                        <ServiceCard
                            key={index}
                            title={project.title}
                            tagline={project.tagline}
                            imageUrl={project.img}
                            themeFlag={true}
                        />
                    )
                ))}


            </div>

        </div>
    )
}

export default AllServices