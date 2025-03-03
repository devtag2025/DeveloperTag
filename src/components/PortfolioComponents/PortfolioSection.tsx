import Heading from '@/common/Heading'
import React from 'react'
import { PortfolioCard } from './PortfolioCard'
import { portfolioData } from '@/db/PortfolioData'


function PortfolioSection() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading btnText="OUR WORKS" headOne="Our " headTwo="Team Work "
                headThree="and Talent" />

            <div className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.map((project, index) => (
                    project.item.previewImage && (
                        <PortfolioCard
                            key={index}
                            title={project.item.title}
                            tagline={project.item.tagLine}
                            imageUrl={project.item.previewImage}
                        />
                    )
                ))}

            </div>

        </div>
    )
}

export default PortfolioSection